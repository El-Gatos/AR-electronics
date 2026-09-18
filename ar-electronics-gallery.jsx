import React, { useState } from 'react';

export default function ARElectronicsGallery() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedImg, setSelectedImg] = useState(null);

  // Mapped directly to your actual image uploads
  const projects = [
    {
      id: 1,
      src: '1.jpg',
      title: 'Appliance Board Diagnostic',
      category: 'Appliance',
      desc: 'Bench testing a faulty appliance control board.'
    },
    {
      id: 2,
      src: '2.jpg',
      title: 'Capacitor Replacement',
      category: 'HVAC',
      desc: 'Swapping a failed 45/5µF dual run capacitor to restore cooling.'
    },
    {
      id: 3,
      src: '3.jpg',
      title: 'Electrical Troubleshooting',
      category: 'HVAC',
      desc: 'Testing contactors and high-voltage wiring on an outdoor condenser.'
    },
    {
      id: 4,
      src: '4.jpg',
      title: 'PCB Teardown',
      category: 'Electronics',
      desc: 'Detailed component-level inspection of a main control board.'
    },
    {
      id: 6,
      src: '6.jpg',
      title: 'Main PCB Repair',
      category: 'Electronics',
      desc: 'Rewiring and relay replacement on a complex main board.'
    },
    {
      id: 7,
      src: '7.jpg',
      title: 'System Commissioning',
      category: 'HVAC',
      desc: 'Checking R-410A pressures and subcooling with a digital manifold.'
    },
    {
      id: 8,
      src: '8.jpg',
      title: 'Furnace Maintenance',
      category: 'HVAC',
      desc: 'Indoor gas furnace inspection, airflow check, and safety testing.'
    },
    {
      id: 9,
      src: '9.jpg',
      title: 'Condenser Installation',
      category: 'HVAC',
      desc: 'New outdoor AC condenser leveled and commissioned.'
    }
  ];

  const filters = ['All', 'HVAC', 'Appliance', 'Electronics'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen font-sans antialiased text-[#0a1930]" style={{ backgroundColor: '#FDFBF7' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700;800&display=swap');
        * { font-family: 'Manrope', sans-serif; }
      `}</style>

      {/* Navigation */}
      <nav className="border-b border-[#0a1930]/10 py-5 sticky top-0 bg-[#FDFBF7]/90 backdrop-blur-md z-40">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex flex-col">
            <span className="font-extrabold text-xl tracking-tight">A R ELECTRONIC</span>
            <span className="text-xs font-semibold tracking-widest text-[#0a1930]/60 uppercase">HVAC & Appliance Service</span>
          </div>
          <div className="flex items-center space-x-8">
            <a href="/" className="text-sm font-bold text-[#0a1930]/70 hover:text-[#005ce6] transition-colors">Back to Home</a>
            <a href="tel:9512278016" className="hidden md:block bg-[#005ce6] hover:bg-[#0047b3] text-white px-5 py-2.5 rounded-sm font-bold text-sm transition-colors">
              (951) 227-8016
            </a>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">Field Work Gallery</h1>
        <p className="text-xl font-medium text-[#0a1930]/70 max-w-2xl">
          Real jobs. Real diagnostics. See exactly what component-level repair and professional HVAC service looks like in the Inland Empire.
        </p>
      </header>

      {/* Filters */}
      <section className="max-w-7xl mx-auto px-6 mb-12">
        <div className="flex flex-wrap gap-3">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                activeFilter === filter 
                  ? 'bg-[#0a1930] text-[#FDFBF7]' 
                  : 'bg-[#0a1930]/5 text-[#0a1930]/70 hover:bg-[#0a1930]/10'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      {/* Masonry/Grid Gallery */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="group cursor-pointer flex flex-col"
              onClick={() => setSelectedImg(project)}
            >
              <div className="relative overflow-hidden rounded-sm bg-[#0a1930]/5 aspect-[4/3] mb-4">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ 
                    backgroundImage: `url('${project.src}')`,
                    backgroundColor: '#e2e8f0' 
                  }}
                >
                </div>
                <div className="absolute inset-0 bg-[#0a1930]/0 group-hover:bg-[#0a1930]/10 transition-colors duration-300"></div>
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 text-xs font-extrabold uppercase tracking-widest text-[#005ce6] rounded-sm">
                  {project.category}
                </div>
              </div>
              <h3 className="text-lg font-bold mb-1">{project.title}</h3>
              <p className="text-sm font-medium text-[#0a1930]/70">{project.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-50 bg-[#0a1930]/95 flex items-center justify-center p-4 backdrop-blur-sm cursor-pointer"
          onClick={() => setSelectedImg(null)}
        >
          <div className="max-w-5xl w-full flex flex-col" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="text-white text-xl font-bold">{selectedImg.title}</h3>
                <p className="text-white/70 text-sm font-medium">{selectedImg.desc}</p>
              </div>
              <button 
                onClick={() => setSelectedImg(null)}
                className="text-white/70 hover:text-white p-2"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <div className="relative bg-black rounded-sm overflow-hidden aspect-[4/3] md:aspect-video flex items-center justify-center">
              <img 
                src={selectedImg.src} 
                alt={selectedImg.title} 
                className="max-w-full max-h-[80vh] object-contain"
              />
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-[#0a1930] text-[#FDFBF7] py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-extrabold mb-2">A R Electronic Service</h3>
            <p className="text-white/60 font-medium text-sm leading-relaxed max-w-sm">
              Real diagnostics, flat-rate pricing, and component-level repair across the Inland Empire.
            </p>
          </div>
          <div className="md:text-right">
            <div className="text-sm font-bold uppercase tracking-widest text-white/40 mb-2">Direct Dispatch</div>
            <a href="tel:9512278016" className="text-3xl font-extrabold hover:text-[#005ce6] transition-colors block mb-2">(951) 227-8016</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
