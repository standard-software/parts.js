module.exports = {
  mode: 'none',
  entry: ['./build/babel_webpack/babel/index.test.js'],
  output: {
    filename: 'test_parts.js',
    path: __dirname + '/../build/babel_webpack/webpack/',
    library: 'test_parts',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
};
