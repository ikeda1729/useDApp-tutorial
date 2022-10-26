import {Wallet, ethers} from 'ethers';
import {deployContract, defaultAccounts} from 'ethereum-waffle';
import {WETH10, WETH10__factory} from '../src/gen/types';

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 8545

async function main() {
    const provider = new ethers.providers.JsonRpcProvider(`http://localhost:${PORT}`);
    const wallet = new Wallet(defaultAccounts[0].secretKey, provider);
    const contract: WETH10 = await deployContract(wallet, WETH10__factory);
    console.log('Deployed WETH10 contract\'s address', contract.address);
}

main();
