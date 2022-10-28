import getService from 'services/smart-contract/GetService.service';

const getServiceUseCase = async (
  walletAddressToTransaction: string,
  serviceId: string
): Promise<any> => {

  try {
    const response = await getService(walletAddressToTransaction, serviceId);
    console.log({ response });
    return response;
  } catch (error) {
    console.error({ error });
    // setNotification({ alertType: 'error', alertMessage: error?.response?.data?.error });
    return false;
  }
};

export default getServiceUseCase;
