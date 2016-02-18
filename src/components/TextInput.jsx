
import React from 'react';
import {setTodoCompleted} from '../actions/actions.js';

class TextInput extends React.Component {
    handleChange(e) {
        this.props.dispatch(setTodoCompleted(this.props.id, e.target.checked));
    }

    render () {
        const {text, completed} = this.props;

        return (
            <li className={completed ? 'completed' : ''}>
                <label>
                    <input type="checkbox" checked={completed} onChange={this.handleChange.bind(this)}/> {text}
                </label>
            </li>
        );
    }
}

TextInput.propTypes = {
    id: React.PropTypes.number.isRequired,
    text: React.PropTypes.string.isRequired,
    completed: React.PropTypes.bool.isRequired
};

export default TextInput;
