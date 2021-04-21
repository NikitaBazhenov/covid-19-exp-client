import { memo, ReactNode, useState } from 'react';
import LocationContext from '../contexts/Location';

interface IProps {
  children: ReactNode;
}

const initialState = {
  label: "World",
  code: "OWID_WRL"
};

function LocationProvider({ children }: IProps) {
  const store = useState(initialState);

  return (
    <LocationContext.Provider value={store}>
      {children}
    </LocationContext.Provider>
  )
}

export default memo(LocationProvider);