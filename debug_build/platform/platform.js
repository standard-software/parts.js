"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.isOpera = exports.isSafari = exports.isInternetExplorer = exports.isEdge = exports.isFirefox = exports.isChrome = exports.browserName = exports.name = exports.isDeno = exports.isNodeJs = exports.isJest = exports.isGoogleAppsScript = exports.isWindowsScriptHost = exports.isWebBrowser = void 0;

var _includes2 = require("../compare/includes.js");

var _includes_common = require("../compare/includes_common.js");

var isWebBrowser = function isWebBrowser() {
  return name() === 'WebBrowser';
};

exports.isWebBrowser = isWebBrowser;

var isWindowsScriptHost = function isWindowsScriptHost() {
  return name() === 'WindowsScriptHost';
};

exports.isWindowsScriptHost = isWindowsScriptHost;

var isGoogleAppsScript = function isGoogleAppsScript() {
  return name() === 'GoogleAppsScript';
};

exports.isGoogleAppsScript = isGoogleAppsScript;

var isJest = function isJest() {
  return name() === 'Jest';
};

exports.isJest = isJest;

var isNodeJs = function isNodeJs() {
  return name() === 'Node.js';
};

exports.isNodeJs = isNodeJs;

var isDeno = function isDeno() {
  return name() === 'Deno';
};

exports.isDeno = isDeno;

var name = function name() {
  var result;

  if (typeof WScript !== 'undefined') {
    result = 'WindowsScriptHost';
  } else if (typeof Deno !== 'undefined') {
    result = 'Deno';
  } else if (typeof Browser !== 'undefined') {
    result = 'GoogleAppsScript';
  } else if (typeof window === 'undefined') {
    result = 'Node.js';
  } else if (typeof jest !== 'undefined') {
    result = 'Jest';
  } else if (typeof process !== 'undefined') {
    result = 'WebBrowser';
  } else {
    result = 'unknown';
  }

  ;

  if ((0, _includes2._includes)(['WindowsScriptHost', 'WebBrowser', 'GoogleAppsScript', 'Deno', 'Node.js', 'Jest', 'unknown'], result) === false) {
    throw new Error('platform name error');
  }

  return result;
};

exports.name = name;

var browserName = function browserName() {
  var result = '';

  if (isWebBrowser()) {
    var ua = window.navigator.userAgent.toLowerCase();

    if ((0, _includes_common._includesSome)(ua, ['msie', 'trident'])) {
      result = 'InternetExplorer';
    } else if ((0, _includes2._includes)(ua, 'edge')) {
      result = 'Edge';
    } else if ((0, _includes2._includes)(ua, 'opr')) {
      result = 'Opera';
    } else if ((0, _includes2._includes)(ua, 'chrome')) {
      result = 'Chrome';
    } else if ((0, _includes2._includes)(ua, 'safari')) {
      result = 'Safari';
    } else if ((0, _includes2._includes)(ua, 'firefox')) {
      result = 'Firefox';
    } else {
      result = 'other';
    }
  }

  if ((0, _includes2._includes)(['Chrome', 'Firefox', 'Edge', 'InternetExplorer', 'Safari', 'Opera', 'other', ''], result) === false) {
    throw new Error('platform browserName error');
  }

  return result;
};

exports.browserName = browserName;

var isChrome = function isChrome() {
  return browserName() === 'Chrome';
};

exports.isChrome = isChrome;

var isFirefox = function isFirefox() {
  return browserName() === 'Firefox';
};

exports.isFirefox = isFirefox;

var isEdge = function isEdge() {
  return browserName() === 'Edge';
};

exports.isEdge = isEdge;

var isInternetExplorer = function isInternetExplorer() {
  return browserName() === 'InternetExplorer';
};

exports.isInternetExplorer = isInternetExplorer;

var isSafari = function isSafari() {
  return browserName() === 'Safari';
};

exports.isSafari = isSafari;

var isOpera = function isOpera() {
  return browserName() === 'Opera';
};

exports.isOpera = isOpera;
var _default = {
  name: name,
  isWebBrowser: isWebBrowser,
  isWindowsScriptHost: isWindowsScriptHost,
  isGoogleAppsScript: isGoogleAppsScript,
  isNodeJs: isNodeJs,
  isDeno: isDeno,
  isJest: isJest,
  browserName: browserName,
  isChrome: isChrome,
  isFirefox: isFirefox,
  isEdge: isEdge,
  isInternetExplorer: isInternetExplorer,
  isSafari: isSafari,
  isOpera: isOpera,
  buildMode: ''
};
exports["default"] = _default;