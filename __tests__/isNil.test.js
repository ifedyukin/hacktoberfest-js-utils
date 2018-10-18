import isNil from '../src/isNil';

describe('isNil', () => {
  test('null is nil', () => {
    expect(isNil(null)).toBe(true);
  });

  test('undefined is nil', () => {
    expect(isNil(undefined)).toBe(true);
  });

  test('NaN is not nil', () => {
    expect(isNil(NaN)).toBe(false);
  });

  test('0 is not nil', () => {
    expect(isNil(0)).toBe(false);
  });

  test('true is not nil', () => {
    expect(isNil(true)).toBe(false);
  });

  test('false is not nil', () => {
    expect(isNil(false)).toBe(false);
  });

  test('empty string is not nil', () => {
    expect(isNil('')).toBe(false);
  });
});
