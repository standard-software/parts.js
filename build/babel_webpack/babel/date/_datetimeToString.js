"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._datetimeToString = void 0;

var _includes = require("../compare/__includes.js");

var _objectKeys2 = require("../object/objectKeys.js");

var _SortFunc2 = require("../array/_SortFunc.js");

var _loop = require("../syntax/__loop.js");

var _replaceAllArray2 = require("../string/_replaceAllArray.js");

var _number = require("../number/number.js");

var _includeCount2 = require("../string/_includeCount.js");

var _detetimeToStringFunc = require("../date/__detetimeToStringFunc.js");

/**
 * datetimeToString
 */
var _datetimeToString = function _datetimeToString(date, format) {
  var ruleObject = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _detetimeToStringFunc.__detetimeToStringFunc.DefaultObject();
  var isLocal = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  var existSingleQuote = (0, _includes.__includes)(format, "'");
  var existDoubleQuote = (0, _includes.__includes)(format, '"');

  if (existSingleQuote && existDoubleQuote) {
    throw new Error("_datetimeToString args(format:".concat(format, ") exists both singleQuote and doubleQuote"));
  }

  var keys = (0, _objectKeys2._objectKeys)(ruleObject);
  keys.sort((0, _SortFunc2._SortFunc)([[_SortFunc2._SortFunc.order.normal.descending, function (v) {
    return v.length;
  }]]));
  var replaceArray = [];
  (0, _loop.__loop)(keys)(function (value, index) {
    replaceArray.push([value, ruleObject[value](date, isLocal)]);
  });
  var quoteChar;

  if (existSingleQuote === false && existDoubleQuote === false) {
    return (0, _replaceAllArray2._replaceAllArray)(format, replaceArray);
  } else if (existSingleQuote === false) {
    quoteChar = '"';
  } else if (existDoubleQuote === false) {
    quoteChar = "'";
  }

  if ((0, _number.isOdd)((0, _includeCount2._includeCount)(format, quoteChar))) {
    throw new Error("_datetimeToString args(format:".concat(format, ") exists odd Quotes"));
  }

  var formatStrs = format.split(quoteChar);

  for (var i = 0, l = formatStrs.length; i < l; i += 2) {
    formatStrs[i] = (0, _replaceAllArray2._replaceAllArray)(formatStrs[i], replaceArray);
  }

  return formatStrs.join('');
};

exports._datetimeToString = _datetimeToString;
var _default = {
  _datetimeToString: _datetimeToString
};
exports["default"] = _default;