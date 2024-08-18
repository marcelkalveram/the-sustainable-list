export const toggleHiddenFn =
  (hidden: string[], setHidden: Function) => (toggledItem: string) => {
    let newHidden = hidden;
    if (!newHidden.includes(toggledItem)) {
      newHidden.push(toggledItem);
    } else {
      newHidden = newHidden.filter((item) => toggledItem !== item);
    }
    setHidden([...newHidden]);
  };
