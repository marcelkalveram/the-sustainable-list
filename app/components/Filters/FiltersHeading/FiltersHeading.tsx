import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/16/solid";
import React from "react";

import styles from "./styles.module.css";

interface Props {
  hidden: string[];
  toggleHidden: (name: string) => void;
  name: string;
  title: string;
}
export const FiltersHeading = ({
  hidden,
  toggleHidden,
  name,
  title,
}: Props) => {
  const isHidden = hidden.includes(name);
  const Icon = isHidden ? ChevronUpIcon : ChevronDownIcon;

  return (
    <h3
      className={`${styles.filtersHeading} ${isHidden ? styles.filtersHeadingHidden : ""}`}
      onClick={() => toggleHidden(name)}
    >
      {title}
      <Icon width={16} height={16} className={styles.filtersHeadingIcon} />
    </h3>
  );
};
