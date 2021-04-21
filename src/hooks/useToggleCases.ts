import { useContext } from 'react';
import ToggleCasesContext from '../contexts/ToggleCases';

export default function useToggleCases() {
  return useContext(ToggleCasesContext);
}