# Parts.js
JavaScript Code Parts

## URL

### GitHub
standard-software/partsjs: JavaScript Code Parts  
https://github.com/standard-software/partsjs

### npm
@standard-software/parts - npm  
https://www.npmjs.com/package/@standard-software/parts

## How to use Node.js

### npm install
    npm i @standard-software/parts

### type CommonJS

```
// index.js
const parts = require("@standard-software/parts");

console.log(
  'parts version is ', parts.VERSION
);
```
    node index.js

## type ES Modules

```
// index.mjs
import parts from '@standard-software/parts';

console.log(
  'parts version is ', parts.VERSION
);
```
    node --experimental-modules index.mjs

## How to use HTML Page

### refer to example
part.js/test_code/release_web/test_index.html

### HTML file

```
<script>
  var module = {};
  var parts;
</script>

<script src="./release_build/parts.js"></script>
<script>
  parts = module.exports;
</script>
<script>
  document.write('parts version is ' + parts.VERSION)
</script>
```

You can now use the functions of the parts object.


## Version

### 0.4.1
#### 2019/09/02(Mon)
- update document "How to use HTML Page"

### 0.4.0
#### 2019/09/01(Sun)
- support web html
  /test_code/release_web/test_index.html
- update document

### 0.3.0
#### 2019/08/31(Sat)
- webpack ver4.x install
- change test code file structure

### 0.2.3
#### 2019/08/30(Fri)
- add TypeCheck (type.js)
  - PrimitiveTypeCheck
    - isUndefined
    - isNull
    - isNaNStrict
    - isBoolean
    - isNumber
    - isInteger
    - isString
    - isFunction
  - ObjectTypeCheck
    - isObject
    - isArray
    - isDate
    - isRegExp
  - OtherTypeCheck
    - isException
  - For Each isNotXxx isXxxArrayVersion isNotXxxArray
- add TestCode TypeCheck (test_type.js)

### 0.2.2
#### 2019/08/30(Fri)
- Document update
- add type.js (_isUndefined)
- add debug test code

### 0.2.1
#### 2019/08/29(Thu)
- repair version number miss

### 0.2.0
#### 2019/08/29(Thu)
- babel 7 install
- babel 6 install and uninstall

### 0.1.1
#### 2019/08/29(Thu)
- npm regist

### 0.1.0
#### 2019/08/28(Wed)
- First Comit
  parts.js/
    test_code/test_index.js
    source_code/index.js

### More Info
[VERSION.md](./VERSION.md)
