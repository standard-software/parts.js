const {
  isUndefined, isNull, isNaNStrict,
  isBoolean, isNumber, isInteger, isString,
  isFunction, isObject, isArray, isDate, isRegExp,
  isException,
} = require('../type/type.js');

const {
  isEven,
} = require('../number/number.js');

const {
  isObjectParameter,
} = require('../object/isObjectParameter.js');

const {
  _clone, _cloneDeep,
} = require('../root/clone.js');

/**
 * array.min max
 */
const _min = (array) => {
  if (array.length === 0) {
    return null;
  }
  let result = array[0];
  for (let i = 0, l = array.length; i < l; i += 1) {
    if (!isNumber(array[i])) {
      throw new TypeError(
        '_min args(array) element is not number',
      );
    }
    if (array[i] < result) {
      result = array[i];
    }
  }
  return result;
};

const min = (array) => {
  if (!isArray(array)) {
    throw new TypeError(
      'min args(array) is not array',
    );
  }
  return _min(array);
};

const _max = (array) => {
  if (array.length === 0) {
    return null;
  }
  let result = array[0];
  for (let i = 0, l = array.length; i < l; i += 1) {
    if (!isNumber(array[i])) {
      throw new TypeError(
        '_max args(array) element is not number',
      );
    }
    if (result < array[i]) {
      result = array[i];
    }
  }
  return result;
};

const max = (array) => {
  if (!isArray(array)) {
    throw new TypeError(
      'max args(array) is not array',
    );
  }
  return _max(array);
};

/**
 * from
 */
const from = (arrayLike) => {
  return Array.prototype.slice.call(arrayLike);
};

/**
 * sum
 */
const _sum = (array) => {
  let result = 0;
  for (let i = 0, l = array.length; i < l; i += 1) {
    if (!isNumber(array[i])) {
      throw new TypeError(
        '_min args(array) element is not number',
      );
    }
    result += array[i];
  }
  return result;
};

const sum = (array) => {
  if (!isArray(array)) {
    throw new TypeError(
      'sum args(array) is not array',
    );
  }
  return _sum(array);
};

/**
 * average
 */
const _average = (array) => {
  if (array.length === 0) {
    return null;
  }
  return _sum(array) / array.length;
};

const average = (array) => {
  if (!isArray(array)) {
    throw new TypeError(
      'average args(array) is not array',
    );
  }
  return _average(array);
};

/**
 * median
 */
const _median = (array) => {
  const sortedArray = _cloneDeep(array);
  sortedArray.sort((a, b) => {
    return a - b;
  });
  if (isEven(sortedArray.length)) {
    // Even number length
    const centerIndex = sortedArray.length / 2;
    return (
      sortedArray[centerIndex - 1] +
      sortedArray[centerIndex]
    ) / 2;
  } else {
    // Odd number length
    return sortedArray[(sortedArray.length - 1) / 2];
  }
};

const median = (array) => {
  if (!isArray(array)) {
    throw new TypeError(
      'median args(array) is not array',
    );
  }
  return _median(array);
};

/**
 * mode
 */
const _mode = (array) => {
  if (array.length === 0) {
    return [];
  }
  const uniqueArray = _unique(array);
  const countArray = _map(uniqueArray,
    (element1) => _filter(array,
      (element2) => element1 === element2).length,
  );
  const maxValue = _max(countArray);
  return _filter(uniqueArray,
    (element, index) => countArray[index] === maxValue,
  );
};

const mode = (array) => {
  if (!isArray(array)) {
    throw new TypeError(
      'mode args(array) is not array',
    );
  }
  return _mode(array);
};

/**
 * uniqe
 */
const _unique = (array) => {
  const resultArray = [];
  for (let i = 0, l = array.length; i < l; i += 1) {
    if (!resultArray.includes(array[i])) {
      resultArray.push(array[i]);
    }
  }
  return resultArray;
};

const unique = (array) => {
  if (!isArray(array)) {
    throw new TypeError(
      'unique args(array) is not array',
    );
  }
  return _unique(array);
};

/**
 * single
 */
const _single = (array) => {
  if (array.length === 0) {
    return [];
  }
  const uniqueArray = _unique(array);
  const countArray = _map(uniqueArray,
    (element1) => _filter(array,
      (element2) => element1 === element2).length,
  );
  return _filter(uniqueArray,
    (element, index) => countArray[index] === 1,
  );
};

const single = (array) => {
  if (!isArray(array)) {
    throw new TypeError(
      'single args(array) is not array',
    );
  }
  return _single(array);
};

/**
 * multiple
 */
const _multiple = (array) => {
  if (array.length === 0) {
    return [];
  }
  const uniqueArray = _unique(array);
  const countArray = _map(uniqueArray,
    (element1) => _filter(array,
      (element2) => element1 === element2).length,
  );
  return _filter(uniqueArray,
    (element, index) => countArray[index] >= 2,
  );
};

const multiple = (array) => {
  if (!isArray(array)) {
    throw new TypeError(
      'multiple args(array) is not array',
    );
  }
  return _multiple(array);
};

/**
 * filter
 */
