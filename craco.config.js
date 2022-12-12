/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require("fs");
const path = require("path");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const evalSourceMap = require("react-dev-utils/evalSourceMapMiddleware");
const redirectServedPath = require("react-dev-utils/redirectServedPathMiddleware");
const noopServiceWorker = require("react-dev-utils/noopServiceWorkerMiddleware");
const CracoLessPlugin = require("craco-less");
require("react-scripts/config/env");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "#378DF4",
              "@secondary-color": "#45405F",
              "@warning-color": "#C53741",
              "@light-color": "#F9FAFB",
              "@menu-bg": "#F9FAFB",
              "@btn-danger-bg": "#C53741",
              "@btn-default-bg": "#D2D2D2",
              "@btn-default-color": "#FFFFFF"
            },
            javascriptEnabled: true
          }
        }
      }
    }
  ],
  webpack: {
    alias: {
      "~": path.resolve(__dirname, "src/")
    },
    plugins: {
      add: [
        new NodePolyfillPlugin({
          excludeAliases: ["console"]
        })
      ]
    }
  },
  devServer: (devServerConfig, { paths }) => {
    devServerConfig = {
      historyApiFallback: true,
      hot: true,
      onBeforeSetupMiddleware: undefined,
      onAfterSetupMiddleware: undefined,
      setupMiddlewares: (middlewares, devServer) => {
        if (!devServer) {
          throw new Error("webpack-dev-server is not defined");
        }
        if (fs.existsSync(paths.proxySetup)) {
          require(paths.proxySetup)(devServer.app);
        }
        middlewares.push(
          evalSourceMap(devServer),
          redirectServedPath(paths.publicUrlOrPath),
          noopServiceWorker(paths.publicUrlOrPath)
        );
        return middlewares;
      }
    };
    return devServerConfig;
  }
};
