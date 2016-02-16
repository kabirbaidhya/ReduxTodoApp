
function isFunction(thing) {
    return (typeof thing === 'function');
}

function isUndefined(thing) {
    return (typeof thing === 'undefined');
}

function isDefined(thing) {
    return !isUndefined(thing);
}

function isObject(thing) {
    return (typeof thing === 'object');
}

function sayHello() {
    return 'Hello';
}

export {
    isFunction,
    isUndefined,
    isDefined,
    isObject,
    sayHello
};
