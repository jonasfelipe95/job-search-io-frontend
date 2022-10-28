import deposit from 'services/smart-contract/Deposit.service';

const depositUseCase = async (walletAddressToTransaction: string, value: number): Promise<any> => {
  try {
    const response = await deposit(walletAddressToTransaction, value);
    console.log({ response });
    return true;
  } catch (error) {
    console.error({ error });
    // setNotification({ alertType: 'error', alertMessage: error?.response?.data?.error });
    return false;
  }
};

export default depositUseCase;
