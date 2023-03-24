import { Action } from './actions';
import { userAuth } from '../core/user/user-auth';
import { mapHandler } from '../core/map/map-handler';

export const executeCore = (action: Action) => {
  if (action.type === 'LOGIN') {
    userAuth.login();
  }
  if (action.type === 'LOGOUT') {
    userAuth.logout();
  }
  if (action.type === 'START_MAP') {
    const { container, user } = action.payload;
    mapHandler.start(container, user);
  }
  if (action.type === 'KILL_MAP') {
    mapHandler.remove();
  }

  if (action.type === 'ADD_BUILDING') {
    mapHandler.addBuilding(action.payload);
  }
};
