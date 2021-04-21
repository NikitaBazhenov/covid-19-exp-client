import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import useCountries from '../hooks/useCountries';
import { Fragment, useCallback, memo } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import useLocation from '../hooks/useLocation';

interface IOption {
  label: string;
}

const getOptionSelected = (option: IOption, value: IOption) => option?.label === value?.label;
const getOptionLabel = (option: IOption) => option.label;

function CountrySelect() {
  const { data, isLoading } = useCountries();
  const [location, setLocation] = useLocation();
  const onChange = useCallback((e, val) => {
    setLocation(val);
  }, [setLocation]);

  const Input = useCallback(params => (
    <TextField
      {...params}
      label="Geographical location"
      variant="outlined"
      InputProps={{
        ...params.InputProps,
        autoComplete: 'new-password', // disable autocomplete and autofill
        endAdornment: (
          <Fragment>
            {isLoading ? <CircularProgress color="inherit" size={20} /> : null}
            {params.InputProps.endAdornment}
          </Fragment>
        )
      }}
    />
  ), [isLoading])
  
  return (
    <Autocomplete
      id="country-select"
      options={data}
      autoHighlight
      disableClearable={true}
      getOptionSelected={getOptionSelected}
      getOptionLabel={getOptionLabel}
      fullWidth
      value={location as IOption}
      onChange={onChange}
      loading={isLoading}
      renderInput={Input}
    />
  );
}

export default memo(CountrySelect);