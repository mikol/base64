(function (context) {
// -----------------------------------------------------------------------------

'use strict';

var id = 'emoticons';
var dependencies = [];

function factory() {
  return {
    /* jscs:disable maximumLineLength */
    base64: '8J+YgPCfmIHwn5iC8J+Yg/CfmITwn5iF8J+YhvCfmIfwn5iI8J+YifCfmIrwn5iL8J+YjPCfmI3wn5iO8J+Yj/CfmJDwn5iR8J+YkvCfmJPwn5iU8J+YlfCfmJbwn5iX8J+YmPCfmJnwn5ia8J+Ym/CfmJzwn5id8J+YnvCfmJ/wn5ig8J+YofCfmKLwn5ij8J+YpPCfmKXwn5im8J+Yp/CfmKjwn5ip8J+YqvCfmKvwn5is8J+YrfCfmK7wn5iv8J+YsPCfmLHwn5iy8J+Ys/CfmLTwn5i18J+YtvCfmLfwn5i48J+YufCfmLrwn5i78J+YvPCfmL3wn5i+8J+Yv/CfmYDwn5mF8J+ZhvCfmYfwn5mI8J+ZifCfmYrwn5mL8J+ZjPCfmY3wn5mO8J+Zjw==',
    bytes: [240, 159, 152, 128, 240, 159, 152, 129, 240, 159, 152, 130, 240, 159, 152, 131, 240, 159, 152, 132, 240, 159, 152, 133, 240, 159, 152, 134, 240, 159, 152, 135, 240, 159, 152, 136, 240, 159, 152, 137, 240, 159, 152, 138, 240, 159, 152, 139, 240, 159, 152, 140, 240, 159, 152, 141, 240, 159, 152, 142, 240, 159, 152, 143, 240, 159, 152, 144, 240, 159, 152, 145, 240, 159, 152, 146, 240, 159, 152, 147, 240, 159, 152, 148, 240, 159, 152, 149, 240, 159, 152, 150, 240, 159, 152, 151, 240, 159, 152, 152, 240, 159, 152, 153, 240, 159, 152, 154, 240, 159, 152, 155, 240, 159, 152, 156, 240, 159, 152, 157, 240, 159, 152, 158, 240, 159, 152, 159, 240, 159, 152, 160, 240, 159, 152, 161, 240, 159, 152, 162, 240, 159, 152, 163, 240, 159, 152, 164, 240, 159, 152, 165, 240, 159, 152, 166, 240, 159, 152, 167, 240, 159, 152, 168, 240, 159, 152, 169, 240, 159, 152, 170, 240, 159, 152, 171, 240, 159, 152, 172, 240, 159, 152, 173, 240, 159, 152, 174, 240, 159, 152, 175, 240, 159, 152, 176, 240, 159, 152, 177, 240, 159, 152, 178, 240, 159, 152, 179, 240, 159, 152, 180, 240, 159, 152, 181, 240, 159, 152, 182, 240, 159, 152, 183, 240, 159, 152, 184, 240, 159, 152, 185, 240, 159, 152, 186, 240, 159, 152, 187, 240, 159, 152, 188, 240, 159, 152, 189, 240, 159, 152, 190, 240, 159, 152, 191, 240, 159, 153, 128, 240, 159, 153, 133, 240, 159, 153, 134, 240, 159, 153, 135, 240, 159, 153, 136, 240, 159, 153, 137, 240, 159, 153, 138, 240, 159, 153, 139, 240, 159, 153, 140, 240, 159, 153, 141, 240, 159, 153, 142, 240, 159, 153, 143],
    string: '😀😁😂😃😄😅😆😇😈😉😊😋😌😍😎😏😐😑😒😓😔😕😖😗😘😙😚😛😜😝😞😟😠😡😢😣😤😥😦😧😨😩😪😫😬😭😮😯😰😱😲😳😴😵😶😷😸😹😺😻😼😽😾😿🙀🙅🙆🙇🙈🙉🙊🙋🙌🙍🙎🙏'
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
