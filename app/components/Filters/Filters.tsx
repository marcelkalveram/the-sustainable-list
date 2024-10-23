"use client";

import { XMarkIcon } from "@heroicons/react/24/solid";
import React, { Suspense, useState } from "react";

import { MobileMenuButton } from "components/MobileMenuButton/MobileMenuButton";

import criteriaMap from "/public/shared/criteriaMap";
import data from "/public/data/index.json";

import { FiltersButtonsMobile } from "./FiltersButtonsMobile/FiltersButtonsMobile";
import { FiltersCheckboxes } from "./FiltersCheckboxes/FiltersCheckboxes";
import { FiltersHeading } from "./FiltersHeading/FiltersHeading";
import { clearFilters } from "./helpers/clearFilters";
import { toggleHidden } from "./helpers/toggleHidden";
import styles from "./styles.module.css";

type Props = {
  showFilters: boolean;
  setShowFilters: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Filters = ({ showFilters, setShowFilters }: Props) => {
  const [hidden, setHidden] = useState<string[]>([]);
  const toggleHiddenFn = toggleHidden(hidden, setHidden);

  const toggleFilters = () => {
    setShowFilters(!showFilters);
    document.body.classList.toggle("lock-viewport");
  };

  const filters = data.filters;

  return (
    <>
      {showFilters && (
        <MobileMenuButton
          Icon={XMarkIcon}
          onClick={toggleFilters}
          elevated={true}
        />
      )}
      <div
        className={`${styles.filters} ${showFilters ? styles.filtersVisibleMobile : ""}`}
      >
        {criteriaMap.data.map((criteria) => (
          <React.Fragment key={criteria.title}>
            <FiltersHeading
              hidden={hidden}
              toggleHidden={toggleHiddenFn}
              title={criteria.title}
              name={criteria.name}
            />

            {hidden.includes(criteria.name) ? null : (
              <Suspense fallback={<div>Loading...</div>}>
                {/* @ts-expect-error: needs to be typed properly */}
                <FiltersCheckboxes
                  name={criteria.name}
                  filters={filters[criteria.name] || []}
                />
              </Suspense>
            )}
          </React.Fragment>
        ))}
      </div>

      {showFilters && (
        <FiltersButtonsMobile
          toggleFilters={toggleFilters}
          clearFilters={clearFilters}
        />
      )}
    </>
  );
};
