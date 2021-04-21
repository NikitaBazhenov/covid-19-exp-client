import { useContext } from 'react';
import CountriesNumberContext from '../contexts/CountriesNumber';

export default function useCountriesNumber() {
  return useContext(CountriesNumberContext);
}