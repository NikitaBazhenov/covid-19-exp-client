import { createContext } from 'react';
import { LIGHT_THEME } from '../constants';

const initialState = {
  theme: LIGHT_THEME,
  toggleTheme: () => {}
};

export default createContext(initialState);