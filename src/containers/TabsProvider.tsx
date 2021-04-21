import { memo, ReactNode, useState } from 'react';
import TabsContext from '../contexts/Tabs';

interface IProps {
  children: ReactNode;
}

const initialState = 0;

function TabsProvider({ children }: IProps) {
  const store = useState(initialState);

  return (
    <TabsContext.Provider value={store}>
      {children}
    </TabsContext.Provider>
  )
}

export default memo(TabsProvider);