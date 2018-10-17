import capitalize from '../src/capitalize';

describe('capitalize', () => {
  test('capitalized algolia to equal Algolia', () => {
    expect(capitalize('algolia')).toBe('Algolia');
  });

  test('capitalized BlaBlaCar to equal Blablacar', () => {
    expect(capitalize('BlaBlaCar')).toBe('Blablacar');
  });

  test('capitalized 9Gag to equal 9gag', () => {
    expect(capitalize('9Gag')).toBe('9gag');
  });
});
