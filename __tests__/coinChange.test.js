import coinChange from '../src/coinChange';

describe('coinChange', () => {
  it('should validate input', () => {
    expect(coinChange([], 45)).toThrow();
    expect(coinChange([], null)).toThrow();
  });

  it('should return the number of required coins', () => {
    expect(coinChange([1, 5, 10, 25], 45)).toEqual(3);
    expect(coinChange([1, 5, 10, 25], 23)).toEqual(5);
    expect(coinChange([1, 5, 10, 25], 74)).toEqual(8);
  });
});
