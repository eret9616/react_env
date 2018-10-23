## react_env

---

从webpack到react再到babel

从webpack开始:
1. npm init -y
2. 在根目录创建src目录和dist目录
3. npm install webpack -g
4. webpack 4.x提供了一些默认约定:目的是尽量减少配置文件体积
   默认约定了:
    + 打包入口是 src -> index.js
    + 打包的输出文件是 dist -> main.js    
[webpack.js.org](https://webpack.js.org/)
5. 运行webpack命令