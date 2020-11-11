import React from 'react';

const SpeciesType = ({ species }) => {
    return (
        <div className="card">
            <h3>{ species.name }</h3>
            <p>Language: { species.language }</p>
            <p>Homeworld: { species.homeworld }</p>
        </div>
    )
}

export default SpeciesType;
