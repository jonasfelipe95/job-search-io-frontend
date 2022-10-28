import { IWorkerApproval } from 'domains/Service';
import Api from '../../Api';

const setWorkerApproval = (id: string, body: IWorkerApproval): Promise<any> => {
  const url = `/services/${id}/worker-approval`;
  return Api.post({
    url,
    body,
  });
};

export default setWorkerApproval;
