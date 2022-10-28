import getBalanceOf from "services/smart-contract/GetBalanceOf.service";

const getBalanceOfUseCase = async (
  walletAddressToTransaction: string,
  walletAddressToGetBalance: string
): Promise<any> => {
  try {
    const response = await getBalanceOf(walletAddressToTransaction, walletAddressToGetBalance);
    console.log({ response });
    return true;
  } catch (error) {
    console.error({ error });
    // setNotification({ alertType: 'error', alertMessage: error?.response?.data?.error });
    return false;
  }
};

export default getBalanceOfUseCase;
