import "dotenv/config";
import { ethers } from "ethers";

const getProvider = (network = "sepolia") => {
  let url = "";
  switch (network) {
    case "sepolia":
      url = `https://sepolia.infura.io/v3/${process.env.INFURA_KEY}`;
      break;
    case "mainnet":
      url = `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`;
      break;
    default:
      throw Error("Invalid network");
  }
  return new ethers.JsonRpcProvider(url);
};

const getSigner = (network = "sepolia") => {
  const provider = getProvider(network);
  return new ethers.Wallet(process.env.ACCOUNT_2_KEY, provider);
};

export { getProvider, getSigner };

// How to use
// let network = "mainnet";
// const provider = getProvider(network);
// console.log(await provider.getBlockNumber());

// const signer = getSigner(network);
// console.log(await provider.getBalance(signer.address));
// console.log(signer.address);
