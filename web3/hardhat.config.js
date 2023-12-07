/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.9",
    defaultNetwork: "Sepolia",
    networks: {
      hardhat: {},
      Sepolia: {
        url: "https://rpc.ankr.com/eth_sepolia/cd1e657bdd00f5c75746ec3eb7d13f693413da29b47e5f579c36ee9f135d0d36",
        accounts: [`0x${process.env.PRIVATE_KEY}`],
      },
    },
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
