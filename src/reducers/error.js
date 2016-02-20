
import actions from '../constants/actions';

function error(state = false, action) {
    switch (action.type) {
        case actions.SHOW_ERROR:
            return { message: action.data.message };

        case actions.HIDE_ERROR:
            return false;

        default:
            return state;
    }
}

export default error;
