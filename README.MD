## js-is-webview

> use javascrupt to know it is webview ?
> support node and the browser（webpack)

## install

```
npm install js-is-webview --save
```

## usage in node

pass User-Agent sniffing,know the HTTP/HTTPS request is performed by a UIWebview/Webview or not.

```js
const isWebview = require("js-is-webview");
const is_webview = new isWebview();

const server = (req, res, next) => {
    - let userAgent = {
        - userAgent:req.headers['User-Agent']
    }
    // if true
    if(isWebview.check(userAgent))){
        //...
        next();
    }
};
```

## usage in the browser

pass the browser features and properties,know it is webview or

```js
const isWebview = require("js-is-webview");
const is_webview = new isWebview();

let userAgent = {
    userAgent:navigator.userAgent
}

if(isWebview.check(userAgent))){
    //...
}
```

## API

## `iswebview.check({userAgent})`

- `userAgent` (Object.key): Browser User-Agent header string

```js
if(isWebview.check({userAgent}))){
    //...
}
```

## `iswebview.check({userAgent, configObject})`

- `userAgent` (Object.key): Browser User-Agent header string
- `configObject` (Object)
  - `appName` (String): the app name explicitly set in your WebView properties/settings.
