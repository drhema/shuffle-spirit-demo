import React, { useState, useMemo } from 'react';
import type { GetStaticProps } from 'next';
import Link from 'next/link';
import Layout from '@/src/components/shared/Layout';
import Breadcrumb from '@/src/components/shared/Breadcrumb';
import { allBrands } from '@/src/data/brands';
import type { Brand } from '@/src/types';

interface BrandsPageProps {
  brands: Brand[];
}

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const BrandsPage: React.FC<BrandsPageProps> = ({ brands }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeLetter, setActiveLetter] = useState<string | null>(null);

  const filteredBrands = useMemo(() => {
    if (!searchQuery.trim()) return brands;
    const q = searchQuery.toLowerCase();
    return brands.filter((b) => b.name.toLowerCase().includes(q));
  }, [brands, searchQuery]);

  const groupedBrands = useMemo(() => {
    const groups: Record<string, Brand[]> = {};
    filteredBrands.forEach((brand) => {
      const firstChar = brand.name.charAt(0).toUpperCase();
      const letter = /[A-Z]/.test(firstChar) ? firstChar : '#';
      if (!groups[letter]) groups[letter] = [];
      groups[letter].push(brand);
    });
    // Sort each group alphabetically
    Object.keys(groups).forEach((key) => {
      groups[key].sort((a, b) => a.name.localeCompare(b.name));
    });
    return groups;
  }, [filteredBrands]);

  const sortedLetters = useMemo(() => {
    const letters = Object.keys(groupedBrands);
    return letters.sort((a, b) => {
      if (a === '#') return -1;
      if (b === '#') return 1;
      return a.localeCompare(b);
    });
  }, [groupedBrands]);

  const scrollToLetter = (letter: string) => {
    setActiveLetter(letter);
    document.getElementById(`letter-${letter}`)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Layout>
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'All Brands' }]} />

      {/* Hero */}
      <section className="bg-[#1B2B5B] border-b-4 border-black py-10 md:py-14">
        <div className="container px-4 mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black font-heading text-white uppercase mb-3">
            Shop by Brand
          </h1>
          <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto">
            Browse our complete directory of trusted pharmacy and healthcare brands.
            Find your favourite brand and explore their full product range.
          </p>
        </div>
      </section>

      {/* Sticky Search + Alphabet Bar */}
      <div className="sticky top-0 z-30 bg-white border-b-4 border-black">
        <div className="container px-4 mx-auto py-3 space-y-3">
          {/* Search Input */}
          <div className="max-w-md mx-auto relative">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search brands..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border-4 border-black font-bold text-sm text-[#1B2B5B] placeholder:text-gray-400 focus:outline-none focus:border-[#42A5D6]"
            />
          </div>

          {/* Alphabet Bar */}
          <div className="flex justify-center gap-1 flex-wrap">
            <button
              onClick={() => scrollToLetter('#')}
              className={`w-8 h-8 border-2 border-black font-black text-xs transition-colors ${
                activeLetter === '#'
                  ? 'bg-[#2DD4A8] text-black'
                  : 'bg-white text-[#1B2B5B] hover:bg-[#F5F5F5]'
              }`}
            >
              #
            </button>
            {ALPHABET.map((letter) => (
              <button
                key={letter}
                onClick={() => scrollToLetter(letter)}
                className={`w-8 h-8 border-2 border-black font-black text-xs transition-colors ${
                  activeLetter === letter
                    ? 'bg-[#2DD4A8] text-black'
                    : 'bg-white text-[#1B2B5B] hover:bg-[#F5F5F5]'
                }`}
              >
                {letter}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Brand Grid grouped by letter */}
      <div className="container px-4 mx-auto py-8">
        {sortedLetters.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl font-black font-heading text-gray-400">
              No brands found matching &ldquo;{searchQuery}&rdquo;
            </p>
          </div>
        )}

        {sortedLetters.map((letter) => (
          <div key={letter} id={`letter-${letter}`} className="mb-10 scroll-mt-40">
            <h2 className="text-2xl font-black font-heading text-[#1B2B5B] border-b-4 border-[#2DD4A8] pb-1 inline-block mb-4">
              {letter}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {groupedBrands[letter].map((brand) => (
                <Link
                  key={brand.slug}
                  href={`/brand/${brand.slug}`}
                  className="bg-white border-4 border-black p-4 flex flex-col items-center shadow-[4px_4px_0px_0px_#2DD4A8] hover:shadow-[2px_2px_0px_0px_#2DD4A8] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
                >
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="h-16 object-contain mb-3"
                  />
                  <span className="text-sm font-black font-heading text-[#1B2B5B] text-center">
                    {brand.name}
                  </span>
                  <span className="text-xs text-gray-500 font-bold mt-1">
                    {brand.productCount} products
                  </span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<BrandsPageProps> = async () => {
  return {
    props: {
      brands: allBrands,
    },
  };
};

export default BrandsPage;
