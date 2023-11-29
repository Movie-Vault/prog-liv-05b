import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = async () => {
        try {

            const apiKey = 'a046de97f7e5d4a955a93aa233cd4d68';
            const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`;
            const response = await fetch(url);
            const data = await response.json();


            const results = data.results;

            navigate('/search-results', { state: { results, query } });
        } catch (error) {
            console.error('Erreur de recherche:', error);
        }
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                className="input"
                placeholder="Enter Movie Title, Actor's Name"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={handleSearch} className="fa-solid fa-magnifying-glass"></button>
        </div>
    );
};

export default SearchBar;
