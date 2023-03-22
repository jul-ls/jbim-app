import { FC } from 'react';
import { useAppContext } from '../../middleware/context-provider';

export const LoginForm: FC = () => {
  //acessando state
  //[1 é state], [2 é dispatch]
  const [state, dispatch] = useAppContext();

  const onLogin = () => {
    console.log(`logged in`);
    dispatch({ type: 'LOGIN' });
  };

  const onLogout = () => {
    console.log(`logged out`);
    dispatch({ type: 'LOGOUT' });
  };

  //se user tiver logado, mostra o app, senao, mostra login button
  return (
    <h1>
      {state.user ? (
        <>
          <p>{state.user.displayName}</p>
          <button onClick={onLogout}>Logout</button>
        </>
      ) : (
        <button onClick={onLogin}>Login</button>
      )}
    </h1>
  );
};
