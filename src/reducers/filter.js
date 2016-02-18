import filters from '../constants/filters.js';
import actions from '../constants/actions.js';

function visibilifyFilter(state = filters.SHOW_ALL, action) {
    switch (action.type) {
        case actions.SET_VISIBILITY:
            return action.data.filter;

        default:
            return state;
    }
}

export default visibilifyFilter;
