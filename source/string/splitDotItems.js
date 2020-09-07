import {
  isUndefined, isNull, isNaNStrict,
  isBoolean, isNumber, isInteger, isString,
  isFunction, isObject, isArray, isDate, isRegExp,
  isException,
} from '../type/type.js';

import {
  split,
} from './split.js';

import {
  __includes,
} from '../compare/__includes.js';

export const _splitDotItems = (str) => {
  if (str === '') {
    return [];
  }

  const result = split(str, '.', split.excludeEmptyStr.first, split.excludeSpace.none);
  if (__includes(result, '')) {
    throw new Error('_splitDotItems args(str) is not correct format');
  }
  return result;
};

export const splitDotItems = (str) => {
  if (!isString(str)) {
    throw new TypeError('splitDotItems args(str) is not string');
  }

  return _splitDotItems(str);
};


export default {
  _splitDotItems, splitDotItems,
};
