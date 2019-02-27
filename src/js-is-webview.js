"use strict";

class Api {
  constructor() {}

  check({ userAgent, configObject = {} }) {
    if (!userAgent) return false;

    if (typeof userAgent === "object") {
      configObject = userAgent;
      userAgent = "";
    }

    let user_agent_check = this.constructor._userAgentCheck.call(this, {
      userAgent,
      appName: configObject.appName
    });

    //know app name
    if (configObject.appName && user_agent_check) return true;

    return this.constructor._userAgentCheck.call(this, { userAgent });
  }

  static _userAgentCheck({ userAgent, appName }) {
    let rules = [
      // user app name
      function(userAgent, appName) {
        return appName && userAgent.indexOf(appName) !== -1;
      },

      // iOS WebView
      function(userAgent) {
        return (
          userAgent.indexOf(" Mobile/") > 0 &&
          userAgent.indexOf(" Safari/") === -1
        );
      }
    ];

    userAgent = userAgent || "";

    return rules.some(rule => {
      return rule(userAgent, appName);
    });
  }
}

module.exports = Api;
