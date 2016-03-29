(function (context) {
// -----------------------------------------------------------------------------

'use strict';

var id = '';
var dependencies =
    ['../utf8', '../test-data', 'actually', 'is', 'matches', 'criteria'];

function factory(utf8, data, actually, is, matches) {
  function areEqual(expected, actual) {
    if (is.array(expected) && is.array(actual)) {
      if (expected.length !== actual.length) {
        return false;
      }

      for (var x = 0, nx = expected.length; x < nx; ++x) {
        if (expected[x] !== actual[x]) {
          return false;
        }
      }

      return true;
    }

    return false;
  }

  scope('`utf8.asBytes()` Tests',
  function () {
    test('Converts an ASCII string into an array of bytes.',
    function () {
      var actual = utf8.asBytes(data.ascii.string);
      var expected = data.ascii.bytes;

      actually(areEqual, expected, actual);
    });

    test('Converts a Latin string into an array of bytes.',
    function () {
      var actual = utf8.asBytes(data.latin.string);
      var expected = data.latin.bytes;

      actually(areEqual, expected, actual);
    });

    test('Converts 1-, 2-, 3-, and 4-byte characters into an array of bytes.',
    function () {
      var actual = utf8.asBytes(data.nbyte.string);
      var expected = data.nbyte.bytes;

      actually(areEqual, expected, actual);
    });

    test('Converts alchemical surrogate pairs into an array of bytes.',
    function () {
      var actual = utf8.asBytes(data.alchemy.string);
      var expected = data.alchemy.bytes;

      actually(areEqual, expected, actual);
    });

    test('Converts emoji emoticon surrogate pairs into an array of bytes.',
    function () {
      var actual = utf8.asBytes(data.emoticons.string);
      var expected = data.emoticons.bytes;

      actually(areEqual, expected, actual);
    });

    test('Converts supplementary characters into an array of bytes.',
    function () {
      var actual = utf8.asBytes(data.supplementary.string);
      var expected = data.supplementary.bytes;

      actually(areEqual, expected, actual);
    });

    test('Converts byte boundary sequences into an array of bytes.',
    function () {
      var actual = utf8.asBytes(data.boundaries.string);
      var expected = data.boundaries.bytes;

      actually(areEqual, expected, actual);
    });
  });

  scope('`utf8.asString()` Tests',
  function () {
    test('Converts an array of bytes into an ASCII string.',
    function () {
      var actual = utf8.asString(data.ascii.bytes);
      var expected = data.ascii.string;

      actually(matches, expected, actual);
    });

    test('Converts an array of bytes into a Latin string.',
    function () {
      var actual = utf8.asString(data.latin.bytes);
      var expected = data.latin.string;

      actually(matches, expected, actual);
    });

    test('Converts an array of bytes into 1-, 2-, 3-, and 4-byte characters.',
    function () {
      var actual = utf8.asString(data.nbyte.bytes);
      var expected = data.nbyte.string;

      actually(matches, expected, actual);
    });

    test('Converts an array of bytes into alchemical surrogate pairs.',
    function () {
      var actual = utf8.asString(data.alchemy.bytes);
      var expected = data.alchemy.string;

      actually(matches, expected, actual);
    });

    test('Converts an array of bytes into emoji emoticon surrogate pairs.',
    function () {
      var actual = utf8.asString(data.emoticons.bytes);
      var expected = data.emoticons.string;

      actually(matches, expected, actual);
    });

    test('Converts an array of bytes into supplementary characters.',
    function () {
      var actual = utf8.asString(data.supplementary.bytes);
      var expected = data.supplementary.string;

      actually(matches, expected, actual);
    });

    test('Converts an array of bytes into byte boundary sequences.',
    function () {
      var actual = utf8.asString(data.boundaries.bytes);
      var expected = data.boundaries.string;

      actually(matches, expected, actual);
    });
  });
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
