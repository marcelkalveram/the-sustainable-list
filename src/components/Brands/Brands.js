import React from 'react';
import { brandsStyles } from './styles.js';
import { Brand } from './Brand/Brand';

export function Brands({ brands }) {
  return (
    <>
      <section className="brands">
        {brands.map(brand => {
          return <Brand key={brand.sys.id} brand={brand} />;
        })}
      </section>
      <style jsx>{brandsStyles}</style>
    </>
  );
}
