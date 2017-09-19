// Index.js
import React, {Component} from 'react';
import { connect } from 'react-redux';
import {
    getDan
} from '../action/indexAction';
import {
    getTJ
} from '../action/aboutAction.js';

class Index extends Component {

    static readyOnActions(dispatch) {
        return Promise.all([
            // 你可以用mapDispatchToProps也行
            // 直接用dispatch调用也行
            dispatch(getDan()),
            dispatch(getTJ())
        ]);
    }
    componentDidMount () {
        console.log('调用 Index 组件!', this.props);
        const { dispatch } = this.props;
        // Index.readyOnActions(dispatch)
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
    // {
    //     getDan
    // }
)(Index);