import useCountries from './useCountries';
import useCountriesNumber from './useCountriesNumber';
import useLocation from './useLocation';
import useToggleTotalCases from './useToggleTotalCases';
import { useMemo } from 'react';

export default function useRankedData() {
  const [countriesN] = useCountriesNumber();
  const [sortKey] = useToggleTotalCases();
  const [location] = useLocation();
  const { data, ...rest } = useCountries();
  const { code } = location || {};

  const sorted = useMemo(() =>
    [...data].sort((a: any, b: any) => b[sortKey] - a[sortKey])
    , [data, sortKey])

  const filtered = useMemo(() =>
    sorted.filter(el =>
      !el.code.includes('OWID_') || code === el.code
    ).slice(0, countriesN)
    , [sorted, countriesN, code])

  const loc = useMemo(() => {
    const exist = filtered.find(el => el.code === code);
    if (!exist) {
      let d: any[] = [...filtered];
      d[filtered.length - 1] = data.find((el: any) => el.code === code);
      return d;
    }
    return filtered;
  }, [filtered, code, data])

  return {
    data: loc,
    ...rest
  };
}