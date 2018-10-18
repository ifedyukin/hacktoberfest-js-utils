const filter = (array, predicate) => {
  //function should return filtered array as per the predicate provided. Dont use Array.filter()
  //e.g. filter([1,2,3],item=>item===1) returns [1];

  return array.reduce((result, item) => {
    return predicate(item) ? [...result, item] : result;
  }, []);
};

export default filter;
