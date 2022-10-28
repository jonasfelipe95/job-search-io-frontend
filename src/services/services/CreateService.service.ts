import { INewService } from 'domains/Service';
import Api from '../../Api';

const createService = (body: INewService): Promise<any> => {
  const url = `/services/create`;
  return Api.post({
    url,
    body,
  });
};

export default createService;
