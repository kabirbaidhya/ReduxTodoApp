import todos from './todos.js';
import filter from './filter.js';
import {combineReducers} from 'redux';

var reducer = combineReducers({
    todos,
    filter
});

export default reducer;
