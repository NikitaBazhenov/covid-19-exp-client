import numeral from 'numeral';

export function numberFormatter(val: any) {
  return numeral(val).format('0.0 a');
}

export const chartMargin = {
  top: 20,
  right: 30,
  left: 20,
  bottom: 5
}