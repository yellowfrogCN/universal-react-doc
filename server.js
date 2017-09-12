// server.js
require('babel-register')({
    presets: ['react']
});
const express = require('express');
const Server = express();

const Root = require('./Root.js');
const React = require('react');
const ReactDOMServer = require('react-dom/server');

// 托管静态文件
Server.use(express.static('public'));

Server.get('/', function (request, response) {
    const html = ReactDOMServer.renderToString(
        React.createElement(Root)
    );
    response.send(html);
});

// 服务器端口
const port = 3001;

Server.listen(port, (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.info(`Server running on http://localhost:${port}/`);
});

