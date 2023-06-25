# Giev - We are a charity that gives

## How do we give?
Creating a transparent charity platform using blockchain. Donations fund merchants to subsidize costs for those in need. Eligibility verified via ZK proofs. All transactions are on-chain, letting donors see exactly where their contributions go.

## Summary:

This project aims to create a transparent and customizable charity system by leveraging the power of blockchain technology. It allows individuals to contribute to a shared pool of funds designed to support a specific group of people in need. The primary actors in this system are the donors, the beneficiaries, and the merchants.

Donors: Individuals or organizations who donate to the charity. Their contributions go to a charity pool contract, which is essentially a smart contract on the blockchain where funds are held and distributed according to certain rules.

Beneficiaries: These are individuals who meet certain criteria for financial aid. They are able to benefit from the donated funds when making purchases from participating merchants.

Merchants: These are businesses that accept payments from the charity pool to subsidize costs for eligible beneficiaries.

The transaction process is designed to be simple, secure, and transparent:

1. When a beneficiary purchases from a participating merchant, the merchant uses their Point of Sale (POS) web application to request a Zero-Knowledge (ZK) proof from the customer.

2. This ZK proof is a cryptographic method that allows the beneficiary to prove they fulfill the criteria for aid without revealing any other personal information.

3. The ZK proof is verified by the backend of the merchant's web app. If the proof is valid, the app initiates a transaction request to the charity pool contract.

4. The smart contract processes the transaction, releasing the appropriate funds to the merchant.

5. The merchant receives the funds, which are then deducted from the total cost of the beneficiary's purchase.

The entire transfer of funds is conducted on-chain, which means every transaction is recorded on the blockchain. This transparency allows donors to track their donations and see exactly how their funds are being used. It's a novel way to ensure transparency and accountability in charitable giving, while also providing aid to those who need it most.

One of the main benefits of this system is that it leverages the security and transparency of blockchain technology, along with the privacy features of ZK proofs, to create a charity system that can be audited by any interested party while preserving the privacy of its beneficiaries.


## Technical Summary:

This project uses ZKP proofs through the Polygon ID app. This allows a verification of users that fall under a specific criteria that we specify. In the frontend, we used Reactjs and chakra ui for the components and the user interface. For the backend, we used expressjs for the server side and javascript. We also used ngrok for a tunnel from our localhost to the public.  We also used infura for the API that gives us access to the Ethereum networks. We used Ethersjs for the communication with the web3 aspects. For the smart contracts, we used solidity and scaffold-eth to create and deploy the smart contract onto the chain. For our blockchain, we used Goerli test network to deploy our smart contracts in and used GoerliETH for the currency.

## <a href="https://www.youtube.com/watch?v=yVfcUE35HOA" target="_blank">LINK TO A SHORT VIDEO</a>
## For our Smart Contract code, please access this repo: https://github.com/changisaac/GieveContract (Smart Contract)


