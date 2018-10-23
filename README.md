## react_env

---

从webpack到babel再到react

从webpack开始:
1. npm init -y
2. 在根目录创建src目录和dist目录
3. npm install webpack -g
4. webpack 4.x提供了一些默认约定:目的是尽量减少配置文件体积
   默认约定了:
    + 打包入口是 src -> index.js
    + 打包的输出文件是 dist -> main.js    
[webpack.js.org](https://webpack.js.org/)
5. 运行webpack命令<br/><br/>

**webpack-dev-server的使用**  
1. npm install webpack-dev-server -D  
   npm install wepack-cli -D
   npm install webpack -D
   添加webpack.config.js文件
   添加.gitignore文件
```
 "scripts":{
     "dev":"webpack-dev-server --open chrome --hot"
 }
```
npm run dev  
通过localhost:8080/main.js可以看到这个打包后的文件,但是webpack-dev-server打包好的文件是托管在内存中  
*服务器会在内存中托管打包生成s，没有在物理磁盘中生成。  
*不会在项目的根目录下(磁盘中)看到这个文件。 <br/><br/> 

**html-webpack-plugin插件的使用**
1.  npm install html-webpack-plugin --save-dev
    这个插件可以在内存中托管html页面
2.  查看npmjs文档,使用文件的template属性来初始化
     然后再npm run dev <br/><br/>


