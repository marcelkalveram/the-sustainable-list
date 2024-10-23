export const toggleHidden =
  (
    hidden: string[],
    setHidden: React.Dispatch<React.SetStateAction<string[]>>,
  ) =>
  (toggledItem: string) => {
    let newHidden = hidden;
    if (!newHidden.includes(toggledItem)) {
      newHidden.push(toggledItem);
    } else {
      newHidden = newHidden.filter((item) => toggledItem !== item);
    }
    setHidden([...newHidden]);
  };
