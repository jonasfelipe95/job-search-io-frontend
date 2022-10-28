import { IService } from 'domains/Service';
import createService from 'services/services/CreateService.service';
import { setNotification } from 'stores/notification/NotificationEvents';
import { createServiceEvent } from 'stores/service/ServiceEvents';

const createServiceUseCase = async (service: IService): Promise<any> => {
  try {
    const response = await createService(service);

    createServiceEvent();

    return response;
  } catch (error: any) {
    console.error({ error });
    setNotification({ alertType: 'error', alertMessage: error?.response?.data?.error });
    return false;
  }
};

export default createServiceUseCase;
