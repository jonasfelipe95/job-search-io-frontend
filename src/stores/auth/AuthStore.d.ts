import { IUser } from "domains/User";

export interface IAuthState {
    token: string;
    errorMessage: string;
    user?: IUser | null;
}