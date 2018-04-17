const config = {
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
    },
    resolve:{
        extensions:[".js",".json",".jsx",".css",'.vue']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            },
            { 
                test: /\.vue$/,
                use: 'vue-loader' 
            },
            { 
                test: /\.css$/, 
                use: ['style-loader', 'css-loader'] 
            },
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2|svgz)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: 'assets/images/[name].[ext]?[hash]'
                    }
                }
            },
        ]

    }
}

module.exports = config;