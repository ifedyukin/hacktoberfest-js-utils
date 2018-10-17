const pow = (number, power) => {
  if (power === 0) return 1;

  let recPow = pow(number, power / 2);

  // check if odd
  if (power & 1) {
    return power > 0 ? number * recPow * recPow : (recPow * recPow) / number;
  }
  return recPow * recPow;
};

export default pow;
