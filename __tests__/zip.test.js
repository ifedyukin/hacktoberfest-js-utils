import zip from '../src/zip';

describe('zip', () => {
  it('should return an empty list if no arguments were provided', () => {
    expect(zip()).toEqual([]);
  });

  it('should create a list out of the N supplied by pairing up equally-positioned items from each of the lists', () => {
    const arr1 = [1, 2, 3];
    const arr2 = ['one', 'two', 'three'];

    expect(zip(arr1, arr2)).toEqual([[1, 'one'], [2, 'two'], [3, 'three']]);
  });

  it('should create a list with length that equals the length of the most shortest supplied list', () => {
    const arr1 = [1, 2, 3];
    const arr2 = ['one', 'two'];
    const arr3 = ['ONE', 'TWO', 'THREE', 'FOUR'];

    expect(zip(arr1, arr3)).toEqual([[1, 'ONE'], [2, 'TWO'], [3, 'THREE']]);

    expect(zip(arr1, arr2, arr3)).toEqual([
      [1, 'one', 'ONE'],
      [2, 'two', 'TWO'],
    ]);
  });
});
