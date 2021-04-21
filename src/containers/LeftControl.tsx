import { memo } from "react"
import ToggleCases from './ToggleCases';
import ToggleTotalCases from './ToggleTotalCases';
import useTabsState from '../hooks/useTabsState';

function LeftControl() {
  const [tab] = useTabsState();
  if (tab === 1) {
    return <ToggleTotalCases/>;
  }
  return <ToggleCases />;
}

export default memo(LeftControl);