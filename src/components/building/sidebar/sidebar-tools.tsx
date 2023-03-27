import { State } from '../../../middleware/state';
import { Action } from '../../../middleware/actions';
import { Tool } from '../../../types';
import ListIcon from '@mui/icons-material/ViewList';

export function getSidebarTools(
  state: State,
  dispatch: React.Dispatch<Action>,
  toggleMenu: () => void
): Tool[] {
  return [
    {
      name: 'Info',
      icon: <ListIcon />,
      action: () => {
        toggleMenu();
      },
    },
  ];
}
