import getServices from 'services/services/GetServices.service';
import { setNotification } from 'stores/notification/NotificationEvents';
import { loadServicesEvent } from 'stores/service/ServiceEvents';

const getServicesUseCase = async (): Promise<any> => {
  try {
    const response = await getServices();

    const services = response.data.services;

    loadServicesEvent(services);

    return true;
  } catch (error: any) {
    console.error({ error });
    setNotification({ alertType: 'error', alertMessage: error?.response?.data?.error });
    return false;
  }
};

export default getServicesUseCase;
