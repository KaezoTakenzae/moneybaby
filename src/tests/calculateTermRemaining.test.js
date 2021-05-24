import calculateTermRemaining from '../utils/calculateTermRemaining';

let oneDay = 86400;
let oneMonth = 2628000;
let oneYear = 31536000;

test('Returns if value is not a string', () =>
  expect(calculateTermRemaining(32)).toEqual(32)
);

test('Returns singular day if under one month and not plural', () => {
  expect(calculateTermRemaining(`${oneDay}`)).toEqual('1 day');
  expect(calculateTermRemaining(`${oneDay+2000}`)).toEqual('1 day');
});

test('Returns days if under one month and > 1', () => {
  expect(calculateTermRemaining(`${oneDay*2}`)).toEqual('2 days');
  expect(calculateTermRemaining(`${(oneDay*2) + 2000}`)).toEqual('2 days')
});

test('Returns month & no days if > 1 month < 1 month 1 day', () => {
  expect(calculateTermRemaining(`${oneMonth}`)).toEqual('1 month ');
  expect(calculateTermRemaining(`${oneMonth+2000}`)).toEqual('1 month ');
});

test('Returns month & day if >= 1 month 1 day < 1 month 2days', () => {
  expect(calculateTermRemaining(`${oneMonth + oneDay}`)).toEqual('1 month 1 day');
  expect(calculateTermRemaining(`${oneMonth + oneDay + 2000}`)).toEqual('1 month 1 day');
});

test('Returns month & days if >= 1 month 1 day < 2 months', () => {
  expect(calculateTermRemaining(`${oneMonth + (oneDay*2)}`)).toEqual('1 month 2 days');
  expect(calculateTermRemaining(`${oneMonth + (oneDay*2) + 2000}`)).toEqual('1 month 2 days');
});

test('Returns months if >= 2 months', () => {
  expect(calculateTermRemaining(`${oneMonth*2}`)).toEqual('2 months ');
  expect(calculateTermRemaining(`${(oneMonth*2) + 2000}`)).toEqual('2 months ');
});

test('Returns 1 year if 1 year & 0 days', () => {
  expect(calculateTermRemaining(`${oneYear}`)).toEqual('1 year ');
  expect(calculateTermRemaining(`${oneYear+2000}`)).toEqual('1 year ');
});

test('Returns 1 year 1 day', () =>
  expect(calculateTermRemaining(`${oneYear + oneDay}`)).toEqual('1 year 1 day')
);

test('Returns 1 year & month(s)', () => {
  expect(calculateTermRemaining(`${oneYear + oneMonth}`)).toEqual('1 year 1 month ');
  expect(calculateTermRemaining(`${oneYear + (oneMonth*2)}`)).toEqual('1 year 2 months ');
});

test('Returns 1 year & month(s) & day(s)', () => {
  expect(calculateTermRemaining(`${oneYear + oneMonth + oneDay}`)).toEqual('1 year 1 month 1 day');
  expect(calculateTermRemaining(`${oneYear + (oneMonth*2) + oneDay}`)).toEqual('1 year 2 months 1 day');
  expect(calculateTermRemaining(`${oneYear + (oneMonth*2) + (oneDay*2)}`)).toEqual('1 year 2 months 2 days');
});

test('Returns years when applicable', () => {
  expect(calculateTermRemaining(`${oneYear*2}`)).toEqual('2 years ');
  expect(calculateTermRemaining(`${(oneYear*2) + 2000}`)).toEqual('2 years ');
  expect(calculateTermRemaining(`${(oneYear*2) + oneMonth + oneDay}`)).toEqual('2 years 1 month 1 day');
  expect(calculateTermRemaining(`${(oneYear*2) + (oneMonth*2) + oneDay}`)).toEqual('2 years 2 months 1 day');
  expect(calculateTermRemaining(`${(oneYear*2) + (oneMonth*2) + (oneDay*2)}`)).toEqual('2 years 2 months 2 days');
});
