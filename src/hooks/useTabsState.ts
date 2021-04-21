import { useContext } from 'react';
import TabContext from '../contexts/Tabs';

export default function useTabsState() {
  return useContext(TabContext);
}