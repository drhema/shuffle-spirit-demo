import React from 'react';
import Link from 'next/link';

const MiniCard: React.FC<{ name: string; price: string; oldPrice?: string; img: string }> = ({ name, price, oldPrice, img }) => (
  <div className="flex-shrink-0 w-[46vw] min-w-[170px] sm:w-[200px] md:w-[240px] lg:w-[260px] xl:w-[280px] bg-white border-4 border-black p-3 lg:p-4 shadow-[5px_5px_0px_0px_#2DD4A8] hover:shadow-[2px_2px_0px_0px_#2DD4A8] hover:translate-x-[3px] hover:translate-y-[3px] transition-all">
    <div className="h-[160px] sm:h-[180px] md:h-[210px] lg:h-[240px] xl:h-[260px] border-4 border-black bg-gray-50 flex items-center justify-center mb-3 overflow-hidden">
      <img src={img} alt={name} className="w-full h-full object-cover" />
    </div>
    <h4 className="text-sm lg:text-base font-black font-heading text-black leading-tight mb-2 line-clamp-2 min-h-[2.5rem]">{name}</h4>
    <div className="flex items-baseline gap-2 mb-3">
      <span className="text-lg lg:text-xl font-bold text-[#42A5D6]">{price} <span className="text-xs">KWD</span></span>
      {oldPrice && <span className="text-xs text-gray-400 line-through">{oldPrice}</span>}
    </div>
    <button className="w-full py-2.5 bg-[#2DD4A8] hover:bg-[#1B2B5B] hover:text-white text-black font-black font-heading text-sm border-4 border-black transition-all">ADD TO CART</button>
  </div>
);

const IndexSectionCustomComponents4: React.FC = () => {
  return (
    <section className="bg-[#F5F5F5] pb-8">
      <div className="container px-4 mx-auto">
        {/* Full-width Product Promo Banner */}
        <div className="relative border-4 border-black overflow-hidden mb-6 md:mb-8 shadow-[6px_6px_0px_0px_#42A5D6] md:shadow-[10px_10px_0px_0px_#42A5D6]" style={{ minHeight: '150px' }}>
          <img src="https://picsum.photos/seed/linexbanner/1400/300" alt="Product Promo" className="w-full h-full object-cover absolute inset-0" />
          <div className="relative z-10 flex items-center justify-between p-4 md:p-6 lg:p-10 min-h-[150px] md:min-h-[180px] bg-gradient-to-r from-white/95 via-white/70 to-transparent">
            <div className="max-w-lg">
              <h3 className="text-xl md:text-2xl lg:text-4xl font-black font-heading text-[#1B2B5B] mb-1 md:mb-2 uppercase">Linex Adult</h3>
              <p className="text-gray-600 text-xs md:text-sm font-medium mb-3 md:mb-4">Supports the balance of beneficial bacteria in the digestive system.</p>
              <div className="flex items-center gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
            </div>
            <div className="hidden lg:flex items-center gap-4">
              <img src="https://picsum.photos/seed/prodpromo1/150/200" alt="" className="h-36 object-contain border-4 border-black" />
              <img src="https://picsum.photos/seed/prodpromo2/150/200" alt="" className="h-36 object-contain border-4 border-black" />
            </div>
          </div>
        </div>

        {/* Hand Washes */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4 md:mb-6">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-black font-heading text-[#1B2B5B] uppercase tracking-tight">Hand Washes</h3>
            <Link href="/category/personal-care" className="px-4 py-2 md:px-6 bg-white text-[#1B2B5B] font-black font-heading text-xs md:text-sm border-4 border-black hover:bg-[#2DD4A8] transition-all hover:translate-x-1 hover:translate-y-1 shadow-[4px_4px_0px_0px_#000000] hover:shadow-[2px_2px_0px_0px_#000000]">SHOP NOW →</Link>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4" style={{ scrollbarWidth: 'none' }}>
            {[
              { name: 'Dettol Hand Wash Original', price: '8.50', img: 'https://picsum.photos/seed/hw1/200/200' },
              { name: 'Lux Soft Touch Hand Wash', price: '7.00', oldPrice: '9.50', img: 'https://picsum.photos/seed/hw2/200/200' },
              { name: 'Lifebuoy Antibacterial Wash', price: '6.50', img: 'https://picsum.photos/seed/hw3/200/200' },
              { name: 'Palmolive Naturals Milk', price: '9.00', oldPrice: '12.00', img: 'https://picsum.photos/seed/hw4/200/200' },
            ].map((p, i) => <MiniCard key={i} {...p} />)}
          </div>
        </div>

        {/* Refresh Anytime */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4 md:mb-6">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-black font-heading text-[#1B2B5B] uppercase tracking-tight">Refresh Anytime</h3>
            <Link href="/category/personal-care" className="px-4 py-2 md:px-6 bg-white text-[#1B2B5B] font-black font-heading text-xs md:text-sm border-4 border-black hover:bg-[#42A5D6] hover:text-white transition-all hover:translate-x-1 hover:translate-y-1 shadow-[4px_4px_0px_0px_#000000] hover:shadow-[2px_2px_0px_0px_#000000]">SHOP NOW →</Link>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4" style={{ scrollbarWidth: 'none' }}>
            {[
              { name: 'Evian Natural Spring Water 1.5L', price: '6.00', img: 'https://picsum.photos/seed/water1/200/200' },
              { name: 'Nestle Pure Life Water 1.5L', price: '2.50', img: 'https://picsum.photos/seed/water2/200/200' },
              { name: 'Volvic Natural Mineral Water', price: '5.50', oldPrice: '7.00', img: 'https://picsum.photos/seed/water3/200/200' },
              { name: 'Perrier Sparkling Water', price: '8.00', img: 'https://picsum.photos/seed/water4/200/200' },
            ].map((p, i) => <MiniCard key={i} {...p} />)}
          </div>
        </div>

        {/* Three promo banners */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { img: 'https://picsum.photos/seed/startfrom6/600/350', label: 'Starting from', value: '6 KWD', shadow: '#2DD4A8', href: '/category/personal-care' },
            { img: 'https://picsum.photos/seed/babyfood1/600/350', label: 'Baby Bottle', value: '', shadow: '#42A5D6', href: '/category/baby-care' },
            { img: 'https://picsum.photos/seed/cooking1/600/350', label: 'Starting from', value: '6 KWD', shadow: '#1B2B5B', href: '/category/personal-care' },
          ].map((b, i) => (
            <Link key={i} href={b.href} className="relative border-4 border-black overflow-hidden transition-all hover:translate-x-[3px] hover:translate-y-[3px]" style={{ minHeight: '180px', boxShadow: `8px 8px 0px 0px ${b.shadow}` }}>
              <img src={b.img} alt={b.label} className="w-full h-full object-cover absolute inset-0" />
              <div className="relative z-10 p-6 bg-gradient-to-t from-[#1B2B5B]/80 to-transparent h-full flex flex-col justify-end min-h-[180px]">
                <p className="text-white text-sm font-black font-heading">{b.label}</p>
                {b.value && <p className="text-3xl font-black text-white">{b.value}</p>}
                {!b.value && <span className="inline-block mt-2 px-4 py-1.5 bg-[#42A5D6] text-black font-black font-heading border-2 border-black w-fit text-xs">SHOP NOW</span>}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndexSectionCustomComponents4;
