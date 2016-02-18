
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

import { createStore } from 'redux';
import reducer from './reducers';
import filters from './constants/filters.js';
import {addTodo, setTodoCompleted, setVisibility} from './actions/actions.js';

var store = createStore(reducer);

render();
// Initial State
store.subscribe(render);

function render() {
    console.log(store.getState());
    const {todos, filter} = store.getState();

    ReactDOM.render(
        <App todos={todos} filter={filter} dispatch={store.dispatch} />,
        document.getElementById('app')
    );
}

// Just a test
store.dispatch(addTodo('Task 1'));
store.dispatch(addTodo('Task 2'));
store.dispatch(addTodo('Task 3'));
store.dispatch(addTodo('Task 4'));
store.dispatch(setTodoCompleted(2, true));
store.dispatch(setVisibility(filters.SHOW_COMPLETED));
store.dispatch(setVisibility(filters.SHOW_ACTIVE));
