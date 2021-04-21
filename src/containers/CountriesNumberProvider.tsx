import { memo, ReactNode, useState } from 'react';
import CountriesNumberContext from '../contexts/CountriesNumber';

interface IProps {
  children: ReactNode;
}

const initialState = 10;

function CountriesNumberProvider({ children }: IProps) {
  const store = useState(initialState);

  return (
    <CountriesNumberContext.Provider value={store}>
      {children}
    </CountriesNumberContext.Provider>
  )
}

export default memo(CountriesNumberProvider);