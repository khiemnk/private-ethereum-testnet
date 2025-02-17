const hre = require("hardhat");

async function main() {
  const initialSupply = hre.ethers.parseUnits("1000", 18); // 1000 token
  const MyToken = await hre.ethers.deployContract("MyToken", [initialSupply]);

  console.log(`Deploying contract...`);
  await MyToken.waitForDeployment();

  console.log(`Token deployed to: ${await MyToken.getAddress()}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
