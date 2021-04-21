import { useMemo } from 'react';
import useData from './useData';
import useLocation from './useLocation';

export default function useDataByLocation() {
  const { data, ...rest } = useData();
  const [location] = useLocation();
  const { code } = location;
  const locData = useMemo(() => data.all?.[code]?.data || [], [data, code]);
  return { data: locData, ...rest };
}