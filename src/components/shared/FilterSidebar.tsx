import React, { useState } from 'react';
import { FilterState } from '@/src/types';
import StarRating from './StarRating';

interface FilterSidebarProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  availableBrands: string[];
  availableTypes: string[];
  isMobileOpen: boolean;
  onMobileClose: () => void;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  filters,
  onFilterChange,
  availableBrands,
  availableTypes,
  isMobileOpen,
  onMobileClose,
}) => {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    price: true,
    brands: true,
    rating: true,
    type: true,
  });

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const handlePriceChange = (field: 'priceMin' | 'priceMax', value: string) => {
    onFilterChange({ ...filters, [field]: value });
  };

  const handleBrandToggle = (brand: string) => {
    const updated = filters.brands.includes(brand)
      ? filters.brands.filter((b) => b !== brand)
      : [...filters.brands, brand];
    onFilterChange({ ...filters, brands: updated });
  };

  const handleRatingToggle = (rating: number) => {
    const updated = filters.ratings.includes(rating)
      ? filters.ratings.filter((r) => r !== rating)
      : [...filters.ratings, rating];
    onFilterChange({ ...filters, ratings: updated });
  };

  const handleTypeToggle = (type: string) => {
    const updated = filters.productTypes.includes(type)
      ? filters.productTypes.filter((t) => t !== type)
      : [...filters.productTypes, type];
    onFilterChange({ ...filters, productTypes: updated });
  };

  const clearAll = () => {
    onFilterChange({
      priceMin: '',
      priceMax: '',
      brands: [],
      ratings: [],
      productTypes: [],
    });
  };

  const SectionHeader: React.FC<{ title: string; sectionKey: string }> = ({
    title,
    sectionKey,
  }) => (
    <button
      onClick={() => toggleSection(sectionKey)}
      className="flex items-center justify-between w-full mb-3"
    >
      <span className="font-black font-heading text-[#1B2B5B] text-sm border-b-4 border-[#2DD4A8] pb-1 inline-block">
        {title}
      </span>
      <svg
        className={`w-4 h-4 text-[#1B2B5B] transition-transform ${
          openSections[sectionKey] ? 'rotate-180' : ''
        }`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
      </svg>
    </button>
  );

  const filterContent = (
    <div className="space-y-6">
      {/* Header with Clear All */}
      <div className="flex items-center justify-between">
        <h3 className="font-black font-heading text-[#1B2B5B] text-base">Filters</h3>
        <button onClick={clearAll} className="text-[#42A5D6] font-black text-xs hover:underline">
          Clear All
        </button>
      </div>

      {/* Price Range */}
      <div>
        <SectionHeader title="Price Range" sectionKey="price" />
        {openSections.price && (
          <div className="flex items-center gap-2">
            <input
              type="number"
              placeholder="Min"
              value={filters.priceMin}
              onChange={(e) => handlePriceChange('priceMin', e.target.value)}
              className="w-full py-2 px-3 border-4 border-black text-sm font-bold focus:outline-none focus:border-[#2DD4A8] transition-colors bg-white"
            />
            <span className="text-[#1B2B5B] font-black text-sm">-</span>
            <input
              type="number"
              placeholder="Max"
              value={filters.priceMax}
              onChange={(e) => handlePriceChange('priceMax', e.target.value)}
              className="w-full py-2 px-3 border-4 border-black text-sm font-bold focus:outline-none focus:border-[#2DD4A8] transition-colors bg-white"
            />
          </div>
        )}
      </div>

      {/* Brands */}
      <div>
        <SectionHeader title="Brands" sectionKey="brands" />
        {openSections.brands && (
          <div className="space-y-2 max-h-48 overflow-y-auto">
            {availableBrands.map((brand) => (
              <label
                key={brand}
                className="flex items-center gap-2.5 cursor-pointer group"
              >
                <div
                  className={`w-5 h-5 border-2 border-black flex items-center justify-center flex-shrink-0 transition-colors ${
                    filters.brands.includes(brand) ? 'bg-[#2DD4A8]' : 'bg-white'
                  }`}
                  onClick={() => handleBrandToggle(brand)}
                >
                  {filters.brands.includes(brand) && (
                    <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
                <span className="text-sm font-bold text-[#1B2B5B] group-hover:text-[#42A5D6] transition-colors">
                  {brand}
                </span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Rating */}
      <div>
        <SectionHeader title="Rating" sectionKey="rating" />
        {openSections.rating && (
          <div className="space-y-2">
            {[4, 3, 2, 1].map((ratingValue) => (
              <button
                key={ratingValue}
                onClick={() => handleRatingToggle(ratingValue)}
                className={`flex items-center gap-2 w-full py-1.5 px-2 transition-colors ${
                  filters.ratings.includes(ratingValue)
                    ? 'bg-[#F5F5F5] border-2 border-[#2DD4A8]'
                    : 'hover:bg-[#F5F5F5]'
                }`}
              >
                <StarRating rating={ratingValue} size="sm" />
                <span className="text-xs font-bold text-[#1B2B5B]">&amp; Up</span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Product Type */}
      <div>
        <SectionHeader title="Product Type" sectionKey="type" />
        {openSections.type && (
          <div className="space-y-2">
            {availableTypes.map((type) => (
              <label
                key={type}
                className="flex items-center gap-2.5 cursor-pointer group"
              >
                <div
                  className={`w-5 h-5 border-2 border-black flex items-center justify-center flex-shrink-0 transition-colors ${
                    filters.productTypes.includes(type) ? 'bg-[#2DD4A8]' : 'bg-white'
                  }`}
                  onClick={() => handleTypeToggle(type)}
                >
                  {filters.productTypes.includes(type) && (
                    <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
                <span className="text-sm font-bold text-[#1B2B5B] group-hover:text-[#42A5D6] transition-colors">
                  {type}
                </span>
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-64 flex-shrink-0">
        <div className="bg-white border-4 border-black p-4 shadow-[6px_6px_0px_0px_#2DD4A8] sticky top-32">
          {filterContent}
        </div>
      </aside>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={onMobileClose}
          />
          <nav className="relative w-full max-w-sm h-full bg-white border-r-4 border-black overflow-y-auto">
            {/* Mobile Header */}
            <div className="flex items-center justify-between p-4 border-b-4 border-black bg-[#1B2B5B]">
              <span className="font-black font-heading text-white text-lg">Filters</span>
              <button
                onClick={onMobileClose}
                className="w-8 h-8 bg-[#2DD4A8] border-2 border-black flex items-center justify-center"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Filter Content */}
            <div className="p-4 pb-24">{filterContent}</div>

            {/* Apply Button - Fixed at bottom */}
            <div className="fixed bottom-0 left-0 w-full max-w-sm p-4 bg-white border-t-4 border-black">
              <button
                onClick={onMobileClose}
                className="w-full py-3 bg-[#2DD4A8] hover:bg-[#1B2B5B] hover:text-white text-black font-black font-heading text-sm border-4 border-black shadow-[4px_4px_0px_0px_#000000] hover:shadow-[2px_2px_0px_0px_#000000] transition-all uppercase"
              >
                APPLY FILTERS
              </button>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default FilterSidebar;
