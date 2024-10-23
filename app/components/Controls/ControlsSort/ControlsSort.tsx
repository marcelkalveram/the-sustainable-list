import { DirectionValues, SortValues } from "types";

import { ControlsSortButton } from "./ControlsSortButton/ControlsSortButton";
import styles from "./styles.module.css";

type Props = {
  sort: SortValues;
  direction: DirectionValues;
  toggleSort: (sort: SortValues) => void;
};

export const ControlsSort = ({ sort, direction, toggleSort }: Props) => {
  const sortAz =
    sort === SortValues.ALPHABETICAL ? direction : DirectionValues.ASC;
  const sortPrice = sort === SortValues.PRICE ? direction : DirectionValues.ASC;

  return (
    <div className={styles.controlsSort}>
      <ControlsSortButton onToggle={() => toggleSort(SortValues.ALPHABETICAL)}>
        {sortAz === DirectionValues.ASC ? "A-Z" : "Z-A"}
      </ControlsSortButton>
      <ControlsSortButton onToggle={() => toggleSort(SortValues.PRICE)}>
        {sortPrice === DirectionValues.ASC ? "$" : "$$$"}
      </ControlsSortButton>
    </div>
  );
};
