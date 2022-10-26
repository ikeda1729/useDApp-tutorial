import React, { useState } from "react";

import { shortenAddress, useEthers } from "@usedapp/core";
import { Button } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { AccountModal } from "./AccountModal";

export const AccountButton = () => {
  const { account, activateBrowserWallet } = useEthers();
  const [modalOpen, setModalOpen] = useState(false);

  const onModalOpen = () => {
    setModalOpen(true);
  };

  const onConnect = () => {
    activateBrowserWallet();
  };

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
