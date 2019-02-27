"use strict";

const test = require("tape");
const isWebview = require("../index.js");
const iswebview = new isWebview();

test("no argument (really?)", function(t) {
  t.plan(1);

  t.false(iswebview.check({}));
});

test("string defined user agent", function(t) {
  t.plan(2);

  t.false(
    iswebview.check({
      userAgent:
        "Mozilla/5.0 (iPad; CPU OS 5_1 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9B176 Safari/7534.48.3"
    })
  );
  t.true(
    iswebview.check({
      userAgent:
        "Mozilla/5.0 (iPad; CPU OS 5_1 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Mobile/9B176"
    })
  );
});

test("single/dual argument", function(t) {
  t.plan(5);

  t.false(iswebview.check({ userAgent: null }));
  t.false(iswebview.check({ userAgent: null, configObject: null }));
  t.false(
    iswebview.check({
      userAgent: null,
      configObject: {
        appName: "FooBar"
      }
    })
  );
  t.false(
    iswebview.check({ userAgent: "", configObject: { appName: "FooBar" } })
  );
  t.false(iswebview.check({ userAgent: "", configObject: {} }));
});

test("appName argument", function(t) {
  t.plan(3);

  t.false(
    iswebview.check({
      userAgent: "Mozilla/5.0 (iPad; CPU OS 5_1 like Mac OS X)",
      configObject: {
        appName: "FooBar"
      }
    })
  );
  t.true(
    iswebview.check({
      userAgent: "FooBar/1.3.37 /Windows CE/ Mobile",
      configObject: { appName: "FooBar" }
    })
  );
  t.false(iswebview.check({ userAgent: "FooBar/1.3.37 /Windows CE/ Mobile" }));
});
