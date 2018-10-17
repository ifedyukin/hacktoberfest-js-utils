import gcd from '../src/gcd';

describe('gcd', () => {
  test('gcd of 3 and 10 is 1', () => {
    expect(gcd(10, 3)).toBe(1);
  });

  test('gcd of 12 and 4  is 4', () => {
    expect(gcd(12, 4)).toBe(4);
  });

  test('gcd of 100 and 25 is 25', () => {
    expect(gcd(100, 25)).toBe(25);
  });

  test('gcd of 123 and 23 is 1', () => {
    expect(gcd(123, 23)).toBe(1);
  });

  test('gcd of 23454 and 124 is 2', () => {
    expect(gcd(23454, 124)).toBe(2);
  });

  test('gcd of 45445 and 1020 is 1', () => {
    expect(gcd(45445, 1020)).toBe(5);
  });
});
