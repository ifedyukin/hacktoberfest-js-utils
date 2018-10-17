const capitalize = str => {
  /*
   takes a string and a capitalize the first letter, lower all the others

   eg: capitalize('blaBlaCar') results in this: 'Blablacar'
  */
  let firstPart = str[0];
  let secondPart = '';
  for (let i = 1; i < str.length; i++) {
    secondPart += str[i];
  }
  return firstPart.toUpperCase() + secondPart.toLowerCase();
};

export default capitalize;