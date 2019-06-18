import React, { useState, useEffect } from 'react';
import * as contentful from 'contentful';
import './App.css';

import { Header } from './components/Header';
import { Brands } from './components/Brands';
import { Filters } from './components/Filters';

const client = contentful.createClient({
  space: 'hfvaxsztohci',
  accessToken:
    'be01c9a3fbc1d2fdc2e018a979db97ce9a90b3cfeab7f64e7ba70ba5d878a597',
});

const criteriaMap = [
  { name: 'category', title: 'Category', contentfulField: 'category' },
  { name: 'type', title: 'Type', contentfulField: 'clothingTypes' },
  { name: 'style', title: 'Style', contentfulField: 'clothingStyles' },
  {
    name: 'certificates',
    title: 'Certificates',
    contentfulField: 'certificates',
  },
];

const reducerFunction = (acc, cur) => ({ [cur.name]: [], ...acc });

function App() {
  const [brands, setBrands] = useState([]);
  const [filters, setFilters] = useState(
    criteriaMap.reduce(reducerFunction, {}),
  );
  const [selected, setSelected] = useState(
    criteriaMap.reduce(reducerFunction, {}),
  );

  useEffect(() => {
    client.getEntries({ limit: 1000 }).then(function(entries) {
      const brands = entries.items.filter(
        entry => entry.sys.contentType.sys.id === 'category',
      );
      console.log(brands);
      setBrands(brands);

      const filters = { category: ['Men', 'Women', 'Kids'] };
      ['style', 'type', 'certificates'].forEach(model => {
        filters[model] = entries.items.filter(
          entry => entry.sys.contentType.sys.id === model,
        );
      });

      setFilters(filters);
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <Filters
        criteriaMap={criteriaMap}
        filters={filters}
        selected={selected}
        setSelected={setSelected}
      />
      <Brands criteriaMap={criteriaMap} brands={brands} selected={selected} />
    </div>
  );
}

export default App;
