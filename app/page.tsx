"use client";
import React, { Suspense, useState } from "react";

import { Brands } from "./components/Brands/Brands";
import { Controls } from "./components/Controls/Controls";
import { Filters } from "./components/Filters/Filters";
import { Main } from "./components/Main/Main";

export default function Index() {
  const [showFilters, setShowFilters] = useState<boolean>(false);

  return (
    <>
      <Filters showFilters={showFilters} setShowFilters={setShowFilters} />
      <Main>
        <Suspense>
          <Controls setShowFilters={setShowFilters} />
        </Suspense>
        <Suspense>
          <Brands />
        </Suspense>
      </Main>
    </>
  );
}
