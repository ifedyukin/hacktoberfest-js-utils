const DIRECTION = {
  TOP: 'top',
  LEFT: 'left',
  RIGHT: 'right',
  BOTTOM: 'bottom',
};

let POSITION = [0, 0];

let MATRIX = [
  ['01', '02', '03', '04', '05'],
  ['06', '07', '08', '09', '10'],
  ['11', '12', '13', '14', '15'],
  ['16', '17', '18', '19', '20'],
  ['21', '22', '23', '24', '25'],
];

const getRow = n => MATRIX[n];

const getColumn = n => MATRIX
  .reduce((col, row) => col.concat(row[n]), []);

const clearArray = array => array.filter(Boolean);

const deleteRow = (n) => {
  delete MATRIX[n];
  MATRIX = clearArray(MATRIX);
};

const deleteColumn = (n) => {
  MATRIX = MATRIX
    .reduce((matrix, row) => {
      delete row[n];
      return matrix.concat([clearArray(row)]);
    }, []);
};

const getArrayByDirection = (position, direction) => {
  const [i, j] = position;
  switch (direction) {
    case DIRECTION.RIGHT:
      return getRow(i);
    case DIRECTION.BOTTOM:
      return getColumn(j);
    case DIRECTION.LEFT:
      return [...getRow(i)].reverse();
    case DIRECTION.TOP:
      return [...getColumn(j)].reverse();
  }
};

const getNextDirection = (position) => {
  const [i, j] = position;

  if (j === 0) {
    return i ? DIRECTION.TOP : DIRECTION.RIGHT;
  } else {
    return i ? DIRECTION.LEFT : DIRECTION.BOTTOM;
  }
};

const getNextStepByDirection = (position, direction) => {
  const [i, j] = position;
  const size = MATRIX[0].length - 1;

  switch (direction) {
    case DIRECTION.RIGHT:
      return [i, size];
    case DIRECTION.BOTTOM:
      return [size, j - 1];
    case DIRECTION.LEFT:
      return [size, 0];
    case DIRECTION.TOP:
      return [0, 0];
  }
};

const elementDelete = (position, direction) => {
  const [i, j] = position;
  switch (direction) {
    case DIRECTION.TOP:
    case DIRECTION.BOTTOM:
      deleteColumn(j);
      break;
    case DIRECTION.LEFT:
    case DIRECTION.RIGHT:
      deleteRow(i);
      break;
  }
};

const spiral = () => {
  const RESULT = [];

  while (MATRIX.length && MATRIX[0] && MATRIX[0].length) {
    const nextDirection = getNextDirection(POSITION);
    const arrayByDirection = getArrayByDirection(POSITION, nextDirection);

    RESULT.push(...arrayByDirection);
    elementDelete(POSITION, nextDirection);

    if (!MATRIX || !MATRIX[0]) break;
    POSITION = getNextStepByDirection(POSITION, nextDirection);
  };

  return RESULT;
};

export default spiral;
