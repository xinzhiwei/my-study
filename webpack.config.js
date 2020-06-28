// 这个配置文件 起始就是一个js文件，通过Node中的模块操作，向外暴露了一个配置对象
const path = require("path");  // 路径操作node中要使用path模块
// 启用热更新的第二部
// const webpack = require("webpack");
// node的语法
module.exports = {
   // 手动指定入口和出口文件
   entry: path.join(__dirname,"./src/main.js"), // 入口，表示要使用webpack打包那个文件
   output:{  // 输出文件的相关配置
      path: path.join(__dirname, "./dist"),  // 指定 打包好的文件，输出到那个目录中去
      filename: "bundle.js"  // 指定输出文件名称
   }
   /*devServer: { // 这是配置dev-server命令参数的第二种形式，相对于在package.js中配置来说麻烦一些
      open: true,  // 自动打开浏览器
      port: 3000,  // 设置启动时候的运行端口
      contentBase: "src",  // 指定托管的根目录
      hot: true     // 启用热更新的第一步
   },
   plugins: [
      new webpack.HotModuleReplacementPlugin() // new一个热更新的模块对象， 这是启用热更新的第三步
   ]*/
}