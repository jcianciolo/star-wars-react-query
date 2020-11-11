import React, { useState } from 'react';
import { usePaginatedQuery } from 'react-query';
import Starship from './Starship';


const fetchStarships = async (key, page) => {
    const res = await fetch(`http://swapi.dev/api/starships/?page=${page}`);
    return res.json();  // returns a promise
}

const Starships = () => {
    const [page, setPage] = useState(1);

    const {
        resolvedData,
        latestData,
        status
    } = usePaginatedQuery(['starships', page], fetchStarships);

    return (
        <div>
            <h2>Starships</h2>
            {status === 'loading' && (
                <div>Loading data...</div>
            )}

            {status === 'error' && (
                <div>Error fetching data</div>
            )}
            
            {status === 'success' && (
                <>  
                    <button
                        onClick={() => setPage(old => Math.max(old - 1, 1))} // page cannot go lower than 1
                        disabled={page === 1}
                    >Previous Page</button>
                        <span>{ page }</span>  
                    <button
                        onClick={() => setPage(old => (!latestData || !latestData.next ? old : old + 1))}
                        disabled={!latestData || !latestData.next}
                    >Next Page</button>  
                    <div>
                        { resolvedData.results.map(starship => <Starship key={starship.name} starship={starship} />) }
                    </div>
                </>    
            )}
        </div>
    )
}

export default Starships;

