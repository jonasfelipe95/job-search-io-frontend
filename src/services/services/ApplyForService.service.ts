import Api from '../../Api';

const applyForService = (id: string): Promise<any> => {
  const url = `/services/${id}/apply-for-service`;
  return Api.post({
    url,
    body: {},
  });
};

export default applyForService;
