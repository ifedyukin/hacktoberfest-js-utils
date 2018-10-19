const map = function(arr, applyFunction) {
  // Should apply applyFunction to every element in array
  
     const mappedArr = [];
    for (let i = 0; i < arr.length; i++) {
        let mapped = applyFunction(arr[i]);
        mappedArr.push(mapped);
    }
    return mappedArr;
  
  
  
};

export default map;
