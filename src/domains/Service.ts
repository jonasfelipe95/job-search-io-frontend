export interface INewService {
  title: string;
  description: string;
  value: number;
}

export interface IServiceMin {
  _id?: string;
  title?: string;
  description?: string;
  value?: number;
}

export interface IService {
  _id?: string;
  title: string;
  description: string;
  user?: string;
  owner?: string;
  worker?: string;
  value: number;
  status?: string | number;
  candidates?: ICandidate[];
  ownerValidation?: boolean;
  workerValidation?: boolean;
  evaluation?: number;
}

export interface ICandidate {
  _id: string;
  name: string;
  status?: 'CANDIDATE' | 'APPROVED' | 'REFUSED';
}

export interface IWorkerApproval {
  answer: 'REFUSED' | 'APPROVED';
  workerId: string;
}

export enum ServiceStatus {
  STARTED,
  CANCELED,
  FINISHED,
  PAYED,
}
