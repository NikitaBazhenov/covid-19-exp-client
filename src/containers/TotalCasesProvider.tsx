import { memo, ReactNode, useState } from 'react';
import ToggleTotalCases from '../contexts/ToggleTotalCases';

interface IProps {
  children: ReactNode;
}

const initialState = 'total_cases';

function TotalCasesProvider({ children }: IProps) {
  const store = useState(initialState);

  return (
    <ToggleTotalCases.Provider value={store}>
      {children}
    </ToggleTotalCases.Provider>
  )
}

export default memo(TotalCasesProvider);