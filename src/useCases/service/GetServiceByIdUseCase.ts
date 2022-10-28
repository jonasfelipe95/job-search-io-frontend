import getServiceById from 'services/services/GetServiceById.service';
import { setNotification } from 'stores/notification/NotificationEvents';
import { loadServiceEvent } from 'stores/service/ServiceEvents';

const getServiceByIdUseCase = async (id: string): Promise<any> => {
  try {
    const response = await getServiceById(id);

    const service = response.data.service;

    loadServiceEvent(service);

    return response;
  } catch (error: any) {
    console.error({ error });
    setNotification({ alertType: 'error', alertMessage: error?.response?.data?.error });
    return false;
  }
};

export default getServiceByIdUseCase;