const _filter = (array, func) => {
  const result = [];
  for (let i = 0, l = array.length; i < l; i += 1) {
    const resultFunc = func(array[i], i, array);
    if (!isBoolean(resultFunc)) {
      throw new TypeError(
        '_filter args(compareFunc) result is not boolean',
      );
    }
    if (resultFunc) {
      result.push(array[i]);
    }
  }
  return result;
};

const filter = (array, func) => {
  if (isObjectParameter(array, 'array, func')) {
    ({ array, func } = array);
  }

  if (!isArray(array)) {
    throw new TypeError(
      'filter args(array) is not array',
    );
  }
  if (!isFunction(func)) {
    throw new TypeError(
      'filter args(compareFunc) is not function',
    );
  }
  return _filter(array, func);
};

/**
 * map
 */
const _map = (array, func) => {
  const result = [];
  for (let i = 0, l = array.length; i < l; i += 1) {
    const resultFunc = func(array[i], i, array);
    result.push(resultFunc);
  }
  return result;
};

const map = (array, func) => {
  if (isObjectParameter(array, 'array, func')) {
    ({ array, func } = array);
  }

  if (!isArray(array)) {
    throw new TypeError(
      'map args(array) is not array',
    );
  }
  if (!isFunction(func)) {
    throw new TypeError(
      'map args(productFunc) is not function',
    );
  }
  return _map(array, func);
};

/**
 * count
 */
const _count = (array, func) => {
  let result = 0;
  for (let i = 0, l = array.length; i < l; i += 1) {
    const resultFunc = func(array[i], i, array);
    if (!isBoolean(resultFunc)) {
      throw new TypeError(
        '_count args(func) result is not boolean',
      );
    }
    if (resultFunc) {
      result += 1;
    }
  }
  return result;
};

const count = (array, func) => {
  if (isObjectParameter(array, 'array, func')) {
    ({ array, func } = array);
  }

  if (!isArray(array)) {
    throw new TypeError(
      'count args(array) is not array',
    );
  }
  if (!isFunction(func)) {
    throw new TypeError(
      'count args(func) is not function',
    );
  }
  return _count(array, func);
};

/**
 * findIndex
 */
const _findFirstIndex = (array, func) => {
  for (let i = 0, l = array.length; i < l; i += 1) {
    const resultFunc = func(array[i], i, array);
    if (!isBoolean(resultFunc)) {
      throw new TypeError(
        '_findFirstIndex args(compareFunc) result is not boolean',
      );
    }
    if (resultFunc) {
      return i;
    }
  }
  return -1;
};

const findFirstIndex = (array, func) => {
  if (isObjectParameter(array, 'array, func')) {
    ({ array, func } = array);
  }

  if (!isArray(array)) {
    throw new TypeError(
      'findFirstIndex args(array) is not array',
    );
  }
  if (!isFunction(func)) {
    throw new TypeError(
      'findFirstIndex args(compareFunc) is not function',
    );
  }
  return _findFirstIndex(array, func);
};

const findIndex = findFirstIndex;

/**
 * findBackIndex
 */
const _findLastIndex = (array, func) => {
  for (let i = array.length - 1; i >= 0; i -= 1) {
    const resultFunc = func(array[i], i, array);
    if (!isBoolean(resultFunc)) {
      throw new TypeError(
        '_findLastIndex args(compareFunc) result is not boolean',
      );
    }
    if (resultFunc) {
      return i;
    }
  }
  return -1;
};

const findLastIndex = (array, func) => {
  if (isObjectParameter(array, 'array, func')) {
    ({ array, func } = array);
  }

  if (!isArray(array)) {
    throw new TypeError(
      'findLastIndex args(array) is not array',
    );
  }
  if (!isFunction(func)) {
    throw new TypeError(
      'findLastIndex args(compareFunc) is not function',
    );
  }
  return _findLastIndex(array, func);
};

const findBackIndex = findLastIndex;

/**
 * findFirst
 */
const _findFirst = (array, func) => {
  const resultIndex = _findFirstIndex(array, func);
  if (resultIndex === -1) {
    return undefined;
  }
  return array[resultIndex];
};

const findFirst = (array, func) => {
  if (isObjectParameter(array, 'array, func')) {
    ({ array, func } = array);
  }

  if (!isArray(array)) {
    throw new TypeError(
      'findFirst args(array) is not array',
    );
  }
  if (!isFunction(func)) {
    throw new TypeError(
      'findFirst args(compareFunc) is not function',
    );
  }
  return _findFirst(array, func);
};

const find = findFirst;

/**
 * findLast
 */
const _findLast = (array, func) => {
  const resultIndex = _findLastIndex(array, func);
  if (resultIndex === -1) {
    return undefined;
  }
  return array[resultIndex];
};

const findLast = (array, func) => {
  if (isObjectParameter(array, 'array, func')) {
    ({ array, func } = array);
  }

  if (!isArray(array)) {
    throw new TypeError(
      'findLast args(array) is not array',
    );
  }
  if (!isFunction(func)) {
    throw new TypeError(
      'findLast args(compareFunc) is not function',
    );
  }
  return _findLast(array, func);
};

const findBack = findLast;

