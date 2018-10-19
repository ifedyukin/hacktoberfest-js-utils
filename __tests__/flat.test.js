import flat from '../src/flat';

describe('flat', () => {
  let nestedList=[ [1, 2, 3],[1, 2, 3, [4, 5]], [1, 2, 3, [4, 5, [6, 7, [8]]]] ,[1, 2, 3, [4, 5, 6, 7, 8]]];



  test('should return empty list', () => {
    expect(flat([])).toEqual([]);
     expect(flat([]).length).toEqual(0);
  });

  test('should return the same value is pass the same argument', () => {
    expect(flat(  nestedList[0])).toEqual([1,2,3]);
  });

  test('should return flat list with all elements on same level', () => {
    expect(flat(nestedList[1])).toEqual([1, 2, 3, 4, 5]);
  });

  test('should return flat list with all elements on same level', () => {
    expect(flat(nestedList[0]).length).toEqual(3);
    expect(flat(nestedList[1]).length).toEqual(5);
    expect(flat(nestedList[2]).length).toEqual(8);
    expect(flat(nestedList[3]).length).toEqual(8);
  });
});
