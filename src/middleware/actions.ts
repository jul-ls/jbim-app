export const ActionList = [
  'LOGIN',
  'LOGOUT',
  'START_MAP',
  'KILL_MAP',
  'UPDATE_USER',
  'ADD_BUILDING',
  'OPEN_BUILDING',
  'KILL_BUILDING',
  'UPDATE_BUILDING',
  'DELETE_BUILDING',
] as const;

export type ActionType = typeof ActionList[number];

export interface Action {
  type: ActionType;
  payload?: any;
}
