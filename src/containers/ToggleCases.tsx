import { useCallback, memo, MouseEvent } from 'react';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import useToggleCases from '../hooks/useToggleCases';

function ToggleCases() {
  const [state, setState] = useToggleCases();

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
      <ToggleButton value="cases" aria-label="cases">
        confirmed cases
      </ToggleButton>
      <ToggleButton value="deaths" aria-label="deaths">
        death count
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

export default memo(ToggleCases);
