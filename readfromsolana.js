const { clusterApiUrl, Connection, PublicKey } = require("@solana/web3.js");


//method-1
// const connection = new Connection(clusterApiUrl("devnet"))

//method-2
// const cclusterApiUrl = 'https://api.devnet.solana.com';
// const connection = new Connection(cclusterApiUrl);


async function getBalanceWeb3(address) {
    return connection.getBalance(address);
}
const publicKey = new PublicKey("5U3bH5b6XtG99aVWLqwVzYPVpQiFHytBD68Rz2eFPZd7");
//example public key for testing purposes only

getBalanceWeb3(publicKey).then((balance) => {
    console.log(balance);
})