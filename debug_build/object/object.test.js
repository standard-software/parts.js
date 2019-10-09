"use strict";

var test_execute_object = function test_execute_object(parts) {
  var _parts$test = parts.test,
      checkEqual = _parts$test.checkEqual,
      isThrown = _parts$test.isThrown;
  var object = parts.object;
  var _parts$object = parts.object,
      copyProperty = _parts$object.copyProperty,
      inProperty = _parts$object.inProperty,
      propertyCount = _parts$object.propertyCount;

  var test_object_clone = function test_object_clone() {
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

    var object1 = object.clone(testObject1);
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
    var object1 = object.clone(testObject3);
    object1.a = 0;
    checkEqual(0, object1.a);
    checkEqual(1, testObject3.a);
    checkEqual(true, object1.d === testObject3.d);
    checkEqual(6, object1.d.c);
    checkEqual(6, testObject3.d.c);
    object1.d.a = 7;
    checkEqual(7, object1.d.a);
    checkEqual(7, testObject3.d.a); // clone deep

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
    var object1 = object.cloneDeep(testObject3);
    object1.a = 0;
    checkEqual(0, object1.a);
    checkEqual(1, testObject3.a);
    checkEqual(true, object1.d !== testObject3.d);
    checkEqual(6, object1.d.c);
    checkEqual(6, testObject3.d.c);
    object1.d.a = 7;
    checkEqual(7, object1.d.a);
    checkEqual(4, testObject3.d.a); // exception

    checkEqual(false, isThrown(function () {
      object.clone({
        a: 1,
        b: 2,
        c: 3
      });
    }));
    checkEqual(true, isThrown(function () {
      object.clone(1);
    }));
    checkEqual(true, isThrown(function () {
      object.clone('a');
    }));
    checkEqual(true, isThrown(function () {
      object.clone([]);
    }));
    checkEqual(false, isThrown(function () {
      object.cloneDeep({
        a: 1,
        b: 2,
        c: 3
      });
    }));
    checkEqual(true, isThrown(function () {
      object.cloneDeep(1);
    }));
    checkEqual(true, isThrown(function () {
      object.cloneDeep('a');
    }));
    checkEqual(true, isThrown(function () {
      object.cloneDeep([]);
    }));
  };

  var test_copyProperty = function test_copyProperty() {
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
    checkEqual(true, 'c' in destObject); // parameter args

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
  };

  var test_inProperty = function test_inProperty() {
    var sourceObject = {
      a: '1',
      b: '2'
    };
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
    checkEqual(false, inProperty(sourceObject, 'a,d,')); // parameter args

    checkEqual(true, inProperty({
      object: sourceObject,
      propertyArray: 'b,a,'
    }));
    checkEqual(false, inProperty({
      object: sourceObject,
      propertyArray: 'd'
    })); // exception

    checkEqual(false, isThrown(function () {
      inProperty({}, 'a');
    }));
    checkEqual(false, isThrown(function () {
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
  };

  var test_propertyCount = function test_propertyCount() {
    checkEqual(3, propertyCount({
      a: '1',
      b: '2',
      c: '3'
    }));
    checkEqual(0, propertyCount({})); // exception

    checkEqual(false, isThrown(function () {
      propertyCount({});
    }));
    checkEqual(true, isThrown(function () {
      propertyCount([]);
    }));
  };

  console.log('  test object.js');
  test_object_clone();
  test_copyProperty();
  test_inProperty();
  test_propertyCount();
};

module.exports = {
  test_execute_object: test_execute_object
};