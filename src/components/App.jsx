import React from 'react';
import {addTodo} from '../actions/actions.js';
import TextInput from './TextInput.jsx';

const KEY_RETURN = 13;

class App extends React.Component {
    handleChange(e) {
        var value = e.target.checked;
    }

    handleKeyUp(e) {
        if (e.which === KEY_RETURN) {
            e.preventDefault();

            var text = e.target.value.trim();
            if (text.length > 0 ) {
                this.props.store.dispatch(addTodo(text));
                e.target.value = '';
            }
        }
    }

    render() {
        const {todos, filter, store} = this.props;
        console.log('todos received', todos);
        return (
            <div>
                <h1>Todo App</h1>
                <input type="text" placeholder="What do you want to do?" onKeyUp={this.handleKeyUp.bind(this)}/>
                <ul className="todo-list">
                    {todos.map((item, index) =>
                        <TextInput key={item.id} {...item} dispatch={store.dispatch}/>
                    )}
                </ul>
            </div>
        );
    }
}

App.propTypes = {
    todos: React.PropTypes.array.isRequired,
    filter: React.PropTypes.any.isRequired
};

export default App;
