import { memo } from "react"
import LineChart from './LineChart';
import BarChart from './BarChart';
import useTabsState from '../hooks/useTabsState';

function ChartSection() {
  const [tab] = useTabsState();
  if (tab === 1) {
    return <BarChart />;
  }
  return <LineChart />;
}

export default memo(ChartSection);