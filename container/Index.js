// Index.js
import React, {Component} from 'react';
import { connect } from 'react-redux';

class Index extends Component {
    componentDidMount () {
        console.log('调用 Index 组件!', this.props);
    }
    render () {
        const {data: { title, list }} = this.props;
        return (
            <div>
                <div>Current: <strong>{title}</strong></div>
                <ul>
                    {
                        list.map((item, index) => {
                            return <li>item</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default connect(
    state => {
        return { data: state.index }
    }
)(Index);