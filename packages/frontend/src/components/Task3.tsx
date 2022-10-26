import React, { useMemo, useState } from 'react';

import Typography from '@mui/material/Typography';
import { WETH10ABI, WETH10 } from '@simple-dapp/contracts';
import { useContractFunction, useEthers } from '@usedapp/core';
import { Contract, utils } from 'ethers';
import { weth10Addresses } from '../shared/weth10addresses';
import Paper from '@mui/material/Paper';
import { Button, Grid, TextField, InputAdornment } from '@mui/material';

export const Task3 = () => {

  return (
    <>
      <Typography variant="h6" align='center'>
        Task 3
      </Typography>
      <DepositComponent />
      <WithdrawComponent />
      <TransferComponent />
    </>
  );
};

const DepositComponent = () => {
  const { chainId } = useEthers();
  const weth10Contract = useMemo(() => {
    return chainId && new Contract(weth10Addresses[chainId], WETH10ABI.abi) as WETH10;
  }, [chainId]);
  const [value, setValue] = useState('');

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
  const { chainId } = useEthers();
  const weth10Contract = useMemo(() => {
    return chainId && new Contract(weth10Addresses[chainId], WETH10ABI.abi) as WETH10;
  }, [chainId]);
  const [value, setValue] = useState('');

  const { send, state } = useContractFunction(weth10Contract, 'withdraw');

  const handleWithdraw = () => {
    send(utils.parseEther(value));
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
  const { chainId } = useEthers();
  const weth10Contract = useMemo(() => {
    return chainId && new Contract(weth10Addresses[chainId], WETH10ABI.abi) as WETH10;
  }, [chainId]);
  const [value, setValue] = useState('');
  const [address, setAddress] = useState('');

  const { send, state } = useContractFunction(weth10Contract, 'transfer');

  const handleTransfer = () => {
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
