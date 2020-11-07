import React from 'react';

const Person = ({ person }) => {
    return (
        <div className="card">
            <h3>{ person.name }</h3>
            <p>Height: { person.height }</p>
            <p>Mass: { person.mass }</p>
        </div>
    )
}

export default Person;
