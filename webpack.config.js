const path = require('path');



module.exports = {
  mode:'development',
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            esModule: false,
            name: "[name].[hash].[ext]",
            outputPath: "imgs"
          }
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: {
          loader: "file-loader",
          options: {
            esModule: false,
            name: "[name].[hash].[ext]",
            outputPath: "fonts"
          }
        }  
      },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },  
          
    ]
  }
};
