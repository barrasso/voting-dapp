var Voting = artifacts.require("./Vote.sol");

module.exports = function(deployer) {
  deployer.deploy(Voting, ['Mark', 'Stas', 'Kristen'], {gas: 290000});
};
/* The deployer expects the first argument to be the name of the contract followed by constructor arguments. 
In our case, there is only one argument which is an array of candidates. 
The third argument is a hash where we specify the gas required to deploy our code. 
The gas amount varies depending on the size of your contract. 
For the Voting contract, 290000 was sufficient.
*/
