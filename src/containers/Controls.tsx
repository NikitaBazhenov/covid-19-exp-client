import { memo } from "react"
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LeftControl from './LeftControl';
import RightControl from './RightControl';
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    box: {
      [theme.breakpoints.up('sm')]: {
        display: 'flex'
      }
    }
  }),
);

function Controls() {
  const classes = useStyles();
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} sm={6}>
        <LeftControl />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box className={classes.box} justifyContent="flex-end">
          <RightControl />
        </Box>
      </Grid>
    </Grid>
  )
}

export default memo(Controls);