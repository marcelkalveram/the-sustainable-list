export const toggleHiddenFn = (hidden, setHidden) => toggledItem => {
  let newHidden = hidden;
  if (!newHidden.includes(toggledItem)) {
    newHidden.push(toggledItem);
  } else {
    newHidden = newHidden.filter(item => toggledItem !== item);
  }
  setHidden([...newHidden]);
};

export const toggleFilterFn = (selected, setSelected) => (
  toggledItem,
  type,
) => {
  const newSelected = selected;
  if (newSelected[type].includes(toggledItem)) {
    newSelected[type] = newSelected[type].filter(item => item !== toggledItem);
  } else {
    newSelected[type].push(toggledItem);
  }
  window.scrollTo(0, 0);
  setSelected({ ...newSelected });
};
