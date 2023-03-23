import { FC, useEffect, useRef } from 'react';
import { useAppContext } from '../../middleware/context-provider';
import { Navigate } from 'react-router-dom';
import { Button } from '@mui/material';

export const MapViewer: FC = () => {
  const [state, dispatch] = useAppContext();
  const canvasRef = useRef(null);

  useEffect(() => {
    //onde o mapbox é renderizado
    const canvas = canvasRef.current;
    //se canvas está aberto e user logado
    if (canvas && state.user) {
      dispatch({ type: 'START_MAP', payload: canvas });
    }

    //funcao quando o componente é destruido
    return () => {
      dispatch({ type: 'KILL_MAP' });
    };
  }, []);

  //se nao tem usuário, volta pra login page
  if (!state.user) {
    return <Navigate to="/login" />;
  }

  const onLogout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <>
      <h1>Welcome to the map viewer!</h1>
      <Button variant="outlined" onClick={onLogout}>
        Logout
      </Button>
      <div className="full-screen" ref={canvasRef}></div>
    </>
  );
};
