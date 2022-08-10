import { connectWallet } from 'services/wallet/Wallet.service';
import { connectWallet as connectWalletEvent } from 'stores/wallet/WalletEvents';
import WalletStore from 'stores/wallet/WalletStore';

const connectWalletUseCase = async (
  formatMessage: (id: { id: string }) => string
): Promise<any> => {
  const { walletAddress } = WalletStore.getState();

  if (walletAddress)
    return alert(`${formatMessage({ id: 'CONNECT_WALLET.ALREADY_CONNECTED' })} ${walletAddress}`);

  const walletResponse = await connectWallet();

  if (walletResponse.walletAddress) connectWalletEvent(walletResponse.walletAddress);

  return alert(formatMessage({ id: walletResponse.message }));
};

export default connectWalletUseCase;
