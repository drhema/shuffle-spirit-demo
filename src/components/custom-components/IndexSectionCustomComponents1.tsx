import React, { useState } from 'react';
import Link from 'next/link';

const countries = [
  { code: 'KW', name: 'Kuwait', flag: '🇰🇼' },
  { code: 'AE', name: 'UAE', flag: '🇦🇪' },
  { code: 'SA', name: 'Saudi Arabia', flag: '🇸🇦' },
  { code: 'IQ', name: 'Iraq', flag: '🇮🇶' },
  { code: 'QA', name: 'Qatar', flag: '🇶🇦' },
];

const IndexSectionCustomComponents1: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [countryOpen, setCountryOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [lang, setLang] = useState<'EN' | 'AR'>('EN');

  return (
    <>
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-[#1B2B5B] border-b-4 border-[#2DD4A8]">
        {/* Top bar: Country + Language */}
        <div className="border-b-2 border-[#42A5D6]/30">
          <div className="container px-4 mx-auto flex items-center justify-between py-1.5">
            {/* Country Selector */}
            <div className="relative">
              <button
                onClick={() => setCountryOpen(!countryOpen)}
                className="flex items-center gap-1.5 text-white text-xs font-bold hover:text-[#2DD4A8] transition-colors"
              >
                <span className="text-sm">{selectedCountry.flag}</span>
                <span>{selectedCountry.name}</span>
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
              </button>
              {countryOpen && (
                <div className="absolute top-full left-0 mt-1 bg-white border-4 border-black shadow-[4px_4px_0px_0px_#2DD4A8] z-50 min-w-[160px]">
                  {countries.map((c) => (
                    <button
                      key={c.code}
                      onClick={() => { setSelectedCountry(c); setCountryOpen(false); }}
                      className={`flex items-center gap-2 w-full px-3 py-2 text-xs font-bold hover:bg-[#2DD4A8] transition-colors ${
                        selectedCountry.code === c.code ? 'bg-[#F5F5F5] text-[#1B2B5B]' : 'text-[#1B2B5B]'
                      }`}
                    >
                      <span className="text-sm">{c.flag}</span>
                      <span>{c.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Language Toggle */}
            <button
              onClick={() => setLang(lang === 'EN' ? 'AR' : 'EN')}
              className="flex items-center gap-1.5 px-3 py-1 bg-white/10 hover:bg-[#2DD4A8] text-white hover:text-black border-2 border-white/20 hover:border-black text-xs font-black transition-all"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
              {lang === 'EN' ? 'عربي' : 'English'}
            </button>
          </div>
        </div>

        <div className="container px-4 mx-auto flex items-center justify-between py-4 gap-4">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <img src="https://static.shuffle.dev/uploads/files/a2/a22f4ca1dc5702172d6c4d4b73ce945337a50572/logos/logo-12ff19edf5904c49d16d95fc22f6d524.png" alt="Spirit Healthcare" className="h-8" />
          </Link>

          {/* Delivery Selector */}
          <div className="hidden md:flex items-center gap-2 text-white text-sm flex-shrink-0">
            <svg className="w-5 h-5 text-[#2DD4A8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <div>
              <span className="text-xs text-gray-300">Deliver to</span>
              <span className="flex items-center gap-1 font-bold text-white text-sm font-heading">
                {selectedCountry.flag} {selectedCountry.name}
              </span>
            </div>
          </div>

          {/* Search Bar */}
          <div className="hidden lg:flex flex-1 max-w-2xl mx-4">
            <div className="relative w-full">
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input type="text" className="w-full py-3 pl-12 pr-4 border-4 border-black font-bold text-sm placeholder-gray-500 focus:outline-none focus:border-[#2DD4A8] transition-colors bg-white" placeholder="Search Beauty, Personal Care, Supplements, Baby Accesso..." />
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <a href="#" className="hidden md:inline-flex items-center px-5 py-2 bg-white text-[#1B2B5B] font-black font-heading text-sm border-4 border-black hover:bg-[#2DD4A8] transition-all hover:translate-x-1 hover:translate-y-1 shadow-[4px_4px_0px_0px_#42A5D6] hover:shadow-[2px_2px_0px_0px_#42A5D6]">
              Login &amp; Register
            </a>
            <a href="#" className="hidden md:flex text-white hover:text-[#2DD4A8] p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" /></svg>
            </a>
            <a href="#" className="hidden md:flex text-white hover:text-[#2DD4A8] p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
            </a>
            <a href="#" className="relative text-white hover:text-[#2DD4A8] p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
              <span className="absolute -top-1 -right-1 bg-[#2DD4A8] text-black text-xs font-black w-5 h-5 flex items-center justify-center border-2 border-black">0</span>
            </a>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden w-10 h-10 bg-[#2DD4A8] hover:bg-white transition-colors border-2 border-black flex items-center justify-center">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
            </button>
          </div>
        </div>

        {/* Category Nav */}
        <div className="bg-white border-t-4 border-black">
          <div className="container px-4 mx-auto">
            <div className="hidden lg:flex items-center gap-6 py-3 text-sm font-black font-heading text-[#1B2B5B] overflow-x-auto">
              <button className="flex items-center gap-2 text-white bg-[#42A5D6] px-4 py-2 border-4 border-black whitespace-nowrap hover:bg-[#2DD4A8] transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                All Categories
              </button>
              <a href="#" className="whitespace-nowrap hover:text-[#42A5D6] transition-colors">E-Services</a>
              <a href="#" className="whitespace-nowrap hover:text-[#42A5D6] transition-colors">Spirit Global</a>
              <a href="#" className="whitespace-nowrap text-red-500 hover:text-red-700 transition-colors">Flash Sales</a>
              <a href="#" className="whitespace-nowrap hover:text-[#42A5D6] transition-colors">Promo Flyer</a>
              <a href="#" className="whitespace-nowrap text-[#2DD4A8] flex items-center gap-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" /></svg>
                Healthcare Center
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="lg:hidden px-3 pb-3 bg-[#1B2B5B]">
          <input type="text" className="w-full py-2.5 px-4 border-3 md:border-4 border-black font-bold text-sm placeholder-gray-500 focus:outline-none focus:border-[#2DD4A8] bg-white" placeholder="Search products..." />
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setMobileMenuOpen(false)} />
          <nav className="relative w-full max-w-sm h-full bg-white border-r-4 border-black overflow-y-auto">
            <div className="flex items-center justify-between p-4 border-b-4 border-black bg-[#1B2B5B]">
              <img src="https://static.shuffle.dev/uploads/files/a2/a22f4ca1dc5702172d6c4d4b73ce945337a50572/logos/logo-12ff19edf5904c49d16d95fc22f6d524.png" alt="" className="h-6" />
              <button onClick={() => setMobileMenuOpen(false)} className="w-8 h-8 bg-[#2DD4A8] border-2 border-black flex items-center justify-center">
                <svg className="w-4 h-4" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            <div className="p-4">
              {/* Country + Language in mobile */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex-1 flex items-center gap-2 p-2 border-2 border-black bg-[#F5F5F5]">
                  <span className="text-sm">{selectedCountry.flag}</span>
                  <select
                    value={selectedCountry.code}
                    onChange={(e) => {
                      const c = countries.find((x) => x.code === e.target.value);
                      if (c) setSelectedCountry(c);
                    }}
                    className="bg-transparent font-black text-sm text-[#1B2B5B] flex-1 outline-none"
                  >
                    {countries.map((c) => (
                      <option key={c.code} value={c.code}>{c.name}</option>
                    ))}
                  </select>
                </div>
                <button
                  onClick={() => setLang(lang === 'EN' ? 'AR' : 'EN')}
                  className="px-4 py-2 bg-[#1B2B5B] text-white font-black text-sm border-2 border-black"
                >
                  {lang === 'EN' ? 'عربي' : 'EN'}
                </button>
              </div>
              <a href="#" className="block w-full text-center py-3 mb-4 bg-[#2DD4A8] text-black font-black font-heading border-4 border-black shadow-[4px_4px_0px_0px_#000000]">Login &amp; Register</a>
              {[
                { name: 'All Categories', href: '/brands' },
                { name: 'E-Services', href: '#' },
                { name: 'Flash Sales', href: '#' },
                { name: 'Fragrances', href: '/category/fragrances' },
                { name: 'Makeup', href: '#' },
                { name: 'Baby Care', href: '/category/baby-care' },
                { name: 'Vitamins', href: '/category/vitamins-supplements' },
                { name: 'Skincare', href: '/category/skincare' },
                { name: 'Haircare', href: '/category/hair-care' },
                { name: 'Personal Care', href: '/category/personal-care' },
                { name: 'Health Center', href: '#' },
              ].map((item) => (
                <Link key={item.name} href={item.href} onClick={() => setMobileMenuOpen(false)} className="block p-3 text-lg font-black font-heading hover:bg-[#2DD4A8] border-2 border-black border-b-0 last:border-b-2">{item.name}</Link>
              ))}
            </div>
          </nav>
        </div>
      )}

      {/* Mobile Bottom Nav Bar */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white border-t-4 border-black">
        <div className="flex items-center justify-around py-2">
          <a href="#" className="flex flex-col items-center gap-0.5 px-3 py-1 group">
            <div className="relative">
              <svg className="w-6 h-6 text-[#1B2B5B] group-hover:text-[#42A5D6] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
              <span className="absolute -top-1.5 -right-2 bg-[#2DD4A8] text-black text-[10px] font-black w-4 h-4 flex items-center justify-center border border-black">0</span>
            </div>
            <span className="text-[10px] font-black font-heading text-[#1B2B5B] group-hover:text-[#42A5D6] transition-colors">Cart</span>
          </a>
          <a href="#" className="flex flex-col items-center gap-0.5 px-3 py-1 group">
            <svg className="w-6 h-6 text-[#1B2B5B] group-hover:text-[#42A5D6] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
            <span className="text-[10px] font-black font-heading text-[#1B2B5B] group-hover:text-[#42A5D6] transition-colors">Orders</span>
          </a>
          <a href="#" className="flex flex-col items-center gap-0.5 px-3 py-1 group">
            <svg className="w-6 h-6 text-[#1B2B5B] group-hover:text-[#42A5D6] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
            <span className="text-[10px] font-black font-heading text-[#1B2B5B] group-hover:text-[#42A5D6] transition-colors">Account</span>
          </a>
          <a href="#" className="flex flex-col items-center gap-0.5 px-3 py-1 group">
            <svg className="w-6 h-6 text-[#1B2B5B] group-hover:text-[#42A5D6] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" /></svg>
            <span className="text-[10px] font-black font-heading text-[#1B2B5B] group-hover:text-[#42A5D6] transition-colors">Login</span>
          </a>
        </div>
      </nav>

      {/* Spacer for mobile bottom nav */}
      <div className="h-16 lg:hidden" />
    </>
  );
};

export default IndexSectionCustomComponents1;
