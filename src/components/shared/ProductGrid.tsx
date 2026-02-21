import React from 'react';

interface ProductGridProps {
  children: React.ReactNode;
}

const ProductGrid: React.FC<ProductGridProps> = ({ children }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
      {children}
    </div>
  );
};

export default ProductGrid;
