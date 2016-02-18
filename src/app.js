
import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import reducer from './reducers';
import filters from './constants/filters.js';
import {addTodo, completeTodo, setVisibility} from './actions/actions.js';

var store = createStore(reducer);

// Initial State
log();
store.subscribe(log);

function log() {
    console.log('[App]', store.getState());
}

store.dispatch(addTodo('Task 1'));
store.dispatch(addTodo('Task 2'));
store.dispatch(addTodo('Task 3'));
store.dispatch(completeTodo(2));
store.dispatch(setVisibility(filters.SHOW_COMPLETED));
store.dispatch(setVisibility(filters.SHOW_ACTIVE));
store.dispatch(setVisibility(filters.SHOW_ALL));
