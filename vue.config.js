
// Vue.config.js 配置选项
const name = '首页' // page title
const port = 8080 // dev port
const path = require('path')
const Timestamp = new Date().getTime();
const px2rem = require('postcss-px2rem')

function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    //基本路径
    publicPath: './',//默认的'/'是绝对路径，如果不确定在根路径，改成相对路径'./'
    // 输出文件目录
    outputDir: 'mk',
    assetsDir: './static',
    indexPath: 'index.html',
    // eslint-loader 是否在保存的时候检查
    lintOnSave: process.env.NODE_ENV === 'development',
    // 生产环境是否生成 sourceMap 文件
    productionSourceMap: false,
    // css相关配置
    css: {
        loaderOptions: {
            less: {
                // 若 less-loader 版本小于 6.0，请移除 lessOptions 这一级，直接配置选项。
                lessOptions: {
                    globalVars: {
                        '@green': '#fff'
                    }
                }
            },
            // postcss: {
                // plugins: [
                //     px2rem({ remUnit: 37.5 }), // px转换rem
                //     require('autoprefixer')({
                //         overrideBrowserslist: ['last 2 version', '> 1%', 'iOS 7']
                //     })
                // ]
            // }
        }
    },

    // webpack-dev-server 相关配置
    devServer: {
        port: port,
        open: true,
        overlay: {
            warnings: false,
            errors: true
        },
        // proxy: apiConfig
    },
    configureWebpack: { // webpack 配置
        name: name,
        output: { // 输出重构  打包编译后的 文件名称  【模块名称.版本号.时间戳】
            filename: `static/js/[name].${Timestamp}.js`,
            chunkFilename: `static/js/[name].${Timestamp}.js`
        },
        resolve: {
            alias: {
                '@': resolve('src')
            }
        }
    }
};