import atbash from '../src/atbash';

describe('atbash', () => {
  test('Correct alphabet substitution', () => {
    expect(atbash('ABCDEFGHIJKLMNOPQRSTUVWXYZ')).toBe(
      'ZYXWVUTSRQPONMLKJIHGFEDCBA',
    );
  });

  test('Correct reverse alphabet substitution', () => {
    expect(atbash('ZYXWVUTSRQPONMLKJIHGFEDCBA')).toBe(
      'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    );
  });

  test('Correct encoding: HACKTOBERFEST => SZXPGLYVIUVHG', () => {
    expect(atbash('HACKTOBERFEST')).toBe('SZXPGLYVIUVHG');
  });

  test('Correct decoding: TRGSFY => GITHUB', () => {
    expect(atbash('TRGSFY')).toBe('GITHUB');
  });

  test('Correct encoding: HOLD => SLOW', () => {
    expect(atbash('HOLD')).toBe('SLOW');
  });

  test('Correct decoding: ZOO => ALL', () => {
    expect(atbash('ZOO')).toBe('ALL');
  });
});
