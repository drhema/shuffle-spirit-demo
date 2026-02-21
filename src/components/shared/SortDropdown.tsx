import React, { useState, useRef, useEffect } from 'react';
import { SortOption } from '@/src/types';

interface SortDropdownProps {
  value: SortOption;
  onChange: (val: SortOption) => void;
}

const sortOptions: { value: SortOption; label: string }[] = [
  { value: 'best-seller', label: 'Best Seller' },
  { value: 'price-low-high', label: 'Price: Low to High' },
  { value: 'price-high-low', label: 'Price: High to Low' },
  { value: 'newest', label: 'Newest' },
  { value: 'rating', label: 'Top Rated' },
];

const SortDropdown: React.FC<SortDropdownProps> = ({ value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLabel = sortOptions.find((opt) => opt.value === value)?.label || 'Sort By';

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2.5 bg-white border-4 border-black font-black font-heading text-sm text-[#1B2B5B] hover:bg-[#F5F5F5] transition-colors"
      >
        <span>Sort: {currentLabel}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-1 bg-white border-4 border-black shadow-[6px_6px_0px_0px_#000000] z-20 min-w-[200px]">
          {sortOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
              className={`block w-full text-left px-4 py-2.5 text-sm font-bold hover:bg-[#2DD4A8] border-b-2 border-black last:border-b-0 transition-colors ${
                value === option.value
                  ? 'bg-[#F5F5F5] text-[#42A5D6] font-black'
                  : 'text-[#1B2B5B]'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SortDropdown;
