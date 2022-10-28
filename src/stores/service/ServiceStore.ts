import { createStore } from 'effector';
import {
  applyForServiceEvent,
  createServiceEvent,
  loadServiceEvent,
  loadServicesEvent,
  setWorkerApprovalEvent,
  updateServiceEvent,
} from './ServiceEvents';
import { IServiceState } from './ServiceStore.d';

const initialState: IServiceState = {
  service: null,
  services: [],
};

const ServiceStore = createStore(initialState)
  .on(createServiceEvent, (state) => ({
    ...state,
  }))
  .on(updateServiceEvent, (state) => ({
    ...state,
  }))
  .on(applyForServiceEvent, (state) => ({
    ...state,
  }))
  .on(setWorkerApprovalEvent, (state) => ({
    ...state,
  }))
  .on(loadServiceEvent, (state, service) => ({
    ...state,
    service,
  }))
  .on(loadServicesEvent, (state, services) => ({
    ...state,
    services,
  }));

export default ServiceStore;
