import { User } from 'firebase/auth';
import { Building } from '../types';

export interface State {
  user: User | null;
  building: Building | null;
}

//usuario por padrao é nao logado
export const initialState: State = {
  user: null,
  building: null,
};
