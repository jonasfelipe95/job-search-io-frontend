import { IUserLogin } from 'domains/User';
import Api from '../../Api';

 const login = (body: IUserLogin): Promise<any> => {
    const url = `/auth/login`;
    return Api.post({
      url,
      body,
    });
  };

export default login