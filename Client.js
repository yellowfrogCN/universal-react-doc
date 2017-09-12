// client.js
const React = require('react');
// import React, { Component } from 'react';

class Client extends React.Component {
    constructor (props) {
        super(props);
        this._handleClick = this._handleClick.bind(this);
    }
    componentWillMount () {
        console.log('Client 生命周期 willMount 触发了！');
    }
    componentDidMount () {
        console.log('Client 生命周期 didMount 触发了！');
    }
    _handleClick () {
        alert('黄庆华超帅的！');
    }
    render() {
        return (<div>
                <h1>Hello World!</h1>
                <button onClick={this._handleClick}>Click Me</button>
            </div>);
    }
}

module.exports = Client;
// export default Client;