import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import SEO, { KEYWORDS } from '../components/SEO';

// Import the 13 new before-and-after videos
import ba1 from '../assets/images/ba1.mp4';
import ba2 from '../assets/images/ba2.mp4';
import ba3 from '../assets/images/ba3.mp4';
import ba4 from '../assets/images/ba4.mp4';
import ba5 from '../assets/images/ba5.mp4';
import ba6 from '../assets/images/ba6.mp4';
import ba7 from '../assets/images/ba7.mp4';
import ba8 from '../assets/images/ba8.mp4';
import ba9 from '../assets/images/ba9.mp4';
import ba10 from '../assets/images/ba10.mp4';
import ba11 from '../assets/images/ba11.mp4';
import ba12 from '../assets/images/ba12.mp4';
import seq2 from '../assets/images/seq2.mp4';

const BeforeAfterVideo = () => {
  const [visibleItems, setVisibleItems] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => {
              const next = new Set(prev);
              next.add(entry.target.id);
              return next;
            });
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px 50px 0px',
      }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const caseStudies = [
    { id: 1, src: ba1, category: "Paint Correction" },
    { id: 2, src: ba2, category: "Ceramic Coating" },
    { id: 3, src: ba3, category: "Interior Detailing" },
    { id: 4, src: ba4, category: "Paint Correction" },
    { id: 5, src: ba5, category: "Interior Detailing" },
    { id: 6, src: ba6, category: "Polishing" },
    { id: 7, src: ba7, category: "Exterior Detailing" },
    { id: 8, src: ba8, category: "Wheel Detail" },
    { id: 9, src: ba9, category: "Paint Correction" },
    { id: 10, src: ba10, category: "Ceramic Coating" },
    { id: 11, src: ba11, category: "Full Detail" },
    { id: 12, src: ba12, category: "Full Detail" },
    { id: 13, src: seq2, category: "Process Walkthrough" }
  ];

  const beforeAfterKeywords = 'car detailing before and after, auto detailing gallery, car paint correction before and after, ceramic coating before and after winnipeg, car detailing portfolio, winnipeg auto detailing results, detailing transformations';

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Comprehensive SEO Meta configuration for Search Engine Indexing */}
      <SEO
        title="Before & After Car Detailing Results | Action Car Detailing Winnipeg"
        description="Browse real-life auto detailing, ceramic coating, and paint correction before & after video results. See the expert craftsmanship from Action Car Detailing in Winnipeg."
        canonical="https://actioncardetailing.ca/before-after"
        keywords={beforeAfterKeywords}
        serviceType="Auto Detailing Results Portfolio"
        serviceDesc="Watch auto detailing and ceramic coating before/after videos. Experience real car paint correction transformations from our Winnipeg studio."
        breadcrumbs={[
          { name: 'Home', url: 'https://actioncardetailing.ca' },
          { name: 'Before & After', url: 'https://actioncardetailing.ca/before-after' }
        ]}
      />

      {/* Hero Header */}
      <div className="pt-24 pb-12 sm:pt-28 sm:pb-16 md:pt-32 text-center px-4 bg-gradient-to-b from-[#1393c4]/10 via-transparent to-transparent">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#1393c4] uppercase block mb-2">
            Our Portfolio
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#1393c4] leading-tight mb-4">
            Before & After Transformations
          </h1>
          <div className="w-24 sm:w-32 h-1.5 rounded-full mx-auto mb-6 bg-gradient-to-r from-[#1393c4] to-cyan-500"></div>
          <p className="text-base sm:text-lg md:text-xl text-[#1393c4] max-w-2xl mx-auto leading-relaxed opacity-95">
            Witness the ultimate clarity, gloss, and deep clean achieved through our factory-trained detailing and paint correction processes.
          </p>
        </div>
      </div>

      {/* Video Grid Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {caseStudies.map((caseStudy, index) => {
            const isVisible = visibleItems.has(`card-${caseStudy.id}`);
            return (
              <div
                key={caseStudy.id}
                id={`card-${caseStudy.id}`}
                className={`animate-on-scroll group bg-white/60 backdrop-blur-md border border-[#1393c4]/10 rounded-2xl shadow-md hover:shadow-2xl hover:border-[#1393c4]/30 hover:bg-white transform transition-all duration-1000 ease-out overflow-hidden ${
                  isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-16 scale-95'
                }`}
                style={{
                  transitionDelay: `${(index % 2) * 150}ms`,
                }}
              >

                {/* Video Player */}
                <div className="relative aspect-video w-full bg-slate-900 overflow-hidden shadow-inner group-hover:brightness-105 transition-all duration-300">
                  <video
                    className="w-full h-full object-cover"
                    preload="auto"
                    autoPlay
                    playsInline
                    muted
                    loop
                    webkit-playsinline="true"
                  >
                    <source src={caseStudy.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="bg-white">
        <ContactForm />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default BeforeAfterVideo;