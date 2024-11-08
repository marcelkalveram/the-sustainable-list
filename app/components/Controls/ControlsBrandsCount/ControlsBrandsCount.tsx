import { useSearchParams } from "next/navigation";
import React from "react";
import useSWR from "swr";

import { API_URL } from "constants/api";
import { Brand as BrandType } from "types";
import { fetcher } from "utils/fetcher";

import styles from "./styles.module.css";

export const ControlsBrandsCount = () => {
  const searchParams = useSearchParams();
  const { data, isLoading } = useSWR<{
    brands: BrandType[];
    totalCount: number;
  }>(`${API_URL}?${searchParams?.toString()}`, fetcher, {
    suspense: true,
    fallbackData: { brands: [], totalCount: 0 },
  });

  return (
    <p className={styles.controlsBrandsCount}>
      Showing <b>{isLoading ? "___" : data?.brands.length}</b> out of{" "}
      {data?.totalCount} sustainable brands
    </p>
  );
};
