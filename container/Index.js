// Index.js
import React, {Component} from 'react';
import { connect } from 'react-redux';
import {
    getDan
} from '../action/indexAction';

class Index extends Component {

    static readyOnActions(dispatch) {
        return Promise.all([
            getDan()
        ]);
    } 
    componentDidMount () {
        console.log('调用 Index 组件!', this.props);
        const { getDan } = this.props;
        getDan();
    }
    render () {
        const {data: { title, list }} = this.props;
        return (
            <div>
                <div>Current: <strong>{title}</strong></div>
                {
                    list.avatar_url ? (<div>
                        <img src={list.avatar_url} />
                    </div>) : <div>loading</div>
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