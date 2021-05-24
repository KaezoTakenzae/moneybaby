import formatPercentage from '../utils/formatPercentage';

test('Percentage returns if not a string', () =>
  expect(formatPercentage(24)).toEqual(24)
);

test('Percentage returns to one decimal place if has 0 after decimal', () =>
  expect(formatPercentage('24.50')).toEqual('24.5')
);

test('Percentage returns if no decimals', () =>
  expect(formatPercentage('100')).toEqual('100')
);

test('Percentage returns if does not end in 0', () =>
  expect(formatPercentage('24.75')).toEqual('24.75')
);
