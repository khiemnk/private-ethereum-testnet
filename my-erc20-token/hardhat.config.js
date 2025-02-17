require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.28",
  networks: {
    pos: {
      url: "127.0.0.1:64950", // URL của mạng Ethereum PoS local
      accounts: ["68f59e235434121f440449be304302fb55e454b8c4b1e6ca69c7e26496130b76"] // Thay bằng private key của bạn
    }
  }
};
