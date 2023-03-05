import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { ethers } from "hardhat";

/**
 * Deploys a contract named "YourContract" using the deployer account and
 * constructor arguments set to the deployer address
 *
 * @param hre HardhatRuntimeEnvironment object.
 */
const deployYourContract: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  /*
    On localhost, the deployer account is the one that comes with Hardhat, which is already funded.

    When deploying to live networks (e.g `yarn deploy --network goerli`), the deployer account
    should have sufficient balance to pay for the gas fees for contract creation.

    You can generate a random account with `yarn generate` which will fill DEPLOYER_PRIVATE_KEY
    with a random private key in the .env file (then used on hardhat.config.ts)
    You can run the `yarn account` command to check your balance in every network.
  */

  async function main() {
    // Deploy the FunctionsConsumer contract
    const FunctionsConsumer = await ethers.getContractFactory("FunctionsConsumer");
    const functionsConsumer = await FunctionsConsumer.deploy("YOUR_CHAINLINK_FUNCTIONS_ORACLE_ADDRESS");

    // Wait for the FunctionsConsumer contract to be deployed
    await functionsConsumer.deployed();
    console.log("FunctionsConsumer deployed to:", functionsConsumer.address);

    // Deploy the ProfileFollowModule contract
    const ProfileFollowModule = await ethers.getContractFactory("ProfileFollowModule");
    const profileFollowModule = await ProfileFollowModule.deploy(
      "YOUR_LENS_HUB_ADDRESS", // replace with the actual Lens Hub address
      functionsConsumer.address, // pass the FunctionsConsumer contract address as the oracle parameter
      "YOUR_CHAINLINK_FUNCTIONS_ORACLE_SUBSCRIPTION_ID", // replace with the actual subscription ID
      "YOUR_CHAINLINK_FUNCTIONS_ORACLE_GAS_LIMIT", // replace with the actual gas limit
    );

    // Wait for the ProfileFollowModule contract to be deployed
    await profileFollowModule.deployed();
    console.log("ProfileFollowModule deployed to:", profileFollowModule.address);

    // Initialize the ProfileFollowModule contract for a specific profile ID
    await profileFollowModule.initializeFollowModule("YOUR_PROFILE_ID", "0x");
    console.log("ProfileFollowModule initialized for profile ID:", "YOUR_PROFILE_ID");
  }

  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });
};

export default deployYourContract;

// Tags are useful if you have multiple deploy files and only want to run one of them.
// e.g. yarn deploy --tags YourContract
deployYourContract.tags = ["OrcidReference"];
