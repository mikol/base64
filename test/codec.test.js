(function (context) {
// -----------------------------------------------------------------------------

'use strict';

var id = '';
var dependencies = [
  '../codec',
  '../test-data',
  '../utf8',
  'actually',
  'is',
  'matches',
  'criteria'
];

function factory(codec, data, utf8, actually, is, matches) {
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

  scope('`codec.encodeBytes()` Tests',
  function () {
    test('Encodes ASCII bytes.',
    function () {
      var actual = codec.encodeBytes(data.ascii.bytes);
      var expected = data.ascii.base64;

      actually(matches, expected, actual);
    });

    test('Encodes Latin bytes.',
    function () {
      var actual = codec.encodeBytes(data.latin.bytes);
      var expected = data.latin.base64;

      actually(matches, expected, actual);
    });

    test('Encodes 1-, 2-, 3-, and 4-byte values.',
    function () {
      var actual = codec.encodeBytes(data.nbyte.bytes);
      var expected = data.nbyte.base64;

      actually(matches, expected, actual);
    });

    test('Encodes alchemical surrogate pair bytes.',
    function () {
      var actual = codec.encodeBytes(data.alchemy.bytes);
      var expected = data.alchemy.base64;

      actually(matches, expected, actual);
    });

    test('Encodes emoji emoticon surrogate pair bytes.',
    function () {
      var actual = codec.encodeBytes(data.emoticons.bytes);
      var expected = data.emoticons.base64;

      actually(matches, expected, actual);
    });

    test('Encodes supplementary bytes.',
    function () {
      var actual = codec.encodeBytes(data.supplementary.bytes);
      var expected = data.supplementary.base64;

      actually(matches, expected, actual);
    });

    test('Encodes byte boundary values.',
    function () {
      var actual = codec.encodeBytes(data.boundaries.bytes);
      var expected = data.boundaries.base64;

      actually(matches, expected, actual);
    });
  });

  scope('`codec.decodeAsBytes()` Tests',
  function () {
    test('Decodes as ASCII bytes.',
    function () {
      var actual = codec.decodeAsBytes(data.ascii.base64);
      var expected = data.ascii.bytes;

      actually(areEqual, expected, actual);
    });

    test('Decodes as Latin bytes.',
    function () {
      var actual = codec.decodeAsBytes(data.latin.base64);
      var expected = data.latin.bytes;

      actually(areEqual, expected, actual);
    });

    test('Decodes as 1-, 2-, 3-, and 4-byte values.',
    function () {
      var actual = codec.decodeAsBytes(data.nbyte.base64);
      var expected = data.nbyte.bytes;

      actually(areEqual, expected, actual);
    });

    test('Decodes as alchemical surrogate pair bytes.',
    function () {
      var actual = codec.decodeAsBytes(data.alchemy.base64);
      var expected = data.alchemy.bytes;

      actually(areEqual, expected, actual);
    });

    test('Decodes as emoji emoticon surrogate pair bytes.',
    function () {
      var actual = codec.decodeAsBytes(data.emoticons.base64);
      var expected = data.emoticons.bytes;

      actually(areEqual, expected, actual);
    });

    test('Decodes as supplementary bytes.',
    function () {
      var actual = codec.decodeAsBytes(data.supplementary.base64);
      var expected = data.supplementary.bytes;

      actually(areEqual, expected, actual);
    });

    test('Decodes as byte boundary values.',
    function () {
      var actual = codec.decodeAsBytes(data.boundaries.base64);
      var expected = data.boundaries.bytes;

      actually(areEqual, expected, actual);
    });
  });

  scope('`codec.encodeString()` Tests',
  function () {
    test('Encodes ASCII string.',
    function () {
      var actual = codec.encodeString(data.ascii.string);
      var expected = data.ascii.base64;

      actually(matches, expected, actual);
    });

    test('Encodes Latin string.',
    function () {
      var actual = codec.encodeString(data.latin.string);
      var expected = data.latin.base64;

      actually(matches, expected, actual);
    });

    test('Encodes 1-, 2-, 3-, and 4-byte characters.',
    function () {
      var actual = codec.encodeString(data.nbyte.string);
      var expected = data.nbyte.base64;

      actually(matches, expected, actual);
    });

    test('Encodes alchemical surrogate pair string.',
    function () {
      var actual = codec.encodeString(data.alchemy.string);
      var expected = data.alchemy.base64;

      actually(matches, expected, actual);
    });

    test('Encodes emoji emoticon surrogate pair string.',
    function () {
      var actual = codec.encodeString(data.emoticons.string);
      var expected = data.emoticons.base64;

      actually(matches, expected, actual);
    });

    test('Encodes supplementary string.',
    function () {
      var actual = codec.encodeString(data.supplementary.string);
      var expected = data.supplementary.base64;

      actually(matches, expected, actual);
    });

    test('Encodes byte boundary characters.',
    function () {
      var actual = codec.encodeString(data.boundaries.string);
      var expected = data.boundaries.base64;

      actually(matches, expected, actual);
    });
  });

  scope('`codec.decodeAsString()` Tests',
  function () {
    test('Decodes as ASCII string.',
    function () {
      var actual = codec.decodeAsString(data.ascii.base64);
      var expected = data.ascii.string;

      actually(matches, expected, actual);
    });

    test('Decodes as Latin string.',
    function () {
      var actual = codec.decodeAsString(data.latin.base64);
      var expected = data.latin.string;

      actually(matches, expected, actual);
    });

    test('Decodes as 1-, 2-, 3-, and 4-byte characters.',
    function () {
      var actual = codec.decodeAsString(data.nbyte.base64);
      var expected = data.nbyte.string;

      actually(matches, expected, actual);
    });

    test('Decodes as alchemical surrogate pair string.',
    function () {
      var actual = codec.decodeAsString(data.alchemy.base64);
      var expected = data.alchemy.string;

      actually(matches, expected, actual);
    });

    test('Decodes as emoji emoticon surrogate pair string.',
    function () {
      var actual = codec.decodeAsString(data.emoticons.base64);
      var expected = data.emoticons.string;

      actually(matches, expected, actual);
    });

    test('Decodes as supplementary string.',
    function () {
      var actual = codec.decodeAsString(data.supplementary.base64);
      var expected = data.supplementary.string;

      actually(matches, expected, actual);
    });

    test('Decodes as byte boundary characters.',
    function () {
      var actual = codec.decodeAsString(data.boundaries.base64);
      var expected = data.boundaries.string;

      actually(matches, expected, actual);
    });
  });

  scope('String Length Codec Tests',
  function () {
    /* jscs:disable requireDotNotation */
    /* jshint -W069 */
    var encoded = {
      '': '',
      'f': 'Zg==',
      'fo': 'Zm8=',
      'foo': 'Zm9v',
      'foob': 'Zm9vYg==',
      'fooba': 'Zm9vYmE=',
      'foobar': 'Zm9vYmFy'
    };

    test('Encodes various string lengths.',
    function () {
      actually(matches, encoded[''], codec.encodeString(''));
      actually(matches, encoded['f'], codec.encodeString('f'));
      actually(matches, encoded['fo'], codec.encodeString('fo'));
      actually(matches, encoded['foo'], codec.encodeString('foo'));
      actually(matches, encoded['foob'], codec.encodeString('foob'));
      actually(matches, encoded['fooba'], codec.encodeString('fooba'));
      actually(matches, encoded['foobar'], codec.encodeString('foobar'));
    });

    var encBytes = {};

    for (var property in encoded) {
      encBytes[utf8.asBytes(property)] = encoded[property];
    }

    test('Encodes various string lengths as bytes.',
    function () {
      var bytes = utf8.asBytes('');
      actually(matches, encBytes[bytes], codec.encodeBytes(bytes));

      bytes = utf8.asBytes('f');
      actually(matches, encBytes[bytes], codec.encodeBytes(bytes));

      bytes = utf8.asBytes('fo');
      actually(matches, encBytes[bytes], codec.encodeBytes(bytes));

      bytes = utf8.asBytes('foo');
      actually(matches, encBytes[bytes], codec.encodeBytes(bytes));

      bytes = utf8.asBytes('foob');
      actually(matches, encBytes[bytes], codec.encodeBytes(bytes));

      bytes = utf8.asBytes('fooba');
      actually(matches, encBytes[bytes], codec.encodeBytes(bytes));

      bytes = utf8.asBytes('foobar');
      actually(matches, encBytes[bytes], codec.encodeBytes(bytes));
    });

    var decoded = {
      '': '',
      'Zg==': 'f',
      'Zm8=': 'fo',
      'Zm9v': 'foo',
      'Zm9vYg==': 'foob',
      'Zm9vYmE=': 'fooba',
      'Zm9vYmFy': 'foobar'
    };

    test('Decodes various string lengths.',
    function () {
      actually(matches, decoded[''], codec.decodeAsString(''));
      actually(matches, decoded['Zg=='], codec.decodeAsString('Zg=='));
      actually(matches, decoded['Zm8='], codec.decodeAsString('Zm8='));
      actually(matches, decoded['Zm9v'], codec.decodeAsString('Zm9v'));
      actually(matches, decoded['Zm9vYg=='], codec.decodeAsString('Zm9vYg=='));
      actually(matches, decoded['Zm9vYmE='], codec.decodeAsString('Zm9vYmE='));
      actually(matches, decoded['Zm9vYmFy'], codec.decodeAsString('Zm9vYmFy'));
    });

    var decBytes = {
      '': utf8.asBytes(''),
      'Zg==': utf8.asBytes('f'),
      'Zm8=': utf8.asBytes('fo'),
      'Zm9v': utf8.asBytes('foo'),
      'Zm9vYg==': utf8.asBytes('foob'),
      'Zm9vYmE=': utf8.asBytes('fooba'),
      'Zm9vYmFy': utf8.asBytes('foobar')
    };

    test('Decodes various string lengths as bytes.',
    function () {
      actually(areEqual, decBytes[''], codec.decodeAsBytes(''));
      actually(areEqual, decBytes['Zg=='], codec.decodeAsBytes('Zg=='));
      actually(areEqual, decBytes['Zm8='], codec.decodeAsBytes('Zm8='));
      actually(areEqual, decBytes['Zm9v'], codec.decodeAsBytes('Zm9v'));
      actually(areEqual, decBytes['Zm9vYg=='], codec.decodeAsBytes('Zm9vYg=='));
      actually(areEqual, decBytes['Zm9vYmE='], codec.decodeAsBytes('Zm9vYmE='));
      actually(areEqual, decBytes['Zm9vYmFy'], codec.decodeAsBytes('Zm9vYmFy'));
    });
    /* jscs:enable requireDotNotation */
    /* jshint +W069 */
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
