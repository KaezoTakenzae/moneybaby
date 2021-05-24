export default function formatPercentage(percentage) {
  if (typeof percentage === 'string' &&
  percentage.substr(percentage.length - 1) === "0" &&
  percentage.indexOf('.') >= 0) {
    return percentage.substr(0, percentage.length - 1);
  }
  return percentage;
}
