module.exports = {
  mode: 'production',
  entry: {
    index: ['@babel/polyfill', './src/index.js', './src/model/YoutubeAPI.js', './src/model/CreateHtml.js']
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [['@babel/preset-env', { modules: false }]]
            }
          }
        ]
      }
    ]
  }
};