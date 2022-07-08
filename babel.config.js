module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "babel-plugin-module-resolver",
        {
          root: ["./"],
          extensions: [".ios.js", ".android.js", ".js", ".ts", ".tsx", ".json"],
          alias: {
            "@components": "./src/components/",
            "@assets": "./src/assets/",
            "@constants": "./src/constants/",
            "@utils": "./src/utils/",
            "@screens": "./src/screens/",
          },
        },
      ],
    ],
  };
};
