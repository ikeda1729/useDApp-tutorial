import React from 'react';
import ReactDOM from 'react-dom/client';

import { Config, DAppProvider, Goerli, Localhost } from '@usedapp/core';
import { getDefaultProvider } from 'ethers';

import App from './App';

const config: Config = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: getDefaultProvider('goerli'),
    [Localhost.chainId]: 'http://localhost:8545',
  },
  multicallVersion: 2
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <DAppProvider config={config}>
      <App />
    </DAppProvider>
  </React.StrictMode>
);
