import { ethers } from "ethers";
import { getProvider, getSigner } from "./utils.js";

const signer = getSigner("sepolia");
const provider = getProvider("sepolia");

const toAddress = "0x378e8eB7adD30b8d5365A2ca80cCC8351998C299";

const tx = await signer.sendTransaction({
  to: toAddress,
  value: ethers.parseEther("0.0002"),
});

console.log(
  "Current Balance",
  ethers.formatEther(await provider.getBalance(signer.address))
);
console.log("Transaction sent for mining", tx.hash);

await tx.wait();

console.log(
  "Transaction mined!! New balance: ",
  ethers.formatEther(await provider.getBalance(signer.address))
);
