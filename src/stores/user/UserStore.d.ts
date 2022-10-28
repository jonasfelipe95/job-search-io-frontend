import { IUser } from "domains/User";

export interface IUserState {
    errorMessage: string;
    user?: IUser | null
}