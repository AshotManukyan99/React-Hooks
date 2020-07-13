const path = require('path')

module.exports = {
    module: {
        rules: [
            {
                //<!-- SVG React component -->
                test: /\.svg$/,
                use: [ {
                    loader: '@svgr/webpack',
                    options: {
                        native: true,
                    },
                },],
            },
            {
                test: /\.svg$/,
                exclude: /node_modules/,
                use: {
                    loader: 'svg-react-loader',
                    options: {
                        tag: 'symbol',
                        attrs: {
                            title: 'example',
                        },
                        name: 'MyIcon',
                    },
                },
            }
        ]
    }

}