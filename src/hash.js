export default randomArgument => {
  randomArgument = randomArgument + ''; // Null safe conversion to String

  var hashCode = 0,
    i,
    chr,
    len;
  if (randomArgument.length === 0) return hashCode;
  for (i = 0, len = randomArgument.length; i < len; i++) {
    chr = randomArgument.charCodeAt(i);
    hashCode = (hashCode << 5) - hashCode + chr;
    hashCode |= 0; // Convert to 32bit integer
  }
  return hashCode;
};
