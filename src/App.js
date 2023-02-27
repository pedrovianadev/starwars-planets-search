import React, { useContext } from 'react';
import './App.css';
import Search from './components/Search';
import { Table } from './components/Table';
import { PlanetContext } from './context/PlanetContext';

function App() {
  const { planets } = useContext(PlanetContext);

  return (
    <div>
      <span>StarWars Planet Search</span>
      <Search />
      { planets !== null ? <Table /> : 'Carregando'}
    </div>
  );
}

export default App;
