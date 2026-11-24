module.exports = (api) => {
  const config = require("@wordpress/babel-preset-default")(api);

  config.plugins = config.plugins.map((plugin) => {
    if (
      Array.isArray(plugin) &&
      String(plugin[0]).includes("plugin-transform-react-jsx")
    ) {
      return [
        plugin[0],
        {
          runtime: "classic",
          pragma: "wp.element.createElement",
          pragmaFrag: "wp.element.Fragment",
        },
      ];
    }

    return plugin;
  });

  return config;
};
