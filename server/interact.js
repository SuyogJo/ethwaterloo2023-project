// Ethers logic 

// FIGURE OUT HOW TO PUT THIS UNDER ETHERSDATA.JS
const privateKey = 'PRIVATE-KEY-OF-CONTRACT-OWNER'; 
const contractAddress = 'PUBLIC-KEY-OF-CONTRACT';

const ethers = require('ethers');
// const provider = new ethers.providers.Web3Provider(window.ethereum);
// Replace 'Your-Infura-Project-ID' with your actual Project ID
const infuraProvider = new ethers.providers.InfuraProvider('goerli', 'a10b2d604929433789bf3d37f82a1dcc');

const signer = new ethers.Wallet(privateKey, infuraProvider);

const abi = [
  "event Received(address from, uint amount)",
  "event Distributed(address to, uint amount)",
  "function depositFunds() external payable",
  "function distributeFunds(address payable recipient, uint amount) external onlyOwner",
  "function getBalance() public view returns (uint)"]
const contract = new ethers.Contract(contractAddress, abi, signer);

// take money
async function callContractFunction(recipientAddress, amount) {
  try {
    const transaction = await contract.distributeFunds(recipientAddress, amount); 

    // Wait for the transaction to be mined
    await transaction.wait();

    return true;
  } catch (error) {
    return false;
  }
}

// Get balance
async function balance(balanceAddress) {
    let result = await infuraProvider.getBalance(balanceAddress);
    result = ethers.utils.formatEther(result);

    return result; 
}

module.exports = {
  balance, 
  callContractFunction,
};