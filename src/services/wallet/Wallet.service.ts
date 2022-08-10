import { IConnectWallet } from 'types/Wallet';

export const connectWallet = async (): Promise<IConnectWallet> => {
  if (window.ethereum) {
    try {
      const walletAddress = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });

      console.log({
        walletAddress,
      });

      return {
        connected: true,
        message: 'CONNECT_WALLET.SUCCESS_MESSAGE',
        walletAddress,
      };
    } catch (error) {
      return {
        connected: false,
        message: 'CONNECT_WALLET.FAIL_MESSAGE',
      };
    }
  } else {
    return {
      connected: false,
      message: 'CONNECT_WALLET.WALLET_NOT_FOND',
    };
  }
};

export default { connectWallet };
