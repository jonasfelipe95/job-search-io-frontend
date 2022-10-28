import { IWorkerApproval } from 'domains/Service';
import setWorkerApproval from 'services/services/SetWorkerApproval.service';
import { setNotification } from 'stores/notification/NotificationEvents';
import { setWorkerApprovalEvent } from 'stores/service/ServiceEvents';

const setWorkerApprovaleUseCase = async (
  id: string,
  workerApproval: IWorkerApproval
): Promise<any> => {
  try {
    await setWorkerApproval(id, workerApproval);

    setWorkerApprovalEvent();

    return true;
  } catch (error: any) {
    console.error({ error });
    setNotification({ alertType: 'error', alertMessage: error?.response?.data?.error });
    return false;
  }
};

export default setWorkerApprovaleUseCase;
