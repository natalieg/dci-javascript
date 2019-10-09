import React from 'react';

const TableHeader = (prop) => {
    let Titles = Object.keys(prop.list[0]);
    return (
        <React.Fragment>
            <th> {Titles[0].toUpperCase()} </th>
            <th> {Titles[1].toUpperCase()} </th>
            <th> {Titles[2].toUpperCase()} </th>
            <th> {Titles[3].toUpperCase()} </th>
        </React.Fragment>
    )
}

export default TableHeader;