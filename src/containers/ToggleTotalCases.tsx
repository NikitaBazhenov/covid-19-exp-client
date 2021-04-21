import { useCallback, memo, MouseEvent } from 'react';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import useToggleTotalCases from '../hooks/useToggleTotalCases';

function Toggle() {
  const [state, setState] = useToggleTotalCases();

  const onChange = useCallback((
    event: MouseEvent<HTMLElement>,
    value: string | null
  ) => {
    setState(value);
  }, [setState]);

  return (
    <ToggleButtonGroup
      size="small"
      value={state}
      exclusive
      onChange={onChange}
      aria-label="deaths/cases"
    >
      <ToggleButton value="total_deaths" aria-label="total deaths">
        total number of deaths
      </ToggleButton>
      <ToggleButton value="total_cases" aria-label="total cases">
        total number of cases
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

export default memo(Toggle);
