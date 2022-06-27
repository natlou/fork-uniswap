// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require('@nomiclabs/hardhat-ethers');
require('@nomiclabs/hardhat-waffle');
require('@nomiclabs/hardhat-etherscan');

const ethers = require('ethers');
const credentials = require('./credentials.js');

module.exports = {
  solidity: "0.8.4",
  // need to fill this out with networks and etherscan 
};
