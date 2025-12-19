const { override, addBabelPlugins, addWebpackModuleRule } = require('customize-cra');
const path = require('path');

module.exports = override(
  ...addBabelPlugins(
    '@babel/plugin-proposal-nullish-coalescing-operator',
    '@babel/plugin-proposal-optional-chaining'
  ),
  addWebpackModuleRule({
    test: /\.(js|mjs|jsx|ts|tsx)$/,
    include: [
      path.resolve(__dirname, 'src'),
      path.resolve(__dirname, 'node_modules/@tsparticles')
    ],
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env', '@babel/preset-react'],
        plugins: [
          '@babel/plugin-proposal-nullish-coalescing-operator',
          '@babel/plugin-proposal-optional-chaining'
        ],
      },
    },
  })
);
