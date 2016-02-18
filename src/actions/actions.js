import actions from '../constants/actions.js';

var autoId = 1;

export function addTodo(text) {
    return {
        type: actions.ADD_TODO,
        data: {id: autoId++, text}
    };
}

export function setTodoCompleted(id, completed) {
    return {
        type: actions.SET_TODO_COMPLETED,
        data: {id, completed}
    };
}

export function setVisibility(filter) {
    return {
        type: actions.SET_VISIBILITY,
        data: {filter}
    };
}
