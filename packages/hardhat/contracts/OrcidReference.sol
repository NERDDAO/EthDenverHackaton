// SPDX-License-Identifier: MIT

pragma solidity 0.8.10;

import {IFollowModule} from './interfaces/IFollowModule.sol';
import {Errors} from '../libraries/Errors.sol';
import {ModuleBase} from './ModuleBase.sol';
import {FollowValidatorFollowModuleBase} from './FollowValidatorFollowModuleBase.sol';
import {IERC721} from '@openzeppelin/contracts/token/ERC721/IERC721.sol';
import {FunctionsConsumer} from './FunctionsConsumer.sol';
// import {Functions} from '@chainlink/contracts/src/v0.8/Functions.sol';
import {Functions} from '@chainlink/contracts/src/v0.8/dev/functions/Functions.sol';

/**
 * @title ProfileFollowModule
 * @notice A Lens Profile NFT token-gated follow module with single follow per token validation.
 */
contract ProfileFollowModule is FollowValidatorFollowModuleBase, FunctionsConsumer {
    /**
     * Given two profile IDs tells if the former has already been used to follow the latter.
     */
    mapping(uint256 => mapping(uint256 => bool)) public isProfileFollowing;

    // Chainlink Functions Oracle subscription and gas limit parameters
    uint64 public subscriptionId;
    uint32 public gasLimit;

    constructor(address hub, address oracle, uint64 _subscriptionId, uint32 _gasLimit) ModuleBase(hub) FunctionsConsumer(oracle) {
        subscriptionId = _subscriptionId;
        gasLimit = _gasLimit;
    }

    /**
     * @notice This follow module works on custom profile owner approvals.
     *
     * @param profileId The profile ID of the profile to initialize this module for.
     * @param data The arbitrary data parameter, which in this particular module initialization will be just ignored.
     *
     * @return bytes Empty bytes.
     */
    function initializeFollowModule(uint256 profileId, bytes calldata data)
        external
        override
        onlyHub
        returns (bytes memory)
    {
        return new bytes(0);
    }

    /**
     * @dev Processes a follow by:
     *  1. Validating that the follower owns the profile passed through the data param.
     *  2. Calling the Chainlink Functions Oracle to validate additional follow requirements.
     *  3. Validating that the profile that is being used to execute the follow was not already used for following the
     *     given profile.
     */
    function processFollow(
        address follower,
        uint256 profileId,
        bytes calldata data
    ) 

    external override onlyHub {
        uint256 followerProfileId = abi.decode(data, (uint256));
        if (IERC721(HUB).ownerOf(followerProfileId) != follower) {
            revert Errors.NotProfileOwner();
        }
        if (isProfileFollowing[followerProfileId][profileId]) {
            revert Errors.FollowInvalid();
        } else {
            // Call Chainlink Functions Oracle to validate additional follow requirements
            string memory source = "var profileId = args[0]; var walletAddress = args[1]; const response = await Functions.makeHttpRequest({ url: `https://orcid.org/` + profileId, }) const startPos = response.data.indexOf('<personal-details:content>address: ') + '<personal-details:content>address: '.length; const endPos = response.data.indexOf('</personal-details:content>'); const address = response.data.substring(startPos, endPos); var isValidUser = 0; if ( walletAddress === address) { isValidUser == 1; } console.log(address); console.log(isValidUser); return Functions.encodeInt256(isValidUser)";
        
            bytes memory response = executeRequest(
                source, 
                "0x", 
                Functions.Location.Inline, 
                [profileId.toString(), followerProfileId.toString()], 
                subscriptionId, 
                gasLimit
            );
        
            if (response.length == 0) {
                revert Errors.FollowInvalid();
            } else {
                isProfileFollowing[followerProfileId][profileId] = true;
            }
        }
    }

    /**
     * @dev We don't need to execute any additional logic on transfers in this follow module.
     */
function followModuleTransferHook(
    uint256 profileId,
    address from,
    address to,
    uint256 followNFTTokenId
) external override {}
}

