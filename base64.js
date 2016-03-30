(function (context) {
// -----------------------------------------------------------------------------

'use strict';

var id = 'base64';
var dependencies = typeof Buffer === 'function' ? [] : ['./codec'];

function factory(codec) {
  // cf. btoa
  var encode = codec && codec.encodeString || function (b) {
    return new Buffer(b).toString('base64');
  };

  // cf. atob
  var decode = codec && codec.decodeAsString || function (a) {
    return '' + new Buffer(a.replace(/-/g, '+').replace(/_/g, '/'), 'base64');
  };

  function niEncode(b) {
    return urlEncode(b).replace(/=+$/g, '');
  }

  function urlEncode(b) {
    return encode(b).replace(/\+/g, '-').replace(/\//g, '_');
  }

  return {
    encode: encode,
    decode: decode,
    ni: {
      encode: niEncode
    },
    url: {
      encode: urlEncode
    }
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
