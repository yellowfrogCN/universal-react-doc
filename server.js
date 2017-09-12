// server.js
require('babel-register')({
    presets: ['react']
});
const express = require('express');
const Server = express();

const Client = require('./Client.js');
const React = require('react');
const ReactDOMServer = require('react-dom/server');


Server.get('/', function (request, response) {
    const html = ReactDOMServer.renderToString(
        React.createElement(Client)
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

