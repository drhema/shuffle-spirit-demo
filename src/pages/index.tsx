import React from 'react';
import Head from 'next/head';
import IndexSectionCustomComponents1 from '../components/custom-components/IndexSectionCustomComponents1';
import IndexSectionCustomComponents2 from '../components/custom-components/IndexSectionCustomComponents2';
import IndexSectionCustomComponents3 from '../components/custom-components/IndexSectionCustomComponents3';
import IndexSectionCustomComponents4 from '../components/custom-components/IndexSectionCustomComponents4';
import IndexSectionCustomComponents5 from '../components/custom-components/IndexSectionCustomComponents5';
import IndexSectionCustomComponents6 from '../components/custom-components/IndexSectionCustomComponents6';
import IndexSectionCustomComponents7 from '../components/custom-components/IndexSectionCustomComponents7';
import IndexSectionCustomComponents8 from '../components/custom-components/IndexSectionCustomComponents8';

const Index: React.FC = () => {
  return (
    <>
      <Head>
        <title>Spirit Healthcare — Your Health, Our Priority</title>
        <meta name="description" content="Spirit Healthcare — Discover top deals on vitamins, skincare, and everyday healthcare essentials." />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
      </Head>
      {/* 1. Sticky Header + Category Nav */}
      <IndexSectionCustomComponents1 />
      {/* 2. Hero Carousel + Category Icons + Promo Banners */}
      <IndexSectionCustomComponents2 />
      {/* 3. Lip Care Offers - Horizontal Product Scroll */}
      <IndexSectionCustomComponents3 />
      {/* 4. Full-width Promo Banner + Hand Washes + Refresh + More Banners */}
      <IndexSectionCustomComponents4 />
      {/* 5. Shop by Brands - Purple Gradient */}
      <IndexSectionCustomComponents5 />
      {/* 6. More Promo Banners + Vitamins + Skincare Carousels */}
      <IndexSectionCustomComponents6 />
      {/* 7. All Categories Directory Grid */}
      <IndexSectionCustomComponents7 />
      {/* 8. Footer - Copyright + Payments + Socials */}
      <IndexSectionCustomComponents8 />
    </>
  );
};

export default Index;
