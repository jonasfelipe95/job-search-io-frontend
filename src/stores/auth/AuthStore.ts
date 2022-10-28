import { createStore } from 'effector';
import { authLogin, authLoginError, loadMe, saveToken } from './AuthEvents';
import { IAuthState } from './AuthStore.d';

const initialState: IAuthState = {
  token: '',
  errorMessage: '',
  user: null
};

const AuthStore = createStore(initialState)
  .on(authLogin, (state, token) => ({
    ...state,
    errorMessage: '',
    token,
  }))
  .on(authLoginError, (state, errorMessage) => ({
    ...state,
    errorMessage,
  }))
  .on(saveToken, (state, token) => ({
    ...state,
    errorMessage: '',
    token,
  }))  .on(loadMe, (state, user) => ({
    ...state,
    user,
  }));

export default AuthStore;
