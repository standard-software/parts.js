"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.equal = exports._equal = void 0;

var _type = require("../type/type.js");

var _object = require("../object/object.js");

var _equalFunction = require("../compare/equalFunction.js");

/**
 * equal
 */
var _equal = function _equal(value1, value2) {
  var equalFunctionArray = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _equalFunction.equalFunctionArrayDefault;

  var __equal = function __equal(value1, value2) {
    for (var i = 0, l = equalFunctionArray.length; i < l; i += 1) {
      var result = equalFunctionArray[i](value1, value2);

      if (!(0, _type.isUndefined)(result)) {
        return result;
      }
    }

    return false;
  };

  return __equal(value1, value2);
};

exports._equal = _equal;

var equal = function equal(value1, value2) {
  var equalFunctionArray = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _equalFunction.equalFunctionArrayDefault;

  if ((0, _object.isObjectParameter)(value1, 'value1, value2', 'equalFunctionArray')) {
    var _value = value1;
    value1 = _value.value1;
    value2 = _value.value2;
    var _value$equalFunctionA = _value.equalFunctionArray;
    equalFunctionArray = _value$equalFunctionA === void 0 ? _equalFunction.equalFunctionArrayDefault : _value$equalFunctionA;
  } else if ((0, _object.isObjectParameter)(value2, 'value2', 'equalFunctionArray')) {
    var _value2 = value2;
    value2 = _value2.value2;
    var _value2$equalFunction = _value2.equalFunctionArray;
    equalFunctionArray = _value2$equalFunction === void 0 ? _equalFunction.equalFunctionArrayDefault : _value2$equalFunction;
  } else if ((0, _object.isObjectParameter)(equalFunctionArray, 'equalFunctionArray')) {
    var _equalFunctionArray = equalFunctionArray;
    equalFunctionArray = _equalFunctionArray.equalFunctionArray;
  }

  if (!(0, _type.isFunctionArray)(equalFunctionArray)) {
    throw new TypeError('equal args(equalFunctionArray) is not function array');
  }

  return _equal(value1, value2, equalFunctionArray);
};

exports.equal = equal;
var _default = {
  _equal: _equal,
  equal: equal
};
exports["default"] = _default;