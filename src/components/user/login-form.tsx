import { FC } from 'react';
import { useAppContext } from '../../middleware/context-provider';
import { Button } from '@mui/material';
import { Navigate } from 'react-router-dom';

export const LoginForm: FC = () => {
  //acessando state
  //[1 é state], [2 é dispatch]
  const [state, dispatch] = useAppContext();

  const onLogin = () => {
    console.log(`logged in`);
    dispatch({ type: 'LOGIN' });
  };

  if (state.user) {
    return <Navigate to="/map" />;
  }

  //se user tiver logado, mostra o app, senao, mostra login button
  return (
    <h1>
      <Button variant="outlined" onClick={onLogin}>
        Log in
      </Button>
    </h1>
  );
};
