import React, { useState, useEffect } from 'react';
import * as contentful from 'contentful';
import './App.css';
import { StickyContainer } from 'react-sticky';

import { Header } from './components/Header';
import { Sort } from './components/Sort';
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
  let [brands, setBrands] = useState([]);
  const [filters, setFilters] = useState(
    criteriaMap.reduce(reducerFunction, {}),
  );
  const [selected, setSelected] = useState(
    criteriaMap.reduce(reducerFunction, {}),
  );

  const [sortBy, setSortBy] = useState({ az: true, price: false });
  const [searchFor, setSearchFor] = useState('');

  useEffect(() => {
    client.getEntries({ limit: 1000 }).then(function(entries) {
      let brands = entries.items.filter(
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

  brands = brands.filter(brand => {
    const matches = [];

    criteriaMap.forEach((criteria, index) => {
      matches[index] = selected[criteria.name].length === 0;
      if (!brand.fields[criteria.contentfulField]) {
        return;
      }
      brand.fields[criteria.contentfulField].forEach(field => {
        if (typeof field === 'string') {
          if (selected[criteria.name].includes(field)) {
            matches[index] = true;
          }
        } else if (selected[criteria.name].includes(field.fields.slug)) {
          matches[index] = true;
        }
      });
    });
    return matches.every(match => match);
  });

  if (searchFor !== '') {
    brands = brands.filter(brand =>
      brand.fields.title.toLowerCase().includes(searchFor.toLowerCase()),
    );
  }

  if (sortBy.price === false) {
    brands.sort((a, b) => {
      const priceA = a.fields.price || 0;
      const priceB = b.fields.price || 0;
      if (priceA < priceB) {
        return 1;
      }
      if (priceA >= priceB) {
        return -1;
      }
      return 0;
    });
  }

  if (sortBy.az === false) {
    brands.sort((a, b) => {
      const titleA = a.fields.title || 0;
      const titleB = b.fields.title || 0;
      if (titleA < titleB) {
        return 1;
      }
      if (titleA >= titleB) {
        return -1;
      }
      return 0;
    });
  }

  return (
    <StickyContainer>
      <Header />
      <Filters
        criteriaMap={criteriaMap}
        filters={filters}
        selected={selected}
        setSelected={setSelected}
      />
      <div className="main-container">
        <Sort
          searchFor={searchFor}
          setSearchFor={setSearchFor}
          count={brands.length}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />
        <Brands criteriaMap={criteriaMap} brands={brands} selected={selected} />
      </div>
    </StickyContainer>
  );
}

export default App;
