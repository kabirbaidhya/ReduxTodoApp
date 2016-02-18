import actions from '../constants/actions.js';

function todos(state = [], action) {
    switch (action.type) {
        case actions.ADD_TODO:

            const item = {
                id: state.length + 1,
                text: action.data.text,
                completed: false
            };

            return [
                ...state,
                item
            ];

        case actions.COMPLETE_TODO:
            const {index} = action.data;

            return [
                ...state.slice(0, index),
                Object.assign({}, state[index], {
                    completed: true
                }),
                ...state.slice(index + 1)
            ];
        default:
            return state;
    }
}

export default todos;
