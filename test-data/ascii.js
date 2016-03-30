(function (context) {
// -----------------------------------------------------------------------------

'use strict';

var id = 'ascii';
var dependencies = [];

function factory() {
  return {
    /* jscs:disable maximumLineLength */
    base64: 'QnJpZ2h0IHZpeGVucyBqdW1wLiBEb3p5IGZvd2wgcXVhY2sh',
    base64ni: 'QnJpZ2h0IHZpeGVucyBqdW1wLiBEb3p5IGZvd2wgcXVhY2sh',
    base64url: 'QnJpZ2h0IHZpeGVucyBqdW1wLiBEb3p5IGZvd2wgcXVhY2sh',
    bytes: [66, 114, 105, 103, 104, 116, 32, 118, 105, 120, 101, 110, 115, 32, 106, 117, 109, 112, 46, 32, 68, 111, 122, 121, 32, 102, 111, 119, 108, 32, 113, 117, 97, 99, 107, 33],
    string: 'Bright vixens jump. Dozy fowl quack!'
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
