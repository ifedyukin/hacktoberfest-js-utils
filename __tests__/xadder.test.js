import xadder from '../src/xadder';

describe('xadder', () => {
  test('xadder of 10 followed by 3 is 13', () => {
    expect(xadder(10)(3)).toBe(13);
  });

  test('xadder of 3 followed by 10 is 13', () => {
    expect(xadder(3)(10)).toBe(13);
  });

  test('xadder of 1000 followed by 2000 is 3000', () => {
    expect(xadder(1000)(2000)).toBe(3000);
  });

  test('xadder of -4000 followed by -3000 is -7000', () => {
    expect(xadder(-4000)(-3000)).toBe(-7000);
  });

  test('xadder of -10 followed by 300 is 290', () => {
    expect(xadder(-10)(300)).toBe(290);
  });
});
