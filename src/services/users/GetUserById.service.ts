import Api from '../../Api';

 const getUserById = (id: string): Promise<any> => {
    const url = `/users/${id}`;
    return Api.get({
      url,
    });
  };

export default getUserById