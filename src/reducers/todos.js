import actions from '../constants/actions.js';

function todos(state = [], action) {
    switch (action.type) {
        case actions.ADD_TODO:

            const item = {
                id: action.data.id,
                text: action.data.text,
                completed: false
            };

            return [
                ...state,
                item
            ];

        case actions.SET_TODO_COMPLETED:
            const {id, completed} = action.data;

            return state.map(item => (
                item.id === id ? Object.assign({}, item, {completed}) : item
            ));

        default:
            return state;
    }
}

export default todos;
