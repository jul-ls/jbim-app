export type ActionType =
  | 'LOGIN'
  | 'LOGOUT'
  | 'START_MAP'
  | 'KILL_MAP'
  | 'UPDATE_USER'
  | 'ADD_BUILDING'
  | 'OPEN_BUILDING'
  | 'KILL_BUILDING';

export interface Action {
  type: ActionType;
  payload?: any;
}
