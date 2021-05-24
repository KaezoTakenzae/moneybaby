import addCommas from '../utils/addCommas';

test('Adding commas to a string works', () => {
  expect(addCommas('12359')).toEqual('12,359');
});

test('Adding commas to a number works', () => {
  expect(addCommas(12359)).toEqual('12,359');
});
