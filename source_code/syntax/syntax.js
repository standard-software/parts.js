const {
  isUndefined, isNull, isNaNStrict,
  isBoolean, isNumber, isInteger, isString,
  isFunction, isObject, isArray, isDate, isRegExp,
  isException,

  isUndefinedAll,
} = require('../type/type.js');

const {
  isObjectParameter,
} = require('../object/isObjectParameter.js');

const {
  _IntegerArray,
} = require('../array/IntegerArray.js');

const {
  objectToKeyValueArray,
} = require('../object/objectToKeyValueArray.js');

/**
 * assert
 */
const assert = (value, message = '') => {
  if (!isBoolean(value)) {
    throw new TypeError(
      'assert args(value) is not boolean|message:'
      + `|message:${message}`,
    );
  }
  if (!isString(message)) {
    throw new TypeError(
      'assert args(message) is not string|message:'
      + `|message:${message}`,
    );
  }
  if (!value) {
    throw new Error(`assert error|message:${message}`);
  }
};

/**
 * guard
 */
let guard_status = true;
let guard_message;
const guard = (guardFunc, runFunc) => {
  guard_message = '';
  if (guard_status === false) {
    return false;
  }

  if (!isFunction(guardFunc)) {
    throw new TypeError(
      'guard args(guardFunc) is not function',
    );
  }
  const result = guardFunc();
  if (!isArray(result)) {
    throw new TypeError(
      'guard args(guardFunc result) is not array',
    );
  }
  for (let i = 0; i < result.length; i += 1) {
    // support for wsh last comma in Array. [a,b,]
    if ((i === result.length - 1) &&isUndefined(result[i])) {
      continue;
    }
    let resultValue = undefined;
    let message = '';
    if (isArray(result[i])) {
      if (!(1 <= result[i].length)) {
        throw new TypeError(
          'guard args(guardFunc resultArray element) is not array.length >= 1',
        );
      }
      resultValue = result[i][0];
      if (2 <= result[i].length) {
        message = result[i][1];
      }
    } else {
      resultValue = result[i];
    }
    resultValue = functionValue(resultValue);
    if (!isBoolean(resultValue)) {
      throw new TypeError(
        'guard args(guardFunc resultArray element value) is not boolean',
      );
    }
    if (resultValue === false) {
      guard_message = message;
      if (!isUndefined(runFunc)) {
        if (!isFunction(runFunc)) {
          throw new TypeError(
            'guard args(runFunc) is not function',
          );
        }
        runFunc();
      }
      return true;
    }
  }
  return false;
};
guard.message = () => guard_message;

guard.status = (value) => {
  return guard_status = value;
};
guard.on = () => {
  guard_status = true;
};
guard.off = () => {
  guard_status = false;
};

/**
 * function Value
 */
const functionValue = (value) => {
  if (isFunction(value)) {
    return value();
  } else {
    return value;
  }
};

/**
 * sc (second call)
 */
const sc = (
  argsFirst,
  func,
  ...argsRest
) => {
  return func(argsFirst, ...argsRest);
};

/**
 * if_
 */
const if_ = (condition) => {
  if (!isBoolean(condition)) {
    throw new TypeError(
      'if_ args(condition) is not boolean',
    );
  }

  const returnFunc = (then_, else_) => {
    if (isObjectParameter(then_, '', 'then, else', 1)) {
      ({ then: then_, else: else_ } = then_);
    }
    return condition
      ? functionValue(then_)
      : functionValue(else_);
  };

  if (condition) {
    returnFunc.then = (value) => {
      return {
        else: () => functionValue(value),
      };
    };
    returnFunc.else = () => {
      return {
        then: (value) => functionValue(value),
      };
    };
  } else {
    returnFunc.then = () => {
      return {
        else: (value) => functionValue(value),
      };
    };
    returnFunc.else = (value) => {
      return {
        then: () => functionValue(value),
      };
    };
  }

  return returnFunc;
};

/**
 * switch_
 */
const switch_ = (expression) => {
  return (args) => {
    if (!isArray(args)) {
      throw new TypeError('switch_() args is not array');
    }
    for (let i = 0; i < args.length; i += 1) {
      // support for wsh last comma in Array. [a,b,]
      if ((i === args.length - 1) &&isUndefined(args[i])) {
        continue;
      }
      if (!isArray(args[i])) {
        throw new TypeError('switch_() args is not array in array');
      }
    }
    for (let i = 0; i < args.length; i += 1) {
      // support for wsh last comma in Array. [a,b,]
      if ((i === args.length - 1) &&isUndefined(args[i])) {
        continue;
      }
      if (args[i].length === 0) {
        return undefined;
      }
      if (args[i].length === 1) {
        return functionValue(args[i][0]);
      }
      if (args[i][0] === expression) {
        return functionValue(args[i][1]);
      }
    }
    return undefined;
  };
};

/**
 * loop
 */
const _loopBase = (loopArray) => {
  return (func) => {
    if (!isFunction(func)) {
      throw new TypeError('loop()(func) func is not function');
    }
    for (let i = 0, l = loopArray.length; i < l; i += 1) {
      const element = loopArray[i];
      const index = i;
      const array = loopArray;
      const loopFirst = i === 0;
      const loopLast = i === loopArray.length - 1;
      const result = func(element, index, array, loopFirst, loopLast);
      if (!isUndefined(result) && result.break === true) {
        return result;
      }
    }
    return {};
  };
};

const loop = (start, end, increment) => {

  if (isObjectParameter(start, 'count')) {
    ({ count: start } = start);
    end = undefined;
    increment = undefined;
  } else if (isObjectParameter(start, 'start, end', 'increment')) {
    ({ start, end, increment } = start);
  } else if (isObjectParameter(end, 'end', 'increment')) {
    ({ end, increment } = end);
  } else if (isObjectParameter(increment, 'increment')) {
    ({ increment } = increment);
  } else if (isObject(start)) {
    return _loopBase(objectToKeyValueArray(start));
  } else if (isArray(start)) {
    return _loopBase(start);
  }

  if (!isInteger(start)) {
    throw new TypeError(
      'loop args(start) is not number',
    );
  }
  if (!isUndefined(end) && !isInteger(end)) {
    throw new TypeError(
      'loop args(end) is not number',
    );
  }
  if (!isUndefined(increment) && !isInteger(increment)) {
    throw new TypeError(
      'loop args(increment) is not number',
    );
  }

  return _loopBase(_IntegerArray(start, end, increment));
};

/**
 * canUseMap
 */
let _canUseMapFlag;

const canUseMap = () => {
  if (isUndefined(_canUseMapFlag)) {
    try {
      new Map();
      _canUseMapFlag = true;
    } catch (e) {
      _canUseMapFlag = false;
    }
  }
  return _canUseMapFlag;
};

canUseMap.reset = () => {
  _canUseMapFlag = undefined;
};

/**
 * canUseSet
 */
let _canUseSetFlag;

const canUseSet = () => {
  if (isUndefined(_canUseSetFlag)) {
    try {
      new Set();
      _canUseSetFlag = true;
    } catch (e) {
      _canUseSetFlag = false;
    }
  }
  return _canUseSetFlag;
};

canUseSet.reset = () => {
  _canUseSetFlag = undefined;
};

module.exports = {
  assert, guard,
  functionValue,
  sc, if_, switch_,
  loop,
  canUseMap, canUseSet,
};
