import "dotenv/config";
import { ethers } from "ethers";

const key = process.env.INFURA_KEY;

const infuraUrl = `https://mainnet.infura.io/v3/${key}`;
const provider = new ethers.JsonRpcProvider(infuraUrl);

const address = "vitalik.eth";
// const address = "0x378e8eB7adD30b8d5365A2ca80cCC8351998C299";

provider.getBalance(address).then((result) => {
  console.log(`${address} has`, String(ethers.formatEther(result)), "ETH");
});
