// Adapted from [base64.js](https://goo.gl/VxhUVz).
//
// Copyright 2007 The Closure Library Authors.
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

var id = 'codec';
var dependencies = ['./utf8'];

function factory(utf8) {
  /**
   * @type {Object}
   * @private
   */
  var charactersByByte = {};

  /**
   * @type {Object}
   * @private
   */
  var bytesByCharacter = {};

  /**
   * @const {string}
   * @private
   */
  /* jscs:disable maximumLineLength */
  var ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
  /* jscs:enable maximumLineLength */

  (function () {
    for (var x = 0, nx = ALPHABET.length; x < nx; x++) {
      charactersByByte[x] = ALPHABET.charAt(x);
      bytesByCharacter[charactersByByte[x]] = x;
    }
  }());

  /**
   * Base64-encode a string.
   *
   * @param {string} string A string to encode.
   * @return {string} The base64-encoded string.
   */
  function encodeString(string) {
    return encodeBytes(utf8.asBytes(string));
  }

  /**
   * Base64-decode a string.
   *
   * @param {string} string Input to decode (any whitespace is ignored).
   * @return {string} The decoded value.
   */
  function decodeAsString(string) {
    return utf8.asString(decodeAsBytes(string));
  }

  /**
   * Base64-encode an array of bytes.
   *
   * @param {Array<number>} input Bytes (that is numbers in [0, 255]) to encode.
   * @return {string} The base64-encoded string.
   */
  function encodeBytes(bytes) {
    var map = charactersByByte;
    var characters = [];

    for (var i = 0; i < bytes.length; i += 3) {
      var byte1 = bytes[i];
      var haveByte2 = i + 1 < bytes.length;
      var byte2 = haveByte2 ? bytes[i + 1] : 0;
      var haveByte3 = i + 2 < bytes.length;
      var byte3 = haveByte3 ? bytes[i + 2] : 0;

      var b1 = byte1 >> 2;
      var b2 = ((byte1 & 0x03) << 4) | (byte2 >> 4);
      var b3 = ((byte2 & 0x0F) << 2) | (byte3 >> 6);
      var b4 = byte3 & 0x3F;

      if (!haveByte3) {
        b4 = 64;

        if (!haveByte2) {
          b3 = 64;
        }
      }

      characters.push(map[b1], map[b2], map[b3], map[b4]);
    }

    return characters.join('');
  }

  /**
   * Base64-decode a string to an Array of numbers.
   *
   * In base-64 decoding, groups of four characters are converted into three
   * bytes. If the encoder did not apply padding, the input length may not
   * be a multiple of 4.
   *
   * In this case, the last group will have fewer than 4 characters, and
   * padding will be inferred.  If the group has one or two characters, it
   * decodes to one byte. If the group has three characters, it decodes to
   * two bytes.
   *
   * @param {string} input Input to decode. Any whitespace is ignored, and the
   *     input maybe encoded with either supported alphabet (or a mix thereof).
   * @return {!Array<number>} Bytes representing the decoded value.
   */
  function decodeAsBytes(input) {
    var bytes = [];
    var nx = input.length;
    var x = 0;

    /**
     * @param {number} defaultValue Used for end-of-input.
     * @return {number} The next 6-bit value or the default for end-of-input.
     */
    function getByte(defaultValue) {
      while (x < nx) {
        var c = input.charAt(x++);
        var b = bytesByCharacter[c];

        if (b != null) {
          return b;
        }

        if (!/^[\s\xa0]*$/.test(c)) {
          throw Error('Unknown base64 encoding at character: ' + c);
        }

        // We encountered whitespace: loop around to the next input character.
      }

      return defaultValue;
    }

    while (true) {
      var byte1 = getByte(-1);
      var byte2 = getByte(0);
      var byte3 = getByte(64);
      var byte4 = getByte(64);

      // The common case is that all four bytes are present, so if we have byte4
      // we can skip over the truncated input special case handling.
      if (byte4 === 64) {
        if (byte1 === -1) {
          // No input left to decode.
          return bytes;
        }
        // Here we know an intermediate number of bytes are missing. The
        // defaults for byte2, byte3 and byte4 apply the inferred padding rules
        // per the public API documentation. That is, 1 byte missing should
        // yield 2 bytes of output, but 2 or 3 missing bytes yield a single byte
        // of output. (Recall that 64 corresponds the padding character).
      }

      var outByte1 = (byte1 << 2) | (byte2 >> 4);
      bytes.push(outByte1);

      if (byte3 != 64) {
        var outByte2 = ((byte2 << 4) & 0xF0) | (byte3 >> 2);
        bytes.push(outByte2);

        if (byte4 != 64) {
          var outByte3 = ((byte3 << 6) & 0xC0) | byte4;
          bytes.push(outByte3);
        }
      }
    }
  }

  return {
    encodeString: encodeString,
    decodeAsString: decodeAsString,
    encodeBytes: encodeBytes,
    decodeAsBytes: decodeAsBytes
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
