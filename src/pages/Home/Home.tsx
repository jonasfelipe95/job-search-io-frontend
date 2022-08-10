import { useStore } from 'effector-react';
import React from 'react';
import { useIntl } from 'react-intl';
import WalletStore from 'stores/wallet/WalletStore';
import connectWalletUseCase from 'useCases/wallet/ConnectWalletUseCase';

const HomePage = () => {
  const { walletAddress } = useStore(WalletStore);
  const { formatMessage } = useIntl();

  return (
    <div>
      <h1>{formatMessage({ id: 'HOME_PAGE.TITLE' })}</h1>
      <br />
      <br />
      <button type="button" onClick={() => connectWalletUseCase(formatMessage)}>
        {formatMessage({ id: 'HOME_PAGE.CONNECT_WALLET_LABEL' })}
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
