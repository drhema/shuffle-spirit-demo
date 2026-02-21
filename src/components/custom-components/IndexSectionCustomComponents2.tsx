import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const heroSlides = [
  { title: 'Electrical Hair Removal', subtitle: 'Quality devices at amazing prices', discount: '60%', bg: '#42A5D6', img: 'https://picsum.photos/seed/hairdevice/600/400', href: '/category/personal-care' },
  { title: 'Summer Skincare Essentials', subtitle: 'Protect your skin this season', discount: '40%', bg: '#2DD4A8', img: 'https://picsum.photos/seed/skincare1/600/400', href: '/category/skincare' },
  { title: 'Baby Care Collection', subtitle: 'Gentle care for your little ones', discount: '35%', bg: '#42A5D6', img: 'https://picsum.photos/seed/babycare1/600/400', href: '/category/baby-care' },
];

const IndexSectionCustomComponents2: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % heroSlides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = heroSlides[current];

  return (
    <section className="bg-[#F5F5F5] py-6">
      <div className="container px-4 mx-auto">
        {/* Hero Carousel */}
        <div className="relative border-4 border-black overflow-hidden shadow-[8px_8px_0px_0px_#2DD4A8] md:shadow-[12px_12px_0px_0px_#2DD4A8]" style={{ backgroundColor: slide.bg }}>
          <div className="flex items-center h-full min-h-[260px] md:min-h-[360px]">
            <div className="flex-1 p-5 md:p-8 lg:p-12 z-10">
              <p className="text-black text-xs md:text-sm font-black font-heading mb-1 md:mb-2 tracking-widest uppercase">SPECIAL OFFER</p>
              <h2 className="text-2xl md:text-3xl lg:text-5xl font-black font-heading text-white mb-2 md:mb-3 leading-tight uppercase">{slide.title}</h2>
              <p className="text-[#1B2B5B] mb-3 md:mb-4 text-sm md:text-base font-medium">{slide.subtitle}</p>
              <div className="mb-4 md:mb-6">
                <span className="text-5xl md:text-6xl lg:text-8xl font-black text-white">{slide.discount}</span>
                <span className="text-2xl md:text-3xl font-black text-white ml-1">% OFF</span>
              </div>
              <Link href={slide.href} className="inline-block px-6 py-3 md:px-8 md:py-4 bg-[#1B2B5B] text-white font-black font-heading text-sm md:text-lg border-4 border-black hover:bg-[#2DD4A8] hover:text-black transition-all hover:translate-x-1 hover:translate-y-1 shadow-[6px_6px_0px_0px_#000000] hover:shadow-[3px_3px_0px_0px_#000000]">
                SHOP NOW
              </Link>
            </div>
            <div className="hidden md:flex flex-1 items-center justify-center p-8">
              <img src={slide.img} alt={slide.title} className="max-h-[280px] object-contain border-4 border-black shadow-[8px_8px_0px_0px_#1B2B5B]" />
            </div>
          </div>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {heroSlides.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)} className={`w-4 h-4 border-2 border-black transition-colors ${i === current ? 'bg-[#1B2B5B]' : 'bg-white'}`} />
            ))}
          </div>

          {/* Arrows */}
          <button onClick={() => setCurrent((current - 1 + heroSlides.length) % heroSlides.length)} className="absolute left-2 md:left-3 top-1/2 -translate-y-1/2 w-9 h-9 md:w-12 md:h-12 bg-white border-3 md:border-4 border-black flex items-center justify-center hover:bg-[#2DD4A8] transition-colors shadow-[3px_3px_0px_0px_#000000] md:shadow-[4px_4px_0px_0px_#000000]">
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button onClick={() => setCurrent((current + 1) % heroSlides.length)} className="absolute right-2 md:right-3 top-1/2 -translate-y-1/2 w-9 h-9 md:w-12 md:h-12 bg-white border-3 md:border-4 border-black flex items-center justify-center hover:bg-[#2DD4A8] transition-colors shadow-[3px_3px_0px_0px_#000000] md:shadow-[4px_4px_0px_0px_#000000]">
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>

        {/* Shop by Category */}
        <h2 className="text-xl md:text-2xl lg:text-3xl font-black font-heading text-[#1B2B5B] uppercase tracking-tight mt-6 md:mt-8 mb-4 md:mb-6 text-center">Shop by Category</h2>
        <div className="flex items-center justify-start md:justify-center gap-4 md:gap-5 lg:gap-10 overflow-x-auto py-3 pb-5 md:py-4 md:pb-6 scrollbar-hide px-1">
          {[
            { name: 'NEW', img: 'https://picsum.photos/seed/new1/120/120', accent: true, href: '#' },
            { name: 'Fragrances', img: 'https://picsum.photos/seed/frag1/120/120', href: '/category/fragrances' },
            { name: 'Makeup', img: 'https://picsum.photos/seed/makeup1/120/120', href: '#' },
            { name: 'Care', img: 'https://picsum.photos/seed/care1/120/120', href: '/category/personal-care' },
            { name: 'Supplements', img: 'https://picsum.photos/seed/suppl1/120/120', href: '/category/vitamins-supplements' },
            { name: 'Devices', img: 'https://picsum.photos/seed/device1/120/120', href: '#' },
            { name: 'Bundles', img: 'https://picsum.photos/seed/bundle1/120/120', href: '#' },
            { name: 'Nutrition', img: 'https://picsum.photos/seed/nutri1/120/120', href: '/category/sport-nutrition' },
            { name: 'Offers', img: 'https://picsum.photos/seed/offers1/120/120', href: '#' },
          ].map((cat) => (
            <Link key={cat.name} href={cat.href} className="flex flex-col items-center flex-shrink-0 group">
              <div className={`w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden border-4 ${cat.accent ? 'border-red-500' : 'border-black'} group-hover:border-[#2DD4A8] transition-all shadow-[3px_3px_0px_0px_#000000] group-hover:shadow-[1px_1px_0px_0px_#000000] group-hover:translate-x-[2px] group-hover:translate-y-[2px]`}>
                <img src={cat.img} alt={cat.name} className="w-full h-full object-cover block" />
              </div>
              <span className={`mt-2 text-xs lg:text-sm font-black font-heading ${cat.accent ? 'text-red-500' : 'text-[#1B2B5B]'} group-hover:text-[#42A5D6] whitespace-nowrap`}>{cat.name}</span>
            </Link>
          ))}
        </div>

        {/* Two Side-by-Side Promo Banners */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/category/baby-care" className="relative border-4 border-black overflow-hidden shadow-[6px_6px_0px_0px_#42A5D6] md:shadow-[8px_8px_0px_0px_#42A5D6] hover:shadow-[4px_4px_0px_0px_#42A5D6] hover:translate-x-[4px] hover:translate-y-[4px] transition-all" style={{ minHeight: '160px' }}>
            <img src="https://picsum.photos/seed/babybanner/700/300" alt="Baby Essentials" className="w-full h-full object-cover absolute inset-0" />
            <div className="relative z-10 p-4 md:p-6 lg:p-8 bg-gradient-to-r from-[#1B2B5B]/90 to-transparent h-full flex flex-col justify-center min-h-[160px] md:min-h-[200px]">
              <h3 className="text-2xl md:text-3xl font-black font-heading text-white mb-2 md:mb-3 uppercase">Baby<br />Essentials</h3>
              <span className="inline-block px-4 py-2 md:px-6 md:py-3 bg-[#2DD4A8] text-black font-black font-heading text-sm md:text-base border-4 border-black w-fit">SHOP NOW</span>
            </div>
          </Link>
          <Link href="/category/skincare" className="relative border-4 border-black overflow-hidden shadow-[6px_6px_0px_0px_#1B2B5B] md:shadow-[8px_8px_0px_0px_#1B2B5B] hover:shadow-[4px_4px_0px_0px_#1B2B5B] hover:translate-x-[4px] hover:translate-y-[4px] transition-all" style={{ minHeight: '160px' }}>
            <img src="https://picsum.photos/seed/saleb/700/300" alt="Up to 70% OFF" className="w-full h-full object-cover absolute inset-0" />
            <div className="relative z-10 p-4 md:p-6 lg:p-8 bg-gradient-to-l from-[#42A5D6]/90 to-transparent h-full flex flex-col justify-center items-end min-h-[160px] md:min-h-[200px]">
              <p className="text-white text-xs md:text-sm font-black font-heading">UP TO</p>
              <p className="text-5xl md:text-6xl font-black text-white">70<span className="text-xl md:text-2xl">%</span></p>
              <p className="text-white text-xl md:text-2xl font-black font-heading">OFF</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default IndexSectionCustomComponents2;
