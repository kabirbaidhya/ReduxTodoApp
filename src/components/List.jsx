
import React from 'react';
import Item from './Item.jsx';
import Component from './base/Component';

class List extends Component {
    render() {
        return (
            <ul className="todo-list">
                {this.props.todos.map((item, index) =>
                    <Item key={item.id} {...item} />
                )}
            </ul>
        );
    }
}

export default List;
