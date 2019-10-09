import React from 'react';

const TableBody = (props) => {
const body = props.list.map((item) => {
        return (
            <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.email}</td>
            </tr>
        )
    })
    return body;
}

export default TableBody;