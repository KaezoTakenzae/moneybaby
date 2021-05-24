import stripCommas from '../utils/stripCommas';

test('Remove commas from a string', () => {
  expect(stripCommas('12,359')).toEqual('12359');
});

test('Strip commas does not break if passed a number', () => {
  expect(stripCommas(12359)).toEqual('12359');
});
