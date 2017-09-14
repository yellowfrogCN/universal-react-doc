// About.js
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getTJ } from '../action/aboutAction';

class About extends Component {
    componentDidMount () {
        console.log('调用 About 组件!', this.props);
        const { getTJ } = this.props;
        getTJ();
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
        return { data: state.about }
    },
    {
        getTJ
    }
)(About);