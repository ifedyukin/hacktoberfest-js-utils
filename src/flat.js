const flat = list => {
  // Function takes a list as argument, should return a list with all
  // elements from passed list at level 0
   return list.reduce((acc, val) => Array.isArray(val) ? acc.concat(flat(val)) : acc.concat(val), []);
};

export default flat;
