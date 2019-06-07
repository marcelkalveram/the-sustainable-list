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

function App() {
  const [brands, setBrands] = useState([]);
  const [filters, setFilters] = useState({
    category: [],
    style: [],
    type: [],
    certificates: [],
  });
  const [selected, setSelected] = useState({
    category: [],
    style: [],
    type: [],
    certificates: [],
  });

  useEffect(() => {
    client.getEntries().then(function(entries) {
      const brands = entries.items.filter(
        entry => entry.sys.contentType.sys.id === 'category',
      );
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
        filters={filters}
        selected={selected}
        setSelected={setSelected}
      />
      <Brands brands={brands} selected={selected} />
    </div>
  );
}

export default App;
