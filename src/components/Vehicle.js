import React from 'react';

const Vehicle = ({ vehicle }) => {
    return (
        <div className="card">
            <h3>{ vehicle.name }</h3>
            <p>Model: { vehicle.model }</p>
            <p>Manufacturer: { vehicle.manufacturer }</p>
        </div>
    )
}

export default Vehicle;
