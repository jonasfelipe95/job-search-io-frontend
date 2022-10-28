import getUserById from 'services/users/GetUserById.service';
import { setNotification } from 'stores/notification/NotificationEvents';
import {
    loadUser
} from 'stores/user/UserEvents';

const getUserByIdUseCase = async (id: string): Promise<any> => {
  try {
    const response = await getUserById(id);

    const user = response.data.user;

    loadUser(user);

    return true;
  } catch (error: any) {
    console.error({ error });
    setNotification({ alertType: 'error', alertMessage: error?.response?.data?.error });
    return false;
  }
};

export default getUserByIdUseCase;
