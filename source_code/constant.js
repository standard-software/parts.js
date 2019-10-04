// type
const _TYPE_BASE =
  'Undefined,Null,NaNStrict,' +
  'Boolean,Number,Integer,String,' +
  'Function,Object,ObjectType,' +
  'Array,Date,RegExp,' +
  'Exception,' +
  '';

const IS_TYPE           = _TYPE_BASE.split(',').map(item => `is${item}`).join(',');
const ISNOT_TYPE        = _TYPE_BASE.split(',').map(item => `isNot${item}`).join(',');
const IS_TYPE_ARRAY     = _TYPE_BASE.split(',').map(item => `is${item}Array`).join(',');
const ISNOT_TYPE_ARRAY  = _TYPE_BASE.split(',').map(item => `isNot${item}Array`).join(',');

const _TYPE_BASE_SHORT =
  'Bool,Num,Int,Str,' +
  'Func,Obj,ObjType,' +
  'Except,' +
  '';
const IS_TYPE_SHORT     = _TYPE_BASE_SHORT.split(',').map(item => `is${item}`).join(',');
const ISNOT_TYPE_SHORT  = _TYPE_BASE_SHORT.split(',').map(item => `isNot${item}`).join(',');
const TYPE = [
  IS_TYPE, ISNOT_TYPE, IS_TYPE_ARRAY, ISNOT_TYPE_ARRAY,
  IS_TYPE_SHORT, ISNOT_TYPE_SHORT,
].join(',');

// test
const TEST =
  'checkEqual,' +
  'isThrown,isThrownValue,isThrownException,isNotThrown,' +
  '';

// syntax
const SYNTAX =
  'assert,guard,' +
  'sc,if_,switch_,' +
  '';

// compare
const COMPARE =
  'equal,or,' +
  'match,matchValue,initialValue,' +
  'isEmpty,' +
  '';

// convert
const CONVERT =
  'numberToString,' +
  'stringToNumber,stringToInteger,' +

  'numToString,' +
  'strToNumber,strToInteger,' +

  'numToStr,' +
  'strToNum,strToInt,' +
  ''

// string
const STRING_PUBLIC =
  'matchFormat,includes,' +
  ''
const STRING_ROOT =
  'matchFormat,' +
  ''

// object
const OBJECT =
  'copyProperty,propertyCount,inProperty,' +
  'copyProp,propCount,inProp,' +
  ''

// consoleHook
const _CONSOLE_HOOK_BASE =
  ',Log,Info,Warn,Error,Debug';
const CONSOLE_HOOK =
  _CONSOLE_HOOK_BASE.split(',').map(item => `hook${item}`).join(',') + ',' +
  _CONSOLE_HOOK_BASE.split(',').map(item => `unHook${item}`).join(',') + ',' +
  _CONSOLE_HOOK_BASE.split(',').map(item => `accept${item}`).join(',') + ',' +
  ''

const propertyNames = {
  TYPE,
  TEST,
  SYNTAX,
  COMPARE,
  CONVERT,
  STRING_PUBLIC,
  STRING_ROOT,
  OBJECT,
  CONSOLE_HOOK,
};

module.exports = {
  propertyNames,
};