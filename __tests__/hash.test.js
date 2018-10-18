import hash from '../src/hash';

describe('hash', () => {
    let firstRandom;
    let secondRandom;

    beforeEach(() => {
        firstRandom = Math.random();
        secondRandom = Math.random();
    });

    test('should return the same value is pass the same argument', () => {
        expect(hash(firstRandom)).toBe(hash(firstRandom));
    });

    test('should return random value', () => {
        expect(hash(firstRandom)).not.toBe(firstRandom);
    });

    test('should return random value for each new call', () => {
        expect(hash(firstRandom)).not.toBe(hash(secondRandom));
    });
});
