import { IUser } from 'domains/User';
import { createEvent } from 'effector';

export const userRegister = createEvent('userRegister')

export const userRegisterError = createEvent<string>('userRegisterError')

export const loadUser = createEvent<IUser>('loadUser')
