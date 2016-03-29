# base64

Cross-platform base64 methods (`base64.encode()` and `base64.decode()`) for encoding and decoding Unicode (16-bit) strings (see [The “Unicode Problem”](https://goo.gl/oIGmAS)).

A URL- and filename-safe alphabet may be used either by itself
(`base64.url.encode()` and `base64.url.decode()`) or while also excluding `'='`
padding characters (`base64.ni.encode()` and `base64.ni.decode()`) to make
strings safe for use in `application/x-www-form-urlencoded` values, including
URL query strings, without requiring additional URI component encoding (see
Named Information URI Format digest values in [RFC
6920](https://goo.gl/z9KSEK)).
