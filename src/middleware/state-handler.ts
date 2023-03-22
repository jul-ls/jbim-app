import { Action } from './actions';
import { State } from './state';

export const reducer = (state: State, action: Action) => {
  //gerenciando as ações
  if (action.type === 'UPDATE_USER') {
    return { ...state, user: action.payload };
  }
  return { ...state };
};
