(function (context) {
// -----------------------------------------------------------------------------

'use strict';

var id = 'latin';
var dependencies = [];

function factory() {
  return {
    /* jscs:disable maximumLineLength */
    base64: 'RWwgdmVsb3ogbXVyY2nDqWxhZ28gaGluZMO6IGNvbcOtYSBmZWxpeiBjYXJkaWxsbyB5IGtpd2kuIExhIGNpZ8O8ZcOxYSB0b2NhYmEgZWwgc2F4b2bDs24gZGV0csOhcyBkZWwgcGFsZW5xdWUgZGUgcGFqYS4=',
    base64ni: 'RWwgdmVsb3ogbXVyY2nDqWxhZ28gaGluZMO6IGNvbcOtYSBmZWxpeiBjYXJkaWxsbyB5IGtpd2kuIExhIGNpZ8O8ZcOxYSB0b2NhYmEgZWwgc2F4b2bDs24gZGV0csOhcyBkZWwgcGFsZW5xdWUgZGUgcGFqYS4',
    base64url: 'RWwgdmVsb3ogbXVyY2nDqWxhZ28gaGluZMO6IGNvbcOtYSBmZWxpeiBjYXJkaWxsbyB5IGtpd2kuIExhIGNpZ8O8ZcOxYSB0b2NhYmEgZWwgc2F4b2bDs24gZGV0csOhcyBkZWwgcGFsZW5xdWUgZGUgcGFqYS4=',
    bytes: [69, 108, 32, 118, 101, 108, 111, 122, 32, 109, 117, 114, 99, 105, 195, 169, 108, 97, 103, 111, 32, 104, 105, 110, 100, 195, 186, 32, 99, 111, 109, 195, 173, 97, 32, 102, 101, 108, 105, 122, 32, 99, 97, 114, 100, 105, 108, 108, 111, 32, 121, 32, 107, 105, 119, 105, 46, 32, 76, 97, 32, 99, 105, 103, 195, 188, 101, 195, 177, 97, 32, 116, 111, 99, 97, 98, 97, 32, 101, 108, 32, 115, 97, 120, 111, 102, 195, 179, 110, 32, 100, 101, 116, 114, 195, 161, 115, 32, 100, 101, 108, 32, 112, 97, 108, 101, 110, 113, 117, 101, 32, 100, 101, 32, 112, 97, 106, 97, 46],
    string: 'El veloz murciélago hindú comía feliz cardillo y kiwi. La cigüeña tocaba el saxofón detrás del palenque de paja.'
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
