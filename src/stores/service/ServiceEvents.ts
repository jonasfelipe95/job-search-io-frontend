import { IService } from 'domains/Service';
import { createEvent } from 'effector';

export const createServiceEvent = createEvent('createServiceEvent');

export const updateServiceEvent = createEvent('updateServiceEvent');

export const applyForServiceEvent = createEvent('applyForServiceEvent');

export const setWorkerApprovalEvent = createEvent('setWorkerApprovalEvent');

export const loadServiceEvent = createEvent<IService>('loadServiceEvent');

export const loadServicesEvent = createEvent<IService[]>('loadServicesEvent');
