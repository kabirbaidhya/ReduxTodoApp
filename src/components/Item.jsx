
import React from 'react';
import {connect} from 'react-redux';
import Component from './base/Component';
import {setTodoCompleted} from '../actions/actions.js';

class Item extends Component {
    handleChange(e) {
        const {dispatch} = this.props;

        dispatch(setTodoCompleted(this.props.id, e.target.checked));
    }

    render () {
        const {text, completed, freezed} = this.props;

        return (
            <li className={completed ? 'completed' : 'todo'}>
                <label>
                    <input type="checkbox" checked={completed} onChange={this.handleChange.bind(this)} disabled={freezed} /> {text}
                </label>
            </li>
        );
    }
}

Item.propTypes = {
    id: React.PropTypes.number.isRequired,
    text: React.PropTypes.string.isRequired,
    completed: React.PropTypes.bool.isRequired
};

export default connect()(Item);
