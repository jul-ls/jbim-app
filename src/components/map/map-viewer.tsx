import { FC, useEffect, useRef, useState } from 'react';
import { useAppContext } from '../../middleware/context-provider';
import { Navigate } from 'react-router-dom';
import { Button } from '@mui/material';
import './map-viewer.css';

export const MapViewer: FC = () => {
  const [state, dispatch] = useAppContext();

  const containerRef = useRef(null);
  const thumbnailRef = useRef(null);
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
    const container = containerRef.current;
    if (container && user) {
      const thumbnail = thumbnailRef.current;
      dispatch({ type: 'START_MAP', payload: { container, user, thumbnail } });
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
      <div
        className="full-screen"
        onContextMenu={onCreate}
        ref={containerRef}
      />
      {isCreating && (
        <div className="overlay">
          <p>Right click to create a new building or</p>
          <Button variant="contained" color="success" onClick={onToggleCreate}>
            cancel
          </Button>
        </div>
      )}
      <div className="gis-button-container">
        <Button variant="contained" color="success" onClick={onToggleCreate}>
          Create building
        </Button>
        <Button variant="contained" color="success" onClick={onLogout}>
          Logout
        </Button>
      </div>
    </>
  );
};
