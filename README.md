# Parts.js
JavaScript Code Parts TypeSafe Library Compatible with any js platform

## URL

### GitHub
standard-software/partsjs: JavaScript Code Parts  
https://github.com/standard-software/partsjs

### npm
@standard-software/parts - npm  
https://www.npmjs.com/package/@standard-software/parts

## How to use parts.js in Node.js

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

## How to use parts.js in HTML page

### refer to example
partsjs/how_to_use.html
partsjs/test_exec/release_web/test_index.html

### HTML file

```
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <title>how_to_use.html</title>
</head>
<body>
  <script src="./release_build/parts.js"></script>
  <script>
    document.write('parts version is ' + parts.VERSION)
  </script>
</body>
```

You can now use the functions of the parts.js object.

## How to use Google Apps Script for Rhino and V8

### access Google Apps Script Home 

https://script.google.com/home

### create new Project

- input name for example [parts.js test]
- menu [file][new][script file]
- input [parts]
- created parts.gs

You can copy and paste ./release_build/parts.js code into parts.gs

- project
  - code.gs
  - parts.gs

### code.gs

```
// code.gs
function myFunction() {
  console.log('parts version is ' + parts.VERSION);
}
```

You can now use the functions of the parts.js object.

To see the execution results

Google Apps Script Home
[parts.js test][run count][my function]

### support V8

- menu [view][show manifest file]

update manifest file
```
// appsscript.json
{
  "timeZone": "Asia/Tokyo",
  "dependencies": {
  },
  "exceptionLogging": "STACKDRIVER",
  "runtimeVersion": "V8"
}
```

```
// code.gs
function myFunction() {
  outputFunction = () => {
    return 'parts version is ' + parts.VERSION
  }
  console.log(outputFunction());
}
```

## How to use Google SpreadSheet

same [How to use Google Apps Script]

### access Google SpreadSheet

### create new script

- spreadsheet menu [tool][script editor]

open google apps script project

- input name for example [SpreadSheets parts.js test]
- menu [file][new][script file]
- input [parts]
- created parts.gs

You can copy and paste ./release_build/parts.js code into parts.gs

- project
  - code.gs
  - parts.gs

### code.gs

```
// code.gs
function myFunction() {
  console.log('parts version is ' + parts.VERSION);
  Browser.msgBox('parts version is ' + parts.VERSION);
}
```

run and see sheet page.

more write add code.gs

```
function onOpen() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet();
  var entries = [
    {
      name : "execute myFunction",
      functionName : "myFunction"
    }
  ];
  sheet.addMenu("run script", entries);
};

function myFunction() {
  console.log('parts version is ' + parts.VERSION);
  Browser.msgBox('parts version is ' + parts.VERSION);
}
```

- spreadsheet menu [run script]execute myFunction]

### support V8

same [How to use Google Apps Script]

## How to use parts in WSH (Windows Scripting Host .wsf file)

### refer to example
partsjs/how_to_use.wsf
partsjs/test_exec/release_wsh/test_index.wsf

### wsf file (ex. index.wsf)

```
<?xml version="1.0" encoding="shift-jis" ?>
<job>
  <script language="JavaScript">
  <![CDATA[
    var console = {};
  ]]>
  </script>
  <script language="JavaScript" src="./release_build/parts.js"></script>
  <script language="JavaScript">
  <![CDATA[
    WScript.Echo('parts version is ' + parts.VERSION)
  ]]>
  </script>
</job>
```

You can now use the functions of the parts.js object.


## Version

### 4.1.0
- update README.md
  - Operation check Google Apps Script Rhino and V8
  - Operation check Google Spreadsheet
- add array. isFirst / isLast /isBothEnds

### 4.0.1
#### 2020/01/30(Thu)
- update isObjectParameter
- rename filename _isXxx.js >> isXxx.js
- eslint fix
- add other.test.js test_split

### 4.0.0
#### 2020/01/29(Wed)
- change build webpack config
  - change How to use HTML script tag
  - change How to use WSH
  - more simple
- add how_to_use.html how_to_use.wsf
- add _propertyCount.js
  - update propertyCount (hasOwn)
- update isObjectParameter
- update isEmptyObject object.js >> isType.js
- add isEmptyArray
- update isXxx >> isXxxAll
- update _isXxx >> isXxx

### 3.5.0
#### 2020/01/24(Fri)
- add includes includesSome inclludesAll
- delete string.includes
- update consoleHook
- _inProperty >> isObjectParameter
- update getProperty inProperty
- update polyfill String.prototype.includes
- update test output message
- update test output testname
- update propertyCount

### 3.4.0
#### 2020/01/15(Wed)
- delete isEmpty
- add isEmptyObjectAll
- update setProperty return value
- findIndexFirst >> findFirstIndex
- findIndexLast >> findLastIndex
- add match.js
  - match >> matchSome
  - matchValue >> matchSomeValue
  - matchAll >> allMatchSome
  - matchSomeIndex >> indexOfMatchSome
  - matchSome >> someMatchSome
  - add match matchValue
  - add matchAll matchAllValue
  - add allMatchAll someMatchAll indexOfMatchAll
  - delete matchEvery matchAnyIndex matchAny
- add array .some .all

### 3.3.0
#### 2020/01/05(Sun)
- update checkEqual
  - update equal
  - add equalFunction.equalValue
- update array support Object Named Arguemnt
  - filter map count
  - findIndex findBackIndex find findBack
- add array operation
  - insert
  - add
  - delete
- test
  - support exception continue

### More Info
[VERSION.md](./VERSION.md)


### Before ver2.0.0
Verssion 1.x.x = Previous product  
[standard-software / Copipe.js](https://github.com/standard-software/copipejs)
