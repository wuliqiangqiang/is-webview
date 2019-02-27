//https://www.npmjs.com/package/is-webview
'use strict';

var rules = [
  // custom app name
  function (userAgent, appName){
    return appName && userAgent.indexOf(appName) !== -1
  },

  // iOS UIWebView
  function (userAgent){
    return userAgent.indexOf(' Mobile/') > 0 && userAgent.indexOf(' Safari/') === -1;
  }
];

module.exports = function userAgentCheck(userAgent, appName){
  userAgent = userAgent || '';

  return rules.some(function applyRule(rule){
    return rule(userAgent, appName);
  });
};