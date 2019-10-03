"use strict";

var test_execute_string = function test_execute_string(parts) {
  var _parts$test = parts.test,
      checkEqual = _parts$test.checkEqual,
      isThrown = _parts$test.isThrown,
      isThrownException = _parts$test.isThrownException;
  var _parts$string = parts.string,
      matchFormat = _parts$string.matchFormat,
      includes = _parts$string.includes;

  var test_matchFormat = function test_matchFormat() {
    checkEqual(true, matchFormat('number', '123'));
    checkEqual(false, matchFormat('number', '12a'));
    checkEqual(false, matchFormat('number', '-123'));
    checkEqual(true, matchFormat('integer', '-123')); // Parameter Args

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
  };

  var test_includes = function test_includes() {
    checkEqual(true, includes('abcdef', ['ab']));
    checkEqual(true, includes('abcdef', ['cd']));
    checkEqual(false, includes('abcdef', ['ac']));
    checkEqual(false, includes('abcdef', ['ac', 'bd']));
    checkEqual(true, includes('abcdef', ['ac', 'de']));
    checkEqual(false, includes('abcdef', ['ac', 'bd', '']));
    checkEqual(true, includes('abcdef', ['ac', 'de', '']));
    checkEqual(false, includes('abcdef', ['']));
    checkEqual(true, includes('123', ['1'])); // exception

    checkEqual(true, isThrownException(function () {
      includes('abcdef', 'abc');
    }, new TypeError().name));
    checkEqual(false, isThrownException(function () {
      includes('123', ['1']);
    }, new TypeError().name));
    checkEqual(true, isThrownException(function () {
      includes('123', [1]);
    }, new TypeError().name)); // Parameter Args

    checkEqual(true, includes({
      value: 'abcdef',
      compareArray: ['cd']
    }));
    checkEqual(false, includes({
      value: 'abcdef',
      compareArray: ['ac']
    })); // exception

    checkEqual(false, isThrown(function () {
      includes({
        value: '123',
        compareArray: ['123']
      });
    }), 'test_includes thrown 1');
    checkEqual(false, isThrown(function () {
      includes({
        value: '123',
        compareArray: []
      });
    }), 'test_includes thrown 2');
    checkEqual(true, isThrown(function () {
      includes({
        value: '123',
        compareArray: [123]
      });
    }), 'test_includes thrown 3');
    checkEqual(true, isThrown(function () {
      includes({
        value: '123',
        compareArray: 123
      });
    }, function (e) {
      return e.name === new TypeError().name && e.message === 'includes args(compareArray) is not array';
    }), 'test_includes thrown 4');
  };

  console.log('  test string.js start.');
  test_matchFormat();
  test_includes();
  console.log('  test string.js finish.');
};

module.exports = {
  test_execute_string: test_execute_string
};