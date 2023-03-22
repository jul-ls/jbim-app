import { User } from 'firebase/auth';

export interface State {
  user: User | null;
}

//usuario por padrao é nao logado
export const initialState: State = {
  user: null,
};
