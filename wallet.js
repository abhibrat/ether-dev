import { ethers } from "ethers";

const wallet = ethers.Wallet.createRandom();

console.log(wallet.address);
console.log(wallet.privateKey);
console.log(wallet.signingKey);
console.log(wallet.mnemonic);

// const newWallet = ethers.HDNodeWallet.fromMnemonic(wallet.mnemonic, undefined);
ethers.HDNo;

for (let i = 0; i < 5; i++) {
  const path = `m/44'/60'/0'/0/${i}`;
  const w = ethers.HDNodeWallet.fromPhrase(
    wallet.mnemonic.phrase,
    undefined,
    path
  );
  console.log(w.address);
  console.log(w.privateKey);
  console.log(w.signingKey);
  console.log(w.mnemonic);
}
// console.log(newWallet.address);
// console.log(newWallet.privateKey);
// console.log(newWallet.signingKey);
// console.log(newWallet.mnemonic);
