const { parts } = require('../../../../build/babel_webpack/webpack/parts.js');

const {
  test_execute_index,
} = require('../../../../build/babel_webpack/webpack/test_parts.js');

parts.platform.buildMode = 'release';
parts.platform.startName = 'test_babel_webpack_webpack_2.js';

test_execute_index(parts);
