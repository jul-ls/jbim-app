import { executeCore } from './core-handler';
import { Action, ActionList } from './actions';
import { reducer } from './state-handler';
import {
  FC,
  PropsWithChildren,
  useReducer,
  createContext,
  useContext,
} from 'react';
import { initialState, State } from './state';
import { Authenticator } from './authenticator';
import { Events } from './event-handler';

const appContext = createContext<[State, React.Dispatch<Action>]>([
  initialState,
  () => {},
]);

export const ContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, setState] = useReducer(reducer, initialState);

  const dispatch = (value: Action) => {
    setState(value);
    executeCore(value, events);
  };

  const events = new Events();
  for (const type of ActionList) {
    events.on(type, (payload: any) => {
      setState({ type, payload });
    });
  }
  //state e dispatch vao ser dadas a todo o app
  //e dentro children
  return (
    <appContext.Provider value={[state, dispatch]}>
      <Authenticator />
      {children}
    </appContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(appContext);
};
