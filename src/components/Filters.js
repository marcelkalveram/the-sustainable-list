import React, { useState } from 'react';
import {
  Pane,
  Heading,
  Icon,
  IconButton,
  Checkbox,
  minorScale,
  majorScale,
} from 'evergreen-ui';

const getFieldProp = (val, prop) =>
  typeof val === 'string' ? val : val.fields[prop];

const getFieldPropLocation = (val, prop) => val.fields.country;

export function Filters(props) {
  const [hidden, setHidden] = useState([]);

  const toggleHidden = toggledItem => {
    let newHidden = hidden;
    if (!newHidden.includes(toggledItem)) {
      newHidden.push(toggledItem);
    } else {
      newHidden = newHidden.filter(item => toggledItem !== item);
    }
    setHidden([...newHidden]);
  };

  const toggleFilter = (toggledItem, type) => {
    const newSelected = props.selected;
    if (newSelected[type].includes(toggledItem)) {
      newSelected[type] = newSelected[type].filter(
        item => item !== toggledItem,
      );
    } else {
      newSelected[type].push(toggledItem);
    }
    props.setSelected({ ...newSelected });
  };

  const countries = props.filters['location'].reduce((unique, item) => {
    return unique.filter(u => u === getFieldPropLocation(item)).length
      ? unique
      : unique.concat(getFieldPropLocation(item));
  }, []);

  return (
    <div
      className={`filters-container${
        props.showFilters ? ' filters-container--visible' : ''
      }`}
      style={props.style}
    >
      <IconButton
        appearance="minimal"
        className="menu-icon"
        icon="cross"
        onClick={() => props.setShowFilters(false)}
        style={{ position: 'absolute', right: '16px', top: '16px' }}
      />
      {props.criteriaMap.map(criteria => (
        <React.Fragment key={criteria.title}>
          <Heading
            cursor="pointer"
            size={400}
            onClick={() => toggleHidden(criteria.name)}
            paddingBottom={hidden.includes(criteria.name) ? majorScale(1) : 0}
          >
            {criteria.title}
            <Icon
              position="relative"
              top={minorScale(1)}
              icon={hidden.includes(criteria.name) ? 'caret-up' : 'caret-down'}
            />
          </Heading>

          <Pane display={hidden.includes(criteria.name) ? 'none' : 'block'}>
            {criteria.name !== 'location'
              ? props.filters[criteria.name].map(i => (
                  <Checkbox
                    key={getFieldProp(i, 'slug')}
                    checked={props.selected[criteria.name].includes(
                      getFieldProp(i, 'slug'),
                    )}
                    label={getFieldProp(i, 'title')}
                    onChange={e =>
                      toggleFilter(getFieldProp(i, 'slug'), criteria.name)
                    }
                  />
                ))
              : countries.map(country => (
                  <Checkbox
                    key={country}
                    checked={props.selected[criteria.name].includes(country)}
                    label={country}
                    onChange={e => toggleFilter(country, criteria.name)}
                  />
                ))}
          </Pane>
        </React.Fragment>
      ))}
    </div>
  );
}
