const test_execute_convert = (parts) => {

  const {
    checkEqual,
    isThrown,
    isThrownException,
  } = parts.test;

  const {
    numberToString,
    stringToNumber,
    stringToInteger,
  } = parts.convert;

  const test_numberToString = () => {

    // Positive number
    checkEqual('32',        numberToString(32));
    checkEqual('32',        numberToString(32, 10));
    checkEqual('31.5',      numberToString(31.5, 10));
    checkEqual('100000',    numberToString(32, 2));
    checkEqual('11111',     numberToString(31, 2));
    checkEqual('11111.1',   numberToString(31.5, 2));
    checkEqual('11111.01',  numberToString(31.25, 2));
    checkEqual('40',        numberToString(32, 8));
    checkEqual('37',        numberToString(31, 8));
    checkEqual('37.4',      numberToString(31.5, 8));
    checkEqual('20',        numberToString(32, 16));
    checkEqual('1f',        numberToString(31, 16));
    checkEqual('1f.8',      numberToString(31.5, 16));
    checkEqual('44',        numberToString(32, 7));
    checkEqual('43',        numberToString(31, 7));
    checkEqual('255',       numberToString(255));
    checkEqual('11',        numberToString(11));
    checkEqual('255',       numberToString(0xFF));
    checkEqual('16',        numberToString(0o20));
    checkEqual('ff',        numberToString(255, 16));
    checkEqual('b',         numberToString(11, 16));
    checkEqual('177',       numberToString(127, 8));
    checkEqual('12',        numberToString(10, 8));
    checkEqual('11',        numberToString(3, 2));
    checkEqual('1111',      numberToString(15, 2));

    // Negative number
    checkEqual('-32',       numberToString(-32));
    checkEqual('-32',       numberToString(-32, 10));
    checkEqual('-31.5',     numberToString(-31.5, 10));
    checkEqual('-100000',   numberToString(-32, 2));
    checkEqual('-11111',    numberToString(-31, 2));
    checkEqual('-11111.1',  numberToString(-31.5, 2));
    checkEqual('-11111.01', numberToString(-31.25, 2));
    checkEqual('-40',       numberToString(-32, 8));
    checkEqual('-37',       numberToString(-31, 8));
    checkEqual('-37.4',     numberToString(-31.5, 8));
    checkEqual('-20',       numberToString(-32, 16));
    checkEqual('-1f',       numberToString(-31, 16));
    checkEqual('-1f.8',     numberToString(-31.5, 16));
    checkEqual('-44',       numberToString(-32, 7));
    checkEqual('-43',       numberToString(-31, 7));
    checkEqual('-255',      numberToString(-255));
    checkEqual('-11',       numberToString(-11));
    checkEqual('-255',      numberToString(-0xFF));
    checkEqual('-16',       numberToString(-0o20));
    checkEqual('-ff',       numberToString(-255, 16));
    checkEqual('-b',        numberToString(-11, 16));
    checkEqual('-177',      numberToString(-127, 8));
    checkEqual('-12',       numberToString(-10, 8));
    checkEqual('-11',       numberToString(-3, 2));
    checkEqual('-1111',     numberToString(-15, 2));

    // Exception
    let i = 0;
    i += 1;
    checkEqual(true, isThrownException(() => {
      numberToString('123', 10);
    }, (new TypeError).name), `test numberToString exception ${i}`);
    i += 1;
    checkEqual(false, isThrownException(() => {
      numberToString(32, 2);
    }, (new TypeError).name), `test numberToString exception ${i}`);
    i += 1;
    checkEqual(true, isThrownException(() => {
      numberToString(32, 2.5);
    }, (new TypeError).name), `test numberToString exception ${i}`);
    i += 1;
    checkEqual(true, isThrownException(() => {
      numberToString(32, 1);
    }, (new RangeError).name), `test numberToString exception ${i}`);
    i += 1;
    checkEqual(false, isThrownException(() => {
      numberToString(32, 36);
    }, (new TypeError).name), `test numberToString exception ${i}`);
    i += 1;
    checkEqual(true, isThrownException(() => {
      numberToString(32, 37);
    }, (new RangeError).name), `test numberToString exception ${i}`);

    // Parameter Args
    checkEqual('-32', numberToString({
      value: -32,
    }));
    checkEqual('-100000', numberToString({
      value: -32,
      radix: 2,
    }));
  };

  const test_stringToNumber = () => {

    // Integer
    checkEqual(123,       stringToNumber('123'));
    checkEqual(123,       stringToNumber('0123'));
    checkEqual(123,       stringToNumber('+123'));
    checkEqual(-123,      stringToNumber('-0123'));
    checkEqual(undefined, stringToNumber(' 123'), '1');
    checkEqual(undefined, stringToNumber('123 '), '2');
    checkEqual(undefined, stringToNumber(' 123 '), '3');
    checkEqual(undefined, stringToNumber('　123'), '4');
    checkEqual(undefined, stringToNumber('123　'), '5');
    checkEqual(undefined, stringToNumber('　123　'), '6');
    checkEqual(undefined, stringToNumber('123 0'));
    checkEqual(undefined, stringToNumber('0 123'));
    checkEqual(undefined, stringToNumber('1 123'));
    checkEqual(undefined, stringToNumber('123a'));
    checkEqual(undefined, stringToNumber('a123'));

    // Decimal
    checkEqual(123.4,     stringToNumber('123.4'));
    checkEqual(123.4,     stringToNumber('0123.4'));
    checkEqual(123.4,     stringToNumber('+123.4'));
    checkEqual(-123.4,    stringToNumber('-0123.4'));
    checkEqual(undefined, stringToNumber(' 123.4'));
    checkEqual(undefined, stringToNumber('123.4 '));
    checkEqual(undefined, stringToNumber(' 123.4 '));
    checkEqual(undefined, stringToNumber('　123.4'));
    checkEqual(undefined, stringToNumber('123.4　'));
    checkEqual(undefined, stringToNumber('　123.4　'));
    checkEqual(undefined, stringToNumber('123.4 0'));
    checkEqual(undefined, stringToNumber('0 123.4'));
    checkEqual(undefined, stringToNumber('1 123.4'));
    checkEqual(undefined, stringToNumber('123 .4'));
    checkEqual(undefined, stringToNumber('123. 4'));
    checkEqual(undefined, stringToNumber('123.4a'));
    checkEqual(undefined, stringToNumber('a123.4'));
    checkEqual(123.45,    stringToNumber('123.45'));
    checkEqual(undefined, stringToNumber('123.4.5'));

    // string
    checkEqual(undefined, stringToNumber('abc'));
    checkEqual(null,      stringToNumber('abc', null));
    checkEqual(NaN,       stringToNumber('abc', NaN));

    checkEqual(3.14,  Number(3.14));
    checkEqual(3.14,  Number('3.14'));
    checkEqual(3.14,  Number('314e-2'));
    checkEqual(3.14,  Number('0.0314E+2'));
    checkEqual(.14,   Number('.14'));

    checkEqual(undefined, stringToNumber(' '));
    checkEqual(3.14,      stringToNumber('3.14'));
    checkEqual(3.14,      stringToNumber('314e-2'));
    checkEqual(3.14,      stringToNumber('0.0314E+2'));
    checkEqual(0.14,      stringToNumber('.14'));

    checkEqual('1e-17',   0.00000000000000001.toString());
    checkEqual(0.00000000000000001, stringToNumber('1e-17'));
    checkEqual(1e-17, stringToNumber('1e-17'));

    checkEqual(291,  Number('0x123'));
    checkEqual(NaN,  Number('+0x123'));
    checkEqual(NaN,  Number('-0x123'));
    checkEqual(Infinity,   Number('Infinity'));
    checkEqual(NaN,   Number('infinity'));
    checkEqual(NaN,   Number('inf'));
    checkEqual(NaN,   Number('info'));

    checkEqual(undefined, stringToNumber('0x123'));
    checkEqual(undefined, stringToNumber('+0x123'));
    checkEqual(undefined, stringToNumber('-0x123'));
    checkEqual(undefined, stringToNumber('Infinity'));
    checkEqual(undefined, stringToNumber('infinity'));
    checkEqual(undefined, stringToNumber('inf'));
    checkEqual(undefined, stringToNumber('info'));

    checkEqual(1,       Number('1.'));
    checkEqual(NaN,     Number('1.1e'));
    checkEqual(NaN,     Number('1.1e+'));
    checkEqual(100000,  Number('1e+5'));
    checkEqual(0.00001, Number('1e-5'));
    checkEqual(NaN,     Number('1.e'));
    checkEqual(NaN,     Number('1.e+'));
    checkEqual(100000,  Number('1.e+5'));

    checkEqual(1,         stringToNumber('1.'));
    checkEqual(undefined, stringToNumber('1.1e'));
    checkEqual(undefined, stringToNumber('1.1e+'));
    checkEqual(100000,    stringToNumber('1e+5'));
    checkEqual(0.00001,   stringToNumber('1e-5'));
    checkEqual(undefined, stringToNumber('1.e'));
    checkEqual(undefined, stringToNumber('1.e+'));
    checkEqual(100000,    stringToNumber('1.e+5'));

    // Exception
    let i = 0;
    i += 1;
    checkEqual(true, isThrownException(() => {
      stringToNumber(123);
    }, (new TypeError).name), `test stringToNumber exception ${i}`);

    // Parameter Args
    checkEqual(-123, stringToNumber({
      value: '-0123',
    }));
    checkEqual(null, stringToNumber({
      value: 'abc',
      defaultValue: null,
    }));

  };

  const test_stringToInteger = () => {

    // Integer
    checkEqual(123,       stringToInteger('123'));
    checkEqual(123,       stringToInteger('0123'));
    checkEqual(123,       stringToInteger('+123'));
    checkEqual(-123,      stringToInteger('-0123'));
    checkEqual(undefined, stringToInteger(' 123'));
    checkEqual(undefined, stringToInteger('123 '));
    checkEqual(undefined, stringToInteger(' 123 '));
    checkEqual(undefined, stringToInteger('123 0'));
    checkEqual(undefined, stringToInteger('0 123'));
    checkEqual(undefined, stringToInteger('1 123'));
    checkEqual(undefined, stringToInteger('123a'));
    checkEqual(undefined, stringToInteger('a123'));

    // Decimal
    checkEqual(undefined, stringToInteger('123.4'));
    checkEqual(undefined, stringToInteger('0123.4'));
    checkEqual(undefined, stringToInteger('+123.4'));
    checkEqual(undefined, stringToInteger('-0123.4'));
    checkEqual(undefined, stringToInteger(' 123.4'));
    checkEqual(undefined, stringToInteger('123.4 '));
    checkEqual(undefined, stringToInteger(' 123.4 '));
    checkEqual(undefined, stringToInteger('123.4 0'));
    checkEqual(undefined, stringToInteger('0 123.4'));
    checkEqual(undefined, stringToInteger('1 123.4'));
    checkEqual(undefined, stringToInteger('123 .4'));
    checkEqual(undefined, stringToInteger('123. 4'));
    checkEqual(undefined, stringToInteger('123.4a'));
    checkEqual(undefined, stringToInteger('a123.4'));
    checkEqual(undefined, stringToInteger('123.45'));
    checkEqual(undefined, stringToInteger('123.4.5'));

    // Positive number
    checkEqual(32,        stringToInteger('32'));
    checkEqual(32,        stringToInteger('32',       undefined, 10  ));
    checkEqual(undefined, stringToInteger('31.5',     undefined, 10  ));
    checkEqual(32,        stringToInteger('100000',   undefined, 2   ));
    checkEqual(31,        stringToInteger('11111',    undefined, 2   ));
    checkEqual(undefined, stringToInteger('11111.1',  undefined, 2   ));
    checkEqual(undefined, stringToInteger('11111.01', undefined, 2   ));
    checkEqual(32,        stringToInteger('40',       undefined, 8   ));
    checkEqual(31,        stringToInteger('37',       undefined, 8   ));
    checkEqual(undefined, stringToInteger('37.4',     undefined, 8   ));
    checkEqual(32,        stringToInteger('20',       undefined, 16  ));
    checkEqual(31,        stringToInteger('1f',       undefined, 16  ));
    checkEqual(undefined, stringToInteger('1f.8',     undefined, 16  ));
    checkEqual(32,        stringToInteger('44',       undefined, 7   ));
    checkEqual(31,        stringToInteger('43',       undefined, 7   ));
    checkEqual(255,       stringToInteger('255',      undefined, 10  ));
    checkEqual(11,        stringToInteger('11',       undefined, 10  ));
    checkEqual(255,       stringToInteger('FF',       undefined, 16  ));
    checkEqual(16,        stringToInteger('20',       undefined, 8   ));
    checkEqual(255,       stringToInteger('ff',       undefined, 16  ));
    checkEqual(11,        stringToInteger('b',        undefined, 16  ));
    checkEqual(127,       stringToInteger('177',      undefined, 8   ));
    checkEqual(10,        stringToInteger('12',       undefined, 8   ));
    checkEqual(3,         stringToInteger('11',       undefined, 2   ));
    checkEqual(15,        stringToInteger('1111',     undefined, 2   ));

    // Negative number
    checkEqual(-32,       stringToInteger('-32'));
    checkEqual(-32,       stringToInteger('-32',      undefined, 10  ));
    checkEqual(undefined, stringToInteger('-31.5',    undefined, 10  ));
    checkEqual(-32,       stringToInteger('-100000',  undefined, 2   ));
    checkEqual(-31,       stringToInteger('-11111',   undefined, 2   ));
    checkEqual(undefined, stringToInteger('-11111.1', undefined, 2   ));
    checkEqual(undefined, stringToInteger('-11111.01',undefined, 2   ));
    checkEqual(-32,       stringToInteger('-40',      undefined, 8   ));
    checkEqual(-31,       stringToInteger('-37',      undefined, 8   ));
    checkEqual(undefined, stringToInteger('-37.4',    undefined, 8   ));
    checkEqual(-32,       stringToInteger('-20',      undefined, 16  ));
    checkEqual(-31,       stringToInteger('-1f',      undefined, 16  ));
    checkEqual(undefined, stringToInteger('-1f.8',    undefined, 16  ));
    checkEqual(-32,       stringToInteger('-44',      undefined, 7   ));
    checkEqual(-31,       stringToInteger('-43',      undefined, 7   ));
    checkEqual(-255,      stringToInteger('-255',     undefined, 10  ));
    checkEqual(-11,       stringToInteger('-11',      undefined, 10  ));
    checkEqual(-255,      stringToInteger('-FF',      undefined, 16  ));
    checkEqual(-16,       stringToInteger('-20',      undefined, 8   ));
    checkEqual(-255,      stringToInteger('-ff',      undefined, 16  ));
    checkEqual(-11,       stringToInteger('-b',       undefined, 16  ));
    checkEqual(-127,      stringToInteger('-177',     undefined, 8   ));
    checkEqual(-10,       stringToInteger('-12',      undefined, 8   ));
    checkEqual(-3,        stringToInteger('-11',      undefined, 2   ));
    checkEqual(-15,       stringToInteger('-1111',    undefined, 2   ));

    // Default Value
    checkEqual(undefined, stringToInteger('abc'));
    checkEqual(null,      stringToInteger('abc', null,  10));
    checkEqual(NaN,       stringToInteger('abc', NaN,   10));

    // Exception
    let i = 0;
    i += 1;
    checkEqual(true, isThrownException(() => {
      stringToInteger(123);
    }, (new TypeError).name), `test stringToInteger exception ${i}`);
    i += 1;
    checkEqual(false, isThrownException(() => {
      stringToInteger('123', undefined, 2);
    }, (new TypeError).name), `test stringToInteger exception ${i}`);
    i += 1;
    checkEqual(true, isThrownException(() => {
      stringToInteger('123', undefined, 2.5);
    }, (new TypeError).name), `test stringToInteger exception ${i}`);
    i += 1;
    checkEqual(true, isThrownException(() => {
      stringToInteger('123', undefined, 1);
    }, (new RangeError).name), `test stringToInteger exception ${i}`);
    i += 1;
    checkEqual(false, isThrownException(() => {
      stringToInteger('123', undefined, 36);
    }, (new TypeError).name), `test stringToInteger exception ${i}`);
    i += 1;
    checkEqual(true, isThrownException(() => {
      stringToInteger('123', undefined, 37);
    }, (new RangeError).name), `test stringToInteger exception ${i}`);

    // Parameter Args
    checkEqual(-123, stringToInteger({
      value: '-0123',
    }));
    checkEqual(null, stringToInteger({
      value: 'abc',
      defaultValue: null,
    }));
    checkEqual(undefined, stringToInteger({
      value: 'abc',
    }));
    checkEqual(-15, stringToInteger({
      value: '-1111',
      radix: 2,
    }));
  };

  console.log('  test convert.js');
  test_numberToString();
  test_stringToNumber();
  test_stringToInteger();
}

module.exports = {
  test_execute_convert,
};