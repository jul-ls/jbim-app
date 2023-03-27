import { FC } from 'react';
import { Box } from '@mui/material';
import { useAppContext } from '../../../../middleware/context-provider';
import './building-info-menu.css';

export const BuildingInfoMenu: FC<{
  onToggleMenu: (active: boolean) => void;
}> = ({ onToggleMenu }) => {
  const [state, dispatch] = useAppContext();

  const { building } = state;
  if (!building) {
    throw new Error('No building active!');
  }
  return (
    <Box>
      <p>Building info goes here</p>
    </Box>
  );
};
