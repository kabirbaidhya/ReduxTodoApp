
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import App from './components/App.jsx';
import Immutable from 'immutable';
import {ActionType, TodoAction} from './actions/TodoAction.js';
import todos from './reducers/todos.js';

var store = createStore(todos);

function saveNewTodo(text) {
    store.dispatch(TodoAction.add(text));
}

function render() {
    console.log('current state', store.getState());
    ReactDOM.render(
        <App title="Todo App" todos={store.getState().get('todos')} handleSave={saveNewTodo} />,
        document.getElementById('app')
    );
}

render();
store.subscribe(render);
