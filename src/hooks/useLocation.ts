import { useContext } from 'react';
import LocationContext from '../contexts/Location';

export default function useLocation() {
  return useContext(LocationContext);
}