import React, { useContext, useState, useEffect } from 'react';
import { PlanetContext } from '../context/PlanetContext';
import { SearchContext } from '../context/SearchContext';
import { FilterContext } from '../context/FilterContext';

export function Table() {
  const { planets } = useContext(PlanetContext);
  const { planetSearch } = useContext(SearchContext);
  const { filter } = useContext(FilterContext);

  const [planetas, setPlanetas] = useState(planets);

  useEffect(() => {
    const receive = planets.filter((p) => p.name.toLowerCase().includes(planetSearch));
    setPlanetas(receive);
  }, [planetSearch]);

  const filterPopulation = (comparison, value) => {
    if (comparison === 'igual a') {
      const lista = planets.filter((p) => parseInt(p.population, 10) === value);
      setPlanetas(lista);
      console.log(lista);
    } else if (comparison === 'menor que') {
      const lista = planets.filter((p) => p.population < value);
      setPlanetas(lista);
    } else if (comparison === 'maior que') {
      const lista = planets.filter((p) => p.population > value);
      setPlanetas(lista);
    }
  };

  const filterOrbital = (comparison, value) => {
    if (comparison === 'igual a') {
      const lista = planets.filter((p) => p.orbital_period === value);
      setPlanetas(lista);
    } else if (comparison === 'menor que') {
      const lista = planets.filter((p) => p.orbital_period < value);
      setPlanetas(lista);
    } else if (comparison === 'maior que') {
      const lista = planets.filter((p) => p.orbital_period > value);
      setPlanetas(lista);
    }
  };

  const filterRotation = (comparison, value) => {
    if (comparison === 'igual a') {
      const lista = planets.filter((p) => p.rotation_period === value);
      setPlanetas(lista);
    } else if (comparison === 'menor que') {
      const lista = planets.filter((p) => p.rotation_period < value);
      setPlanetas(lista);
    } else if (comparison === 'maior que') {
      const lista = planets.filter((p) => p.rotation_period > value);
      setPlanetas(lista);
    }
  };

  const filterDiameter = (comparison, value) => {
    if (comparison === 'igual a') {
      const lista = planets.filter((p) => p.diameter === value);
      setPlanetas(lista);
    } else if (comparison === 'menor que') {
      const lista = planets.filter((p) => p.diameter < value);
      setPlanetas(lista);
    } else if (comparison === 'maior que') {
      const lista = planets.filter((p) => p.diameter > value);
      setPlanetas(lista);
    }
  };

  const filterSurface = (comparison, value) => {
    if (comparison === 'igual a') {
      const lista = planets.filter((p) => p.surface_water === value);
      setPlanetas(lista);
    } else if (comparison === 'menor que') {
      const lista = planets.filter((p) => p.surface_water < value);
      setPlanetas(lista);
    } else if (comparison === 'maior que') {
      const lista = planets.filter((p) => p.surface_water > value);
      setPlanetas(lista);
    }
  };

  useEffect(() => {
    if (filter.length > 0) {
      console.log(filter);
      const { column, comparison, value } = filter[filter.length - 1];
      if (column === 'population') {
        filterPopulation(comparison, parseInt(value, 10));
      } else if (column === 'orbital_period') {
        filterOrbital(comparison, parseInt(value, 10));
      } else if (column === 'rotation_period') {
        filterRotation(comparison, parseInt(value, 10));
      } else if (column === 'diameter') {
        filterDiameter(comparison, parseInt(value, 10));
        console.log('diaaaameter');
      } else if (column === 'surface_water') {
        filterSurface(comparison, parseInt(value, 10));
      }
    }
  }, [filter]);

  return (
    <table>
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Rotation Period</th>
          <th scope="col">Orbital Period</th>
          <th scope="col">Diameter</th>
          <th scope="col">Climate</th>
          <th scope="col">Gravity</th>
          <th scope="col">Terrain</th>
          <th scope="col">Surface Water</th>
          <th scope="col">Population</th>
          <th scope="col">Films</th>
          <th scope="col">Created</th>
          <th scope="col">Edited</th>
          <th scope="col">URL</th>
        </tr>
      </thead>
      <tbody>
        { planetas.map((p) => (
          <tr key={ p.name }>
            <td>{p.name}</td>
            <td>{p.rotation_period}</td>
            <td>{p.orbital_period}</td>
            <td>{p.diameter}</td>
            <td>{p.climate}</td>
            <td>{p.gravity}</td>
            <td>{p.terrain}</td>
            <td>{p.surface_water}</td>
            <td>{p.population}</td>
            <td>{p.films}</td>
            <td>{p.created}</td>
            <td>{p.edited}</td>
            <td>{p.url}</td>
          </tr>)) }
      </tbody>
    </table>
  );
}
