import { IService } from '../../domains/Service';

export interface IServiceState {
  service?: IService | null;
  services: IService[];
}
