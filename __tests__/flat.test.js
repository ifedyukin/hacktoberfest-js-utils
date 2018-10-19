import flat from '../src/flat';

describe('flat', () => {
  let nestedList = [];

  beforeEach(() => {
    nestedList[0] = [1, 2, 3];
    nestedList[1] = [1, 2, 3, [4, 5]];
    nestedList[2] = [1, 2, 3, [4, 5, [6, 7, [8]]]];
    nestedList[3] = [1, 2, 3, [4, 5, 6, 7, 8]];
  });

  test('should return empty list', () => {
    expect(flat([]).length).toBe(0);
  });

  test('should return the same value is pass the same argument', () => {
    expect(flat(nestedList[0]).length).toBe(3);
    expect(flat(nestedList[1]).length).toBe(5);
    expect(flat(nestedList[2]).length).toBe(8);
    expect(flat(nestedList[3]).length).toBe(8);
    nestedList.forEach(arr => {
      arr.forEach((element, index) => expect(element).toBe(arr[index]));
    });
  });
});
