import useData from './useData';
import { useMemo } from 'react';

export default function useCountries() {
  const {data, ...rest} = useData();
  const countries = useMemo(() => data.countries, [data]);
  return { data: countries, ...rest};
}