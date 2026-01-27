import React, { ReactNode } from "react";

/* =======================
   Header
======================= */
const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full h-20 bg-white/90 backdrop-blur-md z-50 border-b flex items-center px-8 justify-between">
      <div className="font-bold text-xl text-[#1E245C]">
        HEALTHCARE
      </div>

      <nav className="space-x-6 hidden md:flex text-[#1E245C] font-medium">
        <a href="#" className="hover:text-blue-600">Home</a>
        <a href="#" className="hover:text-blue-600">Services</a>
        <a href="#" className="text-blue-600">Gallery</a>
        <a href="#" className="hover:text-blue-600">Contact</a>
      </nav>
    </header>
  );
};

/* =======================
   Footer
======================= */
const Footer = () => {
  return (
    <footer className="bg-[#1E245C] text-white py-12 text-center">
      <p>© 2026 Health & Fitness. All rights reserved.</p>
    </footer>
  );
};

/* =======================
   Layout
======================= */
// const Layout = ({ children }: { children: ReactNode }) => {
//   return (
//     <>
//       <Header />
//       <main className="pt-20">{children}</main>
//       <Footer />
//     </>
//   );
// };

/* =======================
   Gallery Data
======================= */
const galleryItems = [
  {
    id: 1,
    title: "Annual Conference",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
  },
  {
    id: 2,
    title: "Clinical Workshop",
    image: "https://images.unsplash.com/photo-1580281657521-6c1b1a6b7d91",
  },
  {
    id: 3,
    title: "Health Awareness Camp",
    image: "https://images.unsplash.com/photo-1504439468489-c8920d796a29",
  },
  {
    id: 4,
    title: "Leadership Meet",
    image: "https://images.unsplash.com/photo-1515168833906-d2a3b82b302a",
  },
  {
    id: 5,
    title: "Training Session",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655",
  },
  {
    id: 6,
    title: "CME Program",
    image: "https://images.unsplash.com/photo-1556761175-129418cb2dfe",
  },
];

/* =======================
   Gallery Page
======================= */
const GalleryPage = () => {
  return (
    <Layout>

      {/* =======================
         Hero Section (Screenshot Match)
      ======================= */}
      <section className="relative bg-[#EBF4FF] overflow-hidden">
        <div className="container mx-auto px-6 min-h-[520px] grid md:grid-cols-2 items-center relative">

          {/* Decorative Circles */}
          <div className="absolute right-[-120px] top-1/2 -translate-y-1/2 w-[520px] h-[520px] border border-blue-200 rounded-full opacity-40 pointer-events-none" />
          <div className="absolute right-[-180px] top-1/2 -translate-y-1/2 w-[720px] h-[720px] border border-blue-100 rounded-full opacity-30 pointer-events-none" />

          {/* Left Content */}
          <div className="max-w-xl py-24 relative z-10">
            <p className="text-[#1E245C] text-lg mb-4 tracking-wide">
              Welcome To
            </p>

            <h1 className="text-5xl md:text-6xl font-extrabold text-[#1E245C] leading-tight mb-6">
              Keep Up About Your <br />
              Health & Fitness
            </h1>

            <p className="text-[#1E245C]/70 text-lg leading-relaxed max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>

          {/* Right Image */}
          <div className="hidden md:flex justify-end items-end h-full relative z-10">
            <img
              src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80"
              alt="Doctor"
              className="max-h-[540px] w-auto object-contain"
            />
          </div>

        </div>
      </section>

      {/* =======================
         Gallery Grid
      ======================= */}
      <section className="py-24 bg-[#FAFAFD]">
        <div className="container mx-auto px-6">

          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-[#1E245C] mb-4">
              Gallery
            </h2>
            <p className="text-[#1E245C]/70 leading-relaxed">
              A glimpse into our conferences, workshops, training programs,
              and community initiatives.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-[2rem] shadow-xl bg-white"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#1E245C]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                  <div className="p-8">
                    <h3 className="text-white text-xl font-bold">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </Layout>
  );
};

export default GalleryPage;
