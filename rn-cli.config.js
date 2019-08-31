const { getDefaultConfig } = require("metro-config");
const blacklist = require('metro-config/src/defaults/blacklist');

module.exports = (async () => {
  const {
    resolver: { sourceExts }
  } = await getDefaultConfig();
  return {
    transformer: {
      babelTransformerPath: require.resolve("./vueTransformerPlugin.js")
    },
    resolver: {
      sourceExts: [...sourceExts, "vue"],
      blacklistRE: blacklist([
            /node_modules\/.*\/node_modules\/react-native\/.*/,
        ])
    }
  };
})();