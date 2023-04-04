import { FC, useState } from 'react';
import { Box, CssBaseline } from '@mui/material';
import { useAppContext } from '../../middleware/context-provider';
import { Navigate } from 'react-router-dom';
import { BuildingTopBar } from './side-menu/building-topbar';
import { BuildingDrawer } from './side-menu/building-drawer';
import { getDrawerHeader } from './side-menu/mui-utils';
import { BuildingFrontMenu } from './front-menu/building-front-menu';
import { FrontMenuMode } from './types';
import { BuildingViewport } from './viewport/building-viewport';

export const BuildingViewer: FC = () => {
  const [sideOpen, setSideOpen] = useState(false);
  const [frontOpen, setFrontOpen] = useState(false);
  const [frontMenuMode, setFrontMenuMode] =
    useState<FrontMenuMode>('BuildingInfo');
  const [width] = useState(240); //de acordo com o material ui

  const [{ user, building }] = useAppContext();

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (!building) {
    return <Navigate to={'/map'} />;
  }

  const toggleDrawer = (active: boolean) => {
    setSideOpen(active);
  };

  const toggleFrontMenu = (active: boolean, mode?: FrontMenuMode) => {
    if (mode) {
      setFrontMenuMode(mode);
    }
    setFrontOpen(active);
  };

  const DrawerHeader = getDrawerHeader();

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <BuildingTopBar
        width={width}
        open={sideOpen}
        onOpen={() => toggleDrawer(true)}
      />

      <BuildingDrawer
        width={width}
        open={sideOpen}
        onClose={() => toggleDrawer(false)}
        onToggleMenu={toggleFrontMenu}
      />

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />

        <BuildingFrontMenu
          onToggleMenu={() => toggleFrontMenu(false)}
          open={frontOpen}
          mode={frontMenuMode}
        />

        <BuildingViewport />
      </Box>
    </Box>
  );
};
