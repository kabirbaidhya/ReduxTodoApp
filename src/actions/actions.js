import Todo from '../services/Todo';
import actions from '../constants/actions';
import {action} from '../foundation/action';


let addTodo = action(actions.ADD_TODO);
let showError = action(actions.SHOW_ERROR);
let hideError = action(actions.HIDE_ERROR);
let freezeUI = action(actions.UI_FREEZE);
let unfreezeUI = action(actions.UI_UNFREEZE);
let setTodoCompleted = action(actions.SET_TODO_COMPLETED);
let setVisibility = action(actions.SET_VISIBILITY);

function createTodo(text) {
    return (dispatch) => {
        dispatch(freezeUI());
        dispatch(hideError());

        Todo.create(text).then(
            (data) => dispatch(addTodo(data)),
            (error) => dispatch(showError({message: error}))
        ).finally(() => dispatch(unfreezeUI()));
    };
}

export {freezeUI, unfreezeUI, createTodo, setTodoCompleted, setVisibility};
