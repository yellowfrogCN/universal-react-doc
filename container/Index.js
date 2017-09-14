// Index.js
import React, {Component} from 'react';
import { connect } from 'react-redux';
import {
    getDan
} from '../action/indexAction';

class Index extends Component {
    componentDidMount () {
        console.log('调用 Index 组件!', this.props);
        const { getDan } = this.props;
        getDan(111);
    }
    render () {
        const {data: { title, list }} = this.props;
        return (
            <div>
                <div>Current: <strong>{title}</strong></div>
                {
                    list.avatar_url ? (<div>
                        <img src={list.avatar_url} />
                    </div>) : null
                }
            </div>
        )
    }
}

export default connect(
    state => {
        return { data: state.index }
    },
    {
        getDan
    }
)(Index);