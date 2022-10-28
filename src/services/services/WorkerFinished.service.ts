import Api from '../../Api';

const workerFinished = (id: string): Promise<any> => {
  const url = `/services/${id}/worker-finished`;
  return Api.post({
    url,
    body: {},
  });
};

export default workerFinished;
