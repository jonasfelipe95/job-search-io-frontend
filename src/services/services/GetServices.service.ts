import Api from '../../Api';

 const getServices = (): Promise<any> => {
    const url = `/services`;
    return Api.get({
      url,
    });
  };

export default getServices