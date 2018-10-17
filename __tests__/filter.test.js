import filter from '../src/filter';
let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let array2 = [
    { id: 1, value: 'one' },
    { id: 2, value: 'two' },
    { id: 3, value: 'three' },
    { id: 4, value: 'four' },
    { id: 5, value: 'five' }
]

describe('filter', () => {
    test('filter of array1 for divisibility test by 2', () => {
        expect(filter(array1, (item) => (item % 2 === 0))).toEqual([2, 4, 6, 8, 10]);
    });

    test('filter of array1 for divisibility test by 3', () => {
        expect(filter(array1, (item) => (item % 3 === 0))).toEqual([3, 6, 9]);
    });

    test('filter of array2 for presence of object with id 4', () => {
        expect(filter(array2, (item) => (item.id === 4))).toEqual([{ id: 4, value: 'four' }]);
    });

});
