const path = require('path')    //引入path模块

    //这个配置文件，其实就是一个JS文件，通过node中的模块操作，向外暴露了一个 配置对象

const htmlwebpackplugin = require('html-webpack-plugin')
const vueloaderplugin   = require('vue-loader/lib/plugin')
    //只要是插件，都一定要放在plugins节点中去


    
  

module.exports = {
    //在这个配置文件中，需要手动指定 入口   和  出口

    entry:path.join(__dirname,'./src/main.js'),     //入口，使用web pack打包那个文件
    output:{
        //  输出文件相关配置
        path:path.join(__dirname,'/dist'),
        filename:'main.js',    //这是指定  输出文件的名称
        // publicPath:'./dist/main.js'
    },
    plugins:[
        new htmlwebpackplugin({
            template:path.join(__dirname,'./src/index.html'),       //  指定模板页面，将来就根据指定路径的页面路径，去生成内存中的页面
            filename:'index.html'                                   //指定在内存中生成的页面的名称
        }),
        new vueloaderplugin()
    ],
    module:{    //这个节点，用于配置所有第三方模板 加载器
        rules:[ //所有第三方模板的 匹配规则
            {   test:/\.css$/,
                use:['style-loader','css-loader'] 
            },       //配置处理.css文件的第三方loader规则
            {
                test:/\.vue$/,
                use:['vue-loader']
            },
            // {
            //     test:/\.(wofff2?|eot|ttf|otf)(\?.*)?$/,
            //     use:['url-loader']
            // },
            // {
            //     test:/\.(wofff2|eot|ttf|otf)\??.*$/,
            //     loader:'url-loader/name=fonts/[name].[md5:hash:hex:7].[ext]',
            // },
            // {
            //     test:/\.ttf(\?v=\d+\.\d+\.\d+)?$/,
            //     use:['url-loader']
            // },
            // {
            //     test:/\.(jpg|png|gif|bmp|jpeg|svg)$/,
            //     use:['url-loader']
            // },
            {
                test:/\.(jpg|png|gif|bmp|jpeg|svg)$/,
                use:['file-loader']
            },                  //加载图片使用file-loader
            {
                test:/\.(wofff2?|eot|ttf|otf)(\?.*)?$/,
                loader:'url-loader',
               
            },
            {
                test:/\.scss$/,
                use:['style-loader','css-loader','sass-loader']
            },
            {
                test:/\.json$/,
                use:['json-loader']
            }


        ]
    },
    devServer:{
        contentBase: path.join(__dirname,'/'),
        port:3000
    }
}


//当我们在控制台直接输入webpack命令执行的时候，webpack做了以下几步
//  1、首先，webpack发现，我们没有通过命令的形式，给它指定入口和出开口
//  2、webpack就会去 项目的根目录中，查找一个叫做'webpack.config.js'的配置文件
//  3、当找到配置文件的时候，webpack 会去解析这个配置文件，当解析执行完这个配置文件后，就得到了配置文件中的导出的配置对象
//  4、当webpack 拿到配置对象后，就拿到了配置对象中，指定的入口和出口，然后进行打包构建；


//使用webpack-dev-server 这个工具，来实现自动打包编译的功能

//  1、运行npm install webpack-dev-server -D 把这个工具安装到项目的本地开发依赖
//  2、安装完毕后，这个 工具的用法；和  webpack 命令的用法，完全一致
//  3、由于，我们是在项目中，本地安装的webpack-dev-server   ，所以，无法把它当作脚本命令，在poweshell 终端中直接运行；（只有那些 安装到 全局 -g的工具,才能在终端中正常执行）
//  4、注意：webpack-dev-server这个工具，如果想要正常运行，要求，在本地项目中，必须安装webpack
//  5、webpack-dev-server 帮我们打包生成bundle.js文件，并没有存放到实际的物理磁盘上；而是，直接托管到了，电脑的内存中，所以，我们在项目的根路径目录中，根本找不到 这个打包好的bundle.js
//  6、我们可以以为，   webpack-dev-server 把打包好的文件，以一种虚拟的形式，托管到了项目的根目录中，虽然我们看不到，但是，可以以为，和dist、src、node_modules 平级，有一个看不见的文件叫做bundle.js