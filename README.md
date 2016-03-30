# base64

Cross-platform base64 methods for encoding and decoding data. This module solves three problems.

  1. It works in Node.js and in any browser with or without `btoa()`, `atob()`,
     Buffers, or TypedArrays.
  2. It handles 16-bit-encoded strings, even those that contain characters
     exceeding the 8-bit ASCII-encoding range (see
     [The “Unicode Problem”](https://goo.gl/oIGmAS)).
  3. It provides methods for encoding and decoding with a URL- and filename-safe
     alphabet with or without `'='` padding characters so that encoded strings
     can be safely used with `application/x-www-form-urlencoded` data, including
     as part of URL query strings (see Named Information (ni) URI Format Digest
     Values in [RFC 6920](https://goo.gl/z9KSEK)).

## Installation

```
$ npm install https://github.com/mikol/base64
```

## Usage

```javascript
var json = '{"alchemy": "🜘🜛🜜🜝🜞🜟🜠🜡🜣🜤🜥🜨🜩🜪🜫🜬🜭🜮🜯🜱"}';

// Use canonical encoding.
var b64 = base64.encode(json);

// eyJhbGNoZW15IjogIvCfnJjwn5yb8J+co/CfnKTwn5yl8J+cqPCfnKnwn5yq8J+cr/CfnLEifQ==

// Use URL- and filename-safe alphabet.
var b64url = base64.url.encode(json);

// eyJhbGNoZW15IjogIvCfnJjwn5yb8J-co_CfnKTwn5yl8J-cqPCfnKnwn5yq8J-cr_CfnLEifQ==

// Use URL- and filename-safe alphabet. Omit '=' padding characters.
var b64ni = base64.ni.encode(json);

// eyJhbGNoZW15IjogIvCfnJjwn5yb8J-co_CfnKTwn5yl8J-cqPCfnKnwn5yq8J-cr_CfnLEifQ

// Decode.
base64.decode(b64);
base64.url.decode(b64url);
base64.ni.decode(b64ni);
```
