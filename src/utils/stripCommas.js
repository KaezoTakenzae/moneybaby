export default function stripCommas(value) {
  if (typeof value !== 'string') {
    value = String(value);
  }
  return value.replace(',', '');
}
