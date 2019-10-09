import React from 'react';

const Navi = (val) => {
    return (
        <div style={{height: val.height + "px" }} class="nav">
            <h1>{val.title}</h1>
            <p>{val.description}</p>
        </div>
    );
}

export default Navi;