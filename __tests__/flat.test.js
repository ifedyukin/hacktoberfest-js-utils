import flat from '../src/flat';

describe('flat', () => {
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
    expect(flat([]).length).toBe(0);
  });

  test('should return the same value is pass the same argument', () => {
    expect(flat(nestedList0).length).toBe(3);
    expect(flat(nestedList1).length).toBe(5);
    expect(flat(nestedList2).length).toBe(8);
    expect(flat(nestedList3).length).toBe(8);
  });
});
