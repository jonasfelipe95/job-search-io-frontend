import applyForService from 'services/services/ApplyForService.service';
import { setNotification } from 'stores/notification/NotificationEvents';
import { applyForServiceEvent } from 'stores/service/ServiceEvents';

const applyForServiceUseCase = async (id: string): Promise<any> => {
  try {
    await applyForService(id);

    applyForServiceEvent();

    return true;
  } catch (error: any) {
    console.error({ error });
    setNotification({ alertType: 'error', alertMessage: error?.response?.data?.error });
    return false;
  }
};

export default applyForServiceUseCase;
