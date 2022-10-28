import { createEvent } from 'effector';
import { INotification } from './NotificationStore.d';

export const setNotification = createEvent<INotification>('setNotification')

