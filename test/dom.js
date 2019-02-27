'use strict';
//https://www.npmjs.com/package/is-webview
var test = require('tape');
var verify = require('../lib/dom.js');
var window = require('global/window');

test('regular window object', function(t){
  t.plan(1);

  t.false(verify(window));
});

test('deviceready event', function(t){
  t.plan(1);

  var window = { document: { ondeviceready: function(){} }};

  t.true(verify(window));
});

test('standalone', function(t){
  t.plan(1);

  var window = { navigator: { standalone: false }};

  t.true(verify(window));
});

test('external notifier', function(t){
  t.plan(1);

  var window = { external: { notify: function(){} }};

  t.true(verify(window));
});

test('exposed webView object', function(t){
  t.plan(1);

  var window = { webView: {}};

  t.true(verify(window));
});

test('Titanium app', function(t){
  t.plan(1);

  var window = { Ti: {}};

  t.true(verify(window));
});

test('Android > 3.2', function(t){
  t.plan(1);

  var window = { Android: {}};

  t.true(verify(window));
});

test('Cordova app', function(t){
  t.plan(1);

  var window = { _cordovaNative: {}};

  t.true(verify(window));
});