import clientFinished from 'services/smart-contract/ClientFinished.service';

const clientFinishedUseCase = async (
  walletAddressToTransaction: string,
  serviceId: string,
  evaluation: number
): Promise<any> => {
  try {
    const response = await clientFinished(walletAddressToTransaction, serviceId, evaluation);
    console.log({ response });
    return true;
  } catch (error) {
    console.error({ error });
    // setNotification({ alertType: 'error', alertMessage: error?.response?.data?.error });
    return false;
  }
};

export default clientFinishedUseCase;
