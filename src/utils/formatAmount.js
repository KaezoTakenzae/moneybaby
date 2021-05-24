export default function formatAmount(amount) {
  if (typeof amount === 'string' && amount.indexOf('.') >= 0) {
    let parts = amount.split('.');
    if (parts[1].length === 1) {
      return amount += '0';
    }
  }
  return amount;
}
