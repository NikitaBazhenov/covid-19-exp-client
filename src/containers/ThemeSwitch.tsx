import IconButton from '@material-ui/core/IconButton';
import BrightnessHighIcon from '@material-ui/icons/BrightnessHigh';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import { memo } from 'react';
import useTheme from '../hooks/useTheme';
import { DARK_THEME } from '../constants';
import Tooltip from '@material-ui/core/Tooltip';

function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Tooltip title="Toggle light/dark theme">
      <IconButton onClick={toggleTheme}>
        {
          theme === DARK_THEME
            ? <BrightnessHighIcon />
            : <Brightness4Icon />
        }
      </IconButton>
    </Tooltip>
  )
}

export default memo(ThemeSwitch);