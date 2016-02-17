
const ActionType = {
    ADD_TODO: 'ADD_TODO'
};

class TodoAction {
    static add(text) {
        return {
            type: ActionType.ADD_TODO,
            data: {text}
        }
    }
}

export {ActionType, TodoAction};
