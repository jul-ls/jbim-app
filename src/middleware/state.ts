import { User } from 'firebase/auth';

export interface State {
  user: User | null;
  building: string | null;
}

//usuario por padrao é nao logado
export const initialState: State = {
  user: null,
  building: null,
};
