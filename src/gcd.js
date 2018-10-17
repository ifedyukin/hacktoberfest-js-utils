const gcd = (first, second) => {
  //function should return gcd of two numbers first and second
  if (!second) {
    return first;
  }

  return gcd(second, first % second);
};

export default gcd;
