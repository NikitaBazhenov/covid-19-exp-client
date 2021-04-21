import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import numeral from 'numeral';
import { makeStyles } from '@material-ui/core/styles';
import dayjs from 'dayjs';
import { useMemo } from 'react';

const useStyles = makeStyles({
  title: {
    fontSize: 14,
  }
});

function ChartTooltip(props: any) {
  const classes = useStyles();
  const { label, payload } = props;
  const { value  } = payload?.[0] || {};

  const val = useMemo(() => {
    const d = dayjs(label);
    if (d.isValid()) {
      return d.format('MMMM D, YYYY');
    }
    return label
  }, [label]);

  return (
    <Card variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {val}
        </Typography>
        <Typography variant="h5" component="h2">
          {numeral(value).format('0,000')}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default ChartTooltip;