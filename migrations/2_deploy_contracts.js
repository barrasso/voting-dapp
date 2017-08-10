var Vote = artifacts.require("./Vote.sol");

module.exports = function(deployer) {
  deployer.deploy(Vote, 10000, web3.toWei('0.1', 'ether'), ['Mark', 'Stas', 'Kristen'], {gas: 850000});
};
/* The deployer expects the first argument to be the name of the contract followed by constructor arguments. 
The third argument is a hash where we specify the gas required to deploy our code. 
The gas amount varies depending on the size of your contract. 
For the Vote contract, 850000 was sufficient.
*/
