
import React from 'react';
import Item from './Item.jsx';

function List ({todos, freezed, filter}) {
    if (todos.length > 0) {
        return (
            <ul className="todo-list" data-filter={filter}>
                {todos.map((item, index) =>
                    <Item key={item.id} {...item} freezed={freezed} />
                )}
            </ul>
        );
    } else {
        return <p>No items</p>;
    }

}

export default List;
