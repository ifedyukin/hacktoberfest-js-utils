import flat from '../src/flat';

describe('flat', () => {
  let nestedList;
    let nestedList0 = [1, 2, 3];
   let nestedList1 = [1, 2, 3, [4, 5]];
   let nestedList2 = [1, 2, 3, [4, 5, [6, 7, [8]]]];
    let nestedList3 = [1, 2, 3, [4, 5, 6, 7, 8]];

  beforeEach(() => {
    nestedList0 = [1, 2, 3];
    nestedList1 = [1, 2, 3, [4, 5]];
    nestedList2 = [1, 2, 3, [4, 5, [6, 7, [8]]]];
    nestedList3 = [1, 2, 3, [4, 5, 6, 7, 8]];
  });

  test('should return empty list', () => {
    expect(flat([])).toBe([]);
  });

  test('should return the same value is pass the same argument', () => {
    expect(flat(nestedList0)).toBe(nestedList0);
  });

  test('should return flat list with all elements on same level', () => {
    expect(flat(nestedList1)).toBe([1, 2, 3, 4, 5]);
  });

  test('should return flat list with all elements on same level', () => {
    expect(flat(nestedList2)).toBe(flat(nestedList3));
  });
});
