import { useStore } from 'effector-react';
import React from 'react';
import WalletStore from 'stores/wallet/WalletStore';
import { IWalletState } from 'stores/wallet/WalletStore.d';
import connectWalletUseCase from 'useCases/wallet/ConnectWalletUseCase';

const HomePage = () => {
  const { walletAddress } = useStore<IWalletState>(WalletStore);

  return (
    <div>
      <h1>HOME_PAGE.TITLE</h1>
      <br />
      <br />
      <button type="button" onClick={() => connectWalletUseCase()}>
        'HOME_PAGE.CONNECT_WALLET_LABEL
      </button>
      <br />
      <br />
      <p>isConnected: {(!!walletAddress).toString()}</p>
      <br />
      <p>walletArress: {walletAddress || 'disconcected'}</p>
    </div>
  );
};

export default HomePage;
