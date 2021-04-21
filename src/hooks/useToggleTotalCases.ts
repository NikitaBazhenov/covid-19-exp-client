import { useContext } from 'react';
import ToggleTotalCases from '../contexts/ToggleTotalCases';

export default function useToggleTotalCases() {
  return useContext(ToggleTotalCases);
}