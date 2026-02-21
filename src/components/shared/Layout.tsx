import React from 'react';
import IndexSectionCustomComponents1 from '@/src/components/custom-components/IndexSectionCustomComponents1';
import IndexSectionCustomComponents8 from '@/src/components/custom-components/IndexSectionCustomComponents8';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <IndexSectionCustomComponents1 />
      <main className="min-h-screen bg-[#F5F5F5]">{children}</main>
      <IndexSectionCustomComponents8 />
    </>
  );
};

export default Layout;
