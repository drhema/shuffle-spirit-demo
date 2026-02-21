import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface ProductCardProps {
  name: string;
  price: string;
  oldPrice?: string;
  img: string;
  rating?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, price, oldPrice, img, rating = 4 }) => (
  <div className="flex-shrink-0 w-[46vw] min-w-[170px] sm:w-[200px] md:w-[240px] lg:w-[260px] xl:w-[280px] bg-white border-4 border-black p-3 lg:p-4 shadow-[6px_6px_0px_0px_#2DD4A8] hover:shadow-[3px_3px_0px_0px_#2DD4A8] hover:translate-x-[3px] hover:translate-y-[3px] transition-all">
    <div className="relative h-[160px] sm:h-[180px] md:h-[210px] lg:h-[240px] xl:h-[260px] border-4 border-black bg-gray-50 flex items-center justify-center mb-3 overflow-hidden">
      <img src={img} alt={name} className="w-full h-full object-cover" />
      <button className="absolute top-2 right-2 w-8 h-8 bg-white border-2 border-black flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
      </button>
    </div>
    <h4 className="text-sm lg:text-base font-black font-heading text-black leading-tight mb-2 line-clamp-2 min-h-[2.5rem]">{name}</h4>
    <div className="flex items-center gap-0.5 mb-2">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className={`w-3.5 h-3.5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
    <div className="flex items-baseline gap-2 mb-3">
      <span className="text-lg lg:text-xl font-bold text-[#42A5D6]">{price} <span className="text-xs">KWD</span></span>
      {oldPrice && <span className="text-xs text-gray-400 line-through">{oldPrice}</span>}
    </div>
    <button className="w-full py-2.5 bg-[#2DD4A8] hover:bg-[#1B2B5B] hover:text-white text-black font-black font-heading text-sm border-4 border-black transition-all">
      ADD TO CART
    </button>
  </div>
);

const lipCareProducts: ProductCardProps[] = [
  { name: 'Vaseline Rosy Lips Therapy', price: '15.50', oldPrice: '19.00', img: 'https://picsum.photos/seed/lip1/200/200', rating: 5 },
  { name: 'Labello Cherry Shine Lip Balm', price: '12.00', img: 'https://picsum.photos/seed/lip2/200/200', rating: 4 },
  { name: 'Nivea Lip Care Moisture', price: '14.00', oldPrice: '18.00', img: 'https://picsum.photos/seed/lip3/200/200', rating: 4 },
  { name: 'Blistex Medicated Lip Balm', price: '22.00', img: 'https://picsum.photos/seed/lip4/200/200', rating: 5 },
  { name: 'Carmex Classic Lip Balm', price: '18.50', oldPrice: '24.00', img: 'https://picsum.photos/seed/lip5/200/200', rating: 4 },
  { name: 'Burts Bees Lip Shimmer', price: '29.00', img: 'https://picsum.photos/seed/lip6/200/200', rating: 5 },
  { name: 'EOS Organic Lip Balm Sphere', price: '25.00', oldPrice: '32.00', img: 'https://picsum.photos/seed/lip7/200/200', rating: 4 },
];

const IndexSectionCustomComponents3: React.FC = () => {
  const [paused, setPaused] = useState(false);
  const duplicated = [...lipCareProducts, ...lipCareProducts];

  return (
    <section className="bg-[#F5F5F5] py-6 md:py-8">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between mb-4 md:mb-6">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-black font-heading text-[#1B2B5B] uppercase tracking-tight">Lip Care Offers</h3>
          <Link href="/category/skincare" className="px-4 py-2 md:px-6 bg-white text-[#1B2B5B] font-black font-heading text-xs md:text-sm border-4 border-black hover:bg-[#2DD4A8] transition-all hover:translate-x-1 hover:translate-y-1 shadow-[4px_4px_0px_0px_#000000] hover:shadow-[2px_2px_0px_0px_#000000]">
            SHOP NOW →
          </Link>
        </div>
      </div>
      <div
        className="overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={() => setPaused(true)}
        onTouchEnd={() => setPaused(false)}
      >
        <motion.div
          className="flex gap-4 px-4"
          animate={{ x: paused ? undefined : ['0%', '-50%'] }}
          transition={{
            x: {
              duration: 30,
              repeat: Infinity,
              ease: 'linear',
            },
          }}
          style={{ width: 'max-content' }}
        >
          {duplicated.map((p, i) => <ProductCard key={i} {...p} />)}
        </motion.div>
      </div>
    </section>
  );
};

export default IndexSectionCustomComponents3;
