import React, { useContext, useState } from 'react';
import { SearchContext } from '../context/SearchContext';

function Search() {
  const [planetName, setPlanetName] = useState('');
  const { savePlanetName } = useContext(SearchContext);

  const handleChange = (e) => {
    setPlanetName(e.target.value);
    savePlanetName(e.target.value);
  };

  return (
    <form>
      <label htmlFor="planetName">
        Name:
        <input
          type="text"
          name="planetName"
          id="planetName"
          value={ planetName }
          onChange={ handleChange }
          data-testid="name-filter"
        />
      </label>
    </form>
  );
}

export default Search;
