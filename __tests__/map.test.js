import map from '../src/map';

let arr1;
 arr1 = [1, 2, 3];
let double = num => {
  return num * 2;
};

let triple = num => {
  return num * 3;
};

let stringify = num => {
  return String(num);
};

beforeEach(() => {
  arr1 = [1, 2, 3];
});

describe('map', () => {
  test('double all elements in list', () => {
     expect(map(arr1, double)).toEqual([2, 4, 6]);
   
  });

  test('triple all elements in list', () => {
    // Also define triple function
     expect(map(arr1, triple)).toEqual([3, 6, 9]);
   
  });

  test('stringify all elements in list', () => {
    // also define stringify function
      expect(map(arr1, stringify)).toEqual(['2', '4', '6']);
   
  });
});
