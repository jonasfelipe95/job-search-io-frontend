import { IUserLogin } from 'domains/User';
import login from 'services/auth/Login.service';
import { authLogin, authLoginError } from 'stores/auth/AuthEvents';

const loginUseCase = async (user: IUserLogin): Promise<any> => {
  try {
    const response = await login(user);

    authLogin(response.data.token);

    localStorage.setItem('authToken', response.data.token);

    return true
  } catch (error: any) {
    console.error({ error });
    authLoginError(error?.response?.data?.error)
    return false
  }
};

export default loginUseCase;
