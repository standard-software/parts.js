(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["test_parts"] = factory();
	else
		root["test_parts"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.test_execute_index = void 0;

var _rootTest = __webpack_require__(2);

var _typeTest = __webpack_require__(3);

var _syntaxTest = __webpack_require__(4);

var _testTest = __webpack_require__(5);

var _compareTest = __webpack_require__(6);

var _convertTest = __webpack_require__(7);

var _numberTest = __webpack_require__(8);

var _stringTest = __webpack_require__(9);

var _objectTest = __webpack_require__(10);

var _arrayTest = __webpack_require__(11);

var _consoleHookTest = __webpack_require__(12);

var _otherTest = __webpack_require__(13);

var test_execute_index = function test_execute_index(parts) {
  console.log("parts.js version: ".concat(parts.VERSION));
  console.log("platform: ".concat(parts.platform.name()));

  if (parts.platform.isWebBrowser()) {
    console.log("  web browser: ".concat(parts.platform.browserName()));
    console.log("  User Agent: ".concat(window.navigator.userAgent));
  }

  if (parts.platform.buildMode !== '') {
    console.log("  buildMode: ".concat(parts.platform.buildMode));
  }

  console.log('test start');

  var test_execute_nameSpace = function test_execute_nameSpace(parts) {
    var _parts$test = parts.test,
        describe = _parts$test.describe,
        it = _parts$test.it,
        checkEqual = _parts$test.checkEqual;
    describe('test_execute_nameSpace', function () {
      var _parts$object = parts.object,
          propertyCount = _parts$object.propertyCount,
          inProperty = _parts$object.inProperty;
      it('test_execute_nameSpace 1', function () {
        var countArray = [317, 15, 3, 208, 9, 11, 23, 29, 7, 29, 14, 36];
        checkEqual(countArray.shift(), propertyCount(parts));
        checkEqual(countArray.shift(), propertyCount(parts.platform));
        checkEqual(countArray.shift(), propertyCount(parts.root));
        checkEqual(countArray.shift(), propertyCount(parts.type));
        checkEqual(countArray.shift(), propertyCount(parts.syntax));
        checkEqual(countArray.shift(), propertyCount(parts.test));
        checkEqual(countArray.shift(), propertyCount(parts.compare));
        checkEqual(countArray.shift(), propertyCount(parts.convert));
        checkEqual(countArray.shift(), propertyCount(parts.number));
        checkEqual(countArray.shift(), propertyCount(parts.string));
        checkEqual(countArray.shift(), propertyCount(parts.object));
        checkEqual(countArray.shift(), propertyCount(parts.array));
        checkEqual(true, inProperty(parts, 'type,syntax,test,compare,convert,' + 'string,object,consoleHook'));
      });
      it('test_execute_nameSpace 2', function () {
        checkEqual(true, inProperty(parts, 'isUndefinedAll,isNotNullAll,' + 'isFunc,isNotObj,' + 'isThrown,isThrownValue,isThrownException,isNotThrown,' + 'assert,guard,' + 'sc,if_,switch_,' + 'equal,or,' + 'matchSome,matchSomeValue,initialValue,' + 'numberToString,' + 'stringToNumber,stringToInteger,' + 'numToString,' + 'strToNumber,strToInteger,' + 'numToStr,' + 'strToNum,strToInt,' + 'matchFormat,' + 'copyProperty,propertyCount,inProperty,' + 'copyProp,propCount,inProp,' + 'root'));
        checkEqual(false, inProperty(parts, 'abc,' + ''));
      });
    });
  };

  var test_execute_SelfReference = function test_execute_SelfReference(parts) {
    var _parts$test2 = parts.test,
        describe = _parts$test2.describe,
        it = _parts$test2.it,
        checkEqual = _parts$test2.checkEqual;
    describe('test_execute_SelfReference', function () {
      it('test_parts_SelfReference', function () {
        checkEqual(parts.VERSION, parts.parts.VERSION);
        checkEqual(false, parts.isUndefined(parts.parts));
        checkEqual(true, parts.isUndefined(parts.parts.parts));
        var parts1 = parts.cloneDeep(parts);
        delete parts1.parts;
        var parts2 = parts.cloneDeep(parts.parts);
        checkEqual(true, parts.equalDeep(parts1, parts2));
      });
    });
  };

  var describe = parts.test.describe;
  describe('test_execute_index', function () {
    (0, _rootTest.test_execute_root)(parts);
    (0, _typeTest.test_execute_type)(parts);
    (0, _syntaxTest.test_execute_syntax)(parts);
    (0, _testTest.test_execute_test)(parts);
    (0, _compareTest.test_execute_compare)(parts);
    (0, _convertTest.test_execute_convert)(parts);
    (0, _numberTest.test_execute_number)(parts);
    (0, _stringTest.test_execute_string)(parts);
    (0, _objectTest.test_execute_object)(parts);
    (0, _arrayTest.test_execute_array)(parts);
    (0, _consoleHookTest.test_execute_consoleHook)(parts);
    (0, _otherTest.test_execute_other)(parts);
    test_execute_nameSpace(parts);
    test_execute_SelfReference(parts);
  });
};

exports.test_execute_index = test_execute_index;
var _default = {
  test_execute_index: test_execute_index
};
exports["default"] = _default;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.test_execute_root = void 0;

/* eslint-disable max-len */

/* eslint-disable no-var */
var test_execute_root = function test_execute_root(parts) {
  var _parts$test = parts.test,
      checkEqual = _parts$test.checkEqual,
      describe = _parts$test.describe,
      it = _parts$test.it,
      test = _parts$test.test;
  describe('test_execute_root', function () {
    var clone = parts.clone,
        cloneDeep = parts.cloneDeep,
        cloneFunction = parts.cloneFunction;

    var test_clone_object = function test_clone_object() {
      it('test_clone_object', function () {
        var testObject1 = {
          a: 1,
          b: 2,
          c: 3
        }; // no clone

        var object1 = testObject1;
        object1.a = 0;
        checkEqual(0, object1.a);
        checkEqual(0, testObject1.a);
        testObject1.a = 1; // clone

        var object1 = clone(testObject1);
        object1.a = 0;
        checkEqual(0, object1.a);
        checkEqual(1, testObject1.a); // no clone deep

        var testObject2 = {
          a: 4,
          b: 5,
          c: 6
        };
        var testObject3 = {
          a: 1,
          b: 2,
          c: 3,
          d: testObject2
        };
        var object1 = clone(testObject3);
        object1.a = 0;
        checkEqual(0, object1.a);
        checkEqual(1, testObject3.a);
        checkEqual(true, object1.d === testObject3.d);
        checkEqual(6, object1.d.c);
        checkEqual(6, testObject3.d.c);
        object1.d.a = 7;
        checkEqual(7, object1.d.a);
        checkEqual(7, testObject3.d.a);
      });
    };

    var test_clone_array = function test_clone_array() {
      it('test_clone_array', function () {
        var testArray1 = [1, 2, 3]; // no clone

        var array1 = testArray1;
        array1[0] = 0;
        checkEqual(0, array1[0], 'test');
        checkEqual(0, testArray1[0]);
        testArray1[0] = 1; // clone

        var array1 = clone(testArray1);
        array1[0] = 0;
        checkEqual(0, array1[0]);
        checkEqual(1, testArray1[0]); // no clone deep

        var testArray2 = ['a', 'b', 'c'];
        var testArray3 = [1, 2, 3, testArray2];
        var array1 = clone(testArray3);
        array1[0] = 0;
        checkEqual(0, array1[0]);
        checkEqual(1, testArray3[0]);
        checkEqual(true, array1[3] === testArray3[3]);
        array1[3][0] = 'd';
        checkEqual('d,b,c', array1[3].join(','));
        checkEqual('d,b,c', testArray3[3].join(','));
      });
    };

    var test_clone_date = function test_clone_date() {
      it('test_clone_date', function () {
        // no clone
        var testDate1 = new Date('2019/10/11');
        var date1 = testDate1;
        checkEqual(2019, date1.getFullYear());
        checkEqual(10, date1.getMonth() + 1);
        checkEqual(11, date1.getDate());
        date1.setDate(12);
        checkEqual(2019, date1.getFullYear());
        checkEqual(10, date1.getMonth() + 1);
        checkEqual(12, date1.getDate());
        checkEqual(2019, testDate1.getFullYear());
        checkEqual(10, testDate1.getMonth() + 1);
        checkEqual(12, testDate1.getDate()); // date type clone

        var testDate1 = new Date('2019/10/11');
        var date1 = clone(testDate1);
        date1.setDate(12);
        checkEqual(12, date1.getDate());
        checkEqual(11, testDate1.getDate()); // object array only clone

        clone.clear();
        clone.add(cloneFunction.cloneObject);
        clone.add(cloneFunction.cloneArrayType);
        var testDate1 = new Date('2019/10/11');
        var date1 = clone(testDate1);
        date1.setDate(12);
        checkEqual(12, date1.getDate());
        checkEqual(12, testDate1.getDate());
        clone.reset(); // object array date clone

        clone.clear();
        clone.add(cloneFunction.cloneObject);
        clone.add(cloneFunction.cloneArrayType);
        clone.add(cloneFunction.cloneDate);
        var testDate1 = new Date('2019/10/11');
        var date1 = clone(testDate1);
        date1.setDate(12);
        checkEqual(12, date1.getDate());
        checkEqual(11, testDate1.getDate());
        clone.reset();
      });
    };

    var test_clone_function = function test_clone_function() {
      it('test_clone_function', function () {
        var testFunc1 = function testFunc1() {
          return 'ABC';
        }; // no clone


        var func1 = testFunc1;
        checkEqual(true, func1 === testFunc1);
        checkEqual('ABC', func1()); // clone

        var func1 = clone(testFunc1);
        checkEqual(true, func1 === testFunc1);
        checkEqual('ABC', func1());
      });
    };

    var test_clone_regexp = function test_clone_regexp() {
      it('test_clone_regexp', function () {
        var testRegExp1 = new RegExp('^a'); // no clone

        var regexp1 = testRegExp1;
        checkEqual(true, regexp1 === testRegExp1, 'test_clone_regexp 1');
        checkEqual(true, '^a' === testRegExp1.source);
        checkEqual(true, '^a' === regexp1.source); // clone

        var regexp1 = clone(testRegExp1);
        checkEqual(false, regexp1 === testRegExp1);
        checkEqual(true, '^a' === testRegExp1.source);
        checkEqual(true, '^a' === regexp1.source); // clone no RegExpFunction

        clone.clear();
        clone.add(cloneFunction.cloneObjectType);
        var regexp1 = clone(testRegExp1);
        checkEqual(false, regexp1 === testRegExp1, 'test_clone_regexp clone');
        checkEqual(true, '^a' === testRegExp1.source);
        checkEqual(false, '^a' === regexp1.source);
        clone.reset(); // clone

        var testRegExp2 = /^a/;
        var regexp1 = clone(testRegExp2);
        checkEqual(false, regexp1 === testRegExp2);
        checkEqual(true, '^a' === testRegExp2.source);
        checkEqual(true, '^a' === regexp1.source); // clone no RegExpFunction

        clone.clear();
        clone.add(cloneFunction.cloneObjectType);
        var regexp1 = clone(testRegExp2);
        checkEqual(false, regexp1 === testRegExp2);
        checkEqual(true, '^a' === testRegExp2.source);
        checkEqual(false, '^a' === regexp1.source);
        clone.reset();
      });
    };

    var test_cloneDeep_object = function test_cloneDeep_object() {
      it('test_cloneDeep_object', function () {
        // clone deep
        var testObject2 = {
          a: 4,
          b: 5,
          c: 6
        };
        var testObject3 = {
          a: 1,
          b: 2,
          c: 3,
          d: testObject2
        };
        var object1 = cloneDeep(testObject3);
        object1.a = 0;
        checkEqual(0, object1.a);
        checkEqual(1, testObject3.a);
        checkEqual(true, object1.d !== testObject3.d);
        checkEqual(6, object1.d.c);
        checkEqual(6, testObject3.d.c);
        object1.d.a = 7;
        checkEqual(7, object1.d.a);
        checkEqual(4, testObject3.d.a);
      });
    };

    var test_cloneDeep_array = function test_cloneDeep_array() {
      it('test_cloneDeep_array', function () {
        // clone deep
        var testArray2 = ['a', 'b', 'c'];
        var testArray3 = [1, 2, 3, testArray2];
        var array1 = cloneDeep(testArray3);
        array1[0] = 0;
        checkEqual(0, array1[0]);
        checkEqual(1, testArray3[0]);
        checkEqual(false, array1[3] === testArray3[3]);
        array1[3][0] = 'd';
        checkEqual('d,b,c', array1[3].join(','));
        checkEqual('a,b,c', testArray3[3].join(','));
      });
    };

    var test_cloneDeep_object_array_mix = function test_cloneDeep_object_array_mix() {
      it('test_cloneDeep_object_array_mix', function () {
        // no clone deep array object
        var testValue1 = [1, 2, 3, {
          a: 1,
          b: 2,
          c: 3
        }];
        var value1 = clone(testValue1);
        value1[0] = 0;
        checkEqual(0, value1[0]);
        checkEqual(1, testValue1[0]);
        value1[3].a = 4;
        checkEqual(4, value1[3].a);
        checkEqual(4, testValue1[3].a); // clone deep array object

        var testValue1 = [1, 2, 3, {
          a: 1,
          b: 2,
          c: 3
        }];
        var value1 = cloneDeep(testValue1);
        value1[0] = 0;
        checkEqual(0, value1[0]);
        checkEqual(1, testValue1[0]);
        value1[3].a = 4;
        checkEqual(4, value1[3].a);
        checkEqual(1, testValue1[3].a); // no clone deep object array

        var testValue2 = {
          a: 1,
          b: 2,
          c: 3,
          d: [1, 2, 3]
        };
        var value2 = clone(testValue2);
        value2.a = 0;
        checkEqual(0, value2.a);
        checkEqual(1, testValue2.a);
        value2.d[0] = 4;
        checkEqual(4, value2.d[0]);
        checkEqual(4, testValue2.d[0]); // clone deep object array

        var testValue2 = {
          a: 1,
          b: 2,
          c: 3,
          d: [1, 2, 3]
        };
        var value2 = cloneDeep(testValue2);
        value2.a = 0;
        checkEqual(0, value2.a);
        checkEqual(1, testValue2.a);
        value2.d[0] = 4;
        checkEqual(4, value2.d[0]);
        checkEqual(1, testValue2.d[0]); // no clone deep array object array

        var testValue1 = [1, 2, 3, {
          a: 1,
          b: 2,
          c: [3, 4, 5]
        }];
        var value1 = clone(testValue1);
        value1[3].c[0] = 6;
        checkEqual(6, value1[3].c[0]);
        checkEqual(6, testValue1[3].c[0]); // clone deep array object array

        var testValue1 = [1, 2, 3, {
          a: 1,
          b: 2,
          c: [3, 4, 5]
        }];
        var value1 = cloneDeep(testValue1);
        value1[3].c[0] = 6;
        checkEqual(6, value1[3].c[0]);
        checkEqual(3, testValue1[3].c[0]); // no clone deep object array object

        var testValue2 = {
          a: 1,
          b: 2,
          c: 3,
          d: [{
            e: 4,
            f: 5,
            g: 6
          }, 2, 3]
        };
        var value2 = clone(testValue2);
        value2.d[0].e = 7;
        checkEqual(7, value2.d[0].e);
        checkEqual(7, testValue2.d[0].e); // clone deep object array object

        var testValue2 = {
          a: 1,
          b: 2,
          c: 3,
          d: [{
            e: 4,
            f: 5,
            g: 6
          }, 2, 3]
        };
        var value2 = cloneDeep(testValue2);
        value2.d[0].e = 7;
        checkEqual(7, value2.d[0].e);
        checkEqual(4, testValue2.d[0].e);
      });
    };

    var test_cloneDeep_date = function test_cloneDeep_date() {
      it('test_cloneDeep_date', function () {
        // no clone
        var date1 = new Date('2019/10/11');
        checkEqual(2019, date1.getFullYear());
        checkEqual(10, date1.getMonth() + 1);
        checkEqual(11, date1.getDate());
        date1.setDate(12);
        checkEqual(2019, date1.getFullYear());
        checkEqual(10, date1.getMonth() + 1);
        checkEqual(12, date1.getDate()); // clone array date no clone

        var date1 = new Date('2019/10/11');
        var value1 = [1, 2, 3, date1];
        var value2 = clone(value1);
        value2[3].setDate(13);
        checkEqual(13, value2[3].getDate());
        checkEqual(13, value1[3].getDate());
        checkEqual(true, value1[3] === value2[3]); // cloneDeep array date clone

        var date1 = new Date('2019/10/11');
        var value1 = [1, 2, 3, date1];
        var value2 = cloneDeep(value1);
        value2[3].setDate(13);
        checkEqual(13, value2[3].getDate());
        checkEqual(11, value1[3].getDate());
        checkEqual(false, value1[3] === value2[3]); // cloneDepp ignore date

        var date1 = new Date('2019/10/11');
        cloneDeep.clear();
        cloneDeep.add(cloneFunction.cloneObject);
        cloneDeep.add(cloneFunction.cloneArrayType);
        var value1 = [1, 2, 3, date1];
        var value2 = cloneDeep(value1);
        value2[3].setDate(13);
        checkEqual(13, value2[3].getDate());
        checkEqual(13, value1[3].getDate());
        checkEqual(true, value1[3] === value2[3]); // cloneDeep add cloneDate

        var date1 = new Date('2019/10/11');
        var value1 = [1, 2, 3, date1];
        cloneDeep.add(cloneFunction.cloneDate);
        var value2 = cloneDeep(value1);
        value2[3].setDate(13);
        checkEqual(13, value2[3].getDate());
        checkEqual(11, value1[3].getDate());
        checkEqual(false, value1[3] === value2[3]);
        cloneDeep.reset(); // date1 clone same object

        var date1 = new Date('2019/10/11');
        var value1 = [1, 2, 3, date1, date1];
        var value2 = cloneDeep(value1);
        checkEqual(false, value1[3] === value2[3]);
        checkEqual(true, value1[3] === value1[4]);
        checkEqual(true, value2[3] === value2[4], 'date1 clone same object');
      });
    };

    var test_cloneDeep_regExp = function test_cloneDeep_regExp() {
      it('test_cloneDeep_regExp', function () {
        var regexp1 = new RegExp('^a'); // clone Deep

        var regexp2 = cloneDeep(regexp1);
        checkEqual(false, regexp2 === regexp1);
        checkEqual(true, '^a' === regexp1.source);
        checkEqual(true, '^a' === regexp2.source); // clone Deep no RegExpFunction

        cloneDeep.clear();
        cloneDeep.add(cloneFunction.cloneObjectType);
        var regexp2 = cloneDeep(regexp1);
        checkEqual(false, regexp2 === regexp1);
        checkEqual(true, '^a' === regexp1.source);
        checkEqual(false, '^a' === regexp2.source);
        cloneDeep.reset(); // clone Deep in Object

        var regexp2 = cloneDeep({
          value: regexp1
        });
        checkEqual(false, regexp2.value === regexp1);
        checkEqual(true, '^a' === regexp1.source);
        checkEqual(true, '^a' === regexp2.value.source); // clone Deep no RegExpFunction in Object

        cloneDeep.clear();
        cloneDeep.add(cloneFunction.cloneObjectType);
        var regexp2 = cloneDeep({
          value: regexp1
        });
        checkEqual(false, regexp2.value === regexp1);
        checkEqual(true, '^a' === regexp1.source);
        checkEqual(false, '^a' === regexp2.value.source);
        cloneDeep.reset(); // clone Deep in Array

        var regexp2 = cloneDeep([regexp1]);
        checkEqual(false, regexp2[0] === regexp1);
        checkEqual(true, '^a' === regexp1.source);
        checkEqual(true, '^a' === regexp2[0].source); // clone Deep no RegExpFunction in Array

        cloneDeep.clear();
        cloneDeep.add(cloneFunction.cloneObjectType);
        var regexp2 = cloneDeep([regexp1]);
        checkEqual(false, regexp2[0] === regexp1);
        checkEqual(true, '^a' === regexp1.source);
        checkEqual(false, '^a' === regexp2[0].source);
        cloneDeep.reset();
        var regexp1 = /^a/; // clone Deep

        var regexp2 = cloneDeep(regexp1);
        checkEqual(false, regexp2 === regexp1);
        checkEqual(true, '^a' === regexp1.source);
        checkEqual(true, '^a' === regexp2.source); // clone Deep no RegExpFunction

        cloneDeep.clear();
        cloneDeep.add(cloneFunction.cloneObjectType);
        var regexp2 = cloneDeep(regexp1);
        checkEqual(false, regexp2 === regexp1);
        checkEqual(true, '^a' === regexp1.source);
        checkEqual(false, '^a' === regexp2.source);
        cloneDeep.reset(); // clone Deep in Object

        var regexp2 = cloneDeep({
          value: regexp1
        });
        checkEqual(false, regexp2.value === regexp1);
        checkEqual(true, '^a' === regexp1.source);
        checkEqual(true, '^a' === regexp2.value.source); // clone Deep no RegExpFunction in Object

        cloneDeep.clear();
        cloneDeep.add(cloneFunction.cloneObjectType);
        var regexp2 = cloneDeep({
          value: regexp1
        });
        checkEqual(false, regexp2.value === regexp1);
        checkEqual(true, '^a' === regexp1.source);
        checkEqual(false, '^a' === regexp2.value.source);
        cloneDeep.reset(); // clone Deep in Array

        var regexp2 = cloneDeep([regexp1]);
        checkEqual(false, regexp2[0] === regexp1);
        checkEqual(true, '^a' === regexp1.source);
        checkEqual(true, '^a' === regexp2[0].source); // clone Deep no RegExpFunction in Array

        cloneDeep.clear();
        cloneDeep.add(cloneFunction.cloneObjectType);
        var regexp2 = cloneDeep([regexp1]);
        checkEqual(false, regexp2[0] === regexp1);
        checkEqual(true, '^a' === regexp1.source);
        checkEqual(false, '^a' === regexp2[0].source);
        cloneDeep.reset(); // regexp1 clone same object

        var regexp1 = /^a/;
        var value1 = [1, 2, 3, regexp1, regexp1];
        var value2 = cloneDeep(value1);
        checkEqual(false, value1[3] === value2[3]);
        checkEqual(true, value1[3] === value1[4]);
        checkEqual(true, value2[3] === value2[4], 'regexp1 clone same object');
      });
    };

    var test_cloneDeep_function = function test_cloneDeep_function() {
      it('test_cloneDeep_function', function () {
        var testFunc1 = function testFunc1() {
          return 'ABC';
        }; // no clone


        var object1 = {
          func: testFunc1
        };
        checkEqual(true, object1.func === testFunc1);
        checkEqual('ABC', object1.func()); // clone

        var object1 = clone({
          func: testFunc1
        });
        checkEqual(true, object1.func === testFunc1);
        checkEqual('ABC', object1.func()); // clone Deep

        var object1 = cloneDeep({
          func: testFunc1
        });
        checkEqual(true, object1.func === testFunc1);
        checkEqual('ABC', object1.func()); // no clone

        var array1 = [testFunc1];
        checkEqual(true, array1[0] === testFunc1);
        checkEqual('ABC', array1[0]()); // clone

        var array1 = clone([testFunc1]);
        checkEqual(true, array1[0] === testFunc1);
        checkEqual('ABC', array1[0]()); // clone Deep

        var array1 = cloneDeep([testFunc1]);
        checkEqual(true, array1[0] === testFunc1);
        checkEqual('ABC', array1[0]());
      });
    }; // const test_cloneDeep_moment = () => {
    //   it('test_cloneDeep_moment', () => {
    //     if (parts.platform.isWindowsScriptHost()) {
    //       return;
    //     }
    //     if (parts.platform.isWebBrowser()) {
    //       return;
    //     }
    //     import moment from 'moment';
    //     // moment type clone no
    //     var moment1 = moment('2019/10/11', 'YYYY/MM/DD');
    //     var testValue1 = [1, 2, 3, moment1];
    //     var value1 = clone(testValue1);
    //     value1[3].set('year', 2018);
    //     checkEqual(true, value1[3] === testValue1[3]);
    //     checkEqual('2018/10/11', value1[3].format('YYYY/MM/DD'));
    //     checkEqual('2018/10/11', testValue1[3].format('YYYY/MM/DD'));
    //     // moment object fail
    //     // const cloneValue = new source.constructor();
    //     // moment type cloneDeep
    //     var moment1 = moment('2019/10/11', 'YYYY/MM/DD');
    //     var testValue1 = [1, 2, 3, moment1];
    //     // initialise
    //     cloneDeep.clear();
    //     var value1 = cloneDeep(testValue1);
    //     value1[3].set('year', 2018);
    //     checkEqual(true, value1[3] === testValue1[3]); // clone
    //     checkEqual('2018/10/11', value1[3].format('YYYY/MM/DD'));
    //     checkEqual('2018/10/11', testValue1[3].format('YYYY/MM/DD'));
    //     // but not correct
    //     // moment type cloneDeep moment clone function
    //     cloneFunction.cloneMoment = (source, bufferWrite)  => {
    //       if (!moment.isMoment(source)) {
    //         return undefined;
    //       }
    //       const cloneValue = moment(source);
    //       bufferWrite(source, cloneValue);
    //       return cloneValue;
    //     };
    //     cloneDeep.reset();
    //     cloneDeep.add(cloneFunction.cloneMoment);
    //     var moment1 = moment('2019/10/11', 'YYYY/MM/DD');
    //     var testValue1 = [1, 2, 3, moment1];
    //     var value1 = cloneDeep(testValue1);
    //     value1[3].set('year', 2018);
    //     checkEqual('2018/10/11', value1[3].format('YYYY/MM/DD'));
    //     checkEqual('2019/10/11', testValue1[3].format('YYYY/MM/DD'));
    //     // correct
    //     cloneDeep.reset();
    //   });
    // };


    var test_cloneDeep_symbol = function test_cloneDeep_symbol() {
      it('test_cloneDeep_symbol', function () {
        if (parts.platform.isWindowsScriptHost()) {
          return;
        }

        if (parts.platform.isInternetExplorer()) {
          return;
        }

        var symbol1 = Symbol();
        checkEqual(true, parts.isSymbolAll(symbol1));
        var value1 = [symbol1];
        var value2 = cloneDeep(value1);
        checkEqual(true, symbol1 === value1[0]);
        checkEqual(true, value1[0] === value2[0]);
        checkEqual(true, symbol1 === value2[0]);

        cloneFunction.cloneForceSymbol = function (source) {
          var bufferWrite = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

          var __cloneDeep = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (value) {
            return value;
          };

          if (!parts.isSymbolAll(source)) {
            return undefined;
            ;
          }

          var cloneValue = Symbol();
          bufferWrite(source, cloneValue);
          return cloneValue;
        };

        cloneDeep.add(cloneFunction.cloneForceSymbol);
        var value1 = [symbol1];
        var value2 = cloneDeep(value1);
        checkEqual(true, symbol1 === value1[0]);
        checkEqual(false, value1[0] === value2[0] // cloneDeep and new symbol
        );
        checkEqual(false, symbol1 === value2[0] // cloneDeep and new symbol
        );
        cloneDeep.reset();
      });
    };

    var test_cloneDeep_map = function test_cloneDeep_map() {
      it('test_cloneDeep_map', function () {
        if (parts.platform.isWindowsScriptHost()) {
          return;
        }

        if (parts.platform.isInternetExplorer()) {
          return;
        }

        var map1 = new Map();
        map1.set('key1', 'value1');
        map1.set('key2', 'value2');
        checkEqual('value1', map1.get('key1'));
        checkEqual(false, parts.isObjectAll(map1));
        checkEqual(true, parts.isObjectTypeAll(map1)); // initializse nothing cloneMap

        clone.clear();
        clone.add(cloneFunction.cloneObjectType);
        clone.add(cloneFunction.cloneIgnoreFunction);
        clone.add(cloneFunction.cloneRegExp);
        clone.add(cloneFunction.cloneDate);
        cloneDeep.clear();
        cloneDeep.add(cloneFunction.cloneObjectType);
        cloneDeep.add(cloneFunction.cloneIgnoreFunction);
        cloneDeep.add(cloneFunction.cloneRegExp);
        cloneDeep.add(cloneFunction.cloneDate);
        var map2 = clone(map1);

        if (parts.platform.isInternetExplorer()) {
          checkEqual('value1', map2.get('key1')); // IE polyfill clone
        } else {
          checkEqual(undefined, map2.get('key1')); // no clone
        }

        checkEqual(false, map1 === map2);

        if (parts.platform.isInternetExplorer()) {// IE Error
        } else {
          var map2 = cloneDeep(map1);
          checkEqual(undefined, map2.get('key1')); // no clone

          checkEqual(false, map1 === map2);
        }

        clone.reset();
        cloneDeep.reset();
        var map2 = clone(map1);
        checkEqual('value1', map2.get('key1')); // clone

        checkEqual(false, map1 === map2);
        var map2 = cloneDeep(map1);
        checkEqual('value1', map2.get('key1')); // clone

        checkEqual(false, map1 === map2); // map object array

        var map1 = new Map();
        map1.set('a', {
          a: '1'
        });
        map1.set('b', ['b']);
        map1.set('c', {
          a: [1, 2, 3, {
            b: 'c'
          }]
        });
        map1.set('d', [1, 2, 3, {
          b: 'c',
          d: [4, 5, 6]
        }]);
        var map2 = cloneDeep(map1);
        checkEqual(false, map1 === map2);
        checkEqual('1', map2.get('a').a);
        checkEqual('b', map2.get('b')[0]);
        checkEqual('c', map2.get('c').a[3].b);
        checkEqual(6, map2.get('d')[3].d[2]); // clone map

        var object1 = {
          a: '1'
        };
        var map1 = new Map();
        map1.set('a', object1);
        var map2 = clone(map1);
        checkEqual(false, map1 === map2);
        checkEqual('1', map1.get('a').a);
        checkEqual('1', map2.get('a').a);
        checkEqual(true, map1.get('a') === map2.get('a')); // cloneDeep map

        var object1 = {
          a: '1'
        };
        var map1 = new Map();
        map1.set('a', object1);
        var map2 = cloneDeep(map1);
        checkEqual(false, map1 === map2);
        checkEqual('1', map1.get('a').a);
        checkEqual('1', map2.get('a').a);
        checkEqual(false, map1.get('a') === map2.get('a'));
      });
    };

    var test_cloneDeep_set = function test_cloneDeep_set() {
      it('test_cloneDeep_set', function () {
        if (parts.platform.isWindowsScriptHost()) {
          return;
        }

        var set1 = new Set();
        set1.add('value1');
        set1.add('value2');
        checkEqual(true, set1.has('value1'));
        checkEqual(true, set1.has('value2'));
        checkEqual(false, set1.has('value3'));

        if (parts.platform.isInternetExplorer()) {
          checkEqual(true, parts.isObjectAll(set1));
        } else {
          checkEqual(false, parts.isObjectAll(set1));
        }

        checkEqual(true, parts.isObjectTypeAll(set1)); // initializse nothing cloneSet

        clone.clear();
        clone.add(cloneFunction.cloneObjectType);
        clone.add(cloneFunction.cloneIgnoreFunction);
        clone.add(cloneFunction.cloneRegExp);
        clone.add(cloneFunction.cloneDate);
        cloneDeep.clear();
        cloneDeep.add(cloneFunction.cloneObjectType);
        cloneDeep.add(cloneFunction.cloneIgnoreFunction);
        cloneDeep.add(cloneFunction.cloneRegExp);
        cloneDeep.add(cloneFunction.cloneDate);
        var set2 = clone(set1);
        checkEqual(false, set2.has('value1'));
        checkEqual(false, set1 === set2);

        if (parts.platform.isInternetExplorer()) {// IE Error
        } else {
          var set2 = cloneDeep(set1);
          checkEqual(false, set2.has('value1')); // no clone

          checkEqual(false, set1 === set2);
        }

        clone.reset();
        cloneDeep.reset();
        var set2 = clone(set1);

        if (parts.platform.isInternetExplorer()) {
          checkEqual(false, set2.has('value1'));
        } else {
          checkEqual(true, set2.has('value1')); // clone
        }

        checkEqual(false, set1 === set2);
        var set2 = cloneDeep(set1);

        if (parts.platform.isInternetExplorer()) {
          checkEqual(false, set2.has('value1'));
        } else {
          checkEqual(true, set2.has('value1')); // clone
        }

        checkEqual(false, set1 === set2);
      });
    };

    var test_cloneDeep_CircularReference = function test_cloneDeep_CircularReference() {
      it('test_cloneDeep_CircularReference', function () {
        var object1 = {
          b: 'test'
        };
        object1.a = object1;
        checkEqual('test', object1.b);
        checkEqual('test', object1.a.b);
        checkEqual('test', object1.a.a.b);
        var object2 = cloneDeep(object1);
        checkEqual('test', object2.b);
        checkEqual('test', object2.a.b);
        checkEqual('test', object2.a.a.b);
        checkEqual(false, object1 === object2);
        checkEqual(true, object1.a === object1);
        checkEqual(true, object2.a === object2);
        checkEqual(false, object2.a === object1.a);
      });
    };

    test_clone_object();
    test_clone_array();
    test_clone_date();
    test_clone_function();
    test_clone_regexp();
    test_cloneDeep_object();
    test_cloneDeep_array();
    test_cloneDeep_object_array_mix();
    test_cloneDeep_date();
    test_cloneDeep_function();
    test_cloneDeep_regExp(); // test_cloneDeep_moment();

    test_cloneDeep_symbol();
    test_cloneDeep_map();
    test_cloneDeep_set();
    test_cloneDeep_CircularReference();
  });
};

exports.test_execute_root = test_execute_root;
var _default = {
  test_execute_root: test_execute_root
};
exports["default"] = _default;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.test_execute_type = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* eslint-disable new-cap */

/* eslint-disable no-array-constructor */

/* eslint-disable no-new-object */

/* eslint-disable no-new-wrappers */

/* eslint-disable max-len */

/* eslint-disable no-var */
var test_execute_type = function test_execute_type(parts) {
  var _parts$test = parts.test,
      checkEqual = _parts$test.checkEqual,
      describe = _parts$test.describe,
      it = _parts$test.it,
      test = _parts$test.test;
  describe('test_execute_type', function () {
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
        isEmptyObject = _parts$type.isEmptyObject,
        isEmptyArray = _parts$type.isEmptyArray,
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
        isNotEmptyObject = _parts$type.isNotEmptyObject,
        isNotEmptyArray = _parts$type.isNotEmptyArray,
        isNotSymbol = _parts$type.isNotSymbol,
        isNotMap = _parts$type.isNotMap,
        isNotWeakMap = _parts$type.isNotWeakMap,
        isNotSet = _parts$type.isNotSet,
        isNotWeakSet = _parts$type.isNotWeakSet,
        isUndefinedAll = _parts$type.isUndefinedAll,
        isNullAll = _parts$type.isNullAll,
        isNaNStrictAll = _parts$type.isNaNStrictAll,
        isBooleanAll = _parts$type.isBooleanAll,
        isNumberAll = _parts$type.isNumberAll,
        isIntegerAll = _parts$type.isIntegerAll,
        isStringAll = _parts$type.isStringAll,
        isFunctionAll = _parts$type.isFunctionAll,
        isObjectAll = _parts$type.isObjectAll,
        isObjectTypeAll = _parts$type.isObjectTypeAll,
        isArrayAll = _parts$type.isArrayAll,
        isArrayTypeAll = _parts$type.isArrayTypeAll,
        isDateAll = _parts$type.isDateAll,
        isRegExpAll = _parts$type.isRegExpAll,
        isExceptionAll = _parts$type.isExceptionAll,
        isBooleanObjectAll = _parts$type.isBooleanObjectAll,
        isNumberObjectAll = _parts$type.isNumberObjectAll,
        isStringObjectAll = _parts$type.isStringObjectAll,
        isEmptyObjectAll = _parts$type.isEmptyObjectAll,
        isEmptyArrayAll = _parts$type.isEmptyArrayAll,
        isSymbolAll = _parts$type.isSymbolAll,
        isMapAll = _parts$type.isMapAll,
        isWeakMapAll = _parts$type.isWeakMapAll,
        isSetAll = _parts$type.isSetAll,
        isWeakSetAll = _parts$type.isWeakSetAll,
        isNotUndefinedAll = _parts$type.isNotUndefinedAll,
        isNotNullAll = _parts$type.isNotNullAll,
        isNotNaNStrictAll = _parts$type.isNotNaNStrictAll,
        isNotBooleanAll = _parts$type.isNotBooleanAll,
        isNotNumberAll = _parts$type.isNotNumberAll,
        isNotIntegerAll = _parts$type.isNotIntegerAll,
        isNotStringAll = _parts$type.isNotStringAll,
        isNotFunctionAll = _parts$type.isNotFunctionAll,
        isNotObjectAll = _parts$type.isNotObjectAll,
        isNotObjectTypeAll = _parts$type.isNotObjectTypeAll,
        isNotArrayAll = _parts$type.isNotArrayAll,
        isNotArrayTypeAll = _parts$type.isNotArrayTypeAll,
        isNotDateAll = _parts$type.isNotDateAll,
        isNotRegExpAll = _parts$type.isNotRegExpAll,
        isNotExceptionAll = _parts$type.isNotExceptionAll,
        isNotBooleanObjectAll = _parts$type.isNotBooleanObjectAll,
        isNotNumberObjectAll = _parts$type.isNotNumberObjectAll,
        isNotStringObjectAll = _parts$type.isNotStringObjectAll,
        isNotEmptyObjectAll = _parts$type.isNotEmptyObjectAll,
        isNotEmptyArrayAll = _parts$type.isNotEmptyArrayAll,
        isNotSymbolAll = _parts$type.isNotSymbolAll,
        isNotMapAll = _parts$type.isNotMapAll,
        isNotWeakMapAll = _parts$type.isNotWeakMapAll,
        isNotSetAll = _parts$type.isNotSetAll,
        isNotWeakSetAll = _parts$type.isNotWeakSetAll,
        isUndefinedArray = _parts$type.isUndefinedArray,
        isNullArray = _parts$type.isNullArray,
        isNaNStrictArray = _parts$type.isNaNStrictArray,
        isBooleanArray = _parts$type.isBooleanArray,
        isNumberArray = _parts$type.isNumberArray,
        isIntegerArray = _parts$type.isIntegerArray,
        isStringArray = _parts$type.isStringArray,
        isFunctionArray = _parts$type.isFunctionArray,
        isObjectArray = _parts$type.isObjectArray,
        isObjectTypeArray = _parts$type.isObjectTypeArray,
        isArrayArray = _parts$type.isArrayArray,
        isArrayTypeArray = _parts$type.isArrayTypeArray,
        isDateArray = _parts$type.isDateArray,
        isRegExpArray = _parts$type.isRegExpArray,
        isExceptionArray = _parts$type.isExceptionArray,
        isBooleanObjectArray = _parts$type.isBooleanObjectArray,
        isNumberObjectArray = _parts$type.isNumberObjectArray,
        isStringObjectArray = _parts$type.isStringObjectArray,
        isEmptyObjectArray = _parts$type.isEmptyObjectArray,
        isEmptyArrayArray = _parts$type.isEmptyArrayArray,
        isSymbolArray = _parts$type.isSymbolArray,
        isMapArray = _parts$type.isMapArray,
        isWeakMapArray = _parts$type.isWeakMapArray,
        isSetArray = _parts$type.isSetArray,
        isWeakSetArray = _parts$type.isWeakSetArray,
        isNotUndefinedArray = _parts$type.isNotUndefinedArray,
        isNotNullArray = _parts$type.isNotNullArray,
        isNotNaNStrictArray = _parts$type.isNotNaNStrictArray,
        isNotBooleanArray = _parts$type.isNotBooleanArray,
        isNotNumberArray = _parts$type.isNotNumberArray,
        isNotIntegerArray = _parts$type.isNotIntegerArray,
        isNotStringArray = _parts$type.isNotStringArray,
        isNotFunctionArray = _parts$type.isNotFunctionArray,
        isNotObjectArray = _parts$type.isNotObjectArray,
        isNotObjectTypeArray = _parts$type.isNotObjectTypeArray,
        isNotArrayArray = _parts$type.isNotArrayArray,
        isNotArrayTypeArray = _parts$type.isNotArrayTypeArray,
        isNotDateArray = _parts$type.isNotDateArray,
        isNotRegExpArray = _parts$type.isNotRegExpArray,
        isNotExceptionArray = _parts$type.isNotExceptionArray,
        isNotBooleanObjectArray = _parts$type.isNotBooleanObjectArray,
        isNotNumberObjectArray = _parts$type.isNotNumberObjectArray,
        isNotStringObjectArray = _parts$type.isNotStringObjectArray,
        isNotEmptyObjectArray = _parts$type.isNotEmptyObjectArray,
        isNotEmptyArrayArray = _parts$type.isNotEmptyArrayArray,
        isNotSymbolArray = _parts$type.isNotSymbolArray,
        isNotMapArray = _parts$type.isNotMapArray,
        isNotWeakMapArray = _parts$type.isNotWeakMapArray,
        isNotSetArray = _parts$type.isNotSetArray,
        isNotWeakSetArray = _parts$type.isNotWeakSetArray;
    var allMatchSome = parts.compare.allMatchSome;
    var objectToString = parts.objectToString;

    var test_checkType = function test_checkType() {
      it('test_checkType', function () {
        var checkType = function checkType(typeofName, objectStringName, value) {
          checkEqual(typeofName, _typeof(value));
          checkEqual(objectStringName, objectToString(value));
        };

        if (parts.platform.isWindowsScriptHost()) {
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

        if (parts.platform.isWindowsScriptHost()) {
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

        if (parts.platform.isInternetExplorer()) {
          checkType('object', '[object Object]', new Map());
          checkType('object', '[object Object]', new WeakMap());
          checkType('object', '[object Object]', new Set());
        } else {
          checkType('object', '[object Map]', new Map());
          checkType('object', '[object WeakMap]', new WeakMap());
          checkType('object', '[object Set]', new Set());
          checkType('object', '[object WeakSet]', new WeakSet());
          checkType('symbol', '[object Symbol]', Symbol());
        }

        checkType('object', '[object ArrayBuffer]', new ArrayBuffer(8));

        if (parts.platform.isChrome() || parts.platform.isSafari() || parts.platform.isOpera()) {
          checkType('object', '[object SharedArrayBuffer]', new SharedArrayBuffer(8)); // firefox no support

          checkType('object', '[object Atomics]', Atomics); // firefox no support
        }

        checkType('object', '[object JSON]', JSON);

        if (!parts.platform.isInternetExplorer()) {
          checkType('object', '[object DataView]', new DataView(new ArrayBuffer(16)));
          checkType('function', '[object Function]', Promise);
        } else {
          checkType('object', '[object Object]', new DataView(new ArrayBuffer(16)));
        }

        if (parts.platform.buildMode === 'source') {
          var Generator = /*#__PURE__*/regeneratorRuntime.mark(function Generator() {
            return regeneratorRuntime.wrap(function Generator$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return 1;

                  case 2:
                    _context.next = 4;
                    return 2;

                  case 4:
                    _context.next = 6;
                    return 3;

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, Generator);
          });
          var GeneratorFunction = Object.getPrototypeOf( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee);
          })).constructor;
          var AsyncFunction = Object.getPrototypeOf( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee2);
          }))).constructor;
          checkType('object', '[object Generator]', Generator());
          checkType('function', '[object GeneratorFunction]', new GeneratorFunction());
          checkType('function', '[object AsyncFunction]', new AsyncFunction());
        }

        if (parts.platform.isInternetExplorer()) {// no define Proxy
          // no define WebAssembly
        } else {
          checkType('object', '[object Object]', Reflect);
          checkType('object', '[object Object]', new Proxy({}, {}));
          checkType('object', '[object WebAssembly]', WebAssembly);
        }

        if (!parts.platform.isDeno()) {
          checkType('object', '[object Object]', Intl);
        }
      });
    };

    var test_isUndefinedAll = function test_isUndefinedAll() {
      it('test_isUndefinedAll', function () {
        var isUndefinedArray = function isUndefinedArray(array) {
          return allMatchSome(array, [undefined]);
        };

        var isNotUndefinedArray = function isNotUndefinedArray(array) {
          return allMatchSome(array, [isNotUndefinedAll]);
        };

        var u1;
        var n1 = null;
        var v1 = 1;
        checkEqual(true, isUndefinedAll(u1));
        checkEqual(false, isUndefinedAll(n1));
        checkEqual(false, isUndefinedAll(v1));
        checkEqual(true, isUndefinedArray([u1]));
        checkEqual(false, isUndefinedArray([n1]));
        checkEqual(false, isUndefinedArray([v1]));
        checkEqual(true, isUndefinedAll(u1, u1));
        checkEqual(false, isUndefinedAll(u1, n1));
        checkEqual(false, isUndefinedAll(u1, v1));
        checkEqual(true, isUndefinedArray([u1, u1]));
        checkEqual(false, isUndefinedArray([u1, n1]));
        checkEqual(false, isUndefinedArray([u1, v1]));
        checkEqual(false, isNotUndefinedAll(u1));
        checkEqual(true, isNotUndefinedAll(n1));
        checkEqual(true, isNotUndefinedAll(v1));
        checkEqual(false, isNotUndefinedArray([u1]));
        checkEqual(true, isNotUndefinedArray([n1]));
        checkEqual(true, isNotUndefinedArray([v1]));
        checkEqual(false, isNotUndefinedAll(u1, u1));
        checkEqual(false, isNotUndefinedAll(u1, n1));
        checkEqual(true, isNotUndefinedAll(n1, n1));
        checkEqual(false, isNotUndefinedAll(n1, u1));
        checkEqual(true, isNotUndefinedAll(v1, v1));
        checkEqual(true, isNotUndefinedAll(v1, n1));
        checkEqual(false, isNotUndefinedAll(v1, u1));
        checkEqual(false, isNotUndefinedArray([u1, u1]));
        checkEqual(false, isNotUndefinedArray([u1, n1]));
        checkEqual(true, isNotUndefinedArray([n1, n1]));
        checkEqual(false, isNotUndefinedArray([n1, u1]));
        checkEqual(true, isNotUndefinedArray([v1, v1]));
        checkEqual(true, isNotUndefinedArray([v1, n1]));
        checkEqual(false, isNotUndefinedArray([v1, u1])); // 配列の中身ではなく配列自体を判定する
        // 配列はundefinedではない

        checkEqual(false, isUndefinedAll([v1, v1]));
        checkEqual(false, isUndefinedAll([u1, u1]));
        checkEqual(true, isNotUndefinedAll([v1, v1]));
        checkEqual(true, isNotUndefinedAll([u1, u1]));
      });
    };

    var test_isNull = function test_isNull() {
      it('test_isNull', function () {
        var isNullArray = function isNullArray(array) {
          return allMatchSome(array, [null]);
        };

        var isNotNullArray = function isNotNullArray(array) {
          return allMatchSome(array, [isNotNullAll]);
        };

        var u1;
        var n1 = null;
        var v1 = 1;
        checkEqual(false, isNullAll(u1));
        checkEqual(true, isNullAll(n1));
        checkEqual(false, isNullAll(v1));
        checkEqual(false, isNullArray([u1]));
        checkEqual(true, isNullArray([n1]));
        checkEqual(false, isNullArray([v1]));
        checkEqual(true, isNullAll(n1, n1));
        checkEqual(false, isNullAll(n1, u1));
        checkEqual(false, isNullAll(n1, v1));
        checkEqual(true, isNullArray([n1, n1]));
        checkEqual(false, isNullArray([n1, u1]));
        checkEqual(false, isNullArray([n1, v1]));
        checkEqual(true, isNotNullAll(u1));
        checkEqual(false, isNotNullAll(n1));
        checkEqual(true, isNotNullAll(v1));
        checkEqual(true, isNotNullArray([u1]));
        checkEqual(false, isNotNullArray([n1]));
        checkEqual(true, isNotNullArray([v1]));
        checkEqual(true, isNotNullAll(u1, u1));
        checkEqual(false, isNotNullAll(u1, n1));
        checkEqual(false, isNotNullAll(n1, n1));
        checkEqual(false, isNotNullAll(n1, u1));
        checkEqual(true, isNotNullAll(v1, v1));
        checkEqual(false, isNotNullAll(v1, n1));
        checkEqual(true, isNotNullAll(v1, u1));
        checkEqual(true, isNotNullArray([u1, u1]));
        checkEqual(false, isNotNullArray([u1, n1]));
        checkEqual(false, isNotNullArray([n1, n1]));
        checkEqual(false, isNotNullArray([n1, u1]));
        checkEqual(true, isNotNullArray([v1, v1]));
        checkEqual(false, isNotNullArray([v1, n1]));
        checkEqual(true, isNotNullArray([v1, u1]));
      });
    };

    var test_isBoolean = function test_isBoolean() {
      it('test_isBoolean', function () {
        var isBooleanArray = function isBooleanArray(array) {
          return allMatchSome(array, [isBooleanAll]);
        };

        var isNotBooleanArray = function isNotBooleanArray(array) {
          return allMatchSome(array, [isNotBooleanAll]);
        };

        checkEqual(true, isBooleanAll(true));
        checkEqual(true, isBooleanAll(false));
        checkEqual(false, isBooleanAll(undefined));
        checkEqual(false, isBooleanAll(null));
        checkEqual(false, isBooleanAll(''));
        checkEqual(false, isBooleanAll('true'));
        checkEqual(false, isBooleanAll('false'));
        checkEqual(false, isBooleanAll(123));
        checkEqual(false, isBooleanAll(0));
        checkEqual(false, isBooleanAll(-1));
        checkEqual(true, isBooleanAll(true, true));
        checkEqual(true, isBooleanAll(true, true, true));
        checkEqual(true, isBooleanAll(true, false, true));
        checkEqual(false, isBooleanAll(true, 1, true));
        checkEqual(false, isBooleanAll([true, true]));
        checkEqual(true, isBooleanArray([true, true]));
        checkEqual(true, isBooleanArray([true, true, true]));
        checkEqual(true, isBooleanArray([true, false, true]));
        checkEqual(false, isBooleanArray([true, 1, true]));
        checkEqual(false, isBooleanAll(new Boolean()));
        checkEqual(false, isBooleanAll(new Boolean('1')));
        checkEqual(false, isBooleanAll(new Boolean('a')));
        checkEqual(false, isBooleanAll(new Boolean('true')));
        checkEqual(true, isBooleanObjectAll(new Boolean()), 'test isBooleanObjectAll');
        checkEqual(true, isBooleanObjectAll(new Boolean('1')));
        checkEqual(true, isBooleanObjectAll(new Boolean('a')));
        checkEqual(true, isBooleanObjectAll(new Boolean('true')));
      });
    };

    var test_isNumber = function test_isNumber() {
      it('test_isNumber', function () {
        var isNumberArray = function isNumberArray(array) {
          return allMatchSome(array, [isNumberAll]);
        };

        var isNotNumberArray = function isNotNumberArray(array) {
          return allMatchSome(array, [isNotNumberAll]);
        };

        checkEqual(true, isNumberAll(123));
        checkEqual(true, isNumberAll(0));
        checkEqual(true, isNumberAll(-1));
        checkEqual(true, isNumberAll(123.4));
        checkEqual(true, isNumberAll(123.0));
        checkEqual(false, isNumberAll(true));
        checkEqual(false, isNumberAll(false));
        checkEqual(false, isNumberAll(null));
        checkEqual(false, isNumberAll(undefined));
        checkEqual(false, isNumberAll(Infinity)); // InfinityもNumberとして許可しないことにする

        checkEqual(false, isNumberAll(NaN));
        checkEqual(false, isNumberAll(''));
        checkEqual(false, isNumberAll('ABC'));
        checkEqual(false, isNumberAll('ABC10'));
        checkEqual(false, isNumberAll('10ABC'));
        checkEqual(false, isNumberAll('0ABC'));
        checkEqual(false, isNumberAll('0'));
        checkEqual(false, isNumberAll('5'));
        checkEqual(false, isNumberAll('-5'));
        checkEqual(false, isNumberAll('100'));
        checkEqual(false, isNumberAll('-100'));
        checkEqual(false, isNumberAll([]));
        checkEqual(false, isNumberAll({}));
        checkEqual(false, isNotNumberAll(123));
        checkEqual(false, isNotNumberAll(0));
        checkEqual(true, isNotNumberAll(true));
        checkEqual(true, isNotNumberAll(null));
        checkEqual(true, isNotNumberAll(undefined));
        checkEqual(true, isNotNumberAll(Infinity));
        checkEqual(true, isNotNumberAll(NaN));
        checkEqual(true, isNotNumberAll(''));
        checkEqual(true, isNumberAll(1, 2));
        checkEqual(true, isNumberAll(3, 4, 5));
        checkEqual(true, isNumberAll(10.5, 20.5, 30.5));
        checkEqual(false, isNumberAll(1, 2, true));
        checkEqual(false, isNotNumberAll(1, 2));
        checkEqual(false, isNotNumberAll(3, 4, 5));
        checkEqual(false, isNotNumberAll(10.5, 20.5, 30.5));
        checkEqual(false, isNotNumberAll(1, 2, true));
        checkEqual(true, isNotNumberAll(false, true));
        checkEqual(true, isNotNumberAll('a', 'b'));
        checkEqual(false, isNumberAll([1, 2]));
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

        if (parts.platform.isWindowsScriptHost()) {
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
        checkEqual(false, isNumberAll(new Number()));
        checkEqual(false, isNumberAll(new Number('')));
        checkEqual(false, isNumberAll(new Number('1')));
        checkEqual(false, isNumberAll(new Number('1.1')));
        checkEqual(true, isNumberObjectAll(new Number()));
        checkEqual(true, isNumberObjectAll(new Number('')));
        checkEqual(true, isNumberObjectAll(new Number('1')));
        checkEqual(true, isNumberObjectAll(new Number('1.1')));
      });
    };

    var test_isInteger = function test_isInteger() {
      it('test_isInteger', function () {
        var isIntegerArray = function isIntegerArray(array) {
          return allMatchSome(array, [isIntegerAll]);
        };

        var isNotIntegerArray = function isNotIntegerArray(array) {
          return allMatchSome(array, [isNotIntegerAll]);
        };

        checkEqual(true, isIntegerAll(123));
        checkEqual(true, isIntegerAll(0));
        checkEqual(true, isIntegerAll(-1));
        checkEqual(false, isIntegerAll(123.4));
        checkEqual(true, isIntegerAll(123.0)); // .0の場合は整数か小数かは判断できない

        checkEqual(false, isIntegerAll(true));
        checkEqual(false, isIntegerAll(false));
        checkEqual(false, isIntegerAll(null));
        checkEqual(false, isIntegerAll(undefined));
        checkEqual(false, isIntegerAll(''));
        checkEqual(false, isIntegerAll('ABC'));
        checkEqual(false, isIntegerAll('0'));
        checkEqual(false, isIntegerAll('5'));
        checkEqual(false, isIntegerAll('-5'));
        checkEqual(false, isIntegerAll('100'));
        checkEqual(false, isIntegerAll('-100'));
        checkEqual(false, isIntegerAll([]));
        checkEqual(false, isIntegerAll({}));
        checkEqual(true, isIntegerAll(1, 2));
        checkEqual(true, isIntegerAll(3, 4, 5));
        checkEqual(true, isIntegerAll(10, 20, 30));
        checkEqual(false, isIntegerAll(1, 2, 3.5));
        checkEqual(false, isNotIntegerAll(1, 2));
        checkEqual(false, isNotIntegerAll(3, 4, 5));
        checkEqual(false, isNotIntegerAll(10, 20, 30));
        checkEqual(false, isNotIntegerAll(1, 2, 3.5));
        checkEqual(false, isNotIntegerAll(1, 2.1, 3.5));
        checkEqual(true, isNotIntegerAll(1.1, 2.2, 3.5));
        checkEqual(false, isIntegerArray([]), '?');
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
        checkEqual(false, isIntegerAll(new Number()));
        checkEqual(false, isIntegerAll(new Number('')));
        checkEqual(false, isIntegerAll(new Number('1')));
        checkEqual(false, isIntegerAll(new Number('1.1')));
        checkEqual(false, isIntegerAll(new Number(1)));
      });
    };

    var test_isString = function test_isString() {
      it('test_isString', function () {
        checkEqual(true, isStringAll(''));
        checkEqual(true, isStringAll('a'));
        checkEqual(true, isStringAll('a', 'b', 'c'));
        checkEqual(true, isStringAll('a', 'b', ''));
        checkEqual(false, isStringAll('a', 'b', 0));
        checkEqual(false, isStringAll('a', 'b', 1));
        checkEqual(false, isStringAll('a', 'b', null));
        checkEqual(false, isStringAll('a', 'b', undefined));
        checkEqual(false, isStringArray([]));
        checkEqual(true, isStringArray(['']));
        checkEqual(true, isStringArray(['a']));
        checkEqual(true, isStringArray(['a', 'b', 'c']));
        checkEqual(true, isStringArray(['a', 'b', '']));
        checkEqual(false, isStringArray(['a', 'b', 0]));
        checkEqual(false, isStringArray(['a', 'b', 1]));
        checkEqual(false, isStringArray(['a', 'b', null]));
        checkEqual(false, isStringArray(['a', 'b', undefined]));
        checkEqual(false, isNotStringArray([]));
        checkEqual(false, isNotStringArray(['']));
        checkEqual(false, isNotStringArray(['a']));
        checkEqual(false, isNotStringArray(['a', 'b', 'c']));
        checkEqual(false, isNotStringArray(['a', 'b', '']));
        checkEqual(false, isNotStringArray(['a', 'b', 0]));
        checkEqual(false, isNotStringArray(['a', 'b', 1]));
        checkEqual(false, isNotStringArray(['a', 'b', null]));
        checkEqual(false, isNotStringArray(['a', 'b', undefined]));
        checkEqual(true, isNotStringArray([0, 1, 2]));
        checkEqual(true, isNotStringArray([0, null, undefined]));
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
        checkEqual(false, isStringAll(new String()));
        checkEqual(false, isStringAll(new String(undefined)));
        checkEqual(false, isStringAll(new String(null)));
        checkEqual(false, isStringAll(new String('')));
        checkEqual(false, isStringAll(new String('1')));
        checkEqual(false, isStringAll(new String(1)));
        checkEqual(true, isStringObjectAll(new String()));
        checkEqual(true, isStringObjectAll(new String(undefined)));
        checkEqual(true, isStringObjectAll(new String(null)));
        checkEqual(true, isStringObjectAll(new String('')));
        checkEqual(true, isStringObjectAll(new String('1')));
        checkEqual(true, isStringObjectAll(new String(1)));
      });
    };

    var test_isFunction = function test_isFunction() {
      it('test_isFunction', function () {
        var isFunctionArray = function isFunctionArray(array) {
          return allMatchSome(array, [isFunctionAll]);
        };

        var isNotFunctionArray = function isNotFunctionArray(array) {
          return allMatchSome(array, [isNotFunctionAll]);
        };

        checkEqual(true, isFunctionAll(function () {}));
        checkEqual(false, isFunctionAll({}));
        checkEqual(true, isFunctionAll(function () {}, test_isFunction));
        checkEqual(false, isFunctionAll({}, test_isFunction));
        checkEqual(true, isFunctionArray([function () {}, test_isFunction]));
        checkEqual(false, isFunctionArray([{}, test_isFunction]));
      });
    };

    var test_isObject = function test_isObject() {
      it('test_isObject', function () {
        var isObjectArray = function isObjectArray(array) {
          return allMatchSome(array, [isObjectAll]);
        };

        var isNotObjectArray = function isNotObjectArray(array) {
          return allMatchSome(array, [isNotObjectAll]);
        };

        checkEqual(false, isObjectAll(null));
        checkEqual(false, isObjectAll(undefined));
        checkEqual(false, isObjectAll(undefined));
        checkEqual(false, isObjectAll('a'));
        checkEqual(false, isObjectAll(1));
        checkEqual(false, isObjectAll(true));
        checkEqual(true, isObjectAll({}));
        checkEqual(true, isObjectAll({
          a: 0
        }));
        checkEqual(true, isObjectAll({
          a: 0,
          b: 1
        }));
        checkEqual(false, isObjectAll([]));
        checkEqual(false, isObjectAll(function () {}));
        checkEqual(false, isObjectAll(function () {}));
        checkEqual(false, isObjectAll(new Error()));
        checkEqual(false, isObjectAll(new Date()));
        checkEqual(false, isObjectAll(new RegExp()));
        checkEqual(false, isObjectAll(new String()));
        checkEqual(false, isObjectAll(new Number()));
        checkEqual(false, isObjectAll(new Boolean()));
        checkEqual(true, isObjectAll(new Object()));
        checkEqual(false, isObjectAll(new Array()));
        checkEqual(false, isObjectAll(new Function()));
        checkEqual(true, isObjectAll({
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
        checkEqual(true, isObjectAll(testObject1));
      });
    };

    var test_isObjectType = function test_isObjectType() {
      it('test_isObjectType', function () {
        var isObjectTypeArray = function isObjectTypeArray(array) {
          return allMatchSome(array, [isObjectTypeAll]);
        };

        var isNotObjectTypeArray = function isNotObjectTypeArray(array) {
          return allMatchSome(array, [isNotObjectTypeAll]);
        };

        checkEqual(false, isObjectTypeAll(null));
        checkEqual(false, isObjectTypeAll(undefined));
        checkEqual(false, isObjectTypeAll('a'));
        checkEqual(false, isObjectTypeAll(1));
        checkEqual(false, isObjectTypeAll(true));
        checkEqual(true, isObjectTypeAll({}));
        checkEqual(true, isObjectTypeAll({
          a: 0
        }));
        checkEqual(true, isObjectTypeAll({
          a: 0,
          b: 1
        }));
        checkEqual(true, isObjectTypeAll([]));
        checkEqual(true, isObjectTypeAll(function () {}));
        checkEqual(true, isObjectTypeAll(function () {}));
        checkEqual(true, isObjectTypeAll(new Error()));
        checkEqual(true, isObjectTypeAll(new Date()));
        checkEqual(true, isObjectTypeAll(new RegExp()));
        checkEqual(true, isObjectTypeAll(new String()));
        checkEqual(true, isObjectTypeAll(new Number()));
        checkEqual(true, isObjectTypeAll(new Boolean()));
        checkEqual(true, isObjectTypeAll(new Object()));
        checkEqual(true, isObjectTypeAll(new Array()));
        checkEqual(true, isObjectTypeAll(new Function()));
        checkEqual(true, isObjectTypeAll({
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
        checkEqual(true, isObjectTypeAll(testObject1));
      });
    };

    var test_isArray = function test_isArray() {
      it('test_isArray', function () {
        var isArrayArray = function isArrayArray(array) {
          return allMatchSome(array, [isArrayAll]);
        };

        var isNotArrayArray = function isNotArrayArray(array) {
          return allMatchSome(array, [isNotArrayAll]);
        };

        checkEqual(true, isArrayAll([123]));
        checkEqual(true, isArrayAll([]));
        checkEqual(true, isArrayAll([1, 2, 3]));
        checkEqual(false, isArrayAll(123));
        checkEqual(false, isArrayAll('1,2,3'));
        checkEqual(true, isArrayAll([1], [2]));
        checkEqual(true, isArrayAll([3], [4], [5]));
        checkEqual(true, isArrayAll([10, 20], [30]));
        checkEqual(false, isArrayAll([1, 2], 3));
        checkEqual(true, isNotArrayAll(1, 2));
        checkEqual(false, isNotArrayAll([3], [4], 5));
        checkEqual(true, isNotArrayAll(10, 20, 30));
        checkEqual(false, isNotArrayAll(10, 20, [30]));
        checkEqual(true, isArrayArray([[1], [2]]));
        checkEqual(true, isArrayArray([[3], [4], [5]]));
        checkEqual(true, isArrayArray([[10, 20], [30]]));
        checkEqual(false, isArrayArray([[1, 2], 3]));
        checkEqual(true, isNotArrayArray([1, 2]));
        checkEqual(false, isNotArrayArray([[3], [4], 5]));
        checkEqual(true, isNotArrayArray([10, 20, 30]));
        checkEqual(false, isNotArrayArray([10, 20, [30]]));
      });
    };

    var test_isArrayType = function test_isArrayType() {
      it('test_isArrayType', function () {
        checkEqual(true, Array.isArray([]));
        checkEqual(true, Array.isArray([123]));
        checkEqual(true, Array.isArray([1, 2, 3]));
        checkEqual(true, Array.isArray(new Array()));
        checkEqual(true, Array.isArray(new Array(1, 2, 3)));
        checkEqual(true, Array.isArray(new Array()));

        if (!parts.platform.isWindowsScriptHost()) {
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

        checkEqual(true, isArrayAll([]));
        checkEqual(true, isArrayAll([123]));
        checkEqual(true, isArrayAll([1, 2, 3]));
        checkEqual(true, isArrayAll(new Array()));
        checkEqual(true, isArrayAll(new Array(1, 2, 3)));
        checkEqual(true, isArrayAll(new Array()));

        if (!parts.platform.isWindowsScriptHost()) {
          checkEqual(false, isArrayAll(new Int8Array()));
          checkEqual(false, isArrayAll(new Uint8Array()));
          checkEqual(false, isArrayAll(new Uint8ClampedArray()));
          checkEqual(false, isArrayAll(new Int16Array()));
          checkEqual(false, isArrayAll(new Uint16Array()));
          checkEqual(false, isArrayAll(new Int32Array()));
          checkEqual(false, isArrayAll(new Uint32Array()));
          checkEqual(false, isArrayAll(new Float32Array()));
          checkEqual(false, isArrayAll(new Float64Array()));
        }

        checkEqual(true, isArrayTypeAll([]));
        checkEqual(true, isArrayTypeAll([123]));
        checkEqual(true, isArrayTypeAll([1, 2, 3]));
        checkEqual(true, isArrayTypeAll(new Array()));
        checkEqual(true, isArrayTypeAll(new Array(1, 2, 3)));
        checkEqual(true, isArrayTypeAll(new Array()));

        if (!parts.platform.isWindowsScriptHost()) {
          checkEqual(true, isArrayTypeAll(new Int8Array()));
          checkEqual(true, isArrayTypeAll(new Uint8Array()));
          checkEqual(true, isArrayTypeAll(new Uint8ClampedArray()));
          checkEqual(true, isArrayTypeAll(new Int16Array()));
          checkEqual(true, isArrayTypeAll(new Uint16Array()));
          checkEqual(true, isArrayTypeAll(new Int32Array()));
          checkEqual(true, isArrayTypeAll(new Uint32Array()));
          checkEqual(true, isArrayTypeAll(new Float32Array()));
          checkEqual(true, isArrayTypeAll(new Float64Array()));
        }
      });
    };

    var test_isDate = function test_isDate() {
      it('test_isDate', function () {
        checkEqual(true, isDateAll(new Date(2017, 1, 1)));
        checkEqual(true, isDateAll(new Date('2017/01')));
        checkEqual(true, isDateAll(new Date(2017, 1)));
        checkEqual(true, isDateAll(new Date(2017, 1)));
      });
    };

    var test_isExcection = function test_isExcection() {
      it('test_isExcection', function () {
        checkEqual(true, isExceptionAll({
          name: '',
          message: ''
        }));
        checkEqual(false, isExceptionAll({
          name: ''
        }));
        checkEqual(false, isExceptionAll({
          message: ''
        }));
        checkEqual(true, isExceptionAll(new Error()));
        checkEqual(true, isExceptionAll(new TypeError()));
        checkEqual(true, isExceptionAll(new SyntaxError()));
        checkEqual(true, isExceptionAll(new ReferenceError()));

        var UserException = function UserException(message) {
          this.message = message;
          this.name = 'UserException';
        };

        checkEqual(true, isExceptionAll(new UserException('message')));
      });
    };

    var test_isEmptyObject = function test_isEmptyObject() {
      it('test_isEmptyObject', function () {
        checkEqual(true, isEmptyObjectAll({}));
        checkEqual(false, isEmptyObjectAll({
          a: 1
        }));
        checkEqual(false, isEmptyObjectAll(null));
        checkEqual(false, isEmptyObjectAll(undefined));
        checkEqual(false, isEmptyObjectAll(123));
        checkEqual(false, isEmptyObjectAll('abc'));
        checkEqual(false, isEmptyObjectAll([]));
        checkEqual(false, isEmptyObjectAll([123]));
      });
    };

    var test_isEmptyArray = function test_isEmptyArray() {
      it('test_isEmptyArray', function () {
        checkEqual(false, isEmptyArrayAll({}));
        checkEqual(false, isEmptyArrayAll({
          a: 1
        }));
        checkEqual(false, isEmptyArrayAll(null));
        checkEqual(false, isEmptyArrayAll(undefined));
        checkEqual(false, isEmptyArrayAll(123));
        checkEqual(false, isEmptyArrayAll('abc'));
        checkEqual(true, isEmptyArrayAll([]));
        checkEqual(false, isEmptyArrayAll([123]));
      });
    };

    var test_isSymbol = function test_isSymbol() {
      it('test_isSymbol', function () {
        if (parts.platform.isWindowsScriptHost()) {
          return;
        }

        if (parts.platform.isInternetExplorer()) {
          return;
        }

        checkEqual(false, isSymbolAll(1));
        checkEqual(true, isSymbolAll(Symbol()));
      });
    };

    var test_isMap = function test_isMap() {
      it('test_isMap', function () {
        if (parts.platform.isWindowsScriptHost()) {
          return;
        }

        if (!parts.platform.isInternetExplorer()) {
          checkEqual(false, isMapAll({}));
          checkEqual(false, isWeakMapAll({}));
          checkEqual(true, isMapAll(new Map()));
          checkEqual(false, isWeakMapAll(new Map()));
          checkEqual(false, isMapAll(new WeakMap()));
          checkEqual(true, isWeakMapAll(new WeakMap()));
          checkEqual(true, isObjectAll({}));
          checkEqual(false, isObjectAll(new Map()));
          checkEqual(false, isObjectAll(new WeakMap()));
        } else {
          checkEqual(false, isMapAll({}));
          checkEqual(false, isWeakMapAll({}));
          checkEqual(false, isMapAll(new Map())); // IE11 bug

          checkEqual(false, isWeakMapAll(new Map()));
          checkEqual(false, isMapAll(new WeakMap()));
          checkEqual(false, isWeakMapAll(new WeakMap())); // IE11 bug

          checkEqual(true, isObjectAll({}));
          checkEqual(true, isObjectAll(new Map())); // IE11 bug

          checkEqual(true, isObjectAll(new WeakMap())); // IE11 bug
        }
      });
    };

    var test_isSet = function test_isSet() {
      it('test_isSet', function () {
        if (parts.platform.isWindowsScriptHost()) {
          return;
        }

        if (!parts.platform.isInternetExplorer()) {
          checkEqual(false, isSetAll({}));
          checkEqual(true, isSetAll(new Set()));
          checkEqual(false, isSetAll(new WeakSet()));
          checkEqual(false, isWeakSetAll({}));
          checkEqual(false, isWeakSetAll(new Set()));
          checkEqual(true, isWeakSetAll(new WeakSet()));
          checkEqual(true, isObjectAll({}));
          checkEqual(false, isObjectAll(new Set()));
          checkEqual(false, isObjectAll(new WeakSet()));
        } else {
          checkEqual(false, isSetAll({}));
          checkEqual(false, isSetAll(new Set())); // IE11 bug

          checkEqual(false, isWeakSetAll({}));
          checkEqual(false, isWeakSetAll(new Set()));
          checkEqual(true, isObjectAll({}));
          checkEqual(true, isObjectAll(new Set())); // IE11 bug
        }
      });
    };

    test_checkType();
    test_isUndefinedAll();
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
    test_isEmptyObject();
    test_isEmptyArray();
    test_isSymbol();
    test_isMap();
    test_isSet();
  });
};

exports.test_execute_type = test_execute_type;
var _default = {
  test_execute_type: test_execute_type
};
exports["default"] = _default;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.test_execute_syntax = void 0;

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/* eslint-disable max-len */

/* eslint-disable no-var */
var test_execute_syntax = function test_execute_syntax(parts) {
  var _parts$test = parts.test,
      checkEqual = _parts$test.checkEqual,
      describe = _parts$test.describe,
      it = _parts$test.it,
      test = _parts$test.test,
      expect = _parts$test.expect;
  describe('test_execute_syntax', function () {
    var _parts$test2 = parts.test,
        checkEqual = _parts$test2.checkEqual,
        isThrown = _parts$test2.isThrown,
        isThrownValue = _parts$test2.isThrownValue,
        isThrownException = _parts$test2.isThrownException,
        isNotThrown = _parts$test2.isNotThrown;
    var _parts$type = parts.type,
        isUndefined = _parts$type.isUndefined,
        isNull = _parts$type.isNull,
        isBoolean = _parts$type.isBoolean,
        isNumber = _parts$type.isNumber,
        isInteger = _parts$type.isInteger,
        isString = _parts$type.isString,
        isFunction = _parts$type.isFunction,
        isObject = _parts$type.isObject,
        isArray = _parts$type.isArray,
        isDate = _parts$type.isDate,
        isRegExp = _parts$type.isRegExp,
        isException = _parts$type.isException,
        isUndefinedAll = _parts$type.isUndefinedAll,
        isNullAll = _parts$type.isNullAll,
        isBooleanAll = _parts$type.isBooleanAll,
        isNumberAll = _parts$type.isNumberAll,
        isIntegerAll = _parts$type.isIntegerAll,
        isStringAll = _parts$type.isStringAll,
        isFunctionAll = _parts$type.isFunctionAll,
        isObjectAll = _parts$type.isObjectAll,
        isArrayAll = _parts$type.isArrayAll,
        isDateAll = _parts$type.isDateAll,
        isRegExpAll = _parts$type.isRegExpAll,
        isExceptionAll = _parts$type.isExceptionAll;
    var _parts$syntax = parts.syntax,
        guard = _parts$syntax.guard,
        sc = _parts$syntax.sc,
        if_ = _parts$syntax.if_,
        switch_ = _parts$syntax.switch_,
        canUseMap = _parts$syntax.canUseMap,
        canUseSet = _parts$syntax.canUseSet;
    var _parts$compare = parts.compare,
        equal = _parts$compare.equal,
        or = _parts$compare.or;

    var test_guard = function test_guard() {
      it('test_guard', function () {
        var guardFunc = function guardFunc() {
          return [isIntegerAll(value1), [isIntegerAll(value2), 'testmessage']];
        };

        {
          // no guard
          {
            var result1 = false;
            var value1 = 1;
            var value2 = 2;

            if (guard(guardFunc)) {
              result1 = true;
            }

            checkEqual(false, result1, 'no guard');
            checkEqual('', guard.message());
          } // guard

          {
            var result1 = false;
            var value1 = '1';
            var value2 = 2;

            if (guard(guardFunc)) {
              result1 = true;
            }

            checkEqual(true, result1, 'guard 1');
            checkEqual('', guard.message());
            var result1 = false;
            var value1 = 1;
            var value2 = '2';

            if (guard(guardFunc)) {
              result1 = true;
            }

            checkEqual(true, result1, 'guard 2');
            checkEqual('testmessage', guard.message());
          } // guard no run

          guard.off();
          {
            var result1 = false;
            var value1 = '1';
            var value2 = 2;

            if (guard(guardFunc)) {
              result1 = true;
            }

            checkEqual(false, result1, 'guard off 1');
            checkEqual('', guard.message());
            var result1 = false;
            var value1 = 1;
            var value2 = '2';

            if (guard(guardFunc)) {
              result1 = true;
            }

            checkEqual(false, result1, 'guard off 2');
            checkEqual('', guard.message());
          }
          guard.on();
        } // guard array length

        var guardFunc = function guardFunc() {
          return [isIntegerAll(value1), isArrayAll(value2), 1 <= value2.length];
        };

        {
          var result1 = false;
          var value1 = 1;
          var value2 = [1];

          if (guard(guardFunc)) {
            result1 = true;
          }

          checkEqual(false, result1, 'guard array length 1');
          var result1 = false;
          var value1 = 1;
          var value2 = [];

          if (guard(guardFunc)) {
            result1 = true;
          }

          checkEqual(true, result1, 'guard array length 2');
          var result1 = false;
          var value1 = [1];
          var value2 = [1];

          if (guard(guardFunc)) {
            result1 = true;
          }

          checkEqual(true, result1, 'guard array length 3');
        } // guard array value etc

        var guardFunc = function guardFunc() {
          return [isArrayAll(value1), [1 <= value1.length], [value1[0] === 1, 'value1[0]error'], function () {
            return isArrayAll(value2);
          }, [function () {
            return 2 <= value2.length;
          }], [function () {
            return value2[0] === 1;
          }, 'value2[0]error']];
        };

        {
          var result1 = false;
          var value1 = [1];
          var value2 = [1, 2];

          if (guard(guardFunc)) {
            result1 = true;
          }

          checkEqual(false, result1, 'guard array value etc 1');
          checkEqual('', guard.message());
          var result1 = false;
          var value1 = 1;
          var value2 = [1, 2];

          if (guard(guardFunc)) {
            result1 = true;
          }

          checkEqual(true, result1, 'guard array value etc 2');
          checkEqual('', guard.message());
          var result1 = false;
          var value1 = [];
          var value2 = [1, 2];

          if (guard(guardFunc)) {
            result1 = true;
          }

          checkEqual(true, result1, 'guard array value etc 3');
          checkEqual('', guard.message());
          var result1 = false;
          var value1 = [2];
          var value2 = [1, 2];

          if (guard(guardFunc)) {
            result1 = true;
          }

          checkEqual(true, result1, 'guard array value etc 4');
          checkEqual('value1[0]error', guard.message());
          var result1 = false;
          var value1 = [1];
          var value2 = '[1,2]';

          if (guard(guardFunc)) {
            result1 = true;
          }

          checkEqual(true, result1, 'guard array value etc 5');
          checkEqual('', guard.message());
          var result1 = false;
          var value1 = [1];
          var value2 = [1];

          if (guard(guardFunc)) {
            result1 = true;
          }

          checkEqual(true, result1, 'guard array value etc 6');
          checkEqual('', guard.message());
          var result1 = false;
          var value1 = [1];
          var value2 = [2, 2];

          if (guard(guardFunc)) {
            result1 = true;
          }

          checkEqual(true, result1, 'guard array value etc 7');
          checkEqual('value2[0]error', guard.message());
        } // gurad exception args1

        {
          checkEqual(true, isNotThrown(function () {
            return guard(function () {
              return [];
            });
          }));
          checkEqual(true, isThrownException(function () {
            return guard(123);
          }, new TypeError().name));
          checkEqual(true, isThrown(function () {
            return guard(123);
          }));
          checkEqual(true, isThrown(function () {
            return guard(123);
          }, function (e) {
            return e.message === 'guard args(guardFunc) is not function';
          }), 'gurad exception args1 4');
        } // (new SyntaxError).name
        // environment
        //  normal: 'SyntaxError'
        //  wsh:    'Error'
        // gurad exception args1 result

        {
          checkEqual(true, isThrownException(function () {
            return guard(function () {
              return 123;
            });
          }, new TypeError().name));
          checkEqual(true, isThrown(function () {
            return guard(function () {
              return 123;
            });
          }));
          checkEqual(true, isThrown(function () {
            return guard(function () {
              return 123;
            });
          }, function (e) {
            return e.message === 'guard args(guardFunc result) is not array';
          }));
        } // gurad exception args1 function result array

        var value1 = 1;
        var value2 = 2;

        var guardFunc = function guardFunc() {
          return [isIntegerAll(value1), [isIntegerAll(value2), 'testmessage']];
        };

        checkEqual(true, isNotThrown(function () {
          return guard(guardFunc);
        }), 'gurad exception args1 function result array 1');

        var guardFunc = function guardFunc() {
          return [isIntegerAll(value1), [isIntegerAll(value2)]];
        };

        checkEqual(true, isNotThrown(function () {
          return guard(guardFunc);
        }), 'gurad exception args1 function result array 2');

        var guardFunc = function guardFunc() {
          return [isIntegerAll(value1), []];
        };

        checkEqual(false, isNotThrown(function () {
          return guard(guardFunc);
        }), 'gurad exception args1 function result array 3');
        checkEqual(true, isThrown(function () {
          return guard(guardFunc);
        }, function (e) {
          return e.message === 'guard args(guardFunc resultArray element) is not array.length >= 1';
        }), 'gurad exception args1 function result array 3-2');

        var guardFunc = function guardFunc() {
          return [[isIntegerAll(value2), 'testmessage'], isIntegerAll(value1)];
        };

        checkEqual(true, isNotThrown(function () {
          return guard(guardFunc);
        }), 'gurad exception args1 function result array 4');

        var guardFunc = function guardFunc() {
          return [[isIntegerAll(value2)], isIntegerAll(value1)];
        };

        checkEqual(true, isNotThrown(function () {
          return guard(guardFunc);
        }), 'gurad exception args1 function result array 5');

        var guardFunc = function guardFunc() {
          return [[], isIntegerAll(value1)];
        };

        checkEqual(false, isNotThrown(function () {
          return guard(guardFunc);
        }), 'gurad exception args1 function result array 6');
        checkEqual(true, isThrown(function () {
          return guard(guardFunc);
        }, function (e) {
          return e.message === 'guard args(guardFunc resultArray element) is not array.length >= 1';
        }), 'gurad exception args1 function result array 6-2'); // gurad exception function result array function result

        var guardFunc = function guardFunc() {
          return [function () {
            return true;
          }, [function () {
            return true;
          }]];
        };

        checkEqual(true, isNotThrown(function () {
          return guard(guardFunc);
        }), 'gurad exception function result array function result 1');

        var guardFunc = function guardFunc() {
          return [function () {
            return 123;
          }, [function () {
            return true;
          }]];
        };

        checkEqual(true, isThrown(function () {
          return guard(guardFunc);
        }, function (e) {
          return e.message === 'guard args(guardFunc resultArray element value) is not boolean';
        }), 'gurad exception function result array function result 2');

        var guardFunc = function guardFunc() {
          return [function () {
            return true;
          }, [function () {
            return 123;
          }]];
        };

        checkEqual(true, isThrown(function () {
          return guard(guardFunc);
        }, function (e) {
          return e.message === 'guard args(guardFunc resultArray element value) is not boolean';
        }), 'gurad exception function result array function result 3'); // gurad exception args2

        var guardFunc = function guardFunc() {
          return [function () {
            return false;
          }, [function () {
            return true;
          }]];
        };

        checkEqual(true, isNotThrown(function () {
          return guard(guardFunc, function () {});
        }), 'gurad exception args2(runFunc) 1');
        checkEqual(false, isNotThrown(function () {
          return guard(guardFunc, 'test');
        }), 'gurad exception args2(runFunc) 2');
      });
    };

    var test_sc = function test_sc() {
      it('test_sc', function () {
        checkEqual(true, sc(1, equal, 1));
        checkEqual(false, sc(1, equal, 2));
        checkEqual(true, sc('1', equal, '1'));
        checkEqual(false, sc(1, equal, '1'));
        checkEqual(false, sc('1', equal, 1));
        checkEqual(true, sc(1, or, [1, 2]));
        checkEqual(false, sc(0, or, [1, 2]));
      });
    };

    var test_if_ = function test_if_() {
      it('test_if_', function () {
        // { then: value, else: value }
        checkEqual('THEN', if_(true)({
          then: 'THEN',
          "else": 'ELSE'
        }));
        checkEqual('ELSE', if_(false)({
          then: 'THEN',
          "else": 'ELSE'
        }));
        checkEqual('THEN', if_(true)({
          then: 'THEN'
        }));
        checkEqual(undefined, if_(false)({
          then: 'ELSE'
        }));
        checkEqual(undefined, if_(true)({
          "else": 'ELSE'
        }));
        checkEqual('ELSE', if_(false)({
          "else": 'ELSE'
        })); // { then: function, else: function }

        checkEqual('THEN', if_(true)({
          then: function then() {
            return 'THEN';
          },
          "else": function _else() {
            return 'ELSE';
          }
        }));
        checkEqual('ELSE', if_(false)({
          then: function then() {
            return 'THEN';
          },
          "else": function _else() {
            return 'ELSE';
          }
        }));
        checkEqual('THEN', if_(true)({
          then: function then() {
            return 'THEN';
          }
        }));
        checkEqual(undefined, if_(false)({
          then: function then() {
            return 'THEN';
          }
        }));
        checkEqual(undefined, if_(true)({
          "else": function _else() {
            return 'ELSE';
          }
        }));
        checkEqual('ELSE', if_(false)({
          "else": function _else() {
            return 'ELSE';
          }
        })); // (value, value)

        checkEqual('THEN', if_(true)('THEN', 'ELSE'));
        checkEqual('ELSE', if_(false)('THEN', 'ELSE'));
        checkEqual('THEN', if_(true)('THEN'));
        checkEqual(undefined, if_(false)('THEN'));
        checkEqual(undefined, if_(true)(undefined, 'ELSE'));
        checkEqual('ELSE', if_(false)(undefined, 'ELSE')); // (function, function)

        checkEqual('THEN', if_(true)(function () {
          return 'THEN';
        }, function () {
          return 'ELSE';
        }));
        checkEqual('ELSE', if_(false)(function () {
          return 'THEN';
        }, function () {
          return 'ELSE';
        }));
        checkEqual('THEN', if_(true)(function () {
          return 'THEN';
        }));
        checkEqual(undefined, if_(false)(function () {
          return 'THEN';
        }));
        checkEqual(undefined, if_(true)(undefined, function () {
          return 'ELSE';
        }));
        checkEqual('ELSE', if_(false)(undefined, function () {
          return 'ELSE';
        })); // .then(value).else(value)

        checkEqual('THEN', if_(true).then('THEN')["else"]('ELSE'));
        checkEqual('ELSE', if_(false).then('THEN')["else"]('ELSE'));
        checkEqual('THEN', if_(true).then('THEN')["else"]());
        checkEqual(undefined, if_(false).then('THEN')["else"]());
        checkEqual(undefined, if_(true).then()["else"]('ELSE'));
        checkEqual('ELSE', if_(false).then()["else"]('ELSE')); // .then(function).else(function)

        checkEqual('THEN', if_(true).then(function () {
          return 'THEN';
        })["else"](function () {
          return 'ELSE';
        }));
        checkEqual('ELSE', if_(false).then(function () {
          return 'THEN';
        })["else"](function () {
          return 'ELSE';
        }));
        checkEqual('THEN', if_(true).then(function () {
          return 'THEN';
        })["else"]());
        checkEqual(undefined, if_(false).then(function () {
          return 'THEN';
        })["else"]());
        checkEqual(undefined, if_(true).then()["else"](function () {
          return 'ELSE';
        }));
        checkEqual('ELSE', if_(false).then()["else"](function () {
          return 'ELSE';
        })); // .else(value).then(value)

        checkEqual('THEN', if_(true)["else"]('ELSE').then('THEN'));
        checkEqual('ELSE', if_(false)["else"]('ELSE').then('THEN'));
        checkEqual('THEN', if_(true)["else"]().then('THEN'));
        checkEqual(undefined, if_(false)["else"]().then('THEN'));
        checkEqual(undefined, if_(true)["else"]('ELSE').then());
        checkEqual('ELSE', if_(false)["else"]('ELSE').then()); // .else(function).then(function)

        checkEqual('THEN', if_(true)["else"](function () {
          return 'ELSE';
        }).then(function () {
          return 'THEN';
        }));
        checkEqual('ELSE', if_(false)["else"](function () {
          return 'ELSE';
        }).then(function () {
          return 'THEN';
        }));
        checkEqual('THEN', if_(true)["else"]().then(function () {
          return 'THEN';
        }));
        checkEqual(undefined, if_(false)["else"]().then(function () {
          return 'THEN';
        }));
        checkEqual(undefined, if_(true)["else"](function () {
          return 'ELSE';
        }).then());
        checkEqual('ELSE', if_(false)["else"](function () {
          return 'ELSE';
        }).then());
      });
    };

    var test_switch_ = function test_switch_() {
      it('test_switch_', function () {
        var switchResultValue1 = [[1, 'number 1'], ['1', 'string 1']];
        checkEqual('number 1', switch_(1)(switchResultValue1));
        checkEqual('string 1', switch_('1')(switchResultValue1));
        checkEqual(undefined, switch_(2)(switchResultValue1));
        var switchResultValue2 = [[1, 'number 1'], ['1', 'string 1'], ['default']];
        checkEqual('number 1', switch_(1)(switchResultValue2));
        checkEqual('string 1', switch_('1')(switchResultValue2));
        checkEqual('default', switch_(2)(switchResultValue2));
        var switchResultValue3 = [[1, 'number 1'], ['1', 'string 1'], []];
        checkEqual('number 1', switch_(1)(switchResultValue3));
        checkEqual('string 1', switch_('1')(switchResultValue3));
        checkEqual(undefined, switch_(2)(switchResultValue3)); // Error

        var switchResultValue4 = [[1, '1'], 'default'];
        checkEqual(true, isThrownException(function () {
          switch_(1)(switchResultValue4);
        }, new TypeError().name));
        checkEqual(true, isThrownException(function () {
          switch_(2)(switchResultValue4);
        }, new TypeError().name));
        var switchResultFunc1 = [[1, function () {
          return 'number 1';
        }], ['1', function () {
          return 'string 1';
        }]];
        checkEqual('number 1', switch_(1)(switchResultFunc1));
        checkEqual('string 1', switch_('1')(switchResultFunc1));
        checkEqual(undefined, switch_(2)(switchResultFunc1));
        var switchResultFunc2 = [[1, function () {
          return 'number 1';
        }], ['1', function () {
          return 'string 1';
        }], [function () {
          return 'default';
        }]];
        checkEqual('number 1', switch_(1)(switchResultFunc2));
        checkEqual('string 1', switch_('1')(switchResultFunc2));
        checkEqual('default', switch_(2)(switchResultFunc2));
        var switchResultFunc3 = [[1, 'number 1'], ['1', 'string 1'], [function () {}]];
        checkEqual('number 1', switch_(1)(switchResultFunc3));
        checkEqual('string 1', switch_('1')(switchResultFunc3));
        checkEqual(undefined, switch_(2)(switchResultFunc3));
      });
    };

    var test_loop = function test_loop() {
      it('test_loop', function () {
        var outputConsoleText = '';

        var console_log = function console_log() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          for (var _i = 0, _args = args; _i < _args.length; _i++) {
            var arg = _args[_i];

            if (isArray(arg)) {
              var argsText = '';

              var _iterator = _createForOfIteratorHelper(arg),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var element = _step.value;

                  if (isArray(element)) {
                    argsText += "[".concat(element, "],");
                  } else {
                    argsText += "".concat(element, ",");
                  }
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }

              argsText = parts.string.deleteLast(argsText, 1);
              outputConsoleText += "[".concat(argsText, "] ");
            } else {
              outputConsoleText += "".concat(arg, " ");
            }
          }

          outputConsoleText += '\n';
        };

        outputConsoleText = '';
        {
          // 3 times loop
          parts.loop(3)(function (e, i, array, first, last) {
            console_log(e, i, array, first, last);
          });
        }
        expect(outputConsoleText).toEqual('0 0 [0,1,2] true false \n' + '1 1 [0,1,2] false false \n' + '2 2 [0,1,2] false true \n' + '');
        outputConsoleText = '';
        {
          // 1 to 3 loop
          parts.loop(1, 3)(function (e, i, array, first, last) {
            console_log(e, i, array, first, last);
          });
        }
        expect(outputConsoleText).toEqual('1 0 [1,2,3] true false \n' + '2 1 [1,2,3] false false \n' + '3 2 [1,2,3] false true \n' + '');
        outputConsoleText = '';
        {
          // 1 times loop : first last flag
          parts.loop(1)(function (e, i, array, first, last) {
            console_log(e, i, array, first, last);
          });
        }
        expect(outputConsoleText).toEqual('0 0 [0] true true \n' + '');
        outputConsoleText = '';
        {
          // 1 to 10 step 2 loop and continue and break
          parts.loop(1, 10, 2)(function (e, i, array, first, last) {
            if (i === 1) {
              return;
            }

            console_log(e, i, array, first, last);

            if (i === 3) {
              return {
                "break": true
              };
            }
          });
        }
        expect(outputConsoleText).toEqual('1 0 [1,3,5,7,9] true false \n' + '5 2 [1,3,5,7,9] false false \n' + '7 3 [1,3,5,7,9] false false \n' + '');
        outputConsoleText = '';
        {
          // double loop
          parts.loop(3)(function (e, j, array, first, last) {
            parts.loop(3)(function (e, i, array, first, last) {
              console_log(e, i, array, first, last, j);
            });
          });
        }
        expect(outputConsoleText).toEqual('0 0 [0,1,2] true false 0 \n' + '1 1 [0,1,2] false false 0 \n' + '2 2 [0,1,2] false true 0 \n' + '0 0 [0,1,2] true false 1 \n' + '1 1 [0,1,2] false false 1 \n' + '2 2 [0,1,2] false true 1 \n' + '0 0 [0,1,2] true false 2 \n' + '1 1 [0,1,2] false false 2 \n' + '2 2 [0,1,2] false true 2 \n' + '');
        outputConsoleText = '';
        {
          // Break from a double loop
          parts.loop(3)(function (e, j, array, first, last) {
            var loopResult = parts.loop(3)(function (e, i, array, first, last) {
              console_log(e, i, array, first, last, j);

              if (i === 0) {
                console_log('continue');
                return;
              }

              if (i === 1) {
                console_log('break');
                return {
                  "break": true,
                  parentLoopCounter: j
                };
              }
            });

            if (loopResult["break"] === true) {
              console_log('return break');

              if (loopResult.parentLoopCounter === 1) {
                console_log('break the double loop');
                return {
                  "break": true
                };
              } else {
                console_log('continue the double loop');
              }
            }
          });
        }
        expect(outputConsoleText).toEqual('0 0 [0,1,2] true false 0 \n' + 'continue \n' + '1 1 [0,1,2] false false 0 \n' + 'break \n' + 'return break \n' + 'continue the double loop \n' + '0 0 [0,1,2] true false 1 \n' + 'continue \n' + '1 1 [0,1,2] false false 1 \n' + 'break \n' + 'return break \n' + 'break the double loop \n' + '');
        outputConsoleText = '';
        {
          // loop array
          parts.loop(['A', 'B', 'C'])(function (e, i, array, first, last) {
            console_log(e, i, array, first, last);
          });
        }
        expect(outputConsoleText).toEqual('A 0 [A,B,C] true false \n' + 'B 1 [A,B,C] false false \n' + 'C 2 [A,B,C] false true \n' + '');
        outputConsoleText = '';
        {
          // loop object
          parts.loop({
            a: 'A',
            b: 'B',
            c: 'C'
          })(function (e, i, array, first, last) {
            console_log(e, i, array, first, last);
          });
        }
        expect(outputConsoleText).toEqual('[a,A] 0 [[a,A],[b,B],[c,C]] true false \n' + '[b,B] 1 [[a,A],[b,B],[c,C]] false false \n' + '[c,C] 2 [[a,A],[b,B],[c,C]] false true \n' + '');
      });
    };

    var test_canUseMap = function test_canUseMap() {
      it('test_canUseMap', function () {
        if (parts.platform.isWindowsScriptHost()) {
          checkEqual(false, canUseMap());
        } else {
          checkEqual(true, canUseMap());
        }
      });
    };

    var test_canUseSet = function test_canUseSet() {
      it('test_canUseSet', function () {
        if (parts.platform.isWindowsScriptHost()) {
          checkEqual(false, canUseSet());
        } else {
          checkEqual(true, canUseSet());
        }
      });
    };

    test_guard();
    test_sc();
    test_if_();
    test_switch_();
    test_loop();
    test_canUseMap();
    test_canUseSet();
  });
};

exports.test_execute_syntax = test_execute_syntax;
var _default = {
  test_execute_syntax: test_execute_syntax
};
exports["default"] = _default;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.test_execute_test = void 0;

/* eslint-disable no-throw-literal */
var test_execute_test = function test_execute_test(parts) {
  var _parts$test = parts.test,
      checkEqual = _parts$test.checkEqual,
      describe = _parts$test.describe,
      it = _parts$test.it,
      test = _parts$test.test,
      expect = _parts$test.expect;
  describe('test_execute_test', function () {
    var _parts$test2 = parts.test,
        checkEqual = _parts$test2.checkEqual,
        isThrown = _parts$test2.isThrown;

    var test_isThrown = function test_isThrown() {
      it('test_isThrown', function () {
        checkEqual(true, isThrown(function () {
          throw 1;
        }, function (throwValue) {
          return throwValue === 1;
        }));
        checkEqual(false, isThrown(function () {
          throw 1;
        }, function (throwValue) {
          return throwValue !== 1;
        }));
        checkEqual(false, isThrown(function () {
          throw 2;
        }, function (throwValue) {
          return throwValue === 1;
        }));
        checkEqual(false, isThrown(function () {
          throw 1;
        }, function (throwValue) {
          return throwValue === '1';
        }));
        checkEqual(true, isThrown(function () {
          throw '1';
        }, function (throwValue) {
          return throwValue === '1';
        }));
        checkEqual(true, isThrown(function () {
          throw '';
        }, function (throwValue) {
          return throwValue === '';
        }));
        checkEqual(true, isThrown(function () {
          throw {
            test: 'TEST'
          };
        }, function (throwValue) {
          return throwValue.test === 'TEST';
        }));
        checkEqual(false, isThrown(function () {
          throw {
            test: 'TEST'
          };
        }, function (throwValue) {
          return throwValue.test === 'test';
        }));
        checkEqual(false, isThrown(function () {}, function () {}));
        checkEqual(true, isThrown(function () {
          throw 1;
        }));
        checkEqual(true, isThrown(function () {
          throw '1';
        }));
        checkEqual(false, isThrown(function () {}));
      });
    };

    var test_expect = function test_expect() {
      it('test_expect', function () {
        expect(123).toBe(123);
        expect([1, 2, 3]).not.toBe([1, 2, 3]);
        expect([1, 2, 3]).toEqual([1, 2, 3]);
        expect([1, 2, 3]).not.toEqual([1, 2, 2]);
      });
    };

    test_isThrown();
    test_expect();
  });
};

exports.test_execute_test = test_execute_test;
var _default = {
  test_execute_test: test_execute_test
};
exports["default"] = _default;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.test_execute_compare = void 0;

/* eslint-disable max-len */

/* eslint-disable no-var */
var test_execute_compare = function test_execute_compare(parts) {
  var _parts$test = parts.test,
      describe = _parts$test.describe,
      it = _parts$test.it,
      testCounter = _parts$test.testCounter;
  describe('test_execute_compare', function () {
    var _parts$type = parts.type,
        isNull = _parts$type.isNull,
        isUndefined = _parts$type.isUndefined,
        isNaNStrict = _parts$type.isNaNStrict,
        isBoolean = _parts$type.isBoolean,
        isNumber = _parts$type.isNumber,
        isInteger = _parts$type.isInteger,
        isString = _parts$type.isString,
        isFunction = _parts$type.isFunction,
        isObject = _parts$type.isObject,
        isObjectType = _parts$type.isObjectType,
        isArray = _parts$type.isArray,
        isDate = _parts$type.isDate,
        isRegExp = _parts$type.isRegExp,
        isException = _parts$type.isException,
        isEmptyObject = _parts$type.isEmptyObject,
        isEmptyArray = _parts$type.isEmptyArray,
        isNotNull = _parts$type.isNotNull,
        isNotUndefined = _parts$type.isNotUndefined,
        isNotNaNStrict = _parts$type.isNotNaNStrict,
        isNotBoolean = _parts$type.isNotBoolean,
        isNotNumber = _parts$type.isNotNumber,
        isNotInteger = _parts$type.isNotInteger,
        isNotString = _parts$type.isNotString,
        isNotFunction = _parts$type.isNotFunction,
        isNotObject = _parts$type.isNotObject,
        isNotObjectType = _parts$type.isNotObjectType,
        isNotArray = _parts$type.isNotArray,
        isNotDate = _parts$type.isNotDate,
        isNotRegExp = _parts$type.isNotRegExp,
        isNotException = _parts$type.isNotException,
        isNotEmptyObject = _parts$type.isNotEmptyObject,
        isNotEmptyArray = _parts$type.isNotEmptyArray;
    var _parts$test2 = parts.test,
        checkEqual = _parts$test2.checkEqual,
        expect = _parts$test2.expect,
        isThrown = _parts$test2.isThrown,
        isThrownException = _parts$test2.isThrownException;
    var _parts$compare = parts.compare,
        equal = _parts$compare.equal,
        equalDeep = _parts$compare.equalDeep,
        equalFunction = _parts$compare.equalFunction,
        or = _parts$compare.or,
        match = _parts$compare.match,
        matchValue = _parts$compare.matchValue,
        initialValue = _parts$compare.initialValue,
        allMatch = _parts$compare.allMatch,
        someMatch = _parts$compare.someMatch,
        indexOfMatch = _parts$compare.indexOfMatch,
        matchSome = _parts$compare.matchSome,
        matchSomeValue = _parts$compare.matchSomeValue,
        allMatchSome = _parts$compare.allMatchSome,
        someMatchSome = _parts$compare.someMatchSome,
        indexOfMatchSome = _parts$compare.indexOfMatchSome,
        matchAll = _parts$compare.matchAll,
        matchAllValue = _parts$compare.matchAllValue,
        allMatchAll = _parts$compare.allMatchAll,
        someMatchAll = _parts$compare.someMatchAll,
        indexOfMatchAll = _parts$compare.indexOfMatchAll,
        includes = _parts$compare.includes,
        includesSome = _parts$compare.includesSome,
        includesAll = _parts$compare.includesAll;
    var isFirst = parts.string.isFirst;

    var test_equal = function test_equal() {
      it('test_equal', function () {
        // Primitive value
        checkEqual(true, equal(1, 1));
        checkEqual(true, equal('1', '1'));
        checkEqual(false, equal('1', 1));
        checkEqual(true, equal(null, null));
        checkEqual(true, equal(undefined, undefined));
        checkEqual(true, equal(undefined));
        checkEqual(false, equal(null, undefined));
        checkEqual(false, equal(null)); // args.length

        checkEqual(true, equal(1, 1, 2));
        checkEqual(false, equal(1, 2, 3)); // named argument

        checkEqual(true, equal({
          value1: 1,
          value2: 1
        }));
        checkEqual(true, equal({
          value1: '1',
          value2: '1'
        }));
        checkEqual(false, equal({
          value1: '1',
          value2: 1
        }));
      });
    };

    var test_equal_object = function test_equal_object() {
      it('test_equal_object', function () {
        // object
        checkEqual(true, equal({}, {}));
        checkEqual(false, equal({
          a: {}
        }, {
          a: {}
        }));
        checkEqual(true, equal({
          a: '1',
          b: '2'
        }, {
          a: '1',
          b: '2'
        }), 'test_equal object 1');
        checkEqual(false, equal({
          a: '2',
          b: '2'
        }, {
          a: '1',
          b: '2'
        }), 'test_equal object 2');
        checkEqual(false, equal({
          a: '1',
          b: '2',
          c: {}
        }, {
          a: '1',
          b: '2',
          c: {}
        }), 'test_equal object 3');
        checkEqual(false, equal({
          a: '1',
          b: '2',
          c: []
        }, {
          a: '1',
          b: '2',
          c: []
        }), 'test_equal object 4');
      });
    };

    var test_equal_array = function test_equal_array() {
      it('test_equal_array', function () {
        checkEqual(true, equal([], []));
        checkEqual(false, equal([[]], [[]]));
        checkEqual(true, equal([1], [1]));
        checkEqual(false, equal([1], [2]));
        checkEqual(true, equal([1, 2], [1, 2]));
        checkEqual(false, equal([1, 2], [2, 2]));
        checkEqual(true, equal([1, 2, 3], [1, 2, 3]));
        checkEqual(false, equal([[1, 2], 3], [[1, 2], 3]));
        checkEqual(false, equal([[1, 2, 3]], [[1, 2, 3]]));
        checkEqual(false, equal([1, [2, 3]], [1, [2, 3]]));
        checkEqual(false, equal([[1, 2], 3], [1, [2, 3]]));
        checkEqual(false, equal([[1, 2, 3]], [1, 2, 3]));
        checkEqual(false, equal([[1, [2], 3]], [[1, [2], 3]]));
        checkEqual(false, equal([[1, [2], 3]], [[1, [3], 3]]));
        checkEqual(true, equal(['a'], ['a']));
        checkEqual(false, equal(['a'], ['b']));
        checkEqual(true, equal(['a', 'b'], ['a', 'b']));
        checkEqual(false, equal(['a', 'a'], ['a', 'b']));
        checkEqual(true, equal(['a', 'b'], ['a', 'b']));
        checkEqual(false, equal([['a', 'b'], 'c'], [['a', 'b'], 'c']));
        checkEqual(false, equal([['a', 'b'], 'c'], ['a', ['b', 'c']]));
        checkEqual(false, equal([['a', ['b'], 'c']], [['a', ['b'], 'c']]));
        checkEqual(false, equal([['a', ['b'], 'c']], [['a', ['a'], 'c']]));
        checkEqual(true, equal([undefined], [undefined]));
        checkEqual(false, equal([undefined], [null]));
        checkEqual(true, equal([undefined, null], [undefined, null]));
        checkEqual(false, equal([undefined, undefined], [undefined, null]));
        checkEqual(true, equal([undefined, null], [undefined, null]));
        checkEqual(false, equal([[undefined, null], undefined], [[undefined, null], undefined]));
        checkEqual(false, equal([[undefined, null], undefined], [undefined, [null, undefined]]));
        checkEqual(false, equal([[undefined, [null], undefined]], [[undefined, [null], undefined]]));
        checkEqual(false, equal([[undefined, [null], undefined]], [[undefined, ['a'], undefined]])); // Object Named Parameter

        checkEqual(true, equal({
          value1: [1, 2, 3, 4],
          value2: [1, 2, 3, 4]
        }));
        checkEqual(false, equal({
          value1: [1, 2, 3, 4],
          value2: [1, 2, 3, 5]
        }));
      });
    };

    var test_equal_date = function test_equal_date() {
      it('test_equal_date', function () {
        // date
        checkEqual(true, equal(new Date('2019/11/02'), new Date('2019/11/02')), 'test_equal date'); // date in object

        checkEqual(false, equal({
          date: new Date('2019/11/02')
        }, {
          date: new Date('2019/11/02')
        }), 'test_equal date'); // date in array

        checkEqual(false, equal([new Date('2019/11/02')], [new Date('2019/11/02')]), 'test_equal date'); // date ignore

        equal.clear();
        equal.add(equalFunction.equalValue);
        equal.add(equalFunction.equalObject);
        equal.add(equalFunction.equalArrayType);
        equal.add(equalFunction.equalFunction);
        equal.add(equalFunction.equalRegExp); // date

        checkEqual(false, equal(new Date('2019/11/02'), new Date('2019/11/02')), 'test_equal date'); // date in object

        checkEqual(false, equal({
          date: new Date('2019/11/02')
        }, {
          date: new Date('2019/11/02')
        }), 'test_equal date'); // date in array

        checkEqual(false, equal([new Date('2019/11/02')], [new Date('2019/11/02')]), 'test_equal date');
        equal.reset();
      });
    };

    var test_equal_regexp = function test_equal_regexp() {
      it('test_equal_regexp', function () {
        // regexp
        checkEqual(true, equal(new RegExp(/^a/), new RegExp(/^a/)), 'test_equal regexp'); // regexp in object

        checkEqual(false, equal({
          reg: new RegExp(/^a/)
        }, {
          reg: new RegExp(/^a/)
        }), 'test_equal regexp'); // regexp in array

        checkEqual(false, equal([new RegExp(/^a/)], [new RegExp(/^a/)]), 'test_equal regexp'); // regexp ignore

        equal.clear();
        equal.add(equalFunction.equalValue);
        equal.add(equalFunction.equalObject);
        equal.add(equalFunction.equalArrayType);
        equal.add(equalFunction.equalFunction);
        equal.add(equalFunction.equalDate); // regexp

        checkEqual(false, equal(new RegExp(/^a/), new RegExp(/^a/)), 'test_equal regexp'); // regexp in object

        checkEqual(false, equal({
          reg: new RegExp(/^a/)
        }, {
          reg: new RegExp(/^a/)
        }), 'test_equal regexp'); // regexp in array

        checkEqual(false, equal([new RegExp(/^a/)], [new RegExp(/^a/)]), 'test_equal regexp');
        equal.reset();
      });
    };

    var test_equal_map = function test_equal_map() {
      it('test_equal_map', function () {
        if (parts.platform.isWindowsScriptHost()) {
          return;
        } // Map


        var map1 = new Map();
        map1.set('a', 1);
        map1.set('b', 2);
        var map2 = new Map();
        map2.set('a', 1);
        map2.set('b', 2);
        checkEqual(true, equal(map1, map2), 'test_equal Map'); // Map in object

        checkEqual(false, equal({
          map: map1
        }, {
          map: map2
        }), 'test_equal Map'); // Map in array

        checkEqual(false, equal([map1], [map2]), 'test_equal Map'); // ignore Map

        equal.clear();
        equal.add(equalFunction.equalValue);
        equal.add(equalFunction.equalObject);
        equal.add(equalFunction.equalArrayType);
        equal.add(equalFunction.equalFunction);
        equal.add(equalFunction.equalRegExp);
        equal.add(equalFunction.equalDate);

        if (!parts.platform.isInternetExplorer()) {
          checkEqual(false, equal(map1, map2));
        } else {
          checkEqual(true, equal(map1, map2)); // IE11 bug
        } // Map in object


        checkEqual(false, equal({
          map: map1
        }, {
          map: map2
        }), 'test_equal Map'); // Map in array

        checkEqual(false, equal([map1], [map2]), 'test_equal Map');
        equal.reset();
      });
    };

    var test_equal_set = function test_equal_set() {
      it('test_equal_set', function () {
        if (parts.platform.isWindowsScriptHost()) {
          return;
        } // Set


        var set1 = new Set();
        set1.add('a');
        set1.add('b');
        var set2 = new Set();
        set2.add('a');
        set2.add('b');
        checkEqual(true, equal(set1, set2), 'test_equal Set'); // Set in object

        checkEqual(false, equal({
          set: set1
        }, {
          set: set2
        }), 'test_equal Set'); // Set in array

        checkEqual(false, equal([set1], [set2]), 'test_equal Set'); // ignore Set

        equal.clear();
        equal.add(equalFunction.equalValue);
        equal.add(equalFunction.equalObject);
        equal.add(equalFunction.equalArrayType);
        equal.add(equalFunction.equalFunction);
        equal.add(equalFunction.equalRegExp);
        equal.add(equalFunction.equalDate);

        if (!parts.platform.isInternetExplorer()) {
          checkEqual(false, equal(set1, set2));
        } else {
          checkEqual(true, equal(set1, set2)); // IE11 bug
        } // Set in object


        checkEqual(false, equal({
          set: set1
        }, {
          set: set2
        }), 'test_equal Set'); // Set in array

        checkEqual(false, equal([set1], [set2]), 'test_equal Set');
        equal.reset();
      });
    };

    var test_equalDeep = function test_equalDeep() {
      it('test_equalDeep', function () {
        // Primitive value
        checkEqual(true, equalDeep(1, 1), 'test_equalDeep 1');
        checkEqual(true, equalDeep('1', '1'));
        checkEqual(false, equalDeep('1', 1));
        checkEqual(true, equalDeep(null, null));
        checkEqual(true, equalDeep(undefined, undefined));
        checkEqual(true, equalDeep(undefined));
        checkEqual(false, equalDeep(null, undefined));
        checkEqual(false, equalDeep(null)); // args.length

        checkEqual(true, equalDeep(1, 1, 2));
        checkEqual(false, equalDeep(1, 2, 3)); // named argument

        checkEqual(true, equalDeep({
          value1: 1,
          value2: 1
        }));
        checkEqual(true, equalDeep({
          value1: '1',
          value2: '1'
        }));
        checkEqual(false, equalDeep({
          value1: '1',
          value2: 1
        }));
      });
    };

    var test_equalDeep_object = function test_equalDeep_object() {
      it('test_equalDeep_object', function () {
        // object
        checkEqual(true, equalDeep({}, {}));
        checkEqual(true, equalDeep({
          a: {}
        }, {
          a: {}
        }));
        checkEqual(true, equalDeep({
          a: '1',
          b: '2'
        }, {
          a: '1',
          b: '2'
        }), 'test_equalDeep object 1');
        checkEqual(false, equalDeep({
          a: '2',
          b: '2'
        }, {
          a: '1',
          b: '2'
        }), 'test_equalDeep object 2');
        checkEqual(true, equalDeep({
          a: '1',
          b: '2',
          c: {}
        }, {
          a: '1',
          b: '2',
          c: {}
        }), 'test_equalDeep object 3');
        checkEqual(true, equalDeep({
          a: '1',
          b: '2',
          c: []
        }, {
          a: '1',
          b: '2',
          c: []
        }), 'test_equalDeep object 4');
        checkEqual(false, equalDeep({
          a: '1',
          b: '2',
          c: {}
        }, {
          a: '1',
          b: '2',
          c: {},
          d: ''
        }), 'test_equalDeep object 5');
        checkEqual(false, equalDeep({
          a: '1',
          b: '2',
          c: []
        }, {
          a: '1',
          b: '2',
          c: [],
          d: ''
        }), 'test_equalDeep object 6');
      });
    };

    var test_equalDeep_object_array_mix = function test_equalDeep_object_array_mix() {
      it('test_equalDeep_object_array_mix', function () {
        // equal false array object
        var testValue1 = [1, 2, 3, {
          a: 1,
          b: 2,
          c: 3
        }];
        var testValue2 = [1, 2, 3, {
          a: 1,
          b: 2,
          c: 3
        }];
        checkEqual(false, equal(testValue1, testValue2)); // equalDeep true array object

        checkEqual(true, equalDeep(testValue1, testValue2)); // equal false object array

        var testValue1 = {
          a: 1,
          b: 2,
          c: 3,
          d: [1, 2, 3]
        };
        var testValue2 = {
          a: 1,
          b: 2,
          c: 3,
          d: [1, 2, 3]
        };
        checkEqual(false, equal(testValue1, testValue2)); // equalDeep true object array

        checkEqual(true, equalDeep(testValue1, testValue2)); // equal false array object array

        var testValue1 = [1, 2, 3, {
          a: 1,
          b: 2,
          c: [3, 4, 5]
        }];
        var testValue2 = [1, 2, 3, {
          a: 1,
          b: 2,
          c: [3, 4, 5]
        }];
        checkEqual(false, equal(testValue1, testValue2)); // equalDeep true array object array

        checkEqual(true, equalDeep(testValue1, testValue2)); // equal false object array object

        var testValue1 = {
          a: 1,
          b: 2,
          c: 3,
          d: [{
            e: 4,
            f: 5,
            g: 6
          }, 2, 3]
        };
        var testValue2 = {
          a: 1,
          b: 2,
          c: 3,
          d: [{
            e: 4,
            f: 5,
            g: 6
          }, 2, 3]
        };
        checkEqual(false, equal(testValue1, testValue2)); // equalDeep true object array object

        checkEqual(true, equalDeep(testValue1, testValue2));
      });
    };

    var test_equalDeep_object_CircularReference = function test_equalDeep_object_CircularReference() {
      it('test_equalDeep_object_CircularReference', function () {
        // CircularReference
        var object1 = {
          a: '1',
          b: '2',
          c: {}
        };
        var object2 = {
          a: '1',
          b: '2',
          c: {}
        };
        object1.obj = object1;
        object2.obj = object2;
        checkEqual(true, equalDeep(object1, object2), 'test_equalDeep CircularReference 1');
        var object1 = {
          a: '1',
          b: '2',
          c: {}
        };
        var object2 = {
          a: '1',
          b: '2',
          c: {}
        };
        object1.obj = object1;
        object2.obj = object1;
        checkEqual(true, equalDeep(object1, object2), 'test_equalDeep CircularReference 2');
        var object1 = {
          a: '1',
          b: '2',
          c: {}
        };
        var object2 = {
          a: '1',
          b: '2',
          c: {}
        };
        object1.obj = object2;
        object2.obj = object1;
        checkEqual(true, equalDeep(object1, object2), 'test_equalDeep CircularReference 3');
        var object1 = {
          a: '1',
          b: '2',
          c: {}
        };
        var object2 = {
          a: '1',
          b: '2',
          c: {}
        };
        object1.obj = object2;
        object2.obj = object2;
        checkEqual(true, equalDeep(object1, object2), 'test_equalDeep CircularReference 4');
        var object1 = {
          a: '1',
          b: '2',
          c: {}
        };
        var object2 = {
          a: '1',
          b: '2',
          c: {}
        };
        var object3 = {
          a: '1',
          b: '2',
          c: {}
        };
        object1.obj = object2;
        object2.obj = object3;
        checkEqual(false, equalDeep(object1, object2), 'test_equalDeep CircularReference 5');
      });
    };

    var test_equalDeep_array = function test_equalDeep_array() {
      it('test_equalDeep_array', function () {
        checkEqual(true, equalDeep([1, 2, {}], [1, 2, {}]));
        checkEqual(true, equalDeep([1, 2, [3]], [1, 2, [3]]));
        checkEqual(true, equalDeep([], []));
        checkEqual(true, equalDeep([[]], [[]]));
        checkEqual(true, equalDeep([1], [1]));
        checkEqual(false, equalDeep([1], [2]));
        checkEqual(true, equalDeep([1, 2], [1, 2]));
        checkEqual(false, equalDeep([1, 2], [2, 2]));
        checkEqual(true, equalDeep([1, 2, 3], [1, 2, 3]));
        checkEqual(true, equalDeep([[1, 2], 3], [[1, 2], 3]));
        checkEqual(true, equalDeep([[1, 2, 3]], [[1, 2, 3]]));
        checkEqual(true, equalDeep([1, [2, 3]], [1, [2, 3]]));
        checkEqual(false, equalDeep([[1, 2], 3], [1, [2, 3]]));
        checkEqual(false, equalDeep([[1, 2, 3]], [1, 2, 3]));
        checkEqual(true, equalDeep([[1, [2], 3]], [[1, [2], 3]]));
        checkEqual(false, equalDeep([[1, [2], 3]], [[1, [3], 3]]));
        checkEqual(true, equalDeep(['a'], ['a']));
        checkEqual(false, equalDeep(['a'], ['b']));
        checkEqual(true, equalDeep(['a', 'b'], ['a', 'b']));
        checkEqual(false, equalDeep(['a', 'a'], ['a', 'b']));
        checkEqual(true, equalDeep(['a', 'b'], ['a', 'b']));
        checkEqual(true, equalDeep([['a', 'b'], 'c'], [['a', 'b'], 'c']));
        checkEqual(false, equalDeep([['a', 'b'], 'c'], ['a', ['b', 'c']]));
        checkEqual(true, equalDeep([['a', ['b'], 'c']], [['a', ['b'], 'c']]));
        checkEqual(false, equalDeep([['a', ['b'], 'c']], [['a', ['a'], 'c']]));
        checkEqual(true, equalDeep([undefined], [undefined]));
        checkEqual(false, equalDeep([undefined], [null]));
        checkEqual(true, equalDeep([undefined, null], [undefined, null]));
        checkEqual(false, equalDeep([undefined, undefined], [undefined, null]));
        checkEqual(true, equalDeep([undefined, null], [undefined, null]));
        checkEqual(true, equalDeep([[undefined, null], undefined], [[undefined, null], undefined]));
        checkEqual(false, equalDeep([[undefined, null], undefined], [undefined, [null, undefined]]));
        checkEqual(true, equalDeep([[undefined, [null], undefined]], [[undefined, [null], undefined]]));
        checkEqual(false, equalDeep([[undefined, [null], undefined]], [[undefined, ['a'], undefined]])); // Object Named Parameter

        checkEqual(true, equalDeep({
          value1: [1, 2, 3, 4],
          value2: [1, 2, 3, 4]
        }));
        checkEqual(false, equalDeep({
          value1: [1, 2, 3, 4],
          value2: [1, 2, 3, 5]
        }));
      });
    };

    var test_equalDeep_array_CircularReference = function test_equalDeep_array_CircularReference() {
      it('test_equalDeep_array_CircularReference', function () {
        // CircularReference
        var array1 = [{
          a: '1',
          b: '2'
        }, 1, 2];
        var array2 = [{
          a: '1',
          b: '2'
        }, 1, 2];
        array1.push(array1);
        array2.push(array2);
        checkEqual(true, equalDeep(array1, array2), 'test_equalDeep array CircularReference 1');
        var array1 = [{
          a: '1',
          b: '2'
        }, 1, 2];
        var array2 = [{
          a: '1',
          b: '2'
        }, 1, 2];
        array1.push(array1);
        array2.push(array1);
        checkEqual(true, equalDeep(array1, array2), 'test_equalDeep array CircularReference 2');
        var array1 = [{
          a: '1',
          b: '2'
        }, 1, 2];
        var array2 = [{
          a: '1',
          b: '2'
        }, 1, 2];
        array1.push(array2);
        array2.push(array1);
        checkEqual(true, equalDeep(array1, array2), 'test_equalDeep array CircularReference 3');
        var array1 = [{
          a: '1',
          b: '2'
        }, 1, 2];
        var array2 = [{
          a: '1',
          b: '2'
        }, 1, 2];
        array1.push(array2);
        array2.push(array2);
        checkEqual(true, equalDeep(array1, array2), 'test_equalDeep array CircularReference 4');
        var array1 = [{
          a: '1',
          b: '2'
        }, 1, 2];
        var array2 = [{
          a: '1',
          b: '2'
        }, 1, 2];
        var array3 = [{
          a: '1',
          b: '2'
        }, 1, 2];
        array1.push(array2);
        array2.push(array3);
        checkEqual(false, equalDeep(array1, array2), 'test_equalDeep array CircularReference 5');
      });
    };

    var test_equalDeep_date = function test_equalDeep_date() {
      it('test_equalDeep_date', function () {
        // date
        checkEqual(true, equalDeep(new Date('2019/11/02'), new Date('2019/11/02')), 'test_equalDeep date'); // date in object

        checkEqual(true, equalDeep({
          date: new Date('2019/11/02')
        }, {
          date: new Date('2019/11/02')
        }), 'test_equalDeep date'); // date in array

        checkEqual(true, equalDeep([new Date('2019/11/02')], [new Date('2019/11/02')]), 'test_equalDeep date'); // date ignore

        equalDeep.clear();
        equalDeep.add(equalFunction.equalValue);
        equalDeep.add(equalFunction.equalObject);
        equalDeep.add(equalFunction.equalArrayType);
        equalDeep.add(equalFunction.equalFunction);
        equalDeep.add(equalFunction.equalRegExp); // date

        checkEqual(false, equalDeep(new Date('2019/11/02'), new Date('2019/11/02')), 'test_equalDeep date'); // date in object

        checkEqual(false, equalDeep({
          date: new Date('2019/11/02')
        }, {
          date: new Date('2019/11/02')
        }), 'test_equalDeep date in object'); // date in array

        checkEqual(false, equalDeep([new Date('2019/11/02')], [new Date('2019/11/02')]), 'test_equalDeep date');
        equalDeep.reset();
      });
    };

    var test_equalDeep_regexp = function test_equalDeep_regexp() {
      it('test_equalDeep_regexp', function () {
        // regexp
        checkEqual(true, equalDeep(new RegExp(/^a/), new RegExp(/^a/)), 'test_equal regexp'); // regexp in object

        checkEqual(true, equalDeep({
          reg: new RegExp(/^a/)
        }, {
          reg: new RegExp(/^a/)
        }), 'test_equal regexp'); // regexp in array

        checkEqual(true, equalDeep([new RegExp(/^a/)], [new RegExp(/^a/)]), 'test_equal regexp'); // regexp ignore

        equalDeep.clear();
        equalDeep.add(equalFunction.equalValue);
        equalDeep.add(equalFunction.equalObject);
        equalDeep.add(equalFunction.equalArrayType);
        equalDeep.add(equalFunction.equalFunction);
        equalDeep.add(equalFunction.equalDate); // regexp

        checkEqual(false, equalDeep(new RegExp(/^a/), new RegExp(/^a/)), 'test_equal regexp'); // regexp in object

        checkEqual(false, equalDeep({
          reg: new RegExp(/^a/)
        }, {
          reg: new RegExp(/^a/)
        }), 'test_equal regexp'); // regexp in array

        checkEqual(false, equalDeep([new RegExp(/^a/)], [new RegExp(/^a/)]), 'test_equal regexp');
        equalDeep.reset();
      });
    };

    var test_equalDeep_map = function test_equalDeep_map() {
      it('test_equalDeep_map', function () {
        if (parts.platform.isWindowsScriptHost()) {
          return;
        } // Map


        var map1 = new Map();
        map1.set('a', 1);
        map1.set('b', 2);
        var map2 = new Map();
        map2.set('a', 1);
        map2.set('b', 2);
        checkEqual(true, equalDeep(map1, map2), 'test_equal Map'); // Map in object

        checkEqual(true, equalDeep({
          map: map1
        }, {
          map: map2
        }), 'test_equal Map'); // Map in array

        checkEqual(true, equalDeep([map1], [map2]), 'test_equal Map'); // ignore Map

        equalDeep.clear();
        equalDeep.add(equalFunction.equalValue);
        equalDeep.add(equalFunction.equalObject);
        equalDeep.add(equalFunction.equalArrayType);
        equalDeep.add(equalFunction.equalFunction);
        equalDeep.add(equalFunction.equalRegExp);
        equalDeep.add(equalFunction.equalDate);

        if (!parts.platform.isInternetExplorer()) {
          checkEqual(false, equalDeep(map1, map2)); // Map in object

          checkEqual(false, equalDeep({
            map: map1
          }, {
            map: map2
          })); // Map in array

          checkEqual(false, equalDeep([map1], [map2]));
        } else {
          // IE11 bug
          checkEqual(true, equalDeep(map1, map2));
          checkEqual(true, equalDeep({
            map: map1
          }, {
            map: map2
          }));
          checkEqual(true, equalDeep([map1], [map2]));
        }

        equalDeep.reset();
      });
    };

    var test_equalDeep_map_object_array = function test_equalDeep_map_object_array() {
      it('test_equalDeep_map_object_array', function () {
        if (parts.platform.isWindowsScriptHost()) {
          return;
        } // Map Object Array


        var map1 = new Map();
        map1.set('a', {
          a: '1'
        });
        map1.set('b', ['b']);
        var map2 = new Map();
        map2.set('a', {
          a: '1'
        });
        map2.set('b', ['b']);
        checkEqual(true, equalDeep(map1, map2), 'test_equal Map object array'); // Map in object

        checkEqual(true, equalDeep({
          map: map1
        }, {
          map: map2
        }), 'test_equal Map object array'); // Map in array

        checkEqual(true, equalDeep([map1], [map2]), 'test_equal Map object array'); // more map add object

        var map1 = new Map();
        map1.set('a', {
          a: 1,
          b: 2,
          c: {
            c1: 10
          }
        });
        map1.set('b', {
          c: 3,
          b: 4
        });
        var map2 = new Map();
        map2.set('a', {
          a: 1,
          b: 2,
          c: {
            c1: 10
          }
        });
        map2.set('b', {
          c: 3,
          b: 4
        });
        checkEqual(true, equalDeep({
          map: map1
        }, {
          map: map2
        }), 'test_equal Map set object'); // more map set object

        var map1 = new Map();
        map1.set('a', {
          a: 1,
          b: 2,
          c: {
            c1: 10
          }
        });
        map1.set('b', {
          c: 3,
          b: 4
        });
        var map2 = new Map();
        map2.set('a', {
          a: 1,
          b: 2,
          c: {
            c1: 10
          },
          d: ''
        });
        map2.set('b', {
          c: 3,
          b: 4
        });

        if (!parts.platform.isInternetExplorer()) {
          checkEqual(false, equalDeep({
            map: map1
          }, {
            map: map2
          }));
        } else {
          checkEqual(true, equalDeep({
            map: map1
          }, {
            map: map2
          })); // IE11 bug
        }
      });
    };

    var test_equalDeep_map_CircularReference = function test_equalDeep_map_CircularReference() {
      it('test_equalDeep_map_CircularReference', function () {
        if (parts.platform.isWindowsScriptHost()) {
          return;
        } // CircularReference


        var map1 = new Map();
        map1.set('a', {
          a: '1'
        });
        map1.set('b', ['b']);
        var map2 = new Map();
        map2.set('a', {
          a: '1'
        });
        map2.set('b', ['b']);
        map1.set('map', map1);
        map2.set('map', map2);
        checkEqual(true, equalDeep(map1, map2));
        var map1 = new Map();
        map1.set('a', {
          a: '1'
        });
        map1.set('b', ['b']);
        var map2 = new Map();
        map2.set('a', {
          a: '1'
        });
        map2.set('b', ['b']);
        map1.set('map', map1);
        map2.set('map', map1);
        checkEqual(true, equalDeep(map1, map2));
        var map1 = new Map();
        map1.set('a', {
          a: '1'
        });
        map1.set('b', ['b']);
        var map2 = new Map();
        map2.set('a', {
          a: '1'
        });
        map2.set('b', ['b']);
        map1.set('map', map2);
        map2.set('map', map2);
        checkEqual(true, equalDeep(map1, map2));
        var map1 = new Map();
        map1.set('a', {
          a: '1'
        });
        map1.set('b', ['b']);
        var map2 = new Map();
        map2.set('a', {
          a: '1'
        });
        map2.set('b', ['b']);
        map1.set('map', map2);
        map2.set('map', map1);
        checkEqual(true, equalDeep(map1, map2));
        var map1 = new Map();
        map1.set('a', {
          a: '1'
        });
        map1.set('b', ['b']);
        var map2 = new Map();
        map2.set('a', {
          a: '1'
        });
        map2.set('b', ['b']);
        var map3 = new Map();
        map3.set('a', {
          a: '1'
        });
        map3.set('b', ['b']);
        map1.set('map', map2);
        map2.set('map', map3);

        if (!parts.platform.isInternetExplorer()) {
          checkEqual(false, equalDeep(map1, map2));
        } else {
          checkEqual(true, equalDeep(map1, map2)); // IE11 bug
        }
      });
    };

    var test_equalDeep_set = function test_equalDeep_set() {
      it('test_equalDeep_set', function () {
        if (parts.platform.isWindowsScriptHost()) {
          return;
        } // Set


        var set1 = new Set();
        set1.add('a');
        set1.add('b');
        var set2 = new Set();
        set2.add('a');
        set2.add('b');
        checkEqual(true, equalDeep(set1, set2), 'test_equal Set1'); // Set in object

        checkEqual(true, equalDeep({
          set: set1
        }, {
          set: set2
        }), 'test_equal Set2'); // Set in array

        checkEqual(true, equalDeep([set1], [set2]), 'test_equal Set3'); // ignore Set

        equalDeep.clear();
        equalDeep.add(equalFunction.equalValue);
        equalDeep.add(equalFunction.equalObject);
        equalDeep.add(equalFunction.equalArrayType);
        equalDeep.add(equalFunction.equalFunction);
        equalDeep.add(equalFunction.equalRegExp);
        equalDeep.add(equalFunction.equalDate);

        if (!parts.platform.isInternetExplorer()) {
          checkEqual(false, equalDeep(set1, set2)); // Set in object

          checkEqual(false, equalDeep({
            set: set1
          }, {
            set: set2
          })); // Set in array

          checkEqual(false, equalDeep([set1], [set2]));
        } else {
          // IE11 bug
          checkEqual(true, equalDeep(set1, set2));
          checkEqual(true, equalDeep({
            set: set1
          }, {
            set: set2
          }));
          checkEqual(true, equalDeep([set1], [set2]));
        }

        equalDeep.reset();
      });
    };

    var test_equalDeep_set_object_array = function test_equalDeep_set_object_array() {
      it('test_equalDeep_set_object_array', function () {
        if (parts.platform.isWindowsScriptHost()) {
          return;
        } // Set Object Array


        var set1 = new Set();
        set1.add({
          a: '1'
        });
        set1.add(['b']);
        var set2 = new Set();
        set2.add({
          a: '1'
        });
        set2.add(['b']);
        checkEqual(true, equalDeep(set1, set2), 'test_equal Set object array'); // Set in object

        checkEqual(true, equalDeep({
          map: set1
        }, {
          map: set2
        }), 'test_equal Set object array'); // Set in array

        checkEqual(true, equalDeep([set1], [set2]), 'test_equal Set object array'); // more set add object object

        var set1 = new Set();
        set1.add({
          a: 1,
          b: 2,
          c: {
            c1: 10
          }
        });
        set1.add({
          c: 3,
          b: 4
        });
        var set2 = new Set();
        set2.add({
          a: 1,
          b: 2,
          c: {
            c1: 10
          }
        });
        set2.add({
          c: 3,
          b: 4
        });
        checkEqual(true, equalDeep({
          set: set1
        }, {
          set: set2
        })); // more set add object object

        var set1 = new Set();
        set1.add({
          a: 1,
          b: 2,
          c: {
            c1: 10
          }
        });
        set1.add({
          c: 3,
          b: 4
        });
        var set2 = new Set();
        set2.add({
          a: 1,
          b: 2,
          c: {
            c1: 10
          },
          d: ''
        });
        set2.add({
          c: 3,
          b: 4
        });

        if (!parts.platform.isInternetExplorer()) {
          checkEqual(false, equalDeep({
            set: set1
          }, {
            set: set2
          }));
        } else {
          checkEqual(true, equalDeep({
            set: set1
          }, {
            set: set2
          })); // IE11 bug
        }
      });
    };

    var test_equalDeep_set_CircularReference = function test_equalDeep_set_CircularReference() {
      it('test_equalDeep_set_CircularReference', function () {
        if (parts.platform.isWindowsScriptHost()) {
          return;
        } // CircularReference


        var set1 = new Set();
        set1.add({
          a: '1'
        });
        set1.add(['b']);
        var set2 = new Set();
        set2.add({
          a: '1'
        });
        set2.add(['b']);
        set1.add(set1);
        set2.add(set2);
        checkEqual(true, equalDeep({
          set: set1
        }, {
          set: set2
        }));
        var set1 = new Set();
        set1.add({
          a: '1'
        });
        set1.add(['b']);
        var set2 = new Set();
        set2.add({
          a: '1'
        });
        set2.add(['b']);
        set1.add(set1);
        set2.add(set1);
        checkEqual(true, equalDeep({
          set: set1
        }, {
          set: set2
        }));
        var set1 = new Set();
        set1.add({
          a: '1'
        });
        set1.add(['b']);
        var set2 = new Set();
        set2.add({
          a: '1'
        });
        set2.add(['b']);
        set1.add(set2);
        set2.add(set2);
        checkEqual(true, equalDeep({
          set: set1
        }, {
          set: set2
        }));
        var set1 = new Set();
        set1.add({
          a: '1'
        });
        set1.add(['b']);
        var set2 = new Set();
        set2.add({
          a: '1'
        });
        set2.add(['b']);
        set1.add(set2);
        set2.add(set1);
        checkEqual(true, equalDeep({
          set: set1
        }, {
          set: set2
        }));
        var set1 = new Set();
        set1.add({
          a: '1'
        });
        set1.add(['b']);
        var set2 = new Set();
        set2.add({
          a: '1'
        });
        set2.add(['b']);
        var set3 = new Set();
        set3.add({
          a: '1'
        });
        set3.add(['b']);
        set1.add(set2);
        set2.add(set3);

        if (!parts.platform.isInternetExplorer()) {
          checkEqual(false, equalDeep({
            set: set1
          }, {
            set: set2
          }));
        } else {
          checkEqual(true, equalDeep({
            set: set1
          }, {
            set: set2
          }));
        }
      });
    };

    var test_or = function test_or() {
      it('test_or', function () {
        var value;
        checkEqual(false, or(value, []));
        checkEqual(false, or(value, [null]));
        checkEqual(false, or(value, [null, null]));
        checkEqual(false, or(value, [null, 0]));
        checkEqual(false, or(value, [0, '']));
        checkEqual(true, or(value, [undefined]));
        checkEqual(true, or(value, [undefined, null]));
        checkEqual(true, or(value, [null, undefined]));
        checkEqual(true, or(value, [undefined, undefined]));
        checkEqual(true, or(value, [undefined, 0]));
        value = null;
        checkEqual(false, or(value, []));
        checkEqual(false, or(value, [undefined]));
        checkEqual(false, or(value, [undefined, undefined]));
        checkEqual(false, or(value, [undefined, 0]));
        checkEqual(false, or(value, [0, '']));
        checkEqual(true, or(value, [null]));
        checkEqual(true, or(value, [null, undefined]));
        checkEqual(true, or(value, [undefined, null]));
        checkEqual(true, or(value, [null, null]));
        checkEqual(true, or(value, [null, 0]));
        value = 1;
        checkEqual(true, or(value, [1]));
        checkEqual(true, or(value, [1, 2]));
        checkEqual(true, or(value, [1, 2, 3]));
        checkEqual(false, or(value, [2]));
        checkEqual(false, or(value, [2, 3])); // exception

        checkEqual(true, isThrown(function () {
          or(123, 456);
        }, function (e) {
          return e.name === new TypeError().name && e.message === 'or args(compareArray) is not array';
        }));
        checkEqual(true, or({
          value: 1,
          compareArray: [1, 2]
        }));
        checkEqual(false, or({
          value: 0,
          compareArray: [1, 2]
        })); // exception

        checkEqual(false, isThrown(function () {
          or({
            value: 1,
            compareArray: [1, 2]
          });
        }));
        checkEqual(true, isThrown(function () {
          or({
            value: 1,
            array: [1, 2]
          });
        }, function (e) {
          return e.name === new TypeError().name && e.message === 'or args(compareArray) is not array';
        }));
        checkEqual(true, isThrown(function () {
          or({
            value1: 1,
            compareArray: [1, 2]
          });
        }, function (e) {
          return e.name === new TypeError().name && e.message === 'or args(compareArray) is not array';
        }));
        checkEqual(false, isThrown(function () {
          or({
            value1: 1,
            compareArray: [1, 2]
          }, []);
        }, function (e) {
          return e.name === new TypeError().name && e.message === 'or args(compareArray) is not array';
        }));
      });
    };

    var test_match = function test_match() {
      it('test_match', function () {
        var stringToInteger = parts.stringToInteger;
        checkEqual(false, match('', null));
        checkEqual(true, match('', ''));
        checkEqual(false, match('123', null));
        checkEqual(false, match('123', undefined));
        checkEqual(false, match('123', 123));
        checkEqual(true, match('123', '123'));
        checkEqual(false, match(undefined, null));
        checkEqual(true, match(undefined, undefined));
        checkEqual(true, match(null, null));
        checkEqual(false, match(null, undefined));
        checkEqual(true, match('1', isString));
        checkEqual(false, match(1, isString));
        checkEqual(false, match(null, isString));
        checkEqual(false, match(undefined, isString));
        checkEqual(true, match({}, isEmptyObject));
        checkEqual(false, match({
          a: 1
        }, isEmptyObject));
        checkEqual(true, match('100', '100'));
        checkEqual(false, match('200', '100'));
        checkEqual(false, match(100, '100'));
        checkEqual(false, match(200, '100'));
        checkEqual(false, match(null, '100'));
        checkEqual(true, match('100', isString));
        checkEqual(true, match('200', isString));
        checkEqual(false, match(100, isString));
        checkEqual(false, match(200, isString));
        checkEqual(false, match(null, isString));
        checkEqual(false, match(undefined, isString));
        checkEqual(false, match('100', isInteger));
        checkEqual(false, match('200', isInteger));
        checkEqual(true, match(100, isInteger));
        checkEqual(true, match(200, isInteger));
        checkEqual(false, match(null, isInteger));
        checkEqual(false, match(undefined, isInteger));
        checkEqual(false, match({
          value: '123',
          compare: undefined
        }));
        checkEqual(true, match({
          value: undefined,
          compare: undefined
        }));
        checkEqual(false, match({
          value: null,
          compare: undefined
        })); // object parameter

        checkEqual(false, match({
          value: null,
          compare: undefined
        }));
        checkEqual(true, match({
          value: undefined,
          compare: undefined
        }));
        checkEqual(false, match(null, {
          compare: undefined
        }));
        checkEqual(true, match(undefined, {
          compare: undefined
        })); // checkEqual(101,
        //   matchValue({ value: null,       compare: undefined, match: 100, unmatch: 101 }));
        // checkEqual(200,
        //   matchValue({ value: undefined,  compare: undefined, match: 200, unmatch: 201 }));
        // checkEqual(101,
        //   matchValue(null,      { compare: undefined, match: 100, unmatch: 101 }));
        // checkEqual(200,
        //   matchValue(undefined, { compare: undefined, match: 200, unmatch: 201 }));
        // checkEqual(101,
        //   matchValue(null,      undefined, { match: 100, unmatch: 101 }));
        // checkEqual(200,
        //   matchValue(undefined, undefined, { match: 200, unmatch: 201 }));
        // checkEqual(101,
        //   matchValue(null,      undefined, 100, { unmatch: 101 }));
        // checkEqual(200,
        //   matchValue(undefined, undefined, 200, { unmatch: 201 }));
        // checkEqual(101,
        //   matchValue(null,      undefined, 100, 101));
        // checkEqual(200,
        //   matchValue(undefined, undefined, 200, 201));
      });
    };

    var test_matchValue = function test_matchValue() {
      it('test_matchValue', function () {
        var stringToInteger = parts.stringToInteger;
        checkEqual('', matchValue('', null, 999));
        checkEqual(999, matchValue('', '', 999));
        checkEqual('123', matchValue('123', null, 999));
        checkEqual('123', matchValue('123', undefined, 999));
        checkEqual('123', matchValue('123', 123, 999));
        checkEqual(999, matchValue('123', '123', 999));
        checkEqual(undefined, matchValue(undefined, null, 999));
        checkEqual(999, matchValue(undefined, undefined, 999));
        checkEqual(999, matchValue(null, null, 999));
        checkEqual(null, matchValue(null, undefined, 999));
        checkEqual(1, matchValue('1', isString, stringToInteger));
        checkEqual(1, matchValue(1, isString, stringToInteger));
        checkEqual(null, matchValue(null, isString, stringToInteger));
        checkEqual(undefined, matchValue(undefined, isString, stringToInteger));
        checkEqual('test', matchValue({}, isEmptyObject, 'test'));
        checkEqual({
          a: 1
        }, matchValue({
          a: 1
        }, isEmptyObject, 'test'));
        checkEqual('$100', matchValue('100', '100', function (v) {
          return '$' + v;
        }));
        checkEqual('200', matchValue('200', '100', function (v) {
          return '$' + v;
        }));
        checkEqual(100, matchValue(100, '100', function (v) {
          return '$' + v;
        }));
        checkEqual(200, matchValue(200, '100', function (v) {
          return '$' + v;
        }));
        checkEqual(null, matchValue(null, '100', function (v) {
          return '$' + v;
        }));
        checkEqual('$100', matchValue('100', isString, function (v) {
          return '$' + v;
        }, ''));
        checkEqual('$200', matchValue('200', isString, function (v) {
          return '$' + v;
        }, ''));
        checkEqual('', matchValue(100, isString, function (v) {
          return '$' + v;
        }, ''));
        checkEqual('', matchValue(200, isString, function (v) {
          return '$' + v;
        }, ''));
        checkEqual('', matchValue(null, isString, function (v) {
          return '$' + v;
        }, ''));
        checkEqual('', matchValue(undefined, isString, function (v) {
          return '$' + v;
        }, ''));
        checkEqual('?100', matchValue('100', isInteger, function (v) {
          return '$' + v;
        }, function (v) {
          return '?' + v;
        }));
        checkEqual('?200', matchValue('200', isInteger, function (v) {
          return '$' + v;
        }, function (v) {
          return '?' + v;
        }));
        checkEqual('$100', matchValue(100, isInteger, function (v) {
          return '$' + v;
        }, function (v) {
          return '?' + v;
        }));
        checkEqual('$200', matchValue(200, isInteger, function (v) {
          return '$' + v;
        }, function (v) {
          return '?' + v;
        }));
        checkEqual('?null', matchValue(null, isInteger, function (v) {
          return '$' + v;
        }, function (v) {
          return '?' + v;
        }));
        checkEqual('?undefined', matchValue(undefined, isInteger, function (v) {
          return '$' + v;
        }, function (v) {
          return '?' + v;
        }));
        checkEqual('123', matchValue({
          value: '123',
          compare: undefined,
          match: 999
        }));
        checkEqual(999, matchValue({
          value: undefined,
          compare: undefined,
          match: 999
        }));
        checkEqual(null, matchValue({
          value: null,
          compare: undefined,
          match: 999
        })); // object parameter

        checkEqual(null, matchValue({
          value: null,
          compare: undefined,
          match: 100
        }));
        checkEqual(200, matchValue({
          value: undefined,
          compare: undefined,
          match: 200
        }));
        checkEqual(null, matchValue(null, {
          compare: undefined,
          match: 100
        }));
        checkEqual(200, matchValue(undefined, {
          compare: undefined,
          match: 200
        }));
        checkEqual(null, matchValue(null, undefined, {
          match: 100
        }));
        checkEqual(200, matchValue(undefined, undefined, {
          match: 200
        }));
        checkEqual(null, matchValue(null, undefined, 100));
        checkEqual(200, matchValue(undefined, undefined, 200));
        checkEqual(101, matchValue({
          value: null,
          compare: undefined,
          match: 100,
          unmatch: 101
        }));
        checkEqual(200, matchValue({
          value: undefined,
          compare: undefined,
          match: 200,
          unmatch: 201
        }));
        checkEqual(101, matchValue(null, {
          compare: undefined,
          match: 100,
          unmatch: 101
        }));
        checkEqual(200, matchValue(undefined, {
          compare: undefined,
          match: 200,
          unmatch: 201
        }));
        checkEqual(101, matchValue(null, undefined, {
          match: 100,
          unmatch: 101
        }));
        checkEqual(200, matchValue(undefined, undefined, {
          match: 200,
          unmatch: 201
        }));
        checkEqual(101, matchValue(null, undefined, 100, {
          unmatch: 101
        }));
        checkEqual(200, matchValue(undefined, undefined, 200, {
          unmatch: 201
        }));
        checkEqual(101, matchValue(null, undefined, 100, 101));
        checkEqual(200, matchValue(undefined, undefined, 200, 201));
      });
    };

    var test_initialValue = function test_initialValue() {
      it('test_initialValue', function () {
        // almost test_matchSome done
        checkEqual('123', initialValue('123', 999));
        checkEqual(999, initialValue(undefined, 999));
        checkEqual(null, initialValue(null, 999));
        checkEqual('123', initialValue({
          value: '123',
          match: 999
        }));
        checkEqual(999, initialValue({
          value: undefined,
          match: 999
        }));
        checkEqual(null, initialValue({
          value: null,
          match: 999
        }));
        checkEqual('[object Object]', String(initialValue({}, 'test')));
        checkEqual('null', String(initialValue(null, {})));
        checkEqual('[object Object]', String(initialValue(undefined, {}))); // object parameter

        checkEqual(null, initialValue({
          value: null,
          match: 100
        }));
        checkEqual(200, initialValue({
          value: undefined,
          match: 200
        }));
        checkEqual(null, initialValue(null, {
          match: 100
        }));
        checkEqual(200, initialValue(undefined, {
          match: 200
        }));
        checkEqual(null, initialValue(null, 100));
        checkEqual(200, initialValue(undefined, 200));
        checkEqual(100, initialValue({
          value: null,
          match: 100,
          compareArray: [undefined, null]
        }));
        checkEqual(200, initialValue({
          value: undefined,
          match: 200,
          compareArray: [undefined, null]
        }));
        checkEqual(null, initialValue({
          value: null,
          match: 100,
          compareArray: [undefined]
        }));
        checkEqual(100, initialValue(null, {
          match: 100,
          compareArray: [undefined, null]
        }));
        checkEqual(200, initialValue(undefined, {
          match: 200,
          compareArray: [undefined, null]
        }));
        checkEqual(null, initialValue(null, {
          match: 100,
          compareArray: [undefined]
        }));
        checkEqual(100, initialValue(null, 100, {
          compareArray: [undefined, null]
        }));
        checkEqual(200, initialValue(undefined, 200, {
          compareArray: [undefined, null]
        }));
        checkEqual(null, initialValue(null, 100, {
          compareArray: [undefined]
        }));
      });
    };

    var test_allMatch = function test_allMatch() {
      it('test_allMatch', function () {
        checkEqual(true, allMatch([10, 20, 30], function (value) {
          return value > 5;
        }));
        checkEqual(false, allMatch([10, 20, 30], function (value) {
          return value > 15;
        }));
        checkEqual(true, allMatch([null, undefined], function (value) {
          return value == null;
        }));
        checkEqual(false, allMatch([null, undefined], null));
        checkEqual(false, isThrown(function () {
          allMatch([10], function (value) {
            return value > 15;
          });
        }));
        checkEqual(true, isThrown(function () {
          allMatch(10, function (value) {
            return value > 15;
          });
        })); // object parameter

        checkEqual(true, allMatch({
          valueArray: [10, 20, 30],
          compare: function compare(value) {
            return value > 5;
          }
        }));
        checkEqual(false, allMatch({
          valueArray: [10, 20, 30],
          compare: function compare(value) {
            return value > 15;
          }
        }));
        checkEqual(true, allMatch([10, 20, 30], {
          compare: function compare(value) {
            return value > 5;
          }
        }));
        checkEqual(false, allMatch([10, 20, 30], {
          compare: function compare(value) {
            return value > 15;
          }
        }));
      });
    };

    var test_someMatch = function test_someMatch() {
      it('test_someMatch', function () {
        checkEqual(true, someMatch([10, 20, 30], function (value) {
          return value > 5;
        }), 'test_match');
        checkEqual(true, someMatch([10, 20, 30], function (value) {
          return value > 25;
        }));
        checkEqual(false, someMatch([10, 20, 30], function (value) {
          return value > 35;
        }));
        checkEqual(true, someMatch([null, undefined], null));
        checkEqual(true, someMatch([null, undefined], isUndefined));
        checkEqual(true, someMatch([null, undefined], isNull));
        checkEqual(true, someMatch([null, undefined, NaN], isNaNStrict)); // object parameter

        checkEqual(true, someMatch({
          valueArray: [10, 20],
          compare: function compare(v) {
            return v > 15;
          }
        }));
        checkEqual(false, someMatch({
          valueArray: [10, 15],
          compare: function compare(v) {
            return v > 15;
          }
        }));
        checkEqual(true, someMatch([10, 20], {
          compare: function compare(v) {
            return v > 15;
          }
        }));
        checkEqual(false, someMatch([10, 15], {
          compare: function compare(v) {
            return v > 15;
          }
        })); // exception

        checkEqual(false, isThrown(function () {
          someMatch([10], function (value) {
            return value > 15;
          });
        }));
        checkEqual(true, isThrown(function () {
          someMatch(10, function (value) {
            return value > 15;
          });
        }));
      });
    };

    var test_indexOfMatch = function test_indexOfMatch() {
      it('test_indexOfMatch', function () {
        checkEqual(0, indexOfMatch([10, 20, 30], function (value) {
          return value > 5;
        }), 'test_match');
        checkEqual(2, indexOfMatch([10, 20, 30], function (value) {
          return value > 25;
        }));
        checkEqual(-1, indexOfMatch([10, 20, 30], function (value) {
          return value > 35;
        }));
        checkEqual(0, indexOfMatch([null, undefined], null));
        checkEqual(1, indexOfMatch([null, undefined], isUndefined));
        checkEqual(0, indexOfMatch([null, undefined], isNull));
        checkEqual(2, indexOfMatch([null, undefined, NaN], isNaNStrict));
        checkEqual(false, isThrown(function () {
          indexOfMatch([10], function (value) {
            return value > 15;
          });
        }));
        checkEqual(true, isThrown(function () {
          indexOfMatch(10, function (value) {
            return value > 15;
          });
        })); // object parameter

        checkEqual(1, indexOfMatch({
          valueArray: [10, 20, 30],
          compare: function compare(value) {
            return value > 15;
          }
        }));
        checkEqual(-1, indexOfMatch({
          valueArray: [10, 20, 30],
          compare: function compare(value) {
            return value > 35;
          }
        }));
        checkEqual(2, indexOfMatch([10, 20, 30], {
          compare: function compare(value) {
            return value > 25;
          }
        }));
        checkEqual(-1, indexOfMatch([10, 20, 30], {
          compare: function compare(value) {
            return value > 35;
          }
        }));
      });
    };

    var test_matchSome = function test_matchSome() {
      it('test_matchSome', function () {
        // normal args string
        checkEqual(false, matchSome('abc', ['123', '456', '789']), 'test_match 1');
        checkEqual(true, matchSome('abc', ['123', '456', 'abc']), 'test_match 2');
        checkEqual(false, matchSome('abc', ['123', '456', /^b/]), 'test_match 3');
        checkEqual(true, matchSome('abc', ['123', '456', /^a/]), 'test_match 4');
        checkEqual(false, matchSome('abc', []), 'test_match 5');
        checkEqual(false, matchSome('123', [null, undefined, 123, 'abc']), 'test_match 6');
        checkEqual(true, matchSome('abc', [function (value) {
          return isFirst(value, 'a');
        }]), 'test_match 7');
        checkEqual(false, matchSome('abc', [function (value) {
          return isFirst(value, 'b');
        }]), 'test_match 8'); // normal args number

        checkEqual(false, matchSome(123, ['123', '456', '789']), 'test_match number 1');
        checkEqual(true, matchSome(123, [123, 456, 'abc']), 'test_match number 2');
        checkEqual(false, matchSome(123, ['123', '456', /^1/]), 'test_match number 3');
        checkEqual(true, matchSome(123, [123, '456', /^1/]), 'test_match number 4');
        checkEqual(false, matchSome(123, []), 'test_match number 5');
        checkEqual(true, matchSome(123, [null, undefined, 123, 'abc']), 'test_match number 6');
        checkEqual(true, matchSome(100, [function (value) {
          return 100 <= value;
        }]), 'test_match 7');
        checkEqual(false, matchSome(99, [function (value) {
          return 100 <= value;
        }]), 'test_match 8');
        checkEqual(true, matchSome(null, [null, undefined, 123, 'abc']), 'test_match 1');
        checkEqual(true, matchSome(undefined, [null, undefined, 123, 'abc']), 'test_match 2');
        checkEqual(true, matchSome(123, [null, undefined, 123, 'abc']), 'test_match 3');
        checkEqual(true, matchSome('abc', [null, undefined, 123, 'abc']), 'test_match 4');
        checkEqual(true, matchSome(1, [null, undefined, 1, '1']));
        checkEqual(false, matchSome(1, [null, undefined, 2, '1']));
        checkEqual(true, matchSome('1', [null, undefined, 1, '1']));
        checkEqual(false, matchSome('1', [null, undefined, 1, '2']));
        checkEqual(true, matchSome(null, [null, undefined, 0]));
        checkEqual(true, matchSome(undefined, [null, undefined, 0]));
        checkEqual(true, matchSome(0, [null, undefined, 0]));
        checkEqual(false, matchSome(null, [undefined, 0]));
        checkEqual(false, matchSome(undefined, [null, 0]));
        checkEqual(false, matchSome(0, [null, undefined]));
        checkEqual(true, matchSome(null, [null, undefined]));
        checkEqual(true, matchSome(null, [null, undefined, isEmptyArray]));
        checkEqual(true, matchSome(null, [null, undefined, isEmptyObject]));
        checkEqual(true, matchSome(undefined, [null, undefined]));
        checkEqual(true, matchSome(undefined, [null, undefined, isEmptyArray]));
        checkEqual(true, matchSome(undefined, [null, undefined, isEmptyObject]));
        checkEqual(false, matchSome([], [null, undefined]));
        checkEqual(true, matchSome([], [null, undefined, isEmptyArray]));
        checkEqual(false, matchSome([], [null, undefined, isEmptyObject]));
        checkEqual(false, matchSome({}, [null, undefined]));
        checkEqual(false, matchSome({}, [null, undefined, isEmptyArray]));
        checkEqual(true, matchSome({}, [null, undefined, isEmptyObject])); // exception

        checkEqual(true, isThrownException(function () {
          matchSome('123', 'abc');
        }, new TypeError().name)); // Object Named Parameter string

        checkEqual(false, matchSome({
          value: 'abc',
          compareArray: ['123', '456', '789']
        }), 'test_match param 1');
        checkEqual(true, matchSome({
          value: 'abc',
          compareArray: ['123', '456', 'abc']
        }), 'test_match param 2');
        checkEqual(false, matchSome({
          value: 'abc',
          compareArray: ['123', '456', /^b/]
        }), 'test_match param 3');
        checkEqual(true, matchSome({
          value: 'abc',
          compareArray: ['123', '456', /^a/]
        }), 'test_match param 4');
        checkEqual(false, matchSome({
          value: 'abc',
          compareArray: []
        }), 'test_match param 5');
        checkEqual(false, matchSome({
          value: '123',
          compareArray: [null, undefined, 123, 'abc']
        }), 'test_match param 6');
        checkEqual(true, matchSome({
          value: 'abc',
          compareArray: [function (value) {
            return isFirst(value, 'a');
          }]
        }), 'test_match param 7');
        checkEqual(false, matchSome({
          value: 'abc',
          compareArray: [function (value) {
            return isFirst(value, 'b');
          }]
        }), 'test_match param 8');
        checkEqual(false, matchSome('abc', {
          compareArray: ['123', '456', '789']
        }));
        checkEqual(true, matchSome('abc', {
          compareArray: ['123', '456', 'abc']
        })); // Object Named Parameter number

        checkEqual(false, matchSome({
          value: 123,
          compareArray: ['123', '456', '789']
        }), 'test_match param number 1');
        checkEqual(true, matchSome({
          value: 123,
          compareArray: [123, 456, 'abc']
        }), 'test_match param number 2');
        checkEqual(false, matchSome({
          value: 123,
          compareArray: ['123', '456', /^1/]
        }), 'test_match param number 3');
        checkEqual(true, matchSome({
          value: 123,
          compareArray: [123, '456', /^1/]
        }), 'test_match param number 4');
        checkEqual(false, matchSome({
          value: 123,
          compareArray: []
        }), 'test_match param number 5');
        checkEqual(true, matchSome({
          value: 123,
          compareArray: [null, undefined, 123, 'abc']
        }), 'test_match param number 6');
        checkEqual(true, matchSome({
          value: 100,
          compareArray: [function (value) {
            return 100 <= value;
          }]
        }), 'test_match param 7');
        checkEqual(false, matchSome({
          value: 99,
          compareArray: [function (value) {
            return 100 <= value;
          }]
        }), 'test_match param 8');
        checkEqual(false, matchSome(123, {
          compareArray: ['123', '456', '789']
        }));
        checkEqual(true, matchSome(123, {
          compareArray: [123, 456, 'abc']
        })); // exception

        checkEqual(false, isThrown(function () {
          matchSome({
            value: '123',
            compareArray: ['123']
          });
        }), 'test_match thrown 1');
        checkEqual(false, isThrown(function () {
          matchSome({
            value: '123',
            compareArray: []
          });
        }), 'test_match thrown 2');
        checkEqual(false, isThrown(function () {
          matchSome({
            value: '123',
            compareArray: [123]
          });
        }), 'test_match thrown 3');
        checkEqual(true, isThrown(function () {
          matchSome({
            value: '123',
            compareArray: 123
          });
        }, function (e) {
          return e.name === new TypeError().name && e.message === 'matchSome args(compareArray) is not array';
        }), 'test_match thrown 4');
        checkEqual(true, isThrown(function () {
          matchSome({
            value1: '123',
            compareArray: [123]
          });
        }), 'test_match thrown 5');
        checkEqual(false, isThrown(function () {
          matchSome({
            value1: '123',
            compareArray: [123]
          }, []);
        }), 'test_match thrown 5');
        checkEqual(false, matchSome({
          value1: '123',
          compareArray: [123]
        }, []));
        checkEqual(true, matchSome({
          value1: '123',
          compareArray: [123]
        }, [function () {
          return true;
        }]));
        checkEqual(false, matchSome({
          value1: '123',
          compareArray: [123]
        }, [function () {
          return false;
        }]));
        checkEqual(true, matchSome({
          value1: '123',
          compareArray: [123]
        }, [function (value) {
          return isObject(value);
        }]));
      });
    };

    var test_matchSomeValue = function test_matchSomeValue() {
      it('test_matchSomeValue', function () {
        // almost test_matchSome done
        checkEqual(999, matchSomeValue(99, [99, 98, 97], 999));
        checkEqual(999, matchSomeValue(98, [99, 98, 97], 999));
        checkEqual(999, matchSomeValue(97, [99, 98, 97], 999));
        checkEqual(96, matchSomeValue(96, [99, 98, 97], 999));
        checkEqual(999, matchSomeValue({
          value: 99,
          compareArray: [99, 98, 97],
          match: 999,
          unmatch: 100
        }));
        checkEqual(100, matchSomeValue({
          value: 96,
          compareArray: [99, 98, 97],
          match: 999,
          unmatch: 100
        }));
        checkEqual(999, matchSomeValue(99, {
          compareArray: [99, 98, 97],
          match: 999,
          unmatch: 100
        }));
        checkEqual(100, matchSomeValue(96, {
          compareArray: [99, 98, 97],
          match: 999,
          unmatch: 100
        }));
        checkEqual(999, matchSomeValue(99, [99, 98, 97], {
          match: 999,
          unmatch: 100
        }));
        checkEqual(100, matchSomeValue(96, [99, 98, 97], {
          match: 999,
          unmatch: 100
        }));
        checkEqual(999, matchSomeValue(99, [99, 98, 97], 999, {
          unmatch: 100
        }));
        checkEqual(100, matchSomeValue(96, [99, 98, 97], 999, {
          unmatch: 100
        }));
        checkEqual(999, matchSomeValue({
          value: 99,
          compareArray: [99, 98, 97],
          match: 999
        }));
        checkEqual(96, matchSomeValue({
          value: 96,
          compareArray: [99, 98, 97],
          match: 999
        }));
        checkEqual(999, matchSomeValue(99, {
          compareArray: [99, 98, 97],
          match: 999
        }));
        checkEqual(96, matchSomeValue(96, {
          compareArray: [99, 98, 97],
          match: 999
        }));
        checkEqual(999, matchSomeValue(99, [99, 98, 97], {
          match: 999
        }));
        checkEqual(96, matchSomeValue(96, [99, 98, 97], {
          match: 999
        }));
      });
    };

    var test_allMatchSome = function test_allMatchSome() {
      it('test_allMatchSome', function () {
        checkEqual(true, allMatchSome([10, 20, 30], [function (value) {
          return value > 5;
        }]));
        checkEqual(false, allMatchSome([10, 20, 30], [function (value) {
          return value > 15;
        }]));
        checkEqual(true, allMatchSome([null, undefined], [null, undefined]));
        checkEqual(false, allMatchSome([null, undefined], [null]));
        checkEqual(true, allMatchSome([null, undefined], [isNull, isUndefined]));
        checkEqual(false, allMatchSome([null, undefined], [isNull]));
        checkEqual(false, allMatchSome([null, undefined, NaN], [null, undefined]));
        checkEqual(false, allMatchSome([null, undefined, NaN], [null, undefined, NaN]));
        checkEqual(true, allMatchSome([null, undefined, NaN], [null, undefined, isNaNStrict])); // object parameter

        checkEqual(true, allMatchSome({
          valueArray: [10, 30, 40],
          compareArray: [function (v) {
            return v < 15;
          }, function (v) {
            return 25 < v;
          }]
        }));
        checkEqual(false, allMatchSome({
          valueArray: [10, 20, 30],
          compareArray: [function (v) {
            return v < 15;
          }, function (v) {
            return 25 < v;
          }]
        }));
        checkEqual(true, allMatchSome([10, 30, 40], {
          compareArray: [function (v) {
            return v < 15;
          }, function (v) {
            return 25 < v;
          }]
        }));
        checkEqual(false, allMatchSome([10, 20, 30], {
          compareArray: [function (v) {
            return v < 15;
          }, function (v) {
            return 25 < v;
          }]
        })); // exception

        checkEqual(false, isThrown(function () {
          allMatchSome([10], [function (value) {
            return value > 15;
          }]);
        }));
        checkEqual(true, isThrown(function () {
          allMatchSome(10, [function (value) {
            return value > 15;
          }]);
        }));
      });
    };

    var test_someMatchSome = function test_someMatchSome() {
      it('test_someMatchSome', function () {
        checkEqual(true, someMatchSome([10, 20, 30], [function (value) {
          return value > 5;
        }]), 'test_matchSome');
        checkEqual(true, someMatchSome([10, 20, 30], [function (value) {
          return value > 25;
        }]));
        checkEqual(false, someMatchSome([10, 20, 30], [function (value) {
          return value > 35;
        }]));
        checkEqual(true, someMatchSome([null, undefined], [null, undefined]));
        checkEqual(true, someMatchSome([null, undefined], [null]));
        checkEqual(true, someMatchSome([null, undefined], [isNull, isUndefined]));
        checkEqual(true, someMatchSome([null, undefined], [isNull]));
        checkEqual(true, someMatchSome([null, undefined, NaN], [null, undefined]));
        checkEqual(true, someMatchSome([null, undefined, NaN], [null, undefined, NaN]));
        checkEqual(true, someMatchSome([null, undefined, NaN], [null, undefined, isNaNStrict]));
        checkEqual(false, someMatchSome([null, undefined, NaN], [NaN]));
        checkEqual(true, someMatchSome([null, undefined, NaN], [isNaNStrict])); // object parameter

        checkEqual(true, someMatchSome({
          valueArray: [10, 20, 30],
          compareArray: [function (v) {
            return v < 5;
          }, function (v) {
            return 25 < v;
          }]
        }));
        checkEqual(false, someMatchSome({
          valueArray: [10, 20, 25],
          compareArray: [function (v) {
            return v < 5;
          }, function (v) {
            return 25 < v;
          }]
        }));
        checkEqual(true, someMatchSome([10, 20, 30], {
          compareArray: [function (v) {
            return v < 5;
          }, function (v) {
            return 25 < v;
          }]
        }));
        checkEqual(false, someMatchSome([10, 20, 25], {
          compareArray: [function (v) {
            return v < 5;
          }, function (v) {
            return 25 < v;
          }]
        })); // exception

        checkEqual(false, isThrown(function () {
          someMatchSome([10], [function (value) {
            return value > 15;
          }]);
        }));
        checkEqual(true, isThrown(function () {
          someMatchSome(10, [function (value) {
            return value > 15;
          }]);
        }));
      });
    };

    var test_indexOfMatchSome = function test_indexOfMatchSome() {
      it('test_indexOfMatchSome', function () {
        checkEqual(0, indexOfMatchSome([10, 20, 30], [function (value) {
          return value > 5;
        }]), 'test_matchSomeIndex');
        checkEqual(2, indexOfMatchSome([10, 20, 30], [function (value) {
          return value > 25;
        }]));
        checkEqual(-1, indexOfMatchSome([10, 20, 30], [function (value) {
          return value > 35;
        }]));
        checkEqual(0, indexOfMatchSome([null, undefined], [null, undefined]));
        checkEqual(1, indexOfMatchSome([null, undefined], [undefined]));
        checkEqual(0, indexOfMatchSome([null, undefined], [isNull, isUndefined]));
        checkEqual(1, indexOfMatchSome([null, undefined], [isUndefined]));
        checkEqual(0, indexOfMatchSome([null, undefined, NaN], [null, undefined]));
        checkEqual(0, indexOfMatchSome([null, undefined, NaN], [null, undefined, NaN]));
        checkEqual(0, indexOfMatchSome([null, undefined, NaN], [null, undefined, isNaNStrict]));
        checkEqual(-1, indexOfMatchSome([null, undefined, NaN], [NaN]));
        checkEqual(2, indexOfMatchSome([null, undefined, NaN], [isNaNStrict]));
        checkEqual(false, isThrown(function () {
          indexOfMatchSome([10], [function (value) {
            return value > 15;
          }]);
        }));
        checkEqual(true, isThrown(function () {
          indexOfMatchSome(10, [function (value) {
            return value > 15;
          }]);
        })); // object parameter

        checkEqual(2, indexOfMatchSome({
          valueArray: [10, 20, 30],
          compareArray: [function (v) {
            return v < 5;
          }, function (v) {
            return 25 < v;
          }]
        }));
        checkEqual(0, indexOfMatchSome({
          valueArray: [1, 10, 20],
          compareArray: [function (v) {
            return v < 5;
          }, function (v) {
            return 25 < v;
          }]
        }));
        checkEqual(-1, indexOfMatchSome({
          valueArray: [5, 10, 20],
          compareArray: [function (v) {
            return v < 5;
          }, function (v) {
            return 25 < v;
          }]
        }));
        checkEqual(2, indexOfMatchSome([10, 20, 30], {
          compareArray: [function (v) {
            return v < 5;
          }, function (v) {
            return 25 < v;
          }]
        }));
        checkEqual(0, indexOfMatchSome([1, 10, 20], {
          compareArray: [function (v) {
            return v < 5;
          }, function (v) {
            return 25 < v;
          }]
        }));
        checkEqual(-1, indexOfMatchSome([5, 10, 20], {
          compareArray: [function (v) {
            return v < 5;
          }, function (v) {
            return 25 < v;
          }]
        }));
      });
    };

    var test_matchAll = function test_matchAll() {
      it('test_matchAll', function () {
        // normal args string
        checkEqual(false, matchAll('abc', []));
        checkEqual(true, matchAll('abc', ['abc']));
        checkEqual(false, matchAll('abc', ['abc', 'def']));
        checkEqual(false, matchAll('abc', ['abc', undefined]));
        checkEqual(false, matchAll('abc', ['abc', null]));
        checkEqual(false, matchAll('abc', ['abc', '']));
        checkEqual(true, matchAll('abc', [/^a/]));
        checkEqual(true, matchAll('abc', [/c$/]));
        checkEqual(true, matchAll('abc', [/^a/, /c$/]));
        checkEqual(true, matchAll('abc', [/^a/, /.*b.*/, /c$/]));
        checkEqual(false, matchAll('abc', [/^a/, /^b.*/, /c$/]));
        checkEqual(true, matchAll('aabbcc', [/^a/, /.*b.*/, /c$/]));
        checkEqual(true, matchAll('abc', [/^a/, /.*b.*/, /c$/, function (value) {
          return value.length >= 3;
        }, function (value) {
          return value.length <= 5;
        }]));
        checkEqual(true, matchAll('aabcc', [/^a/, /.*b.*/, /c$/, function (value) {
          return value.length >= 3;
        }, function (value) {
          return value.length <= 5;
        }]));
        checkEqual(false, matchAll('aabbcc', [/^a/, /.*b.*/, /c$/, function (value) {
          return value.length >= 3;
        }, function (value) {
          return value.length <= 5;
        }])); // normal args number

        checkEqual(false, matchAll(100, []));
        checkEqual(true, matchAll(100, [100]));
        checkEqual(false, matchAll(100, [100, 0]));
        checkEqual(false, matchAll(100, [100, undefined]));
        checkEqual(false, matchAll(100, [100, null]));
        checkEqual(false, matchAll(100, [100, NaN]));
        checkEqual(true, matchAll(100, [function (value) {
          return value >= 100;
        }, function (value) {
          return value <= 110;
        }]));
        checkEqual(true, matchAll(110, [function (value) {
          return value >= 100;
        }, function (value) {
          return value <= 110;
        }]));
        checkEqual(false, matchAll(111, [function (value) {
          return value >= 100;
        }, function (value) {
          return value <= 110;
        }]));
        checkEqual(true, matchAll(null, [null]));
        checkEqual(false, matchAll(null, [null, undefined]));
        checkEqual(false, matchAll(null, [undefined]));
        checkEqual(false, matchAll(undefined, [null]));
        checkEqual(false, matchAll(undefined, [null, undefined]));
        checkEqual(true, matchAll(undefined, [undefined])); // exception

        checkEqual(false, isThrownException(function () {
          matchAll('123', ['123']);
        }, new TypeError().name));
        checkEqual(true, isThrownException(function () {
          matchAll('123', '123');
        }, new TypeError().name));
        checkEqual(false, isThrownException(function () {
          matchAll(123, [123]);
        }, new TypeError().name));
        checkEqual(true, isThrownException(function () {
          matchAll(123, 123);
        }, new TypeError().name)); // Object Named Parameter string

        checkEqual(true, matchAll({
          value: 'abc',
          compareArray: ['abc']
        }));
        checkEqual(false, matchAll({
          value: 'abc',
          compareArray: ['abc', '']
        }));
        checkEqual(true, matchAll({
          value: 'abc',
          compareArray: [/^a/, /.*b.*/, /c$/]
        }));
        checkEqual(true, matchAll('abc', {
          compareArray: ['abc']
        }));
        checkEqual(false, matchAll('abc', {
          compareArray: ['abc', '']
        })); // Object Named Parameter number

        checkEqual(true, matchAll({
          value: 100,
          compareArray: [10 * 10]
        }));
        checkEqual(false, matchAll({
          value: 100,
          compareArray: [100, 101]
        }));
        checkEqual(true, matchAll({
          value: 100,
          compareArray: [function (v) {
            return 100 <= v;
          }, function (v) {
            return v <= 110;
          }]
        }));
        checkEqual(true, matchAll(100, {
          compareArray: [function (v) {
            return 100 <= v;
          }, function (v) {
            return v <= 110;
          }]
        }));
        checkEqual(false, matchAll(111, {
          compareArray: [function (v) {
            return 100 <= v;
          }, function (v) {
            return v <= 110;
          }]
        })); // exception

        checkEqual(false, isThrown(function () {
          matchAll({
            value: 'abc',
            compareArray: ['abc']
          });
        }));
        checkEqual(true, isThrown(function () {
          matchAll({
            value: 'abc',
            compareArray: 'abc'
          });
        }));
        checkEqual(false, isThrown(function () {
          matchAll({
            value: 100,
            compareArray: [function (value) {
              return value >= 100;
            }, function (value) {
              return value <= 110;
            }]
          });
        }));
        checkEqual(true, isThrown(function () {
          matchAll({
            value: 100,
            compareArray: [function (value) {
              return value;
            }, function (value) {
              return value <= 110;
            }]
          });
        }));
      });
    };

    var test_matchAllValue = function test_matchAllValue() {
      it('test_matchAllValue', function () {
        checkEqual(999, matchAllValue(99, [99], 999));
        checkEqual(98, matchAllValue(98, [99], 999));
        checkEqual(999, matchAllValue(100, [function (v) {
          return 100 <= v;
        }, function (v) {
          return v <= 110;
        }], 999));
        checkEqual(999, matchAllValue(110, [function (v) {
          return 100 <= v;
        }, function (v) {
          return v <= 110;
        }], 999));
        checkEqual(111, matchAllValue(111, [function (v) {
          return 100 <= v;
        }, function (v) {
          return v <= 110;
        }], 999)); // Object Parameter

        checkEqual(999, matchAllValue({
          value: 100,
          compareArray: [function (v) {
            return 100 <= v;
          }, function (v) {
            return v <= 110;
          }],
          match: 999,
          unmatch: 888
        }));
        checkEqual(999, matchAllValue({
          value: 110,
          compareArray: [function (v) {
            return 100 <= v;
          }, function (v) {
            return v <= 110;
          }],
          match: 999,
          unmatch: 888
        }));
        checkEqual(888, matchAllValue({
          value: 111,
          compareArray: [function (v) {
            return 100 <= v;
          }, function (v) {
            return v <= 110;
          }],
          match: 999,
          unmatch: 888
        }));
        checkEqual(999, matchAllValue(100, {
          compareArray: [function (v) {
            return 100 <= v;
          }, function (v) {
            return v <= 110;
          }],
          match: 999,
          unmatch: 888
        }));
        checkEqual(999, matchAllValue(110, {
          compareArray: [function (v) {
            return 100 <= v;
          }, function (v) {
            return v <= 110;
          }],
          match: 999,
          unmatch: 888
        }));
        checkEqual(888, matchAllValue(111, {
          compareArray: [function (v) {
            return 100 <= v;
          }, function (v) {
            return v <= 110;
          }],
          match: 999,
          unmatch: 888
        }));
        checkEqual(999, matchAllValue(100, [function (v) {
          return 100 <= v;
        }, function (v) {
          return v <= 110;
        }], {
          match: 999,
          unmatch: 888
        }));
        checkEqual(999, matchAllValue(110, [function (v) {
          return 100 <= v;
        }, function (v) {
          return v <= 110;
        }], {
          match: 999,
          unmatch: 888
        }));
        checkEqual(888, matchAllValue(111, [function (v) {
          return 100 <= v;
        }, function (v) {
          return v <= 110;
        }], {
          match: 999,
          unmatch: 888
        }));
        checkEqual(999, matchAllValue(100, [function (v) {
          return 100 <= v;
        }, function (v) {
          return v <= 110;
        }], 999, {
          unmatch: 888
        }));
        checkEqual(999, matchAllValue(110, [function (v) {
          return 100 <= v;
        }, function (v) {
          return v <= 110;
        }], 999, {
          unmatch: 888
        }));
        checkEqual(888, matchAllValue(111, [function (v) {
          return 100 <= v;
        }, function (v) {
          return v <= 110;
        }], 999, {
          unmatch: 888
        }));
        checkEqual(999, matchAllValue({
          value: 100,
          compareArray: [function (v) {
            return 100 <= v;
          }, function (v) {
            return v <= 110;
          }],
          match: 999
        }));
        checkEqual(999, matchAllValue({
          value: 110,
          compareArray: [function (v) {
            return 100 <= v;
          }, function (v) {
            return v <= 110;
          }],
          match: 999
        }));
        checkEqual(111, matchAllValue({
          value: 111,
          compareArray: [function (v) {
            return 100 <= v;
          }, function (v) {
            return v <= 110;
          }],
          match: 999
        }));
        checkEqual(999, matchAllValue(100, {
          compareArray: [function (v) {
            return 100 <= v;
          }, function (v) {
            return v <= 110;
          }],
          match: 999
        }));
        checkEqual(999, matchAllValue(110, {
          compareArray: [function (v) {
            return 100 <= v;
          }, function (v) {
            return v <= 110;
          }],
          match: 999
        }));
        checkEqual(111, matchAllValue(111, {
          compareArray: [function (v) {
            return 100 <= v;
          }, function (v) {
            return v <= 110;
          }],
          match: 999
        }));
        checkEqual(999, matchAllValue(100, [function (v) {
          return 100 <= v;
        }, function (v) {
          return v <= 110;
        }], {
          match: 999
        }));
        checkEqual(999, matchAllValue(110, [function (v) {
          return 100 <= v;
        }, function (v) {
          return v <= 110;
        }], {
          match: 999
        }));
        checkEqual(111, matchAllValue(111, [function (v) {
          return 100 <= v;
        }, function (v) {
          return v <= 110;
        }], {
          match: 999
        }));
      });
    };

    var test_allMatchAll = function test_allMatchAll() {
      it('test_allMatchAll', function () {
        checkEqual(false, allMatchAll([], [/^a/, /.*b.*/, /c$/]));
        checkEqual(true, allMatchAll(['abc', 'aabc', 'aabbcc'], [/^a/, /.*b.*/, /c$/]));
        checkEqual(false, allMatchAll(['abc', 'aabc', 'aacc'], [/^a/, /.*b.*/, /c$/]));
        checkEqual(true, allMatchAll([100, 105, 110], [function (v) {
          return 100 <= v;
        }, function (v) {
          return v <= 110;
        }]));
        checkEqual(false, allMatchAll([100, 105, 111], [function (v) {
          return 100 <= v;
        }, function (v) {
          return v <= 110;
        }])); // object parameter

        checkEqual(true, allMatchAll({
          valueArray: [100, 105, 110],
          compareArray: [function (v) {
            return 100 <= v;
          }, function (v) {
            return v <= 110;
          }]
        }));
        checkEqual(false, allMatchAll({
          valueArray: [100, 105, 111],
          compareArray: [function (v) {
            return 100 <= v;
          }, function (v) {
            return v <= 110;
          }]
        }));
        checkEqual(true, allMatchAll([100, 105, 110], {
          compareArray: [function (v) {
            return 100 <= v;
          }, function (v) {
            return v <= 110;
          }]
        }));
        checkEqual(false, allMatchAll([100, 105, 111], {
          compareArray: [function (v) {
            return 100 <= v;
          }, function (v) {
            return v <= 110;
          }]
        }));
      });
    };

    var test_someMatchAll = function test_someMatchAll() {
      it('test_someMatchAll', function () {
        checkEqual(false, someMatchAll([], [/^a/, /.*b.*/, /c$/]));
        checkEqual(true, someMatchAll(['abc'], [/^a/, /.*b.*/, /c$/]));
        checkEqual(false, someMatchAll(['aaa', 'bbb', 'ccc'], [/^a/, /.*b.*/, /c$/]));
        checkEqual(true, someMatchAll(['aaa', 'abc', 'ccc'], [/^a/, /.*b.*/, /c$/]));
        checkEqual(true, someMatchAll([111, 110, 120], [function (v) {
          return 100 <= v;
        }, function (v) {
          return v <= 110;
        }]));
        checkEqual(false, someMatchAll([111, 115, 120], [function (v) {
          return 100 <= v;
        }, function (v) {
          return v <= 110;
        }])); // object parameter

        checkEqual(true, someMatchAll({
          valueArray: [111, 110, 120],
          compareArray: [function (v) {
            return 100 <= v;
          }, function (v) {
            return v <= 110;
          }]
        }));
        checkEqual(false, someMatchAll({
          valueArray: [111, 115, 120],
          compareArray: [function (v) {
            return 100 <= v;
          }, function (v) {
            return v <= 110;
          }]
        }));
        checkEqual(true, someMatchAll([111, 110, 120], {
          compareArray: [function (v) {
            return 100 <= v;
          }, function (v) {
            return v <= 110;
          }]
        }));
        checkEqual(false, someMatchAll([111, 115, 120], {
          compareArray: [function (v) {
            return 100 <= v;
          }, function (v) {
            return v <= 110;
          }]
        }));
      });
    };

    var test_indexOfMatchAll = function test_indexOfMatchAll() {
      it('test_indexOfMatchAll', function () {
        checkEqual(-1, indexOfMatchAll([], [/^a/, /.*b.*/, /c$/]));
        checkEqual(0, indexOfMatchAll(['abc'], [/^a/, /.*b.*/, /c$/]));
        checkEqual(-1, indexOfMatchAll(['aaa', 'bbb', 'ccc'], [/^a/, /.*b.*/, /c$/]));
        checkEqual(1, indexOfMatchAll(['aaa', 'abc', 'ccc'], [/^a/, /.*b.*/, /c$/]));
        checkEqual(0, indexOfMatchAll([105], [function (v) {
          return 100 <= v;
        }, function (v) {
          return v <= 110;
        }]));
        checkEqual(-1, indexOfMatchAll([111, 115, 120], [function (v) {
          return 100 <= v;
        }, function (v) {
          return v <= 110;
        }]));
        checkEqual(1, indexOfMatchAll([111, 110, 120], [function (v) {
          return 100 <= v;
        }, function (v) {
          return v <= 110;
        }])); // object parameter

        checkEqual(0, indexOfMatchAll({
          valueArray: [10, 20, 30],
          compareArray: [function (v) {
            return 10 <= v;
          }, function (v) {
            return v <= 30;
          }]
        }));
        checkEqual(1, indexOfMatchAll({
          valueArray: [1, 10, 20],
          compareArray: [function (v) {
            return 10 <= v;
          }, function (v) {
            return v <= 30;
          }]
        }));
        checkEqual(-1, indexOfMatchAll({
          valueArray: [5, 40, 50],
          compareArray: [function (v) {
            return 10 <= v;
          }, function (v) {
            return v <= 30;
          }]
        }));
        checkEqual(0, indexOfMatchAll([10, 20, 30], {
          compareArray: [function (v) {
            return 10 <= v;
          }, function (v) {
            return v <= 30;
          }]
        }));
        checkEqual(1, indexOfMatchAll([1, 10, 20], {
          compareArray: [function (v) {
            return 10 <= v;
          }, function (v) {
            return v <= 30;
          }]
        }));
        checkEqual(-1, indexOfMatchAll([5, 40, 50], {
          compareArray: [function (v) {
            return 10 <= v;
          }, function (v) {
            return v <= 30;
          }]
        }));
      });
    };

    var test_includes = function test_includes() {
      it('test_includes', function () {
        if (!parts.platform.isWindowsScriptHost() && !parts.platform.isInternetExplorer()) {
          checkEqual(true, 'abc'.includes('a')); // string.includes strange empty string

          checkEqual(true, 'abc'.includes(''));
          checkEqual(false, 'abc'.includes(null));
          checkEqual(false, 'abc'.includes(undefined));
          checkEqual(false, 'abc'.includes());
        }

        checkEqual(false, includes('abc', ''));
        checkEqual(true, includes('abc', 'a'));
        checkEqual(true, includes('abc', 'b'));
        checkEqual(false, includes('abc', 'd'));
        checkEqual(false, includes('', ''));
        checkEqual(false, includes('', 'a'));
        checkEqual(false, includes([], null));
        checkEqual(false, includes([], undefined));
        checkEqual(false, includes([], []));
        checkEqual(true, includes([0, 1, 2], 0));
        checkEqual(false, includes([0, 1, 2], 4));
        checkEqual(false, includes([0, 1, 2], []));
        checkEqual(false, includes({
          value: 'abc',
          compare: ''
        }));
        checkEqual(true, includes({
          value: 'abc',
          compare: 'c'
        }));
        checkEqual(false, includes({
          value: [],
          compare: null
        }));
        checkEqual(true, includes({
          value: [0, 1],
          compare: 0
        }));
      });
    };

    var test_includesSome = function test_includesSome() {
      it('test_includesSome', function () {
        checkEqual(false, includesSome('abc', ['']));
        checkEqual(true, includesSome('abc', ['', 'a']));
        checkEqual(false, includesSome('abc', ['', 'd']));
        checkEqual(true, includesSome('abc', ['a']));
        checkEqual(true, includesSome('abc', ['b']));
        checkEqual(false, includesSome('abc', ['d']));
        checkEqual(true, includesSome('abc', ['d', 'a']));
        checkEqual(true, includesSome('abc', ['a', 'd']));
        checkEqual(false, includesSome('abc', ['e', 'd']));
        checkEqual(false, includesSome([], [null]));
        checkEqual(false, includesSome([], [undefined]));
        checkEqual(false, includesSome([], []));
        checkEqual(false, includesSome([0, 1, 2], []));
        checkEqual(true, includesSome([0, 1, 2], [0]));
        checkEqual(false, includesSome([0, 1, 2], [4]));
        checkEqual(true, includesSome([0, 1, 2], [0, 4]));
        checkEqual(true, includesSome([0, 1, 2], [0, 1]));
        checkEqual(false, includesSome([0, 1, 2], [4, 5]));
        checkEqual(false, includesSome({
          value: 'abc',
          compareArray: ['']
        }));
        checkEqual(true, includesSome({
          value: 'abc',
          compareArray: ['c']
        }));
        checkEqual(false, includesSome({
          value: [],
          compareArray: [null]
        }));
        checkEqual(true, includesSome({
          value: [0, 1],
          compareArray: [0]
        })); // exception

        checkEqual(false, isThrown(function () {
          includesSome('abc', ['a']);
        }));
        checkEqual(true, isThrown(function () {
          includesSome('abc', 'a');
        }));
        checkEqual(false, isThrownException(function () {
          includesSome('123', ['1']);
        }, new TypeError().name));
        checkEqual(true, isThrownException(function () {
          includesSome('123', [1]);
        }, new TypeError().name));
        checkEqual(false, isThrown(function () {
          includesSome([0, 1, 2], [0, 10]);
        }));
        checkEqual(true, isThrown(function () {
          includesSome([0, 1, 2], 0);
        }));
        checkEqual(true, isThrown(function () {
          includesSome(0, [0, 10]);
        }));
        checkEqual(false, isThrown(function () {
          includesSome({
            value: 'abc',
            compareArray: ['a']
          });
        }));
        checkEqual(true, isThrown(function () {
          includesSome({
            value: 'abc',
            compareArray: 'a'
          });
        }));
        checkEqual(true, isThrown(function () {
          includesSome({
            value: 'abc',
            compareArray: [1]
          });
        }));
        checkEqual(false, isThrown(function () {
          includesSome({
            value: [0, 1, 2],
            compareArray: [0, 10]
          });
        }));
        checkEqual(true, isThrown(function () {
          includesSome({
            value: [0, 1, 2],
            compareArray: 0
          });
        }));
        checkEqual(true, isThrown(function () {
          includesSome({
            value: 0,
            compareArray: [0, 10]
          });
        }));
      });
    };

    var test_includesAll = function test_includesAll() {
      it('test_includesAll', function () {
        checkEqual(false, includesAll('abc', ['']));
        checkEqual(false, includesAll('abc', ['', 'a']));
        checkEqual(false, includesAll('abc', ['', 'd']));
        checkEqual(true, includesAll('abc', ['a']));
        checkEqual(true, includesAll('abc', ['b']));
        checkEqual(false, includesAll('abc', ['d']));
        checkEqual(false, includesAll('abc', ['d', 'a']));
        checkEqual(false, includesAll('abc', ['a', 'd']));
        checkEqual(false, includesAll('abc', ['e', 'd']));
        checkEqual(true, includesAll('abc', ['c', 'a']));
        checkEqual(false, includesAll([], [null]));
        checkEqual(false, includesAll([], [undefined]));
        checkEqual(false, includesAll([], []));
        checkEqual(false, includesAll([0, 1, 2], []));
        checkEqual(true, includesAll([0, 1, 2], [0]));
        checkEqual(false, includesAll([0, 1, 2], [4]));
        checkEqual(false, includesAll([0, 1, 2], [0, 4]));
        checkEqual(true, includesAll([0, 1, 2], [0, 1]));
        checkEqual(false, includesAll([0, 1, 2], [4, 5]));
        checkEqual(false, includesAll({
          value: 'abc',
          compareArray: ['']
        }));
        checkEqual(true, includesAll({
          value: 'abc',
          compareArray: ['c']
        }));
        checkEqual(false, includesAll({
          value: [],
          compareArray: [null]
        }));
        checkEqual(true, includesAll({
          value: [0, 1],
          compareArray: [0]
        })); // exception

        checkEqual(false, isThrown(function () {
          includesAll('abc', ['a']);
        }));
        checkEqual(true, isThrown(function () {
          includesAll('abc', 'a');
        }));
        checkEqual(false, isThrown(function () {
          includesAll([0, 1, 2], [0, 10]);
        }));
        checkEqual(true, isThrown(function () {
          includesAll([0, 1, 2], 0);
        }));
        checkEqual(true, isThrown(function () {
          includesAll(0, [0, 10]);
        }));
        checkEqual(false, isThrown(function () {
          includesAll({
            value: 'abc',
            compareArray: ['a']
          });
        }));
        checkEqual(true, isThrown(function () {
          includesAll({
            value: 'abc',
            compareArray: 'a'
          });
        }));
        checkEqual(false, isThrown(function () {
          includesAll({
            value: [0, 1, 2],
            compareArray: [0, 10]
          });
        }));
        checkEqual(true, isThrown(function () {
          includesAll({
            value: [0, 1, 2],
            compareArray: 0
          });
        }));
        checkEqual(true, isThrown(function () {
          includesAll({
            value: 0,
            compareArray: [0, 10]
          });
        }));
      });
    };

    test_equal();
    test_equal_object();
    test_equal_array();
    test_equal_date();
    test_equal_regexp();
    test_equal_map();
    test_equal_set();
    test_equalDeep();
    test_equalDeep_object();
    test_equalDeep_object_array_mix();
    test_equalDeep_object_CircularReference();
    test_equalDeep_array();
    test_equalDeep_array_CircularReference();
    test_equalDeep_date();
    test_equalDeep_regexp();
    test_equalDeep_map();
    test_equalDeep_map_object_array();
    test_equalDeep_map_CircularReference();
    test_equalDeep_set();
    test_equalDeep_set_object_array();
    test_equalDeep_set_CircularReference();
    test_or();
    test_match();
    test_matchValue();
    test_initialValue();
    test_allMatch();
    test_someMatch();
    test_indexOfMatch();
    test_matchSome();
    test_matchSomeValue();
    test_allMatchSome();
    test_someMatchSome();
    test_indexOfMatchSome();
    test_matchAll();
    test_matchAllValue();
    test_allMatchAll();
    test_someMatchAll();
    test_indexOfMatchAll();
    test_includes();
    test_includesSome();
    test_includesAll();
  });
};

exports.test_execute_compare = test_execute_compare;
var _default = {
  test_execute_compare: test_execute_compare
};
exports["default"] = _default;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.test_execute_convert = void 0;

/* eslint-disable no-var */
var test_execute_convert = function test_execute_convert(parts) {
  var _parts$test = parts.test,
      checkEqual = _parts$test.checkEqual,
      describe = _parts$test.describe,
      it = _parts$test.it,
      test = _parts$test.test;
  describe('test_execute_convert', function () {
    var _parts$test2 = parts.test,
        checkEqual = _parts$test2.checkEqual,
        isThrown = _parts$test2.isThrown,
        isThrownException = _parts$test2.isThrownException,
        testCounter = _parts$test2.testCounter;
    var _parts$convert = parts.convert,
        numberToString = _parts$convert.numberToString,
        valueToString = _parts$convert.valueToString,
        stringToNumber = _parts$convert.stringToNumber,
        stringToNumberDefault = _parts$convert.stringToNumberDefault,
        stringToInteger = _parts$convert.stringToInteger,
        stringToIntegerDefault = _parts$convert.stringToIntegerDefault,
        valueToNumber = _parts$convert.valueToNumber,
        valueToNumberDefault = _parts$convert.valueToNumberDefault,
        valueToInteger = _parts$convert.valueToInteger,
        valueToIntegerDefault = _parts$convert.valueToIntegerDefault;

    var test_StringCast_standard = function test_StringCast_standard() {
      it('test_standardStringCast', function () {
        // Positive number
        checkEqual('32', String(32));
        checkEqual('31.5', String(31.5));
        checkEqual('255', String(255));
        checkEqual('11', String(11));
        checkEqual('255', String(0xFF));
        checkEqual('16', String(16));
        checkEqual('100000', String(1e+5));
        checkEqual('0.00001', String(1e-5));
        checkEqual('255', String(+0xFF));
        checkEqual('16', String(+16));
        checkEqual('100000', String(+1e+5));
        checkEqual('0.00001', String(+1e-5)); // Negative number

        checkEqual('-32', String(-32));
        checkEqual('-31.5', String(-31.5));
        checkEqual('-255', String(-255));
        checkEqual('-11', String(-11));
        checkEqual('-255', String(-0xFF));
        checkEqual('-16', String(-16));
        checkEqual('-100000', String(-1e+5));
        checkEqual('-0.00001', String(-1e-5)); // spacial number value

        checkEqual('NaN', String(NaN));
        checkEqual('Infinity', String(Infinity));
        checkEqual('-Infinity', String(-Infinity)); // other type

        checkEqual('null', String(null));
        checkEqual('undefined', String(undefined));
        checkEqual('[object Object]', String({}));
        checkEqual('', String([]));
        checkEqual('1', String([1]));
        checkEqual('1,2,3', String([1, 2, 3]));
        checkEqual('', String(''));
        checkEqual('a', String('a'));
        checkEqual('true', String(true));
        checkEqual('false', String(false));
      });
    };

    var test_toString_standard = function test_toString_standard() {
      it('test_standardToString', function () {
        // Positive number
        checkEqual('32', 32 .toString());
        checkEqual('31.5', 31.5.toString());
        checkEqual('255', 255 .toString());
        checkEqual('11', 11 .toString());
        checkEqual('255', 0xFF.toString());
        checkEqual('16', 16 .toString());
        checkEqual('100000', 1e+5.toString());
        checkEqual('0.00001', 1e-5.toString());
        checkEqual('255', (+0xFF).toString());
        checkEqual('16', (+16).toString());
        checkEqual('100000', (+1e+5).toString());
        checkEqual('0.00001', (+1e-5).toString()); // Negative number

        checkEqual('-32', (-32).toString());
        checkEqual('-31.5', (-31.5).toString());
        checkEqual('-255', (-255).toString());
        checkEqual('-11', (-11).toString());
        checkEqual('-255', (-0xFF).toString());
        checkEqual('-16', (-16).toString());
        checkEqual('-100000', (-1e+5).toString());
        checkEqual('-0.00001', (-1e-5).toString()); // spacial number value

        checkEqual('NaN', NaN.toString());
        checkEqual('Infinity', Infinity.toString());
        checkEqual('-Infinity', (-Infinity).toString());
        checkEqual(-Infinity, -Infinity.toString());
        checkEqual(-Infinity, -Infinity.toString());
        checkEqual(-Infinity, -'Infinity'); // Decimal number other

        checkEqual('1010.01', 10.25.toString(2));
        checkEqual('22.1', 10.25.toString(4));
        checkEqual('12.2', 10.25.toString(8));
        checkEqual('a.4', 10.25.toString(16)); // other type

        checkEqual(true, isThrown(function () {
          return null.toString();
        }));
        checkEqual(true, isThrown(function () {
          return undefined.toString();
        }));
        checkEqual('[object Object]', {}.toString());
        checkEqual('', [].toString());
        checkEqual('1', [1].toString());
        checkEqual('1,2,3', [1, 2, 3].toString());
        checkEqual('', ''.toString());
        checkEqual('a', 'a'.toString());
        checkEqual('true', true.toString());
        checkEqual('false', false.toString());
      });
    };

    var test_numberToString = function test_numberToString() {
      it('test_numberToString', function () {
        // Positive number
        checkEqual('32', numberToString(32));
        checkEqual('32.5', numberToString(32.5));
        checkEqual('32', numberToString(32, 10));
        checkEqual('31.5', numberToString(31.5, 10));
        checkEqual('100000', numberToString(32, 2));
        checkEqual('11111', numberToString(31, 2));
        checkEqual('11111.1', numberToString(31.5, 2));
        checkEqual('11111.01', numberToString(31.25, 2));
        checkEqual('40', numberToString(32, 8));
        checkEqual('37', numberToString(31, 8));
        checkEqual('37.4', numberToString(31.5, 8));
        checkEqual('20', numberToString(32, 16));
        checkEqual('1f', numberToString(31, 16));
        checkEqual('1f.8', numberToString(31.5, 16));
        checkEqual('44', numberToString(32, 7));
        checkEqual('43', numberToString(31, 7));
        checkEqual('255', numberToString(255));
        checkEqual('11', numberToString(11));
        checkEqual('255', numberToString(0xFF));
        checkEqual('16', numberToString(16));
        checkEqual('ff', numberToString(255, 16));
        checkEqual('b', numberToString(11, 16));
        checkEqual('177', numberToString(127, 8));
        checkEqual('12', numberToString(10, 8));
        checkEqual('11', numberToString(3, 2));
        checkEqual('1111', numberToString(15, 2)); // Negative number

        checkEqual('-32', numberToString(-32));
        checkEqual('-32.5', numberToString(-32.5));
        checkEqual('-32', numberToString(-32, 10));
        checkEqual('-31.5', numberToString(-31.5, 10));
        checkEqual('-100000', numberToString(-32, 2));
        checkEqual('-11111', numberToString(-31, 2));
        checkEqual('-11111.1', numberToString(-31.5, 2));
        checkEqual('-11111.01', numberToString(-31.25, 2));
        checkEqual('-40', numberToString(-32, 8));
        checkEqual('-37', numberToString(-31, 8));
        checkEqual('-37.4', numberToString(-31.5, 8));
        checkEqual('-20', numberToString(-32, 16));
        checkEqual('-1f', numberToString(-31, 16));
        checkEqual('-1f.8', numberToString(-31.5, 16));
        checkEqual('-44', numberToString(-32, 7));
        checkEqual('-43', numberToString(-31, 7));
        checkEqual('-255', numberToString(-255));
        checkEqual('-11', numberToString(-11));
        checkEqual('-255', numberToString(-0xFF));
        checkEqual('-16', numberToString(-16));
        checkEqual('-ff', numberToString(-255, 16));
        checkEqual('-b', numberToString(-11, 16));
        checkEqual('-177', numberToString(-127, 8));
        checkEqual('-12', numberToString(-10, 8));
        checkEqual('-11', numberToString(-3, 2));
        checkEqual('-1111', numberToString(-15, 2)); // spacial value

        checkEqual(true, isThrown(function () {
          return numberToString(NaN);
        }));
        checkEqual(true, isThrown(function () {
          return numberToString(Infinity);
        }));
        checkEqual(true, isThrown(function () {
          return numberToString(-Infinity);
        })); // Exception

        checkEqual(true, isThrown(function () {
          return numberToString('123', 10);
        }));
        checkEqual(false, isThrown(function () {
          return numberToString(32, 2);
        }));
        checkEqual(true, isThrown(function () {
          return numberToString(32, 2.5);
        }));
        checkEqual(true, isThrown(function () {
          return numberToString(32, 1);
        }));
        checkEqual(false, isThrown(function () {
          return numberToString(32, 36);
        }));
        checkEqual(true, isThrown(function () {
          return numberToString(32, 37);
        })); // Object Named Parameter

        checkEqual('-32', numberToString({
          value: -32
        }));
        checkEqual('-100000', numberToString({
          value: -32,
          radix: 2
        })); // other type

        checkEqual(true, isThrown(function () {
          return numberToString(null);
        }));
        checkEqual(true, isThrown(function () {
          return numberToString(undefined);
        }));
        checkEqual(true, isThrown(function () {
          return numberToString({});
        }));
        checkEqual(true, isThrown(function () {
          return numberToString([]);
        }));
        checkEqual(true, isThrown(function () {
          return numberToString([1]);
        }));
        checkEqual(true, isThrown(function () {
          return numberToString([1, 2, 3]);
        }));
        checkEqual(true, isThrown(function () {
          return numberToString('');
        }));
        checkEqual(true, isThrown(function () {
          return numberToString('a');
        }));
        checkEqual(true, isThrown(function () {
          return numberToString(true);
        }));
        checkEqual(true, isThrown(function () {
          return numberToString(false);
        }));
      });
    };

    var test_valueToString = function test_valueToString() {
      it('test_valueToString', function () {
        // Positive number
        checkEqual('32', valueToString(32));
        checkEqual('32.5', valueToString(32.5));
        checkEqual('32', valueToString(32, 10));
        checkEqual('31.5', valueToString(31.5, 10));
        checkEqual('100000', valueToString(32, 2));
        checkEqual('11111', valueToString(31, 2));
        checkEqual('11111.1', valueToString(31.5, 2));
        checkEqual('11111.01', valueToString(31.25, 2));
        checkEqual('40', valueToString(32, 8));
        checkEqual('37', valueToString(31, 8));
        checkEqual('37.4', valueToString(31.5, 8));
        checkEqual('20', valueToString(32, 16));
        checkEqual('1f', valueToString(31, 16));
        checkEqual('1f.8', valueToString(31.5, 16));
        checkEqual('44', valueToString(32, 7));
        checkEqual('43', valueToString(31, 7));
        checkEqual('255', valueToString(255));
        checkEqual('11', valueToString(11));
        checkEqual('255', valueToString(0xFF));
        checkEqual('16', valueToString(16));
        checkEqual('ff', valueToString(255, 16));
        checkEqual('b', valueToString(11, 16));
        checkEqual('177', valueToString(127, 8));
        checkEqual('12', valueToString(10, 8));
        checkEqual('11', valueToString(3, 2));
        checkEqual('1111', valueToString(15, 2)); // Negative number

        checkEqual('-32', valueToString(-32));
        checkEqual('-32.5', valueToString(-32.5));
        checkEqual('-32', valueToString(-32, 10));
        checkEqual('-31.5', valueToString(-31.5, 10));
        checkEqual('-100000', valueToString(-32, 2));
        checkEqual('-11111', valueToString(-31, 2));
        checkEqual('-11111.1', valueToString(-31.5, 2));
        checkEqual('-11111.01', valueToString(-31.25, 2));
        checkEqual('-40', valueToString(-32, 8));
        checkEqual('-37', valueToString(-31, 8));
        checkEqual('-37.4', valueToString(-31.5, 8));
        checkEqual('-20', valueToString(-32, 16));
        checkEqual('-1f', valueToString(-31, 16));
        checkEqual('-1f.8', valueToString(-31.5, 16));
        checkEqual('-44', valueToString(-32, 7));
        checkEqual('-43', valueToString(-31, 7));
        checkEqual('-255', valueToString(-255));
        checkEqual('-11', valueToString(-11));
        checkEqual('-255', valueToString(-0xFF));
        checkEqual('-16', valueToString(-16));
        checkEqual('-ff', valueToString(-255, 16));
        checkEqual('-b', valueToString(-11, 16));
        checkEqual('-177', valueToString(-127, 8));
        checkEqual('-12', valueToString(-10, 8));
        checkEqual('-11', valueToString(-3, 2));
        checkEqual('-1111', valueToString(-15, 2)); // spacial number value

        testCounter(0);
        checkEqual('NaN', valueToString(NaN));
        checkEqual('Infinity', valueToString(Infinity));
        checkEqual('-Infinity', valueToString(-Infinity)); // Exception

        checkEqual(false, isThrown(function () {
          return valueToString('123', 10);
        }));
        checkEqual(false, isThrown(function () {
          return valueToString(32, 2);
        }));
        checkEqual(true, isThrown(function () {
          return valueToString(32, 2.5);
        }));
        checkEqual(true, isThrown(function () {
          return valueToString(32, 1);
        }));
        checkEqual(false, isThrown(function () {
          return valueToString(32, 36);
        }));
        checkEqual(true, isThrown(function () {
          return valueToString(32, 37);
        })); // Object Named Parameter

        checkEqual('-32', valueToString({
          value: -32
        }));
        checkEqual('-100000', valueToString({
          value: -32,
          radix: 2
        })); // Decimal number other

        checkEqual('1010.01', valueToString(10.25, 2));
        checkEqual('22.1', valueToString(10.25, 4));
        checkEqual('12.2', valueToString(10.25, 8));
        checkEqual('a.4', valueToString(10.25, 16)); // other type

        checkEqual('null', valueToString(null));
        checkEqual('undefined', valueToString(undefined));
        checkEqual('[object Object]', valueToString({}));
        checkEqual('', valueToString([]));
        checkEqual('1', valueToString([1]));
        checkEqual('1,2,3', valueToString([1, 2, 3]));
        checkEqual('', valueToString(''));
        checkEqual('a', valueToString('a'));
        checkEqual('true', valueToString(true));
        checkEqual('false', valueToString(false));
      });
    };

    var test_NumberCast_standard = function test_NumberCast_standard() {
      it('test_NumberCast', function () {
        // Integer
        checkEqual(123, Number('123'));
        checkEqual(123, Number('0123'));
        checkEqual(123, Number('+123'));
        checkEqual(-123, Number('-0123'));
        checkEqual(123, Number(' 123'), '1');
        checkEqual(123, Number('123 '), '2');
        checkEqual(123, Number(' 123 '), '3');

        if (parts.platform.isWindowsScriptHost()) {
          checkEqual(NaN, Number('　123'), '4');
          checkEqual(NaN, Number('123　'), '5');
          checkEqual(NaN, Number('　123　'), '6');
        } else {
          checkEqual(123, Number('　123'), '4');
          checkEqual(123, Number('123　'), '5');
          checkEqual(123, Number('　123　'), '6');
        }

        checkEqual(NaN, Number('123 0'));
        checkEqual(NaN, Number('0 123'));
        checkEqual(NaN, Number('1 123'));
        checkEqual(NaN, Number('123a'));
        checkEqual(NaN, Number('a123')); // Decimal

        checkEqual(123.4, Number('123.4'));
        checkEqual(123.4, Number('0123.4'));
        checkEqual(123.4, Number('+123.4'));
        checkEqual(-123.4, Number('-0123.4'));
        checkEqual(123.5, Number('123.5'));
        checkEqual(123.5, Number('0123.5'));
        checkEqual(123.5, Number('+123.5'));
        checkEqual(-123.5, Number('-0123.5'));
        checkEqual(123.4, Number(' 123.4'));
        checkEqual(123.4, Number('123.4 '));
        checkEqual(123.4, Number(' 123.4 '));

        if (parts.platform.isWindowsScriptHost()) {
          checkEqual(NaN, Number('　123.4'));
          checkEqual(NaN, Number('123.4　'));
          checkEqual(NaN, Number('　123.4　'));
        } else {
          checkEqual(123.4, Number('　123.4'));
          checkEqual(123.4, Number('123.4　'));
          checkEqual(123.4, Number('　123.4　'));
        }

        checkEqual(NaN, Number('123.4 0'));
        checkEqual(NaN, Number('0 123.4'));
        checkEqual(NaN, Number('1 123.4'));
        checkEqual(NaN, Number('123 .4'));
        checkEqual(NaN, Number('123. 4'));
        checkEqual(NaN, Number('123.4a'));
        checkEqual(NaN, Number('a123.4'));
        checkEqual(123.45, Number('123.45'));
        checkEqual(NaN, Number('123.4.5')); // string default value

        checkEqual(NaN, Number('abc')); // space string

        checkEqual(0, Number('')); // ?

        checkEqual(0, Number(' ')); // ?

        if (parts.platform.isWindowsScriptHost()) {
          checkEqual(NaN, Number('　'));
        } else {
          checkEqual(0, Number('　')); // ?
        } // exponential notation


        checkEqual(3.14, Number(3.14));
        checkEqual(3.14, Number('3.14'));
        checkEqual(3.14, Number('314e-2'));
        checkEqual(3.14, Number('0.0314E+2'));
        checkEqual(0.14, Number('.14'));
        checkEqual(0.00000000000000001, Number('1e-17'));
        checkEqual(1e-17, Number('1e-17')); // exponential notation detail

        checkEqual(1, Number('1.'));
        checkEqual(NaN, Number('1.1e'));
        checkEqual(NaN, Number('1.1e+'));
        checkEqual(100000, Number('1e+5'));
        checkEqual(0.00001, Number('1e-5'));
        checkEqual(NaN, Number('1.e'));
        checkEqual(NaN, Number('1.e+'));
        checkEqual(100000, Number('1.e+5')); // Number different

        checkEqual(291, Number('0x123'));
        checkEqual(NaN, Number('+0x123'));
        checkEqual(NaN, Number('-0x123'));

        if (parts.platform.isWindowsScriptHost()) {
          checkEqual(NaN, Number('0o123'));
        } else if (parts.platform.isInternetExplorer()) {
          checkEqual(NaN, Number('0o123'));
        } else {
          checkEqual(83, Number('0o123'));
        }

        checkEqual(NaN, Number('+0o123'));
        checkEqual(NaN, Number('-0o123'));
        checkEqual(Infinity, Number('Infinity'));
        checkEqual(NaN, Number('infinity'));
        checkEqual(NaN, Number('inf'));
        checkEqual(NaN, Number('info')); // Number

        checkEqual(123, Number(123));
        checkEqual(-123, Number(-123));
        checkEqual(1.23, Number(1.23));
        checkEqual(-1.23, Number(-1.23));
        checkEqual(Infinity, Number(Infinity));
        checkEqual(-Infinity, Number(-Infinity));
        checkEqual(NaN, Number(NaN)); // Other

        checkEqual(0, Number(null)); // !

        checkEqual(NaN, Number(undefined));
        checkEqual(NaN, Number({}));
        checkEqual(NaN, Number({
          a: 1
        }));
        checkEqual(0, Number([])); // ?

        checkEqual(1, Number([1])); // ?

        checkEqual(123, Number([123])); // ?

        checkEqual(NaN, Number([1, 2]));
      });
    };

    var test_parseFloat_standard = function test_parseFloat_standard() {
      it('test_parseFloat', function () {
        // Integer
        checkEqual(123, parseFloat('123'));
        checkEqual(123, parseFloat('0123'));
        checkEqual(123, parseFloat('+123'));
        checkEqual(-123, parseFloat('-0123'));
        checkEqual(123, parseFloat(' 123'), '1');
        checkEqual(123, parseFloat('123 '), '2');
        checkEqual(123, parseFloat(' 123 '), '3');

        if (parts.platform.isWindowsScriptHost()) {
          checkEqual(NaN, parseFloat('　123'), '4');
          checkEqual(123, parseFloat('123　'), '5');
          checkEqual(NaN, parseFloat('　123　'), '6');
        } else {
          checkEqual(123, parseFloat('　123'), '4');
          checkEqual(123, parseFloat('123　'), '5');
          checkEqual(123, parseFloat('　123　'), '6');
        }

        checkEqual(123, parseFloat('123 0'));
        checkEqual(0, parseFloat('0 123'));
        checkEqual(1, parseFloat('1 123'));
        checkEqual(123, parseFloat('123a'));
        checkEqual(NaN, parseFloat('a123')); // Decimal

        checkEqual(123.4, parseFloat('123.4'));
        checkEqual(123.4, parseFloat('0123.4'));
        checkEqual(123.4, parseFloat('+123.4'));
        checkEqual(-123.4, parseFloat('-0123.4'));
        checkEqual(123.5, parseFloat('123.5'));
        checkEqual(123.5, parseFloat('0123.5'));
        checkEqual(123.5, parseFloat('+123.5'));
        checkEqual(-123.5, parseFloat('-0123.5'));
        checkEqual(123.4, parseFloat(' 123.4'));
        checkEqual(123.4, parseFloat('123.4 '));
        checkEqual(123.4, parseFloat(' 123.4 '));

        if (parts.platform.isWindowsScriptHost()) {
          checkEqual(NaN, parseFloat('　123.4'));
          checkEqual(123.4, parseFloat('123.4　'));
          checkEqual(NaN, parseFloat('　123.4　'));
        } else {
          checkEqual(123.4, parseFloat('　123.4'));
          checkEqual(123.4, parseFloat('123.4　'));
          checkEqual(123.4, parseFloat('　123.4　'));
        }

        checkEqual(123.4, parseFloat('123.4 0'));
        checkEqual(0, parseFloat('0 123.4'));
        checkEqual(1, parseFloat('1 123.4'));
        checkEqual(123, parseFloat('123 .4'));
        checkEqual(123, parseFloat('123. 4'));
        checkEqual(123.4, parseFloat('123.4a'));
        checkEqual(NaN, parseFloat('a123.4'));
        checkEqual(123.45, parseFloat('123.45'));
        checkEqual(123.4, parseFloat('123.4.5')); // string default value

        checkEqual(NaN, parseFloat('abc')); // space string

        checkEqual(NaN, parseFloat(''));
        checkEqual(NaN, parseFloat(' '));

        if (parts.platform.isWindowsScriptHost()) {
          checkEqual(NaN, parseFloat('　'));
        } else {
          checkEqual(NaN, parseFloat('　'));
        } // exponential notation


        checkEqual(3.14, parseFloat(3.14));
        checkEqual(3.14, parseFloat('3.14'));
        checkEqual(3.14, parseFloat('314e-2'));
        checkEqual(3.14, parseFloat('0.0314E+2'));
        checkEqual(0.14, parseFloat('.14'));
        checkEqual(0.00000000000000001, parseFloat('1e-17'));
        checkEqual(1e-17, parseFloat('1e-17')); // exponential notation detail

        checkEqual(1, parseFloat('1.'));
        checkEqual(1.1, parseFloat('1.1e'));
        checkEqual(1.1, parseFloat('1.1e+'));
        checkEqual(100000, parseFloat('1e+5'));
        checkEqual(0.00001, parseFloat('1e-5'));
        checkEqual(1, parseFloat('1.e'));
        checkEqual(1, parseFloat('1.e+'));
        checkEqual(100000, parseFloat('1.e+5')); // parseFloat different

        checkEqual(0, parseFloat('0x123'));
        checkEqual(0, parseFloat('+0x123'));
        checkEqual(-0, parseFloat('-0x123'));
        checkEqual(0, parseFloat('0o123'));
        checkEqual(0, parseFloat('+0o123'));
        checkEqual(-0, parseFloat('-0o123'));
        checkEqual(Infinity, parseFloat('Infinity'));
        checkEqual(NaN, parseFloat('infinity'));
        checkEqual(NaN, parseFloat('inf'));
        checkEqual(NaN, parseFloat('info')); // parseFloat

        checkEqual(123, parseFloat(123));
        checkEqual(-123, parseFloat(-123));
        checkEqual(1.23, parseFloat(1.23));
        checkEqual(-1.23, parseFloat(-1.23));
        checkEqual(Infinity, parseFloat(Infinity));
        checkEqual(-Infinity, parseFloat(-Infinity));
        checkEqual(NaN, parseFloat(NaN)); // Other

        checkEqual(NaN, parseFloat(null));
        checkEqual(NaN, parseFloat(undefined));
        checkEqual(NaN, parseFloat({}));
        checkEqual(NaN, parseFloat({
          a: 1
        }));
        checkEqual(NaN, parseFloat([]));
        checkEqual(1, parseFloat([1]));
        checkEqual(123, parseFloat([123]));
        checkEqual(1, parseFloat([1, 2]));
      });
    };

    var test_parseInt_standard = function test_parseInt_standard() {
      it('test_parseInt', function () {
        var parseInt10 = function parseInt10(value) {
          return parseInt(value, 10);
        }; // Integer


        checkEqual(123, parseInt10('123'));
        checkEqual(123, parseInt10('0123'));
        checkEqual(123, parseInt10('+123'));
        checkEqual(-123, parseInt10('-0123'));
        checkEqual(123, parseInt10(' 123'), '1');
        checkEqual(123, parseInt10('123 '), '2');
        checkEqual(123, parseInt10(' 123 '), '3');

        if (parts.platform.isWindowsScriptHost()) {
          checkEqual(NaN, parseInt10('　123'), '4');
          checkEqual(123, parseInt10('123　'), '5');
          checkEqual(NaN, parseInt10('　123　'), '6');
        } else {
          checkEqual(123, parseInt10('　123'), '4');
          checkEqual(123, parseInt10('123　'), '5');
          checkEqual(123, parseInt10('　123　'), '6');
        }

        checkEqual(123, parseInt10('123 0'));
        checkEqual(0, parseInt10('0 123'));
        checkEqual(1, parseInt10('1 123'));
        checkEqual(123, parseInt10('123a'));
        checkEqual(NaN, parseInt10('a123')); // Decimal

        checkEqual(123, parseInt10('123.4'));
        checkEqual(123, parseInt10('0123.4'));
        checkEqual(123, parseInt10('+123.4'));
        checkEqual(-123, parseInt10('-0123.4'));
        checkEqual(123, parseInt10('123.5'));
        checkEqual(123, parseInt10('0123.5'));
        checkEqual(123, parseInt10('+123.5'));
        checkEqual(-123, parseInt10('-0123.5'));
        checkEqual(123, parseInt10(' 123.4'));
        checkEqual(123, parseInt10('123.4 '));
        checkEqual(123, parseInt10(' 123.4 '));

        if (parts.platform.isWindowsScriptHost()) {
          checkEqual(NaN, parseInt10('　123.4'));
          checkEqual(123, parseInt10('123.4　'));
          checkEqual(NaN, parseInt10('　123.4　'));
        } else {
          checkEqual(123, parseInt10('　123.4'));
          checkEqual(123, parseInt10('123.4　'));
          checkEqual(123, parseInt10('　123.4　'));
        }

        checkEqual(123, parseInt10('123.4 0'));
        checkEqual(0, parseInt10('0 123.4'));
        checkEqual(1, parseInt10('1 123.4'));
        checkEqual(123, parseInt10('123 .4'));
        checkEqual(123, parseInt10('123. 4'));
        checkEqual(123, parseInt10('123.4a'));
        checkEqual(NaN, parseInt10('a123.4'));
        checkEqual(123, parseInt10('123.45'));
        checkEqual(123, parseInt10('123.4.5')); // string default value

        checkEqual(NaN, parseInt10('abc')); // space string

        checkEqual(NaN, parseInt10(''));
        checkEqual(NaN, parseInt10(' '));

        if (parts.platform.isWindowsScriptHost()) {
          checkEqual(NaN, parseInt10('　'));
        } else {
          checkEqual(NaN, parseInt10('　'));
        } // exponential notation


        checkEqual(3, parseInt10(3.14));
        checkEqual(3, parseInt10('3.14'));
        checkEqual(314, parseInt10('314e-2'));
        checkEqual(0, parseInt10('0.0314E+2'));
        checkEqual(NaN, parseInt10('.14')); // ?

        checkEqual(1, parseInt10('1e-17'));
        checkEqual(1, parseInt10('1e-17')); // exponential notation detail

        checkEqual(1, parseInt10('1.'));
        checkEqual(1, parseInt10('1.1e'));
        checkEqual(1, parseInt10('1.1e+'));
        checkEqual(1, parseInt10('1e+5'));
        checkEqual(1, parseInt10('1e-5'));
        checkEqual(1, parseInt10('1.e'));
        checkEqual(1, parseInt10('1.e+'));
        checkEqual(1, parseInt10('1.e+5')); // parseFloat different

        checkEqual(0, parseInt10('0x123'));
        checkEqual(0, parseInt10('+0x123'));
        checkEqual(-0, parseInt10('-0x123'));
        checkEqual(0, parseInt10('0o123'));
        checkEqual(0, parseInt10('+0o123'));
        checkEqual(-0, parseInt10('-0o123'));
        checkEqual(NaN, parseInt10('Infinity')); // ?

        checkEqual(NaN, parseInt10('infinity'));
        checkEqual(NaN, parseInt10('inf'));
        checkEqual(NaN, parseInt10('info')); // parseFloat

        checkEqual(123, parseInt10(123));
        checkEqual(-123, parseInt10(-123));
        checkEqual(1, parseInt10(1.23));
        checkEqual(-1, parseInt10(-1.23));
        checkEqual(NaN, parseInt10(Infinity));
        checkEqual(NaN, parseInt10(-Infinity));
        checkEqual(NaN, parseInt10(NaN)); // Other

        checkEqual(NaN, parseInt10(null));
        checkEqual(NaN, parseInt10(undefined));
        checkEqual(NaN, parseInt10({}));
        checkEqual(NaN, parseInt10({
          a: 1
        }));
        checkEqual(NaN, parseInt10([]));
        checkEqual(1, parseInt10([1]));
        checkEqual(123, parseInt10([123]));
        checkEqual(1, parseInt10([1, 2])); // Decimal number other

        checkEqual(10, parseInt('1010', 2));
        checkEqual(10, parseInt('22', 4));
        checkEqual(10, parseInt('12', 8));
        checkEqual(10, parseInt('a', 16));
        checkEqual(10, parseInt('A', 16));
      });
    };

    var test_stringToNumber = function test_stringToNumber() {
      it('test_stringToNumber', function () {
        // Integer
        checkEqual(123, stringToNumber('123'));
        checkEqual(123, stringToNumber('0123'));
        checkEqual(123, stringToNumber('+123'));
        checkEqual(-123, stringToNumber('-0123'));
        checkEqual(true, isThrown(function () {
          return stringToNumber(' 123');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('123 ');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber(' 123 ');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('　123');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('123　');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('　123　');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('123 0');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('0 123');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('1 123');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('123a');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('a123');
        })); // Decimal

        checkEqual(123.4, stringToNumber('123.4'));
        checkEqual(123.4, stringToNumber('0123.4'));
        checkEqual(123.4, stringToNumber('+123.4'));
        checkEqual(-123.4, stringToNumber('-0123.4'));
        checkEqual(true, isThrown(function () {
          return stringToNumber(' 123.4');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('123.4 ');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber(' 123.4 ');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('　123.4');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('123.4　');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('　123.4　');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('123.4 0');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('0 123.4');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('1 123.4');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('123 .4');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('123. 4');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('123.4a');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('a123.4');
        }));
        checkEqual(123.45, stringToNumber('123.45'));
        checkEqual(true, isThrown(function () {
          return stringToNumber('123.4.5');
        })); // // string  value

        checkEqual(true, isThrown(function () {
          return stringToNumber('abc');
        })); // // space string

        checkEqual(true, isThrown(function () {
          return stringToNumber('');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber(' ');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('　');
        })); // // exponential notation

        checkEqual(3.14, stringToNumber('3.14'));
        checkEqual(3.14, stringToNumber('314e-2'));
        checkEqual(3.14, stringToNumber('0.0314E+2'));
        checkEqual(0.14, stringToNumber('.14'));
        checkEqual('1e-17', 0.00000000000000001.toString());
        checkEqual(0.00000000000000001, stringToNumber('1e-17'));
        checkEqual(1e-17, stringToNumber('1e-17')); // exponential notation detail

        checkEqual(1, stringToNumber('1.'));
        checkEqual(true, isThrown(function () {
          return stringToNumber('1.1e');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('1.1e+');
        }));
        checkEqual(100000, stringToNumber('1e+5'));
        checkEqual(0.00001, stringToNumber('1e-5'));
        checkEqual(true, isThrown(function () {
          return stringToNumber('1.e');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('1.e+');
        }));
        checkEqual(100000, stringToNumber('1.e+5')); // Number different

        checkEqual(true, isThrown(function () {
          return stringToNumber('0x123');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('+0x123');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('-0x123');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('0x123');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('+0x123');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('-0x123');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('Infinity');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('infinity');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('inf');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('info');
        })); // Exception

        var i = 0;
        i += 1;
        checkEqual(true, isThrownException(function () {
          stringToNumber(123);
        }, new TypeError().name), "test stringToNumber exception ".concat(i)); // Object Named Parameter

        checkEqual(-123, stringToNumber({
          value: '-0123'
        }));
      });
    };

    var test_stringToNumberDefault = function test_stringToNumberDefault() {
      it('test_stringToNumberDefault', function () {
        // Integer
        checkEqual(123, stringToNumberDefault('123'));
        checkEqual(123, stringToNumberDefault('0123'));
        checkEqual(123, stringToNumberDefault('+123'));
        checkEqual(-123, stringToNumberDefault('-0123'));
        checkEqual(undefined, stringToNumberDefault(' 123'), '1');
        checkEqual(undefined, stringToNumberDefault('123 '), '2');
        checkEqual(undefined, stringToNumberDefault(' 123 '), '3');
        checkEqual(undefined, stringToNumberDefault('　123'), '4');
        checkEqual(undefined, stringToNumberDefault('123　'), '5');
        checkEqual(undefined, stringToNumberDefault('　123　'), '6');
        checkEqual(undefined, stringToNumberDefault('123 0'));
        checkEqual(undefined, stringToNumberDefault('0 123'));
        checkEqual(undefined, stringToNumberDefault('1 123'));
        checkEqual(undefined, stringToNumberDefault('123a'));
        checkEqual(undefined, stringToNumberDefault('a123')); // Decimal

        checkEqual(123.4, stringToNumberDefault('123.4'));
        checkEqual(123.4, stringToNumberDefault('0123.4'));
        checkEqual(123.4, stringToNumberDefault('+123.4'));
        checkEqual(-123.4, stringToNumberDefault('-0123.4'));
        checkEqual(undefined, stringToNumberDefault(' 123.4'));
        checkEqual(undefined, stringToNumberDefault('123.4 '));
        checkEqual(undefined, stringToNumberDefault(' 123.4 '));
        checkEqual(undefined, stringToNumberDefault('　123.4'));
        checkEqual(undefined, stringToNumberDefault('123.4　'));
        checkEqual(undefined, stringToNumberDefault('　123.4　'));
        checkEqual(undefined, stringToNumberDefault('123.4 0'));
        checkEqual(undefined, stringToNumberDefault('0 123.4'));
        checkEqual(undefined, stringToNumberDefault('1 123.4'));
        checkEqual(undefined, stringToNumberDefault('123 .4'));
        checkEqual(undefined, stringToNumberDefault('123. 4'));
        checkEqual(undefined, stringToNumberDefault('123.4a'));
        checkEqual(undefined, stringToNumberDefault('a123.4'));
        checkEqual(123.45, stringToNumberDefault('123.45'));
        checkEqual(undefined, stringToNumberDefault('123.4.5')); // string default value

        checkEqual(undefined, stringToNumberDefault('abc'));
        checkEqual(null, stringToNumberDefault('abc', null));
        checkEqual(NaN, stringToNumberDefault('abc', NaN)); // space string

        checkEqual(undefined, stringToNumberDefault(''));
        checkEqual(undefined, stringToNumberDefault(' '));
        checkEqual(undefined, stringToNumberDefault('　')); // exponential notation

        checkEqual(3.14, stringToNumberDefault('3.14'));
        checkEqual(3.14, stringToNumberDefault('314e-2'));
        checkEqual(3.14, stringToNumberDefault('0.0314E+2'));
        checkEqual(0.14, stringToNumberDefault('.14'));
        checkEqual('1e-17', 0.00000000000000001.toString());
        checkEqual(0.00000000000000001, stringToNumberDefault('1e-17'));
        checkEqual(1e-17, stringToNumberDefault('1e-17')); // exponential notation detail

        checkEqual(1, stringToNumberDefault('1.'));
        checkEqual(undefined, stringToNumberDefault('1.1e'));
        checkEqual(undefined, stringToNumberDefault('1.1e+'));
        checkEqual(100000, stringToNumberDefault('1e+5'));
        checkEqual(0.00001, stringToNumberDefault('1e-5'));
        checkEqual(undefined, stringToNumberDefault('1.e'));
        checkEqual(undefined, stringToNumberDefault('1.e+'));
        checkEqual(100000, stringToNumberDefault('1.e+5')); // Number different

        checkEqual(undefined, stringToNumberDefault('0x123'));
        checkEqual(undefined, stringToNumberDefault('+0x123'));
        checkEqual(undefined, stringToNumberDefault('-0x123'));
        checkEqual(undefined, stringToNumberDefault('0x123'));
        checkEqual(undefined, stringToNumberDefault('+0x123'));
        checkEqual(undefined, stringToNumberDefault('-0x123'));
        checkEqual(undefined, stringToNumberDefault('Infinity'));
        checkEqual(undefined, stringToNumberDefault('infinity'));
        checkEqual(undefined, stringToNumberDefault('inf'));
        checkEqual(undefined, stringToNumberDefault('info')); // Exception

        var i = 0;
        i += 1;
        checkEqual(true, isThrownException(function () {
          stringToNumberDefault(123);
        }, new TypeError().name), "test stringToNumberDefault exception ".concat(i)); // Object Named Parameter

        checkEqual(-123, stringToNumberDefault({
          value: '-0123'
        }));
        checkEqual(null, stringToNumberDefault({
          value: 'abc',
          defaultValue: null
        }));
      });
    };

    var test_valueToNumber = function test_valueToNumber() {
      it('test_valueToNumber', function () {
        // Integer
        checkEqual(123, valueToNumber('123'));
        checkEqual(123, valueToNumber('0123'));
        checkEqual(123, valueToNumber('+123'));
        checkEqual(-123, valueToNumber('-0123'));
        checkEqual(NaN, valueToNumber(' 123'), '1');
        checkEqual(NaN, valueToNumber('123 '), '2');
        checkEqual(NaN, valueToNumber(' 123 '), '3');
        checkEqual(NaN, valueToNumber('　123'), '4');
        checkEqual(NaN, valueToNumber('123　'), '5');
        checkEqual(NaN, valueToNumber('　123　'), '6');
        checkEqual(NaN, valueToNumber('123 0'));
        checkEqual(NaN, valueToNumber('0 123'));
        checkEqual(NaN, valueToNumber('1 123'));
        checkEqual(NaN, valueToNumber('123a'));
        checkEqual(NaN, valueToNumber('a123')); // Decimal

        checkEqual(123.4, valueToNumber('123.4'));
        checkEqual(123.4, valueToNumber('0123.4'));
        checkEqual(123.4, valueToNumber('+123.4'));
        checkEqual(-123.4, valueToNumber('-0123.4'));
        checkEqual(123.5, valueToNumber('123.5'));
        checkEqual(123.5, valueToNumber('0123.5'));
        checkEqual(123.5, valueToNumber('+123.5'));
        checkEqual(-123.5, valueToNumber('-0123.5'));
        checkEqual(NaN, valueToNumber(' 123.4'));
        checkEqual(NaN, valueToNumber('123.4 '));
        checkEqual(NaN, valueToNumber(' 123.4 '));
        checkEqual(NaN, valueToNumber('　123.4'));
        checkEqual(NaN, valueToNumber('123.4　'));
        checkEqual(NaN, valueToNumber('　123.4　'));
        checkEqual(NaN, valueToNumber('123.4 0'));
        checkEqual(NaN, valueToNumber('0 123.4'));
        checkEqual(NaN, valueToNumber('1 123.4'));
        checkEqual(NaN, valueToNumber('123 .4'));
        checkEqual(NaN, valueToNumber('123. 4'));
        checkEqual(NaN, valueToNumber('123.4a'));
        checkEqual(NaN, valueToNumber('a123.4'));
        checkEqual(123.45, valueToNumber('123.45'));
        checkEqual(NaN, valueToNumber('123.4.5')); // space string

        checkEqual(NaN, valueToNumber(''));
        checkEqual(NaN, valueToNumber(' '));
        checkEqual(NaN, valueToNumber('　')); // exponential notation

        checkEqual(3.14, valueToNumber(3.14));
        checkEqual(3.14, valueToNumber('3.14'));
        checkEqual(3.14, valueToNumber('314e-2'));
        checkEqual(3.14, valueToNumber('0.0314E+2'));
        checkEqual(0.14, valueToNumber('.14')); // exponential notation detail

        checkEqual(1, valueToNumber('1.'));
        checkEqual(NaN, valueToNumber('1.1e'));
        checkEqual(NaN, valueToNumber('1.1e+'));
        checkEqual(100000, valueToNumber('1e+5'));
        checkEqual(0.00001, valueToNumber('1e-5'));
        checkEqual(NaN, valueToNumber('1.e'));
        checkEqual(NaN, valueToNumber('1.e+'));
        checkEqual(100000, valueToNumber('1.e+5')); // Number different

        checkEqual(NaN, valueToNumber('0x123'));
        checkEqual(NaN, valueToNumber('+0x123'));
        checkEqual(NaN, valueToNumber('-0x123'));
        checkEqual(NaN, valueToNumber('0o123'));
        checkEqual(NaN, valueToNumber('+0o123'));
        checkEqual(NaN, valueToNumber('-0o123'));
        checkEqual(NaN, valueToNumber('Infinity'));
        checkEqual(NaN, valueToNumber('infinity'));
        checkEqual(NaN, valueToNumber('inf'));
        checkEqual(NaN, valueToNumber('info')); // Number

        checkEqual(123, valueToNumber(123));
        checkEqual(-123, valueToNumber(-123));
        checkEqual(1.23, valueToNumber(1.23));
        checkEqual(-1.23, valueToNumber(-1.23));
        checkEqual(Infinity, valueToNumber(Infinity));
        checkEqual(-Infinity, valueToNumber(-Infinity));
        checkEqual(NaN, valueToNumber(NaN)); // Default

        checkEqual(null, valueToNumberDefault('', null));
        checkEqual(NaN, valueToNumberDefault(NaN, null)); // Other

        checkEqual(NaN, valueToNumber(null));
        checkEqual(NaN, valueToNumber(undefined));
        checkEqual(NaN, valueToNumber({}));
        checkEqual(NaN, valueToNumber({
          a: 1
        }));
        checkEqual(NaN, valueToNumber([]));
        checkEqual(NaN, valueToNumber([1]));
        checkEqual(NaN, valueToNumber([123]));
        checkEqual(NaN, valueToNumber([1, 2]));
      });
    };

    var test_stringToInteger = function test_stringToInteger() {
      it('test_stringToInteger', function () {
        // Integer
        checkEqual(123, stringToInteger('123'));
        checkEqual(123, stringToInteger('0123'));
        checkEqual(123, stringToInteger('+123'));
        checkEqual(-123, stringToInteger('-0123'));
        checkEqual(true, isThrown(function () {
          return stringToInteger(' 123');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger(' 123');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('123 ');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger(' 123 ');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('123 0');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('0 123');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('1 123');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('123a');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('a123');
        })); // Decimal

        checkEqual(true, isThrown(function () {
          return stringToInteger('123.4');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('0123.4');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('+123.4');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('-0123.4');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger(' 123.4');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('123.4 ');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger(' 123.4 ');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('123.4 0');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('0 123.4');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('1 123.4');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('123 .4');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('123. 4');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('123.4a');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('a123.4');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('123.45');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('123.4.5');
        })); // Positive number

        checkEqual(32, stringToInteger('32'));
        checkEqual(32, stringToInteger('32', 10));
        checkEqual(true, isThrown(function () {
          return stringToInteger('31.5', 10);
        }));
        checkEqual(32, stringToInteger('100000', 2));
        checkEqual(31, stringToInteger('11111', 2));
        checkEqual(true, isThrown(function () {
          return stringToInteger('11111.1', 2);
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('11111.01', 2);
        }));
        checkEqual(32, stringToInteger('40', 8));
        checkEqual(31, stringToInteger('37', 8));
        checkEqual(true, isThrown(function () {
          return stringToInteger('37.4', 8);
        }));
        checkEqual(32, stringToInteger('20', 16));
        checkEqual(31, stringToInteger('1f', 16));
        checkEqual(true, isThrown(function () {
          return stringToInteger('1f.8', 16);
        }));
        checkEqual(32, stringToInteger('44', 7));
        checkEqual(31, stringToInteger('43', 7));
        checkEqual(255, stringToInteger('255', 10));
        checkEqual(11, stringToInteger('11', 10));
        checkEqual(255, stringToInteger('FF', 16));
        checkEqual(16, stringToInteger('20', 8));
        checkEqual(255, stringToInteger('ff', 16));
        checkEqual(11, stringToInteger('b', 16));
        checkEqual(127, stringToInteger('177', 8));
        checkEqual(10, stringToInteger('12', 8));
        checkEqual(3, stringToInteger('11', 2));
        checkEqual(15, stringToInteger('1111', 2)); // Negative number

        checkEqual(-32, stringToInteger('-32'));
        checkEqual(-32, stringToInteger('-32', 10));
        checkEqual(true, isThrown(function () {
          return stringToInteger('-31.5', 10);
        }));
        checkEqual(-32, stringToInteger('-100000', 2));
        checkEqual(-31, stringToInteger('-11111', 2));
        checkEqual(true, isThrown(function () {
          return stringToInteger('-11111.1', 2);
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('-11111.01', 2);
        }));
        checkEqual(-32, stringToInteger('-40', 8));
        checkEqual(-31, stringToInteger('-37', 8));
        checkEqual(true, isThrown(function () {
          return stringToInteger('-37.4', 8);
        }));
        checkEqual(-32, stringToInteger('-20', 16));
        checkEqual(-31, stringToInteger('-1f', 16));
        checkEqual(true, isThrown(function () {
          return stringToInteger('-1f.8', 16);
        }));
        checkEqual(-32, stringToInteger('-44', 7));
        checkEqual(-31, stringToInteger('-43', 7));
        checkEqual(-255, stringToInteger('-255', 10));
        checkEqual(-11, stringToInteger('-11', 10));
        checkEqual(-255, stringToInteger('-FF', 16));
        checkEqual(-16, stringToInteger('-20', 8));
        checkEqual(-255, stringToInteger('-ff', 16));
        checkEqual(-11, stringToInteger('-b', 16));
        checkEqual(-127, stringToInteger('-177', 8));
        checkEqual(-10, stringToInteger('-12', 8));
        checkEqual(-3, stringToInteger('-11', 2));
        checkEqual(-15, stringToInteger('-1111', 2)); // // Default Value

        checkEqual(true, isThrown(function () {
          return stringToInteger('abc');
        })); // checkEqual(null,      stringToInteger('abc', null,  10));
        // checkEqual(NaN,       stringToInteger('abc', NaN,   10));

        checkEqual(true, isThrown(function () {
          return stringToInteger('0x123');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('+0x123');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('-0x123');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('0x123');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('+0x123');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('-0x123');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('Infinity');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('infinity');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('inf');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('info');
        })); // Exception

        var i = 0;
        i += 1;
        checkEqual(true, isThrownException(function () {
          stringToInteger(123);
        }, new TypeError().name), "test stringToInteger exception ".concat(i));
        i += 1;
        checkEqual(false, isThrownException(function () {
          stringToInteger('123', 2);
        }, new TypeError().name), "test stringToInteger exception ".concat(i));
        i += 1;
        checkEqual(true, isThrownException(function () {
          stringToInteger('123', 2.5);
        }, new TypeError().name), "test stringToInteger exception ".concat(i));
        i += 1;
        checkEqual(true, isThrownException(function () {
          stringToInteger('123', 1);
        }, new RangeError().name), "test stringToInteger exception ".concat(i));
        i += 1;
        checkEqual(false, isThrownException(function () {
          stringToInteger('123', 36);
        }, new TypeError().name), "test stringToInteger exception ".concat(i));
        i += 1;
        checkEqual(true, isThrownException(function () {
          stringToInteger('123', 37);
        }, new RangeError().name), "test stringToInteger exception ".concat(i)); // Object Named Parameter

        checkEqual(-123, stringToInteger({
          value: '-0123'
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger({
            value: 'abc'
          });
        }));
        checkEqual(-15, stringToInteger({
          value: '-1111',
          radix: 2
        }));
      });
    };

    var test_stringToIntegerDefault = function test_stringToIntegerDefault() {
      it('test_stringToIntegerDefault', function () {
        // Integer
        checkEqual(123, stringToIntegerDefault('123'));
        checkEqual(123, stringToIntegerDefault('0123'));
        checkEqual(123, stringToIntegerDefault('+123'));
        checkEqual(-123, stringToIntegerDefault('-0123'));
        checkEqual(undefined, stringToIntegerDefault(' 123'));
        checkEqual(undefined, stringToIntegerDefault('123 '));
        checkEqual(undefined, stringToIntegerDefault(' 123 '));
        checkEqual(undefined, stringToIntegerDefault('123 0'));
        checkEqual(undefined, stringToIntegerDefault('0 123'));
        checkEqual(undefined, stringToIntegerDefault('1 123'));
        checkEqual(undefined, stringToIntegerDefault('123a'));
        checkEqual(undefined, stringToIntegerDefault('a123')); // Decimal

        checkEqual(undefined, stringToIntegerDefault('123.4'));
        checkEqual(undefined, stringToIntegerDefault('0123.4'));
        checkEqual(undefined, stringToIntegerDefault('+123.4'));
        checkEqual(undefined, stringToIntegerDefault('-0123.4'));
        checkEqual(undefined, stringToIntegerDefault(' 123.4'));
        checkEqual(undefined, stringToIntegerDefault('123.4 '));
        checkEqual(undefined, stringToIntegerDefault(' 123.4 '));
        checkEqual(undefined, stringToIntegerDefault('123.4 0'));
        checkEqual(undefined, stringToIntegerDefault('0 123.4'));
        checkEqual(undefined, stringToIntegerDefault('1 123.4'));
        checkEqual(undefined, stringToIntegerDefault('123 .4'));
        checkEqual(undefined, stringToIntegerDefault('123. 4'));
        checkEqual(undefined, stringToIntegerDefault('123.4a'));
        checkEqual(undefined, stringToIntegerDefault('a123.4'));
        checkEqual(undefined, stringToIntegerDefault('123.45'));
        checkEqual(undefined, stringToIntegerDefault('123.4.5')); // Positive number

        checkEqual(32, stringToIntegerDefault('32'));
        checkEqual(32, stringToIntegerDefault('32', undefined, 10));
        checkEqual(undefined, stringToIntegerDefault('31.5', undefined, 10));
        checkEqual(32, stringToIntegerDefault('100000', undefined, 2));
        checkEqual(31, stringToIntegerDefault('11111', undefined, 2));
        checkEqual(undefined, stringToIntegerDefault('11111.1', undefined, 2));
        checkEqual(undefined, stringToIntegerDefault('11111.01', undefined, 2));
        checkEqual(32, stringToIntegerDefault('40', undefined, 8));
        checkEqual(31, stringToIntegerDefault('37', undefined, 8));
        checkEqual(undefined, stringToIntegerDefault('37.4', undefined, 8));
        checkEqual(32, stringToIntegerDefault('20', undefined, 16));
        checkEqual(31, stringToIntegerDefault('1f', undefined, 16));
        checkEqual(undefined, stringToIntegerDefault('1f.8', undefined, 16));
        checkEqual(32, stringToIntegerDefault('44', undefined, 7));
        checkEqual(31, stringToIntegerDefault('43', undefined, 7));
        checkEqual(255, stringToIntegerDefault('255', undefined, 10));
        checkEqual(11, stringToIntegerDefault('11', undefined, 10));
        checkEqual(255, stringToIntegerDefault('FF', undefined, 16));
        checkEqual(16, stringToIntegerDefault('20', undefined, 8));
        checkEqual(255, stringToIntegerDefault('ff', undefined, 16));
        checkEqual(11, stringToIntegerDefault('b', undefined, 16));
        checkEqual(127, stringToIntegerDefault('177', undefined, 8));
        checkEqual(10, stringToIntegerDefault('12', undefined, 8));
        checkEqual(3, stringToIntegerDefault('11', undefined, 2));
        checkEqual(15, stringToIntegerDefault('1111', undefined, 2)); // Negative number

        checkEqual(-32, stringToIntegerDefault('-32'));
        checkEqual(-32, stringToIntegerDefault('-32', undefined, 10));
        checkEqual(undefined, stringToIntegerDefault('-31.5', undefined, 10));
        checkEqual(-32, stringToIntegerDefault('-100000', undefined, 2));
        checkEqual(-31, stringToIntegerDefault('-11111', undefined, 2));
        checkEqual(undefined, stringToIntegerDefault('-11111.1', undefined, 2));
        checkEqual(undefined, stringToIntegerDefault('-11111.01', undefined, 2));
        checkEqual(-32, stringToIntegerDefault('-40', undefined, 8));
        checkEqual(-31, stringToIntegerDefault('-37', undefined, 8));
        checkEqual(undefined, stringToIntegerDefault('-37.4', undefined, 8));
        checkEqual(-32, stringToIntegerDefault('-20', undefined, 16));
        checkEqual(-31, stringToIntegerDefault('-1f', undefined, 16));
        checkEqual(undefined, stringToIntegerDefault('-1f.8', undefined, 16));
        checkEqual(-32, stringToIntegerDefault('-44', undefined, 7));
        checkEqual(-31, stringToIntegerDefault('-43', undefined, 7));
        checkEqual(-255, stringToIntegerDefault('-255', undefined, 10));
        checkEqual(-11, stringToIntegerDefault('-11', undefined, 10));
        checkEqual(-255, stringToIntegerDefault('-FF', undefined, 16));
        checkEqual(-16, stringToIntegerDefault('-20', undefined, 8));
        checkEqual(-255, stringToIntegerDefault('-ff', undefined, 16));
        checkEqual(-11, stringToIntegerDefault('-b', undefined, 16));
        checkEqual(-127, stringToIntegerDefault('-177', undefined, 8));
        checkEqual(-10, stringToIntegerDefault('-12', undefined, 8));
        checkEqual(-3, stringToIntegerDefault('-11', undefined, 2));
        checkEqual(-15, stringToIntegerDefault('-1111', undefined, 2)); // Default Value

        checkEqual(undefined, stringToIntegerDefault('abc'));
        checkEqual(null, stringToIntegerDefault('abc', null, 10));
        checkEqual(NaN, stringToIntegerDefault('abc', NaN, 10));
        checkEqual(undefined, stringToIntegerDefault('0x123'));
        checkEqual(undefined, stringToIntegerDefault('+0x123'));
        checkEqual(undefined, stringToIntegerDefault('-0x123'));
        checkEqual(undefined, stringToIntegerDefault('0x123'));
        checkEqual(undefined, stringToIntegerDefault('+0x123'));
        checkEqual(undefined, stringToIntegerDefault('-0x123'));
        checkEqual(undefined, stringToIntegerDefault('Infinity'));
        checkEqual(undefined, stringToIntegerDefault('infinity'));
        checkEqual(undefined, stringToIntegerDefault('inf'));
        checkEqual(undefined, stringToIntegerDefault('info')); // Exception

        var i = 0;
        i += 1;
        checkEqual(true, isThrownException(function () {
          stringToIntegerDefault(123);
        }, new TypeError().name), "test stringToIntegerDefault exception ".concat(i));
        i += 1;
        checkEqual(false, isThrownException(function () {
          stringToIntegerDefault('123', undefined, 2);
        }, new TypeError().name), "test stringToIntegerDefault exception ".concat(i));
        i += 1;
        checkEqual(true, isThrownException(function () {
          stringToIntegerDefault('123', undefined, 2.5);
        }, new TypeError().name), "test stringToIntegerDefault exception ".concat(i));
        i += 1;
        checkEqual(true, isThrownException(function () {
          stringToIntegerDefault('123', undefined, 1);
        }, new RangeError().name), "test stringToIntegerDefault exception ".concat(i));
        i += 1;
        checkEqual(false, isThrownException(function () {
          stringToIntegerDefault('123', undefined, 36);
        }, new TypeError().name), "test stringToIntegerDefault exception ".concat(i));
        i += 1;
        checkEqual(true, isThrownException(function () {
          stringToIntegerDefault('123', undefined, 37);
        }, new RangeError().name), "test stringToIntegerDefault exception ".concat(i)); // Object Named Parameter

        checkEqual(-123, stringToIntegerDefault({
          value: '-0123'
        }));
        checkEqual(null, stringToIntegerDefault({
          value: 'abc',
          defaultValue: null
        }));
        checkEqual(undefined, stringToIntegerDefault({
          value: 'abc'
        }));
        checkEqual(-15, stringToIntegerDefault({
          value: '-1111',
          radix: 2
        }));
      });
    };

    var test_valueToInteger = function test_valueToInteger() {
      it('test_valueToInteger', function () {
        // Integer
        checkEqual(123, valueToInteger('123'));
        checkEqual(123, valueToInteger('0123'));
        checkEqual(123, valueToInteger('+123'));
        checkEqual(-123, valueToInteger('-0123'));
        checkEqual(NaN, valueToInteger(' 123'), '1');
        checkEqual(NaN, valueToInteger('123 '), '2');
        checkEqual(NaN, valueToInteger(' 123 '), '3');
        checkEqual(NaN, valueToInteger('　123'), '4');
        checkEqual(NaN, valueToInteger('123　'), '5');
        checkEqual(NaN, valueToInteger('　123　'), '6');
        checkEqual(NaN, valueToInteger('123 0'));
        checkEqual(NaN, valueToInteger('0 123'));
        checkEqual(NaN, valueToInteger('1 123'));
        checkEqual(NaN, valueToInteger('123a'));
        checkEqual(NaN, valueToInteger('a123')); // Decimal

        checkEqual(123, valueToInteger('123.4'));
        checkEqual(123, valueToInteger('0123.4'));
        checkEqual(123, valueToInteger('+123.4'));
        checkEqual(-123, valueToInteger('-0123.4'));
        checkEqual(124, valueToInteger('123.5'));
        checkEqual(124, valueToInteger('0123.5'));
        checkEqual(124, valueToInteger('+123.5'));
        checkEqual(-124, valueToInteger('-0123.5'));
        checkEqual(NaN, valueToInteger(' 123.4'));
        checkEqual(NaN, valueToInteger('123.4 '));
        checkEqual(NaN, valueToInteger(' 123.4 '));
        checkEqual(NaN, valueToInteger('　123.4'));
        checkEqual(NaN, valueToInteger('123.4　'));
        checkEqual(NaN, valueToInteger('　123.4　'));
        checkEqual(NaN, valueToInteger('123.4 0'));
        checkEqual(NaN, valueToInteger('0 123.4'));
        checkEqual(NaN, valueToInteger('1 123.4'));
        checkEqual(NaN, valueToInteger('123 .4'));
        checkEqual(NaN, valueToInteger('123. 4'));
        checkEqual(NaN, valueToInteger('123.4a'));
        checkEqual(NaN, valueToInteger('a123.4'));
        checkEqual(123, valueToInteger('123.45'));
        checkEqual(NaN, valueToInteger('123.4.5')); // space string

        checkEqual(NaN, valueToInteger(''));
        checkEqual(NaN, valueToInteger(' '));
        checkEqual(NaN, valueToInteger('　')); // exponential notation

        checkEqual(3, valueToInteger(3.14));
        checkEqual(3, valueToInteger('3.14'));
        checkEqual(3, valueToInteger('314e-2'));
        checkEqual(3, valueToInteger('0.0314E+2'));
        checkEqual(0, valueToInteger('.14')); // exponential notation detail

        checkEqual(1, valueToInteger('1.'));
        checkEqual(NaN, valueToInteger('1.1e'));
        checkEqual(NaN, valueToInteger('1.1e+'));
        checkEqual(100000, valueToInteger('1e+5'));
        checkEqual(0, valueToInteger('1e-5'));
        checkEqual(NaN, valueToInteger('1.e'));
        checkEqual(NaN, valueToInteger('1.e+'));
        checkEqual(100000, valueToInteger('1.e+5')); // Number different

        checkEqual(NaN, valueToInteger('0x123'));
        checkEqual(NaN, valueToInteger('+0x123'));
        checkEqual(NaN, valueToInteger('-0x123'));
        checkEqual(NaN, valueToInteger('0o123'));
        checkEqual(NaN, valueToInteger('+0o123'));
        checkEqual(NaN, valueToInteger('-0o123'));
        checkEqual(NaN, valueToInteger('Infinity'));
        checkEqual(NaN, valueToInteger('infinity'));
        checkEqual(NaN, valueToInteger('inf'));
        checkEqual(NaN, valueToInteger('info')); // Number

        checkEqual(123, valueToInteger(123));
        checkEqual(-123, valueToInteger(-123));
        checkEqual(1, valueToInteger(1.23));
        checkEqual(2, valueToInteger(1.67));
        checkEqual(-1, valueToInteger(-1.23));
        checkEqual(-2, valueToInteger(-1.67));
        checkEqual(Infinity, valueToInteger(Infinity));
        checkEqual(-Infinity, valueToInteger(-Infinity));
        checkEqual(NaN, valueToInteger(NaN)); // Default

        checkEqual(null, valueToIntegerDefault('', null));
        checkEqual(NaN, valueToIntegerDefault(NaN, null)); // Other

        checkEqual(NaN, valueToInteger(null));
        checkEqual(NaN, valueToInteger(undefined));
        checkEqual(NaN, valueToInteger({}));
        checkEqual(NaN, valueToInteger({
          a: 1
        }));
        checkEqual(NaN, valueToInteger([]));
        checkEqual(NaN, valueToInteger([1]));
        checkEqual(NaN, valueToInteger([123]));
      });
    };

    test_numberToString();
    test_valueToString();
    test_StringCast_standard();
    test_toString_standard();
    test_NumberCast_standard();
    test_parseFloat_standard();
    test_parseInt_standard();
    test_stringToNumber();
    test_stringToNumberDefault();
    test_valueToNumber();
    test_stringToInteger();
    test_stringToIntegerDefault();
    test_valueToInteger();
  });
};

exports.test_execute_convert = test_execute_convert;
var _default = {
  test_execute_convert: test_execute_convert
};
exports["default"] = _default;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.test_execute_number = void 0;

/* eslint-disable max-len */

/* eslint-disable no-var */
var test_execute_number = function test_execute_number(parts) {
  var _parts$test = parts.test,
      describe = _parts$test.describe,
      it = _parts$test.it;
  describe('test_execute_number', function () {
    var _parts$test2 = parts.test,
        checkEqual = _parts$test2.checkEqual,
        isThrown = _parts$test2.isThrown;
    var _parts$number = parts.number,
        isMultiples = _parts$number.isMultiples,
        isEven = _parts$number.isEven,
        isOdd = _parts$number.isOdd,
        round = _parts$number.round,
        nearEqual = _parts$number.nearEqual,
        inRange = _parts$number.inRange,
        randomInt = _parts$number.randomInt;

    var test_isMultiples = function test_isMultiples() {
      it('test_isMultiples', function () {
        checkEqual(true, isMultiples(10, 2));
        checkEqual(true, isMultiples(10, 5));
        checkEqual(false, isMultiples(10, 3));
        checkEqual(false, isMultiples(9, 2));
        checkEqual(false, isMultiples(9, 5));
        checkEqual(true, isMultiples(9, 3));
        checkEqual(false, isMultiples(0, 2));
        checkEqual(false, isMultiples(-1, 2));
        checkEqual(true, isMultiples(-2, 2)); // Object Named Parameter

        checkEqual(true, isMultiples({
          number: 10,
          radix: 2
        }));
        checkEqual(false, isMultiples({
          number: 9,
          radix: 2
        })); // exception

        checkEqual(false, isThrown(function () {
          isMultiples(10, 2);
        }));
        checkEqual(true, isThrown(function () {
          isMultiples(10.1, 2);
        }));
        checkEqual(true, isThrown(function () {
          isMultiples(10, 2.2);
        }));
      });
    };

    var test_Math_round = function test_Math_round() {
      it('test_Math_round', function () {
        checkEqual(5, Math.round(5));
        checkEqual(5, Math.round(5.4));
        checkEqual(6, Math.round(5.5));
        checkEqual(-5, Math.round(-5));
        checkEqual(-5, Math.round(-5.4));
        checkEqual(-5, Math.round(-5.5));
      });
    };

    var test_round = function test_round() {
      it('test_round', function () {
        checkEqual(5, round(5));
        checkEqual(5, round(5.4));
        checkEqual(6, round(5.5));
        checkEqual(5, round(5, 0));
        checkEqual(5, round(5.4, 0));
        checkEqual(6, round(5.5, 0));
        checkEqual(5.4, round(5.44, 1));
        checkEqual(5.5, round(5.45, 1));
        checkEqual(5.5, round(5.54, 1));
        checkEqual(5.6, round(5.55, 1));
        checkEqual(5.04, round(5.044, 2));
        checkEqual(5.05, round(5.045, 2));
        checkEqual(5.05, round(5.054, 2));
        checkEqual(5.06, round(5.055, 2));
        checkEqual(540, round(544, -1));
        checkEqual(550, round(545, -1));
        checkEqual(550, round(554, -1));
        checkEqual(560, round(555, -1));
        checkEqual(5400, round(5440, -2));
        checkEqual(5500, round(5450, -2));
        checkEqual(5500, round(5540, -2));
        checkEqual(5600, round(5550, -2));
        checkEqual(-5, round(-5));
        checkEqual(-5, round(-5.4));
        checkEqual(-6, round(-5.5));
        checkEqual(-5, round(-5, 0));
        checkEqual(-5, round(-5.4, 0));
        checkEqual(-6, round(-5.5, 0));
        checkEqual(-5.4, round(-5.44, 1));
        checkEqual(-5.5, round(-5.45, 1));
        checkEqual(-5.5, round(-5.54, 1));
        checkEqual(-5.6, round(-5.55, 1));
        checkEqual(-5.04, round(-5.044, 2));
        checkEqual(-5.05, round(-5.045, 2));
        checkEqual(-5.05, round(-5.054, 2));
        checkEqual(-5.06, round(-5.055, 2));
        checkEqual(-540, round(-544, -1));
        checkEqual(-550, round(-545, -1));
        checkEqual(-550, round(-554, -1));
        checkEqual(-560, round(-555, -1));
        checkEqual(-5400, round(-5440, -2));
        checkEqual(-5500, round(-5450, -2));
        checkEqual(-5500, round(-5540, -2));
        checkEqual(-5600, round(-5550, -2)); // Object Named Parameter

        checkEqual(6, round({
          value: 5.5
        }));
        checkEqual(5.06, round({
          value: 5.055,
          digit: 2
        }));
        checkEqual(5600, round({
          value: 5550,
          digit: -2
        })); // exception

        checkEqual(false, isThrown(function () {
          round(5.5, 2);
        }));
        checkEqual(true, isThrown(function () {
          round(5.5, 2.2);
        }));
      });
    };

    var test_nearEqual = function test_nearEqual() {
      it('test_nearEqual', function () {
        checkEqual(true, nearEqual(0.049999, 0.050011, 0.001));
        checkEqual(true, nearEqual(0.050, 0.051, 0.001));
        checkEqual(true, nearEqual(0.050, 0.0509, 0.001));
        checkEqual(true, nearEqual(0.050, 0.0510, 0.001));
        checkEqual(false, nearEqual(0.050, 0.051000001, 0.001));
        checkEqual(true, nearEqual(0.050011, 0.049999, 0.001));
        checkEqual(true, nearEqual(0.051, 0.050, 0.001));
        checkEqual(true, nearEqual(0.0509, 0.050, 0.001));
        checkEqual(true, nearEqual(0.0510, 0.050, 0.001));
        checkEqual(false, nearEqual(0.05100001, 0.050, 0.001)); // Object Named Parameter

        checkEqual(false, nearEqual({
          value1: 0.050,
          value2: 0.051000001,
          diff: 0.001
        }));
        checkEqual(true, nearEqual({
          value1: 0.050011,
          value2: 0.049999,
          diff: 0.001
        })); // exception

        checkEqual(false, isThrown(function () {
          nearEqual(0.50, 0.51, 0.001);
        }));
        checkEqual(true, isThrown(function () {
          nearEqual('0.50', 0.51, 0.001);
        }));
        checkEqual(true, isThrown(function () {
          nearEqual(0.50, '0.51', 0.001);
        }));
        checkEqual(true, isThrown(function () {
          nearEqual(0.50, 0.51, '0.001');
        }));
        checkEqual(true, isThrown(function () {
          nearEqual(0.50, 0.51, -0.001);
        }));
      });
    };

    var test_inRange = function test_inRange() {
      it('test_inRange', function () {
        checkEqual(true, inRange(20, 10, 30));
        checkEqual(true, inRange(10, 10, 30));
        checkEqual(true, inRange(30, 10, 30));
        checkEqual(false, inRange(9, 10, 30));
        checkEqual(false, inRange(31, 10, 30));
        checkEqual(false, inRange(9.99, 10, 30));
        checkEqual(false, inRange(30.01, 10, 30));
        checkEqual(true, inRange(10, 10, 10)); // Object Named Parameter

        checkEqual(true, inRange({
          value: 30,
          from: 10,
          to: 30
        }));
        checkEqual(false, inRange({
          value: 9,
          from: 10,
          to: 30
        })); // exception

        checkEqual(false, isThrown(function () {
          inRange(20, 10, 30);
        }));
        checkEqual(true, isThrown(function () {
          inRange('20', 10, 30);
        }));
        checkEqual(true, isThrown(function () {
          inRange(20, '10', 30);
        }));
        checkEqual(true, isThrown(function () {
          inRange(20, 10, '30');
        }));
      });
    };

    var test_randomInt = function test_randomInt() {
      it('test_randomInt', function () {
        checkEqual(5, randomInt(5, 5));
        var result = randomInt(1, 10);
        checkEqual(true, inRange(result, 1, 10)); // Object Named Parameter

        checkEqual(10, randomInt({
          min: 10,
          max: 10
        })); // exception

        checkEqual(false, isThrown(function () {
          randomInt(10, 10);
        }));
        checkEqual(true, isThrown(function () {
          randomInt('10', 10);
        }));
        checkEqual(true, isThrown(function () {
          randomInt(10, '10');
        }));
      });
    };

    test_isMultiples();
    test_Math_round();
    test_round();
    test_nearEqual();
    test_inRange();
    test_randomInt();
  });
};

exports.test_execute_number = test_execute_number;
var _default = {
  test_execute_number: test_execute_number
};
exports["default"] = _default;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.test_execute_string = void 0;

var test_execute_string = function test_execute_string(parts) {
  var _parts$test = parts.test,
      describe = _parts$test.describe,
      it = _parts$test.it;
  describe('test_execute_string', function () {
    var _parts$test2 = parts.test,
        checkEqual = _parts$test2.checkEqual,
        isThrown = _parts$test2.isThrown,
        isThrownException = _parts$test2.isThrownException,
        testCounter = _parts$test2.testCounter;
    var _parts$string = parts.string,
        matchFormat = _parts$string.matchFormat,
        replaceAll = _parts$string.replaceAll,
        indexOfFirst = _parts$string.indexOfFirst,
        indexOfLast = _parts$string.indexOfLast,
        isFirst = _parts$string.isFirst,
        isLast = _parts$string.isLast,
        isBothEnds = _parts$string.isBothEnds,
        includeFirst = _parts$string.includeFirst,
        includeLast = _parts$string.includeLast,
        includeBothEnds = _parts$string.includeBothEnds,
        excludeFirst = _parts$string.excludeFirst,
        excludeLast = _parts$string.excludeLast,
        excludeBothEnds = _parts$string.excludeBothEnds,
        trimFirst = _parts$string.trimFirst,
        trimLast = _parts$string.trimLast,
        trimBothEnds = _parts$string.trimBothEnds,
        subIndex = _parts$string.subIndex,
        subLength = _parts$string.subLength,
        subFirst = _parts$string.subFirst,
        subLast = _parts$string.subLast,
        deleteIndex = _parts$string.deleteIndex,
        deleteLength = _parts$string.deleteLength,
        deleteFirst = _parts$string.deleteFirst,
        deleteLast = _parts$string.deleteLast,
        insert = _parts$string.insert,
        add = _parts$string.add;

    var test_matchFormat = function test_matchFormat() {
      it('test_matchFormat', function () {
        checkEqual(true, matchFormat('number', '123'));
        checkEqual(false, matchFormat('number', '12a'));
        checkEqual(false, matchFormat('number', '-123'));
        checkEqual(true, matchFormat('integer', '-123'));
        checkEqual(true, matchFormat('date_y/m/d', '2019/11/05'));
        checkEqual(true, matchFormat('date_y/m/d', '2019/9/5'));
        checkEqual(true, matchFormat('date_y/m/d', '19/1/1'));
        checkEqual(true, matchFormat('date_y/m/d', '9/11/11'));
        checkEqual(false, matchFormat('date_y/m/d', '/11/11'));
        checkEqual(false, matchFormat('date_y/m/d', '9//1'));
        checkEqual(false, matchFormat('date_y/m/d', '9/1/'));
        checkEqual(false, matchFormat('date_y/m/d', '2019-09-09'));
        checkEqual(false, matchFormat('date_y/m/d', '2019-9-9'));
        checkEqual(true, matchFormat('date_yyyy/m/d', '2019/11/05'));
        checkEqual(true, matchFormat('date_yyyy/m/d', '2019/9/5'));
        checkEqual(false, matchFormat('date_yyyy/m/d', '19/1/1'));
        checkEqual(false, matchFormat('date_yyyy/m/d', '9/11/11'));
        checkEqual(false, matchFormat('date_yyyy/m/d', '/11/11'));
        checkEqual(false, matchFormat('date_yyyy/m/d', '9//1'));
        checkEqual(false, matchFormat('date_yyyy/m/d', '9/1/'));
        checkEqual(false, matchFormat('date_yyyy/m/d', '2019-09-09'));
        checkEqual(false, matchFormat('date_yyyy/m/d', '2019-9-9'));
        checkEqual(true, matchFormat('date_yyyy/mm/dd', '2019/11/05'));
        checkEqual(false, matchFormat('date_yyyy/mm/dd', '2019/9/5'));
        checkEqual(false, matchFormat('date_yyyy/mm/dd', '19/1/1'));
        checkEqual(false, matchFormat('date_yyyy/mm/dd', '9/11/11'));
        checkEqual(false, matchFormat('date_yyyy/mm/dd', '/11/11'));
        checkEqual(false, matchFormat('date_yyyy/mm/dd', '9//1'));
        checkEqual(false, matchFormat('date_yyyy/mm/dd', '9/1/'));
        checkEqual(false, matchFormat('date_yyyy/mm/dd', '2019-09-09'));
        checkEqual(false, matchFormat('date_yyyy/mm/dd', '2019-9-9'));
        checkEqual(true, matchFormat('date_y-m-d', '2019-11-05'));
        checkEqual(true, matchFormat('date_y-m-d', '2019-9-5'));
        checkEqual(true, matchFormat('date_y-m-d', '19-1-1'));
        checkEqual(true, matchFormat('date_y-m-d', '9-11-11'));
        checkEqual(false, matchFormat('date_y-m-d', '-11-11'));
        checkEqual(false, matchFormat('date_y-m-d', '9--1'));
        checkEqual(false, matchFormat('date_y-m-d', '9-1-'));
        checkEqual(false, matchFormat('date_y-m-d', '2019/09/09'));
        checkEqual(false, matchFormat('date_y-m-d', '2019/9/9'));
        checkEqual(true, matchFormat('date_yyyy-m-d', '2019-11-05'));
        checkEqual(true, matchFormat('date_yyyy-m-d', '2019-9-5'));
        checkEqual(false, matchFormat('date_yyyy-m-d', '19-1-1'));
        checkEqual(false, matchFormat('date_yyyy-m-d', '9-11-11'));
        checkEqual(false, matchFormat('date_yyyy-m-d', '-11-11'));
        checkEqual(false, matchFormat('date_yyyy-m-d', '9--1'));
        checkEqual(false, matchFormat('date_yyyy-m-d', '9-1-'));
        checkEqual(false, matchFormat('date_yyyy-m-d', '2019/09/09'));
        checkEqual(false, matchFormat('date_yyyy-m-d', '2019/9/9'));
        checkEqual(true, matchFormat('date_yyyy-mm-dd', '2019-11-05'));
        checkEqual(false, matchFormat('date_yyyy-mm-dd', '2019-9-5'));
        checkEqual(false, matchFormat('date_yyyy-mm-dd', '19-1-1'));
        checkEqual(false, matchFormat('date_yyyy-mm-dd', '9-11-11'));
        checkEqual(false, matchFormat('date_yyyy-mm-dd', '-11-11'));
        checkEqual(false, matchFormat('date_yyyy-mm-dd', '9--1'));
        checkEqual(false, matchFormat('date_yyyy-mm-dd', '9-1-'));
        checkEqual(false, matchFormat('date_yyyy-mm-dd', '2019/09/09'));
        checkEqual(false, matchFormat('date_yyyy-mm-dd', '2019/9/9')); // Object Named Parameter

        checkEqual(false, matchFormat({
          formatName: 'number',
          value: '-123'
        }));
        checkEqual(true, matchFormat({
          formatName: 'integer',
          value: '-123'
        })); // Exception

        checkEqual(false, isThrownException(function () {
          matchFormat('integer', 'abc');
        }, new TypeError().name), 'test matchFormat exception');
        checkEqual(true, isThrownException(function () {
          matchFormat(null, 'abc');
        }, new TypeError().name), 'test matchFormat exception');
        checkEqual(true, isThrownException(function () {
          matchFormat('integer', 123);
        }, new TypeError().name), 'test matchFormat exception');
        checkEqual(true, isThrownException(function () {
          matchFormat('aaa', 'abc');
        }, new RangeError().name), 'test matchFormat exception');
      });
    };

    var test_replaceAll = function test_replaceAll() {
      it('test_replaceAll', function () {
        checkEqual('aaaa', replaceAll('abab', 'b', 'a'));
        checkEqual('aaaa', replaceAll('abab', 'ab', 'aa'));
        checkEqual('abcabc', replaceAll('abab', 'ab', 'abc')); // Object Named Parameter

        checkEqual('abcabc', replaceAll({
          str: 'abab',
          before: 'ab',
          after: 'abc'
        })); // exception

        checkEqual(false, isThrown(function () {
          replaceAll('1212', '12', '123');
        }));
        checkEqual(true, isThrown(function () {
          replaceAll(1212, '12', '123');
        }));
        checkEqual(true, isThrown(function () {
          replaceAll('1212', 12, '123');
        }));
        checkEqual(true, isThrown(function () {
          replaceAll('1212', '12', 123);
        }));
      });
    };

    var test_indexOf_standard = function test_indexOf_standard() {
      it('test_indexOf_standard', function () {
        if (parts.platform.isInternetExplorer()) {
          return;
        }

        if (parts.platform.isWindowsScriptHost()) {
          return;
        }

        checkEqual(0, 'a'.indexOf('a'));
        checkEqual(0, 'a'.indexOf('')); // strange

        checkEqual(-1, ''.indexOf('a'));
        checkEqual(0, ''.indexOf('')); // strange

        checkEqual(0, 'abc'.indexOf('a'));
        checkEqual(1, 'abc'.indexOf('b'));
        checkEqual(2, 'abc'.indexOf('c'));
        checkEqual(-1, 'abc'.indexOf('d'));
        checkEqual(0, 'abc'.indexOf('')); // strange

        checkEqual(0, 'abcabc'.indexOf('a'));
        checkEqual(1, 'abcabc'.indexOf('b'));
        checkEqual(2, 'abcabc'.indexOf('c'));
        checkEqual(-1, 'abcabc'.indexOf('d'));
        checkEqual(0, 'abcabc'.indexOf('')); // strange
        // startIndex

        checkEqual(0, 'abcabc'.indexOf('a', -1)); // ?

        checkEqual(0, 'abcabc'.indexOf('a', 0));
        checkEqual(3, 'abcabc'.indexOf('a', 1));
        checkEqual(3, 'abcabc'.indexOf('a', 2));
        checkEqual(3, 'abcabc'.indexOf('a', 3));
        checkEqual(-1, 'abcabc'.indexOf('a', 4));
        checkEqual(-1, 'abcabc'.indexOf('a', 5));
        checkEqual(-1, 'abcabc'.indexOf('a', 6)); // ?

        checkEqual(1, 'abcabc'.indexOf('b', -1)); // ?

        checkEqual(1, 'abcabc'.indexOf('b', 0));
        checkEqual(1, 'abcabc'.indexOf('b', 1));
        checkEqual(4, 'abcabc'.indexOf('b', 2));
        checkEqual(4, 'abcabc'.indexOf('b', 3));
        checkEqual(4, 'abcabc'.indexOf('b', 4));
        checkEqual(-1, 'abcabc'.indexOf('b', 5));
        checkEqual(-1, 'abcabc'.indexOf('b', 6)); // ?

        checkEqual(2, 'abcabc'.indexOf('c', -1)); // ?

        checkEqual(2, 'abcabc'.indexOf('c', 0));
        checkEqual(2, 'abcabc'.indexOf('c', 1));
        checkEqual(2, 'abcabc'.indexOf('c', 2));
        checkEqual(5, 'abcabc'.indexOf('c', 3));
        checkEqual(5, 'abcabc'.indexOf('c', 4));
        checkEqual(5, 'abcabc'.indexOf('c', 5));
        checkEqual(-1, 'abcabc'.indexOf('c', 6)); // ?
      });
    };

    var test_indexOfFirst = function test_indexOfFirst() {
      it('test_indexOfFirst', function () {
        checkEqual(0, indexOfFirst('a', 'a'));
        checkEqual(-1, indexOfFirst('a', '')); // not strange

        checkEqual(-1, indexOfFirst('', 'a'));
        checkEqual(-1, indexOfFirst('', '')); // not strange

        checkEqual(0, indexOfFirst('abc', 'a'));
        checkEqual(1, indexOfFirst('abc', 'b'));
        checkEqual(2, indexOfFirst('abc', 'c'));
        checkEqual(-1, indexOfFirst('abc', 'd'));
        checkEqual(-1, indexOfFirst('abc', '')); // not strange

        checkEqual(0, indexOfFirst('abcabc', 'a'));
        checkEqual(1, indexOfFirst('abcabc', 'b'));
        checkEqual(2, indexOfFirst('abcabc', 'c'));
        checkEqual(-1, indexOfFirst('abcabc', 'd'));
        checkEqual(-1, indexOfFirst('abcabc', '')); // not strange
        // startIndex

        checkEqual(true, isThrown(function () {
          return indexOfFirst('abcabc', 'a', -1);
        }));
        checkEqual(0, indexOfFirst('abcabc', 'a', 0));
        checkEqual(3, indexOfFirst('abcabc', 'a', 1));
        checkEqual(3, indexOfFirst('abcabc', 'a', 2));
        checkEqual(3, indexOfFirst('abcabc', 'a', 3));
        checkEqual(-1, indexOfFirst('abcabc', 'a', 4));
        checkEqual(-1, indexOfFirst('abcabc', 'a', 5));
        checkEqual(true, isThrown(function () {
          return indexOfFirst('abcabc', 'a', 6);
        }));
        checkEqual(true, isThrown(function () {
          return indexOfFirst('abcabc', 'b', -1);
        }));
        checkEqual(1, indexOfFirst('abcabc', 'b', 0));
        checkEqual(1, indexOfFirst('abcabc', 'b', 1));
        checkEqual(4, indexOfFirst('abcabc', 'b', 2));
        checkEqual(4, indexOfFirst('abcabc', 'b', 3));
        checkEqual(4, indexOfFirst('abcabc', 'b', 4));
        checkEqual(-1, indexOfFirst('abcabc', 'b', 5));
        checkEqual(true, isThrown(function () {
          return indexOfFirst('abcabc', 'b', 6);
        }));
        checkEqual(true, isThrown(function () {
          return indexOfFirst('abcabc', 'c', -1);
        }));
        checkEqual(2, indexOfFirst('abcabc', 'c', 0));
        checkEqual(2, indexOfFirst('abcabc', 'c', 1));
        checkEqual(2, indexOfFirst('abcabc', 'c', 2));
        checkEqual(5, indexOfFirst('abcabc', 'c', 3));
        checkEqual(5, indexOfFirst('abcabc', 'c', 4));
        checkEqual(5, indexOfFirst('abcabc', 'c', 5));
        checkEqual(true, isThrown(function () {
          return indexOfFirst('abcabc', 'c', 6);
        }));
      });
    };

    var test_lastIndexOf_standard = function test_lastIndexOf_standard() {
      it('test_lastIndexOf_standard', function () {
        if (parts.platform.isInternetExplorer()) {
          return;
        }

        if (parts.platform.isWindowsScriptHost()) {
          return;
        }

        checkEqual(0, 'a'.lastIndexOf('a'));
        checkEqual(1, 'a'.lastIndexOf('')); // strange

        checkEqual(-1, ''.lastIndexOf('a'));
        checkEqual(0, ''.lastIndexOf('')); // strange

        checkEqual(0, 'abc'.lastIndexOf('a'));
        checkEqual(1, 'abc'.lastIndexOf('b'));
        checkEqual(2, 'abc'.lastIndexOf('c'));
        checkEqual(-1, 'abc'.lastIndexOf('d'));
        checkEqual(3, 'abc'.lastIndexOf('')); // strange

        checkEqual(3, 'abcabc'.lastIndexOf('a'));
        checkEqual(4, 'abcabc'.lastIndexOf('b'));
        checkEqual(5, 'abcabc'.lastIndexOf('c'));
        checkEqual(-1, 'abcabc'.lastIndexOf('d'));
        checkEqual(6, 'abcabc'.lastIndexOf('')); // strange
        // startIndex

        checkEqual(0, 'abcabc'.lastIndexOf('a', -1)); // ??

        checkEqual(0, 'abcabc'.lastIndexOf('a', 0));
        checkEqual(0, 'abcabc'.lastIndexOf('a', 1));
        checkEqual(0, 'abcabc'.lastIndexOf('a', 2));
        checkEqual(3, 'abcabc'.lastIndexOf('a', 3));
        checkEqual(3, 'abcabc'.lastIndexOf('a', 4));
        checkEqual(3, 'abcabc'.lastIndexOf('a', 5));
        checkEqual(3, 'abcabc'.lastIndexOf('a', 6)); // ?

        checkEqual(-1, 'abcabc'.lastIndexOf('b', -1)); // ?

        checkEqual(-1, 'abcabc'.lastIndexOf('b', 0));
        checkEqual(1, 'abcabc'.lastIndexOf('b', 1));
        checkEqual(1, 'abcabc'.lastIndexOf('b', 2));
        checkEqual(1, 'abcabc'.lastIndexOf('b', 3));
        checkEqual(4, 'abcabc'.lastIndexOf('b', 4));
        checkEqual(4, 'abcabc'.lastIndexOf('b', 5));
        checkEqual(4, 'abcabc'.lastIndexOf('b', 6)); // ?

        checkEqual(-1, 'abcabc'.lastIndexOf('c', -1)); // ?

        checkEqual(-1, 'abcabc'.lastIndexOf('c', 0));
        checkEqual(-1, 'abcabc'.lastIndexOf('c', 1));
        checkEqual(2, 'abcabc'.lastIndexOf('c', 2));
        checkEqual(2, 'abcabc'.lastIndexOf('c', 3));
        checkEqual(2, 'abcabc'.lastIndexOf('c', 4));
        checkEqual(5, 'abcabc'.lastIndexOf('c', 5));
        checkEqual(5, 'abcabc'.lastIndexOf('c', 6)); // ?
      });
    };

    var test_indexOfLast = function test_indexOfLast() {
      it('test_indexOfLast', function () {
        checkEqual(0, indexOfLast('a', 'a'));
        checkEqual(-1, indexOfLast('a', '')); // not strange

        checkEqual(-1, indexOfLast('', 'a'));
        checkEqual(-1, indexOfLast('', '')); // not strange

        checkEqual(0, indexOfLast('abc', 'a'));
        checkEqual(1, indexOfLast('abc', 'b'));
        checkEqual(2, indexOfLast('abc', 'c'));
        checkEqual(-1, indexOfLast('abc', 'd'));
        checkEqual(-1, indexOfLast('abc', '')); // not strange

        checkEqual(3, indexOfLast('abcabc', 'a'));
        checkEqual(4, indexOfLast('abcabc', 'b'));
        checkEqual(5, indexOfLast('abcabc', 'c'));
        checkEqual(-1, indexOfLast('abcabc', 'd'));
        checkEqual(-1, indexOfLast('abcabc', '')); // not strange
        // startIndex

        checkEqual(true, isThrown(function () {
          return indexOfLast('abcabc', 'a', -1);
        }));
        checkEqual(0, indexOfLast('abcabc', 'a', 0));
        checkEqual(0, indexOfLast('abcabc', 'a', 1));
        checkEqual(0, indexOfLast('abcabc', 'a', 2));
        checkEqual(3, indexOfLast('abcabc', 'a', 3));
        checkEqual(3, indexOfLast('abcabc', 'a', 4));
        checkEqual(3, indexOfLast('abcabc', 'a', 5));
        checkEqual(true, isThrown(function () {
          return indexOfLast('abcabc', 'a', 6);
        }));
        checkEqual(true, isThrown(function () {
          return indexOfLast('abcabc', 'b', -1);
        }));
        checkEqual(-1, indexOfLast('abcabc', 'b', 0));
        checkEqual(1, indexOfLast('abcabc', 'b', 1));
        checkEqual(1, indexOfLast('abcabc', 'b', 2));
        checkEqual(1, indexOfLast('abcabc', 'b', 3));
        checkEqual(4, indexOfLast('abcabc', 'b', 4));
        checkEqual(4, indexOfLast('abcabc', 'b', 5));
        checkEqual(true, isThrown(function () {
          return indexOfLast('abcabc', 'b', 6);
        }));
        checkEqual(true, isThrown(function () {
          return indexOfLast('abcabc', 'c', -1);
        }));
        checkEqual(-1, indexOfLast('abcabc', 'c', 0));
        checkEqual(-1, indexOfLast('abcabc', 'c', 1));
        checkEqual(2, indexOfLast('abcabc', 'c', 2));
        checkEqual(2, indexOfLast('abcabc', 'c', 3));
        checkEqual(2, indexOfLast('abcabc', 'c', 4));
        checkEqual(5, indexOfLast('abcabc', 'c', 5));
        checkEqual(true, isThrown(function () {
          return indexOfLast('abcabc', 'c', 6);
        }));
      });
    };

    var test_isFirst = function test_isFirst() {
      it('test_isFirst', function () {
        checkEqual(true, isFirst('123', '1'));
        checkEqual(true, isFirst('123', '12'));
        checkEqual(false, isFirst('123', '13'));
        checkEqual(false, isFirst('123', '2'));
        checkEqual(true, isFirst('ABC', 'A'));
        checkEqual(true, isFirst('ABC', 'AB'));
        checkEqual(false, isFirst('ABC', 'AC'));
        checkEqual(false, isFirst('ABC', 'a'));
        checkEqual(false, isFirst('ABC', 'B'));
      });
    };

    var test_isLast = function test_isLast() {
      it('test_isLast', function () {
        checkEqual(true, isLast('123', '3'));
        checkEqual(true, isLast('123', '23'));
        checkEqual(false, isLast('123', '13'));
        checkEqual(false, isLast('123', '2'));
        checkEqual(true, isLast('ABC', 'C'));
        checkEqual(true, isLast('ABC', 'BC'));
        checkEqual(false, isLast('ABC', 'AC'));
        checkEqual(false, isLast('ABC', 'c'));
        checkEqual(false, isLast('ABC', 'B'));
        checkEqual(false, isLast('1', '23'));
      });
    };

    var test_isBothEnds = function test_isBothEnds() {
      it('test_isBothEnds', function () {
        checkEqual(true, isBothEnds('121', '1'));
        checkEqual(false, isBothEnds('121', '2'));
        checkEqual(true, isBothEnds('121', '12', '21'));
        checkEqual(true, isBothEnds('ABA', 'A'));
        checkEqual(false, isBothEnds('ABA', 'a'));
        checkEqual(false, isBothEnds('ABA', 'B'));
        checkEqual(true, isBothEnds('ABAB', 'AB'));
        checkEqual(false, isBothEnds('ABAD', 'A'));
        checkEqual(true, isBothEnds('ABAD', 'A', 'D'));
        checkEqual(true, isBothEnds('{AB}', '{', '}'));
        checkEqual(true, isBothEnds('{{}}', '{', '}'));
        checkEqual(false, isBothEnds('A{B}', '{', '}'));
        checkEqual(false, isBothEnds('{AB}', '}', '}'));
        checkEqual(false, isBothEnds('{AB}', '{', '{'));
        checkEqual(false, isBothEnds('1', '1'));
        checkEqual(true, isBothEnds('11', '1')); // Object Named Parameter

        checkEqual(true, isBothEnds({
          str: 'ABA',
          search: 'A'
        }));
        checkEqual(false, isBothEnds({
          str: 'ABA',
          search: 'a'
        }));
        checkEqual(true, isBothEnds({
          str: 'ABA',
          searchFirst: 'A'
        }));
        checkEqual(false, isBothEnds({
          str: 'ABAD',
          searchFirst: 'A'
        }));
        checkEqual(true, isBothEnds({
          str: 'ABAD',
          searchFirst: 'A',
          searchLast: 'D'
        }));
      });
    };

    var test_includeFirst = function test_includeFirst() {
      it('test_includeFirst', function () {
        checkEqual('123', includeFirst('123', '1'));
        checkEqual('123', includeFirst('123', '12'));
        checkEqual('13123', includeFirst('123', '13'));
        checkEqual('2123', includeFirst('123', '2'));
        checkEqual('ABC', includeFirst('ABC', 'A'));
        checkEqual('ABC', includeFirst('ABC', 'AB'));
        checkEqual('ACABC', includeFirst('ABC', 'AC'));
        checkEqual('aABC', includeFirst('ABC', 'a'));
        checkEqual('BABC', includeFirst('ABC', 'B'));
      });
    };

    var test_includeLast = function test_includeLast() {
      it('test_includeLast', function () {
        checkEqual('123', includeLast('123', '3'));
        checkEqual('123', includeLast('123', '23'));
        checkEqual('12313', includeLast('123', '13'));
        checkEqual('1232', includeLast('123', '2'));
        checkEqual('ABC', includeLast('ABC', 'C'));
        checkEqual('ABC', includeLast('ABC', 'BC'));
        checkEqual('ABCAC', includeLast('ABC', 'AC'));
        checkEqual('ABCc', includeLast('ABC', 'c'));
        checkEqual('ABCB', includeLast('ABC', 'B'));
      });
    };

    var test_includeBothEnds = function test_includeBothEnds() {
      it('test_includeBothEnds', function () {
        checkEqual('121', includeBothEnds('121', '1'));
        checkEqual('21212', includeBothEnds('121', '2'));
        checkEqual('121', includeBothEnds('121', '12', '21'));
        checkEqual('ABA', includeBothEnds('ABA', 'A'));
        checkEqual('aABAa', includeBothEnds('ABA', 'a'));
        checkEqual('BABAB', includeBothEnds('ABA', 'B'));
        checkEqual('ABAB', includeBothEnds('ABAB', 'AB'));
        checkEqual('AABADA', includeBothEnds('ABAD', 'A'));
        checkEqual('ABAD', includeBothEnds('ABAD', 'A', 'D'));
        checkEqual('{AB}', includeBothEnds('{AB}', '{', '}'));
        checkEqual('{{}}', includeBothEnds('{{}}', '{', '}'));
        checkEqual('{A{B}}', includeBothEnds('A{B}', '{', '}'));
        checkEqual('}{AB}}', includeBothEnds('{AB}', '}', '}'));
        checkEqual('{{AB}{', includeBothEnds('{AB}', '{', '{'));
        checkEqual('111', includeBothEnds('1', '1'));
        checkEqual('11', includeBothEnds('11', '1')); // Object Named Parameter

        checkEqual('ABA', includeBothEnds({
          str: 'ABA',
          value: 'A'
        }));
        checkEqual('aABAa', includeBothEnds({
          str: 'ABA',
          value: 'a'
        }));
        checkEqual('ABA', includeBothEnds({
          str: 'ABA',
          valueFirst: 'A'
        }));
        checkEqual('AABADA', includeBothEnds({
          str: 'ABAD',
          valueFirst: 'A'
        }));
        checkEqual('ABAD', includeBothEnds({
          str: 'ABAD',
          valueFirst: 'A',
          valueLast: 'D'
        }));
      });
    };

    var test_excludeFirst = function test_excludeFirst() {
      it('test_excludeFirst', function () {
        checkEqual('23', excludeFirst('123', '1'));
        checkEqual('3', excludeFirst('123', '12'));
        checkEqual('123', excludeFirst('123', '13'));
        checkEqual('123', excludeFirst('123', '2'));
        checkEqual('BC', excludeFirst('ABC', 'A'));
        checkEqual('C', excludeFirst('ABC', 'AB'));
        checkEqual('ABC', excludeFirst('ABC', 'AC'));
        checkEqual('ABC', excludeFirst('ABC', 'a'));
        checkEqual('ABC', excludeFirst('ABC', 'B'));
      });
    };

    var test_excludeLast = function test_excludeLast() {
      it('test_excludeLast', function () {
        checkEqual('12', excludeLast('123', '3'));
        checkEqual('1', excludeLast('123', '23'));
        checkEqual('123', excludeLast('123', '13'));
        checkEqual('123', excludeLast('123', '2'));
        checkEqual('AB', excludeLast('ABC', 'C'));
        checkEqual('A', excludeLast('ABC', 'BC'));
        checkEqual('ABC', excludeLast('ABC', 'AC'));
        checkEqual('ABC', excludeLast('ABC', 'c'));
        checkEqual('ABC', excludeLast('ABC', 'B'));
      });
    };

    var test_excludeBothEnds = function test_excludeBothEnds() {
      it('test_excludeBothEnds', function () {
        checkEqual('2', excludeBothEnds('121', '1'));
        checkEqual('121', excludeBothEnds('121', '2'));
        checkEqual('', excludeBothEnds('121', '12', '21'));
        checkEqual('B', excludeBothEnds('ABA', 'A'));
        checkEqual('ABA', excludeBothEnds('ABA', 'a'));
        checkEqual('ABA', excludeBothEnds('ABA', 'B'));
        checkEqual('', excludeBothEnds('ABAB', 'AB'));
        checkEqual('ABAD', excludeBothEnds('ABAD', 'A'));
        checkEqual('BA', excludeBothEnds('ABAD', 'A', 'D'));
        testCounter();
        checkEqual('AB', excludeBothEnds('{AB}', '{', '}'));
        checkEqual('{}', excludeBothEnds('{{}}', '{', '}'));
        checkEqual('A{B}', excludeBothEnds('A{B}', '{', '}'));
        checkEqual('{AB}', excludeBothEnds('{AB}', '}', '}'));
        checkEqual('{AB}', excludeBothEnds('{AB}', '{', '{'));
        checkEqual('1', excludeBothEnds('1', '1'));
        checkEqual('', excludeBothEnds('11', '1')); // Object Named Parameter

        checkEqual('B', excludeBothEnds({
          str: 'ABA',
          value: 'A'
        }));
        checkEqual('ABA', excludeBothEnds({
          str: 'ABA',
          value: 'a'
        }));
        checkEqual('B', excludeBothEnds({
          str: 'ABA',
          valueFirst: 'A'
        }));
        checkEqual('ABAD', excludeBothEnds({
          str: 'ABAD',
          valueFirst: 'A'
        }));
        checkEqual('BA', excludeBothEnds({
          str: 'ABAD',
          valueFirst: 'A',
          valueLast: 'D'
        }));
      });
    };

    var test_trimFirst = function test_trimFirst() {
      it('test_trimFirst', function () {
        checkEqual('23', trimFirst('123', ['1']));
        checkEqual('3', trimFirst('123', ['12']));
        checkEqual('123', trimFirst('123', ['13']));
        checkEqual('123', trimFirst('123', ['2']));
        checkEqual('BC', trimFirst('ABC', ['A']));
        checkEqual('C', trimFirst('ABC', ['AB']));
        checkEqual('ABC', trimFirst('ABC', ['AC']));
        checkEqual('ABC', trimFirst('ABC', ['a']));
        checkEqual('ABC', trimFirst('ABC', ['B']));
        checkEqual('C', trimFirst('ABC', ['A', 'B']));
        checkEqual('C', trimFirst('ABC', ['B', 'A']));
        checkEqual('C', trimFirst('AABBC', ['A', 'B']));
        checkEqual('C', trimFirst('ABABC', ['A', 'B']));
        checkEqual('C', trimFirst('BABAC', ['A', 'B']));
        checkEqual('C', trimFirst('ABBAC', ['A', 'B']));
        checkEqual('C', trimFirst('BAABC', ['A', 'B']));
        checkEqual('C', trimFirst('AAABC', ['A', 'B']));
        checkEqual('C', trimFirst('ABBBC', ['A', 'B']));
        checkEqual('CABC', trimFirst('CABC', ['A', 'B']));
        checkEqual('ABC', trimFirst('ABC', []));
        checkEqual('', trimFirst('ABC', ['ABC']));
        checkEqual('', trimFirst('ABC', ['A', 'B', 'C']));
        checkEqual('', trimFirst('', []));
        checkEqual('', trimFirst('', ['ABC']));
        checkEqual('', trimFirst('', ['A', 'B', 'C']));
        checkEqual(true, isThrown(function () {
          return trimFirst('ABC', [0, 'B', 'C']);
        }));
        checkEqual(true, isThrown(function () {
          return trimFirst('', [0, 'B', 'C']);
        }));
      });
    };

    var test_trimLast = function test_trimLast() {
      it('test_trimLast', function () {
        checkEqual('12', trimLast('123', ['3']));
        checkEqual('1', trimLast('123', ['23']));
        checkEqual('123', trimLast('123', ['13']));
        checkEqual('123', trimLast('123', ['2']));
        checkEqual('AB', trimLast('ABC', ['C']));
        checkEqual('A', trimLast('ABC', ['BC']));
        checkEqual('ABC', trimLast('ABC', ['AC']));
        checkEqual('ABC', trimLast('ABC', ['c']));
        checkEqual('ABC', trimLast('ABC', ['B']));
        checkEqual('C', trimLast('CAB', ['A', 'B']));
        checkEqual('C', trimLast('CAB', ['B', 'A']));
        checkEqual('C', trimLast('CAABB', ['A', 'B']));
        checkEqual('C', trimLast('CABAB', ['A', 'B']));
        checkEqual('C', trimLast('CBABA', ['A', 'B']));
        checkEqual('C', trimLast('CABBA', ['A', 'B']));
        checkEqual('C', trimLast('CBAAB', ['A', 'B']));
        checkEqual('C', trimLast('CAAAB', ['A', 'B']));
        checkEqual('C', trimLast('CABBB', ['A', 'B']));
        checkEqual('CABC', trimLast('CABC', ['A', 'B']));
        checkEqual('ABC', trimLast('ABC', []));
        checkEqual('', trimLast('ABC', ['ABC']));
        checkEqual('', trimLast('ABC', ['A', 'B', 'C']));
        checkEqual('', trimLast('', []));
        checkEqual('', trimLast('', ['ABC']));
        checkEqual('', trimLast('', ['A', 'B', 'C']));
        checkEqual(true, isThrown(function () {
          return trimLast('ABC', [0, 'B', 'C']);
        }));
        checkEqual(true, isThrown(function () {
          return trimLast('', [0, 'B', 'C']);
        }));
      });
    };

    var test_trimBothEnds = function test_trimBothEnds() {
      it('test_trimBothEnds', function () {
        checkEqual('2', trimBothEnds('121', ['1']));
        checkEqual('121', trimBothEnds('121', ['2']));
        checkEqual('1', trimBothEnds('121', ['12'], ['21']));
        checkEqual('3', trimBothEnds('123', ['12'], ['23']));
        checkEqual('B', trimBothEnds('ABA', ['A']));
        checkEqual('ABA', trimBothEnds('ABA', ['a']));
        checkEqual('ABA', trimBothEnds('ABA', ['B']));
        checkEqual('', trimBothEnds('ABAB', ['AB']));
        checkEqual('BAD', trimBothEnds('ABAD', ['A']));
        checkEqual('BA', trimBothEnds('ABAD', ['A'], ['D']));
        checkEqual('AB', trimBothEnds('{AB}', ['{'], ['}']));
        checkEqual('', trimBothEnds('{{}}', ['{'], ['}']));
        checkEqual('A{B', trimBothEnds('A{B}', ['{'], ['}']));
        checkEqual('{AB', trimBothEnds('{AB}', ['}'], ['}']));
        checkEqual('AB}', trimBothEnds('{AB}', ['{'], ['{']));
        checkEqual('232', trimBothEnds('12321', ['1']));
        checkEqual('12321', trimBothEnds('12321', ['2']));
        checkEqual('3', trimBothEnds('12321', ['2', '1']));
        checkEqual('232', trimBothEnds('12321', ['', '1']));
        checkEqual('32', trimBothEnds('12321', ['2', '1'], ['1']));
        checkEqual('321', trimBothEnds('12321', ['2', '1'], ['2']));
        checkEqual('', trimBothEnds('1', ['1']));
        checkEqual('', trimBothEnds('11', ['1'])); // Object Named Parameter

        checkEqual('B', trimBothEnds({
          str: 'ABA',
          valueArray: ['A']
        }));
        checkEqual('ABA', trimBothEnds({
          str: 'ABA',
          valueArray: ['a']
        }));
        checkEqual('B', trimBothEnds({
          str: 'ABA',
          valueFirstArray: ['A']
        }));
        checkEqual('BA', trimBothEnds({
          str: 'ABA',
          valueFirstArray: ['A'],
          valueLastArray: []
        }));
        checkEqual('AB', trimBothEnds({
          str: 'ABA',
          valueFirstArray: [],
          valueLastArray: ['A']
        }));
        checkEqual('BAD', trimBothEnds({
          str: 'ABAD',
          valueFirstArray: ['A']
        }));
        checkEqual('BA', trimBothEnds({
          str: 'ABAD',
          valueFirstArray: ['A'],
          valueLastArray: ['D']
        }));
      });
    };

    var test_substring_stardard = function test_substring_stardard() {
      it('test_substring_stardard', function () {
        checkEqual('01234', '01234'.substring(-2));
        checkEqual('01234', '01234'.substring(-1));
        checkEqual('01234', '01234'.substring(0));
        checkEqual('1234', '01234'.substring(1));
        checkEqual('234', '01234'.substring(2));
        checkEqual('34', '01234'.substring(3));
        checkEqual('4', '01234'.substring(4));
        checkEqual('', '01234'.substring(5));
        checkEqual('', '01234'.substring(6));
        checkEqual('', '01234'.substring(-2, 0));
        checkEqual('', '01234'.substring(-1, 0));
        checkEqual('', '01234'.substring(0, 0));
        checkEqual('0', '01234'.substring(1, 0));
        checkEqual('01', '01234'.substring(2, 0));
        checkEqual('012', '01234'.substring(3, 0));
        checkEqual('0123', '01234'.substring(4, 0));
        checkEqual('01234', '01234'.substring(5, 0));
        checkEqual('01234', '01234'.substring(6, 0));
        checkEqual('012', '01234'.substring(-2, 3));
        checkEqual('012', '01234'.substring(-1, 3));
        checkEqual('012', '01234'.substring(0, 3));
        checkEqual('12', '01234'.substring(1, 3));
        checkEqual('2', '01234'.substring(2, 3));
        checkEqual('', '01234'.substring(3, 3));
        checkEqual('3', '01234'.substring(4, 3));
        checkEqual('34', '01234'.substring(5, 3));
        checkEqual('34', '01234'.substring(6, 3));
        checkEqual('01234', '01234'.substring(-2, 5));
        checkEqual('01234', '01234'.substring(-1, 5));
        checkEqual('01234', '01234'.substring(0, 5));
        checkEqual('1234', '01234'.substring(1, 5));
        checkEqual('234', '01234'.substring(2, 5));
        checkEqual('34', '01234'.substring(3, 5));
        checkEqual('4', '01234'.substring(4, 5));
        checkEqual('', '01234'.substring(5, 5));
        checkEqual('', '01234'.substring(6, 5));
        checkEqual('01234', '01234'.substring(-2, 6));
        checkEqual('01234', '01234'.substring(-1, 6));
        checkEqual('01234', '01234'.substring(0, 6));
        checkEqual('1234', '01234'.substring(1, 6));
        checkEqual('234', '01234'.substring(2, 6));
        checkEqual('34', '01234'.substring(3, 6));
        checkEqual('4', '01234'.substring(4, 6));
        checkEqual('', '01234'.substring(5, 6));
        checkEqual('', '01234'.substring(6, 6));
      });
    };

    var test_substr_stardard = function test_substr_stardard() {
      it('test_substr_stardard', function () {
        if (!parts.platform.isWindowsScriptHost()) {
          checkEqual('34', '01234'.substr(-2)); // ?

          checkEqual('4', '01234'.substr(-1)); // ?
        } else {
          checkEqual('01234', '01234'.substr(-2)); // ?

          checkEqual('01234', '01234'.substr(-1)); // ?
        }

        checkEqual('01234', '01234'.substr(0));
        checkEqual('1234', '01234'.substr(1));
        checkEqual('234', '01234'.substr(2));
        checkEqual('34', '01234'.substr(3));
        checkEqual('4', '01234'.substr(4));
        checkEqual('', '01234'.substr(5)); // ?

        checkEqual('', '01234'.substr(6)); // ?

        checkEqual('', '01234'.substr(-2, 0));
        checkEqual('', '01234'.substr(-1, 0));
        checkEqual('', '01234'.substr(0, 0));
        checkEqual('', '01234'.substr(1, 0));
        checkEqual('', '01234'.substr(2, 0));
        checkEqual('', '01234'.substr(3, 0));
        checkEqual('', '01234'.substr(4, 0));
        checkEqual('', '01234'.substr(5, 0));
        checkEqual('', '01234'.substr(6, 0));

        if (!parts.platform.isWindowsScriptHost()) {
          checkEqual('34', '01234'.substr(-2, 3)); // ?

          checkEqual('4', '01234'.substr(-1, 3)); // ?
        } else {
          checkEqual('012', '01234'.substr(-2, 3)); // ?

          checkEqual('012', '01234'.substr(-1, 3)); // ?
        }

        checkEqual('012', '01234'.substr(0, 3));
        checkEqual('123', '01234'.substr(1, 3));
        checkEqual('234', '01234'.substr(2, 3));
        checkEqual('34', '01234'.substr(3, 3));
        checkEqual('4', '01234'.substr(4, 3));
        checkEqual('', '01234'.substr(5, 3)); // ?

        checkEqual('', '01234'.substr(6, 3)); // ?

        if (!parts.platform.isWindowsScriptHost()) {
          checkEqual('34', '01234'.substr(-2, 5));
          checkEqual('4', '01234'.substr(-1, 5));
        } else {
          checkEqual('01234', '01234'.substr(-2, 5));
          checkEqual('01234', '01234'.substr(-1, 5));
        }

        checkEqual('01234', '01234'.substr(0, 5));
        checkEqual('1234', '01234'.substr(1, 5));
        checkEqual('234', '01234'.substr(2, 5));
        checkEqual('34', '01234'.substr(3, 5));
        checkEqual('4', '01234'.substr(4, 5));
        checkEqual('', '01234'.substr(5, 5));
        checkEqual('', '01234'.substr(6, 5));
        testCounter();

        if (!parts.platform.isWindowsScriptHost()) {
          checkEqual('34', '01234'.substr(-2, 6));
          checkEqual('4', '01234'.substr(-1, 6));
        } else {
          checkEqual('01234', '01234'.substr(-2, 6));
          checkEqual('01234', '01234'.substr(-1, 6));
        }

        checkEqual('01234', '01234'.substr(0, 6));
        checkEqual('1234', '01234'.substr(1, 6));
        checkEqual('234', '01234'.substr(2, 6));
        checkEqual('34', '01234'.substr(3, 6));
        checkEqual('4', '01234'.substr(4, 6));
        checkEqual('', '01234'.substr(5, 6));
        checkEqual('', '01234'.substr(6, 6));
      });
    };

    var test_subIndex = function test_subIndex() {
      it('test_subIndex', function () {
        checkEqual(true, isThrown(function () {
          return subIndex('01234', -2);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', -1);
        }));
        checkEqual('0', subIndex('01234', 0));
        checkEqual('1', subIndex('01234', 1));
        checkEqual('2', subIndex('01234', 2));
        checkEqual('3', subIndex('01234', 3));
        checkEqual('4', subIndex('01234', 4));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', 5);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', 6);
        }));
        testCounter();
        checkEqual(true, isThrown(function () {
          return subIndex('01234', -2, 0);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', -1, 0);
        }));
        checkEqual('0', subIndex('01234', 0, 0));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', 1, 0);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', 2, 0);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', 3, 0);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', 4, 0);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', 5, 0);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', 6, 0);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', -2, 3);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', -1, 3);
        }));
        checkEqual('0123', subIndex('01234', 0, 3));
        checkEqual('123', subIndex('01234', 1, 3));
        checkEqual('23', subIndex('01234', 2, 3));
        checkEqual('3', subIndex('01234', 3, 3));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', 4, 3);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', 5, 3);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', 6, 3);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', -2, 5);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', -1, 5);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', 0, 5);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', 1, 5);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', 2, 5);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', 3, 5);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', 4, 5);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', 5, 5);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', 6, 5);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', -2, 6);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', -1, 6);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', 0, 6);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', 1, 6);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', 2, 6);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', 3, 6);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', 4, 6);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', 5, 6);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', 6, 6);
        }));
      });
    };

    var test_subLength = function test_subLength() {
      it('test_subLength', function () {
        checkEqual(true, isThrown(function () {
          return subLength('01234', -2);
        }));
        checkEqual(true, isThrown(function () {
          return subLength('01234', -1);
        }));
        checkEqual('01234', subLength('01234', 0));
        checkEqual('1234', subLength('01234', 1));
        checkEqual('234', subLength('01234', 2));
        checkEqual('34', subLength('01234', 3));
        checkEqual('4', subLength('01234', 4));
        checkEqual(true, isThrown(function () {
          return subLength('01234', 5);
        }));
        checkEqual(true, isThrown(function () {
          return subLength('01234', 6);
        }));
        checkEqual(true, isThrown(function () {
          return subLength('01234', -2, 0);
        }));
        checkEqual(true, isThrown(function () {
          return subLength('01234', -1, 0);
        }));
        checkEqual('', subLength('01234', 0, 0));
        checkEqual('', subLength('01234', 1, 0));
        checkEqual('', subLength('01234', 2, 0));
        checkEqual('', subLength('01234', 3, 0));
        checkEqual('', subLength('01234', 4, 0));
        checkEqual(true, isThrown(function () {
          return subLength('01234', 5, 0);
        }));
        checkEqual(true, isThrown(function () {
          return subLength('01234', 6, 0);
        }));
        checkEqual(true, isThrown(function () {
          return subLength('01234', -2, 3);
        }));
        checkEqual(true, isThrown(function () {
          return subLength('01234', -1, 3);
        }));
        checkEqual('012', subLength('01234', 0, 3));
        checkEqual('123', subLength('01234', 1, 3));
        checkEqual('234', subLength('01234', 2, 3));
        checkEqual('34', subLength('01234', 3, 3));
        checkEqual('4', subLength('01234', 4, 3));
        checkEqual(true, isThrown(function () {
          return subLength('01234', 5, 3);
        }));
        checkEqual(true, isThrown(function () {
          return subLength('01234', 6, 3);
        }));
        checkEqual(true, isThrown(function () {
          return subLength('01234', -2, 5);
        }));
        checkEqual(true, isThrown(function () {
          return subLength('01234', -1, 5);
        }));
        checkEqual('01234', subLength('01234', 0, 5));
        checkEqual('1234', subLength('01234', 1, 5));
        checkEqual('234', subLength('01234', 2, 5));
        checkEqual('34', subLength('01234', 3, 5));
        checkEqual('4', subLength('01234', 4, 5));
        checkEqual(true, isThrown(function () {
          return subLength('01234', 5, 5);
        }));
        checkEqual(true, isThrown(function () {
          return subLength('01234', 6, 5);
        }));
        checkEqual(true, isThrown(function () {
          return subLength('01234', -2, 6);
        }));
        checkEqual(true, isThrown(function () {
          return subLength('01234', -1, 6);
        }));
        checkEqual('01234', subLength('01234', 0, 6));
        checkEqual('1234', subLength('01234', 1, 6));
        checkEqual('234', subLength('01234', 2, 6));
        checkEqual('34', subLength('01234', 3, 6));
        checkEqual('4', subLength('01234', 4, 6));
        checkEqual(true, isThrown(function () {
          return subLength('01234', 5, 6);
        }));
        checkEqual(true, isThrown(function () {
          return subLength('01234', 6, 6);
        }));
      });
    };

    var test_subFirst = function test_subFirst() {
      it('test_subFirst', function () {
        checkEqual(true, isThrown(function () {
          return subFirst('01234', -2);
        }));
        checkEqual(true, isThrown(function () {
          return subFirst('01234', -1);
        }));
        checkEqual('', subFirst('01234', 0));
        checkEqual('0', subFirst('01234', 1));
        checkEqual('01', subFirst('01234', 2));
        checkEqual('012', subFirst('01234', 3));
        checkEqual('0123', subFirst('01234', 4));
        checkEqual('01234', subFirst('01234', 5));
        checkEqual(true, isThrown(function () {
          return subFirst('01234', 6);
        }));
      });
    };

    var test_subLast = function test_subLast() {
      it('test_subLast', function () {
        checkEqual(true, isThrown(function () {
          return subLast('01234', -2);
        }));
        checkEqual(true, isThrown(function () {
          return subLast('01234', -1);
        }));
        checkEqual('', subLast('01234', 0));
        checkEqual('4', subLast('01234', 1));
        checkEqual('34', subLast('01234', 2));
        checkEqual('234', subLast('01234', 3));
        checkEqual('1234', subLast('01234', 4));
        checkEqual('01234', subLast('01234', 5));
        checkEqual(true, isThrown(function () {
          return subLast('01234', 6);
        }));
      });
    };

    var test_deleteIndex = function test_deleteIndex() {
      it('test_deleteIndex', function () {
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', -2);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', -1);
        }));
        checkEqual('1234', deleteIndex('01234', 0));
        checkEqual('0234', deleteIndex('01234', 1));
        checkEqual('0134', deleteIndex('01234', 2));
        checkEqual('0124', deleteIndex('01234', 3));
        checkEqual('0123', deleteIndex('01234', 4));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', 5);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', 6);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', -2, 0);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', -1, 0);
        }));
        checkEqual('1234', deleteIndex('01234', 0, 0));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', 1, 0);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', 2, 0);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', 3, 0);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', 4, 0);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', 5, 0);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', 6, 0);
        }));
        testCounter();
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', -2, 3);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', -1, 3);
        }));
        checkEqual('4', deleteIndex('01234', 0, 3));
        checkEqual('04', deleteIndex('01234', 1, 3));
        checkEqual('014', deleteIndex('01234', 2, 3));
        checkEqual('0124', deleteIndex('01234', 3, 3));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', 4, 3);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', 5, 3);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', 6, 3);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', -2, 5);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', -1, 5);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', 0, 5);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', 1, 5);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', 2, 5);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', 3, 5);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', 4, 5);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', 5, 5);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', 6, 5);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', -2, 6);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', -1, 6);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', 0, 6);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', 1, 6);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', 2, 6);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', 3, 6);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', 4, 6);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', 5, 6);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', 6, 6);
        }));
      });
    };

    var test_deleteLength = function test_deleteLength() {
      it('test_deleteLength', function () {
        checkEqual(true, isThrown(function () {
          return deleteLength('01234', -2);
        }));
        checkEqual(true, isThrown(function () {
          return deleteLength('01234', -1);
        }));
        checkEqual('', deleteLength('01234', 0));
        checkEqual('0', deleteLength('01234', 1));
        checkEqual('01', deleteLength('01234', 2));
        checkEqual('012', deleteLength('01234', 3));
        checkEqual('0123', deleteLength('01234', 4));
        checkEqual(true, isThrown(function () {
          return deleteLength('01234', 5);
        }));
        checkEqual(true, isThrown(function () {
          return deleteLength('01234', 6);
        }));
        checkEqual(true, isThrown(function () {
          return deleteLength('01234', -2, 0);
        }));
        checkEqual(true, isThrown(function () {
          return deleteLength('01234', -1, 0);
        }));
        checkEqual('01234', deleteLength('01234', 0, 0));
        checkEqual('01234', deleteLength('01234', 1, 0));
        checkEqual('01234', deleteLength('01234', 2, 0));
        checkEqual('01234', deleteLength('01234', 3, 0));
        checkEqual('01234', deleteLength('01234', 4, 0));
        checkEqual(true, isThrown(function () {
          return deleteLength('01234', 5, 0);
        }));
        checkEqual(true, isThrown(function () {
          return deleteLength('01234', 6, 0);
        }));
        checkEqual(true, isThrown(function () {
          return deleteLength('01234', -2, 3);
        }));
        checkEqual(true, isThrown(function () {
          return deleteLength('01234', -1, 3);
        }));
        checkEqual('34', deleteLength('01234', 0, 3));
        checkEqual('04', deleteLength('01234', 1, 3));
        checkEqual('01', deleteLength('01234', 2, 3));
        checkEqual('012', deleteLength('01234', 3, 3));
        checkEqual('0123', deleteLength('01234', 4, 3));
        checkEqual(true, isThrown(function () {
          return deleteLength('01234', 5, 3);
        }));
        checkEqual(true, isThrown(function () {
          return deleteLength('01234', 6, 3);
        }));
        checkEqual(true, isThrown(function () {
          return deleteLength('01234', -2, 5);
        }));
        checkEqual(true, isThrown(function () {
          return deleteLength('01234', -1, 5);
        }));
        checkEqual('', deleteLength('01234', 0, 5));
        checkEqual('0', deleteLength('01234', 1, 5));
        checkEqual('01', deleteLength('01234', 2, 5));
        checkEqual('012', deleteLength('01234', 3, 5));
        checkEqual('0123', deleteLength('01234', 4, 5));
        checkEqual(true, isThrown(function () {
          return deleteLength('01234', 5, 5);
        }));
        checkEqual(true, isThrown(function () {
          return deleteLength('01234', 6, 5);
        }));
        checkEqual(true, isThrown(function () {
          return deleteLength('01234', -2, 6);
        }));
        checkEqual(true, isThrown(function () {
          return deleteLength('01234', -1, 6);
        }));
        checkEqual('', deleteLength('01234', 0, 6));
        checkEqual('0', deleteLength('01234', 1, 6));
        checkEqual('01', deleteLength('01234', 2, 6));
        checkEqual('012', deleteLength('01234', 3, 6));
        checkEqual('0123', deleteLength('01234', 4, 6));
        checkEqual(true, isThrown(function () {
          return deleteLength('01234', 5, 6);
        }));
        checkEqual(true, isThrown(function () {
          return deleteLength('01234', 6, 6);
        }));
      });
    };

    var test_deleteFirst = function test_deleteFirst() {
      it('test_deleteFirst', function () {
        checkEqual(true, isThrown(function () {
          return deleteFirst('01234', -2);
        }));
        checkEqual(true, isThrown(function () {
          return deleteFirst('01234', -1);
        }));
        checkEqual('01234', deleteFirst('01234', 0));
        checkEqual('1234', deleteFirst('01234', 1));
        checkEqual('234', deleteFirst('01234', 2));
        checkEqual('34', deleteFirst('01234', 3));
        checkEqual('4', deleteFirst('01234', 4));
        checkEqual('', deleteFirst('01234', 5));
        checkEqual(true, isThrown(function () {
          return deleteFirst('01234', 6);
        }));
      });
    };

    var test_deleteLast = function test_deleteLast() {
      it('test_deleteLast', function () {
        checkEqual(true, isThrown(function () {
          return deleteLast('01234', -2);
        }));
        checkEqual(true, isThrown(function () {
          return deleteLast('01234', -1);
        }));
        checkEqual('01234', deleteLast('01234', 0));
        checkEqual('0123', deleteLast('01234', 1));
        checkEqual('012', deleteLast('01234', 2));
        checkEqual('01', deleteLast('01234', 3));
        checkEqual('0', deleteLast('01234', 4));
        checkEqual('', deleteLast('01234', 5));
        checkEqual(true, isThrown(function () {
          return deleteLast('01234', 6);
        }));
      });
    };

    var test_insert = function test_insert() {
      it('test_insert', function () {
        checkEqual('A01234', insert('01234', 'A'));
        checkEqual(true, isThrown(function () {
          return insert('01234', 'A', -1);
        }));
        checkEqual('A01234', insert('01234', 'A', 0));
        checkEqual('0A1234', insert('01234', 'A', 1));
        checkEqual('01A234', insert('01234', 'A', 2));
        checkEqual('012A34', insert('01234', 'A', 3));
        checkEqual('0123A4', insert('01234', 'A', 4));
        checkEqual('01234A', insert('01234', 'A', 5));
        checkEqual(true, isThrown(function () {
          return insert('01234', 'A', 6);
        }));
      });
    };

    var test_add = function test_add() {
      it('test_add', function () {
        checkEqual('01234A', add('01234', 'A'));
        checkEqual(true, isThrown(function () {
          return add('01234', 'A', -2);
        }));
        checkEqual('A01234', add('01234', 'A', -1));
        checkEqual('0A1234', add('01234', 'A', 0));
        checkEqual('01A234', add('01234', 'A', 1));
        checkEqual('012A34', add('01234', 'A', 2));
        checkEqual('0123A4', add('01234', 'A', 3));
        checkEqual('01234A', add('01234', 'A', 4));
        checkEqual(true, isThrown(function () {
          return add('01234', 'A', 5);
        }));
      });
    };

    test_matchFormat();
    test_replaceAll();
    test_indexOf_standard();
    test_indexOfFirst();
    test_lastIndexOf_standard();
    test_indexOfLast();
    test_isFirst();
    test_isLast();
    test_isBothEnds();
    test_includeFirst();
    test_includeLast();
    test_includeBothEnds();
    test_excludeFirst();
    test_excludeLast();
    test_excludeBothEnds();
    test_trimFirst();
    test_trimLast();
    test_trimBothEnds();
    test_substring_stardard();
    test_substr_stardard();
    test_subIndex();
    test_subLength();
    test_subFirst();
    test_subLast();
    test_deleteIndex();
    test_deleteLength();
    test_deleteFirst();
    test_deleteLast();
    test_insert();
    test_add();
  });
};

exports.test_execute_string = test_execute_string;
var _default = {
  test_execute_string: test_execute_string
};
exports["default"] = _default;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.test_execute_object = void 0;

/* eslint-disable max-len */

/* eslint-disable no-var */
var test_execute_object = function test_execute_object(parts) {
  var _parts$test = parts.test,
      describe = _parts$test.describe,
      it = _parts$test.it,
      testCounter = _parts$test.testCounter;
  describe('test_execute_object', function () {
    var _parts$test2 = parts.test,
        checkEqual = _parts$test2.checkEqual,
        isThrown = _parts$test2.isThrown;
    var _parts$object = parts.object,
        copyProperty = _parts$object.copyProperty,
        inProperty = _parts$object.inProperty,
        propertyCount = _parts$object.propertyCount,
        getProperty = _parts$object.getProperty,
        setProperty = _parts$object.setProperty,
        isEmptyObjectAll = _parts$object.isEmptyObjectAll,
        isObjectParameter = _parts$object.isObjectParameter,
        objectToKeyValueArray = _parts$object.objectToKeyValueArray;

    var test_copyProperty = function test_copyProperty() {
      it('test_copyProperty', function () {
        var sourceObject = {
          a: '1',
          b: '2',
          c: '3'
        };
        var destObject = {};
        copyProperty(sourceObject, 'a', destObject);
        checkEqual(true, 'a' in destObject);
        checkEqual(false, 'b' in destObject);
        checkEqual(false, 'c' in destObject);
        var destObject = {};
        copyProperty(sourceObject, 'a,b', destObject);
        checkEqual(true, 'a' in destObject);
        checkEqual(true, 'b' in destObject);
        checkEqual(false, 'c' in destObject);
        var destObject = {};
        copyProperty(sourceObject, 'a,c,', destObject);
        checkEqual(true, 'a' in destObject);
        checkEqual(false, 'b' in destObject);
        checkEqual(true, 'c' in destObject); // Object Named Parameter

        var destObject = {};
        copyProperty({
          fromObject: sourceObject,
          propertyArray: 'a',
          toObject: destObject
        });
        checkEqual(true, 'a' in destObject);
        checkEqual(false, 'b' in destObject);
        checkEqual(false, 'c' in destObject); // exception

        checkEqual(false, isThrown(function () {
          copyProperty({}, 'a', {});
        }));
        checkEqual(true, isThrown(function () {
          copyProperty(1, 'a', {});
        }));
        checkEqual(true, isThrown(function () {
          copyProperty({}, 1, {});
        }));
        checkEqual(true, isThrown(function () {
          copyProperty({}, 'a', 1);
        }));
      });
    };

    var test_inProperty = function test_inProperty() {
      it('test_inProperty', function () {
        var sourceObject = {
          a: '1',
          b: '2'
        };
        checkEqual(false, inProperty(sourceObject, ''));
        checkEqual(true, inProperty(sourceObject, 'a'));
        checkEqual(true, inProperty(sourceObject, 'b'));
        checkEqual(false, inProperty(sourceObject, 'c'));
        checkEqual(false, inProperty(sourceObject, 'd'));
        checkEqual(true, inProperty(sourceObject, 'a,b'));
        checkEqual(false, inProperty(sourceObject, 'b,c'));
        checkEqual(false, inProperty(sourceObject, 'a,c'));
        checkEqual(true, inProperty(sourceObject, 'b,a'));
        checkEqual(false, inProperty(sourceObject, 'a,d'));
        checkEqual(true, inProperty(sourceObject, 'a,b,'));
        checkEqual(false, inProperty(sourceObject, 'b,c,'));
        checkEqual(false, inProperty(sourceObject, 'a,c,'));
        checkEqual(true, inProperty(sourceObject, 'b,a,'));
        checkEqual(false, inProperty(sourceObject, 'a,d,')); // Object Named Parameter

        checkEqual(true, inProperty({
          object: sourceObject,
          propertyPathArray: 'b,a'
        }));
        checkEqual(false, inProperty({
          object: sourceObject,
          propertyPathArray: 'd'
        })); // exception

        checkEqual(false, isThrown(function () {
          inProperty({}, 'a');
        }));
        checkEqual(true, isThrown(function () {
          inProperty(1, 'a');
        }));
        checkEqual(true, isThrown(function () {
          inProperty({}, 1);
        }));
        checkEqual(false, isThrown(function () {
          inProperty({}, ['a']);
        }));
        checkEqual(true, isThrown(function () {
          inProperty({}, [1]);
        }));
        var sourceObject = {
          a: '1',
          b: undefined
        };
        checkEqual(false, inProperty(sourceObject, ''));
        checkEqual(true, inProperty(sourceObject, 'a'));
        checkEqual(true, inProperty(sourceObject, 'b'));
        checkEqual(false, inProperty(sourceObject, 'c'));
        checkEqual(false, inProperty(sourceObject, 'd'));
        var sourceObject = {
          a: '1'
        };
        checkEqual(false, inProperty(sourceObject, ''));
        checkEqual(true, inProperty(sourceObject, 'a'));
        checkEqual(false, inProperty(sourceObject, 'b'));
        checkEqual(false, inProperty(sourceObject, 'c'));
        checkEqual(false, inProperty(sourceObject, 'd'));

        function First() {
          this.a = '1';
          this.b = '2';
        }

        function Second() {
          this.c = '3';
        }

        First.prototype = new Second();
        Second.prototype.d = '4';
        var sourceObject = new First();
        checkEqual(false, inProperty(sourceObject, ''));
        checkEqual(true, inProperty(sourceObject, 'a'));
        checkEqual(true, inProperty(sourceObject, 'b'));
        checkEqual(false, inProperty(sourceObject, 'c'));
        checkEqual(false, inProperty(sourceObject, 'd'));
        checkEqual(true, inProperty(sourceObject, 'a,b'));
        checkEqual(false, inProperty(sourceObject, 'b,c'));
        checkEqual(false, inProperty(sourceObject, 'a,c'));
        checkEqual(true, inProperty(sourceObject, 'b,a'));
        checkEqual(false, inProperty(sourceObject, 'a,d'));
        testCounter();
        checkEqual(true, inProperty(sourceObject, 'a,b,'));
        checkEqual(false, inProperty(sourceObject, 'b,c,'));
        checkEqual(false, inProperty(sourceObject, 'a,c,'));
        checkEqual(true, inProperty(sourceObject, 'b,a,'));
        checkEqual(false, inProperty(sourceObject, 'a,d,'));
        checkEqual(true, inProperty(sourceObject, 'a', false));
        checkEqual(true, inProperty(sourceObject, 'b', false));
        checkEqual(true, inProperty(sourceObject, 'c', false));
        checkEqual(true, inProperty(sourceObject, 'd', false));
        checkEqual(true, inProperty(sourceObject, 'a,b', false));
        checkEqual(true, inProperty(sourceObject, 'b,c', false));
        checkEqual(true, inProperty(sourceObject, 'a,c', false));
        checkEqual(true, inProperty(sourceObject, 'b,a', false));
        checkEqual(true, inProperty(sourceObject, 'a,d', false));
        checkEqual(true, inProperty(sourceObject, 'a,b,', false));
        checkEqual(true, inProperty(sourceObject, 'b,c,', false));
        checkEqual(true, inProperty(sourceObject, 'a,c,', false));
        checkEqual(true, inProperty(sourceObject, 'b,a,', false));
        checkEqual(true, inProperty(sourceObject, 'a,d,', false));
        var sourceObject = {
          a: '1',
          b: '2',
          c: {
            d: {
              e: 'E'
            }
          }
        };
        checkEqual(true, inProperty(sourceObject, 'a'));
        checkEqual(true, inProperty(sourceObject, 'a,b'));
        checkEqual(true, inProperty(sourceObject, 'a,b,c'));
        checkEqual(true, inProperty(sourceObject, 'a,b,c.d'));
        checkEqual(true, inProperty(sourceObject, 'a,b,c.d.e'));
        checkEqual(false, inProperty(sourceObject, 'a,b,c.d.f'));
        checkEqual(false, inProperty(sourceObject, 'a,b,c.d.'));
        checkEqual(false, inProperty(sourceObject, 'a,b,c.d..e'));
        checkEqual(false, inProperty(sourceObject, 'a,b,.d'));
        checkEqual(true, inProperty(sourceObject, 'a,b,'));
        checkEqual(true, inProperty(sourceObject, 'a,b,c.d.e,'));
      });
    };

    var test_propertyCount = function test_propertyCount() {
      it('test_propertyCount', function () {
        checkEqual(3, propertyCount({
          a: '1',
          b: '2',
          c: '3'
        }));
        checkEqual(0, propertyCount({})); // exception

        checkEqual(false, isThrown(function () {
          propertyCount({});
        }));
        checkEqual(false, isThrown(function () {
          propertyCount([]);
        }));
        checkEqual(true, isThrown(function () {
          propertyCount(10);
        }));
        checkEqual(true, isThrown(function () {
          propertyCount('abc');
        }));
      });
    };

    var test_getProperty = function test_getProperty() {
      it('test_getProperty', function () {
        var testObj1 = {
          a: {
            b: {
              c: false
            }
          }
        };
        checkEqual(false, getProperty(testObj1, 'a').b.c);
        checkEqual(false, getProperty(testObj1, 'a.b').c);
        checkEqual(false, getProperty(testObj1, 'a.b.c'));
        checkEqual(undefined, getProperty(testObj1, 'a.b.c.d'));
        checkEqual(undefined, getProperty(testObj1, 'a.b.b'));
        checkEqual(undefined, getProperty(testObj1, ''));
        checkEqual(undefined, getProperty(testObj1, '.'));
        checkEqual(undefined, getProperty(testObj1, '..'));
        checkEqual(undefined, getProperty(testObj1, 'a.b.c.'));
        checkEqual(undefined, getProperty(testObj1, 'a.'));
        checkEqual(undefined, getProperty(testObj1, '.a'));
        checkEqual(undefined, getProperty(testObj1, 'a.c'));
        checkEqual(undefined, getProperty(testObj1, 'b'));
        checkEqual(undefined, getProperty(testObj1, 'b.c'));
      });
    };

    var test_setProperty = function test_setProperty() {
      it('test_setProperty', function () {
        var testObj1 = {};
        setProperty(testObj1, 'a.b', true);
        checkEqual(true, testObj1.a.b);
        setProperty(testObj1, 'a', true);
        checkEqual(true, testObj1.a);
        setProperty(testObj1, 'a.b.c', true);
        checkEqual(true, testObj1.a.b.c);
        setProperty(testObj1, 'a.c', true);
        checkEqual(true, testObj1.a.c);
        setProperty(testObj1, 'b', true);
        checkEqual(true, testObj1.b);
        setProperty(testObj1, 'b.c', true);
        checkEqual(true, testObj1.b.c);
        checkEqual(true, isThrown(function () {
          return setProperty(testObj1, '', true);
        }));
        checkEqual(true, isThrown(function () {
          return setProperty(testObj1, 'a.', true);
        }));
        checkEqual(true, isThrown(function () {
          return setProperty(testObj1, '.a', true);
        }));
        checkEqual(false, isThrown(function () {
          return setProperty(testObj1, 'a', true);
        }));
        var testObj1 = {
          a: ['abc', {
            b: 'b'
          }]
        };
        checkEqual('abc', testObj1.a[0]);
        setProperty(testObj1, 'a.0', 'def');
        checkEqual('def', testObj1.a[0]);
        checkEqual('b', testObj1.a[1].b);
        setProperty(testObj1, 'a.1.b', 'c');
        checkEqual('c', testObj1.a[1].b);
      });
    };

    var test_isObjectParameter = function test_isObjectParameter() {
      it('test_isObjectParameter', function () {
        var testFunction01 = function testFunction01(a, b) {
          var c = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
          var d = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';

          if (isObjectParameter(a, 'a, b', 'c, d')) {
            var _a = a;
            a = _a.a;
            b = _a.b;
            var _a$c = _a.c;
            c = _a$c === void 0 ? '' : _a$c;
            var _a$d = _a.d;
            d = _a$d === void 0 ? '' : _a$d;
          }

          return a + b + c + d;
        };

        checkEqual('ABCD', testFunction01('A', 'B', 'C', 'D'));
        checkEqual('ABC', testFunction01('A', 'B', 'C'));
        checkEqual('AB', testFunction01('A', 'B'));
        checkEqual('ABCD', testFunction01({
          a: 'A',
          b: 'B',
          c: 'C',
          d: 'D'
        }));
        checkEqual('ABC', testFunction01({
          a: 'A',
          b: 'B',
          c: 'C'
        }));
        checkEqual('ABD', testFunction01({
          a: 'A',
          b: 'B',
          d: 'D'
        }));
        checkEqual('AB', testFunction01({
          a: 'A',
          b: 'B'
        }));

        var testFunction02 = function testFunction02(a, b) {
          var c = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
          var d = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';

          if (isObjectParameter(a, 'a, b', 'c, d')) {
            var _a2 = a;
            a = _a2.a;
            b = _a2.b;
            var _a2$c = _a2.c;
            c = _a2$c === void 0 ? '' : _a2$c;
            var _a2$d = _a2.d;
            d = _a2$d === void 0 ? '' : _a2$d;
          } else if (isObjectParameter(b, 'b', 'c, d')) {
            var _b = b;
            b = _b.b;
            var _b$c = _b.c;
            c = _b$c === void 0 ? '' : _b$c;
            var _b$d = _b.d;
            d = _b$d === void 0 ? '' : _b$d;
          } else if (isObjectParameter(c, '', 'c, d', 1)) {
            var _c = c;
            var _c$c = _c.c;
            c = _c$c === void 0 ? '' : _c$c;
            var _c$d = _c.d;
            d = _c$d === void 0 ? '' : _c$d;
          } else if (isObjectParameter(d, '', 'd', 1)) {
            var _d = d;
            var _d$d = _d.d;
            d = _d$d === void 0 ? '' : _d$d;
          }

          return a + b + c + d;
        };

        checkEqual('ABCD', testFunction02('A', 'B', 'C', 'D'));
        checkEqual('ABC', testFunction02('A', 'B', 'C'));
        checkEqual('AB', testFunction02('A', 'B')); // object parameter a

        checkEqual('ABCD', testFunction02({
          a: 'A',
          b: 'B',
          c: 'C',
          d: 'D'
        }));
        checkEqual('ABC', testFunction02({
          a: 'A',
          b: 'B',
          c: 'C'
        }));
        checkEqual('ABD', testFunction02({
          a: 'A',
          b: 'B',
          d: 'D'
        }));
        checkEqual('AB', testFunction02({
          a: 'A',
          b: 'B'
        })); // object parameter b

        checkEqual('ABCD', testFunction02('A', {
          b: 'B',
          c: 'C',
          d: 'D'
        }));
        checkEqual('ABC', testFunction02('A', {
          b: 'B',
          c: 'C'
        }));
        checkEqual('ABD', testFunction02('A', {
          b: 'B',
          d: 'D'
        }));
        checkEqual('AB', testFunction02('A', {
          b: 'B'
        })); // object parameter c

        checkEqual('ABCD', testFunction02('A', 'B', {
          c: 'C',
          d: 'D'
        }));
        checkEqual('ABC', testFunction02('A', 'B', {
          c: 'C'
        }));
        checkEqual('ABD', testFunction02('A', 'B', {
          d: 'D'
        })); // object parameter c

        checkEqual('ABCD', testFunction02('A', 'B', 'C', {
          d: 'D'
        })); // miss patern

        checkEqual('[object Object]undefined', testFunction02({
          a: 'A'
        }));
        checkEqual('[object Object]undefined', testFunction02({
          b: 'A'
        }));
        checkEqual('[object Object]undefined', testFunction02({
          a: 'A',
          c: 'C'
        }));
        checkEqual('[object Object]undefined', testFunction02({
          a: 'A',
          d: 'D'
        }));
        checkEqual('[object Object]undefined', testFunction02({
          b: 'B',
          c: 'C'
        }));
        checkEqual('[object Object]undefined', testFunction02({
          b: 'B',
          d: 'D'
        }));
        checkEqual('[object Object]undefined', testFunction02({
          a: 'A',
          b: 'B',
          c: 'C',
          d: 'D',
          e: 'E'
        }));
        checkEqual('[object Object]undefined', testFunction02({
          a: 'A',
          b: 'B',
          e: 'E'
        }));
        checkEqual('A[object Object]', testFunction02('A', {}));
        checkEqual('A[object Object]', testFunction02('A', {
          b: 'B',
          e: 'E'
        }));
        checkEqual('A[object Object]', testFunction02('A', {
          a: 'A',
          b: 'B'
        }));
        checkEqual('A[object Object]', testFunction02('A', {
          c: 'C',
          d: 'D'
        }));
        checkEqual('AB[object Object]', testFunction02('A', 'B', {}));
        checkEqual('AB[object Object]', testFunction02('A', 'B', {
          a: 'A'
        }));
        checkEqual('AB[object Object]', testFunction02('A', 'B', {
          b: 'B'
        }));
        checkEqual('AB[object Object]', testFunction02('A', 'B', {
          e: 'D'
        }));
        checkEqual('ABC[object Object]', testFunction02('A', 'B', 'C', {
          c: 'C'
        }));
        checkEqual('ABC[object Object]', testFunction02('A', 'B', 'C', {
          e: 'E'
        }));
      });
    };

    var test_ObjectEntries_standard = function test_ObjectEntries_standard() {
      it('test_ObjectEntries_standard', function () {
        if (parts.platform.isWindowsScriptHost()) {
          return;
        }

        if (parts.platform.isInternetExplorer()) {
          return;
        }

        var array1 = [['a', '1'], ['b', '2'], ['c', '3']];
        var object1 = {
          a: '1',
          b: '2',
          c: '3'
        };
        checkEqual(array1, Object.entries(object1));
      });
    };

    var test_objectToKeyValueArray = function test_objectToKeyValueArray() {
      it('test_objectToKeyValueArray', function () {
        var array1 = [['a', '1'], ['b', '2'], ['c', '3']];
        var object1 = {
          a: '1',
          b: '2',
          c: '3'
        };
        checkEqual(array1, objectToKeyValueArray(object1)); // only object type

        checkEqual(true, isThrown(function () {
          return objectToKeyValueArray(array1);
        })); // object parameter

        checkEqual(array1, objectToKeyValueArray({
          object: object1
        }));
      });
    };

    test_copyProperty();
    test_inProperty();
    test_propertyCount();
    test_getProperty();
    test_setProperty();
    test_isObjectParameter();
    test_ObjectEntries_standard();
    test_objectToKeyValueArray();
  });
};

exports.test_execute_object = test_execute_object;
var _default = {
  test_execute_object: test_execute_object
};
exports["default"] = _default;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.test_execute_array = void 0;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/* eslint-disable max-len */

/* eslint-disable no-var */

/* eslint-disable comma-spacing */

/* eslint-disable comma-dangle */
var test_execute_array = function test_execute_array(parts) {
  var _parts$test = parts.test,
      describe = _parts$test.describe,
      it = _parts$test.it,
      expect = _parts$test.expect;
  describe('test_execute_array', function () {
    var _parts$test2 = parts.test,
        checkEqual = _parts$test2.checkEqual,
        checkCompare = _parts$test2.checkCompare,
        isThrown = _parts$test2.isThrown,
        isThrownException = _parts$test2.isThrownException,
        testCounter = _parts$test2.testCounter;
    var array = parts.array;
    var NumberArray = array.NumberArray,
        IntegerArray = array.IntegerArray,
        isFirst = array.isFirst,
        isLast = array.isLast,
        isBothEnds = array.isBothEnds,
        subIndex = array.subIndex,
        subLength = array.subLength,
        subFirst = array.subFirst,
        subLast = array.subLast,
        arrayToIndexValueArray = array.arrayToIndexValueArray;
    var _array$operation = array.operation,
        insert = _array$operation.insert,
        add = _array$operation.add,
        deleteLength = _array$operation.deleteLength,
        deleteIndex = _array$operation.deleteIndex,
        deleteFirst = _array$operation.deleteFirst,
        deleteLast = _array$operation.deleteLast,
        includeFirst = _array$operation.includeFirst,
        includeLast = _array$operation.includeLast,
        includeBothEnds = _array$operation.includeBothEnds,
        excludeFirst = _array$operation.excludeFirst,
        excludeLast = _array$operation.excludeLast,
        excludeBothEnds = _array$operation.excludeBothEnds,
        trimFirst = _array$operation.trimFirst,
        trimLast = _array$operation.trimLast,
        trimBothEnds = _array$operation.trimBothEnds,
        popFirst = _array$operation.popFirst,
        popLast = _array$operation.popLast,
        pushFirst = _array$operation.pushFirst,
        pushLast = _array$operation.pushLast,
        remainFirst = _array$operation.remainFirst,
        remainLast = _array$operation.remainLast;
    var _parts$number = parts.number,
        isEven = _parts$number.isEven,
        isOdd = _parts$number.isOdd;
    var isLowerCase = parts.isLowerCase,
        isUpperCase = parts.isUpperCase;
    var equal = parts.compare.equal;

    var test_array_NumberArray = function test_array_NumberArray() {
      it('test_array_NumberArray', function () {
        checkEqual([0, 1, 2], NumberArray(3));
        checkEqual([1, 2, 3], NumberArray(1, 3));
        checkEqual([0, 3, 6, 9], NumberArray(0, 10, 3));
        checkEqual([0, 3, 6, 9], NumberArray(0, 11, 3));
        checkEqual([0, 3, 6, 9, 12], NumberArray(0, 12, 3));
        checkEqual([5, 7, 9], NumberArray(5, 10, 2));
        checkEqual([-3, -2, -1, 0], NumberArray(-3, 0));
        checkEqual([-5, -3, -1], NumberArray(-5, 0, 2));
        checkEqual([-5, -3, -1], NumberArray(-5, -1, 2));
        checkEqual([-5, -3], NumberArray(-5, -2, 2));
        checkEqual([0, 0.1, 0.2, 0.30000000000000004, 0.4], NumberArray(0, 0.4, 0.1));
        checkEqual(true, isThrown(function () {
          return NumberArray(0, 10, 0);
        }));
        checkEqual(true, isThrown(function () {
          return NumberArray(0, 10, -0.1);
        }));
        checkEqual([3, 2, 1], NumberArray(3, 1));
        checkEqual([10, 7, 4, 1], NumberArray(10, 0, -3));
        checkEqual([10, 7, 4, 1], NumberArray(10, 1, -3));
        checkEqual([10, 7, 4], NumberArray(10, 2, -3));
        checkEqual([10, 8, 6], NumberArray(10, 5, -2));
        checkEqual([0, -1, -2, -3], NumberArray(0, -3));
        checkEqual([0, -2, -4], NumberArray(0, -5, -2));
        checkEqual([0, -2, -4], NumberArray(0, -4, -2));
        checkEqual([0, -2], NumberArray(0, -3, -2));
        checkEqual([0.3, 0.19999999999999998, 0.09999999999999998], NumberArray(0.3, 0, -0.1));
        checkEqual(true, isThrown(function () {
          return NumberArray(0.3, 0, 0);
        }));
        checkEqual(true, isThrown(function () {
          return NumberArray(0.3, 0, 0.1);
        })); // object parameter

        checkEqual([0, 1, 2], NumberArray({
          count: 3
        }));
        checkEqual([1, 2, 3], NumberArray({
          start: 1,
          end: 3
        }));
        checkEqual([0, 3, 6, 9], NumberArray({
          start: 0,
          end: 10,
          increment: 3
        }));
        checkEqual([7, 8, 9, 10], NumberArray(7, {
          end: 10
        }));
        checkEqual([7, 9], NumberArray(7, {
          end: 10,
          increment: 2
        }));
        checkEqual([7, 9], NumberArray(7, 10, {
          increment: 2
        }));
        checkEqual(true, isThrown(function () {
          return NumberArray({
            count: 3,
            start: 0
          });
        }));
        checkEqual(true, isThrown(function () {
          return NumberArray({
            end: 10
          });
        }));
        checkEqual(true, isThrown(function () {
          return NumberArray(5, {
            start: 0,
            end: 10,
            increment: 3
          });
        }));
        checkEqual(true, isThrown(function () {
          return NumberArray(5, {
            increment: 3
          });
        }));
        checkEqual(true, isThrown(function () {
          return NumberArray(5, 10, {});
        }));
      });
    };

    var test_array_IntegerArray = function test_array_IntegerArray() {
      it('test_array_IntegerArray', function () {
        checkEqual([0, 1, 2], IntegerArray(3));
        checkEqual([1, 2, 3], IntegerArray(1, 3));
        checkEqual([0, 3, 6, 9], IntegerArray(0, 10, 3));
        checkEqual([0, 3, 6, 9], IntegerArray(0, 11, 3));
        checkEqual([0, 3, 6, 9, 12], IntegerArray(0, 12, 3));
        checkEqual([5, 7, 9], IntegerArray(5, 10, 2));
        checkEqual([-3, -2, -1, 0], IntegerArray(-3, 0));
        checkEqual([-5, -3, -1], IntegerArray(-5, 0, 2));
        checkEqual([-5, -3, -1], IntegerArray(-5, -1, 2));
        checkEqual([-5, -3], IntegerArray(-5, -2, 2));
        checkEqual(true, isThrown(function () {
          return IntegerArray(0, 0.2, 0.1);
        }));
        checkEqual(true, isThrown(function () {
          return IntegerArray(0, 10, 0);
        }));
        checkEqual(true, isThrown(function () {
          return IntegerArray(0, 10, -0.1);
        }));
        checkEqual([3, 2, 1], IntegerArray(3, 1));
        checkEqual([10, 7, 4, 1], IntegerArray(10, 0, -3));
        checkEqual([10, 7, 4, 1], IntegerArray(10, 1, -3));
        checkEqual([10, 7, 4], IntegerArray(10, 2, -3));
        checkEqual([10, 8, 6], IntegerArray(10, 5, -2));
        checkEqual([0, -1, -2, -3], IntegerArray(0, -3));
        checkEqual([0, -2, -4], IntegerArray(0, -5, -2));
        checkEqual([0, -2, -4], IntegerArray(0, -4, -2));
        checkEqual([0, -2], IntegerArray(0, -3, -2));
        checkEqual(true, isThrown(function () {
          return IntegerArray(0.2, 0, -0.1);
        }));
        checkEqual(true, isThrown(function () {
          return IntegerArray(0.3, 0, 0);
        }));
        checkEqual(true, isThrown(function () {
          return IntegerArray(0.3, 0, 0.1);
        })); // object parameter

        checkEqual([0, 1, 2], IntegerArray({
          count: 3
        }));
        checkEqual([1, 2, 3], IntegerArray({
          start: 1,
          end: 3
        }));
        checkEqual([0, 3, 6, 9], IntegerArray({
          start: 0,
          end: 10,
          increment: 3
        }));
        checkEqual([7, 8, 9, 10], IntegerArray(7, {
          end: 10
        }));
        checkEqual([7, 9], IntegerArray(7, {
          end: 10,
          increment: 2
        }));
        checkEqual([7, 9], IntegerArray(7, 10, {
          increment: 2
        }));
        checkEqual(true, isThrown(function () {
          return IntegerArray({
            count: 3,
            start: 0
          });
        }));
        checkEqual(true, isThrown(function () {
          return IntegerArray({
            end: 10
          });
        }));
        checkEqual(true, isThrown(function () {
          return IntegerArray(5, {
            start: 0,
            end: 10,
            increment: 3
          });
        }));
        checkEqual(true, isThrown(function () {
          return IntegerArray(5, {
            increment: 3
          });
        }));
        checkEqual(true, isThrown(function () {
          return IntegerArray(5, 10, {});
        }));
      });
    };

    var test_array_from = function test_array_from() {
      it('test_array_from', function () {
        function test() {
          // eslint-disable-next-line prefer-rest-params
          return array.from(arguments);
        }

        checkEqual([10, 20], test(10, 20));
      });
    };

    var test_min = function test_min() {
      it('test_min', function () {
        checkEqual(null, array.min([]));
        checkEqual(5, array.min([5, 10, 15, 20]));
        checkEqual(1, array.min([5, 4, 3, 2, 1]));
        checkEqual(3, array.min([5, 4, 3])); // exception

        checkEqual(false, isThrown(function () {
          array.min([1, 2, 3]);
        }));
        checkEqual(false, isThrown(function () {
          array.min([1, 2, 3]);
        }));
        checkEqual(true, isThrown(function () {
          array.min('1,2,3');
        }));
        checkEqual(true, isThrown(function () {
          array.min([1, 2, '3']);
        }));
        checkEqual(true, isThrown(function () {
          array.min([1,, 3]);
        }));
        checkEqual(true, isThrown(function () {
          array.min([, 1, 2, 3]);
        }));
        checkEqual(true, isThrown(function () {
          array.min([1,, 3]);
        }));
      });
    };

    var test_max = function test_max() {
      it('test_max', function () {
        checkEqual(null, array.max([]));
        checkEqual(20, array.max([5, 10, 15, 20]));
        checkEqual(5, array.max([5, 4, 3, 2, 1]));
        checkEqual(3, array.max([1, 2, 3])); // exception

        checkEqual(false, isThrown(function () {
          array.max([1, 2, 3]);
        }));
        checkEqual(false, isThrown(function () {
          array.max([1, 2, 3]);
        }));
        checkEqual(true, isThrown(function () {
          array.max('1,2,3');
        }));
        checkEqual(true, isThrown(function () {
          array.max([1, 2, '3']);
        }));
        checkEqual(true, isThrown(function () {
          array.max([1,, 3]);
        }));
        checkEqual(true, isThrown(function () {
          array.max([, 1, 2, 3]);
        }));
        checkEqual(true, isThrown(function () {
          array.max([1,, 3]);
        }));
      });
    };

    var test_sum = function test_sum() {
      it('test_sum', function () {
        checkEqual(0, array.sum([]));
        checkEqual(1, array.sum([1]));
        checkEqual(0, array.sum([0]));
        checkEqual(7, array.sum([3, 4]));
        checkEqual(426, array.sum([52, 52, 70, 72, 80, 100]));
        checkEqual(154, array.sum([6, 9, 9, 10, 10, 10, 100]));
      });
    };

    var test_average = function test_average() {
      it('test_average', function () {
        checkEqual(null, array.average([]));
        checkEqual(1, array.average([1]));
        checkEqual(0, array.average([0]));
        checkEqual(3.5, array.average([3, 4]));
        checkEqual(71, array.average([70, 72, 80, 52, 52, 100]));
        checkEqual(22, array.average([9, 9, 10, 10, 10, 100, 6]));
      });
    };

    var test_median = function test_median() {
      it('test_median', function () {
        checkEqual(null, array.median([]));
        checkEqual(71, array.median([70, 72, 80, 52, 52, 100]));
        checkEqual(10, array.median([9, 9, 10, 10, 10, 100, 6]));
      });
    };

    var test_mode = function test_mode() {
      it('test_mode', function () {
        checkEqual([], array.mode([]));
        checkEqual([70], array.mode([70]));
        checkEqual([70, 52], array.mode([70, 70, 80, 52, 52, 100]));
        checkEqual([52], array.mode([70, 70, 80, 52, 52, 52, 100]));
        checkEqual([9, 10], array.mode([9, 9, 10, 10, 10, 9, 6]));
      });
    };

    var test_uniqe = function test_uniqe() {
      it('test_uniqe', function () {
        checkEqual([1, 2, 3, 4, 0], array.unique([1, 2, 3, 4, 4, 4, 3, 2, 0]));
      });
    };

    var test_single = function test_single() {
      it('test_single', function () {
        checkEqual([1, 0], array.single([1, 2, 3, 4, 4, 4, 3, 2, 0]));
      });
    };

    var test_multiple = function test_multiple() {
      it('test_multiple', function () {
        checkEqual([2, 3, 4], array.multiple([1, 2, 3, 4, 4, 4, 3, 2, 0]));
      });
    };

    var test_filter = function test_filter() {
      it('test_filter', function () {
        checkEqual([2, 4], array.filter([0, 1, 2, 3, 4, 5], function (value) {
          return isEven(value);
        }));
        checkEqual([2, 4], array.filter([0, 1, 2, 3, 4, 5], isEven));
        checkEqual([1, 3, 5], array.filter([0, 1, 2, 3, 4, 5], isOdd)); // Object Named Parameter

        checkEqual([2, 4], array.filter({
          array: [0, 1, 2, 3, 4, 5],
          func: function func(value) {
            return isEven(value);
          }
        }));
      });
    };

    var test_map = function test_map() {
      it('test_map', function () {
        checkEqual([false, false, true, false, true, false], array.map([0, 1, 2, 3, 4, 5], function (value) {
          return isEven(value);
        }));
        checkEqual([false, false, true, false, true, false], array.map([0, 1, 2, 3, 4, 5], isEven));
        checkEqual([false, true, false, true, false, true], array.map([0, 1, 2, 3, 4, 5], isOdd));
        checkEqual([0, 2, 4, 6, 8, 10], array.map([0, 1, 2, 3, 4, 5], function (value) {
          return value * 2;
        })); // Object Named Parameter

        checkEqual([false, false, true, false, true, false], array.map({
          array: [0, 1, 2, 3, 4, 5],
          func: function func(value) {
            return isEven(value);
          }
        }));
      });
    };

    var test_count = function test_count() {
      it('test_count', function () {
        checkEqual(2, array.count([0, 1, 2, 3, 4, 5], function (value) {
          return isEven(value);
        }));
        checkEqual(2, array.count([0, 1, 2, 3, 4, 5], isEven));
        checkEqual(3, array.count([0, 1, 2, 3, 4, 5], isOdd)); // Object Named Parameter

        checkEqual(3, array.count({
          array: [0, 1, 2, 3, 4, 5],
          func: isOdd
        }));
      });
    };

    var test_findIndex = function test_findIndex() {
      it('test_findIndex', function () {
        checkEqual(0, array.findIndex(['a', 'b', 'c', 'A', 'B', 'C'], function (value) {
          return value.toLowerCase() === 'a';
        }));
        checkEqual(1, array.findIndex(['a', 'b', 'c', 'A', 'B', 'C'], function (value) {
          return value.toLowerCase() === 'b';
        }));
        checkEqual(2, array.findIndex(['a', 'b', 'c', 'A', 'B', 'C'], function (value) {
          return value.toLowerCase() === 'c';
        }));
        checkEqual(-1, array.findIndex(['a', 'b', 'c', 'A', 'B', 'C'], function (value) {
          return value.toLowerCase() === 'd';
        }));
        checkEqual(3, array.findIndex(['a', 'b', 'c', 'A', 'B', 'C'], function (value) {
          return isUpperCase(value);
        }));
        checkEqual(0, array.findIndex(['a', 'b', 'c', 'A', 'B', 'C'], function (value) {
          return isLowerCase(value);
        })); // Object Named Parameter

        checkEqual(3, array.findIndex({
          array: ['a', 'b', 'c', 'A', 'B', 'C'],
          func: isUpperCase
        }));
      });
    };

    var test_findBackIndex = function test_findBackIndex() {
      it('test_findBackIndex', function () {
        checkEqual(3, array.findBackIndex(['a', 'b', 'c', 'A', 'B', 'C'], function (value) {
          return value.toLowerCase() === 'a';
        }));
        checkEqual(4, array.findBackIndex(['a', 'b', 'c', 'A', 'B', 'C'], function (value) {
          return value.toLowerCase() === 'b';
        }));
        checkEqual(5, array.findBackIndex(['a', 'b', 'c', 'A', 'B', 'C'], function (value) {
          return value.toLowerCase() === 'c';
        }));
        checkEqual(-1, array.findBackIndex(['a', 'b', 'c', 'A', 'B', 'C'], function (value) {
          return value.toLowerCase() === 'd';
        }));
        checkEqual(5, array.findBackIndex(['a', 'b', 'c', 'A', 'B', 'C'], function (value) {
          return isUpperCase(value);
        }));
        checkEqual(2, array.findBackIndex(['a', 'b', 'c', 'A', 'B', 'C'], function (value) {
          return isLowerCase(value);
        })); // Object Named Parameter

        checkEqual(2, array.findBackIndex({
          array: ['a', 'b', 'c', 'A', 'B', 'C'],
          func: isLowerCase
        }));
      });
    };

    var test_find = function test_find() {
      it('test_find', function () {
        checkEqual('a', array.find(['a', 'b', 'c', 'A', 'B', 'C'], function (value) {
          return value.toLowerCase() === 'a';
        }));
        checkEqual('b', array.find(['a', 'b', 'c', 'A', 'B', 'C'], function (value) {
          return value.toLowerCase() === 'b';
        }));
        checkEqual('c', array.find(['a', 'b', 'c', 'A', 'B', 'C'], function (value) {
          return value.toLowerCase() === 'c';
        }));
        checkEqual(undefined, array.find(['a', 'b', 'c', 'A', 'B', 'C'], function (value) {
          return value.toLowerCase() === 'd';
        }));
        checkEqual('A', array.find(['a', 'b', 'c', 'A', 'B', 'C'], function (value) {
          return isUpperCase(value);
        }));
        checkEqual('a', array.find(['a', 'b', 'c', 'A', 'B', 'C'], function (value) {
          return isLowerCase(value);
        })); // Object Named Parameter

        checkEqual('A', array.find({
          array: ['a', 'b', 'c', 'A', 'B', 'C'],
          func: isUpperCase
        }));
      });
    };

    var test_findBack = function test_findBack() {
      it('test_findBack', function () {
        checkEqual('A', array.findBack(['a', 'b', 'c', 'A', 'B', 'C'], function (value) {
          return value.toLowerCase() === 'a';
        }));
        checkEqual('B', array.findBack(['a', 'b', 'c', 'A', 'B', 'C'], function (value) {
          return value.toLowerCase() === 'b';
        }));
        checkEqual('C', array.findBack(['a', 'b', 'c', 'A', 'B', 'C'], function (value) {
          return value.toLowerCase() === 'c';
        }));
        checkEqual(undefined, array.findBack(['a', 'b', 'c', 'A', 'B', 'C'], function (value) {
          return value.toLowerCase() === 'd';
        }));
        checkEqual('C', array.findBack(['a', 'b', 'c', 'A', 'B', 'C'], function (value) {
          return isUpperCase(value);
        }));
        checkEqual('c', array.findBack(['a', 'b', 'c', 'A', 'B', 'C'], function (value) {
          return isLowerCase(value);
        })); // Object Named Parameter

        checkEqual('c', array.findBack({
          array: ['a', 'b', 'c', 'A', 'B', 'C'],
          func: isLowerCase
        }));
      });
    };

    var test_some = function test_some() {
      it('test_some', function () {
        checkEqual(true, array.some(['a', 'b', 'c', 'A', 'B', 'C'], function (value) {
          return value.toLowerCase() === 'a';
        }));
        checkEqual(true, array.some(['a', 'b', 'c', 'A', 'B', 'C'], function (value) {
          return value.toLowerCase() === 'b';
        }));
        checkEqual(false, array.some(['a', 'b', 'c', 'A', 'B', 'C'], function (value) {
          return value.toLowerCase() === 'd';
        }));
        checkEqual(true, array.some(['a', 'b', 'c', 'A', 'B', 'C'], function (value) {
          return isUpperCase(value);
        }));
        checkEqual(true, array.some(['a', 'b', 'c', 'A', 'B', 'C'], isLowerCase));
        checkEqual(false, array.some(['A', 'B', 'C'], isLowerCase));
        checkEqual(true, array.some(['A', 'B', 'C'], function () {
          return true;
        }));
        checkEqual(false, array.some([], function () {
          return true;
        })); // Object Named Parameter

        checkEqual(true, array.some({
          array: ['a', 'b', 'c', 'A', 'B', 'C'],
          func: isUpperCase
        }));
      });
    };

    var test_all = function test_all() {
      it('test_all', function () {
        checkEqual(false, array.all(['a', 'b', 'c', 'A', 'B', 'C'], function (value) {
          return value.toLowerCase() === 'a';
        }));
        checkEqual(false, array.all(['a', 'b', 'c', 'A', 'B', 'C'], function (value) {
          return value.toLowerCase() === 'd';
        }));
        checkEqual(true, array.all(['A', 'B', 'C'], function (value) {
          return isUpperCase(value);
        }));
        checkEqual(false, array.all(['A', 'B', 'C'], isLowerCase));
        checkEqual(true, array.all(['a', 'b', 'c'], isLowerCase));
        checkEqual(true, array.all(['A', 'B', 'C'], function () {
          return true;
        }));
        checkEqual(false, array.all([], function () {
          return true;
        })); // Object Named Parameter

        checkEqual(true, array.all({
          array: ['A', 'B', 'C'],
          func: isUpperCase
        }));
        checkEqual(false, array.all({
          array: ['A', 'B', 'c'],
          func: isUpperCase
        }));
      });
    };

    var test_isFirst = function test_isFirst() {
      it('test_isFirst', function () {
        checkEqual(true, isFirst([1, 2, 3], [1]));
        checkEqual(true, isFirst([1, 2, 3], [1, 2]));
        checkEqual(false, isFirst([1, 2, 3], [1, 3]));
        checkEqual(false, isFirst([1, 2, 3], [2]));
        checkEqual(true, isFirst(['A', 'B', 'C'], ['A']));
        checkEqual(true, isFirst(['A', 'B', 'C'], ['A', 'B']));
        checkEqual(false, isFirst(['A', 'B', 'C'], ['A', 'C']));
        checkEqual(false, isFirst(['A', 'B', 'C'], ['a']));
        checkEqual(false, isFirst(['A', 'B', 'C'], ['B'])); // Object Named Parameter

        checkEqual(true, isFirst({
          array: ['A', 'B', 'C'],
          valueArray: ['A']
        }));
        checkEqual(false, isFirst({
          array: ['A', 'B', 'C'],
          valueArray: ['a']
        }));
      });
    };

    var test_isLast = function test_isLast() {
      it('test_isLast', function () {
        checkEqual(true, isLast([1, 2, 3], [3]));
        checkEqual(true, isLast([1, 2, 3], [2, 3]));
        checkEqual(false, isLast([1, 2, 3], [1, 3]));
        checkEqual(false, isLast([1, 2, 3], [2]));
        checkEqual(true, isLast(['A', 'B', 'C'], ['C']));
        checkEqual(true, isLast(['A', 'B', 'C'], ['B', 'C']));
        checkEqual(false, isLast(['A', 'B', 'C'], ['A', 'C']));
        checkEqual(false, isLast(['A', 'B', 'C'], ['c']));
        checkEqual(false, isLast(['A', 'B', 'C'], ['B']));
        checkEqual(false, isLast([1], [2, 3])); // Object Named Parameter

        checkEqual(true, isLast({
          array: ['A', 'B', 'C'],
          valueArray: ['C']
        }));
        checkEqual(false, isLast({
          array: ['A', 'B', 'C'],
          valueArray: ['c']
        }));
      });
    };

    var test_isBothEnds = function test_isBothEnds() {
      it('test_isBothEnds', function () {
        checkEqual(true, isBothEnds([1, 2, 1], [1]));
        checkEqual(false, isBothEnds([1, 2, 1], [2]));
        checkEqual(true, isBothEnds([1, 2, 1], [1, 2], [2, 1]));
        checkEqual(true, isBothEnds(['A', 'B', 'A'], ['A']));
        checkEqual(false, isBothEnds(['A', 'B', 'A'], ['a']));
        checkEqual(false, isBothEnds(['A', 'B', 'A'], ['B']));
        checkEqual(true, isBothEnds(['A', 'B', 'A', 'B'], ['A', 'B']));
        checkEqual(false, isBothEnds(['A', 'B', 'A', 'D'], ['A']));
        checkEqual(true, isBothEnds(['A', 'B', 'A', 'D'], ['A'], ['D']));
        checkEqual(true, isBothEnds(['{', 'A', 'B', '}'], ['{'], ['}']));
        checkEqual(true, isBothEnds(['{', '{', '}', '}'], ['{'], ['}']));
        checkEqual(false, isBothEnds(['A', '{', 'B', '}'], ['{'], ['}']));
        checkEqual(false, isBothEnds(['{', 'A', 'B', '}'], ['}'], ['}']));
        checkEqual(false, isBothEnds(['{', 'A', 'B', '}'], ['{'], ['{']));
        checkEqual(false, isBothEnds([1], [1]));
        checkEqual(true, isBothEnds([1, 1], [1])); // Object Named Parameter

        checkEqual(true, isBothEnds({
          array: ['A', 'B', 'A'],
          valueArray: ['A']
        }));
        checkEqual(false, isBothEnds({
          array: ['A', 'B', 'A'],
          valueArray: ['a']
        }));
        checkEqual(true, isBothEnds({
          array: ['A', 'B', 'A'],
          valueFirstArray: ['A']
        }));
        checkEqual(false, isBothEnds({
          array: ['A', 'B', 'A', 'D'],
          valueFirstArray: ['A']
        }));
        checkEqual(true, isBothEnds({
          array: ['A', 'B', 'A', 'D'],
          valueFirstArray: ['A'],
          valueLastArray: ['D']
        }));
      });
    };

    var test_array_subIndex = function test_array_subIndex() {
      it('test_array_subIndex', function () {
        var array1 = [0, 1, 2, 3, 4];
        checkEqual(true, isThrown(function () {
          return subIndex(array1, -2);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex(array1, -1);
        }));
        checkEqual([0], subIndex(array1, 0));
        checkEqual([1], subIndex(array1, 1));
        checkEqual([2], subIndex(array1, 2));
        checkEqual([3], subIndex(array1, 3));
        checkEqual([4], subIndex(array1, 4));
        checkEqual(true, isThrown(function () {
          return subIndex(array1, 5);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex(array1, 6);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex(array1, -2, 0);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex(array1, -1, 0);
        }));
        checkEqual([0], subIndex(array1, 0, 0));
        checkEqual(true, isThrown(function () {
          return subIndex(array1, 1, 0);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex(array1, 2, 0);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex(array1, 3, 0);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex(array1, 4, 0);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex(array1, 5, 0);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex(array1, 6, 0);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex(array1, -2, 3);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex(array1, -1, 3);
        }));
        checkEqual([0, 1, 2, 3], subIndex(array1, 0, 3));
        checkEqual([1, 2, 3], subIndex(array1, 1, 3));
        checkEqual([2, 3], subIndex(array1, 2, 3));
        checkEqual([3], subIndex(array1, 3, 3));
        checkEqual(true, isThrown(function () {
          return subIndex(array1, 4, 3);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex(array1, 5, 3);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex(array1, 6, 3);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex(array1, -2, 5);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex(array1, -1, 5);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex(array1, 0, 5);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex(array1, 1, 5);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex(array1, 2, 5);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex(array1, 3, 5);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex(array1, 4, 5);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex(array1, 5, 5);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex(array1, 6, 5);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex(array1, -2, 6);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex(array1, -1, 6);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex(array1, 0, 6);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex(array1, 1, 6);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex(array1, 2, 6);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex(array1, 3, 6);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex(array1, 4, 6);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex(array1, 5, 6);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex(array1, 6, 6);
        })); // Object Named Parameter

        checkEqual(['A', 'B'], subIndex({
          array: ['A', 'B', 'A'],
          indexStart: 0,
          indexEnd: 1
        }));
      });
    };

    var test_array_subLength = function test_array_subLength() {
      it('test_array_subLength', function () {
        var array1 = [0, 1, 2, 3, 4];
        checkEqual(true, isThrown(function () {
          return subLength(array1, -2);
        }));
        checkEqual(true, isThrown(function () {
          return subLength(array1, -1);
        }));
        checkEqual([0, 1, 2, 3, 4], subLength(array1, 0));
        checkEqual([1, 2, 3, 4], subLength(array1, 1));
        checkEqual([2, 3, 4], subLength(array1, 2));
        checkEqual([3, 4], subLength(array1, 3));
        checkEqual([4], subLength(array1, 4));
        checkEqual(true, isThrown(function () {
          return subLength(array1, 5);
        }));
        checkEqual(true, isThrown(function () {
          return subLength(array1, 6);
        }));
        checkEqual(true, isThrown(function () {
          return subLength(array1, -2, 0);
        }));
        checkEqual(true, isThrown(function () {
          return subLength(array1, -1, 0);
        }));
        checkEqual([], subLength(array1, 0, 0));
        checkEqual([], subLength(array1, 1, 0));
        checkEqual([], subLength(array1, 2, 0));
        checkEqual([], subLength(array1, 3, 0));
        checkEqual([], subLength(array1, 4, 0));
        checkEqual(true, isThrown(function () {
          return subLength(array1, 5, 0);
        }));
        checkEqual(true, isThrown(function () {
          return subLength(array1, 6, 0);
        }));
        checkEqual(true, isThrown(function () {
          return subLength(array1, -2, 3);
        }));
        checkEqual(true, isThrown(function () {
          return subLength(array1, -1, 3);
        }));
        checkEqual([0, 1, 2], subLength(array1, 0, 3));
        checkEqual([1, 2, 3], subLength(array1, 1, 3));
        checkEqual([2, 3, 4], subLength(array1, 2, 3));
        checkEqual([3, 4], subLength(array1, 3, 3));
        checkEqual([4], subLength(array1, 4, 3));
        checkEqual(true, isThrown(function () {
          return subLength(array1, 5, 3);
        }));
        checkEqual(true, isThrown(function () {
          return subLength(array1, 6, 3);
        }));
        checkEqual(true, isThrown(function () {
          return subLength(array1, -2, 5);
        }));
        checkEqual(true, isThrown(function () {
          return subLength(array1, -1, 5);
        }));
        checkEqual([0, 1, 2, 3, 4], subLength(array1, 0, 5));
        checkEqual([1, 2, 3, 4], subLength(array1, 1, 5));
        checkEqual([2, 3, 4], subLength(array1, 2, 5));
        checkEqual([3, 4], subLength(array1, 3, 5));
        checkEqual([4], subLength(array1, 4, 5));
        checkEqual(true, isThrown(function () {
          return subLength(array1, 5, 5);
        }));
        checkEqual(true, isThrown(function () {
          return subLength(array1, 6, 5);
        }));
        checkEqual(true, isThrown(function () {
          return subLength(array1, -2, 6);
        }));
        checkEqual(true, isThrown(function () {
          return subLength(array1, -1, 6);
        }));
        checkEqual([0, 1, 2, 3, 4], subLength(array1, 0, 6));
        checkEqual([1, 2, 3, 4], subLength(array1, 1, 6));
        checkEqual([2, 3, 4], subLength(array1, 2, 6));
        checkEqual([3, 4], subLength(array1, 3, 6));
        checkEqual([4], subLength(array1, 4, 6));
        checkEqual(true, isThrown(function () {
          return subLength(array1, 5, 6);
        }));
        checkEqual(true, isThrown(function () {
          return subLength(array1, 6, 6);
        })); // Object Named Parameter

        checkEqual(['A', 'B'], subLength({
          array: ['A', 'B', 'A'],
          index: 0,
          length: 2
        }));
      });
    };

    var test_array_subFirst = function test_array_subFirst() {
      it('test_array_subFirst', function () {
        var array1 = [0, 1, 2, 3, 4];
        checkEqual(true, isThrown(function () {
          return subFirst(array1, -2);
        }));
        checkEqual(true, isThrown(function () {
          return subFirst(array1, -1);
        }));
        checkEqual([], subFirst(array1, 0));
        checkEqual([0], subFirst(array1, 1));
        checkEqual([0, 1], subFirst(array1, 2));
        checkEqual([0, 1, 2], subFirst(array1, 3));
        checkEqual([0, 1, 2, 3], subFirst(array1, 4));
        checkEqual([0, 1, 2, 3, 4], subFirst(array1, 5));
        checkEqual(true, isThrown(function () {
          return subFirst(array1, 6);
        })); // Object Named Parameter

        checkEqual(['A', 'B'], subFirst({
          array: ['A', 'B', 'A'],
          length: 2
        }));
      });
    };

    var test_array_subLast = function test_array_subLast() {
      it('test_array_subLast', function () {
        var array1 = [0, 1, 2, 3, 4];
        checkEqual(true, isThrown(function () {
          return subLast(array1, -2);
        }));
        checkEqual(true, isThrown(function () {
          return subLast(array1, -1);
        }));
        checkEqual([], subLast(array1, 0));
        checkEqual([4], subLast(array1, 1));
        checkEqual([3, 4], subLast(array1, 2));
        checkEqual([2, 3, 4], subLast(array1, 3));
        checkEqual([1, 2, 3, 4], subLast(array1, 4));
        checkEqual([0, 1, 2, 3, 4], subLast(array1, 5));
        checkEqual(true, isThrown(function () {
          return subLast(array1, 6);
        })); // Object Named Parameter

        checkEqual(['B', 'A'], subLast({
          array: ['A', 'B', 'A'],
          length: 2
        }));
      });
    };

    var test_operation_insert = function test_operation_insert() {
      it('test_operation_insert', function () {
        checkEqual([1, 2, 3], insert([1, 2, 3], []));
        checkEqual([0, 1, 2, 3], insert([1, 2, 3], [0]));
        checkEqual([0, 1, 2, 3], insert([1, 2, 3], [0], 0));
        checkEqual([1, 0, 2, 3], insert([1, 2, 3], [0], 1));
        checkEqual([1, 2, 0, 3], insert([1, 2, 3], [0], 2));
        checkEqual([1, 2, 3, 0], insert([1, 2, 3], [0], 3));
        checkEqual([-1, 0, 1, 2, 3], insert([1, 2, 3], [-1, 0]));
        checkEqual([1, -1, 0, 2, 3], insert([1, 2, 3], [-1, 0], 1)); // exception

        checkEqual(true, isThrownException(function () {
          insert([1, 2, 3], [0], -1);
        }, 'RangeError'));
        checkEqual(true, isThrownException(function () {
          insert([1, 2, 3], [0], 4);
        }, 'RangeError'));
        checkEqual(true, isThrownException(function () {
          insert([1, 2, 3], 0, 4);
        }, 'TypeError')); // Object Named Parameter

        checkEqual([1, 2, 3, 0], insert({
          array: [1, 2, 3],
          valueArray: [0],
          index: 3
        }));
      });
    };

    var test_operation_add = function test_operation_add() {
      it('test_operation_add', function () {
        checkEqual([1, 2, 3], add([1, 2, 3], []));
        checkEqual([1, 2, 3, 0], add([1, 2, 3], [0]));
        checkEqual([0, 1, 2, 3], add([1, 2, 3], [0], -1));
        checkEqual([1, 0, 2, 3], add([1, 2, 3], [0], 0));
        checkEqual([1, 2, 0, 3], add([1, 2, 3], [0], 1));
        checkEqual([1, 2, 3, 0], add([1, 2, 3], [0], 2));
        checkEqual([1, 2, 3, -1, 0], add([1, 2, 3], [-1, 0]));
        checkEqual([1, 2, -1, 0, 3], add([1, 2, 3], [-1, 0], 1)); // exception

        checkEqual(true, isThrownException(function () {
          add([1, 2, 3], [0], -2);
        }, 'RangeError'));
        checkEqual(true, isThrownException(function () {
          add([1, 2, 3], [0], 3);
        }, 'RangeError'));
        checkEqual(true, isThrownException(function () {
          add([1, 2, 3], 0, 4);
        }, 'TypeError')); // Object Named Parameter

        checkEqual([1, 2, 3, 0], add({
          array: [1, 2, 3],
          valueArray: [0],
          index: 2
        }));
      });
    };

    var test_operation_deleteIndex = function test_operation_deleteIndex() {
      it('test_operation_deleteIndex', function () {
        var array1 = [0, 1, 2, 3, 4];
        checkEqual([0, 1, 3, 4], deleteIndex(array1, 2));
        checkEqual([0, 1, 3, 4], array1);
        checkEqual(true, isThrown(function () {
          return deleteIndex([0, 1, 2, 3, 4], -2);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex([0, 1, 2, 3, 4], -1);
        }));
        checkEqual([1, 2, 3, 4], deleteIndex([0, 1, 2, 3, 4], 0));
        checkEqual([0, 2, 3, 4], deleteIndex([0, 1, 2, 3, 4], 1));
        checkEqual([0, 1, 3, 4], deleteIndex([0, 1, 2, 3, 4], 2));
        checkEqual([0, 1, 2, 4], deleteIndex([0, 1, 2, 3, 4], 3));
        checkEqual([0, 1, 2, 3], deleteIndex([0, 1, 2, 3, 4], 4));
        checkEqual(true, isThrown(function () {
          return deleteIndex([0, 1, 2, 3, 4], 5);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex([0, 1, 2, 3, 4], 6);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex([0, 1, 2, 3, 4], -2, 0);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex([0, 1, 2, 3, 4], -1, 0);
        }));
        checkEqual([1, 2, 3, 4], deleteIndex([0, 1, 2, 3, 4], 0, 0));
        checkEqual(true, isThrown(function () {
          return deleteIndex([0, 1, 2, 3, 4], 1, 0);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex([0, 1, 2, 3, 4], 2, 0);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex([0, 1, 2, 3, 4], 3, 0);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex([0, 1, 2, 3, 4], 4, 0);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex([0, 1, 2, 3, 4], 5, 0);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex([0, 1, 2, 3, 4], 6, 0);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex([0, 1, 2, 3, 4], -2, 3);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex([0, 1, 2, 3, 4], -1, 3);
        }));
        checkEqual([4], deleteIndex([0, 1, 2, 3, 4], 0, 3));
        checkEqual([0, 4], deleteIndex([0, 1, 2, 3, 4], 1, 3));
        checkEqual([0, 1, 4], deleteIndex([0, 1, 2, 3, 4], 2, 3));
        checkEqual([0, 1, 2, 4], deleteIndex([0, 1, 2, 3, 4], 3, 3));
        checkEqual(true, isThrown(function () {
          return deleteIndex([0, 1, 2, 3, 4], 4, 3);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex([0, 1, 2, 3, 4], 5, 3);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex([0, 1, 2, 3, 4], 6, 3);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex([0, 1, 2, 3, 4], -2, 5);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex([0, 1, 2, 3, 4], -1, 5);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex([0, 1, 2, 3, 4], 0, 5);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex([0, 1, 2, 3, 4], 1, 5);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex([0, 1, 2, 3, 4], 2, 5);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex([0, 1, 2, 3, 4], 3, 5);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex([0, 1, 2, 3, 4], 4, 5);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex([0, 1, 2, 3, 4], 5, 5);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex([0, 1, 2, 3, 4], 6, 5);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex([0, 1, 2, 3, 4], -2, 6);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex([0, 1, 2, 3, 4], -1, 6);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex([0, 1, 2, 3, 4], 0, 6);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex([0, 1, 2, 3, 4], 1, 6);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex([0, 1, 2, 3, 4], 2, 6);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex([0, 1, 2, 3, 4], 3, 6);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex([0, 1, 2, 3, 4], 4, 6);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex([0, 1, 2, 3, 4], 5, 6);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex([0, 1, 2, 3, 4], 6, 6);
        })); // exception

        checkEqual(true, isThrownException(function () {
          deleteIndex([1, 2, 3], [0], 1);
        }, 'TypeError'));
        checkEqual(true, isThrownException(function () {
          deleteIndex([1, 2, 3], 1, 0);
        }, 'RangeError'));
        checkEqual(false, isThrownException(function () {
          deleteIndex([1, 2, 3], 0, 0);
        }));
        checkEqual(false, isThrownException(function () {
          deleteIndex([1, 2, 3], 0, 1);
        }));
        checkEqual(false, isThrownException(function () {
          deleteIndex([1, 2, 3], 0, 2);
        }));
        checkEqual(true, isThrownException(function () {
          deleteIndex([1, 2, 3], 0, 3);
        }, 'RangeError'));
        checkEqual(true, isThrownException(function () {
          deleteIndex([1, 2, 3], -1);
        }, 'RangeError')); // Object Named Parameter

        checkEqual([0, 2, 3], deleteIndex({
          array: [0, 1, 2, 3],
          index: 1
        }));
        checkEqual([0, 2, 3], deleteIndex({
          array: [0, 1, 2, 3],
          indexStart: 1
        }));
        checkEqual([0, 3], deleteIndex({
          array: [0, 1, 2, 3],
          indexStart: 1,
          indexEnd: 2
        }));
      });
    };

    var test_operation_deleteLength = function test_operation_deleteLength() {
      it('test_operation_deleteLength', function () {
        var array1 = [0, 1, 2, 3, 4];
        checkEqual([0, 1], deleteLength(array1, 2));
        checkEqual([0, 1], array1);
        checkEqual(true, isThrown(function () {
          return deleteLength([0, 1, 2, 3, 4], -2);
        }));
        checkEqual(true, isThrown(function () {
          return deleteLength([0, 1, 2, 3, 4], -1);
        }));
        checkEqual([], deleteLength([0, 1, 2, 3, 4], 0));
        checkEqual([0], deleteLength([0, 1, 2, 3, 4], 1));
        checkEqual([0, 1], deleteLength([0, 1, 2, 3, 4], 2));
        checkEqual([0, 1, 2], deleteLength([0, 1, 2, 3, 4], 3));
        checkEqual([0, 1, 2, 3], deleteLength([0, 1, 2, 3, 4], 4));
        checkEqual(true, isThrown(function () {
          return deleteLength([0, 1, 2, 3, 4], 5);
        }));
        checkEqual(true, isThrown(function () {
          return deleteLength([0, 1, 2, 3, 4], 6);
        }));
        checkEqual(true, isThrown(function () {
          return deleteLength([0, 1, 2, 3, 4], -2, 0);
        }));
        checkEqual(true, isThrown(function () {
          return deleteLength([0, 1, 2, 3, 4], -1, 0);
        }));
        checkEqual([0, 1, 2, 3, 4], deleteLength([0, 1, 2, 3, 4], 0, 0));
        checkEqual([0, 1, 2, 3, 4], deleteLength([0, 1, 2, 3, 4], 1, 0));
        checkEqual([0, 1, 2, 3, 4], deleteLength([0, 1, 2, 3, 4], 2, 0));
        checkEqual([0, 1, 2, 3, 4], deleteLength([0, 1, 2, 3, 4], 3, 0));
        checkEqual([0, 1, 2, 3, 4], deleteLength([0, 1, 2, 3, 4], 4, 0));
        checkEqual(true, isThrown(function () {
          return deleteLength([0, 1, 2, 3, 4], 5, 0);
        }));
        checkEqual(true, isThrown(function () {
          return deleteLength([0, 1, 2, 3, 4], 6, 0);
        }));
        checkEqual(true, isThrown(function () {
          return deleteLength([0, 1, 2, 3, 4], -2, 3);
        }));
        checkEqual(true, isThrown(function () {
          return deleteLength([0, 1, 2, 3, 4], -1, 3);
        }));
        checkEqual([3, 4], deleteLength([0, 1, 2, 3, 4], 0, 3));
        checkEqual([0, 4], deleteLength([0, 1, 2, 3, 4], 1, 3));
        checkEqual([0, 1], deleteLength([0, 1, 2, 3, 4], 2, 3));
        checkEqual([0, 1, 2], deleteLength([0, 1, 2, 3, 4], 3, 3));
        checkEqual([0, 1, 2, 3], deleteLength([0, 1, 2, 3, 4], 4, 3));
        checkEqual(true, isThrown(function () {
          return deleteLength([0, 1, 2, 3, 4], 5, 3);
        }));
        checkEqual(true, isThrown(function () {
          return deleteLength([0, 1, 2, 3, 4], 6, 3);
        }));
        checkEqual(true, isThrown(function () {
          return deleteLength([0, 1, 2, 3, 4], -2, 5);
        }));
        checkEqual(true, isThrown(function () {
          return deleteLength([0, 1, 2, 3, 4], -1, 5);
        }));
        checkEqual([], deleteLength([0, 1, 2, 3, 4], 0, 5));
        checkEqual([0], deleteLength([0, 1, 2, 3, 4], 1, 5));
        checkEqual([0, 1], deleteLength([0, 1, 2, 3, 4], 2, 5));
        checkEqual([0, 1, 2], deleteLength([0, 1, 2, 3, 4], 3, 5));
        checkEqual([0, 1, 2, 3], deleteLength([0, 1, 2, 3, 4], 4, 5));
        checkEqual(true, isThrown(function () {
          return deleteLength([0, 1, 2, 3, 4], 5, 5);
        }));
        checkEqual(true, isThrown(function () {
          return deleteLength([0, 1, 2, 3, 4], 6, 5);
        }));
        checkEqual(true, isThrown(function () {
          return deleteLength([0, 1, 2, 3, 4], -2, 6);
        }));
        checkEqual(true, isThrown(function () {
          return deleteLength([0, 1, 2, 3, 4], -1, 6);
        }));
        checkEqual([], deleteLength([0, 1, 2, 3, 4], 0, 6));
        checkEqual([0], deleteLength([0, 1, 2, 3, 4], 1, 6));
        checkEqual([0, 1], deleteLength([0, 1, 2, 3, 4], 2, 6));
        checkEqual([0, 1, 2], deleteLength([0, 1, 2, 3, 4], 3, 6));
        checkEqual([0, 1, 2, 3], deleteLength([0, 1, 2, 3, 4], 4, 6));
        checkEqual(true, isThrown(function () {
          return deleteLength([0, 1, 2, 3, 4], 5, 6);
        }));
        checkEqual(true, isThrown(function () {
          return deleteLength([0, 1, 2, 3, 4], 6, 6);
        }));
        testCounter(); // exception

        checkEqual(true, isThrownException(function () {
          deleteLength([1, 2, 3], [0], 1);
        }, 'TypeError'));
        checkEqual(false, isThrownException(function () {
          deleteLength([1, 2, 3], 0, 1);
        }));
        checkEqual(false, isThrownException(function () {
          deleteLength([1, 2, 3], 0, 2);
        }));
        checkEqual(false, isThrownException(function () {
          deleteLength([1, 2, 3], 0, 3);
        }));
        checkEqual(false, isThrownException(function () {
          deleteLength([1, 2, 3], 0, 0);
        }));
        checkEqual(false, isThrownException(function () {
          deleteLength([1, 2, 3], 0, 4);
        }));
        checkEqual(true, isThrownException(function () {
          deleteLength([1, 2, 3], -1, 2);
        }, 'RangeError')); // Object Named Parameter

        checkEqual([0, 3], deleteLength({
          array: [0, 1, 2, 3],
          index: 1,
          length: 2
        }));
      });
    };

    var test_operation_deleteFirst = function test_operation_deleteFirst() {
      it('test_operation_deleteFirst', function () {
        var array1 = [0, 1, 2, 3, 4];
        checkEqual([2, 3, 4], deleteFirst(array1, 2));
        checkEqual([2, 3, 4], array1);
        checkEqual(true, isThrown(function () {
          return deleteFirst([0, 1, 2, 3, 4], -2);
        }));
        checkEqual(true, isThrown(function () {
          return deleteFirst([0, 1, 2, 3, 4], -1);
        }));
        checkEqual([0, 1, 2, 3, 4], deleteFirst([0, 1, 2, 3, 4], 0));
        checkEqual([1, 2, 3, 4], deleteFirst([0, 1, 2, 3, 4], 1));
        checkEqual([2, 3, 4], deleteFirst([0, 1, 2, 3, 4], 2));
        checkEqual([3, 4], deleteFirst([0, 1, 2, 3, 4], 3));
        checkEqual([4], deleteFirst([0, 1, 2, 3, 4], 4));
        checkEqual([], deleteFirst([0, 1, 2, 3, 4], 5));
        checkEqual(true, isThrown(function () {
          return deleteFirst([0, 1, 2, 3, 4], 6);
        })); // exception

        checkEqual(true, isThrownException(function () {
          deleteFirst([1, 2, 3], [0]);
        }, 'TypeError'));
        checkEqual(true, isThrownException(function () {
          deleteFirst([1, 2, 3], 4);
        }, 'RangeError'));
        checkEqual(false, isThrownException(function () {
          deleteFirst([1, 2, 3], 3);
        }, 'RangeError'));
        checkEqual(false, isThrownException(function () {
          deleteFirst([1, 2, 3], 2);
        }, 'RangeError'));
        checkEqual(false, isThrownException(function () {
          deleteFirst([1, 2, 3], 1);
        }, 'RangeError'));
        checkEqual(false, isThrownException(function () {
          deleteFirst([1, 2, 3], 0);
        }, 'RangeError'));
        checkEqual(true, isThrownException(function () {
          deleteFirst([1, 2, 3], -1);
        }, 'RangeError')); // Object Named Parameter

        checkEqual([1, 2, 3], deleteFirst({
          array: [0, 1, 2, 3],
          length: 1
        }));
      });
    };

    var test_operation_deleteLast = function test_operation_deleteLast() {
      it('test_operation_deleteLast', function () {
        var array1 = [0, 1, 2, 3, 4];
        checkEqual([0, 1, 2], deleteLast(array1, 2));
        checkEqual([0, 1, 2], array1);
        checkEqual(true, isThrown(function () {
          return deleteLast([0, 1, 2, 3, 4], -2);
        }));
        checkEqual(true, isThrown(function () {
          return deleteLast([0, 1, 2, 3, 4], -1);
        }));
        checkEqual([0, 1, 2, 3, 4], deleteLast([0, 1, 2, 3, 4], 0));
        checkEqual([0, 1, 2, 3], deleteLast([0, 1, 2, 3, 4], 1));
        checkEqual([0, 1, 2], deleteLast([0, 1, 2, 3, 4], 2));
        checkEqual([0, 1], deleteLast([0, 1, 2, 3, 4], 3));
        checkEqual([0], deleteLast([0, 1, 2, 3, 4], 4));
        checkEqual([], deleteLast([0, 1, 2, 3, 4], 5));
        checkEqual(true, isThrown(function () {
          return deleteLast([0, 1, 2, 3, 4], 6);
        })); // exception

        checkEqual(true, isThrownException(function () {
          deleteLast([1, 2, 3], [0]);
        }, 'TypeError'));
        checkEqual(true, isThrownException(function () {
          deleteLast([1, 2, 3], 4);
        }, 'RangeError'));
        checkEqual(false, isThrownException(function () {
          deleteLast([1, 2, 3], 3);
        }, 'RangeError'));
        checkEqual(false, isThrownException(function () {
          deleteLast([1, 2, 3], 2);
        }, 'RangeError'));
        checkEqual(false, isThrownException(function () {
          deleteLast([1, 2, 3], 1);
        }, 'RangeError'));
        checkEqual(false, isThrownException(function () {
          deleteLast([1, 2, 3], 0);
        }, 'RangeError'));
        checkEqual(true, isThrownException(function () {
          deleteLast([1, 2, 3], -1);
        }, 'RangeError')); // Object Named Parameter

        checkEqual([0, 1, 2], deleteLast({
          array: [0, 1, 2, 3],
          length: 1
        }));
      });
    };

    var test_operation_includeFirst = function test_operation_includeFirst() {
      it('test_operation_includeFirst', function () {
        checkEqual([1, 2, 3], includeFirst([1, 2, 3], [1]));
        checkEqual([2, 1, 2, 3], includeFirst([1, 2, 3], [2]));
        checkEqual([1, 2, 3], includeFirst([1, 2, 3], [1, 2]));
        checkEqual([2, 1, 1, 2, 3], includeFirst([1, 2, 3], [2, 1]));
        checkEqual(['A', 'B', 'C'], includeFirst(['A', 'B', 'C'], ['A']));
        checkEqual(['a', 'A', 'B', 'C'], includeFirst(['A', 'B', 'C'], ['a']));
        checkEqual(['B', 'A', 'B', 'C'], includeFirst(['A', 'B', 'C'], ['B']));
        checkEqual(['A', 'B', 'C'], includeFirst(['A', 'B', 'C'], ['A', 'B']));
        checkEqual(['a', 'B', 'A', 'B', 'C'], includeFirst(['A', 'B', 'C'], ['a', 'B']));
        checkEqual(['B', 'A', 'A', 'B', 'C'], includeFirst(['A', 'B', 'C'], ['B', 'A'])); // Object Named Parameter

        checkEqual(['A', 'B', 'C'], includeFirst({
          array: ['A', 'B', 'C'],
          valueArray: ['A']
        }));
        checkEqual(['a', 'A', 'B', 'C'], includeFirst({
          array: ['A', 'B', 'C'],
          valueArray: ['a']
        }));
      });
    };

    var test_operation_includeLast = function test_operation_includeLast() {
      it('test_operation_includeLast', function () {
        checkEqual([1, 2, 3], includeLast([1, 2, 3], [3]));
        checkEqual([1, 2, 3, 2], includeLast([1, 2, 3], [2]));
        checkEqual([1, 2, 3], includeLast([1, 2, 3], [2, 3]));
        checkEqual([1, 2, 3, 3, 2], includeLast([1, 2, 3], [3, 2]));
        checkEqual(['A', 'B', 'C'], includeLast(['A', 'B', 'C'], ['C']));
        checkEqual(['A', 'B', 'C', 'c'], includeLast(['A', 'B', 'C'], ['c']));
        checkEqual(['A', 'B', 'C', 'B'], includeLast(['A', 'B', 'C'], ['B']));
        checkEqual(['A', 'B', 'C'], includeLast(['A', 'B', 'C'], ['B', 'C']));
        checkEqual(['A', 'B', 'C', 'B', 'c'], includeLast(['A', 'B', 'C'], ['B', 'c']));
        checkEqual(['A', 'B', 'C', 'C', 'B'], includeLast(['A', 'B', 'C'], ['C', 'B'])); // Object Named Parameter

        checkEqual(['A', 'B', 'C'], includeLast({
          array: ['A', 'B', 'C'],
          valueArray: ['C']
        }));
        checkEqual(['A', 'B', 'C', 'c'], includeLast({
          array: ['A', 'B', 'C'],
          valueArray: ['c']
        }));
      });
    };

    var test_operation_includeBothEnds = function test_operation_includeBothEnds() {
      it('test_operation_includeBothEnds', function () {
        checkEqual([1, 2, 1], includeBothEnds([1, 2, 1], [1]));
        checkEqual([1, 1, 2, 3, 1], includeBothEnds([1, 2, 3], [1]));
        checkEqual([1, 2, 1, 2], includeBothEnds([1, 2, 1, 2], [1, 2]));
        checkEqual([1, 2, 1], includeBothEnds([1, 2, 1], [1, 2], [2, 1]));
        checkEqual(['A', 'B', 'A'], includeBothEnds(['A', 'B', 'A'], ['A']));
        checkEqual(['a', 'A', 'B', 'A', 'a'], includeBothEnds(['A', 'B', 'A'], ['a']));
        checkEqual(['A', 'A', 'B', 'C', 'A'], includeBothEnds(['A', 'B', 'C'], ['A']));
        checkEqual(['A', 'B', 'A', 'B'], includeBothEnds(['A', 'B', 'A', 'B'], ['A', 'B']));
        checkEqual(['{', '}'], includeBothEnds(['{', '}'], ['{'], ['}']));
        checkEqual(['{', 'A', '}'], includeBothEnds(['{', 'A', '}'], ['{'], ['}']));
        checkEqual(['{', 'A', '{', '}', '}'], includeBothEnds(['A', '{', '}'], ['{'], ['}']));
        checkEqual(['A', 'A'], includeBothEnds(['A', 'A'], ['A']));
        checkEqual(['A', 'A', 'A'], includeBothEnds(['A'], ['A']));
        checkEqual(['A', '', 'A'], includeBothEnds([''], ['A']));
        checkEqual(['A', 'A'], includeBothEnds([], ['A'])); // exception

        checkEqual(true, isThrownException(function () {
          includeBothEnds(0, 1);
        }, 'TypeError')); // Object Named Parameter

        checkEqual(['A', 'B', 'A'], includeBothEnds({
          array: ['A', 'B', 'A'],
          valueArray: ['A']
        }));
        checkEqual(['a', 'A', 'B', 'A', 'a'], includeBothEnds({
          array: ['A', 'B', 'A'],
          valueArray: ['a']
        }));
        checkEqual(['A', 'B', 'A'], includeBothEnds({
          array: ['A', 'B', 'A'],
          valueFirstArray: ['A']
        }));
        checkEqual(['A', 'A', 'B', 'A', 'D', 'A'], includeBothEnds({
          array: ['A', 'B', 'A', 'D'],
          valueFirstArray: ['A']
        }));
        checkEqual(['A', 'B', 'A', 'D'], includeBothEnds({
          array: ['A', 'B', 'A', 'D'],
          valueFirstArray: ['A'],
          valueLastArray: ['D']
        }));
      });
    };

    var test_operation_excludeFirst = function test_operation_excludeFirst() {
      it('test_operation_excludeFirst', function () {
        checkEqual([2, 3], excludeFirst([1, 2, 3], [1]));
        checkEqual([1, 2, 3], excludeFirst([1, 2, 3], [2]));
        checkEqual([3], excludeFirst([1, 2, 3], [1, 2]));
        checkEqual([1, 2, 3], excludeFirst([1, 2, 3], [2, 1]));
        checkEqual(['B', 'C'], excludeFirst(['A', 'B', 'C'], ['A']));
        checkEqual(['A', 'B', 'C'], excludeFirst(['A', 'B', 'C'], ['a']));
        checkEqual(['A', 'B', 'C'], excludeFirst(['A', 'B', 'C'], ['B']));
        checkEqual(['C'], excludeFirst(['A', 'B', 'C'], ['A', 'B']));
        checkEqual(['A', 'B', 'C'], excludeFirst(['A', 'B', 'C'], ['a', 'B']));
        checkEqual(['A', 'B', 'C'], excludeFirst(['A', 'B', 'C'], ['B', 'A'])); // Object Named Parameter

        checkEqual(['B', 'C'], excludeFirst({
          array: ['A', 'B', 'C'],
          valueArray: ['A']
        }));
        checkEqual(['A', 'B', 'C'], excludeFirst({
          array: ['A', 'B', 'C'],
          valueArray: ['a']
        }));
      });
    };

    var test_operation_excludeLast = function test_operation_excludeLast() {
      it('test_operation_excludeLast', function () {
        checkEqual([1, 2], excludeLast([1, 2, 3], [3]));
        checkEqual([1, 2, 3], excludeLast([1, 2, 3], [2]));
        checkEqual([1], excludeLast([1, 2, 3], [2, 3]));
        checkEqual([1, 2, 3], excludeLast([1, 2, 3], [3, 2]));
        checkEqual(['A', 'B'], excludeLast(['A', 'B', 'C'], ['C']));
        checkEqual(['A', 'B', 'C'], excludeLast(['A', 'B', 'C'], ['c']));
        checkEqual(['A', 'B', 'C'], excludeLast(['A', 'B', 'C'], ['B']));
        checkEqual(['A'], excludeLast(['A', 'B', 'C'], ['B', 'C']));
        checkEqual(['A', 'B', 'C'], excludeLast(['A', 'B', 'C'], ['B', 'c']));
        checkEqual(['A', 'B', 'C'], excludeLast(['A', 'B', 'C'], ['C', 'B'])); // Object Named Parameter

        checkEqual(['A', 'B'], excludeLast({
          array: ['A', 'B', 'C'],
          valueArray: ['C']
        }));
        checkEqual(['A', 'B', 'C'], excludeLast({
          array: ['A', 'B', 'C'],
          valueArray: ['c']
        }));
      });
    };

    var test_operation_excludeBothEnds = function test_operation_excludeBothEnds() {
      it('test_operation_excludeBothEnds', function () {
        checkEqual([2], excludeBothEnds([1, 2, 1], [1]));
        checkEqual([1, 2, 3], excludeBothEnds([1, 2, 3], [1]));
        checkEqual([], excludeBothEnds([1, 2, 1, 2], [1, 2]));
        checkEqual([], excludeBothEnds([1, 2, 3, 4, 5], [1, 2, 3, 4], [5]));
        checkEqual([1, 2, 3, 4, 5], excludeBothEnds([1, 2, 3, 4, 5], [1, 2, 3, 4], [3, 5]));
        checkEqual([], excludeBothEnds([1, 2, 3, 4, 5], [1, 2, 3, 4], [3, 4, 5]));
        checkEqual([], excludeBothEnds([1, 2, 1], [1, 2], [2, 1]));
        checkEqual(['B'], excludeBothEnds(['A', 'B', 'A'], ['A']));
        checkEqual(['A', 'B', 'A'], excludeBothEnds(['A', 'B', 'A'], ['a']));
        checkEqual(['A', 'B', 'C'], excludeBothEnds(['A', 'B', 'C'], ['A']));
        checkEqual([], excludeBothEnds(['A', 'B', 'A', 'B'], ['A', 'B']));
        checkEqual([], excludeBothEnds(['A', 'B', 'A'], ['A', 'B'], ['B', 'A']));
        checkEqual([], excludeBothEnds(['{', '}'], ['{'], ['}']));
        checkEqual(['A'], excludeBothEnds(['{', 'A', '}'], ['{'], ['}']));
        checkEqual(['A', '{', '}'], excludeBothEnds(['A', '{', '}'], ['{'], ['}']));
        checkEqual([], excludeBothEnds(['A', 'A'], ['A']));
        checkEqual(['A'], excludeBothEnds(['A'], ['A']));
        checkEqual([''], excludeBothEnds([''], ['A']));
        checkEqual([], excludeBothEnds([], ['A'])); // exception

        checkEqual(true, isThrownException(function () {
          excludeBothEnds(0, 1);
        }, 'TypeError')); // Object Named Parameter

        checkEqual(['B'], excludeBothEnds({
          array: ['A', 'B', 'A'],
          valueArray: ['A']
        }));
        checkEqual(['A', 'B', 'A'], excludeBothEnds({
          array: ['A', 'B', 'A'],
          valueArray: ['a']
        }));
        checkEqual(['B'], excludeBothEnds({
          array: ['A', 'B', 'A'],
          valueFirstArray: ['A']
        }));
        checkEqual(['A', 'B', 'A', 'D'], excludeBothEnds({
          array: ['A', 'B', 'A', 'D'],
          valueFirstArray: ['A']
        }));
        checkEqual(['B', 'A'], excludeBothEnds({
          array: ['A', 'B', 'A', 'D'],
          valueFirstArray: ['A'],
          valueLastArray: ['D']
        }));
      });
    };

    var test_operation_trimFirst = function test_operation_trimFirst() {
      it('test_operation_trimFirst', function () {
        checkEqual([2, 3], trimFirst([1, 2, 3], [1]));
        checkEqual([2, 3], trimFirst([1, 1, 1, 2, 3], [1]));
        checkEqual([], trimFirst([1, 1, 1, 1, 1], [1]));
        checkEqual([1, 2, 3], trimFirst([1, 2, 3], [2]));
        checkEqual([2, 1, 2, 3], trimFirst([1, 2, 1, 2, 3], [1]));
        checkEqual([3], trimFirst([1, 2, 1, 2, 3], [1, 2]));
        checkEqual([3], trimFirst([1, 2, 1, 2, 3], [2, 1]));
        checkEqual(['B', 'C'], trimFirst(['A', 'B', 'C'], ['A']));
        checkEqual(['A', 'B', 'C'], trimFirst(['A', 'B', 'C'], ['a']));
        checkEqual(['A', 'B', 'C'], trimFirst(['A', 'B', 'C'], ['B']));
        checkEqual(['B', 'A', 'B', 'C'], trimFirst(['A', 'B', 'A', 'B', 'C'], ['A']));
        checkEqual(['C'], trimFirst(['A', 'B', 'A', 'B', 'C'], ['A', 'B']));
        checkEqual(['C'], trimFirst(['A', 'B', 'A', 'B', 'C'], ['B', 'A'])); // Object Named Parameter

        checkEqual(['B', 'C'], trimFirst({
          array: ['A', 'B', 'C'],
          valueArray: ['A']
        }));
        checkEqual(['A', 'B', 'C'], trimFirst({
          array: ['A', 'B', 'C'],
          valueArray: ['a']
        }));
      });
    };

    var test_operation_trimLast = function test_operation_trimLast() {
      it('test_operation_trimLast', function () {
        checkEqual([1, 2], trimLast([1, 2, 3], [3]));
        checkEqual([1, 2], trimLast([1, 2, 3, 3, 3], [3]));
        checkEqual([], trimLast([3, 3, 3, 3, 3], [3]));
        checkEqual([1, 2, 3], trimLast([1, 2, 3], [2]));
        checkEqual([1, 2, 3, 2], trimLast([1, 2, 3, 2, 3], [3]));
        checkEqual([1], trimLast([1, 2, 3, 2, 3], [2, 3]));
        checkEqual([1], trimLast([1, 2, 3, 2, 3], [3, 2]));
        checkEqual(['A', 'B'], trimLast(['A', 'B', 'C'], ['C']));
        checkEqual(['A', 'B', 'C'], trimLast(['A', 'B', 'C'], ['c']));
        checkEqual(['A', 'B', 'C'], trimLast(['A', 'B', 'C'], ['B']));
        checkEqual(['A', 'B', 'C', 'B'], trimLast(['A', 'B', 'C', 'B', 'C'], ['C']));
        checkEqual(['A'], trimLast(['A', 'B', 'C', 'B', 'C'], ['B', 'C']));
        checkEqual(['A'], trimLast(['A', 'B', 'C', 'B', 'C'], ['C', 'B'])); // Object Named Parameter

        checkEqual(['A', 'B'], trimLast({
          array: ['A', 'B', 'C'],
          valueArray: ['C']
        }));
        checkEqual(['A', 'B', 'C'], trimLast({
          array: ['A', 'B', 'C'],
          valueArray: ['c']
        }));
      });
    };

    var test_operation_trimBothEnds = function test_operation_trimBothEnds() {
      it('test_operation_trimBothEnds', function () {
        checkEqual([2], trimBothEnds([1, 2, 1], [1]));
        checkEqual([2], trimBothEnds([1, 1, 2, 1, 1, 1], [1]));
        checkEqual([], trimBothEnds([1, 1, 1], [1]));
        checkEqual([2, 3], trimBothEnds([1, 2, 3], [1]));
        checkEqual([2, 3, 1, 2], trimBothEnds([1, 2, 3, 1, 2], [1]));
        checkEqual([1, 2, 3, 1], trimBothEnds([1, 2, 3, 1, 2], [2]));
        checkEqual([3], trimBothEnds([1, 2, 3, 1, 2], [1, 2]));
        checkEqual([3], trimBothEnds([1, 2, 3, 1, 2], [2, 1]));
        checkEqual(['B'], trimBothEnds(['A', 'B', 'A'], ['A']));
        checkEqual(['A', 'B', 'A'], trimBothEnds(['A', 'B', 'A'], ['a']));
        checkEqual(['B', 'C'], trimBothEnds(['A', 'B', 'C'], ['A']));
        checkEqual(['B', 'C', 'A', 'B'], trimBothEnds(['A', 'B', 'C', 'A', 'B'], ['A']));
        checkEqual(['A', 'B', 'C', 'A'], trimBothEnds(['A', 'B', 'C', 'A', 'B'], ['B']));
        checkEqual(['C'], trimBothEnds(['A', 'B', 'C', 'A', 'B'], ['A', 'B']));
        checkEqual(['C'], trimBothEnds(['A', 'B', 'C', 'A', 'B'], ['B', 'A']));
        checkEqual([], trimBothEnds(['{', '}'], ['{'], ['}']));
        checkEqual([], trimBothEnds(['{', '{', '{', '}', '}', '}'], ['{'], ['}']));
        checkEqual([], trimBothEnds(['{', '{', '{', '}'], ['{'], ['}']));
        checkEqual(['A'], trimBothEnds(['{', 'A', '}'], ['{'], ['}']));
        checkEqual(['A', '{'], trimBothEnds(['A', '{', '}'], ['{'], ['}']));
        checkEqual([], trimBothEnds(['A', 'A'], ['A']));
        checkEqual([], trimBothEnds(['A'], ['A']));
        checkEqual([''], trimBothEnds([''], ['A']));
        checkEqual([], trimBothEnds([], ['A'])); // exception

        checkEqual(true, isThrownException(function () {
          trimBothEnds(0, 1);
        }, 'TypeError')); // Object Named Parameter

        checkEqual(['B'], trimBothEnds({
          array: ['A', 'B', 'A'],
          valueArray: ['A']
        }));
        checkEqual(['A', 'B', 'A'], trimBothEnds({
          array: ['A', 'B', 'A'],
          valueArray: ['a']
        }));
        checkEqual(['B'], trimBothEnds({
          array: ['A', 'B', 'A'],
          valueFirstArray: ['A']
        }));
        checkEqual(['B', 'A', 'D'], trimBothEnds({
          array: ['A', 'B', 'A', 'D'],
          valueFirstArray: ['A']
        }));
        checkEqual(['B', 'A'], trimBothEnds({
          array: ['A', 'B', 'A', 'D'],
          valueFirstArray: ['A'],
          valueLastArray: ['D']
        }));
      });
    };

    var test_operation_popFirst = function test_operation_popFirst() {
      it('test_operation_popFirst', function () {
        var array1 = [1, 2, 3];
        checkEqual(1, popFirst(array1));
        checkEqual([2, 3], array1);
        var array1 = ['A', 'B', 'C'];
        checkEqual('A', popFirst(array1));
        checkEqual(['B', 'C'], array1);
      });
    };

    var test_operation_popLast = function test_operation_popLast() {
      it('test_operation_popLast', function () {
        var array1 = [1, 2, 3];
        checkEqual(3, popLast(array1));
        checkEqual([1, 2], array1);
        var array1 = ['A', 'B', 'C'];
        checkEqual('C', popLast(array1));
        checkEqual(['A', 'B'], array1);
      });
    };

    var test_operation_pushFirst = function test_operation_pushFirst() {
      it('test_operation_pushFirst', function () {
        var array1 = [1, 2, 3];
        checkEqual(4, pushFirst(array1, 0));
        checkEqual([0, 1, 2, 3], array1);
        checkEqual(5, pushFirst(array1, 0));
        checkEqual([0, 0, 1, 2, 3], array1);
        var array1 = ['A', 'B', 'C'];
        checkEqual(4, pushFirst(array1, 'D'));
        checkEqual(['D', 'A', 'B', 'C'], array1);
        checkEqual(5, pushFirst(array1, 'D'));
        checkEqual(['D', 'D', 'A', 'B', 'C'], array1);
      });
    };

    var test_operation_pushLast = function test_operation_pushLast() {
      it('test_operation_pushLast', function () {
        var array1 = [1, 2, 3];
        checkEqual(4, pushLast(array1, 4));
        checkEqual([1, 2, 3, 4], array1);
        checkEqual(5, pushLast(array1, 4));
        checkEqual([1, 2, 3, 4, 4], array1);
        var array1 = ['A', 'B', 'C'];
        checkEqual(4, pushLast(array1, 'D'));
        checkEqual(['A', 'B', 'C', 'D'], array1);
        checkEqual(5, pushLast(array1, 'D'));
        checkEqual(['A', 'B', 'C', 'D', 'D'], array1);
      });
    };

    var test_operation_remainFirst = function test_operation_remainFirst() {
      it('test_operation_remainFirst', function () {
        var array1 = [1, 2, 3];
        checkEqual([1, 2, 3], remainFirst(array1, 4));
        checkEqual([1, 2, 3], array1);
        var array1 = [1, 2, 3];
        checkEqual([1, 2, 3], remainFirst(array1, 3));
        checkEqual([1, 2, 3], array1);
        var array1 = [1, 2, 3];
        checkEqual([1, 2], remainFirst(array1, 2));
        checkEqual([1, 2], array1);
        var array1 = [1, 2, 3];
        checkEqual([1], remainFirst(array1, 1));
        checkEqual([1], array1);
        var array1 = [1, 2, 3];
        checkEqual([], remainFirst(array1, 0));
        checkEqual([], array1); // Object Named Parameter

        checkEqual(['A', 'B'], remainFirst({
          array: ['A', 'B', 'A'],
          length: 2
        }));
      });
    };

    var test_operation_remainLast = function test_operation_remainLast() {
      it('test_operation_remainLast', function () {
        var array1 = [1, 2, 3];
        checkEqual([1, 2, 3], remainLast(array1, 4));
        checkEqual([1, 2, 3], array1);
        var array1 = [1, 2, 3];
        checkEqual([1, 2, 3], remainLast(array1, 3));
        checkEqual([1, 2, 3], array1);
        var array1 = [1, 2, 3];
        checkEqual([2, 3], remainLast(array1, 2));
        checkEqual([2, 3], array1);
        var array1 = [1, 2, 3];
        checkEqual([3], remainLast(array1, 1));
        checkEqual([3], array1);
        var array1 = [1, 2, 3];
        checkEqual([], remainLast(array1, 0));
        checkEqual([], array1); // Object Named Parameter

        checkEqual(['B', 'A'], remainLast({
          array: ['A', 'B', 'A'],
          length: 2
        }));
      });
    };

    var test_operation_filter = function test_operation_filter() {
      it('test_operation_filter', function () {
        checkEqual([2, 4], array.operation.filter([0, 1, 2, 3, 4, 5], function (value) {
          return isEven(value);
        }));
        checkEqual([2, 4], array.operation.filter([0, 1, 2, 3, 4, 5], isEven));
        checkEqual([1, 3, 5], array.operation.filter([0, 1, 2, 3, 4, 5], isOdd)); // Object Named Parameter

        checkEqual([2, 4], array.operation.filter({
          array: [0, 1, 2, 3, 4, 5],
          func: function func(value) {
            return isEven(value);
          }
        }));
      });
    };

    var test_operation_sort = function test_operation_sort() {
      it('test_operation_sort', function () {
        // exception
        checkEqual(true, isThrownException(function () {
          array.operation.sort([0, 1], 'a', 'ascending');
        }, 'TypeError'));
        checkEqual(true, isThrownException(function () {
          array.operation.sort([0, 1], 'number', 'b');
        }, 'TypeError'));
      });
    };

    var test_operation_sortNumber = function test_operation_sortNumber() {
      it('test_operation_sortNumber', function () {
        checkEqual([0, 1, 2, 3, 4, 5], array.operation.sortNumberAscending([3, 4, 1, 2, 5, 0]));
        checkEqual([5, 4, 3, 2, 1, 0], array.operation.sortNumberDescending([3, 4, 1, 2, 5, 0])); // exception

        checkEqual(true, isThrownException(function () {
          array.operation.sortNumberAscending(1);
        }, 'TypeError'));
        checkEqual(false, isThrownException(function () {
          array.operation.sortNumberAscending([0, 1, 2]);
        }, 'TypeError'));
        checkEqual(true, isThrownException(function () {
          array.operation.sortNumberAscending([0, '1', 2]);
        }, 'TypeError'));
      });
    };

    var test_operation_sortLength = function test_operation_sortLength() {
      it('test_operation_sortLength', function () {
        checkEqual(['a', 'aa', 'aaa'], array.operation.sortLengthAscending(['aaa', 'a', 'aa']));
        checkEqual(['aaa', 'aa', 'a'], array.operation.sortLengthDescending(['aaa', 'a', 'aa']));
        checkCompare(parts.compare.equalDeep, ['a', [0, 1], 'aaa'], array.operation.sortLengthAscending(['aaa', 'a', [0, 1]])); // exception

        checkEqual(true, isThrownException(function () {
          array.operation.sortLengthAscending(1);
        }, 'TypeError'));
        checkEqual(false, isThrownException(function () {
          array.operation.sortLengthAscending(['a', 'aa']);
        }, 'TypeError'));
        checkEqual(true, isThrownException(function () {
          array.operation.sortLengthAscending([0, 'aa']);
        }, 'TypeError'));
        checkEqual(false, isThrownException(function () {
          array.operation.sortLengthAscending([[0], [1, 2]]);
        }, 'TypeError'));
        checkEqual(true, isThrownException(function () {
          array.operation.sortLengthAscending([0, [1, 2]]);
        }, 'TypeError'));
      });
    };

    var test_operation_sortDictionary = function test_operation_sortDictionary() {
      it('test_operation_sortDictionary', function () {
        checkEqual(['A', 'AA', 'Aa', 'a', 'aA', 'aa'], array.operation.sortDictionaryAscending(['a', 'A', 'Aa', 'aa', 'aA', 'AA']));
        checkEqual(['aa', 'aA', 'a', 'Aa', 'AA', 'A'], array.operation.sortDictionaryDescending(['a', 'A', 'aa', 'Aa', 'AA', 'aA']));
        checkEqual(['A', 'AA', 'Aa', 'Ab', 'a', 'aA', 'aa', 'ab'], array.operation.sortDictionaryAscending(['a', 'A', 'aa', 'Aa', 'AA', 'aA', 'ab', 'Ab']));
        checkEqual(['ab', 'aa', 'aA', 'a', 'Ab', 'Aa', 'AA', 'A'], array.operation.sortDictionaryDescending(['a', 'A', 'aa', 'Aa', 'AA', 'aA', 'ab', 'Ab'])); // exception

        checkEqual(true, isThrownException(function () {
          array.operation.sortDictionaryAscending(1);
        }, 'TypeError'));
        checkEqual(false, isThrownException(function () {
          array.operation.sortDictionaryAscending(['a', 'aa']);
        }, 'TypeError'));
        checkEqual(true, isThrownException(function () {
          array.operation.sortDictionaryAscending([0, 'aa']);
        }, 'TypeError'));
      });
    };

    var test_ArrayEntries_standard = function test_ArrayEntries_standard() {
      it('test_ArrayEntries_standard', function () {
        if (parts.platform.isWindowsScriptHost()) {
          return;
        }

        if (parts.platform.isInternetExplorer()) {
          return;
        }

        var arrayEntries = function arrayEntries(array) {
          var result = [];

          var _iterator = _createForOfIteratorHelper(array.entries()),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var _step$value = _slicedToArray(_step.value, 2),
                  i = _step$value[0],
                  v = _step$value[1];

              result.push([i, v]);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          return result;
        };

        var array1 = ['a', 'b', 'c'];
        var array2 = [[0, 'a'], [1, 'b'], [2, 'c']];
        checkEqual(array2, arrayEntries(array1));
      });
    };

    var test_arrayToIndexValueArray = function test_arrayToIndexValueArray() {
      it('test_arrayToIndexValueArray', function () {
        var array1 = ['a', 'b', 'c'];
        var array2 = [[0, 'a'], [1, 'b'], [2, 'c']];
        checkEqual(array2, arrayToIndexValueArray(array1)); // only array type

        checkEqual(true, isThrown(function () {
          return objectToKeyValueArray({});
        })); // object parameter

        checkEqual(array2, arrayToIndexValueArray({
          array: array1
        }));
      });
    };

    test_array_NumberArray();
    test_array_IntegerArray();
    test_array_from();
    test_min();
    test_max();
    test_sum();
    test_average();
    test_median();
    test_mode();
    test_uniqe();
    test_single();
    test_multiple();
    test_filter();
    test_map();
    test_count();
    test_findIndex();
    test_findBackIndex();
    test_find();
    test_findBack();
    test_some();
    test_all();
    test_isFirst();
    test_isLast();
    test_isBothEnds();
    test_array_subIndex();
    test_array_subLength();
    test_array_subFirst();
    test_array_subLast();
    test_operation_insert();
    test_operation_add();
    test_operation_deleteLength();
    test_operation_deleteIndex();
    test_operation_deleteFirst();
    test_operation_deleteLast();
    test_operation_includeFirst();
    test_operation_includeLast();
    test_operation_includeBothEnds();
    test_operation_excludeFirst();
    test_operation_excludeLast();
    test_operation_excludeBothEnds();
    test_operation_trimFirst();
    test_operation_trimLast();
    test_operation_trimBothEnds();
    test_operation_popFirst();
    test_operation_popLast();
    test_operation_pushFirst();
    test_operation_pushLast();
    test_operation_remainFirst();
    test_operation_remainLast();
    test_operation_filter();
    test_operation_sort();
    test_operation_sortNumber();
    test_operation_sortLength();
    test_operation_sortDictionary();
    test_ArrayEntries_standard();
    test_arrayToIndexValueArray();
  });
};

exports.test_execute_array = test_execute_array;
var _default = {
  test_execute_array: test_execute_array
};
exports["default"] = _default;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.test_execute_consoleHook = void 0;

/* eslint-disable max-len */

/* eslint-disable no-var */
var test_execute_consoleHook = function test_execute_consoleHook(parts) {
  var _parts$test = parts.test,
      describe = _parts$test.describe,
      it = _parts$test.it;
  describe('test_execute_consoleHook', function () {
    var _parts$test2 = parts.test,
        checkEqual = _parts$test2.checkEqual,
        isThrown = _parts$test2.isThrown;
    var consoleHook = parts.consoleHook;

    var test_consoleHook = function test_consoleHook(methodName) {
      it('test_consoleHook' + ' ' + methodName, function () {
        if (parts.platform.isGoogleAppsScript()) {
          return;
        }

        var consoleOutput = '';

        var consoleHook_hook = function consoleHook_hook() {
          consoleHook.hook(methodName, function (args) {
            consoleOutput += args + ';';
          });
        };

        var consoleMethod = console.log;

        var testConsoleMethod = function testConsoleMethod() {
          console[methodName]('debug1');
          console[methodName]('debug2');
          console[methodName]('release1');
          console[methodName]('release2');
        };

        consoleOutput = '';
        consoleHook_hook();
        testConsoleMethod();
        consoleHook.unHook(methodName);
        checkEqual('debug1;debug2;release1;release2;', consoleOutput);
        consoleOutput = '';
        consoleHook_hook();
        consoleHook.accept(methodName, ['debug1'], [], console[methodName]);
        testConsoleMethod();
        consoleHook.unHook(methodName);
        checkEqual('debug1;', consoleOutput);
        consoleOutput = '';
        consoleHook_hook();
        consoleHook.accept(methodName, ['debug'], [], console[methodName]);
        testConsoleMethod();
        consoleHook.unHook(methodName);
        checkEqual('debug1;debug2;', consoleOutput);
        consoleOutput = '';
        consoleHook_hook();
        consoleHook.accept(methodName, ['debug1', 'release1'], [], console[methodName]);
        testConsoleMethod();
        consoleHook.unHook(methodName);
        checkEqual('debug1;release1;', consoleOutput);
        consoleOutput = '';
        consoleHook_hook();
        consoleHook.accept(methodName, [/debug?/], [], console[methodName]);
        testConsoleMethod();
        consoleHook.unHook(methodName);
        checkEqual('debug1;debug2;', consoleOutput);
        consoleOutput = '';
        consoleHook_hook();
        consoleHook.accept(methodName, [/debug?/], ['debug1'], console[methodName]);
        testConsoleMethod();
        consoleHook.unHook(methodName);
        checkEqual('debug2;', consoleOutput);
        consoleOutput = '';
        consoleHook_hook();
        consoleHook.accept(methodName, [], ['release1'], console[methodName]);
        testConsoleMethod();
        consoleHook.unHook(methodName);
        checkEqual('debug1;debug2;release2;', consoleOutput);
        consoleOutput = '';
        consoleHook_hook();
        consoleHook.accept(methodName, [], [/debug?/], console[methodName]);
        testConsoleMethod();
        consoleHook.unHook(methodName);
        checkEqual('release1;release2;', consoleOutput);
        consoleOutput = '';
        consoleHook_hook();
        consoleHook.accept(methodName, ['debug1', 'debug2'], ['debug1'], console[methodName]);
        testConsoleMethod();
        consoleHook.unHook(methodName);
        checkEqual('debug2;', consoleOutput);

        var testConsoleMethod = function testConsoleMethod() {
          console[methodName]('debug1', 'a', 'messageA');
          console[methodName]('debug2', 'b', 'messageB');
          console[methodName]('release1', 'a', 'messageC');
          console[methodName]('release2', 'b', 'messageD');
        };

        consoleOutput = '';
        consoleHook_hook();
        consoleHook.accept(methodName, ['debug', ' a '], [], console[methodName]);
        testConsoleMethod();
        consoleHook.unHook(methodName);
        checkEqual('debug1;debug2;release1;', consoleOutput);
        consoleOutput = '';
        consoleHook_hook();
        consoleHook.accept(methodName, ['debug'], [' a '], console[methodName]);
        testConsoleMethod();
        consoleHook.unHook(methodName);
        checkEqual('debug2;', consoleOutput);
        consoleOutput = '';
        consoleHook_hook();
        consoleHook.accept(methodName, [' b '], ['messageB'], console[methodName]);
        testConsoleMethod();
        consoleHook.unHook(methodName);
        checkEqual('release2;', consoleOutput);
        consoleOutput = '';
        consoleHook_hook();
        consoleHook.accept(methodName, ['messageD'], [], console[methodName]);
        testConsoleMethod();
        consoleHook.unHook(methodName);
        checkEqual('release2;', consoleOutput);
        consoleHook.hook(methodName, consoleMethod);
      });
    };

    test_consoleHook('log');
    test_consoleHook('info');
    test_consoleHook('warn');
    test_consoleHook('error');
    test_consoleHook('debug');
  });
};

exports.test_execute_consoleHook = test_execute_consoleHook;
var _default = {
  test_execute_consoleHook: test_execute_consoleHook
};
exports["default"] = _default;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.test_execute_other = void 0;

var test_execute_other = function test_execute_other(parts) {
  var _parts$test = parts.test,
      checkEqual = _parts$test.checkEqual,
      describe = _parts$test.describe,
      it = _parts$test.it,
      test = _parts$test.test;
  describe('test_execute_other', function () {
    var test_split = function test_split() {
      it('test_split', function () {
        checkEqual(3, 'a,b,c'.split(',').length);
        checkEqual(4, 'a,b,c,'.split(',').length);
        checkEqual('a', 'a,b,c,'.split(',')[0]);
        checkEqual('', 'a,b,c,'.split(',')[3]);
      });
    };

    test_split();
  });
};

exports.test_execute_other = test_execute_other;
var _default = {
  test_execute_other: test_execute_other
};
exports["default"] = _default;

/***/ })
/******/ ]);
});