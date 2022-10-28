import { IService } from 'domains/Service';
import createService from 'services/smart-contract/CreateService.service';

const createServiceUseCase = async (
  service: IService
): Promise<any> => {
  try {
    const response = await createService(service);
    console.log({ response });
    return response;
  } catch (error) {
    console.error({ error });
    // setNotification({ alertType: 'error', alertMessage: error?.response?.data?.error });
    return false;
  }
};

export default createServiceUseCase;
