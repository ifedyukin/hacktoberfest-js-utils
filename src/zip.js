export default (...arrays) => {
  if (!arrays.length) {
    return [];
  }

  const min = Math.min.apply(Math, arrays.map(arr => arr.length));
  const result = [];

  for (let i = 0; i < min; i++) {
    result.push(
      arrays.reduce((acc, arr) => {
        return [...acc, arr[i]];
      }, []),
    );
  }

  return result;
};
