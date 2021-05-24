const oneYearInSeconds = 60 * 60 * 24 * 365;
const oneMonthInSeconds = 60 * 60 * 24 * (365 / 12);
const oneDayInSeconds = 60 * 60 * 24;

export default function calculateTermRemaining(term) {
  if (typeof term === 'string') {
    let remaining = parseInt(term, 10);
    let numYears = Math.floor(remaining / oneYearInSeconds);
    let numMonths = Math.floor((remaining % oneYearInSeconds) / oneMonthInSeconds);
    let numDays = Math.floor(((remaining % oneYearInSeconds) % oneMonthInSeconds) / oneDayInSeconds);
    let remainingYears = numYears >= 1 ? `${numYears} year${getS(numYears)} ` : '';
    let remainingMonths = numMonths >= 1 ? `${numMonths} month${getS(numMonths)} ` : '';
    let remainingDays = numDays >= 1 ? `${numDays} day${getS(numDays)}` : '';
    return `${remainingYears}${remainingMonths}${remainingDays}`;
  }
  return term;
}

function getS(value) {
  return value >= 2 ? 's' : '';
}
