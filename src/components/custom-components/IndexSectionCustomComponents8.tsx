import React from 'react';
import Link from 'next/link';

const IndexSectionCustomComponents8: React.FC = () => {
  return (
    <footer className="py-20 bg-[#1B2B5B]">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap -mx-4 mb-8 lg:mb-16">
          <div className="w-full lg:w-1/3 px-4 mb-12 lg:mb-0">
            <Link href="/">
              <img src="https://static.shuffle.dev/uploads/files/a2/a22f4ca1dc5702172d6c4d4b73ce945337a50572/logos/logo-12ff19edf5904c49d16d95fc22f6d524.png" alt="Spirit Healthcare" className="h-8 bg-white p-1 border-2 border-black" />
            </Link>
            <p className="mt-5 mb-6 max-w-xs text-[#F5F5F5] leading-loose font-medium">Your trusted partner in healthcare and beauty. Spirit Healthcare brings the pharmacy to your door.</p>
            <div>
              <a className="inline-flex items-center justify-center w-12 h-12 mr-4 mb-4 bg-white hover:bg-[#2DD4A8] border-4 border-black transition-all hover:translate-x-1 hover:translate-y-1 shadow-[4px_4px_0px_0px_#42A5D6]" href="#">
                <img className="w-6 h-6" src="neub-assets/socials/facebook.svg" alt="Facebook" />
              </a>
              <a className="inline-flex items-center justify-center w-12 h-12 mr-4 mb-4 bg-white hover:bg-[#2DD4A8] border-4 border-black transition-all hover:translate-x-1 hover:translate-y-1 shadow-[4px_4px_0px_0px_#42A5D6]" href="#">
                <img className="w-6 h-6" src="neub-assets/socials/instagram.svg" alt="Instagram" />
              </a>
              <a className="inline-flex items-center justify-center w-12 h-12 mr-4 mb-4 bg-white hover:bg-[#2DD4A8] border-4 border-black transition-all hover:translate-x-1 hover:translate-y-1 shadow-[4px_4px_0px_0px_#42A5D6]" href="#">
                <img className="w-6 h-6" src="neub-assets/socials/twitter.svg" alt="Twitter" />
              </a>
            </div>
          </div>
          <div className="w-full lg:w-2/3 px-4">
            <div className="flex flex-wrap justify-between">
              <div className="w-1/2 lg:w-1/4 mb-8 lg:mb-0">
                <h3 className="mb-6 text-xl font-black font-heading tracking-tight text-white border-b-4 border-[#2DD4A8] inline-block pb-2">SHOP</h3>
                <ul className="text-base font-medium">
                  <li className="mb-4">
                    <Link className="text-[#F5F5F5] hover:text-[#2DD4A8] hover:bg-white hover:bg-opacity-10 px-3 py-2 -mx-3 transition-all border-2 border-transparent hover:border-[#2DD4A8] font-bold" href="/category/vitamins-supplements">Vitamins</Link>
                  </li>
                  <li className="mb-4">
                    <Link className="text-[#F5F5F5] hover:text-[#2DD4A8] hover:bg-white hover:bg-opacity-10 px-3 py-2 -mx-3 transition-all border-2 border-transparent hover:border-[#2DD4A8] font-bold" href="/category/skincare">Skincare</Link>
                  </li>
                  <li className="mb-4">
                    <Link className="text-[#F5F5F5] hover:text-[#2DD4A8] hover:bg-white hover:bg-opacity-10 px-3 py-2 -mx-3 transition-all border-2 border-transparent hover:border-[#2DD4A8] font-bold" href="/category/baby-care">Baby Care</Link>
                  </li>
                  <li>
                    <Link className="text-[#F5F5F5] hover:text-[#2DD4A8] hover:bg-white hover:bg-opacity-10 px-3 py-2 -mx-3 transition-all border-2 border-transparent hover:border-[#2DD4A8] font-bold" href="/category/fragrances">Fragrances</Link>
                  </li>
                </ul>
              </div>
              <div className="w-1/2 lg:w-1/4 mb-8 lg:mb-0">
                <h3 className="mb-6 text-xl font-black font-heading tracking-tight text-white border-b-4 border-[#42A5D6] inline-block pb-2">SUPPORT</h3>
                <ul className="text-base font-medium">
                  <li className="mb-4">
                    <a className="text-[#F5F5F5] hover:text-[#42A5D6] hover:bg-white hover:bg-opacity-10 px-3 py-2 -mx-3 transition-all border-2 border-transparent hover:border-[#42A5D6] font-bold" href="#">Contact Us</a>
                  </li>
                  <li className="mb-4">
                    <a className="text-[#F5F5F5] hover:text-[#42A5D6] hover:bg-white hover:bg-opacity-10 px-3 py-2 -mx-3 transition-all border-2 border-transparent hover:border-[#42A5D6] font-bold" href="#">FAQs</a>
                  </li>
                  <li className="mb-4">
                    <a className="text-[#F5F5F5] hover:text-[#42A5D6] hover:bg-white hover:bg-opacity-10 px-3 py-2 -mx-3 transition-all border-2 border-transparent hover:border-[#42A5D6] font-bold" href="#">Shipping Policy</a>
                  </li>
                  <li>
                    <a className="text-[#F5F5F5] hover:text-[#42A5D6] hover:bg-white hover:bg-opacity-10 px-3 py-2 -mx-3 transition-all border-2 border-transparent hover:border-[#42A5D6] font-bold" href="#">Returns</a>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-2/4 mt-8 lg:mt-0">
                <h3 className="mb-6 text-xl font-black font-heading tracking-tight text-white border-b-4 border-[#2DD4A8] inline-block pb-2">GET THE APP</h3>
                <div className="flex gap-4 mb-8">
                  <a href="#" className="inline-block bg-black text-white px-4 py-2 border-2 border-white hover:border-[#2DD4A8] transition-colors">
                    <span className="block text-xs">Download on the</span>
                    <span className="block font-bold text-lg">App Store</span>
                  </a>
                  <a href="#" className="inline-block bg-black text-white px-4 py-2 border-2 border-white hover:border-[#2DD4A8] transition-colors">
                    <span className="block text-xs">GET IT ON</span>
                    <span className="block font-bold text-lg">Google Play</span>
                  </a>
                </div>
                <h3 className="mb-4 text-xl font-black font-heading tracking-tight text-white border-b-4 border-[#42A5D6] inline-block pb-2">SECURE PAYMENTS</h3>
                <div className="flex gap-4">
                  <div className="bg-white px-3 py-1 border-2 border-black font-bold text-[#1B2B5B]">VISA</div>
                  <div className="bg-white px-3 py-1 border-2 border-black font-bold text-[#1B2B5B]">Apple Pay</div>
                  <div className="bg-white px-3 py-1 border-2 border-black font-bold text-[#1B2B5B]">Mada</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t-4 border-[#2DD4A8] pt-8">
          <p className="lg:text-center text-lg text-[#F5F5F5] font-bold tracking-wider">ALL RIGHTS RESERVED. &copy; 2026 SPIRIT HEALTHCARE.</p>
        </div>
      </div>
    </footer>
  );
};

export default IndexSectionCustomComponents8;
