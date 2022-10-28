import { IUserRegister } from 'domains/User';
import userRegister from 'services/users/Register.service';
import { userRegister as userRegisterEvent, userRegisterError } from 'stores/user/UserEvents';

const userRegisterUseCase = async (user: IUserRegister): Promise<any> => {
  try {
    await userRegister(user);

    userRegisterEvent();

    return true;
  } catch (error: any) {
    console.error({ error });
    userRegisterError(error?.response?.data?.error);
    return false;
  }
};

export default userRegisterUseCase;
