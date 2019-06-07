import React, { useState } from 'react';
import {
  Pane,
  Heading,
  Icon,
  Checkbox,
  minorScale,
  majorScale,
} from 'evergreen-ui';

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
      float="left"
      width="200px"
      padding={majorScale(3)}
      marginTop={minorScale(3)}
    >
      <Heading
        cursor="pointer"
        size={400}
        onClick={() => toggleHidden('categories')}
        paddingBottom={hidden.includes('categories') && majorScale(1)}
      >
        Categories
        <Icon
          paddingTop={minorScale(2)}
          icon={hidden.includes('categories') ? 'caret-up' : 'caret-down'}
        />
      </Heading>

      <Pane display={hidden.includes('categories') ? 'none' : 'block'}>
        {props.filters.category.map(i => (
          <Checkbox
            checked={props.selected.category.includes(i)}
            label={i}
            onChange={e => toggleFilter(i, 'category')}
          />
        ))}
      </Pane>

      <Heading
        cursor="pointer"
        size={400}
        onClick={() => toggleHidden('clothing')}
        paddingBottom={hidden.includes('clothing') && majorScale(1)}
      >
        Clothing
        <Icon
          paddingTop={minorScale(2)}
          icon={hidden.includes('clothing') ? 'caret-up' : 'caret-down'}
        />
      </Heading>

      <Pane display={hidden.includes('clothing') ? 'none' : 'block'}>
        {props.filters.type.map(i => (
          <Checkbox
            checked={props.selected.type.includes(i.fields.slug)}
            label={i.fields.title}
            onChange={e => toggleFilter(i.fields.slug, 'type')}
          />
        ))}
      </Pane>

      <Heading
        cursor="pointer"
        size={400}
        onClick={() => toggleHidden('styles')}
        paddingBottom={hidden.includes('styles') && majorScale(1)}
      >
        Styles
        <Icon
          paddingTop={minorScale(2)}
          icon={hidden.includes('styles') ? 'caret-up' : 'caret-down'}
        />
      </Heading>
      <Pane display={hidden.includes('styles') ? 'none' : 'block'}>
        {props.filters.style.map(i => (
          <Checkbox
            checked={props.selected.style.includes(i.fields.slug)}
            label={i.fields.title}
            onChange={e => toggleFilter(i.fields.slug, 'style')}
          />
        ))}
      </Pane>

      <Heading
        cursor="pointer"
        size={400}
        onClick={() => toggleHidden('certificates')}
        paddingBottom={hidden.includes('certificates') && majorScale(1)}
      >
        Certificates
        <Icon
          paddingTop={minorScale(2)}
          icon={hidden.includes('certificates') ? 'caret-up' : 'caret-down'}
        />
      </Heading>
      <Pane display={hidden.includes('certificates') ? 'none' : 'block'}>
        {props.filters.certificates.map(i => (
          <Checkbox
            checked={props.selected.certificates.includes(i.fields.slug)}
            label={i.fields.title}
            onChange={e => toggleFilter(i.fields.slug, 'certificates')}
          />
        ))}
      </Pane>

      {/* <h3>Shipping options</h3> */}
    </Pane>
  );
}
