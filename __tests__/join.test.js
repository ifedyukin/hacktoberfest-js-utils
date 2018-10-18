import join from '../src/join';
let array1 = [
    { id: 1, value: 'one' },
    { id: 5, value: 'five' },
    { id: 3, value: 'three' },
    { id: 6, value: 'six' },
    { id: 7, value: 'seven' }
]
let array2 = [
    { id: 1, value: 'one', uValue: 'ONE' },
    { id: 2, value: 'two' },
    { id: 3, value: 'three', uValue: 'THREE' },
    { id: 4, value: 'four' },
    { id: 5, value: 'five', uValue: 'FIVE' }
]

describe('join', () => {
    test('join of array1 and array2 on id is', () => {
        expect(join(array1, array2, 'id')).toEqual([{ id: 1, value: 'one', uValue: 'ONE' }, { id: 5, value: 'five', uValue: 'FIVE' }, { id: 3, value: 'three', uValue: 'THREE' }]);
    });

    test('join of array2 and array1 on value is', () => {
        expect(join(array2, array1, 'value')).toEqual([{ id: 1, value: 'one', uValue: 'ONE' }, { id: 3, value: 'three', uValue: 'THREE' }, { id: 5, value: 'five', uValue: 'FIVE' }]);
    });

});
