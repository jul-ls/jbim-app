import { FC } from 'react';
import { Button } from '@mui/material';
import { useAppContext } from '../../middleware/context-provider';
import { Navigate } from 'react-router-dom';

export const BuildingViewer: FC = () => {
  const [state, dispatch] = useAppContext();
  const { building } = state;

  const onCloseBuilding = () => {
    dispatch({ type: 'KILL_BUILDING' });
  };

  if (!building) {
    return <Navigate to={'/map'} />;
  }
  return (
    <>
      <h1>this is a buildingviewer</h1>
      <Button variant="contained" color="success" onClick={onCloseBuilding}>
        Close Building
      </Button>
    </>
  );
};
