import React from 'react';

import Typography from '@mui/material/Typography';

import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import Box from '@mui/material/Box';
import { useCall, useEthers } from '@usedapp/core';
import { weth10Addresses } from '../shared/weth10addresses';
import { WETH10ABI, WETH10 } from '@simple-dapp/contracts';
import { Contract, utils } from 'ethers';

const secondAddress = '0x0000000000000000000000000000000000000000';

export const Exercise2 = () => {
  const { account } = useEthers();
  return (
    <>
      <Typography variant="h6" align='center'>
        Exercise 2
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Account address</TableCell>
              <TableCell align="right">WETH10 balance</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <BalancesTableRow address={account} />
            <BalancesTableRow address={secondAddress} />
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

interface BalancesTableRowProps {
  address?: string;
}

const BalancesTableRow = ({ address }: BalancesTableRowProps) => {
  // TODO: get weth balance for address
  const { chainId } = useEthers();
  const weth10Contract = chainId && new Contract(weth10Addresses[chainId], WETH10ABI.abi) as WETH10;
  const balance = useCall(address && weth10Contract && {
    contract: weth10Contract,
    method: 'balanceOf',
    args: [address],
  });

  return (
    <TableRow>
      <TableCell>{address}</TableCell>
      <TableCell align="right">
        {balance // TODO: if request is completed
          ?
          balance.error // TODO: if there is an error
            ?
            <Box sx={{ color: 'error.main' }}> Error fetching balance </Box>
            :
            utils.formatEther(balance.value[0])
          : 'Loading...'}
      </TableCell>
    </TableRow>
  );
};
