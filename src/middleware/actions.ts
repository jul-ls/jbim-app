export type ActionType =
  | 'LOGIN'
  | 'LOGOUT'
  | 'START_MAP'
  | 'KILL_MAP'
  | 'UPDATE_USER';

export interface Action {
  type: ActionType;
  payload?: any;
}
