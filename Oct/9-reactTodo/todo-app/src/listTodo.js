import React from 'react';

const ListTodo = (props) => {
    let listOfItems;
    if (props.list.length > 0) {
        listOfItems = props.list.map((item, index) => {
            return <h3 key={index}>{item}</h3>
        });
    } else {
        listOfItems = <p>Please add some tasks </p>
    }

    return (
        <div>
            {listOfItems}
        </div>
    );
}

export default ListTodo;