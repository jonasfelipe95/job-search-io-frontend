import { createStore } from 'effector';
import { connectWallet, disconnectWallet } from './WalletEvents';
import { IWalletState } from './WalletStore.d';

const initialState: IWalletState = {
  walletAddress: null,
};

const WalletStore = createStore(initialState)
  .on(connectWallet, (state, walletAddress) => ({
    ...state,
    walletAddress,
  }))
  .on(disconnectWallet, (state) => ({
    ...state,
    walletAddress: null,
  }));

export default WalletStore;
