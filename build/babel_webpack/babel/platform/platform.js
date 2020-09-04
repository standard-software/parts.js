"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.isGasRhino = exports.isGasV8 = exports.googleAppScriptEngineName = exports.isOpera = exports.isSafari = exports.isInternetExplorer = exports.isEdge = exports.isFirefox = exports.isChrome = exports.browserName = exports.name = exports.isDeno = exports.isNodeJs = exports.isJest = exports.isGoogleAppsScript = exports.isWindowsScriptHost = exports.isWebBrowser = void 0;

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

var _name;

var name = function name() {
  if (typeof _name !== 'undefined') {
    return _name;
  }

  if (typeof WScript !== 'undefined') {
    _name = 'WindowsScriptHost';
  } else if (typeof Deno !== 'undefined') {
    _name = 'Deno';
  } else if (typeof Browser !== 'undefined') {
    _name = 'GoogleAppsScript';
  } else if (typeof window === 'undefined') {
    _name = 'Node.js';
  } else if (typeof jest !== 'undefined') {
    _name = 'Jest';
  } else if (typeof process !== 'undefined') {
    _name = 'WebBrowser';
  } else {
    _name = 'unknown';
  }

  ;
  return _name;
};

exports.name = name;

name.reset = function () {
  _name = undefined;
};

var _browserName;

var browserName = function browserName() {
  if (typeof _browserName !== 'undefined') {
    return _browserName;
  }

  if (!isWebBrowser()) {
    _browserName = '';
  } else {
    var ua = window.navigator.userAgent.toLowerCase();

    if (ua.indexOf('msie') !== -1 || ua.indexOf('trident') !== -1) {
      _browserName = 'InternetExplorer';
    } else if (ua.indexOf('edg') !== -1) {
      _browserName = 'Edge';
    } else if (ua.indexOf('opr') !== -1) {
      _browserName = 'Opera';
    } else if (ua.indexOf('chrome') !== -1) {
      _browserName = 'Chrome';
    } else if (ua.indexOf('safari') !== -1) {
      _browserName = 'Safari';
    } else if (ua.indexOf('firefox') !== -1) {
      _browserName = 'Firefox';
    } else {
      _browserName = 'other';
    }
  }

  return _browserName;
};

exports.browserName = browserName;

browserName.reset = function () {
  _browserName = undefined;
};

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

var googleAppScriptEngineName = function googleAppScriptEngineName() {
  if (!isGoogleAppsScript()) {
    return '';
  }

  if (typeof Object.toSource === 'undefined') {
    return 'V8';
  } else {
    return 'Rhino';
  }
};

exports.googleAppScriptEngineName = googleAppScriptEngineName;

var isGasV8 = function isGasV8() {
  return googleAppScriptEngineName() === 'V8';
};

exports.isGasV8 = isGasV8;

var isGasRhino = function isGasRhino() {
  return googleAppScriptEngineName() === 'Rhino';
};

exports.isGasRhino = isGasRhino;
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
  googleAppScriptEngineName: googleAppScriptEngineName,
  isGasV8: isGasV8,
  isGasRhino: isGasRhino,
  buildMode: ''
};
exports["default"] = _default;