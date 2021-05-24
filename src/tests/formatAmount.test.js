import formatAmount from '../utils/formatAmount';

test('Amount returns if not a string', () =>
  expect(formatAmount(24)).toEqual(24)
);

test('Amount returns number without decimal places if there are none', () =>
  expect(formatAmount('24')).toEqual('24')
);

test('Amount returns number with a 0 if only one decimal place', () =>
  expect(formatAmount('24.5')).toEqual('24.50')
);

test('Amount returns number if 2 decimal places already', () =>
  expect(formatAmount('24.75')).toEqual('24.75')
);
