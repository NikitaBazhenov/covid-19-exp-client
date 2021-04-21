import { useCallback, memo, MouseEvent } from 'react';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import useToggleTotal from '../hooks/useToggleTotal';

function ToggleTotal() {
  const [state, setState] = useToggleTotal();

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
      aria-label="new/total"
    >
      <ToggleButton value="new" aria-label="new">
        daily new values
      </ToggleButton>
      <ToggleButton value="total" aria-label="total">
        cumulative mode
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

export default memo(ToggleTotal);
