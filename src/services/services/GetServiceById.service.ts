import Api from '../../Api';

 const getServiceById = (id: string): Promise<any> => {
    const url = `/services/${id}`;
    return Api.get({
      url,
    });
  };

export default getServiceById