const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src", "index.js"),
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle[fullhash].js",
    publicPath: "/",
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),

    new CleanWebpackPlugin(),
  ],

  module: {
    rules: [
      // Loaders
      {
        test: /\.js$/,
        exclude: "/node_modules/",
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              ["@babel/preset-react", { runtime: "automatic" }]],
          },
        },
      },

      // { test: /\.css$/i,
      //   use: [
      //     'style-loader',
      //   {
      //     loader: 'css-loader',
      //     options: {
      //       esModule: false,
      //       modules: {},
      //     },
      //   }
      //   ]
      // },

      // Não há necessidade de termos os dois tipos de arquivos na nossa aplicação, aqui está sendo feito somente para conhecimento.
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          { loader: "css-loader", options: { esModule: false, modules: {} } },
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],

  },

  devServer: {
    port: 3000,
    historyApiFallback: true,
  },
};
