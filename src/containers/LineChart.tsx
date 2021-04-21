import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer
} from 'recharts';
import useDataByLocation from '../hooks/useDataByLocation';
import useLineChartDataKey from '../hooks/useLineChartDataKey';
import { memo } from 'react';
import dayjs from 'dayjs';
import { chartMargin, numberFormatter } from '../utils';
import ChartTooltip from './ChartTooltip';

function dateFormatter(val: any) {
  return dayjs(val).format('MMM YY')
}

const activeDot = { r: 2 };

function LineChartWrap() {
  const { data } = useDataByLocation();
  const dataKey = useLineChartDataKey();

  return (
    <ResponsiveContainer>
      <LineChart data={data} margin={chartMargin}>
        <XAxis
          dataKey="date"
          axisLine={false}
          tickLine={false}
          tickFormatter={dateFormatter}
          minTickGap={30}
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          tickFormatter={numberFormatter}
        />
        <Tooltip content={ChartTooltip} />
        {data.length ? <Line
          type="monotone"
          dot={false}
          dataKey={dataKey}
          stroke="#2196f3"
          activeDot={activeDot}
          strokeWidth={2}
        /> : null}
      </LineChart>
    </ResponsiveContainer>
  );
}

export default memo(LineChartWrap);
