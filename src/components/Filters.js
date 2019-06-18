import React, { useState } from 'react';
import {
  Pane,
  Heading,
  Icon,
  Checkbox,
  minorScale,
  majorScale,
} from 'evergreen-ui';

const getFieldProp = (val, prop) =>
  typeof val === 'string' ? val : val.fields[prop];

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

  return (
    <Pane
      background="tint1"
      position="fixed"
      float="left"
      width="200px"
      height="calc(100vh - 74px)"
      top="74px"
      padding={majorScale(3)}
      overflow="auto"
    >
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
              paddingTop={minorScale(2)}
              icon={hidden.includes(criteria.name) ? 'caret-up' : 'caret-down'}
            />
          </Heading>

          <Pane display={hidden.includes(criteria.name) ? 'none' : 'block'}>
            {props.filters[criteria.name].map(i => (
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
            ))}
          </Pane>
        </React.Fragment>
      ))}
    </Pane>
  );
}
