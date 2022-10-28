import { IServiceMin } from 'domains/Service';
import updateService from 'services/services/UpdateService.service';
import { setNotification } from 'stores/notification/NotificationEvents';
import { updateServiceEvent } from 'stores/service/ServiceEvents';

const updateServiceUseCase = async (id: string, service: IServiceMin): Promise<any> => {
  try {
    await updateService(id, service);

    updateServiceEvent();

    return true;
  } catch (error: any) {
    console.error({ error });
    setNotification({ alertType: 'error', alertMessage: error?.response?.data?.error });
    return false;
  }
};

export default updateServiceUseCase;
