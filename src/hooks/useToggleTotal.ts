import { useContext } from 'react';
import ToggleTotalContext from '../contexts/ToggleTotal';

export default function useToggleTotal() {
  return useContext(ToggleTotalContext);
}