import { Action } from './actions';
import { databaseHandler } from '../core/db/db-handler';
import { mapHandler } from '../core/map/map-handler';
import { Events } from './event-handler';

export const executeCore = (action: Action, events: Events) => {
  if (action.type === 'LOGIN') {
    databaseHandler.login();
  }
  if (action.type === 'LOGOUT') {
    databaseHandler.logout();
  }
  if (action.type === 'START_MAP') {
    const { container, user } = action.payload;
    mapHandler.start(container, user, events);
  }
  if (action.type === 'KILL_MAP') {
    mapHandler.remove();
  }

  if (action.type === 'ADD_BUILDING') {
    mapHandler.addBuilding(action.payload);
  }

  if (action.type === 'DELETE_BUILDING') {
    databaseHandler.deleteBuilding(action.payload, events);
  }

  if (action.type === 'UPDATE_BUILDING') {
    databaseHandler.updateBuilding(action.payload);
  }

  if (action.type === 'DELETE_MODEL') {
    const { model, building } = action.payload;
    databaseHandler.deleteModel(model, building, events);
  }

  if (action.type === 'UPLOAD_MODEL') {
    const { model, file, building } = action.payload;
    databaseHandler.uploadModel(model, file, building, events);
  }
};
