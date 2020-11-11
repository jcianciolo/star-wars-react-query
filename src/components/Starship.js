import React from 'react';

const Starship = ({ starship }) => {
    return (
        <div className="card">
            <h3>{ starship.name }</h3>
            <p>Length: { starship.length }</p>
            <p>Maximum atmospheric speed: { starship.max_atmosphering_speed }</p>
        </div>
    )
}

export default Starship;
