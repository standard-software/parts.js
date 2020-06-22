"use strict";

// type
var _TYPE_BASE = 'Undefined,Null,NaNStrict,' + 'Boolean,Number,Integer,String,' + 'Function,Object,ObjectType,' + 'Array,ArrayType,' + 'Date,RegExp,' + 'Exception,' + 'Symbol,' + 'Map,WeakMap,Set,WeakSet,' + 'BooleanObject,NumberObject,StringObject,' + '';

var IS_TYPE = _TYPE_BASE.split(',').map(function (item) {
  return "is".concat(item);
}).join(',');

var ISNOT_TYPE = _TYPE_BASE.split(',').map(function (item) {
  return "isNot".concat(item);
}).join(',');

var _TYPE_BASE_SHORT = 'Bool,Num,Int,Str,' + 'Func,Obj,ObjType,' + 'Except,' + '';

var IS_TYPE_SHORT = _TYPE_BASE_SHORT.split(',').map(function (item) {
  return "is".concat(item);
}).join(',');

var ISNOT_TYPE_SHORT = _TYPE_BASE_SHORT.split(',').map(function (item) {
  return "isNot".concat(item);
}).join(',');

var TYPE = [IS_TYPE, ISNOT_TYPE, IS_TYPE_SHORT, ISNOT_TYPE_SHORT].join(','); // test

var ROOT = 'clone, cloneDeep,' + 'cloneFunction,' + ''; // test

var TEST = 'checkEqual,' + 'isThrown,isThrownValue,isThrownException,isNotThrown,' + ''; // syntax

var SYNTAX = 'assert,guard,' + 'sc,if_,switch_,' + ''; // compare

var COMPARE = 'equal, equalDeep,' + 'equalFunction,' + 'or,' + 'match,matchValue,initialValue,' + 'matchAll,matchSomeIndex,matchSome,' + 'matchEvery,matchAnyIndex,matchAny,' + 'isEmpty,' + ''; // convert

var CONVERT = 'numberToString,' + 'stringToNumber,stringToNumberDefault,' + 'stringToInteger,stringToIntegerDefault,' + 'numToString,' + 'strToNumber,strToNumberDef,' + 'strToInteger,strToIntegerDef,' + 'numToStr,' + 'strToNum,strToNumDef,' + 'strToInt,strToIntDef,' + ''; // number

var NUMBER = 'isMultiples,isEven,isOdd,' + 'round,nearEqual,inRange,randomInt,' + ''; // string

var STRING_PUBLIC = 'matchFormat,includes,replaceAll,' + '';
var STRING_ROOT = 'matchFormat,replaceAll,' + ''; // object

var OBJECT_PUBLIC = 'copyProperty,propertyCount,inProperty,' + 'getProperty,setProperty,' + 'copyProp,propCount,inProp,' + '';
var OBJECT_ROOT = 'copyProperty,propertyCount,inProperty,' + 'getProp,setProp,' + 'copyProp,propCount,inProp,' + ''; // array

var ARRAY_PUBLIC = 'equal,' + 'min, max,' + '';
var ARRAY_ROOT = 'min, max,' + ''; // consoleHook

var _CONSOLE_HOOK_BASE = ',Log,Info,Warn,Error,Debug';
var CONSOLE_HOOK = _CONSOLE_HOOK_BASE.split(',').map(function (item) {
  return "hook".concat(item);
}).join(',') + ',' + _CONSOLE_HOOK_BASE.split(',').map(function (item) {
  return "unHook".concat(item);
}).join(',') + ',' + _CONSOLE_HOOK_BASE.split(',').map(function (item) {
  return "accept".concat(item);
}).join(',') + ',' + '';
var propertyNames = {
  ROOT: ROOT,
  TYPE: TYPE,
  TEST: TEST,
  SYNTAX: SYNTAX,
  COMPARE: COMPARE,
  CONVERT: CONVERT,
  NUMBER: NUMBER,
  STRING_PUBLIC: STRING_PUBLIC,
  STRING_ROOT: STRING_ROOT,
  OBJECT_PUBLIC: OBJECT_PUBLIC,
  OBJECT_ROOT: OBJECT_ROOT,
  ARRAY_PUBLIC: ARRAY_PUBLIC,
  ARRAY_ROOT: ARRAY_ROOT,
  CONSOLE_HOOK: CONSOLE_HOOK
};
module.exports = {
  propertyNames: propertyNames
};