/**
 * some
 */
const _some = (array, func) => {
  return (_findFirstIndex(array, func) !== -1);
};

const some = (array, func) => {
  if (isObjectParameter(array, 'array, func')) {
    ({ array, func } = array);
  }

  if (!isArray(array)) {
    throw new TypeError(
      'some args(array) is not array',
    );
  }
  if (!isFunction(func)) {
    throw new TypeError(
      'some args(compareFunc) is not function',
    );
  }
  return _some(array, func);
};


/**
 * all:every
 */
const _all = (array, func) => {
  if (array.length === 0) {
    return false;
  }
  return (_filter(array, func).length === array.length);
};

const all = (array, func) => {
  if (isObjectParameter(array, 'array, func')) {
    ({ array, func } = array);
  }

  if (!isArray(array)) {
    throw new TypeError(
      'all args(array) is not array',
    );
  }
  if (!isFunction(func)) {
    throw new TypeError(
      'all args(compareFunc) is not function',
    );
  }

  return _all(array, func);
};

const every = all;

/**
 * isFirst
 */
const _isFirst = (array, value) => {
  if (array.length === 0) {
    return false;
  }
  return array[0] === value;
};

const isLast = (array, value) => {
  if (isObjectParameter(array, 'array, value')) {
    ({ array, value } = array);
  }

  if (!isArray(array)) {
    throw new TypeError(
      'isLast args(array) is not array',
    );
  }

  return _isLast(array, value);
};

/**
 * isLast
 */
const _isLast = (array, value) => {
  if (array.length === 0) {
    return false;
  }
  return array[array.length - 1] === value;
};

const isFirst = (array, value) => {
  if (isObjectParameter(array, 'array, value')) {
    ({ array, value } = array);
  }

  if (!isArray(array)) {
    throw new TypeError(
      'isFirst args(array) is not array',
    );
  }

  return _isFirst(array, value);
};

const _isBothEnds = (array, value) => {
  if (array.length <= 1) {
    return false;
  }
  return _isFirst(array, value) && _isLast(array, value);
};

const isBothEnds = (array, value) => {
  if (isObjectParameter(array, 'array, value')) {
    ({ array, value } = array);
  }

  if (!isArray(array)) {
    throw new TypeError(
      'isBothEnds args(array) is not array',
    );
  }


/**
 * subIndex
 */
const _subIndex = (array, indexFirst, indexLast) => {
  return array.slice(indexFirst, indexLast + 1);
};

const subIndex = (array, indexFirst, indexLast) => {
  if (isObjectParameter(array, 'array, indexFirst, indexLast')) {
    ({ array, indexFirst, indexLast } = array);
  }

  if (!isArray(array)) {
    throw new TypeError(
      'subIndex args(array) is not array',
    );
  }
  if (!isInteger(indexFirst)) {
    throw new TypeError(
      'subIndex args(indexFirst) is not integer',
    );
  }
  if (!_inRange(indexFirst, 0, array.length - 1)) {
    throw new RangeError(
      'subIndex args(indexFirst) must be from 0 to array.length - 1',
    );
  }
  if (!isInteger(indexLast)) {
    throw new TypeError(
      'subIndex args(indexLast) is not integer',
    );
  }
  if (!_inRange(indexLast, indexFirst, array.length - 1)) {
    throw new RangeError(
      'subIndex args(indexLast) must be from 0 to array.length - 1',
    );
  }

  return _subIndex(array, indexFirst, indexLast);
};

/**
 * subLength
 */
const _subLength = (array, index, length) => {
  return array.slice(index, index + length);
};

const subLength = (array, index, length) => {
  if (isObjectParameter(array, 'array, index, length')) {
    ({ array, index, length } = array);
  }

  if (!isArray(array)) {
    throw new TypeError(
      'subLength args(array) is not array',
    );
  }
  if (!isInteger(index)) {
    throw new TypeError(
      'subLength args(index) is not integer',
    );
  }
  if (!_inRange(index, 0, array.length - 1)) {
    throw new RangeError(
      'subLength args(index) must be from 0 to array.length - 1',
    );
  }
  if (!isInteger(length)) {
    throw new TypeError(
      'subLength args(length) is not integer',
    );
  }
  if (!_inRange(length, 0, array.length - 1)) {
    throw new RangeError(
      'subLength args(length) must be from 0 to array.length - 1',
    );
  }

  return _subLength(array, index, length);
};

module.exports = {
  _min, _max,
  _sum, _average, _median,
  _mode,
  _unique, _single, _multiple,
  _filter, _map, _count,
  _findFirstIndex,
  _findLastIndex,
  _findFirst,
  _findLast,
  _some, _all,
  _isFirst, _isLast, _isBothEnds,
  _subIndex, _subLength,

  from,
  min, max,
  sum, average, median,
  mode,
  unique, single, multiple,
  filter, map, count,
  findFirstIndex, findIndex,
  findLastIndex, findBackIndex,
  findFirst,
  findLast,
  some, all, every,
  isFirst, isLast, isBothEnds,
  subIndex, subLength,

  findIndex, findBackIndex,
  find, findBack,

};

