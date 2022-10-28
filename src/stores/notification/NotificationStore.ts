import { createStore } from 'effector';
import { setNotification } from './NotificationEvents';
import { INotificationState } from './NotificationStore.d';

const initialState: INotificationState = {
  alertMessage: '',
  alertType: '',
};

const NotificationStore = createStore(initialState).on(setNotification, (state, notification) => ({
  ...state,
  ...notification,
}));

export default NotificationStore;
