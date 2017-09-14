// Index.js
import React, {Component} from 'react';
import { connect } from 'react-redux';
import {
    getDan
} from '../action/indexAction';
import Helmet from 'react-helmet';

class Index extends Component {

    static readyOnActions(props) {
        console.log(11, this)
        return Promise.all([
            props.dispatch(getDan())
        ]);
    } 
    componentDidMount () {
        console.log('调用 Index 组件!', this.props);
        // const { getDan } = this.props;
        Index.readyOnActions(this.props)
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