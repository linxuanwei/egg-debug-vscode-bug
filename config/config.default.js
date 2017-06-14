'use strict';

module.exports = appInfo => {
  const config = {};

  // should change to your own
  config.keys = appInfo.name + '_1497428838631_7791';

  // add your config here
  config.proxyworker = {
    port: 10086,
  };

  return config;
};
