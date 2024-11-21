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
  const { data, isLoading, isValidating } = useSWR<{ brands: BrandType[] }>(
    `${API_URL}?${searchParams?.toString()}`,
    fetcher,
    {
      suspense: true,
      fallbackData: { brands: [] },
      keepPreviousData: true,
    },
  );

  const brands = data?.brands;
  const isInitialLoad = !brands?.length && isValidating;

  if (isInitialLoad) {
    return <BrandsEmpty title="Loading brands..." description="" />;
  }

  if (!brands || brands?.length === 0) {
    return <BrandsEmpty />;
  }

  return (
    <div className={styles.brands} style={isLoading ? { opacity: 0.5 } : {}}>
      {brands.map((brand) => (
        <Brand key={brand.id} brand={brand} />
      ))}
    </div>
  );
};
