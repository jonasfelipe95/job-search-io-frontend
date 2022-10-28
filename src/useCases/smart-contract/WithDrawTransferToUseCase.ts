import withDrawTransferTo from 'services/smart-contract/WithDrawTransferTo.service';

const withDrawTransferToUseCase = async (
  walletAddressToTransaction: string,
  walletAddressToReceiveValue: string,
  value: number
): Promise<any> => {
  try {
    const response = await withDrawTransferTo(
      walletAddressToTransaction,
      walletAddressToReceiveValue,
      value
    );
    console.log({ response });
    return true;
  } catch (error) {
    console.error({ error });
    // setNotification({ alertType: 'error', alertMessage: error?.response?.data?.error });
    return false;
  }
};

export default withDrawTransferToUseCase;
