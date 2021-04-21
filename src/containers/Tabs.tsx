import { useCallback, memo, ChangeEvent } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';
import useTabsState from '../hooks/useTabsState';

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  },
});

function DisabledTabs() {
  const classes = useStyles();
  const [value, setValue] = useTabsState();

  const onChange = useCallback((
    event: ChangeEvent<{}>, val: number
  ) => {
    setValue(val);
  }, [setValue]);

  return (
    <div className={classes.root}>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
        onChange={onChange}
      >
        <Tab label="Reported cases" />
        <Tab label="Ranked charts" />
      </Tabs>
    </div>
  );
}

export default memo(DisabledTabs)