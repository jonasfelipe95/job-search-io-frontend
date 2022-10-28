import Api from '../../Api';

const startService = (id: string): Promise<any> => {
  const url = `/services/${id}/start`;
  return Api.post({
    url,
    body: {},
  });
};

export default startService;
