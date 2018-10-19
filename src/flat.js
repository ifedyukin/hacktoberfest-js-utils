const flat = list => {
  // Function takes a list as argument, should return a list with all
  // elements from passed list at level 0
  return list.reduce((acc, item) => {
    if (Array.isArray(item)) {
      acc = [...acc, ...flat(item)];
    } else {
      acc[acc.length] = item;
    }
    return acc;
  }, []);
};

export default flat;
