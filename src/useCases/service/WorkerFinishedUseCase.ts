import workerFinished from 'services/services/WorkerFinished.service';

const workerFinishedUseCase = async (id: string): Promise<any> => {
  try {
    await workerFinished(id);

    return true;
  } catch (error) {
    console.error({ error });
    return false;
  }
};

export default workerFinishedUseCase;
