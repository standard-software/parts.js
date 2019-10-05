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

### type ES Modules

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
partjs/test_exec/release_web/test_index.html

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

## How to use WSH .wsf file

### refer to example
partjs/test_exec/release_wsh/test_index.wsf

### wsf file (ex. index.wsf)

```
<?xml version="1.0" encoding="shift-jis" ?>

<job>
<script language="JavaScript">
<![CDATA[
  var module = {};
  var parts;
]]>
</script>
<script language="JavaScript" src="../../release_build/parts.js"></script>
<script language="JavaScript">
<![CDATA[
  var parts = module.exports;

  var outputMessage = '';
  outputMessage += 'parts version is ' + parts.VERSION;
  WScript.Echo(outputMessage);

]]>
</script>
</job>
```

You can now use the functions of the parts object.


## Version

### 2.3.0
#### 2019/10/05(Sat)
- add replaceAll

### 2.3.0
#### 2019/10/05(Sat)
- add number.js
  - isMultiples,isEven,isOdd,
  - round,nearEqual,inRange,randomInt

### 2.2.0
#### 2019/10/04(Fri)
- move webpack.config.js babel.config.js
- update test release_wsh
- change file position
- add constant.js
- add test nameSpace

### 2.1.1
#### 2019/10/03(Thu)
- update consoleHook.hookXxx

### 2.1.0
#### 2019/10/01(Tue)
- update copyProperty
- add inProperty
- add isObjectType
- add polyfill array.includes
- add polyfill Object.keys entries
- update polyfill array.some
- add propertyCount
- add isEmpty
- update consoleHook.hook,accept

### 2.0.1
#### 2019/09/26(Thu)
- document update
- update test code(html, wsf)

### 2.0.0
#### 2019/09/26(Thu)
- update consoleHook
- add object.js copyProperty
  - add test_copyProperty
- update Parameter Args
- define root function(property) name
- define public function(property) name
- update test_isObject
- add Shortcut Name


### More Info
[VERSION.md](./VERSION.md)


### Before ver2.0.0
Verssion 1.x.x = Previous product  
[standard-software / Copipe.js](https://github.com/standard-software/copipejs)
