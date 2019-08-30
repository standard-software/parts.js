const type = require('./type.js');

const VERSION = '0.2.3 beta';

const test_babel_transpile = () => {
  const array = [1, 2, 3];
  return array.map(n => n ** 2);
};

module.exports = {
  VERSION,
  test_babel_transpile,
  type,
};

