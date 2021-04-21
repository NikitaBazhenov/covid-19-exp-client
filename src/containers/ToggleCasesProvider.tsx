import { memo, ReactNode, useState } from 'react';
import ToggleCasesContext from '../contexts/ToggleCases';

interface IProps {
  children: ReactNode;
}

const initialState = 'cases';

function ToggleCasesProvider({ children }: IProps) {
  const store = useState(initialState);

  return (
    <ToggleCasesContext.Provider value={store}>
      {children}
    </ToggleCasesContext.Provider>
  )
}

export default memo(ToggleCasesProvider);