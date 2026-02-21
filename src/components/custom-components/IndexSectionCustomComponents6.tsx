import React from 'react';
import Link from 'next/link';

const ProductCard: React.FC<{ name: string; price: string; oldPrice?: string; img: string }> = ({ name, price, oldPrice, img }) => (
  <div className="flex-shrink-0 w-[46vw] min-w-[170px] sm:w-[200px] md:w-[240px] lg:w-[260px] xl:w-[280px] bg-white border-4 border-black p-3 lg:p-4 shadow-[6px_6px_0px_0px_#2DD4A8] hover:shadow-[3px_3px_0px_0px_#2DD4A8] hover:translate-x-[3px] hover:translate-y-[3px] transition-all">
    <div className="relative h-[160px] sm:h-[180px] md:h-[210px] lg:h-[240px] xl:h-[260px] border-4 border-black bg-gray-50 flex items-center justify-center mb-3 overflow-hidden">
      <img src={img} alt={name} className="w-full h-full object-cover" />
      <button className="absolute top-2 right-2 w-8 h-8 bg-white border-2 border-black flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
      </button>
    </div>
    <h4 className="text-sm lg:text-base font-black font-heading text-black leading-tight mb-2 line-clamp-2 min-h-[2.5rem]">{name}</h4>
    <div className="flex items-center gap-0.5 mb-2">
      {[...Array(5)].map((_, j) => (
        <svg key={j} className={`w-3.5 h-3.5 ${j < 4 ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
      ))}
    </div>
    <div className="flex items-baseline gap-2 mb-3">
      <span className="text-lg lg:text-xl font-bold text-[#42A5D6]">{price} <span className="text-xs">KWD</span></span>
      {oldPrice && <span className="text-xs text-gray-400 line-through">{oldPrice}</span>}
    </div>
    <button className="w-full py-2.5 bg-[#2DD4A8] hover:bg-[#1B2B5B] hover:text-white text-black font-black font-heading text-sm border-4 border-black transition-all">ADD TO CART</button>
  </div>
);

const IndexSectionCustomComponents6: React.FC = () => {
  return (
    <section className="bg-[#F5F5F5] py-8">
      <div className="container px-4 mx-auto">
        {/* Two promo banners */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <Link href="/category/baby-care" className="relative border-4 border-black overflow-hidden shadow-[6px_6px_0px_0px_#2DD4A8] md:shadow-[8px_8px_0px_0px_#2DD4A8] hover:shadow-[4px_4px_0px_0px_#2DD4A8] hover:translate-x-[4px] hover:translate-y-[4px] transition-all" style={{ minHeight: '180px' }}>
            <img src="https://picsum.photos/seed/babyfood2/700/400" alt="Baby Food" className="w-full h-full object-cover absolute inset-0" />
            <div className="relative z-10 p-5 md:p-8 bg-gradient-to-r from-[#2DD4A8]/90 to-transparent h-full flex flex-col justify-center min-h-[180px] md:min-h-[220px]">
              <h3 className="text-2xl md:text-3xl font-black font-heading text-[#1B2B5B] mb-1 md:mb-2 uppercase">Baby Bottle</h3>
              <p className="text-[#1B2B5B] font-bold text-xs md:text-sm mb-3 md:mb-4">Trusted baby food and formula</p>
              <span className="inline-block px-5 py-2 bg-[#1B2B5B] text-white font-black font-heading border-4 border-black w-fit text-sm">SHOP NOW</span>
            </div>
          </Link>
          <Link href="/category/fragrances" className="relative border-4 border-black overflow-hidden shadow-[6px_6px_0px_0px_#1B2B5B] md:shadow-[8px_8px_0px_0px_#1B2B5B] hover:shadow-[4px_4px_0px_0px_#1B2B5B] hover:translate-x-[4px] hover:translate-y-[4px] transition-all" style={{ minHeight: '180px' }}>
            <img src="https://picsum.photos/seed/scents1/700/400" alt="Iconic Scents" className="w-full h-full object-cover absolute inset-0" />
            <div className="relative z-10 p-5 md:p-8 bg-gradient-to-l from-[#1B2B5B]/80 to-transparent h-full flex flex-col justify-center items-end min-h-[180px] md:min-h-[220px]">
              <h3 className="text-2xl md:text-3xl font-black font-heading text-white mb-1 md:mb-2 uppercase text-right">Iconic Scents</h3>
              <p className="text-white font-bold text-xs md:text-sm mb-3 md:mb-4 text-right">Discover premium fragrances</p>
              <span className="inline-block px-5 py-2 bg-[#42A5D6] text-black font-black font-heading border-4 border-black w-fit text-sm">SHOP NOW</span>
            </div>
          </Link>
        </div>

        {/* Vitamins */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4 md:mb-6">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-black font-heading text-[#1B2B5B] uppercase tracking-tight">Vitamins &amp; Supplements</h3>
            <Link href="/category/vitamins-supplements" className="px-4 py-2 md:px-6 bg-white text-[#1B2B5B] font-black font-heading text-xs md:text-sm border-4 border-black hover:bg-[#2DD4A8] transition-all hover:translate-x-1 hover:translate-y-1 shadow-[4px_4px_0px_0px_#000000] hover:shadow-[2px_2px_0px_0px_#000000]">SHOP NOW →</Link>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4" style={{ scrollbarWidth: 'none' }}>
            {[
              { name: 'Centrum Adults Multivitamin', price: '89.00', oldPrice: '110.00', img: 'https://picsum.photos/seed/vit1/200/200' },
              { name: 'Nature Made Vitamin D3', price: '45.00', img: 'https://picsum.photos/seed/vit2/200/200' },
              { name: 'NOW Omega-3 Fish Oil', price: '55.00', oldPrice: '72.00', img: 'https://picsum.photos/seed/vit3/200/200' },
              { name: 'Solgar Vitamin C 1000mg', price: '62.00', img: 'https://picsum.photos/seed/vit4/200/200' },
              { name: 'Garden of Life Probiotics', price: '120.00', oldPrice: '150.00', img: 'https://picsum.photos/seed/vit5/200/200' },
              { name: "Alive! Women's Multi Gummies", price: '75.00', img: 'https://picsum.photos/seed/vit6/200/200' },
              { name: 'Nordic Naturals Ultimate Omega', price: '95.00', oldPrice: '115.00', img: 'https://picsum.photos/seed/vit7/200/200' },
            ].map((p, i) => <ProductCard key={i} {...p} />)}
          </div>
        </div>

        {/* Skincare */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-4 md:mb-6">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-black font-heading text-[#1B2B5B] uppercase tracking-tight">Skincare Essentials</h3>
            <Link href="/category/skincare" className="px-4 py-2 md:px-6 bg-white text-[#1B2B5B] font-black font-heading text-xs md:text-sm border-4 border-black hover:bg-[#42A5D6] hover:text-white transition-all hover:translate-x-1 hover:translate-y-1 shadow-[4px_4px_0px_0px_#000000] hover:shadow-[2px_2px_0px_0px_#000000]">SHOP NOW →</Link>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4" style={{ scrollbarWidth: 'none' }}>
            {[
              { name: 'CeraVe Moisturizing Cream', price: '79.00', oldPrice: '99.00', img: 'https://picsum.photos/seed/skin1/200/200' },
              { name: 'La Roche-Posay Effaclar', price: '115.00', img: 'https://picsum.photos/seed/skin2/200/200' },
              { name: 'Bioderma Sensibio H2O', price: '95.00', oldPrice: '120.00', img: 'https://picsum.photos/seed/skin3/200/200' },
              { name: 'Eucerin Sun Fluid SPF50+', price: '82.00', img: 'https://picsum.photos/seed/skin4/200/200' },
              { name: 'The Ordinary Niacinamide', price: '42.00', img: 'https://picsum.photos/seed/skin5/200/200' },
              { name: 'Vichy Mineral 89 Serum', price: '135.00', oldPrice: '165.00', img: 'https://picsum.photos/seed/skin6/200/200' },
              { name: 'Neutrogena Hydro Boost', price: '68.00', img: 'https://picsum.photos/seed/skin7/200/200' },
            ].map((p, i) => <ProductCard key={i} {...p} />)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndexSectionCustomComponents6;
