import startService from 'services/services/StartService.service';

const startServiceUseCase = async (id: string): Promise<any> => {
  try {
    await startService(id);

    return true;
  } catch (error) {
    console.error({ error });
    return false;
  }
};

export default startServiceUseCase;
