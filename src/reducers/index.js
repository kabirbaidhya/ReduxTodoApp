import todos from './todos';
import filter from './filter';
import freeze from './freeze';
import error from './error';

import {combineReducers} from 'redux';

var reducer = combineReducers({
    todos,
    filter,
    error,
    freezed: freeze,
});

export default reducer;
