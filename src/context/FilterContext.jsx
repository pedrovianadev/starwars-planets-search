import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const FilterContext = createContext();

export default function FilterProvider({ children }) {
  const [filter, setFilter] = useState([]);

  const saveFilter = (filtro1) => {
    setFilter([...filter, filtro1]);
  };

  return (
    <FilterContext.Provider value={ { saveFilter, filter } }>
      { children }
    </FilterContext.Provider>
  );
}

FilterProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
