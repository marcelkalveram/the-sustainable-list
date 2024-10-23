import styles from "./styles.module.css";

type Props = {
  checked: boolean;
  label: string;
  toggleFilter: () => void;
};

export const FiltersCheckbox = ({ checked, label, toggleFilter }: Props) => (
  <label className={styles.filtersCheckbox}>
    <input type="checkbox" checked={checked} onChange={toggleFilter} />
    <span className={styles.filtersCheckboxLabel}>{label}</span>
  </label>
);
