import { FC, useEffect, useRef, useState } from 'react';
import { useAppContext } from '../../middleware/context-provider';
import { Navigate } from 'react-router-dom';
import { Button } from '@mui/material';
import './map-viewer.css';

export const MapViewer: FC = () => {
  const [state, dispatch] = useAppContext();

  const containerRef = useRef(null);
  const [isCreating, setIsCreating] = useState(false);

  const { user } = state;

  const onToggleCreate = () => {
    setIsCreating(!isCreating);
  };

  const onCreate = () => {
    if (isCreating) {
      dispatch({ type: 'ADD_BUILDING', payload: user });
      setIsCreating(false);
    }
  };

  useEffect(() => {
    //onde o mapbox é renderizado
    const container = containerRef.current;
    //se container está aberto e user logado
    if (container && user) {
      dispatch({ type: 'START_MAP', payload: { container, user } });
    }

    //funcao quando o componente é destruido
    return () => {
      dispatch({ type: 'KILL_MAP' });
    };
  }, []);

  //se nao tem usuário, volta pra login page
  if (!user) {
    return <Navigate to="/login" />;
  }

  const onLogout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <>
      <h1>Welcome to the map viewer!</h1>

      <div
        onContextMenu={onCreate}
        className="full-screen"
        ref={containerRef}
      ></div>
      {isCreating && (
        <div className="overlay">
          <p>Right click to create a new Building or </p>
          <Button variant="outlined" onClick={onToggleCreate}>
            cancel
          </Button>
        </div>
      )}
      <div className="gis-button-container">
        <Button variant="outlined" onClick={onToggleCreate}>
          Create Building
        </Button>
        <Button variant="outlined" onClick={onLogout}>
          Logout
        </Button>
      </div>
    </>
  );
};
