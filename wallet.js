import "dotenv/config";
import { ethers } from "ethers";

let wallet = ethers.Wallet.createRandom();

// console.log(wallet.address);
// console.log(wallet.privateKey);
// console.log(wallet.signingKey);
// console.log(wallet.mnemonic);

// const newWallet = ethers.HDNodeWallet.fromMnemonic(wallet.mnemonic, undefined);

// for (let i = 0; i < 5; i++) {
//   const path = `m/44'/60'/0'/0/${i}`;
//   const w = ethers.HDNodeWallet.fromPhrase(
//     wallet.mnemonic.phrase,
//     undefined,
//     path
//   );
//   console.log(w.address);
//   console.log(w.privateKey);
//   console.log(w.signingKey);
//   console.log(w.mnemonic);
// }

const msg = "Signing fist msg";
const signature = await wallet.signMessage(msg);
// console.log(signature);
// console.log(ethers.verifyMessage(msg, signature));

const sepoliaInfuraApi = `https://sepolia.infura.io/v3/${process.env.INFURA_KEY}`;
const sepoliaProvider = new ethers.JsonRpcProvider(sepoliaInfuraApi);

let myWallet = new ethers.Wallet(process.env.ACCOUNT_2_KEY);

myWallet = myWallet.connect(sepoliaProvider);

console.log(
  "Balance is ",
  ethers.formatEther(await sepoliaProvider.getBalance(myWallet.address))
);

let tx = await myWallet.sendTransaction({
  to: "0x378e8eb7add30b8d5365a2ca80ccc8351998c299",
  value: ethers.parseEther("0.0001"),
});

console.log("Transaction sent to blockchain", tx);

tx = await tx.wait();

console.log("Yaayy!! Transaction confirmed", tx);
