"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}var Api=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"check",value:function(e){var t=e.userAgent,n=e.configObject,r=void 0===n?{}:n;if(!t)return!1;"object"===_typeof(t)&&(r=t,t="");var o=this.constructor._userAgentCheck.call(this,{userAgent:t,appName:r.appName});return!(!r.appName||!o)||this.constructor._userAgentCheck.call(this,{userAgent:t})}}],[{key:"_userAgentCheck",value:function(e){var t=e.userAgent,n=e.appName;return t=t||"",[function(e,t){return t&&-1!==e.indexOf(t)},function(e){return 0<e.indexOf(" Mobile/")&&-1===e.indexOf(" Safari/")}].some(function(e){return e(t,n)})}}]),e}();module.exports=Api;