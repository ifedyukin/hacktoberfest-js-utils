import negate from '../src/negate';

describe('negate', () => {
  const predicate = (a, b) => a === b;

  test('should return false', () => {
    expect(negate(predicate)(1, 1)).toBeFalsy();
  });

  test('should return true', () => {
    expect(negate(predicate)(1, 2)).toBeFalsy();
  });

  test('should throw error if predicate isn\'t function', () => {
    expect(negate(true)).toThrow('Predicate is not a function!');
  });
});
