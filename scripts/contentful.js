import * as contentful from 'contentful';
import fse from 'fs-extra';
import { criteriaMap } from '../src/config/criteriaMap';

const client = contentful.createClient({
  space: 'hfvaxsztohci',
  accessToken:
    'be01c9a3fbc1d2fdc2e018a979db97ce9a90b3cfeab7f64e7ba70ba5d878a597',
});

client.getEntries({ limit: 1000 }).then(function(entries) {
  const brands = entries.items.filter(
    entry => entry.sys.contentType.sys.id === 'category',
  );

  const filters = { category: ['Men', 'Women', 'Kids'] };

  const criteriaArray = criteriaMap
    .map(criteria => criteria.name)
    .filter(criteria => criteria !== 'category');

  criteriaArray.forEach(model => {
    filters[model] = entries.items.filter(
      entry => entry.sys.contentType.sys.id === model,
    );
  });

  const json = {
    brands,
    filters,
  };

  fse.outputFile('../src/data/index.json', JSON.stringify(json), err => {
    if (err) {
      throw new Error('Error saving file');
    }
  });
});
