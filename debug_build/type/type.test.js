"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var test_execute_type = function test_execute_type(parts) {
  var checkEqual = parts.test.checkEqual;
  var _parts$type = parts.type,
      isUndefined = _parts$type.isUndefined,
      isNull = _parts$type.isNull,
      isNaNStrict = _parts$type.isNaNStrict,
      isBoolean = _parts$type.isBoolean,
      isNumber = _parts$type.isNumber,
      isInteger = _parts$type.isInteger,
      isString = _parts$type.isString,
      isFunction = _parts$type.isFunction,
      isObject = _parts$type.isObject,
      isObjectType = _parts$type.isObjectType,
      isArray = _parts$type.isArray,
      isArrayType = _parts$type.isArrayType,
      isDate = _parts$type.isDate,
      isRegExp = _parts$type.isRegExp,
      isException = _parts$type.isException,
      isBooleanObject = _parts$type.isBooleanObject,
      isNumberObject = _parts$type.isNumberObject,
      isStringObject = _parts$type.isStringObject,
      isSymbol = _parts$type.isSymbol,
      isMap = _parts$type.isMap,
      isWeakMap = _parts$type.isWeakMap,
      isSet = _parts$type.isSet,
      isWeakSet = _parts$type.isWeakSet,
      isNotUndefined = _parts$type.isNotUndefined,
      isNotNull = _parts$type.isNotNull,
      isNotNaNStrict = _parts$type.isNotNaNStrict,
      isNotBoolean = _parts$type.isNotBoolean,
      isNotNumber = _parts$type.isNotNumber,
      isNotInteger = _parts$type.isNotInteger,
      isNotString = _parts$type.isNotString,
      isNotFunction = _parts$type.isNotFunction,
      isNotObject = _parts$type.isNotObject,
      isNotObjectType = _parts$type.isNotObjectType,
      isNotArray = _parts$type.isNotArray,
      isNotArrayType = _parts$type.isNotArrayType,
      isNotDate = _parts$type.isNotDate,
      isNotRegExp = _parts$type.isNotRegExp,
      isNotException = _parts$type.isNotException,
      isNotBooleanObject = _parts$type.isNotBooleanObject,
      isNotNumberObject = _parts$type.isNotNumberObject,
      isNotStringObject = _parts$type.isNotStringObject,
      isNotSymbol = _parts$type.isNotSymbol,
      isNotMap = _parts$type.isNotMap,
      isNotWeakMap = _parts$type.isNotWeakMap,
      isNotSet = _parts$type.isNotSet,
      isNotWeakSet = _parts$type.isNotWeakSet;
  var matchAll = parts.compare.matchAll;
  var objectToString = parts.objectToString;

  var test_checkType = function test_checkType() {
    var checkType = function checkType(typeofName, objectStringName, value) {
      checkEqual(typeofName, _typeof(value));
      checkEqual(objectStringName, objectToString(value));
    };

    if (parts.platform.wsh) {
      checkType('undefined', '[object Object]', undefined);
      checkType('object', '[object Object]', null);
    } else {
      checkType('undefined', '[object Undefined]', undefined);
      checkType('object', '[object Null]', null); // bad specification
    }

    checkType('boolean', '[object Boolean]', true);
    checkType('boolean', '[object Boolean]', false);
    checkType('object', '[object Boolean]', new Boolean());
    checkType('number', '[object Number]', 1);
    checkType('number', '[object Number]', NaN);
    checkType('number', '[object Number]', Infinity);
    checkType('object', '[object Number]', new Number(1));
    checkType('object', '[object Number]', new Number(NaN));
    checkType('object', '[object Number]', new Number(Infinity));
    checkType('object', '[object Number]', new Number(null));
    checkType('object', '[object Number]', new Number(undefined));
    checkType('string', '[object String]', '');
    checkType('string', '[object String]', '1');
    checkType('object', '[object String]', new String(''));
    checkType('object', '[object String]', new String('1'));
    checkType('object', '[object String]', new String(null));
    checkType('object', '[object String]', new String(undefined));

    function testFunc() {}

    checkType('function', '[object Function]', testFunc);
    checkType('function', '[object Function]', function () {});
    checkType('function', '[object Function]', function () {});
    checkType('object', '[object Object]', {});
    checkType('object', '[object Object]', new Object());
    checkType('object', '[object Array]', []);
    checkType('object', '[object Array]', new Array());
    checkType('object', '[object RegExp]', /^a/);
    checkType('object', '[object RegExp]', new RegExp('^a'));
    checkType('object', '[object Math]', Math);

    if (parts.platform.wsh) {
      return;
    }

    checkType('object', '[object Int8Array]', new Int8Array());
    checkType('object', '[object Uint8Array]', new Uint8Array());
    checkType('object', '[object Uint8ClampedArray]', new Uint8ClampedArray());
    checkType('object', '[object Int16Array]', new Int16Array());
    checkType('object', '[object Uint16Array]', new Uint16Array());
    checkType('object', '[object Int32Array]', new Int32Array());
    checkType('object', '[object Uint32Array]', new Uint32Array());
    checkType('object', '[object Float32Array]', new Float32Array());
    checkType('object', '[object Float64Array]', new Float64Array());
    checkType('symbol', '[object Symbol]', Symbol());
    checkType('object', '[object Map]', new Map());
    checkType('object', '[object WeakMap]', new WeakMap());
    checkType('object', '[object Set]', new Set());
    checkType('object', '[object WeakSet]', new WeakSet());
    checkType('object', '[object ArrayBuffer]', new ArrayBuffer(8));
    checkType('object', '[object SharedArrayBuffer]', new SharedArrayBuffer(8));
    checkType('object', '[object Atomics]', Atomics);
    checkType('object', '[object DataView]', new DataView(new ArrayBuffer(16)));
    checkType('object', '[object JSON]', JSON);
    checkType('function', '[object Function]', Promise); // function* Generator() { yield 1; yield 2; yield 3; }
    // var GeneratorFunction = Object.getPrototypeOf(function*(){}).constructor
    // var AsyncFunction = Object.getPrototypeOf(async function(){}).constructor
    // checkType('object',    '[object Generator]',          Generator());
    // checkType('function',  '[object GeneratorFunction]',  new GeneratorFunction());
    // checkType('function',  '[object AsyncFunction]',      new AsyncFunction());

    checkType('object', '[object Object]', Reflect);
    checkType('object', '[object Object]', new Proxy({}, {}));
    checkType('object', '[object Object]', Intl);
    checkType('object', '[object WebAssembly]', WebAssembly);
  };

  var test_isUndefined = function test_isUndefined() {
    var isUndefinedArray = function isUndefinedArray(array) {
      return matchAll(array, [undefined]);
    };

    var isNotUndefinedArray = function isNotUndefinedArray(array) {
      return matchAll(array, [isNotUndefined]);
    };

    var u1;
    var n1 = null;
    var v1 = 1;
    checkEqual(true, isUndefined(u1));
    checkEqual(false, isUndefined(n1));
    checkEqual(false, isUndefined(v1));
    checkEqual(true, isUndefinedArray([u1]));
    checkEqual(false, isUndefinedArray([n1]));
    checkEqual(false, isUndefinedArray([v1]));
    checkEqual(true, isUndefined(u1, u1));
    checkEqual(false, isUndefined(u1, n1));
    checkEqual(false, isUndefined(u1, v1));
    checkEqual(true, isUndefinedArray([u1, u1]));
    checkEqual(false, isUndefinedArray([u1, n1]));
    checkEqual(false, isUndefinedArray([u1, v1]));
    checkEqual(false, isNotUndefined(u1));
    checkEqual(true, isNotUndefined(n1));
    checkEqual(true, isNotUndefined(v1));
    checkEqual(false, isNotUndefinedArray([u1]));
    checkEqual(true, isNotUndefinedArray([n1]));
    checkEqual(true, isNotUndefinedArray([v1]));
    checkEqual(false, isNotUndefined(u1, u1));
    checkEqual(false, isNotUndefined(u1, n1));
    checkEqual(true, isNotUndefined(n1, n1));
    checkEqual(false, isNotUndefined(n1, u1));
    checkEqual(true, isNotUndefined(v1, v1));
    checkEqual(true, isNotUndefined(v1, n1));
    checkEqual(false, isNotUndefined(v1, u1));
    checkEqual(false, isNotUndefinedArray([u1, u1]));
    checkEqual(false, isNotUndefinedArray([u1, n1]));
    checkEqual(true, isNotUndefinedArray([n1, n1]));
    checkEqual(false, isNotUndefinedArray([n1, u1]));
    checkEqual(true, isNotUndefinedArray([v1, v1]));
    checkEqual(true, isNotUndefinedArray([v1, n1]));
    checkEqual(false, isNotUndefinedArray([v1, u1])); //配列の中身ではなく配列自体を判定する
    //配列はundefinedではない

    checkEqual(false, isUndefined([v1, v1]));
    checkEqual(false, isUndefined([u1, u1]));
    checkEqual(true, isNotUndefined([v1, v1]));
    checkEqual(true, isNotUndefined([u1, u1]));
  };

  var test_isNull = function test_isNull() {
    var isNullArray = function isNullArray(array) {
      return matchAll(array, [null]);
    };

    var isNotNullArray = function isNotNullArray(array) {
      return matchAll(array, [isNotNull]);
    };

    var u1;
    var n1 = null;
    var v1 = 1;
    checkEqual(false, isNull(u1));
    checkEqual(true, isNull(n1));
    checkEqual(false, isNull(v1));
    checkEqual(false, isNullArray([u1]));
    checkEqual(true, isNullArray([n1]));
    checkEqual(false, isNullArray([v1]));
    checkEqual(true, isNull(n1, n1));
    checkEqual(false, isNull(n1, u1));
    checkEqual(false, isNull(n1, v1));
    checkEqual(true, isNullArray([n1, n1]));
    checkEqual(false, isNullArray([n1, u1]));
    checkEqual(false, isNullArray([n1, v1]));
    checkEqual(true, isNotNull(u1));
    checkEqual(false, isNotNull(n1));
    checkEqual(true, isNotNull(v1));
    checkEqual(true, isNotNullArray([u1]));
    checkEqual(false, isNotNullArray([n1]));
    checkEqual(true, isNotNullArray([v1]));
    checkEqual(true, isNotNull(u1, u1));
    checkEqual(false, isNotNull(u1, n1));
    checkEqual(false, isNotNull(n1, n1));
    checkEqual(false, isNotNull(n1, u1));
    checkEqual(true, isNotNull(v1, v1));
    checkEqual(false, isNotNull(v1, n1));
    checkEqual(true, isNotNull(v1, u1));
    checkEqual(true, isNotNullArray([u1, u1]));
    checkEqual(false, isNotNullArray([u1, n1]));
    checkEqual(false, isNotNullArray([n1, n1]));
    checkEqual(false, isNotNullArray([n1, u1]));
    checkEqual(true, isNotNullArray([v1, v1]));
    checkEqual(false, isNotNullArray([v1, n1]));
    checkEqual(true, isNotNullArray([v1, u1]));
  };

  var test_isBoolean = function test_isBoolean() {
    var isBooleanArray = function isBooleanArray(array) {
      return matchAll(array, [isBoolean]);
    };

    var isNotBooleanArray = function isNotBooleanArray(array) {
      return matchAll(array, [isNotBoolean]);
    };

    checkEqual(true, isBoolean(true));
    checkEqual(true, isBoolean(false));
    checkEqual(false, isBoolean(undefined));
    checkEqual(false, isBoolean(null));
    checkEqual(false, isBoolean(''));
    checkEqual(false, isBoolean('true'));
    checkEqual(false, isBoolean('false'));
    checkEqual(false, isBoolean(123));
    checkEqual(false, isBoolean(0));
    checkEqual(false, isBoolean(-1));
    checkEqual(true, isBoolean(true, true));
    checkEqual(true, isBoolean(true, true, true));
    checkEqual(true, isBoolean(true, false, true));
    checkEqual(false, isBoolean(true, 1, true));
    checkEqual(false, isBoolean([true, true]));
    checkEqual(true, isBooleanArray([true, true]));
    checkEqual(true, isBooleanArray([true, true, true]));
    checkEqual(true, isBooleanArray([true, false, true]));
    checkEqual(false, isBooleanArray([true, 1, true]));
    checkEqual(false, isBoolean(new Boolean()));
    checkEqual(false, isBoolean(new Boolean('1')));
    checkEqual(false, isBoolean(new Boolean('a')));
    checkEqual(false, isBoolean(new Boolean('true')));
    checkEqual(true, isBooleanObject(new Boolean()), 'test isBooleanObject');
    checkEqual(true, isBooleanObject(new Boolean('1')));
    checkEqual(true, isBooleanObject(new Boolean('a')));
    checkEqual(true, isBooleanObject(new Boolean('true')));
  };

  var test_isNumber = function test_isNumber() {
    var isNumberArray = function isNumberArray(array) {
      return matchAll(array, [isNumber]);
    };

    var isNotNumberArray = function isNotNumberArray(array) {
      return matchAll(array, [isNotNumber]);
    };

    checkEqual(true, isNumber(123));
    checkEqual(true, isNumber(0));
    checkEqual(true, isNumber(-1));
    checkEqual(true, isNumber(123.4));
    checkEqual(true, isNumber(123.0));
    checkEqual(false, isNumber(true));
    checkEqual(false, isNumber(false));
    checkEqual(false, isNumber(null));
    checkEqual(false, isNumber(undefined));
    checkEqual(false, isNumber(Infinity)); //InfinityもNumberとして許可しないことにする

    checkEqual(false, isNumber(NaN));
    checkEqual(false, isNumber(''));
    checkEqual(false, isNumber('ABC'));
    checkEqual(false, isNumber('ABC10'));
    checkEqual(false, isNumber('10ABC'));
    checkEqual(false, isNumber('0ABC'));
    checkEqual(false, isNumber('0'));
    checkEqual(false, isNumber('5'));
    checkEqual(false, isNumber('-5'));
    checkEqual(false, isNumber('100'));
    checkEqual(false, isNumber('-100'));
    checkEqual(false, isNumber([]));
    checkEqual(false, isNumber({}));
    checkEqual(false, isNotNumber(123));
    checkEqual(false, isNotNumber(0));
    checkEqual(true, isNotNumber(true));
    checkEqual(true, isNotNumber(null));
    checkEqual(true, isNotNumber(undefined));
    checkEqual(true, isNotNumber(Infinity));
    checkEqual(true, isNotNumber(NaN));
    checkEqual(true, isNotNumber(''));
    checkEqual(true, isNumber(1, 2));
    checkEqual(true, isNumber(3, 4, 5));
    checkEqual(true, isNumber(10.5, 20.5, 30.5));
    checkEqual(false, isNumber(1, 2, true));
    checkEqual(false, isNotNumber(1, 2));
    checkEqual(false, isNotNumber(3, 4, 5));
    checkEqual(false, isNotNumber(10.5, 20.5, 30.5));
    checkEqual(false, isNotNumber(1, 2, true));
    checkEqual(true, isNotNumber(false, true));
    checkEqual(true, isNotNumber('a', 'b'));
    checkEqual(false, isNumber([1, 2]));
    checkEqual(true, isNumberArray([1, 2]));
    checkEqual(true, isNumberArray([3, 4, 5]));
    checkEqual(true, isNumberArray([10.5, 20.5, 30.5]));
    checkEqual(false, isNumberArray([1, 2, true]));
    checkEqual(false, isNotNumberArray([1, 2]));
    checkEqual(false, isNotNumberArray([3, 4, 5]));
    checkEqual(false, isNotNumberArray([10.5, 20.5, 30.5]));
    checkEqual(false, isNotNumberArray([1, 2, true]));
    checkEqual(true, isNotNumberArray([false, true]));
    checkEqual(true, isNotNumberArray(['a', 'b']));
    checkEqual(0, Number(new Number()));
    checkEqual(0, Number(new Number('')));
    checkEqual(0, Number(new Number(' ')));

    if (parts.platform.wsh) {
      checkEqual(NaN, Number(new Number('　')));
    } else {
      checkEqual(0, Number(new Number('　')));
    }

    checkEqual(1, Number(new Number('1')));
    checkEqual(1.1, Number(new Number('1.1')));
    checkEqual(NaN, Number(new Number(NaN)));
    checkEqual(Infinity, Number(new Number(Infinity)));
    checkEqual(NaN, Number(new Number(undefined)));
    checkEqual(0, Number(new Number(null)));
    checkEqual(false, isNumber(new Number()));
    checkEqual(false, isNumber(new Number('')));
    checkEqual(false, isNumber(new Number('1')));
    checkEqual(false, isNumber(new Number('1.1')));
    checkEqual(true, isNumberObject(new Number()));
    checkEqual(true, isNumberObject(new Number('')));
    checkEqual(true, isNumberObject(new Number('1')));
    checkEqual(true, isNumberObject(new Number('1.1')));
  };

  var test_isInteger = function test_isInteger() {
    var isIntegerArray = function isIntegerArray(array) {
      return matchAll(array, [isInteger]);
    };

    var isNotIntegerArray = function isNotIntegerArray(array) {
      return matchAll(array, [isNotInteger]);
    };

    checkEqual(true, isInteger(123));
    checkEqual(true, isInteger(0));
    checkEqual(true, isInteger(-1));
    checkEqual(false, isInteger(123.4));
    checkEqual(true, isInteger(123.0)); //.0の場合は整数か小数かは判断できない

    checkEqual(false, isInteger(true));
    checkEqual(false, isInteger(false));
    checkEqual(false, isInteger(null));
    checkEqual(false, isInteger(undefined));
    checkEqual(false, isInteger(''));
    checkEqual(false, isInteger('ABC'));
    checkEqual(false, isInteger('0'));
    checkEqual(false, isInteger('5'));
    checkEqual(false, isInteger('-5'));
    checkEqual(false, isInteger('100'));
    checkEqual(false, isInteger('-100'));
    checkEqual(false, isInteger([]));
    checkEqual(false, isInteger({}));
    checkEqual(true, isInteger(1, 2));
    checkEqual(true, isInteger(3, 4, 5));
    checkEqual(true, isInteger(10, 20, 30));
    checkEqual(false, isInteger(1, 2, 3.5));
    checkEqual(false, isNotInteger(1, 2));
    checkEqual(false, isNotInteger(3, 4, 5));
    checkEqual(false, isNotInteger(10, 20, 30));
    checkEqual(false, isNotInteger(1, 2, 3.5));
    checkEqual(false, isNotInteger(1, 2.1, 3.5));
    checkEqual(true, isNotInteger(1.1, 2.2, 3.5));
    checkEqual(false, isIntegerArray([]));
    checkEqual(true, isIntegerArray([1]));
    checkEqual(true, isIntegerArray([1, 2, 3]));
    checkEqual(false, isIntegerArray([1.1, 2, 3]));
    checkEqual(false, isIntegerArray([1.1, 2.2, 3]));
    checkEqual(false, isIntegerArray([1.1, 2.2, 3.3]));
    checkEqual(true, isIntegerArray([1, 2, 0]));
    checkEqual(false, isIntegerArray([1, 2, NaN]));
    checkEqual(false, isIntegerArray([1, 2, null]));
    checkEqual(false, isIntegerArray(['a', 'b', 1]));
    checkEqual(false, isIntegerArray(['a', 'b', 1.1]));
    checkEqual(false, isIntegerArray(['a', 'b', 'c']));
    checkEqual(false, isNotIntegerArray([]));
    checkEqual(false, isNotIntegerArray([1]));
    checkEqual(false, isNotIntegerArray([1, 2, 3]));
    checkEqual(false, isNotIntegerArray([1.1, 2, 3]));
    checkEqual(false, isNotIntegerArray([1.1, 2.2, 3]));
    checkEqual(true, isNotIntegerArray([1.1, 2.2, 3.3]));
    checkEqual(false, isNotIntegerArray([1, 2, 0]));
    checkEqual(false, isNotIntegerArray([1, 2, NaN]));
    checkEqual(false, isNotIntegerArray([1, 2, null]));
    checkEqual(false, isNotIntegerArray(['a', 'b', 1]));
    checkEqual(true, isNotIntegerArray(['a', 'b', 1.1]));
    checkEqual(true, isNotIntegerArray(['a', 'b', 'c']));
    checkEqual(false, isInteger(new Number()));
    checkEqual(false, isInteger(new Number('')));
    checkEqual(false, isInteger(new Number('1')));
    checkEqual(false, isInteger(new Number('1.1')));
    checkEqual(false, isInteger(new Number(1)));
  };

  var test_isString = function test_isString() {
    var isStringArray = function isStringArray(array) {
      return matchAll(array, [isString]);
    };

    var isNotStringArray = function isNotStringArray(array) {
      return matchAll(array, [isNotString]);
    };

    checkEqual(true, isString(''));
    checkEqual(true, isString('a'));
    checkEqual(true, isString('a', 'b', 'c'));
    checkEqual(true, isString('a', 'b', ''));
    checkEqual(false, isString('a', 'b', 0));
    checkEqual(false, isString('a', 'b', 1));
    checkEqual(false, isString('a', 'b', null));
    checkEqual(false, isString('a', 'b', undefined));
    checkEqual(false, isStringArray([]));
    checkEqual(true, isStringArray(['']));
    checkEqual(true, isStringArray(['a']));
    checkEqual(true, isStringArray(['a', 'b', 'c']));
    checkEqual(true, isStringArray(['a', 'b', '']));
    checkEqual(false, isStringArray(['a', 'b', 0]));
    checkEqual(false, isStringArray(['a', 'b', 1]));
    checkEqual(false, isStringArray(['a', 'b', null]));
    checkEqual(false, isStringArray(['a', 'b', undefined]));
    checkEqual('', String(new String()));
    checkEqual('', String(new String('')));
    checkEqual(' ', String(new String(' ')));
    checkEqual('　', String(new String('　')));
    checkEqual('1', String(new String('1')));
    checkEqual('1.1', String(new String('1.1')));
    checkEqual('1', String(new String(1)));
    checkEqual('1.1', String(new String(1.1)));
    checkEqual('NaN', String(new String(NaN)));
    checkEqual('Infinity', String(new String(Infinity)));
    checkEqual('undefined', String(new String(undefined)));
    checkEqual('null', String(new String(null)));
    checkEqual(false, isString(new String()));
    checkEqual(false, isString(new String(undefined)));
    checkEqual(false, isString(new String(null)));
    checkEqual(false, isString(new String('')));
    checkEqual(false, isString(new String('1')));
    checkEqual(false, isString(new String(1)));
    checkEqual(true, isStringObject(new String()));
    checkEqual(true, isStringObject(new String(undefined)));
    checkEqual(true, isStringObject(new String(null)));
    checkEqual(true, isStringObject(new String('')));
    checkEqual(true, isStringObject(new String('1')));
    checkEqual(true, isStringObject(new String(1)));
  };

  var test_isFunction = function test_isFunction() {
    var isFunctionArray = function isFunctionArray(array) {
      return matchAll(array, [isFunction]);
    };

    var isNotFunctionArray = function isNotFunctionArray(array) {
      return matchAll(array, [isNotFunction]);
    };

    checkEqual(true, isFunction(function () {}));
    checkEqual(false, isFunction({}));
    checkEqual(true, isFunction(function () {}, test_isFunction));
    checkEqual(false, isFunction({}, test_isFunction));
    checkEqual(true, isFunctionArray([function () {}, test_isFunction]));
    checkEqual(false, isFunctionArray([{}, test_isFunction]));
  };

  var test_isObject = function test_isObject() {
    var isObjectArray = function isObjectArray(array) {
      return matchAll(array, [isObject]);
    };

    var isNotObjectArray = function isNotObjectArray(array) {
      return matchAll(array, [isNotObject]);
    };

    checkEqual(false, isObject(null));
    checkEqual(false, isObject(undefined));
    checkEqual(false, isObject(undefined));
    checkEqual(false, isObject('a'));
    checkEqual(false, isObject(1));
    checkEqual(false, isObject(true));
    checkEqual(true, isObject({}));
    checkEqual(true, isObject({
      a: 0
    }));
    checkEqual(true, isObject({
      a: 0,
      b: 1
    }));
    checkEqual(false, isObject([]));
    checkEqual(false, isObject(function () {}));
    checkEqual(false, isObject(function () {}));
    checkEqual(false, isObject(new Error()));
    checkEqual(false, isObject(new Date()));
    checkEqual(false, isObject(new RegExp()));
    checkEqual(false, isObject(new String()));
    checkEqual(false, isObject(new Number()));
    checkEqual(false, isObject(new Boolean()));
    checkEqual(true, isObject(new Object()));
    checkEqual(false, isObject(new Array()));
    checkEqual(false, isObject(new Function()));
    checkEqual(true, isObject({
      a: 0,
      b: 1
    }, {
      c: 0,
      d: 1
    }));
    checkEqual(true, isObjectArray([{}, {
      a: 0,
      b: 1
    }]));
    checkEqual(false, isObjectArray([[], {
      a: 0,
      b: 1
    }]));
    checkEqual(false, isObjectArray([[{}], {
      a: 0,
      b: 1
    }]));

    var TestObject = function TestObject() {
      this.a = 'a';
    };

    var testObject1 = new TestObject();
    checkEqual(true, isObject(testObject1));
  };

  var test_isObjectType = function test_isObjectType() {
    var isObjectTypeArray = function isObjectTypeArray(array) {
      return matchAll(array, [isObjectType]);
    };

    var isNotObjectTypeArray = function isNotObjectTypeArray(array) {
      return matchAll(array, [isNotObjectType]);
    };

    checkEqual(false, isObjectType(null));
    checkEqual(false, isObjectType(undefined));
    checkEqual(false, isObjectType('a'));
    checkEqual(false, isObjectType(1));
    checkEqual(false, isObjectType(true));
    checkEqual(true, isObjectType({}));
    checkEqual(true, isObjectType({
      a: 0
    }));
    checkEqual(true, isObjectType({
      a: 0,
      b: 1
    }));
    checkEqual(true, isObjectType([]));
    checkEqual(true, isObjectType(function () {}));
    checkEqual(true, isObjectType(function () {}));
    checkEqual(true, isObjectType(new Error()));
    checkEqual(true, isObjectType(new Date()));
    checkEqual(true, isObjectType(new RegExp()));
    checkEqual(true, isObjectType(new String()));
    checkEqual(true, isObjectType(new Number()));
    checkEqual(true, isObjectType(new Boolean()));
    checkEqual(true, isObjectType(new Object()));
    checkEqual(true, isObjectType(new Array()));
    checkEqual(true, isObjectType(new Function()));
    checkEqual(true, isObjectType({
      a: 0,
      b: 1
    }, {
      c: 0,
      d: 1
    }));
    checkEqual(true, isObjectTypeArray([{}, {
      a: 0,
      b: 1
    }]));
    checkEqual(true, isObjectTypeArray([[], {
      a: 0,
      b: 1
    }]));
    checkEqual(true, isObjectTypeArray([[{}], {
      a: 0,
      b: 1
    }]));

    var TestObject = function TestObject() {
      this.a = 'a';
    };

    var testObject1 = new TestObject();
    checkEqual(true, isObjectType(testObject1));
  };

  var test_isArray = function test_isArray() {
    var isArrayArray = function isArrayArray(array) {
      return matchAll(array, [isArray]);
    };

    var isNotArrayArray = function isNotArrayArray(array) {
      return matchAll(array, [isNotArray]);
    };

    checkEqual(true, isArray([123]));
    checkEqual(true, isArray([]));
    checkEqual(true, isArray([1, 2, 3]));
    checkEqual(false, isArray(123));
    checkEqual(false, isArray('1,2,3'));
    checkEqual(true, isArray([1], [2]));
    checkEqual(true, isArray([3], [4], [5]));
    checkEqual(true, isArray([10, 20], [30]));
    checkEqual(false, isArray([1, 2], 3));
    checkEqual(true, isNotArray(1, 2));
    checkEqual(false, isNotArray([3], [4], 5));
    checkEqual(true, isNotArray(10, 20, 30));
    checkEqual(false, isNotArray(10, 20, [30]));
    checkEqual(true, isArrayArray([[1], [2]]));
    checkEqual(true, isArrayArray([[3], [4], [5]]));
    checkEqual(true, isArrayArray([[10, 20], [30]]));
    checkEqual(false, isArrayArray([[1, 2], 3]));
    checkEqual(true, isNotArrayArray([1, 2]));
    checkEqual(false, isNotArrayArray([[3], [4], 5]));
    checkEqual(true, isNotArrayArray([10, 20, 30]));
    checkEqual(false, isNotArrayArray([10, 20, [30]]));
  };

  var test_isArrayType = function test_isArrayType() {
    checkEqual(true, Array.isArray([]));
    checkEqual(true, Array.isArray([123]));
    checkEqual(true, Array.isArray([1, 2, 3]));
    checkEqual(true, Array.isArray(new Array()));
    checkEqual(true, Array.isArray(new Array(1, 2, 3)));
    checkEqual(true, Array.isArray(new Array()));

    if (!parts.platform.wsh) {
      checkEqual(false, Array.isArray(new Int8Array()));
      checkEqual(false, Array.isArray(new Uint8Array()));
      checkEqual(false, Array.isArray(new Uint8ClampedArray()));
      checkEqual(false, Array.isArray(new Int16Array()));
      checkEqual(false, Array.isArray(new Uint16Array()));
      checkEqual(false, Array.isArray(new Int32Array()));
      checkEqual(false, Array.isArray(new Uint32Array()));
      checkEqual(false, Array.isArray(new Float32Array()));
      checkEqual(false, Array.isArray(new Float64Array()));
    }

    checkEqual(true, isArray([]));
    checkEqual(true, isArray([123]));
    checkEqual(true, isArray([1, 2, 3]));
    checkEqual(true, isArray(new Array()));
    checkEqual(true, isArray(new Array(1, 2, 3)));
    checkEqual(true, isArray(new Array()));

    if (!parts.platform.wsh) {
      checkEqual(false, isArray(new Int8Array()));
      checkEqual(false, isArray(new Uint8Array()));
      checkEqual(false, isArray(new Uint8ClampedArray()));
      checkEqual(false, isArray(new Int16Array()));
      checkEqual(false, isArray(new Uint16Array()));
      checkEqual(false, isArray(new Int32Array()));
      checkEqual(false, isArray(new Uint32Array()));
      checkEqual(false, isArray(new Float32Array()));
      checkEqual(false, isArray(new Float64Array()));
    }

    checkEqual(true, isArrayType([]));
    checkEqual(true, isArrayType([123]));
    checkEqual(true, isArrayType([1, 2, 3]));
    checkEqual(true, isArrayType(new Array()));
    checkEqual(true, isArrayType(new Array(1, 2, 3)));
    checkEqual(true, isArrayType(new Array()));

    if (!parts.platform.wsh) {
      checkEqual(true, isArrayType(new Int8Array()));
      checkEqual(true, isArrayType(new Uint8Array()));
      checkEqual(true, isArrayType(new Uint8ClampedArray()));
      checkEqual(true, isArrayType(new Int16Array()));
      checkEqual(true, isArrayType(new Uint16Array()));
      checkEqual(true, isArrayType(new Int32Array()));
      checkEqual(true, isArrayType(new Uint32Array()));
      checkEqual(true, isArrayType(new Float32Array()));
      checkEqual(true, isArrayType(new Float64Array()));
    }
  };

  var test_isDate = function test_isDate() {
    checkEqual(true, isDate(new Date(2017, 1, 1)));
    checkEqual(true, isDate(new Date('2017/01')));
    checkEqual(true, isDate(new Date(2017, 1)));
    checkEqual(true, isDate(new Date(2017, 1)));
  };

  var test_isExcection = function test_isExcection() {
    checkEqual(true, isException({
      name: '',
      message: ''
    }));
    checkEqual(false, isException({
      name: ''
    }));
    checkEqual(false, isException({
      message: ''
    }));
    checkEqual(true, isException(new Error()));
    checkEqual(true, isException(new TypeError()));
    checkEqual(true, isException(new SyntaxError()));
    checkEqual(true, isException(new ReferenceError()));

    var UserException = function UserException(message) {
      this.message = message;
      this.name = 'UserException';
    };

    checkEqual(true, isException(new UserException('message')));
  };

  var test_isSymbol = function test_isSymbol() {
    if (parts.platform.wsh) {
      return;
    }

    checkEqual(false, isSymbol(1));
    checkEqual(true, isSymbol(Symbol()));
  };

  var test_isMap = function test_isMap() {
    if (parts.platform.wsh) {
      return;
    }

    checkEqual(false, isMap({}));
    checkEqual(false, isWeakMap({}));
    checkEqual(true, isMap(new Map()));
    checkEqual(false, isWeakMap(new Map()));
    checkEqual(false, isMap(new WeakMap()));
    checkEqual(true, isWeakMap(new WeakMap()));
    checkEqual(true, isObject({}));
    checkEqual(false, isObject(new Map()));
    checkEqual(false, isObject(new WeakMap()));
  };

  var test_isSet = function test_isSet() {
    if (parts.platform.wsh) {
      return;
    }

    checkEqual(false, isSet({}));
    checkEqual(false, isWeakSet({}));
    checkEqual(true, isSet(new Set()));
    checkEqual(false, isWeakSet(new Set()));
    checkEqual(false, isSet(new WeakSet()));
    checkEqual(true, isWeakSet(new WeakSet()));
  };

  console.log('  test type.js');
  test_checkType();
  test_isUndefined();
  test_isNull();
  test_isBoolean();
  test_isNumber();
  test_isInteger();
  test_isString();
  test_isFunction();
  test_isObject();
  test_isObjectType();
  test_isArray();
  test_isArrayType();
  test_isDate();
  test_isExcection();
  test_isSymbol();
  test_isMap();
  test_isSet();
};

module.exports = {
  test_execute_type: test_execute_type
};