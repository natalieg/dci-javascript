import React from 'react';

const Persons = (val) => {
    return (
        <div class="person">
            <h3 className={val.class}>{val.name}</h3>
            <p>Age: {val.age}</p>
            <p>Job: {val.job}</p>
        </div>
    );
}

export default Persons;