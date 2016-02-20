
import actions from '../constants/actions.js';

function freeze(state = false, action) {

    switch (action.type) {
        case actions.UI_FREEZE:
            return true;

        case actions.UI_UNFREEZE:
            return false;

        default:
            return state;
    }
}

export default freeze;
