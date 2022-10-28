import Api from '../../Api';

 const getMe = (): Promise<any> => {
    const url = `/users/me`;
    return Api.get({
      url,
    });
  };

export default getMe