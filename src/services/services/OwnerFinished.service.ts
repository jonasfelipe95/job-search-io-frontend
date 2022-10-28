import Api from '../../Api';

const ownerFinished = (id: string, evaluation: string | number): Promise<any> => {
  const url = `/services/${id}/owner-finished`;
  return Api.post({
    url,
    body: { evaluation },
  });
};

export default ownerFinished;
