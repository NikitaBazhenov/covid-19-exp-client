import {
  memo, useState, useMemo, ReactNode, useCallback,
  useEffect
} from 'react';
import { DARK_THEME, LIGHT_THEME } from '../constants';
import ThemeContext from '../contexts/Theme';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { PaletteType } from '@material-ui/core';
import blue from '@material-ui/core/colors/blue';

interface IProps {
  children: ReactNode;
}

const storedState = localStorage.getItem('theme');
const initialState = storedState || LIGHT_THEME;

function Theme({ children }: IProps) {
  const [theme, setTheme] = useState(initialState);
  const prefersDarkMode = useMediaQuery(`(prefers-color-scheme: ${DARK_THEME})`);

  useEffect(() => {
    if (!storedState && prefersDarkMode) {
      setTheme(DARK_THEME);
    }
  }, [prefersDarkMode]);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme(theme => theme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME)
  }, [setTheme]);

  const state = useMemo(() => ({
    theme, toggleTheme
  }), [theme, toggleTheme]);

  const muiTheme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: theme as PaletteType,
          primary: blue
        },
      }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={state}>
      <ThemeProvider theme={muiTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default memo(Theme);