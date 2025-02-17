require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.28",
  networks: {
    poa: {
      url: "http://127.0.0.1:8545", // Đảm bảo node Geth đang chạy trên cổng này
      accounts: ["68f59e235434121f440449be304302fb55e454b8c4b1e6ca69c7e26496130b76"] // Private key
    }
  }
};
