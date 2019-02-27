'use strict';
//https://www.npmjs.com/package/is-webview
var rules = [
  // webView object exists
  function (w){ return 'webView' in w; },

  // Android object exists
  function (w){ return 'Android' in w; },

  // deviceready event
  function (w){ return w.document && 'ondeviceready' in w.document; },

  // explicitely states it is standalone
  function (w){ return w.navigator && 'standalone' in w.navigator; },

  // can notifiy a parent app
  function (w){ return w.external && 'notify' in w.external; },

  // Ti object exists
  function (w){ return 'Ti' in w; },

  // _cordovaNative object exists
  function (w){ return '_cordovaNative' in w; }

  // served as file (but false positive if a Web page is loaded from the filesystem)
  // function (w){ return w.location.href.indexOf('file:') === 0; }
];

module.exports = function domCheck(window){
  return rules.some(function applyRule(rule){
    return rule(window);
  });
};
