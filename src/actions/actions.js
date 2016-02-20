import Todo from '../services/Todo';
import actions from '../constants/actions';

var autoId = 1;

function addTodo(text) {
    return {
        type: actions.ADD_TODO,
        data: {id: autoId++, text}
    };
}

function showError(message) {
    return {
        type: actions.SHOW_ERROR,
        data: {message}
    };
}

function hideError() {
    return {
        type: actions.HIDE_ERROR,
        data: {}
    };
}

export function freezeUI() {
    return {
        type: actions.UI_FREEZE,
        data: {}
    };
}

export function unfreezeUI() {
    return {
        type: actions.UI_UNFREEZE,
        data: {}
    };
}

export function createTodo(text) {
    return (dispatch) => {
        dispatch(freezeUI());
        dispatch(hideError());

        Todo.create(text).then(
            (response) => dispatch(addTodo(response)),
            (error) => dispatch(showError(error))
        ).finally(() => dispatch(unfreezeUI()));
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
