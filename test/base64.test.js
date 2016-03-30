(function (context) {
// -----------------------------------------------------------------------------

'use strict';

var id = '';
var dependencies =
  ['../base64', '../test-data', 'actually', 'matches', 'criteria'];

function factory(base64, data, actually, matches) {
  scope('`base64.encode()` Tests',
  function () {
    test('Encodes ASCII string.',
    function () {
      var actual = base64.encode(data.ascii.string);
      var expected = data.ascii.base64;

      actually(matches, expected, actual);
    });

    test('Encodes Latin string.',
    function () {
      var actual = base64.encode(data.latin.string);
      var expected = data.latin.base64;

      actually(matches, expected, actual);
    });

    test('Encodes 1-, 2-, 3-, and 4-byte characters.',
    function () {
      var actual = base64.encode(data.nbyte.string);
      var expected = data.nbyte.base64;

      actually(matches, expected, actual);
    });

    test('Encodes alchemical surrogate pair string.',
    function () {
      var actual = base64.encode(data.alchemy.string);
      var expected = data.alchemy.base64;

      actually(matches, expected, actual);
    });

    test('Encodes emoji emoticon surrogate pair string.',
    function () {
      var actual = base64.encode(data.emoticons.string);
      var expected = data.emoticons.base64;

      actually(matches, expected, actual);
    });

    test('Encodes supplementary string.',
    function () {
      var actual = base64.encode(data.supplementary.string);
      var expected = data.supplementary.base64;

      actually(matches, expected, actual);
    });

    test('Encodes byte boundary characters.',
    function () {
      var actual = base64.encode(data.boundaries.string);
      var expected = data.boundaries.base64;

      actually(matches, expected, actual);
    });
  });

  scope('`base64.decode()` Tests',
  function () {
    test('Decodes as ASCII string.',
    function () {
      var actual = base64.decode(data.ascii.base64);
      var expected = data.ascii.string;

      actually(matches, expected, actual);
    });

    test('Decodes as Latin string.',
    function () {
      var actual = base64.decode(data.latin.base64);
      var expected = data.latin.string;

      actually(matches, expected, actual);
    });

    test('Decodes as 1-, 2-, 3-, and 4-byte characters.',
    function () {
      var actual = base64.decode(data.nbyte.base64);
      var expected = data.nbyte.string;

      actually(matches, expected, actual);
    });

    test('Decodes as alchemical surrogate pair string.',
    function () {
      var actual = base64.decode(data.alchemy.base64);
      var expected = data.alchemy.string;

      actually(matches, expected, actual);
    });

    test('Decodes as emoji emoticon surrogate pair string.',
    function () {
      var actual = base64.decode(data.emoticons.base64);
      var expected = data.emoticons.string;

      actually(matches, expected, actual);
    });

    test('Decodes as supplementary string.',
    function () {
      var actual = base64.decode(data.supplementary.base64);
      var expected = data.supplementary.string;

      actually(matches, expected, actual);
    });

    test('Decodes as byte boundary characters.',
    function () {
      var actual = base64.decode(data.boundaries.base64);
      var expected = data.boundaries.string;

      actually(matches, expected, actual);
    });
  });

  scope('`base64.ni.encode()` Tests',
  function () {
    test('Encodes ASCII string.',
    function () {
      var actual = base64.ni.encode(data.ascii.string);
      var expected = data.ascii.base64ni;

      actually(matches, expected, actual);
    });

    test('Encodes Latin string.',
    function () {
      var actual = base64.ni.encode(data.latin.string);
      var expected = data.latin.base64ni;

      actually(matches, expected, actual);
    });

    test('Encodes 1-, 2-, 3-, and 4-byte characters.',
    function () {
      var actual = base64.ni.encode(data.nbyte.string);
      var expected = data.nbyte.base64ni;

      actually(matches, expected, actual);
    });

    test('Encodes alchemical surrogate pair string.',
    function () {
      var actual = base64.ni.encode(data.alchemy.string);
      var expected = data.alchemy.base64ni;

      actually(matches, expected, actual);
    });

    test('Encodes emoji emoticon surrogate pair string.',
    function () {
      var actual = base64.ni.encode(data.emoticons.string);
      var expected = data.emoticons.base64ni;

      actually(matches, expected, actual);
    });

    test('Encodes supplementary string.',
    function () {
      var actual = base64.ni.encode(data.supplementary.string);
      var expected = data.supplementary.base64ni;

      actually(matches, expected, actual);
    });

    test('Encodes byte boundary characters.',
    function () {
      var actual = base64.ni.encode(data.boundaries.string);
      var expected = data.boundaries.base64ni;

      actually(matches, expected, actual);
    });
  });

  scope('`base64.ni.decode()` Tests',
  function () {
    test('Decodes as ASCII string.',
    function () {
      var actual = base64.ni.decode(data.ascii.base64ni);
      var expected = data.ascii.string;

      actually(matches, expected, actual);
    });

    test('Decodes as Latin string.',
    function () {
      var actual = base64.ni.decode(data.latin.base64ni);
      var expected = data.latin.string;

      actually(matches, expected, actual);
    });

    test('Decodes as 1-, 2-, 3-, and 4-byte characters.',
    function () {
      var actual = base64.ni.decode(data.nbyte.base64ni);
      var expected = data.nbyte.string;

      actually(matches, expected, actual);
    });

    test('Decodes as alchemical surrogate pair string.',
    function () {
      var actual = base64.ni.decode(data.alchemy.base64ni);
      var expected = data.alchemy.string;

      actually(matches, expected, actual);
    });

    test('Decodes as emoji emoticon surrogate pair string.',
    function () {
      var actual = base64.ni.decode(data.emoticons.base64ni);
      var expected = data.emoticons.string;

      actually(matches, expected, actual);
    });

    test('Decodes as supplementary string.',
    function () {
      var actual = base64.ni.decode(data.supplementary.base64ni);
      var expected = data.supplementary.string;

      actually(matches, expected, actual);
    });

    test('Decodes as byte boundary characters.',
    function () {
      var actual = base64.ni.decode(data.boundaries.base64ni);
      var expected = data.boundaries.string;

      actually(matches, expected, actual);
    });
  });

  scope('`base64.url.encode()` Tests',
  function () {
    test('Encodes ASCII string.',
    function () {
      var actual = base64.url.encode(data.ascii.string);
      var expected = data.ascii.base64url;

      actually(matches, expected, actual);
    });

    test('Encodes Latin string.',
    function () {
      var actual = base64.url.encode(data.latin.string);
      var expected = data.latin.base64url;

      actually(matches, expected, actual);
    });

    test('Encodes 1-, 2-, 3-, and 4-byte characters.',
    function () {
      var actual = base64.url.encode(data.nbyte.string);
      var expected = data.nbyte.base64url;

      actually(matches, expected, actual);
    });

    test('Encodes alchemical surrogate pair string.',
    function () {
      var actual = base64.url.encode(data.alchemy.string);
      var expected = data.alchemy.base64url;

      actually(matches, expected, actual);
    });

    test('Encodes emoji emoticon surrogate pair string.',
    function () {
      var actual = base64.url.encode(data.emoticons.string);
      var expected = data.emoticons.base64url;

      actually(matches, expected, actual);
    });

    test('Encodes supplementary string.',
    function () {
      var actual = base64.url.encode(data.supplementary.string);
      var expected = data.supplementary.base64url;

      actually(matches, expected, actual);
    });

    test('Encodes byte boundary characters.',
    function () {
      var actual = base64.url.encode(data.boundaries.string);
      var expected = data.boundaries.base64url;

      actually(matches, expected, actual);
    });
  });

  scope('`base64.url.decode()` Tests',
  function () {
    test('Decodes as ASCII string.',
    function () {
      var actual = base64.url.decode(data.ascii.base64url);
      var expected = data.ascii.string;

      actually(matches, expected, actual);
    });

    test('Decodes as Latin string.',
    function () {
      var actual = base64.url.decode(data.latin.base64url);
      var expected = data.latin.string;

      actually(matches, expected, actual);
    });

    test('Decodes as 1-, 2-, 3-, and 4-byte characters.',
    function () {
      var actual = base64.url.decode(data.nbyte.base64url);
      var expected = data.nbyte.string;

      actually(matches, expected, actual);
    });

    test('Decodes as alchemical surrogate pair string.',
    function () {
      var actual = base64.url.decode(data.alchemy.base64url);
      var expected = data.alchemy.string;

      actually(matches, expected, actual);
    });

    test('Decodes as emoji emoticon surrogate pair string.',
    function () {
      var actual = base64.url.decode(data.emoticons.base64url);
      var expected = data.emoticons.string;

      actually(matches, expected, actual);
    });

    test('Decodes as supplementary string.',
    function () {
      var actual = base64.url.decode(data.supplementary.base64url);
      var expected = data.supplementary.string;

      actually(matches, expected, actual);
    });

    test('Decodes as byte boundary characters.',
    function () {
      var actual = base64.url.decode(data.boundaries.base64url);
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
