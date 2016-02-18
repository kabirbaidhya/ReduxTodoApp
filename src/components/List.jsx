
import React from 'react';
import Item from './Item.jsx';

class List extends React.Component {
    render() {
        const {todos, dispatch} = this.props;

        return (
            <ul className="todo-list">
                {todos.map((item, index) =>
                    <Item key={item.id} {...item} dispatch={dispatch}/>
                )}
            </ul>
        );
    }
}

export default List;
