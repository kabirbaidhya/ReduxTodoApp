import Todo from '../services/Todo';
import actions from '../constants/actions';
import {action} from '../foundation/simple-action';

let addTodo = (data) => action(actions.ADD_TODO, data);

let showError = (message) => action(actions.SHOW_ERROR, {message});

let hideError = () => action(actions.HIDE_ERROR);

let freezeUI = () => action(actions.UI_FREEZE);

let unfreezeUI = () => action(actions.UI_UNFREEZE);

let setTodoCompleted = (id, completed) => action(actions.SET_TODO_COMPLETED, {id, completed});

let setVisibility = (filter) => action(actions.SET_VISIBILITY, {filter});

function createTodo(text) {
    return (dispatch) => {
        dispatch(freezeUI());
        dispatch(hideError());

        Todo.create(text).then(
            (data) => dispatch(addTodo(data)),
            (error) => dispatch(showError(error))
        ).finally(() => dispatch(unfreezeUI()));
    };
}

export {freezeUI, unfreezeUI, createTodo, setTodoCompleted, setVisibility};
