import getMe from 'services/users/GetMe.service';
import { loadMe } from 'stores/auth/AuthEvents';
import { setNotification } from 'stores/notification/NotificationEvents';

const getMeUseCase = async (): Promise<any> => {
  try {
    const response = await getMe();

    const user = response.data.user;

    loadMe(user);

    return true;
  } catch (error: any) {
    console.error({ error });
    setNotification({ alertType: 'error', alertMessage: error?.response?.data?.error });
    return false;
  }
};

export default getMeUseCase;
