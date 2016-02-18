
import React from 'react';
import {addTodo} from '../actions/actions.js';

const KEY_RETURN = 13;

class TextBox extends React.Component {

    handleKeyUp(e) {
        if (e.which === KEY_RETURN) {
            e.preventDefault();
            var text = e.target.value.trim();

            if (text.length > 0 ) {
                this.props.dispatch(addTodo(text));
                e.target.value = '';
            }
        }
    }

    render() {
        return <input type="text" placeholder="What do you want to do?" onKeyUp={this.handleKeyUp.bind(this)}/>
    }
}

export default TextBox;
