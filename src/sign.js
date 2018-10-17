export default number => {
  // TODO
  if (/^(\-|\+)?([0-9]+|Infinity)$/.test(number)) {
    if (Number(number) < 0) {
      return -1;
    }
    if (Number(number) > 0) {
      return 1;
    }
    return Number(number);
  }

  return NaN;
};
