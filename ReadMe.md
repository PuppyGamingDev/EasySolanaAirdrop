# Puppy's Easy Solana Airdrop Script!

## Requirements & Setup
### Prequesites
- You will need to have an environment running [Node.js](https://nodejs.org/en/) v16+
- A private RPC Endpoint as public ones are unreliable, I can suggest a free one via [QuickNode](https://www.quicknode.com?tap_a=67226-09396e&tap_s=3536451-d11bb1&utm_source=affiliate&utm_campaign=generic&utm_content=affiliate_landing_page&utm_medium=generic)
- At least 1 finger to type with

## Initial Input
- Using the Endpoint URL you setup, paste it into `Airdrop.js` on line 11 where it says `YOURENDPOINTHERE` keeping it between the " ".

- Paste your wallet addresses into `wallets.json` like the usual hashlist form e.g.
```
[
  "AaMjTZqHawa4y9gibTh3FY2TYwWEre1JLaap84mFyAVo",
  "HSVGvehsAjCVV6dj4xjx2F7geiuvJFk833AHGizLgBZa",
  "SjyqZhecFbhbZb6rPZwBsucHecgrStXeQQYS1m1nR9B",
  "FAYsa9iuE8E7vGGxWNu6hupMNVACYnAUmV2e33VcSD1D",
  "DkhbmTnULVg4fEvbWbZScJB1cG3oKtFaxgLewE28tWa3"
]
```
- Paste the `SecretKey` of the sending wallet into `key.json` like below (needed to authorise the transactions, feel free to use a burner but code is transparent)(example below is just a test wallet)
```
[199,113,92,196,17,199,42,237,156,151,12,86,164,30,57,99,229,1,169,100,104,95,8,118,72,228,220,135,102,28,74,223,119,14,100,132,254,249,97,236,228,236,109,25,78,26,90,25,122,242,70,107,1,134,68,114,152,83,168,217,16,237,212,20]
```
- Open up the terminal/command prompt in that folder and type `npm i @solana/web3.js`

## Running the airdrop
All you will need to do is run the command to start the script along with a **Total Amount** of SOL to be distributed, the script will calculate the split.

You can run the script with the example below that would airdrop a total of 10 SOL

`node airdrop.js 10`

The console will then show the total being distributed and how many wallets were on the list along with how much each wallet will receive.
One the transactions start processing it will also show the Transaction ID as they are completed.

When the script is finished it will also export a file (`transactions.json`) that contains all the Transaction IDs to keep for reference.

## Conratulations!
Airdrop complete and you have some happy holders


### Thanks!
Thank you for checking out the repo, all donations are welcome

- Solana `8gjGkFJpKzP9XiwBxUpUG62U6BBj9m9RbjXeFNd7t1Tc`
- Ethereum `0x3D8ECEB3427AeF8Baf8857b0276C7945ac8dA900`
- Polygon `0x3D8ECEB3427AeF8Baf8857b0276C7945ac8dA900`
