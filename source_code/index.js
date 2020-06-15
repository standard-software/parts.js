require('./polyfill.js');
const _root = require('./root/root.js');
const _platform = require('./platform/platform.js');
const _type = require('./type/type.js');
const _test = require('./test/test.js');
const _syntax = require('./syntax/syntax.js');
const _compare = require('./compare/compare.js');
const _convert = require('./convert/convert.js');
const _number = require('./number/number.js');
const _string = require('./string/string.js');
const _object = require('./object/object.js');
const _array = require('./array/array.js');
const _consoleHook = require('./consoleHook/consoleHook.js');

const VERSION = '5.8.1 beta';

const rootNames = {};
const propertyNames = {};

const { _copyProperty } = _object;
const { _replaceAll } = _string;
const { _map } = _array;

// root
propertyNames.ROOT =
  'clone, cloneDeep,' +
  'cloneFunction,' +
  '';
const root = {};
_copyProperty(_root, propertyNames.ROOT, root);
_copyProperty(_root, propertyNames.ROOT, rootNames);

// platform
propertyNames.PLATFORM =
  'name,' +
  'isWebBrowser,' +
  'isWindowsScriptHost,' +
  'isGoogleAppsScript,' +
  'isNodeJs,' +
  'browserName,' +
  'isChrome,' +
  'isFirefox,' +
  'isEdge,' +
  'isInternetExplorer,' +
  'isSafari,' +
  'isOpera,' +
  'buildMode,' +
  '';
const platform = _copyProperty(_platform, propertyNames.PLATFORM);

// type
propertyNames._TYPE_BASE =
  'Undefined,Null,NaNStrict,' +
  'Boolean,Number,Integer,String,' +
  'Function,Object,ObjectType,' +
  'Array,ArrayType,' +
  'Date,RegExp,' +
  'Exception,' +
  'EmptyObject,EmptyArray,' +
  'Symbol,' +
  'Map,WeakMap,Set,WeakSet,' +
  'BooleanObject,NumberObject,StringObject,' +
  'Bool,Num,Int,Str,' +
  'Func,Obj,ObjType,' +
  'Except,' +
  'EmptyObj,' +
  '';
const isPrefixSafixAdd = (prefix, safix, commaString) =>
  _map(_replaceAll(commaString, ' ', '').split(','),
    item => prefix + item + safix).join(',');
propertyNames.TYPE = [
  isPrefixSafixAdd('is',    '',     propertyNames._TYPE_BASE),
  isPrefixSafixAdd('isNot', '',     propertyNames._TYPE_BASE),
  isPrefixSafixAdd('is',    'All',  propertyNames._TYPE_BASE),
  isPrefixSafixAdd('isNot', 'All',  propertyNames._TYPE_BASE),
  isPrefixSafixAdd('is',    'Array',  propertyNames._TYPE_BASE),
  isPrefixSafixAdd('isNot', 'Array',  propertyNames._TYPE_BASE),
].join(',');
const type = {};
_copyProperty(_type, propertyNames.TYPE, type);
_copyProperty(_type, propertyNames.TYPE, rootNames);

// test
propertyNames.TEST_PUBLIC =
  'checkEqual, checkCompare,' +
  'describe, it, test, expect,' +
  'isThrown,isThrownValue,isThrownException,isNotThrown,' +
  'testCounter,';
propertyNames.TEST_ROOT =
  'isThrown,isThrownValue,isThrownException,isNotThrown,' +
  '';
const test = {};
_copyProperty(_test, propertyNames.TEST_PUBLIC, test);
_copyProperty(_test, propertyNames.TEST_ROOT, rootNames);

// syntax
propertyNames.SYNTAX =
  'assert,guard,' +
  'functionValue,' +
  'sc,if_,switch_,' +
  'loop,' +
  'canUseMap, canUseSet,' +
  '';
const syntax = _copyProperty(_syntax, propertyNames.SYNTAX);
_copyProperty(_syntax, propertyNames.SYNTAX, rootNames);

// compare
propertyNames.COMPARE =
  'equal, equalDeep,' +
  'equalFunction,' +
  'or,' +
  'match, matchValue, initialValue,' +
  'allMatch, indexOfMatch, someMatch,' +
  'matchSome, matchSomeValue,' +
  'allMatchSome, indexOfMatchSome, someMatchSome,' +
  'matchAll, matchAllValue,' +
  'allMatchAll, indexOfMatchAll, someMatchAll,' +
  'includes, includesSome, includesAll,' +
  '';
const compare = {};
_copyProperty(_compare, propertyNames.COMPARE, compare);
_copyProperty(_compare, propertyNames.COMPARE, rootNames);

// convert
propertyNames.CONVERT =
  'numberToString, valueToString,' +
  'stringToNumber,stringToNumberDefault,' +
  'stringToInteger,stringToIntegerDefault,' +
  'valueToNumber, valueToNumberDefault,' +
  'valueToInteger, valueToIntegerDefault,' +

  'numToString, valToString,' +
  'strToNumber, strToNumberDef,' +
  'strToInteger, strToIntegerDef,' +
  'valToNumber, valToNumberDefault,' +
  'valToInteger, valToIntegerDefault,' +

  'valToNum, valToNumDef,' +
  'valToInt, valToIntDef,' +

  'numToStr,' +
  'strToNum,strToNumDef,' +
  'strToInt,strToIntDef,' +
  '';
