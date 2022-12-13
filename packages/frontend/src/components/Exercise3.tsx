import React, { useState } from 'react';

import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { Button, Grid, TextField, InputAdornment } from '@mui/material';

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

  const handleDeposit = () => {
    // TODO: deposit `value` ETH to WETH10 contract
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
            disabled={false} // Disable button if transaction is in progress
          >
            Deposit 
          </Button>
        </Grid>
        <Grid item xs={4} justifyContent='center' display='flex'>
          <TextField
            id="outlined-read-only-input"
            label="Transaction status"
            value={''} // TODO: show transaction status
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

  const handleWithdraw = () => {
    // TODO: withdraw `value` WETH from WETH10 contract
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
            disabled={false} // Disable button if transaction is in progress
          >
            Withdraw 
          </Button>
        </Grid>
        <Grid item xs={4} justifyContent='center' display='flex'>
          <TextField
            id="outlined-read-only-input"
            label="Transaction status"
            value={''} // TODO: show transaction status
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

  const handleTransfer = () => {
    // TODO: transfer `value` WETH to `address`
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
            disabled={false} // Disable button if transaction is in progress
          >
            Transfer 
          </Button>
        </Grid>
        <Grid item xs={2} justifyContent='center' display='flex'>
          <TextField
            id="outlined-read-only-input"
            label="Transaction status"
            value={''} // TODO: show transaction status
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}
