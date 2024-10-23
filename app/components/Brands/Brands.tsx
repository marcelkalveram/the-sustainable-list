import { useSearchParams } from "next/navigation";
import useSWR from "swr";

import { Brand as BrandType } from "types";

import { Brand } from "./Brand/Brand";
import { BrandsEmpty } from "./BrandsEmpty/BrandsEmpty";
import styles from "./styles.module.css";

const API_URL = "/api/brands";

const fetcher = (...args: [string, RequestInit?]) =>
  fetch(...args).then((res) => res.json());

export const Brands = () => {
  const searchParams = useSearchParams();
  const { data, isLoading } = useSWR<{ brands: BrandType[] }>(
    `${API_URL}?${searchParams?.toString()}`,
    fetcher,
    {
      suspense: true,
      fallbackData: { brands: [] },
    },
  );

  const brands = data?.brands;

  if (isLoading) {
    return <p>Loading brands...</p>;
  }

  return brands?.length ? (
    <div className={styles.brands}>
      {brands.map((brand) => (
        <Brand key={brand.id} brand={brand} />
      ))}
    </div>
  ) : (
    <BrandsEmpty />
  );
};
