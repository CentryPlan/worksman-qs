let path = require('path');


module.exports = {
    
    devServer: {
        
        compress: true,
        host: '0.0.0.0', // can be overwritten by process.env.HOST
        hotOnly: true,
        index: 'index.html',
        liveReload: false, // disable hotOnly if enabled
        //open: 'Google Chrome',
        overlay: { warnings: true, errors: true },
        port: 3701, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
        //publicPath: '/assets',
        watchOptions: { poll: false }, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-      
       
      },
    
    outputDir:  path.resolve(__dirname, '../client/templates'),
    assetsDir: 'static',
    indexPath: path.resolve(__dirname, '../client/templates/index.html'),
    publicPath: '/',
    productionSourceMap: true
    
}
