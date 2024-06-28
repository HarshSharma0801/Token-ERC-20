require("@nomiclabs/hardhat-waffle");

const endpointUrl = process.env.API_KEY;
const privateKey = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.21",
  networks: {
    sepolia: {
      url: endpointUrl,
      accounts: [privateKey],
    },
  },
}