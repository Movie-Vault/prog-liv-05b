import React from 'react';
import { useLocation } from 'react-router-dom';

const SearchResults = () => {
    const location = useLocation();
    const { results, query } = location.state || { results: [], query: '' };

    return (
        <div>
            <h2>Résultats de la recherche pour "{query}"</h2>

            <ul>
                {results.map((result) => (
                    <li key={result.id}>{result.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default SearchResults;
