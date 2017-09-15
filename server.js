// server.js
require('babel-register')({
    presets: ['react', 'es2015', 'stage-0']
});

const express = require('express');
const Server = express();
// 托管静态文件
Server.use(express.static('public'));

// 使用路由
Server.use(require('./routes'));

// 服务器端口
const port = 3001;

Server.listen(port, (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.info(`Server running on http://localhost:${port}/`);
});

