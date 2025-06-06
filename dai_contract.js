import { ethers } from "ethers";
import { daiAbi } from "./abi/daiAbi.js";
import { sepoliaDaiAbi } from "./abi/sepoliaDaiAbi.js";

import { cryptoPunkAbi } from "./abi/cryptoPunkAbi.js";

import { getProvider, getSigner } from "./utils.js";

const daiAddress = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
const provider = getProvider("mainnet");
const daiContract = new ethers.Contract(daiAddress, daiAbi, provider);

const sepoliaDaiAddress = "0x776b6fC2eD15D6Bb5Fc32e0c89DE68683118c62A";
const sepoliaProvider = getProvider("sepolia");
const sepoliaSigner = getSigner("sepolia");
const sepoliaDaiContract = new ethers.Contract(
  sepoliaDaiAddress,
  sepoliaDaiAbi,
  sepoliaSigner
);

const myAddress = "0x378e8eB7adD30b8d5365A2ca80cCC8351998C299";
let b = ethers.formatEther(await sepoliaDaiContract.balanceOf(myAddress));
console.log("Current Balance:", b);

const tx = await sepoliaDaiContract.mint(
  myAddress,
  ethers.parseEther("5000000")
);

console.log("Minting Dai", tx.hash);
await tx.wait();

b = ethers.formatEther(await sepoliaDaiContract.balanceOf(myAddress));
console.log("Dai minted, Balance: ", b);

const cryptoPunkAddress = "0x000000000000003607fce1ac9e043a86675c5c2f";
const cryptoPunkContract = new ethers.Contract(
  cryptoPunkAddress,
  cryptoPunkAbi,
  provider
);
const name = await cryptoPunkContract.name();
console.log("Name of NFT:", name);
const owner = await cryptoPunkContract.ownerOf(1567);
console.log("Owner of NFT:", owner);

// call contract using calldata to send transactions
const data =
  "0x40c10f19000000000000000000000000378e8eb7add30b8d5365a2ca80ccc8351998c2990000000000000000000000000000000000000000000422ca8b0a00a425000000";

console.log("Sending transaction using calldata ");
const tx2 = await sepoliaSigner.sendTransaction({
  to: sepoliaDaiAddress,
  data: data,
  gasPrice: 8000000000,
  nonce: 14,
});

console.log("Tx:", tx2.hash);
await tx2.wait();

console.log("Tx complete");
