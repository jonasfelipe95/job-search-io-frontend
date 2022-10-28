import { IUserRegister } from 'domains/User';
import Api from '../../Api';

 const userRegister = (body: IUserRegister): Promise<any> => {
    const url = `/users/register`;
    return Api.post({
      url,
      body,
    });
  };

export default userRegister