const convert = {};
_copyProperty(_convert, propertyNames.CONVERT, convert);
_copyProperty(_convert, propertyNames.CONVERT, rootNames);

// number
propertyNames.NUMBER =
  'isMultiples,isEven,isOdd,' +
  'round,nearEqual,inRange,randomInt,' +
  '';
const number = _copyProperty(_number, propertyNames.NUMBER);
_copyProperty(_number, propertyNames.NUMBER, rootNames);

// string
propertyNames.STRING_PUBLIC =
  'matchFormat, replaceAll,' +
  'repeat,' +
  'isLowerCase, isUpperCase,' +
  'indexOfFirst, indexOfLast,' +
  'isFirst, isLast, isBothEnds,' +
  'includeFirst, includeLast, includeBothEnds,' +
  'excludeFirst, excludeLast, excludeBothEnds,' +
  'trimFirst, trimLast, trimBothEnds,' +
  'subIndex, subLength, subFirst, subLast,' +
  'deleteIndex, deleteLength, deleteFirst, deleteLast,' +
  'insert, add,' +
  '';
propertyNames.STRING_ROOT =
  'matchFormat,replaceAll,' +
  'isLowerCase,isUpperCase,' +
  '';
const string = {};
_copyProperty(_string, propertyNames.STRING_PUBLIC, string);
_copyProperty(_string, propertyNames.STRING_ROOT, rootNames);

// object
propertyNames.OBJECT_PUBLIC =
  'isObjectParameter,' +
  'copyProperty, propertyCount, inProperty,' +
  'getProperty, setProperty,' +
  'objectToKeyValueArray, objectEntries,' +
  'copyProp, propCount, inProp,' +
  'getProp, setProp,' +
  '';
propertyNames.OBJECT_ROOT =
  'copyProperty,propertyCount,inProperty,' +
  'getProperty,setProperty,' +
  'copyProp,propCount,inProp,' +
  'getProp,setProp,' +
  '';
const object = {};
_copyProperty(_object, propertyNames.OBJECT_PUBLIC, object);
_copyProperty(_object, propertyNames.OBJECT_ROOT, rootNames);
object.objectToString = _type.objectToString;
rootNames.objectToString = _type.objectToString;

// array
propertyNames.ARRAY_PUBLIC =
  'NumberArray, IntegerArray,' +
  'from,' +
  'min, max,' +
  'sum, average, median,' +
  'mode,' +
  'unique, single, multiple,' +
  'filter, map, count,' +
  'findFirstIndex, findLastIndex,' +
  'findFirst, findLast,' +
  'some, all,' +
  'isFirst, isLast, isBothEnds,' +
  'subIndex, subLength,' +
  'subFirst, subLast,' +
  'findIndex, findBackIndex,' +
  'find, findBack,' +
  'every,' +
  'arrayToIndexValueArray, arrayEntries' +
  '';
propertyNames.ARRAY_ROOT =
  'min, max,' +
  'sum, average, median,' +
  '';
const array = {};
_copyProperty(_array, propertyNames.ARRAY_PUBLIC, array);
_copyProperty(_array, propertyNames.ARRAY_ROOT, rootNames);

// array.operation
propertyNames.ARRAY_OPERATION_PUBLIC =
  'insert, add,' +
  'deleteLength, deleteIndex,' +
  'deleteFirst, deleteLast,' +
  'includeFirst, includeLast, includeBothEnds,' +
  'excludeFirst, excludeLast, excludeBothEnds,' +
  'trimFirst, trimLast, trimBothEnds,' +
  'popFirst, popLast,' +
  'pushFirst, pushLast,' +
  'remainFirst, remainLast,' +
  'filter,' +
  'sortNumberAscending, sortNumberDescending,' +
  'sortLengthAscending, sortLengthDescending,' +
  'sortDictionaryAscending, sortDictionaryDescending,' +
  '';
array.operation = {};
_copyProperty(_array.operation, propertyNames.ARRAY_OPERATION_PUBLIC, array.operation);

// consoleHook
propertyNames._CONSOLE_HOOK_BASE =
  ',Log,Info,Warn,Error,Debug';
propertyNames.CONSOLE_HOOK = [
  isPrefixSafixAdd('hook',    '', propertyNames._CONSOLE_HOOK_BASE),
  isPrefixSafixAdd('unHook',  '', propertyNames._CONSOLE_HOOK_BASE),
  isPrefixSafixAdd('accept',  '', propertyNames._CONSOLE_HOOK_BASE),
].join(',');
const consoleHook = {};
_copyProperty(_consoleHook, propertyNames.CONSOLE_HOOK, consoleHook);

const parts = {
  VERSION,
  platform,
  type,
  test,
  syntax,
  compare,
  convert,
  number,
  string,
  consoleHook,
  object,
  array,

  root,

  ...rootNames,
};

module.exports = {
  ...parts,
  parts,
};
