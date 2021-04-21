import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import useData from '../hooks/useData';
import { memo } from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  }),
);

function SimpleBackdrop() {
  const { isError, error } = useData();
  const classes = useStyles();
  if (!isError) {
    return null;
  }
  return (
    <Backdrop className={classes.backdrop} open={isError}>
      <CircularProgress color="inherit" />
      <span>{`${error}`}</span>
    </Backdrop>
  );
}

export default memo(SimpleBackdrop)