
import {createStore} from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';


const Actions = {
    INCREMENT: 'increment',
    DECREMENT: 'decrement'
};

const Keys = {
    UP: 38,
    DOWN: 40
};

function counter(state = 0, action) {
    switch (action.type) {
        case Actions.INCREMENT:
            return state + 1;

        case Actions.DECREMENT:
            return state -1;

        default:
            return state;
    }
}

function handleIncrement() {
    console.log('Incrementing');
    store.dispatch({type: Actions.INCREMENT})
}

function handleDecrement() {
    console.log('Decrementing');
    store.dispatch({type: Actions.DECREMENT})
}

var store = createStore(counter);

function render() {
    ReactDOM.render(
        <App
            value={store.getState()}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
        />,
        document.getElementById('app')
    );
}

render();
store.subscribe(render);
