
/**
 * Creates and returns a function to create an action with the provided type and data
 *
 * @return {function}
 */
function action(type) {
    return function(data = {}) {
        return {type, data};
    }
}

export {action};
