'use strict';
//https://www.npmjs.com/package/is-webview

var test = require('tape');
var verify = require('../lib/userAgent.js');
var rules = require('./fixtures/userAgents');

test('user-agent control list', function(t){
  var userAgents = Object.keys(rules);

  t.plan(userAgents.length);

  userAgents.forEach(function(ua){
    t.equals(verify(ua), rules[ua], ua);
  });
});

test('no user-agent is provided by the browser', function(t){
  t.plan(1);

  t.false(verify(undefined));
});

test('look for appName in a WebApp', function(t){
  t.plan(2);

  t.false(verify('Mozilla/5.0 (iPad; CPU OS 5_1 like Mac OS X)', 'FooBar/1.3.37'));
  t.false(verify('Mozilla/5.0 (iPad; CPU OS 5_1 like Mac OS X)'));
});

test('look for appName in a WebView', function(t){
  t.plan(2);

  t.true(verify('FooBar/1.3.37 /Windows CE/ Mobile', 'FooBar/1.3.37'));
  t.false(verify('FooBar/1.3.37 /Windows CE/ Mobile'));
});