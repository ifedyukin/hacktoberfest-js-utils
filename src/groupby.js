const groupBy = (data, property) =>
  data.map(element => element[property]).reduce((acc, value, i) => {
    acc[value] = (acc[value] || []).concat(data[i]);
    return acc;
  }, {});

export default groupBy;
