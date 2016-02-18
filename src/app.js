
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

import { createStore } from 'redux';
import reducer from './reducers';
import filters from './constants/filters.js';
import {addTodo, setTodoCompleted, setVisibility} from './actions/actions.js';
import { Provider } from 'react-redux';
var store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app')
);

store.subscribe(() => console.log('[Log]', store.getState()));
