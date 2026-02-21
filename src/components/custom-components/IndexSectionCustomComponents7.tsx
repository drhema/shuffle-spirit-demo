import React from 'react';
import Link from 'next/link';

const categorySlugMap: Record<string, string> = {
  'Fragrances': '/category/fragrances',
  'Baby Care & Diapers': '/category/baby-care',
  'Vitamins': '/category/vitamins-supplements',
  'Skin Care': '/category/skincare',
  'Baby Accessories': '/category/baby-care',
  'Personal Care': '/category/personal-care',
  'Hair Care': '/category/hair-care',
  'Baby Milk & Food': '/category/baby-care',
  'Sport Nutrition': '/category/sport-nutrition',
};

const categories = [
  { title: 'Fragrances', items: ['For Her', 'For Him', 'Unisex', 'Orientals', 'Kids Fragrances', 'Gift Set', 'Niche Fragrances', 'Hair Mist'] },
  { title: 'Makeup', items: ['Lipstick', 'Eye Makeup', 'Face Makeup', 'Nail Colors', 'Eye Lashes', 'Contact Lenses', 'Makeup Tools', 'Earrings', 'Beauty Accessories'] },
  { title: 'Baby Care & Diapers', items: ['Regular Diapers', 'Pants Diapers', 'Premium Diapers', 'Diapers Changing', 'Baby Shampoo', 'Baby Skin Care', 'Kids Care (+3 years)', 'Baby Wipes', 'Baby Grooming'] },
  { title: 'Vitamins', items: ['Hair Vitamins', 'Skin Radiance', 'Multivitamins', 'Weight Control', 'Pregnancy Care', "Kids' Health", 'Sleep Aids', 'Heart Health', 'Diabetes Care'] },
  { title: 'Skin Care', items: ['Moisturizers', 'Cleansers', 'Sun Care', 'Brightening', 'Serum', 'Korean Beauty', 'Masks', 'Natural Beauty', 'Skin Tech Tools'] },
  { title: 'Baby Accessories', items: ['Strollers', 'Baby Safety', 'Toys', 'Baby Carrier', 'Car Seat', 'Baby Walker', 'Bouncers & Swingers', 'Baby Beds'] },
  { title: 'Personal Care', items: ['Deodorants', 'Hair Removal', 'Sexual Wellbeing', 'Oral Care', 'Lady Care', 'Bath & Body', 'Hygienic Care', 'Blades & Razors'] },
  { title: 'Hair Care', items: ['Shampoo', 'Conditioner', 'Salon Treatment', 'Natural Hair Products', 'Hair Color', 'Hair Treatments', 'Hair Styling', 'Oils & Serums', 'Electrical Hair Tools'] },
  { title: 'Baby Milk & Food', items: ['Baby Milk', 'Baby Food', 'Bottles', 'Milk Preparation', 'Pacifiers', 'Meal Accessories', 'Burping Bibs', 'High Chair'] },
  { title: 'Sport Nutrition', items: ['Whey Protein', 'Mass Gainer', 'Creatine', 'L-Arginine', 'BCAA', 'Glutamine', 'Protein Bars', 'Fat Burner', 'Shakers'] },
  { title: 'Healthy Devices', items: ['Diabetic Care', 'Heart Monitors', 'Thermometer', 'Massagers', 'Weighing Scales', 'Health Trackers', 'Home Health Test', 'Foot Spa'] },
  { title: 'Home Health Care', items: ['Body Support', 'Cushions & Pillows', 'Face Masks', 'Cold & Hot Compress', 'Wound Care', 'Adult Sanitary Care', 'Wheelchairs & Scooters', 'Bathroom Safety', 'Medical Bed'] },
  { title: 'Healthy Nutrition', items: ['Honey', 'Protein Bar', 'Diet Chocolate', 'Hydration Drinks', 'Sweeteners', 'Meal Replacement', 'Natural Water', 'Herbal Tea'] },
  { title: 'Lady Care', items: ['Sanitary Napkins', 'Blades & Razors', 'Wax & Halawa', 'Electrical Hair Removals', 'Depilatory Hair Removals', 'Pantyliners', 'Intimate Wash & Wipes', 'Tampons'] },
  { title: 'Bath & Body', items: ['Salt Bath', 'Body Lotion', 'Body Mist', 'Body Scrub', 'Hand Wash', 'Shower Gel', 'Bar Soap'] },
];

const IndexSectionCustomComponents7: React.FC = () => {
  return (
    <section className="py-10 bg-white border-t-4 border-black">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-x-6 gap-y-8">
          {categories.map((cat) => {
            const catHref = categorySlugMap[cat.title];
            return (
              <div key={cat.title}>
                {catHref ? (
                  <Link href={catHref} className="font-black font-heading text-[#1B2B5B] text-sm mb-3 border-b-4 border-[#2DD4A8] pb-1 inline-block hover:text-[#42A5D6] transition-colors">{cat.title}</Link>
                ) : (
                  <h4 className="font-black font-heading text-[#1B2B5B] text-sm mb-3 border-b-4 border-[#2DD4A8] pb-1 inline-block">{cat.title}</h4>
                )}
                <ul className="space-y-1.5">
                  {cat.items.map((item) => (
                    <li key={item}>
                      <a href="#" className="text-gray-500 text-xs font-bold hover:text-[#42A5D6] transition-colors">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndexSectionCustomComponents7;
