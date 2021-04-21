import { 
  BarChart, Bar, XAxis, YAxis, 
  Tooltip, ResponsiveContainer 
} from 'recharts';
import { memo } from 'react';
import useRankedData from '../hooks/useRankedData';
import useToggleTotalCases from '../hooks/useToggleTotalCases';
import { chartMargin, numberFormatter } from '../utils';
import ChartTooltip from './ChartTooltip';

function BarChartWrap() {
  const {data} = useRankedData();
  const [dataKey] = useToggleTotalCases();

  return (
    <ResponsiveContainer>
      <BarChart data={data} margin={chartMargin}>
        <XAxis 
          dataKey="label" 
          axisLine={false}
          tickLine={false}
        />
        <YAxis 
          axisLine={false}
          tickLine={false}
          tickFormatter={numberFormatter}
        />
        <Tooltip content={ChartTooltip} />
        <Bar dataKey={dataKey} fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default memo(BarChartWrap);