import React from 'react';
import Link from 'next/link';
import StarRating from './StarRating';

interface ProductCardProps {
  slug: string;
  name: string;
  brand: string;
  brandSlug: string;
  price: number;
  oldPrice?: number;
  img: string;
  rating: number;
  reviewCount: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  slug,
  name,
  brand,
  brandSlug,
  price,
  oldPrice,
  img,
  rating,
  reviewCount,
}) => {
  return (
    <div className="bg-white border-4 border-black p-3 lg:p-4 shadow-[6px_6px_0px_0px_#2DD4A8] hover:shadow-[3px_3px_0px_0px_#2DD4A8] hover:translate-x-[3px] hover:translate-y-[3px] transition-all">
      {/* Image */}
      <div className="relative aspect-square border-4 border-black bg-gray-50 overflow-hidden mb-3">
        <Link href={`/product/${slug}`}>
          <img
            src={img}
            alt={name}
            className="w-full h-full object-cover"
          />
        </Link>
        <button className="absolute top-2 right-2 w-8 h-8 bg-white border-2 border-black flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>
      </div>

      {/* Brand */}
      <Link
        href={`/brand/${brandSlug}`}
        className="text-xs font-bold text-[#42A5D6] hover:underline"
      >
        {brand}
      </Link>

      {/* Product Name */}
      <Link href={`/product/${slug}`}>
        <h4 className="text-sm lg:text-base font-black font-heading text-black leading-tight mb-2 mt-1 line-clamp-2 min-h-[2.5rem] hover:text-[#42A5D6] transition-colors">
          {name}
        </h4>
      </Link>

      {/* Rating */}
      <div className="flex items-center gap-1.5 mb-2">
        <StarRating rating={rating} size="sm" />
        <span className="text-xs text-gray-500 font-bold">({reviewCount})</span>
      </div>

      {/* Price */}
      <div className="flex items-baseline gap-2 mb-3">
        <span className="text-lg lg:text-xl font-bold text-[#42A5D6]">
          {price.toFixed(2)} <span className="text-xs">KWD</span>
        </span>
        {oldPrice && (
          <span className="text-xs text-gray-400 line-through">
            {oldPrice.toFixed(2)} KWD
          </span>
        )}
      </div>

      {/* Add to Cart */}
      <button className="w-full py-2.5 bg-[#2DD4A8] hover:bg-[#1B2B5B] hover:text-white text-black font-black font-heading text-sm border-4 border-black transition-all uppercase">
        ADD TO CART
      </button>
    </div>
  );
};

export default ProductCard;
