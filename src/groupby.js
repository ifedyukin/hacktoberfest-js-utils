const groupBy = (data, property) => {
  /*
   takes in an array of objects and a property to group by and returns an object with new arrays grouped by the given property
  
   eg: datapoints = [{
    time: '09:00',
    data: 9
   }, {
    time: '12:00',
    data: 3
   }, {
    time: '09:00',
    data: 39
   }]
  
   groupBy(datapoints, 'time') results in this:
  
   {
    '09:00': [{
      time: '09:00',
      data: 39
    }, {
      time: '09:00',
      data: 9
    }],
    '12:00': [{
      time: '12:00',
      data: 3
    }]
   }
  */
};

export default groupBy;
