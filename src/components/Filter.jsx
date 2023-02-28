import React, { useContext, useState } from 'react';
import { FilterContext } from '../context/FilterContext';

function Filter() {
  const [filter, setFilter] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '0',
  });

  const { saveFilter } = useContext(FilterContext);

  const handleChange = (e) => {
    setFilter({
      ...filter,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = () => {
    saveFilter(filter);
  };

  return (
    <form>
      <label htmlFor="select1">
        Column:
        <select
          name="column"
          id="select1"
          value={ filter.column }
          onChange={ handleChange }
          data-testid="column-filter"
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
      </label>
      <label htmlFor="select2">
        Comparison:
        <select
          name="comparison"
          id="select2"
          value={ filter.comparison }
          onChange={ handleChange }
          data-testid="comparison-filter"
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>
      <label htmlFor="value">
        Valor:
        <input
          name="value"
          id="value"
          type="number"
          value={ filter.value }
          onChange={ handleChange }
          data-testid="value-filter"
        />
      </label>
      <button
        type="button"
        onClick={ handleClick }
        data-testid="button-filter"
      >
        Filtrar
      </button>
    </form>
  );
}

export default Filter;
