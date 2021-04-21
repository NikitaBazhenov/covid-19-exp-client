import { memo, ReactNode, useState } from 'react';
import ToggleTotalContext from '../contexts/ToggleTotal';

interface IProps {
  children: ReactNode;
}

const initialState = 'new';

function ToggleTotalProvider({ children }: IProps) {
  const store = useState(initialState);

  return (
    <ToggleTotalContext.Provider value={store}>
      {children}
    </ToggleTotalContext.Provider>
  )
}

export default memo(ToggleTotalProvider);