
import React from 'react';
import List from './List.jsx';
import Filter from './Filter.jsx';
import TextBox from './TextBox.jsx';
import Freezer from './Freezer.jsx';
import {connect} from 'react-redux';
import Component from './base/Component';

class App extends Component {

    render() {
        const {todos, filter, freezed, error} = this.props;

        return (
            <div>
                <h1>Todo App</h1>

                <TextBox freezed={freezed}/>
                <div className="error" hidden={!error}>{error.message}</div>

                <List {...{todos, freezed, filter}}/>
                <Filter {...{filter, freezed}} />
                <Freezer freezed={freezed}/>
            </div>
        );
    }
}

App.propTypes = {
    todos: React.PropTypes.array.isRequired,
    filter: React.PropTypes.any.isRequired,
    freezed: React.PropTypes.bool.isRequired
};

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(App);
