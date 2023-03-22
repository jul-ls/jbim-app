import { Action } from './actions';
import { userAuth } from '../core/user-auth';

export const executeCore = (action: Action) => {
  if (action.type === 'LOGIN') {
    userAuth.login();
  }
  if (action.type === 'LOGOUT') {
    userAuth.logout();
  }
};
