import React, { useState } from 'react';

import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { Button, Grid, TextField, InputAdornment } from '@mui/material';
import { useContractFunction, useEthers } from '@usedapp/core';
import { WETH10ABI, WETH10 } from '@simple-dapp/contracts';
import { Contract, utils } from 'ethers';
import { weth10Addresses } from '../shared/weth10addresses';

export const Exercise3 = () => {

  return (
    <>
      <Typography variant="h6" align='center'>
        Exercise 3
      </Typography>
      <DepositComponent />
      <WithdrawComponent />
      <TransferComponent />
    </>
  );
};

const DepositComponent = () => {
  const [value, setValue] = useState('');
  const { chainId } = useEthers();
  const weth10Address = chainId && weth10Addresses[chainId] || "";
  const weth10Contract = new Contract(weth10Address, WETH10ABI.abi) as WETH10;
  const { send, state } = useContractFunction(weth10Contract, 'deposit');

  const handleDeposit = () => {
    send({ value: utils.parseEther(value) });
    setValue('');
  };

  return (
    <Paper style={{ margin: '20px', padding: '20px' }}>
      <Typography variant="h6"> Deposit </Typography>
      <Grid container spacing={2} marginTop={2}>
        <Grid item xs={4} justifyContent='center' display='flex'>
          <TextField
            id="standard-number"
            label="Value"
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              endAdornment: <InputAdornment position="end">ETH</InputAdornment>
            }}
            variant="outlined"
            onChange={(e) => { setValue(e.target.value) }}
          />
        </Grid>
        <Grid item xs={4} justifyContent='center' display='flex'>
          <Button
            onClick={handleDeposit}
            variant="contained"
            disabled={state.status === 'Mining' || state.status === 'PendingSignature'}
          >
            Deposit
          </Button>
        </Grid>
        <Grid item xs={4} justifyContent='center' display='flex'>
          <TextField
            id="outlined-read-only-input"
            label="Transaction status"
            value={state.status}
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}

const WithdrawComponent = () => {
  const [value, setValue] = useState('');
  const { chainId } = useEthers();
  const weth10Address = chainId && weth10Addresses[chainId] || "";
  const weth10Contract = new Contract(weth10Address, WETH10ABI.abi) as WETH10;
  const { send, state } = useContractFunction(weth10Contract, 'withdraw');

  const handleWithdraw = () => {
    // TODO: withdraw `value` WETH from WETH10 contract
    send(utils.parseEther(value))
    setValue('');
  };

  return (
    <Paper style={{ margin: '20px', padding: '20px' }}>
      <Typography variant="h6"> Withdraw </Typography>
      <Grid container spacing={2} marginTop={2}>
        <Grid item xs={4} justifyContent='center' display='flex'>
          <TextField
            id="standard-number"
            label="Value"
            InputLabelProps={{
              shrink: true,
            }}
            value={value}
            InputProps={{
              endAdornment: <InputAdornment position="end">WETH</InputAdornment>
            }}
            variant="outlined"
            onChange={(e) => { setValue(e.target.value) }}
          />
        </Grid>
        <Grid item xs={4} justifyContent='center' display='flex'>
          <Button
            onClick={handleWithdraw}
            variant="contained"
            disabled={state.status === 'Mining' || state.status === 'PendingSignature'}
          >
            Withdraw
          </Button>
        </Grid>
        <Grid item xs={4} justifyContent='center' display='flex'>
          <TextField
            id="outlined-read-only-input"
            label="Transaction status"
            value={state.status}
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}

const TransferComponent = () => {
  const [value, setValue] = useState('');
  const [address, setAddress] = useState('');
  const { chainId } = useEthers();
  const weth10Address = chainId && weth10Addresses[chainId] || "";
  const weth10Contract = new Contract(weth10Address, WETH10ABI.abi) as WETH10;
  const { send, state } = useContractFunction(weth10Contract, 'transfer');

  const handleTransfer = () => {
    // TODO: transfer `value` WETH to `address`
    send(address, utils.parseEther(value));
    setValue('');
    setAddress('');
  };

  return (
    <Paper style={{ margin: '20px', padding: '20px' }}>
      <Typography variant="h6"> Transfer </Typography>
      <Grid container spacing={2} marginTop={2}>
        <Grid item xs={5} justifyContent='center' display='flex'>
          <TextField
            label="To"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            onChange={(e) => { setAddress(e.target.value) }}
          />
        </Grid>
        <Grid item xs={3} justifyContent='center' display='flex'>
          <TextField
            label="Value"
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              endAdornment: <InputAdornment position="end">WETH</InputAdornment>
            }}
            variant="outlined"
            onChange={(e) => { setValue(e.target.value) }}
          />
        </Grid>
        <Grid item xs={2} justifyContent='center' display='flex'>
          <Button
            onClick={handleTransfer}
            variant="contained"
            disabled={state.status === 'Mining' || state.status === 'PendingSignature'}
          >
            Transfer
          </Button>
        </Grid>
        <Grid item xs={2} justifyContent='center' display='flex'>
          <TextField
            id="outlined-read-only-input"
            label="Transaction status"
            value={state.status} // TODO: show transaction status
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}
