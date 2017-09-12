# react服务端渲染的实现思路
## 利用 NodeJs + Express 搭建入门级的react服务端渲染
`Express 是为了更方便的搭建HTTP服务器`
* 依赖需求
- [nodeJs 8+](http://nodejs.cn/)
- [expressJs 4+](http://www.expressjs.com.cn/) `最好全局安装下`
- react 15+
- react-dom 15+

### 建一个server.js目录，利用 Express 起一个HTTP
```js
const express = require('express');
const server = express();

server.get('/', (request, response) => {
    const html = `<h1>universal - react<h1>`;
    response.send(html);
});

// 服务器端口
const port = 3001;

server.listen(port, (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.info(`Server running on http://localhost:${port}/`);
});
``` 
```
启动这个服务
node server.js
控制台可以看到
$ node server.js
Server running on http://localhost:3001/
打开网页就看到 universal - react
```
>如果报express没有发现，全局安装express即可.<br>
>如果报es6的语法错误，则建议升级到nodeJs 8版本，或者把 server.js 里面的es6语法换成es5语法(不推荐)

