const join = (arr1, arr2, prop) => {
  //function should return join of arr1 and arr2 on prop

  /*
    1. We want to iterate over and compare all objects in both arrays with eachother.
    2. If property of object from first array matches with propety of object from second array,
    then ->
    3. Take all properties from the first object and combine with all properties of the 
    second object.
  */

  // Array onto which we will push return values.
  let retArr = [];

  // Iterate over the first array
  arr1.forEach(arr1Element => {
    let arr1ElementProp = arr1Element[prop];
    // We want to compare this prop to the same prop of all objects in the other array
    // Therefor we need to iterate over the second array as well.
    arr2.forEach(arr2Element => {
      let arr2ElementProp = arr2Element[prop];

      if (arr1ElementProp === arr2ElementProp) {
        // Upon equallity, we want to create a new object onto which we append all unique
        // properties from both arr1Element and arr2Element.
        let newElement = {};

        for (let property in arr1Element) {
          // Add every property from first object onto the new object
          if (arr1Element.hasOwnProperty(property)) {
            newElement[property] = arr1Element[property];
          }
        }

        // Same principle for the other object
        for (let property in arr2Element) {
          if (arr2Element.hasOwnProperty(property)) {
            // But check if the new object already has the property which we are trying
            // to assign to it
            if (!newElement.hasOwnProperty(property)) {
              // If it does not, then add it!
              newElement[property] = arr2Element[property];
            } // Otherwise, do nothing ..
          }
        }
        // We have added all unique properties, push the new object onto retArr.
        retArr.push(newElement);
      }
    });
  });

  return retArr;
};

export default join;
