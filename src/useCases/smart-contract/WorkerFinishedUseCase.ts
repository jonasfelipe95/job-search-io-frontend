import workerFinished from 'services/smart-contract/WorkerFinished.service';

const workerFinishedUseCase = async (
  walletAddressToTransaction: string,
  serviceId: string
): Promise<any> => {
  try {
    console.log({ walletAddressToTransaction, serviceId });

    const response = await workerFinished(walletAddressToTransaction, serviceId);
    console.log({ response });
    return response;
  } catch (error) {
    console.error({ error });
    // setNotification({ alertType: 'error', alertMessage: error?.response?.data?.error });
    return false;
  }
};

export default workerFinishedUseCase;
