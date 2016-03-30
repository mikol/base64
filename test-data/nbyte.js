(function (context) {
// -----------------------------------------------------------------------------

'use strict';

var id = 'nbyte';
var dependencies = [];

function factory() {
  return {
    /* jscs:disable maximumLineLength */
    base64: 'JMKi4oKs8KCcjg==',
    bytes: [36, 194, 162, 226, 130, 172, 240, 160, 156, 142],
    string: '$¢€𠜎'
    /* jscs:enable maximumLineLength */
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
