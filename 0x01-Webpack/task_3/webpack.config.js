const path = require('path');

 module.exports = {
    mode: 'development',
    entry: {
        header: './modules/header/header.js',
        body: './modules/body/body.js',
        footer: './modules/footer/footer.js',
      },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'public'),
      },
      devServer: {
        contentBase: path.join(__dirname, './public'),
        compress: true,
        port: 8564,
      },
      module: {
        rules: [
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
          {
            test: /\.(png|jpe?g|gif|svg)$/i,
            use: [
                'file-loader',
                {
                  loader: 'image-webpack-loader',
                  options: {
                    bypassOnDebug: true, // webpack@1.x
                    disable: true, // webpack@2.x and newer
                  }
                }]
              },
            ],
          },
      }; 
       
