import getMyBalance from 'services/smart-contract/GetMyBalance.service';

const getMyBalanceUseCase = async (walletAddressToTransaction: string): Promise<any> => {
  try {
    const response = await getMyBalance(walletAddressToTransaction);
    console.log({ response });
    return true;
  } catch (error) {
    console.error({ error });
    // setNotification({ alertType: 'error', alertMessage: error?.response?.data?.error });
    return false;
  }
};

export default getMyBalanceUseCase;
