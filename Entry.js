// Entry.js
// const React = require('react');
import React from 'react';
// const ReactDOM = require('react-dom');
import ReactDOM from 'react-dom';
// const Root = require('./Root.js');
import Root from './Root';

ReactDOM.render(
    React.createElement(Root),
    // document 可以理解为浏览器
    document
);