import { IServiceMin } from 'domains/Service';
import Api from '../../Api';

const updateService = (id: string, body: IServiceMin): Promise<any> => {
  const url = `/services/${id}`;
  return Api.put({
    url,
    body,
  });
};

export default updateService;
