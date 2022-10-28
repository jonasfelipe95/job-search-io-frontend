import { IUser } from 'domains/User';
import { createEvent } from 'effector';

export const authLogin = createEvent<string>('authLogin')
export const authLoginError = createEvent<string>('authLogin')
export const saveToken = createEvent<string>('saveToken')
export const loadMe = createEvent<IUser>('loadMe')
