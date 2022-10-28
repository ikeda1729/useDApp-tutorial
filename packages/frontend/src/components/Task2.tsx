import React from 'react';

import Typography from '@mui/material/Typography';

import { useEthers } from '@usedapp/core';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import Box from '@mui/material/Box';

const secondAddress = '0x0000000000000000000000000000000000000000';

export const Task2 = () => {
  const { account } = useEthers();

  return (
    <>
      <Typography variant="h6" align='center'>
        Task 2
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
            <BalancesTableRow address={account}/>
            <BalancesTableRow address={secondAddress}/>
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

  return (
    <TableRow>
      <TableCell>{address}</TableCell>
      <TableCell align="right">
        {undefined // TODO: if request is completed
        ?
        false // TODO: if there is an error
          ?
          <Box sx={{ color: 'error.main' }}> Error fetching balance </Box>
          :
          '0 ETH' // TODO: show properly formated balance balance
        : 'Loading...'}
      </TableCell>
    </TableRow>
  );
};
