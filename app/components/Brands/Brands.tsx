import { useSearchParams } from "next/navigation";
import useSWR from "swr";

import { API_URL } from "constants/api";
import { Brand as BrandType } from "types";
import { fetcher } from "utils/fetcher";

import { Brand } from "./Brand/Brand";
import { BrandsEmpty } from "./BrandsEmpty/BrandsEmpty";
import styles from "./styles.module.css";

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
    return null;
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
