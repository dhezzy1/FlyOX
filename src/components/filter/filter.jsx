import React, { useState } from 'react';

const SearchFilters = ({ onFilterChange }) => {
    const [priceRange, setPriceRange] = useState([0, 500]);
    const [airline, setAirline] = useState('');

    const handleFilterChange = () => {
        onFilterChange({ priceRange, airline });
    };
    return (
        <div>
            <h3>Search Filters</h3>
            <input
                type="number"
                value={priceRange[0]}
                onChange={(e) => setPriceRange([e.target.value, priceRange[1]])}
                placeholder="Min Price"
            />
            <input
                type="number"
                value={priceRange[1]}
                onChange={(e) => 
                    setPriceRange([priceRange[0], e.target.value])}
                placeholder="Max Price"
            />
            <input
                type="text"
                value={airline}
                onChange={(e) => setAirline(e.target.value)}
                placeholder="Preferred Airline"
            />
            <button onClick={handleFilterChange}>Apply Filters</button>
        </div>
    );
};

export default SearchFilters