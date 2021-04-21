import { 
  ChangeEvent, useCallback,
  memo, useMemo 
} from "react"
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Box from '@material-ui/core/Box';
import MenuItem from '@material-ui/core/MenuItem';
import useCountries from '../hooks/useCountries';
import useCountriesNumber from '../hooks/useCountriesNumber';

function CountriesNumber() {
  const { data } = useCountries();
  const n = data.length;
  const [value, setValue] = useCountriesNumber();
  const onChange = useCallback((event: ChangeEvent<any>) => {
    setValue(event.target.value);
  }, [setValue]);

  const items = useMemo(() => {
    const items: number[] = [10];
    let k = 20;
    while(k < n) {
      items.push(k);
      k += 20;
    }
    items.push(n);
    return items;
  }, [n])

  return (
    <Box display="flex">
      <Box p={1}>Top</Box>
      <FormControl>
        <Select
          id="countries-number"
          value={value}
          onChange={onChange}
          label="Age"
        >
          {
            items.map(i => (
              <MenuItem value={i} key={i}>{i}</MenuItem>
            ))
          }
        </Select>
      </FormControl>
      <Box p={1}>locations</Box>
    </Box>
  )
}

export default memo(CountriesNumber);