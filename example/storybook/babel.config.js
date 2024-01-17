const path = require('path');
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@occ-ui/components': path.join(
              __dirname,
              '../../packages/themed/src'
            ),
            '@occ-ui/config': path.join(
              __dirname,
              '../../packages/config/src/gluestack-ui.config'
            ),
          },
        },
      ],
      '@babel/plugin-transform-modules-commonjs',
    ],
  };
};
