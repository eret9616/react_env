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

**React使用**
1.  运行npm install react react-dom --save  
    react:用于创建组件和虚拟DOM 同时组件的生命周期都在这个包中  
    react-dom 专门进行DOM操作 最主要的应用场景是ReactDOM.render()  
2.  import React from 'react'  
    import ReactDOM from 'react-dom'  
    const myh1 = React.createElement('h1',{id:..,title:..},'这是一个大大的子节点')  
    const mydiv = React.createElement('div',null,'这是一个div',myh1)  
3.  ReactDOM.render(mydiv,document.getElementById('app'))  
4.  如果每次都用React.createElement(<T>,props,childNodes)  
              ReactDOM.render(react_obj,element)这种写法太复杂了  
    于是React出了JSX语法，能像XML一样去书写元素。jsx通过使用babel转换，生成react对象  <br/><br/>

**JSX语法** ([balbeljs](https://babeljs.io/setup#installation))
1.  npm install --save-dev babel-loader @babel/core
2.  npm install --save-dev @babel/preset-react
3.  配置webpack.config.js中的loaders
4.  配置.babelrc文件
5.  在JSX中书写JS代码  
    结论:变量要用{ }包裹起来
