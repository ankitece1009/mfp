const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');
const devConfig = {
    mode:'development',
    devServer:{
        port:8085,
        historyApiFallback:{
            index:'index.html',
        },        
    },
    plugins:[
        new ModuleFederationPlugin({
            name:'container',
            remotes:{
                marketing: 'marketing@http://localhost:8083/remoteEntry.js'
            },
            shared:packageJson.dependencies                   
        }),       
    ]
};

module.exports = merge(commonConfig,devConfig);