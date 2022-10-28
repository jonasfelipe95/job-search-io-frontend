import { createStore } from 'effector';
import { loadUser, userRegister, userRegisterError } from './UserEvents';
import { IUserState } from './UserStore.d';

const initialState: IUserState = {
  errorMessage: '',
  user: null
};

const UserStore = createStore(initialState)
  .on(userRegister, (state) => ({
    ...state,
  }))
  .on(userRegisterError, (state, errorMessage) => ({
    ...state,
    errorMessage,
  }))
  .on(loadUser, (state, user) => ({
    ...state,
    user,
  }));

  

export default UserStore;
