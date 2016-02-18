
import React from 'react';
import List from './List.jsx';
import Filter from './Filter.jsx';
import TextBox from './TextBox.jsx';
import {connect} from 'react-redux';
import Component from './base/Component';

class App extends Component {

    render() {
        const {todos, filter} = this.props;

        return (
            <div>
                <h1>Todo App</h1>

                <TextBox/>
                <List todos={todos} />
                <Filter filter={filter} />
            </div>
        );
    }
}

App.propTypes = {
    todos: React.PropTypes.array.isRequired,
    filter: React.PropTypes.any.isRequired
};

function mapStateToProps(state) {
    return {
        todos: state.todos,
        filter: state.filter
    };
}

export default connect(mapStateToProps)(App);
