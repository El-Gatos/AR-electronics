import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ARElectronicsGallery() {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const projects = [
    {
      title: 'HVAC System Installation',
      description: 'Complete air conditioning system replacement for residential property',
      beforeImg: 'bg-blue-200',
      afterImg: 'bg-blue-400',
      category: 'HVAC',
      date: 'January 2025'
    },
    {
      title: 'Appliance Repair - Washer',
      description: 'Diagnostic and repair of residential washing machine',
      beforeImg: 'bg-green-200',
      afterImg: 'bg-green-400',
      category: 'Appliance',
      date: 'December 2024'
    },
    {
      title: 'TV Repair Service',
      description: 'Professional TV repair and restoration',
      beforeImg: 'bg-purple-200',
      afterImg: 'bg-purple-400',
      category: 'TV',
      date: 'November 2024'
    },
    {
      title: 'Commercial HVAC Maintenance',
      description: 'Large-scale commercial HVAC system maintenance and cleaning',
      beforeImg: 'bg-orange-200',
      afterImg: 'bg-orange-400',
      category: 'HVAC',
      date: 'October 2024'
    },
    {
      title: 'Refrigerator Repair',
      description: 'Compressor replacement and refrigerant refill',
      beforeImg: 'bg-red-200',
      afterImg: 'bg-red-400',
      category: 'Appliance',
      date: 'September 2024'
    },
    {
      title: 'Heat Pump Installation',
      description: 'New heat pump system installation for energy efficiency',
      beforeImg: 'bg-indigo-200',
      afterImg: 'bg-indigo-400',
      category: 'HVAC',
      date: 'August 2024'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="min-h-screen bg-stone-50" style={{ backgroundColor: '#faf8f5', fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&family=DM+Sans:wght@400;500;700&display=swap');

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>

      {/* Navigation */}
      <nav className="sticky top-0 bg-stone-50/95 backdrop-blur-sm border-b border-stone-200 z-40">
        <div className="max-w-6xl mx-auto px-8 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition">
            <div 
              className="w-12 h-12 bg-gray-300 rounded-lg flex items-center justify-center text-gray-600 font-bold text-xs border-2 border-dashed border-gray-400"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              [LOGO]
            </div>
            <div>
              <div className="text-sm font-bold text-stone-900" style={{ fontFamily: "'Poppins', sans-serif" }}>A R Electronics</div>
              <div className="text-xs text-stone-500">Inland Empire</div>
            </div>
          </a>
          
          <div className="flex items-center gap-8">
            <a href="/" className="text-sm text-stone-600 hover:text-amber-700 transition font-medium">Back to Home</a>
            <a href="tel:9512278016" className="text-amber-700 hover:text-amber-800 text-sm font-bold" style={{ fontFamily: "'Poppins', sans-serif" }}>
              (951) 227-8016
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-stone-100 py-20">
        <div className="max-w-6xl mx-auto px-8">
          <h1 className="text-5xl font-bold text-stone-900 mb-6 animate-fade-up" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Our Work
          </h1>
          <p className="text-xl text-stone-600 font-normal max-w-2xl animate-fade-up">
            See the quality of our repairs and installations. Real projects, real results from satisfied customers across Inland Empire.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="max-w-6xl mx-auto px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div 
              key={i}
              className="bg-white border border-stone-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 animate-fade-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="grid grid-cols-2 gap-0">
                <div className={`h-48 ${project.beforeImg} flex items-center justify-center text-white font-bold`}>
                  Before
                </div>
                <div className={`h-48 ${project.afterImg} flex items-center justify-center text-white font-bold`}>
                  After
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold text-amber-700 bg-amber-50 px-3 py-1 rounded-full" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    {project.category}
                  </span>
                  <span className="text-xs text-stone-500">{project.date}</span>
                </div>
                <h3 className="text-lg font-bold text-stone-900 mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  {project.title}
                </h3>
                <p className="text-stone-600 font-normal text-sm">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Project Slider */}
      <section className="bg-stone-100 py-20">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-4xl font-bold text-stone-900 mb-12 text-center" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Featured Project
          </h2>

          <div className="bg-white rounded-lg border border-stone-200 overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className={`h-96 ${projects[currentSlide].beforeImg} flex items-center justify-center`}>
                <div className="text-center">
                  <p className="text-white font-bold text-2xl" style={{ fontFamily: "'Poppins', sans-serif" }}>Before</p>
                </div>
              </div>
              <div className={`h-96 ${projects[currentSlide].afterImg} flex items-center justify-center`}>
                <div className="text-center">
                  <p className="text-white font-bold text-2xl" style={{ fontFamily: "'Poppins', sans-serif" }}>After</p>
                </div>
              </div>
            </div>

            <div className="p-8 border-t border-stone-200">
              <h3 className="text-2xl font-bold text-stone-900 mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
                {projects[currentSlide].title}
              </h3>
              <p className="text-stone-600 font-normal mb-6 text-lg">
                {projects[currentSlide].description}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  {projects.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentSlide(i)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        i === currentSlide ? 'bg-amber-700 w-8' : 'bg-stone-300'
                      }`}
                    />
                  ))}
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={prevSlide}
                    className="p-2 bg-stone-100 hover:bg-amber-700 text-stone-900 hover:text-white rounded-lg transition-all duration-300"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="p-2 bg-stone-100 hover:bg-amber-700 text-stone-900 hover:text-white rounded-lg transition-all duration-300"
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-stone-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Ready for your next repair?
          </h2>
          <p className="text-stone-300 font-normal mb-10 max-w-2xl mx-auto text-lg">
            We've helped hundreds of families and businesses in Inland Empire. Let us help you too.
          </p>
          <a 
            href="tel:9512278016"
            className="inline-block bg-amber-700 hover:bg-amber-800 text-white px-10 py-5 text-base font-bold transition-all duration-300"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Call (951) 227-8016
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 border-t border-stone-800 py-16">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12 pb-12 border-b border-stone-800">
            <div>
              <p className="text-stone-300 font-bold mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>Contact</p>
              <a href="tel:9512278016" className="font-normal hover:text-amber-700">
                (951) 227-8016
              </a>
              <p className="text-sm font-normal">24/7 Emergency</p>
            </div>
            <div>
              <p className="text-stone-300 font-bold mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>Hours</p>
              <p className="font-normal mb-1">Mon - Sat: 8:30 AM - 4:30 PM</p>
              <p className="text-sm font-normal">Emergency anytime</p>
            </div>
            <div>
              <p className="text-stone-300 font-bold mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>Location</p>
              <p className="font-normal text-sm leading-relaxed">
                23172 Dracaea Ave<br />
                Moreno Valley, CA 92553
              </p>
            </div>
            <div>
              <p className="text-stone-300 font-bold mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>Email</p>
              <a href="mailto:arelectronicusa@gmail.com" className="font-normal hover:text-amber-700">
                arelectronicusa@gmail.com
              </a>
            </div>
          </div>
          
          <div className="text-center text-sm font-normal mb-6">
            <p>&copy; 2026 A R Electronics. All rights reserved.</p>
          </div>

          <div className="text-center text-xs text-stone-500 space-x-4">
            <a href="/legal" className="hover:text-amber-700">Legal Notice</a>
            <span>•</span>
            <a href="/legal" className="hover:text-amber-700">Privacy Policy</a>
            <span>•</span>
            <a href="/legal" className="hover:text-amber-700">Terms & Conditions</a>
            <span>•</span>
            <a href="/gallery" className="hover:text-amber-700">Gallery</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
