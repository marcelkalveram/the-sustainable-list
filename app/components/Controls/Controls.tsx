"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

import { DirectionValues, SortType, SortValues } from "constants/enums";

import { ControlsBrandsCount } from "./ControlsBrandsCount/ControlsBrandsCount";
import { ControlsMobile } from "./ControlsMobile/ControlsMobile";
import { ControlsSearch } from "./ControlsSearch/ControlsSearch";
import { ControlsSort } from "./ControlsSort/ControlsSort";
import { createSearchQueryParams } from "./helpers/createSearchQueryParams";
import { createSortQueryParams } from "./helpers/createSortQueryParams";
import styles from "./styles.module.css";

type Props = {
  setShowFilters: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Controls = ({ setShowFilters }: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const toggleFilters = () => {
    setShowFilters(true);
    document.body.classList.toggle("lock-viewport");
  };

  const toggleSort = (sortType: SortValues) => {
    const params = createSortQueryParams(searchParams, sortType);
    router.push(`${pathname}?${params}`);
  };

  const sort = (searchParams?.get(SortType.SORT) ||
    SortValues.ALPHABETICAL) as SortValues;
  const direction = (searchParams?.get(SortType.DIRECTION) ||
    DirectionValues.ASC) as DirectionValues;

  const triggerSearch = (searchTerm: string) => {
    const params = createSearchQueryParams(searchParams, searchTerm);
    router.push(`${pathname}?${params}`);
  };

  return (
    <div className={styles.controls}>
      <ControlsBrandsCount />
      <ControlsSort sort={sort} direction={direction} toggleSort={toggleSort} />
      <ControlsSearch onChange={triggerSearch} />
      <ControlsMobile onClick={toggleFilters} />
    </div>
  );
};
