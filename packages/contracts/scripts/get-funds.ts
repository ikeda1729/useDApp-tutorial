import {Wallet, ethers} from 'ethers';
import {defaultAccounts} from 'ethereum-waffle';

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 8545

async function main() {
    const args = process.argv.slice(2);
    const address = args[0];
    const provider = new ethers.providers.JsonRpcProvider(`http://localhost:${PORT}`);
    const wallet = new Wallet(defaultAccounts[1].secretKey, provider);
    await wallet.sendTransaction({to: address, value: ethers.utils.parseEther('1')});
    console.log(`Sent 1 ETH to ${address}`);
}

main();
