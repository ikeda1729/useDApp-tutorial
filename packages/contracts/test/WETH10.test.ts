import {expect, use} from 'chai';
import {deployContract, MockProvider, solidity} from 'ethereum-waffle';
import {WETH10, WETH10__factory} from '../src/gen/types';

use(solidity);

describe('WETH10', () => {
  const provider = new MockProvider()
  const [alice] = provider.getWallets();
  let contract: WETH10;

  beforeEach(async () => {
    contract = await deployContract(alice, WETH10__factory);
  });

  it('Deploys correctly and has an address', async () => {
    expect(contract.address).to.be.properAddress
  });

  it('Deposits ether', async () => {
    const balanceBefore = await contract.balanceOf(alice.address);
    expect(balanceBefore).to.eq(0);
    const tx = await contract.deposit({value: 100});
    await expect(tx).to.changeEtherBalance(alice, -100);
    await tx.wait();
    const balanceAfter = await contract.balanceOf(alice.address);
    expect(balanceAfter).to.eq(100);
  });
});
