import Immutable from 'immutable';
import {ActionType} from '../actions/TodoAction.js';

const STATE_ZERO = Immutable.fromJS({
    todos: [
        {
            id: 5,
            text: 'Learn Redux'
        }
    ]
});

function todos(state = STATE_ZERO, action) {
    switch (action.type) {
        case ActionType.ADD_TODO:
            var autoId = state.get('todos').first().get('id') + 1;

            const item = Immutable.fromJS({
                id: autoId,
                text: action.data.text
            });

            return state.update('todos', (items) => items.push(item));

        default:
            return state;
    }
}

export default todos;
