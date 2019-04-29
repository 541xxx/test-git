// vue.config.js
const fs = require('fs');

module.exports = {
  //css: {
    loaderOptions: {
      sass: {
        data: fs.readFileSync('src/variables.scss', 'utf-8'),
    //  },
    },
  },
 // loaders: [{
    test: /\.styl$/,
    loader: 'css-loader!stylus-loader?paths=node_modules/bootstrap-stylus/stylus/',
  }],
};
