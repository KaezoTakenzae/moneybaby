export default function addCommas(value) {
  let regEx = /(\d)(?=(\d{3})+(?!\d))/g;
  let replace = '$1,';
  if (typeof value !== 'string') {
    value = String(value);
  }
  return value.replace(regEx, replace);
}
