// SPDX-License-Identifier: MIT

pragma solidity ^0.8.10;

import {IReferenceModule} from './interfaces/IReferenceModule.sol';
import {ModuleBase} from './ModuleBase.sol';
import {IERC721} from '@openzeppelin/contracts/token/ERC721/IERC721.sol';

/**
 * @title FollowerAndResearcherReferenceModule
 * @notice A reference module that validates that comments or mirrors originate from a profile owned by a follower or a researcher
 */
contract FollowerAndResearcherReferenceModule is FollowValidationModuleBase, IReferenceModule, IResearcherModule {

    constructor(address hub) ModuleBase(hub) {}

    /**
     * @dev There is nothing needed at initialization.
     */
    function initializeReferenceModule(
        uint256 profileId,
        uint256 pubId,
        bytes calldata data
    ) external pure override returns (bytes memory) {
        return new bytes(0);
    }

    /**
     * @notice Validates that the commenting profile's owner is a follower or a researcher.
     * @dev The profile must be either a follower or a researcher to comment.
     */
    function processComment(
        uint256 profileId,
        uint256 profileIdPointed,
        uint256 pubIdPointed,
        bytes calldata data
    ) external view override {
        address commentCreator = IERC721(HUB).ownerOf(profileId);
        require(isResearcher(commentCreator), "Invalid comment creator");
    }

    /**
     * @notice Validates that the mirroring profile's owner is a follower or a researcher.
     * @dev The profile must be either a follower or a researcher to mirror.
     */
    function processMirror(
        uint256 profileId,
        uint256 profileIdPointed,
        uint256 pubIdPointed,
        bytes calldata data
    ) external view override {
        address mirrorCreator = IERC721(HUB).ownerOf(profileId);
        require(isResearcher(mirrorCreator), "Invalid mirror creator");
    }

    /**
     * @notice Checks if the given profile is a researcher.
     * @param profileId The ID of the profile to check.
     * @return true if the profile is a researcher, false otherwise.
     */
    function isResearcher(uint256 profileId) public view override returns (bool) {
        // TODO: Implement the logic to check if the profile is a researcher
        // For example, you could check if the profile has a certain attribute set to true
        return false;
    }
}
