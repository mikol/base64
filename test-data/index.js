(function (context) {
// -----------------------------------------------------------------------------

'use strict';

var id = 'test-data';
var dependencies = [
  './alchemy',
  './ascii',
  './boundaries',
  './emoticons',
  './latin',
  './nbyte',
  './supplementary'
];

function factory(
    alchemy, ascii, boundaries, emoticons, latin, nbyte, supplementary) {
  return {
    alchemy: alchemy,
    ascii: ascii,
    boundaries: boundaries,
    emoticons: emoticons,
    latin: latin,
    nbyte: nbyte,
    supplementary: supplementary
  };
}

// -----------------------------------------------------------------------------
var n = dependencies.length;
var o = 'object';
var r = /([^-_\s])[-_\s]+([^-_\s])/g;
function s(m, a, b) { return a + b.toUpperCase(); }
context = typeof global === o ? global : typeof window === o ? window : context;
if (typeof define === 'function' && define.amd) {
  define(dependencies, function () {
    return factory.apply(context, [].slice.call(arguments));
  });
} else if (typeof module === o && module.exports) {
  for (; n--;) { dependencies[n] = require(dependencies[n]); }
  module.exports = factory.apply(context, dependencies);
} else {
  for (; n--;) { dependencies[n] = context[dependencies[n]]; }
  context[id.replace(r, s)] = factory.apply(context, dependencies);
}
}(this));
