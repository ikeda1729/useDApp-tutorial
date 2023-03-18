import React, { useState } from "react";

import { Button } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { AccountModal } from "./AccountModal";

import { shortenAddress, useEthers } from '@usedapp/core';

export const AccountButton = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { account, activateBrowserWallet } = useEthers();

  const onModalOpen = () => {
    setModalOpen(true);
  };

  const onConnect = () => {
    activateBrowserWallet();
  };

  // TODO: Display this component only if the user is connected
  if (account) {
    return (
      <>
        <Button
          onClick={onModalOpen}
          color='inherit'
        >
          {shortenAddress(account)}
          <KeyboardArrowDownIcon />
        </Button>
        <AccountModal open={modalOpen} onClose={() => setModalOpen(false)} />
      </>
    )
  }

  return (
    <Button
      onClick={onConnect}
      color='inherit'
    >
      Connect Wallet
    </Button>
  );
};
