
import React from 'react';
import Item from './Item.jsx';

function List ({todos}) {
    console.log('List render');
    return (
        <ul className="todo-list">
            {todos.map((item, index) =>
                <Item key={item.id} {...item} />
            )}
        </ul>
    );
}

export default List;
