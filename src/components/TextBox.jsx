
import React from 'react';
import {connect} from 'react-redux';
import Component from './base/Component';
import {addTodo} from '../actions/actions.js';

const KEY_RETURN = 13;

class TextBox extends Component {

    handleKeyUp(e) {
        if (e.which === KEY_RETURN) {
            e.preventDefault();
            var text = e.target.value.trim();

            if (text.length > 0 ) {
                const {dispatch} = this.props;

                dispatch(addTodo(text));
                e.target.value = '';
            }
        }
    }

    render() {
        return <input type="text" placeholder="What do you want to do?" onKeyUp={this.handleKeyUp.bind(this)}/>
    }
}

export default connect()(TextBox);
