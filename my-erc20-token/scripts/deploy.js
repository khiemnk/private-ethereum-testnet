const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  
  console.log("Deploying contracts with the account:", deployer.address);

  // Lấy balance của deployer
  const balance = await ethers.provider.getBalance(deployer.address);
  console.log("Account balance:", ethers.formatEther(balance), "ETH");

  // Deploy contract
  const Token = await ethers.getContractFactory("MyToken");
  const token = await Token.deploy(1000000); // Initial supply of tokens

  // Chờ deploy xong
  await token.waitForDeployment();

  // Lấy địa chỉ contract
  const tokenAddress = await token.getAddress();
  console.log("Token address:", tokenAddress);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
