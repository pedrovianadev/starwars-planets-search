import React, { useContext } from 'react';
import './App.css';
import Filter from './components/Filter';
import Search from './components/Search';
import { Table } from './components/Table';
import { PlanetContext } from './context/PlanetContext';

function App() {
  const { planets } = useContext(PlanetContext);

  return (
    <div>
      <h1>StarWars Planet Search</h1>
      <Search />
      <Filter />
      { planets !== null ? <Table /> : 'Carregando'}
    </div>
  );
}

export default App;
