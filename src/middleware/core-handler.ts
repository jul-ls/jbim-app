import { Action } from './actions';
import { userAuth } from '../core/user-auth';

export const executeCore = (action: Action) => {
  if (action.type === 'UPDATE_USER') {
    userAuth.login(action);
  }
};
