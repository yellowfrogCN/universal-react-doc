// Root.js
// const React = require('react');
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Root extends React.Component {
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
        alert('yf超帅的！');
    }
    render() {
        const { custom } = this.props;
        return (<html>
                <head>
                    <title>Universal React</title>
                </head>
                <body>
                    <div>
                        <h1>Hello World！!</h1>
                        <button onClick={this._handleClick}>Click Me</button>
                    </div>
                    <ul>
                        <li>
                            <Link to='/'>Index</Link>
                        </li>
                        <li>
                            <Link to='/about'>About</Link>
                        </li>
                    </ul>
                    {this.props.children}
                    {/* 
                    因为会渲染成react的格式，所以<script></script>可以写成<script />,
                    注意路径 
                    */}
                    <script dangerouslySetInnerHTML={{
                        __html: 'window.PROPS=' + JSON.stringify(custom)
                    }} />
                    <script src='/bundle.js' />
                </body>
            </html>);
    }
}

// module.exports = Root;
export default connect(state => {
    return {
        custom: state
    }
})(Root);