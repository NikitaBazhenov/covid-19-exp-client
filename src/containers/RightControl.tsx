import { memo } from "react"
import ToggleTotal from './ToggleTotal';
import CountriesNumber from './CountriesNumber';
import useTabsState from '../hooks/useTabsState';

function RightControl() {
  const [tab] = useTabsState();
  if (tab === 1) {
    return <CountriesNumber/>;
  }
  return <ToggleTotal />
}

export default memo(RightControl);