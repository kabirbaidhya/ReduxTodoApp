
import React from 'react';
import List from './List.jsx';
import Filter from './Filter.jsx';
import TextBox from './TextBox.jsx';

class App extends React.Component {

    render() {
        const {todos, filter, dispatch} = this.props;

        return (
            <div>
                <h1>Todo App</h1>

                <TextBox dispatch={dispatch} />
                <List todos={todos} dispatch={dispatch} />
                <Filter filter={filter} dispatch={dispatch} />
            </div>
        );
    }
}

App.propTypes = {
    todos: React.PropTypes.array.isRequired,
    filter: React.PropTypes.any.isRequired
};

export default App;
