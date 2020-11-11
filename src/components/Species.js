import React, { useState } from 'react';
import { usePaginatedQuery } from 'react-query';
import SpeciesType from './SpeciesType';


const fetchSpecies = async (key, page) => {
    const res = await fetch(`http://swapi.dev/api/species/?page=${page}`);
    return res.json();  // returns a promise
}

const Species = () => {
    const [page, setPage] = useState(1);

    const {
        resolvedData,
        latestData,
        status
    } = usePaginatedQuery(['species', page], fetchSpecies);

    return (
        <div>
            <h2>Species</h2>
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
                        { resolvedData.results.map(species => <SpeciesType key={species.name} species={species} />) }
                    </div>
                </>    
            )}
        </div>
    )
}

export default Species;

