## 1.nrm ：通过了一些常用的npm包镜像地址
  + `安装nrm npm install nrm -g `
  + ` 查看nrm的镜像地址 nrm ls`
  + ` 带星号的代表当前使用的，切换 nrm use ++`
   ## 切换后 再使用npm install 下载的话，直接就会从你设置的地址下载
   ## nrm只是单纯的提供了几个常用的 下载包URL地址，并能够让在这几个地址之间进行切换，但是我们每次装包的时候，使用的装包感觉都是npm

## 2.webpack学习
   + `webpack: 是前端的一个项目构建工具，它是基于Node.js开发出来的一个前端工具  webpack是基于整个项目镜像构建的，（Gulp是基于task任务的，使用与小一点的项目）`
   + `安装webpack 1.全局安装  npm i webpack -g  2.在项目跟目录中运行 npm i webpack --save-dev`
   - `src 源文件目录  dist：发布完成后的产品级内容  main.js文件是项目js的入口文件`

   ## webpack可以做那些事情？  
     ## 1. webpack 能够处理js文件互相依赖关系
     ## 2. webpack 能够处理js兼容问题，把高级的浏览器不识别语法转为低级的浏览器识别的语法

     ## 运行命令格式 webpack [要打包的文件路径] [打包好的输出文件路径]

     ## 当我们在控制台之间输入webpack目录执行的时候，webpack做了一下几步
       ## 1. webpack 发现，我们并没有通过命令的形式给它指定入口和出口
       ## 2. webpack 就会去项目的根目录中查找webpack.config.js 的配置文件
       ## 3. 当找到配置文件后，webpack 会去解析执行这个配置文件，当解析执行完配置文件后，就得到了配置文件中导出的配置对象
       ## 4. 当webpack 拿到 配置对象后，就拿到了配置对象中指的入口和出口，然后进行打包构建

   ## 使用 webpack-dev-server 工具 来实现自动打包编译的功能    
      - `1. 运行 npm i webpack-dev-server -D 把这个工具安装到项目的本地开发依赖上`
      - `2.  安装完毕后，这个工具的用法，和webpack 命令的用法完全一样`
      - `3. 由于我们是在项目中（即本地）上安装的webpack-dev-server，所以无法把它当做脚本命令在powershell 终端中直接运行；（只有那些安装到全局 -g的工具才可以在终端执行）`
      - `4. 注意： webpack-dev-server 这个工具，如果想正常运行，要求： 在本地项目中必须安装webpack npm i webpack -D`
      - `5. webpack-dev-server 帮我们打包生成的bundle.js 文件并没有存放到实际的物理磁盘上面，而是直接托管到了电脑的内存中，所以我们在项目的根目录中，根本找不到这个打包好的bundle.js文件`
      - `6. 我们可以认为 webpack-dev-server 把打包好的文件以一种虚拟的形式托管到了我们项目的根目录中，虽然看不懂，但是可以认为和dist src node_module平级，有一个看不进的文件叫做 bundle.js`

  ## 如何设置执行npm run dev命令
    - `1.在package.json文件中的"scripts"：{} 内新加"dev": "webpack-dev-server" 即可 webpack-dev-server后还可以设置自动打开浏览器"dev": "webpack-dev-server --open"，和默认端口号"dev": "webpack-dev-server --port 3000" 设置默认的打开页面（根路径）"dev": "webpack-dev-server --contentBase src"` 
    - `2."dev": "webpack-dev-server --open --port 3000 --contentBase src" 表示执行npm命令后，会自动打开浏览器，默认端口为3000，默认打开根路径为src` 
    - `3. 热更新(热重载)加--hot "dev": "webpack-dev-server --open --port 3000 --contentBase src --hot" 作用1.不重载，页面不刷新即可更新页面内容 2.打包后更改内容不会重新打包而是生成补丁`  