// Adapted from [crypt.js](https://goo.gl/4j4ziD).
//
// Copyright 2008 The Closure Library Authors.
// Modifications Copyright 2016 Mikol Graves.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

(function (context) {
// -----------------------------------------------------------------------------

'use strict';

var id = 'utf8';
var dependencies = [];

function factory() {
  function asBytes(string) {
    var bytes = [];
    var b = 0;

    for (var i = 0, n = string.length; i < n; i++) {
      var c = string.charCodeAt(i);

      if (c < 128) {
        bytes[b++] = c;
      } else if (c < 2048) {
        bytes[b++] = (c >> 6) | 192;
        bytes[b++] = (c & 63) | 128;
      } else if (
          ((c & 0xFC00) == 0xD800) && (i + 1) < string.length &&
          ((string.charCodeAt(i + 1) & 0xFC00) == 0xDC00)) {
        // Surrogate Pair
        c = 0x10000 + ((c & 0x03FF) << 10) + (string.charCodeAt(++i) & 0x03FF);
        bytes[b++] = (c >> 18) | 240;
        bytes[b++] = ((c >> 12) & 63) | 128;
        bytes[b++] = ((c >> 6) & 63) | 128;
        bytes[b++] = (c & 63) | 128;
      } else {
        bytes[b++] = (c >> 12) | 224;
        bytes[b++] = ((c >> 6) & 63) | 128;
        bytes[b++] = (c & 63) | 128;
      }
    }

    return bytes;
  }

  function asString(bytes) {
    var characters = [];
    var b = 0;
    var c = 0;
    var n = bytes.length;

    while (b < n) {
      var c1 = bytes[b++];
      var c2;
      var c3;
      var c4;

      if (c1 < 128) {
        characters[c++] = String.fromCharCode(c1);
      } else if (c1 > 191 && c1 < 224) {
        c2 = bytes[b++];
        characters[c++] = String.fromCharCode((c1 & 31) << 6 | c2 & 63);
      } else if (c1 > 239 && c1 < 365) {
        // Surrogate Pair
        c2 = bytes[b++];
        c3 = bytes[b++];
        c4 = bytes[b++];
        var u = ((c1 & 7) << 18 | (c2 & 63) << 12 | (c3 & 63) << 6 | c4 & 63) -
            0x10000;
        characters[c++] = String.fromCharCode(0xD800 + (u >> 10));
        characters[c++] = String.fromCharCode(0xDC00 + (u & 1023));
      } else {
        c2 = bytes[b++];
        c3 = bytes[b++];
        characters[c++] =
            String.fromCharCode((c1 & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
      }
    }

    return characters.join('');
  }

  return {
    asBytes: asBytes,
    asString: asString
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
