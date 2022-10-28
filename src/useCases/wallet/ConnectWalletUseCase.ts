import { connectWallet } from 'services/wallet/Wallet.service';
import { connectWallet as connectWalletEvent } from 'stores/wallet/WalletEvents';
import WalletStore from 'stores/wallet/WalletStore';

const connectWalletUseCase = async (): Promise<any> => {
  const { walletAddress } = WalletStore.getState();

  if (walletAddress) return alert(`CONNECT_WALLET.ALREADY_CONNECTED ${walletAddress}`);

  const walletResponse = await connectWallet();

  if (walletResponse.walletAddress) connectWalletEvent(walletResponse.walletAddress);

  return alert(walletResponse.message);
};

export default connectWalletUseCase;
