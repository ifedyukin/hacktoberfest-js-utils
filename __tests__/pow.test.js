import pow from '../src/pow';

describe('pow', () => {
  test('2 to 2 power', () => {
    expect(pow(2, 2)).toBe(4);
  });

  test('-2 to 2 power', () => {
    expect(pow(-2, 2)).toBe(4);
  });

  test('-2 to 3 power', () => {
    expect(pow(-2, 3)).toBe(-8);
  });

  test('10 to 0 power', () => {
    expect(pow(10, 0)).toBe(1);
  });
});
