import React, { useState } from "react";

import { Button } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { AccountModal } from "./AccountModal";

export const AccountButton = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const onModalOpen = () => {
    setModalOpen(true);
  };

  const onConnect = () => {
    // TODO: Connect to wallet
  };

  // TODO: Display this comeponent only if the user is connected
  if (false) {
    return (
      <>
        <Button 
          onClick={onModalOpen}
          color='inherit'
        >
          {/* TODO: Display shortened version of connected user */}
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
