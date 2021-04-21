import { useQuery } from "react-query";
import { useMemo } from 'react';

const queryKey = 'allData';
const queryFn = () => fetch(`${process.env.REACT_APP_API}/data`).then(res => res.json());
const staleTime = Number(process.env.REACT_APP_CACHE_TIME);

export default function useData() {
  const { data, ...rest } = useQuery(queryKey, queryFn, {
    staleTime
  });

  const parsed = useMemo(() => parse(data), [data]);

  return { 
    data: parsed, 
    ...rest 
  }
}

interface CountryItem {
  code: string;
  label: string;
  total_cases: number;
  total_deaths: number;
}

interface DataState {
  countries: CountryItem[];
  all: any;
}

function parse(data: any = {}): DataState {
  const countries: CountryItem[] = [];

  Object.keys(data).forEach(code => {
    countries.push({
      code, 
      label: data[code].location,
      total_cases: data[code].total_cases,
      total_deaths: data[code].total_deaths
    })
  });

  return {
    all: data,
    countries
  }
}