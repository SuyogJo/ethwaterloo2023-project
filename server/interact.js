// Ethers logic 
const privateKey = require("./ethersdata");
const contractAddress = require("./ethersdata");

const ethers = require('ethers');
const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = new ethers.Wallet(privateKey, provider);

const abi = [
  "event Received(address from, uint amount)",
  "event Distributed(address to, uint amount)",
  "function depositFunds() external payable",
  "function distributeFunds(address payable recipient, uint amount) external onlyOwner",
  "function getBalance() public view returns (uint)"]
const contract = new ethers.Contract(contractAddress, contractABI, signer);

// Money to receipient
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
    // let result = await provider.getBalance(balanceAddress);
    // result = ethers.formatEther(result);

    // return result; 
    console.log("hi");
    return 1;
}

exports.balance = balance;
