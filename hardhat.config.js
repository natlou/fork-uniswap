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
  solidity: {
    compilers: [
       {
          version: '0.5.16',
          settings: {
             optimizer: {
                enabled: true,
                runs: 200,
             },
          },
       },
       {
          version: '0.6.6',
          settings: {
             optimizer: {
                enabled: true,
                runs: 200,
             },
          },
       },
    ],
 },
};
