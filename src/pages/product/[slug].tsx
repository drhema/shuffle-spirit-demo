import React, { useState } from 'react';
import type { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import Layout from '@/src/components/shared/Layout';
import Breadcrumb from '@/src/components/shared/Breadcrumb';
import StarRating from '@/src/components/shared/StarRating';
import { allProducts, detailedProduct, sampleReviews } from '@/src/data/products';
import type { Product, Review } from '@/src/types';

interface ProductPageProps {
  product: Product;
  reviews: Review[];
  relatedProducts: Product[];
}

const TABS = ['Description', 'Usage & Dosage', 'Ingredients', 'Warnings'];

const ProductPage: React.FC<ProductPageProps> = ({ product, reviews, relatedProducts }) => {
  const productImages = product.images && product.images.length > 0 ? product.images : [product.img];
  const [selectedImage, setSelectedImage] = useState(productImages[0]);
  const [qty, setQty] = useState(1);
  const [activeTab, setActiveTab] = useState(0);

  const savePercent = product.oldPrice
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : 0;

  const starDistribution = [0, 0, 0, 0, 0]; // index 0 = 1 star, 4 = 5 star
  reviews.forEach((r) => {
    if (r.rating >= 1 && r.rating <= 5) starDistribution[r.rating - 1]++;
  });

  const tabContent = [
    product.description,
    product.usage || 'No usage information available for this product.',
    product.ingredients || 'No ingredient information available for this product.',
    product.warnings || 'No warnings available for this product.',
  ];

  return (
    <Layout>
      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: product.category, href: `/category/${product.categorySlug}` },
          { label: product.name },
        ]}
      />

      <div className="container px-4 mx-auto py-6 md:py-10">
        {/* === TOP: Image Gallery + Product Info === */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 mb-10">
          {/* Image Gallery */}
          <div className="lg:w-1/2">
            <div className="border-4 border-black bg-white p-4 shadow-[8px_8px_0px_0px_#2DD4A8] mb-4">
              <img
                src={selectedImage}
                alt={product.name}
                className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-contain"
              />
            </div>
            <div className="flex gap-3">
              {productImages.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(img)}
                  className={`w-16 h-16 md:w-20 md:h-20 border-4 bg-white p-1 transition-colors ${
                    selectedImage === img ? 'border-[#2DD4A8]' : 'border-black'
                  }`}
                >
                  <img src={img} alt={`${product.name} thumbnail ${i + 1}`} className="w-full h-full object-contain" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:w-1/2">
            {/* Brand */}
            <Link
              href={`/brand/${product.brandSlug}`}
              className="text-sm font-black text-[#42A5D6] uppercase tracking-wider hover:underline"
            >
              {product.brand}
            </Link>

            {/* Name */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-black font-heading text-[#1B2B5B] uppercase mt-2 mb-3">
              {product.name}
            </h1>

            {/* Rating Row */}
            <div className="flex items-center flex-wrap gap-3 mb-4">
              <StarRating rating={product.rating} size="md" />
              <span className="text-sm text-gray-500 font-bold">({product.reviewCount} reviews)</span>
              <span className="text-xs text-gray-400 font-bold">SKU: {product.sku}</span>
            </div>

            {/* Price Box */}
            <div className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_#000000] mb-4">
              <div className="flex items-center flex-wrap gap-3 mb-2">
                <span className="text-3xl md:text-4xl font-black text-[#1B2B5B]">
                  {product.price.toFixed(2)} <span className="text-base font-bold">KWD</span>
                </span>
                {product.oldPrice && (
                  <span className="text-lg text-gray-400 line-through font-bold">
                    {product.oldPrice.toFixed(2)} KWD
                  </span>
                )}
              </div>
              <div className="flex items-center flex-wrap gap-2">
                {product.loyaltyPoints && (
                  <span className="bg-[#1B2B5B] text-white text-xs font-black px-3 py-1 border-2 border-black">
                    Earn {product.loyaltyPoints} Loyalty Points
                  </span>
                )}
                {product.oldPrice && savePercent > 0 && (
                  <span className="bg-red-500 text-white text-xs font-black px-3 py-1 border-2 border-black">
                    SAVE {savePercent}%
                  </span>
                )}
              </div>
            </div>

            {/* Quantity + Cart Row */}
            <div className="flex gap-3 mb-6">
              {/* Qty Selector */}
              <div className="flex items-center border-4 border-black">
                <button
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="w-10 h-10 md:w-12 md:h-12 bg-[#F5F5F5] hover:bg-[#2DD4A8] border-r-4 border-black font-black text-lg transition-colors flex items-center justify-center"
                >
                  -
                </button>
                <span className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center font-black text-[#1B2B5B] text-lg">
                  {qty}
                </span>
                <button
                  onClick={() => setQty((q) => q + 1)}
                  className="w-10 h-10 md:w-12 md:h-12 bg-[#F5F5F5] hover:bg-[#2DD4A8] border-l-4 border-black font-black text-lg transition-colors flex items-center justify-center"
                >
                  +
                </button>
              </div>

              {/* Add to Cart */}
              <button className="flex-1 py-3 md:py-4 bg-[#2DD4A8] text-black font-black font-heading text-lg border-4 border-black hover:bg-[#1B2B5B] hover:text-white shadow-[6px_6px_0px_0px_#000000] uppercase transition-all">
                ADD TO CART
              </button>

              {/* Wishlist */}
              <button className="w-12 h-12 md:w-14 md:h-14 border-4 border-black bg-white hover:bg-red-50 transition-colors flex items-center justify-center">
                <svg className="w-5 h-5 text-gray-400 hover:text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
              {/* 2hr Delivery */}
              <div className="flex flex-col items-center gap-2 p-3 bg-white border-4 border-black">
                <svg className="w-6 h-6 text-[#2DD4A8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                </svg>
                <span className="text-xs font-black font-heading text-[#1B2B5B] text-center">2hr Delivery</span>
              </div>

              {/* Temperature Controlled */}
              <div className="flex flex-col items-center gap-2 p-3 bg-white border-4 border-black">
                <svg className="w-6 h-6 text-[#2DD4A8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8V4m0 4a2 2 0 100 4m0-4a2 2 0 110 4m-2 4h4m-2 0v4m-6-4a6 6 0 1112 0H6z" />
                </svg>
                <span className="text-xs font-black font-heading text-[#1B2B5B] text-center">Temperature Controlled</span>
              </div>

              {/* Secure Payment */}
              <div className="flex flex-col items-center gap-2 p-3 bg-white border-4 border-black">
                <svg className="w-6 h-6 text-[#2DD4A8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="text-xs font-black font-heading text-[#1B2B5B] text-center">Secure Payment</span>
              </div>

              {/* Genuine Brands */}
              <div className="flex flex-col items-center gap-2 p-3 bg-white border-4 border-black">
                <svg className="w-6 h-6 text-[#2DD4A8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-xs font-black font-heading text-[#1B2B5B] text-center">Genuine Brands</span>
              </div>
            </div>

            {/* Call Pharmacist CTA */}
            <div className="flex items-center gap-3 p-4 bg-[#1B2B5B] border-4 border-black shadow-[4px_4px_0px_0px_#42A5D6]">
              <div className="w-12 h-12 bg-[#2DD4A8] border-2 border-black flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-white font-black font-heading text-sm uppercase">Call Our Pharmacist</p>
                <p className="text-gray-300 text-xs">Need advice? Speak to a licensed pharmacist now.</p>
              </div>
            </div>
          </div>
        </div>

        {/* === TABS SECTION === */}
        <div className="mb-10">
          {/* Tab Bar */}
          <div className="flex border-4 border-black border-b-0">
            {TABS.map((tab, i) => (
              <button
                key={tab}
                onClick={() => setActiveTab(i)}
                className={`flex-1 py-3 md:py-4 font-black font-heading text-xs md:text-sm uppercase transition-colors ${
                  i < TABS.length - 1 ? 'border-r-4 border-black' : ''
                } ${
                  activeTab === i
                    ? 'bg-[#2DD4A8] text-black'
                    : 'bg-white text-[#1B2B5B] hover:bg-[#F5F5F5]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Content Panel */}
          <div className="border-4 border-black bg-white p-6 md:p-8">
            <div
              className={`text-sm md:text-base leading-relaxed ${
                activeTab === 3 ? 'text-red-700 font-bold' : 'text-gray-700'
              }`}
            >
              {tabContent[activeTab]}
            </div>
          </div>
        </div>

        {/* === RELATED PRODUCTS === */}
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-black font-heading text-[#1B2B5B] uppercase mb-6">
            Related Products
          </h2>
          <div
            className="flex gap-4 overflow-x-auto pb-4"
            style={{ scrollbarWidth: 'none' }}
          >
            {relatedProducts.map((rp) => (
              <div
                key={rp.slug}
                className="flex-shrink-0 w-[46vw] min-w-[170px] sm:w-[200px] md:w-[240px] lg:w-[260px] xl:w-[280px] bg-white border-4 border-black p-3 shadow-[6px_6px_0px_0px_#2DD4A8] hover:shadow-[3px_3px_0px_0px_#2DD4A8] hover:translate-x-[3px] hover:translate-y-[3px] transition-all"
              >
                {/* Image */}
                <div className="relative aspect-square border-4 border-black bg-gray-50 overflow-hidden mb-3">
                  <Link href={`/product/${rp.slug}`}>
                    <img src={rp.img} alt={rp.name} className="w-full h-full object-cover" />
                  </Link>
                </div>

                {/* Brand */}
                <Link
                  href={`/brand/${rp.brandSlug}`}
                  className="text-xs font-bold text-[#42A5D6] hover:underline"
                >
                  {rp.brand}
                </Link>

                {/* Name */}
                <Link href={`/product/${rp.slug}`}>
                  <h4 className="text-sm font-black font-heading text-black leading-tight mb-2 mt-1 line-clamp-2 min-h-[2.5rem] hover:text-[#42A5D6] transition-colors">
                    {rp.name}
                  </h4>
                </Link>

                {/* Rating */}
                <div className="flex items-center gap-1.5 mb-2">
                  <StarRating rating={rp.rating} size="sm" />
                  <span className="text-xs text-gray-500 font-bold">({rp.reviewCount})</span>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-lg font-bold text-[#42A5D6]">
                    {rp.price.toFixed(2)} <span className="text-xs">KWD</span>
                  </span>
                  {rp.oldPrice && (
                    <span className="text-xs text-gray-400 line-through">
                      {rp.oldPrice.toFixed(2)} KWD
                    </span>
                  )}
                </div>

                {/* Add to Cart */}
                <button className="w-full py-2.5 bg-[#2DD4A8] hover:bg-[#1B2B5B] hover:text-white text-black font-black font-heading text-sm border-4 border-black transition-all uppercase">
                  ADD TO CART
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* === REVIEWS SECTION === */}
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-black font-heading text-[#1B2B5B] uppercase mb-6">
            Customer Reviews
          </h2>

          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left: Star Breakdown */}
            <div className="lg:w-1/3">
              <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_#2DD4A8]">
                <div className="text-center mb-4">
                  <span className="text-5xl font-black text-[#1B2B5B]">{product.rating}</span>
                  <span className="text-xl font-black text-gray-400">/5</span>
                </div>
                <div className="flex justify-center mb-3">
                  <StarRating rating={product.rating} size="lg" />
                </div>
                <p className="text-sm text-gray-500 font-bold text-center mb-6">
                  Based on {product.reviewCount} reviews
                </p>

                {/* Star Distribution */}
                <div className="space-y-2">
                  {[5, 4, 3, 2, 1].map((star) => {
                    const count = starDistribution[star - 1];
                    const pct = reviews.length > 0 ? (count / reviews.length) * 100 : 0;
                    return (
                      <div key={star} className="flex items-center gap-2">
                        <span className="text-xs font-black text-[#1B2B5B] w-3">{star}</span>
                        <svg className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <div className="flex-1 h-3 bg-[#F5F5F5] border-2 border-black overflow-hidden">
                          <div
                            className="h-full bg-[#2DD4A8]"
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                        <span className="text-xs font-bold text-gray-500 w-5 text-right">{count}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right: Review Cards */}
            <div className="lg:w-2/3 space-y-4">
              {reviews.map((review) => (
                <div key={review.id} className="bg-white border-4 border-black p-5">
                  {/* Header */}
                  <div className="flex items-center flex-wrap gap-3 mb-3">
                    <div className="w-8 h-8 bg-[#42A5D6] border-2 border-black flex items-center justify-center text-white font-black text-sm">
                      {review.author.charAt(0)}
                    </div>
                    <span className="font-black text-sm text-[#1B2B5B]">{review.author}</span>
                    {review.verified && (
                      <span className="bg-[#2DD4A8] text-black text-xs font-black px-2 py-0.5 border-2 border-black">
                        VERIFIED
                      </span>
                    )}
                    <span className="text-xs text-gray-400 font-bold ml-auto">{review.date}</span>
                  </div>

                  {/* Stars */}
                  <div className="mb-2">
                    <StarRating rating={review.rating} size="sm" />
                  </div>

                  {/* Title + Body */}
                  <p className="font-black text-sm text-[#1B2B5B] mb-1">{review.title}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{review.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { slug: detailedProduct.slug } }],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<ProductPageProps> = async ({ params }) => {
  const slug = params?.slug as string;

  // For the demo, use detailedProduct; fall back to allProducts lookup
  let product: Product | undefined;
  if (slug === detailedProduct.slug) {
    product = detailedProduct;
  } else {
    product = allProducts.find((p) => p.slug === slug);
  }

  if (!product) {
    return { notFound: true };
  }

  // Grab 6 random related products (excluding current)
  const otherProducts = allProducts.filter((p) => p.slug !== slug);
  const shuffled = [...otherProducts].sort(() => 0.5 - Math.random());
  const relatedProducts = shuffled.slice(0, 6);

  return {
    props: {
      product,
      reviews: sampleReviews,
      relatedProducts,
    },
  };
};

export default ProductPage;
