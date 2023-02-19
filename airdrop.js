// Initial imports
const { PublicKey, clusterApiUrl, Connection, Keypair, Transaction, SystemProgram, LAMPORTS_PER_SOL, sendAndConfirmTransaction } = require('@solana/web3.js')
const fs = require('node:fs')
const key = require('./key.json')
const wallets = require('./wallets.json')
const total = process.argv[2]

// Import Secret Key and convery to Keypair for signing transactions
let secretKey = Uint8Array.from(key);
let keypair = Keypair.fromSecretKey(secretKey);

let connection = new Connection("YOURENDPOINTHERE") // Connect to the RPC

const perChunk = 20 // wallets per transaction  
const split = total / wallets.length * LAMPORTS_PER_SOL // amount to receive per wallet converted to Lamports


async function BuildAndSend() {
    console.log(`Spreading ${total} SOL to ${wallets.length} wallets`)
    console.log(`Wallets will receive ${total / wallets.length} SOL each..`)
    var transactionIds = []
    // Split wallets up into *Batches* to group into a smaller amount of overall transactions
    const walletbatches = wallets.reduce((resultArray, item, index) => {
        const chunkIndex = Math.floor(index / perChunk)
        if (!resultArray[chunkIndex]) {
            resultArray[chunkIndex] = [] // start a new chunk
        }
        resultArray[chunkIndex].push(item)
        return resultArray
    }, [])

    // For each *Batch* of wallets, create a transaction and send it
    for (const batch of walletbatches) {
        let transaction = new Transaction(); // Creates a new transaction

        // For each wallet in the Batch, add a SOL transfer instruction to the created Transaction
        for (const wallet of batch) {
            const toKey = new PublicKey(wallet)
            transaction.add(
                SystemProgram.transfer({
                    fromPubkey: keypair.publicKey,
                    toPubkey: toKey,
                    lamports: split,
                }),
            );
        }
        // Submits and awaits confirmation of the created Transaction
        const signature = await sendAndConfirmTransaction(connection, transaction, [keypair]);
        console.log(signature) // Just logging in console to view progress
        transactionIds.push(signature)
    }
    console.log(`Airdrop Complete, writing Transaction IDs to file...`)
    fs.writeFile(`./transactions.json`, JSON.stringify(transactionIds, null, 2), finished);
    function finished(err) {
        console.log(`Transactions written! All finished!`);
    }
}

BuildAndSend() // Run the function on script start
