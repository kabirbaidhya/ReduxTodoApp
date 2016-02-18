import actions from '../constants/actions.js';

export function addTodo(text) {
    return {
        type: actions.ADD_TODO,
        data: {text}
    };
}

export function completeTodo(index) {
    return {
        type: actions.COMPLETE_TODO,
        data: {index}
    };
}

export function setVisibility(filter) {
    return {
        type: actions.SET_VISIBILITY,
        data: {filter}
    };
}
