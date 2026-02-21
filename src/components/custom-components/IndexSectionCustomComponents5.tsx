import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const brands = [
  { name: 'Garnier', slug: 'garnier', img: 'https://picsum.photos/seed/garnier/200/80' },
  { name: 'Bioderma', slug: 'bioderma', img: 'https://picsum.photos/seed/bioderma/200/80' },
  { name: 'Eucerin', slug: 'eucerin', img: 'https://picsum.photos/seed/eucerin/200/80' },
  { name: 'Braun', slug: 'braun', img: 'https://picsum.photos/seed/braun/200/80' },
  { name: 'Cetaphil', slug: 'cetaphil', img: 'https://picsum.photos/seed/cetaphil/200/80' },
  { name: 'CeraVe', slug: 'cerave', img: 'https://picsum.photos/seed/cerave/200/80' },
  { name: 'NIVEA', slug: 'nivea', img: 'https://picsum.photos/seed/nivea/200/80' },
  { name: 'Neutrogena', slug: 'neutrogena', img: 'https://picsum.photos/seed/neutrogena/200/80' },
];

const IndexSectionCustomComponents5: React.FC = () => {
  const [paused, setPaused] = useState(false);

  // Duplicate brands for seamless loop
  const duplicatedBrands = [...brands, ...brands];

  return (
    <section className="py-8 md:py-10 bg-[#1B2B5B] border-y-4 border-black">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-black font-heading text-white uppercase tracking-tight">Shop by Brands</h2>
          <Link href="/brands" className="px-4 py-2 md:px-6 bg-white text-[#1B2B5B] font-black font-heading text-xs md:text-sm border-4 border-black hover:bg-[#2DD4A8] transition-all hover:translate-x-1 hover:translate-y-1 shadow-[4px_4px_0px_0px_#2DD4A8] hover:shadow-[2px_2px_0px_0px_#2DD4A8]">VIEW ALL →</Link>
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
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            },
          }}
          style={{ width: 'max-content' }}
        >
          {duplicatedBrands.map((brand, i) => (
            <Link
              key={i}
              href={`/brand/${brand.slug}`}
              className="flex-shrink-0 w-36 md:w-40 lg:w-48 bg-white border-4 border-black p-4 flex items-center justify-center h-16 md:h-20 shadow-[6px_6px_0px_0px_#42A5D6] hover:shadow-[3px_3px_0px_0px_#42A5D6] hover:translate-x-[3px] hover:translate-y-[3px] transition-all"
            >
              <img src={brand.img} alt={brand.name} className="max-h-full max-w-full object-contain" />
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default IndexSectionCustomComponents5;
