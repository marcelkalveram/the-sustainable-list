import type { CriteriaMapFlattened } from "types";

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

export const toggleFilterFn =
  (selected: CriteriaMapFlattened, setSelected: Function) =>
  (toggledItem: string, type: string) => {
    const newSelected = selected;
    if (newSelected[type].includes(toggledItem)) {
      newSelected[type] = newSelected[type].filter(
        (item) => item !== toggledItem,
      );
    } else {
      newSelected[type].push(toggledItem);
    }
    window.scrollTo(0, 0);
    setSelected({ ...newSelected });
  };
