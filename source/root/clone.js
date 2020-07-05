import {
  isUndefined, isNull, isNaNStrict,
  isBoolean, isNumber, isInteger, isString,
  isFunction,
  isObject, isObjectNormal, isObjectFromNull,
  isObjectLike,
  isArray, isArrayType,
  isDate, isRegExp,
  isException,
  isBooleanObject, isNumberObject, isStringObject,
  isSymbol,
  isMap, isWeakMap,
  isSet, isWeakSet,
} from '../type/type.js';

import {
  _copyProperty,
} from '../object/object.js';

import {
  isObjectParameter,
} from '../object/isObjectParameter.js';

import {
  cloneFunctionArrayDefault,
} from '../root/cloneFunction.js';

/**
 * clone
 */
export const _clone = (
  source, cloneFunctionArray = cloneFunctionArrayDefault,
) => {
  const __clone = (value) => {
    if (isUndefined(value)) {
      return undefined;
    }
    for (let i = 0, l = cloneFunctionArray.length; i < l; i += 1) {
      const result = cloneFunctionArray[i](value);
      if (!isUndefined(result)) {
        return result;
      }
    }
    return value;
  };
  return __clone(source);
};

export const clone = (
  source,
  cloneFunctionArray = cloneFunctionArrayDefault,
) => {
  if (isObjectParameter(source, 'source', 'cloneFunctionArray')) {
    ({ source, cloneFunctionArray = cloneFunctionArrayDefault } = source);
  } else if (isObjectParameter(cloneFunctionArray, 'cloneFunctionArray')) {
    ({ cloneFunctionArray } = cloneFunctionArray);
  }

  if (!isArray(cloneFunctionArray)) {
    throw new TypeError(
      'clone args(cloneFunctionArray) is not array',
    );
  }

  return _clone(source, cloneFunctionArray);
};

export default {
  _clone,
  clone,
};

