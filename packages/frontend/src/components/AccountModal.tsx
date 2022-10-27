import React, { useState } from 'react';

import { shortenAddress, useEtherBalance, useEthers } from '@usedapp/core';

import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';
import Grid from '@mui/material/Grid';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckIcon from '@mui/icons-material/Check';
import { utils } from 'ethers';

interface AccountModalProps {
  open: boolean;
  onClose: () => void;
}

export const AccountModal = ({ open, onClose } : AccountModalProps) => {
  const [copied, setCopied] = useState(false);

  const copyAddress = () => {
    // TODO: Copy address of the current user to clipboard
    navigator.clipboard.writeText('');
    if (!copied) {
      setCopied(true);
      setTimeout(() => setCopied(false), 5000);
    }
  };

  const onDisconnect = () => {
    // TODO: Disconnect from wallet
    onClose();
  };

  // TODO: The Dialog should should be displayed only if the user is connected
  if (true) {
    return null;
  }

  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="account-dialog-title"
      fullWidth
      maxWidth="xs"
    >
      <DialogTitle id="account-dialog-title">
        Account info
        <IconButton size='small' style={{
          position: 'absolute',
          right: 10,
          top: 10,
        }}>
          <CloseIcon onClick={onClose} />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant='h6' align='center'>
              {/* TODO: Display shortened version of connected user */}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant='body2' align='center'>
              {/* TODO: Display balance of the current user */}
            </Typography>
          </Grid>
          <Grid item xs={6} justifyContent='center' display='flex'>
            <Button
              fullWidth
              onClick={copyAddress}
              style={{textTransform: 'none', display: 'block'}}>
              {!copied ?
              <>
                <ContentCopyIcon/>
                <br />
                Copy Address
              </>
              :
              <>
                <CheckIcon/>
                <br />
                Copied!
              </>}
            </Button>
          </Grid>
          <Grid item xs={6} justifyContent='center' display='flex'>
            <Button
              fullWidth
              onClick={onDisconnect}
              style={{textTransform: 'none', display: 'block'}}>
              <LogoutIcon />
                <br />
              Disconnect
            </Button>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
}