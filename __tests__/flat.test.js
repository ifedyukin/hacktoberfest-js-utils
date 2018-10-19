import flat from '../src/flat';

describe('flat', () => {
  let nestedList=[ [1, 2, 3],[1, 2, 3, [4, 5]], [1, 2, 3, [4, 5, [6, 7, [8]]]] ,[1, 2, 3, [4, 5, 6, 7, 8]]];



  test('should return empty list', () => {
    expect(flat([])).toBe([]);
     expect(flat([]).length).toBe(0);
  });

  test('should return the same value is pass the same argument', () => {
    expect(flat(  nestedList[0])).toBe([1,2,3]);
  });

  test('should return flat list with all elements on same level', () => {
    expect(flat(nestedList[1])).toBe([1, 2, 3, 4, 5]);
  });

  test('should return flat list with all elements on same level', () => {
    expect(flat(nestedList[0]).length).toBe(3);
    expect(flat(nestedList[1]).length).toBe(5);
    expect(flat(nestedList[2]).length).toBe(8);
    expect(flat(nestedList[3]).length).toBe(8);
  });
});
