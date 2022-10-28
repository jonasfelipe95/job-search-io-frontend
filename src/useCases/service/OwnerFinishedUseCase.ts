import ownerFinished from 'services/services/OwnerFinished.service';

const ownerFinishedUseCase = async (id: string, evaluation: string | number): Promise<any> => {
  try {
    await ownerFinished(id, evaluation);

    return true;
  } catch (error) {
    console.error({ error });
    return false;
  }
};

export default ownerFinishedUseCase;
