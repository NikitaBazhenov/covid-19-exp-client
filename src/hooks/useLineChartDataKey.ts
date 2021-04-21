import useToggleCases from './useToggleCases';
import useToggleTotal from './useToggleTotal';

export default function useLineChartDataKey() {
  const [control1] = useToggleCases();
  const [control2] = useToggleTotal();
  return `${control2}_${control1}`;
}