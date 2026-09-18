import React, { useState, useEffect, useRef } from 'react';
import { Phone, Mail, MapPin, ChevronDown, CheckCircle2 } from 'lucide-react';

// Intersection Observer hook for scroll animations
const useInView = (ref, threshold = 0.1) => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.unobserve(entry.target);
      }
    }, { threshold });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, threshold]);

  return isInView;
};

// Animated counter component
const AnimatedCounter = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);
    const interval = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(interval);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(interval);
  }, [end, duration]);

  return <span>{count}+</span>;
};

export default function ARElectronicsAnimated() {
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll to section function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: 'Services', id: 'services' },
    { label: 'About', id: 'about' },
    { label: 'Contact', id: 'contact' }
  ];

  // Refs for scroll animations
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const statsRef = useRef(null);
  const testimonialsRef = useRef(null);

  const heroInView = useInView(heroRef);
  const servicesInView = useInView(servicesRef);
  const statsInView = useInView(statsRef);
  const testimonialsInView = useInView(testimonialsRef);

  return (
    <div className="min-h-screen bg-stone-50 overflow-hidden" style={{ backgroundColor: '#faf8f5', fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`
        html {
          scroll-behavior: smooth;
        }

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

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(180, 83, 9, 0.4);
          }
          50% {
            box-shadow: 0 0 0 10px rgba(180, 83, 9, 0);
          }
        }

        .animate-fade-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .animate-slide-left {
          animation: slideInLeft 0.6s ease-out forwards;
        }

        .animate-slide-right {
          animation: slideInRight 0.6s ease-out forwards;
        }

        .animate-scale-in {
          animation: scaleIn 0.6s ease-out forwards;
        }

        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.2s; }
        .stagger-3 { animation-delay: 0.3s; }
        .stagger-4 { animation-delay: 0.4s; }

        .service-card {
          transition: all 0.3s cubic-bezier(0.23, 1, 0.320, 1);
        }

        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
        }

        .glow-button {
          animation: pulse-glow 2s infinite;
        }
      `}</style>

      {/* Navigation - Sticky with fade-in */}
      <nav className="sticky top-0 bg-stone-50/95 backdrop-blur-sm border-b border-stone-200 z-40 animate-fade-up">
        <div className="max-w-6xl mx-auto px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <div 
              className="w-12 h-12 bg-gray-300 rounded-lg flex items-center justify-center text-gray-600 font-bold text-xs border-2 border-dashed border-gray-400 transition-transform duration-300 hover:scale-110"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              [LOGO]
            </div>
            <div>
              <div className="text-sm font-bold text-stone-900" style={{ fontFamily: "'Poppins', sans-serif" }}>A R Electronics</div>
              <div className="text-xs text-stone-500">Inland Empire</div>
            </div>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link, i) => (
              <button 
                key={i}
                onClick={() => scrollToSection(link.id)}
                className="text-sm text-stone-600 hover:text-amber-700 transition-colors duration-300 font-medium cursor-pointer bg-none border-none"
              >
                {link.label}
              </button>
            ))}
          </div>

          <a href="tel:9512278016" className="text-amber-700 hover:text-amber-800 text-sm font-bold transition-colors duration-300" style={{ fontFamily: "'Poppins', sans-serif" }}>
            (951) 227-8016
          </a>
        </div>
      </nav>

      {/* Hero Section - Fade */}
      <section 
        id="hero"
        ref={heroRef}
        className="relative h-96 overflow-hidden mb-20"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900/70 to-stone-900/40"></div>
        <div className="absolute inset-0 bg-cover bg-center" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1200 600%22%3E%3Crect fill=%22%23d4a574%22 width=%221200%22 height=%22600%22/%3E%3Crect fill=%22%2388654a%22 x=%22100%22 y=%22150%22 width=%22400%22 height=%22300%22 rx=%2210%22 opacity=%220.3%22/%3E%3Crect fill=%22%23a67c52%22 x=%22700%22 y=%22180%22 width=%22350%22 height=%22250%22 rx=%2210%22 opacity=%220.2%22/%3E%3C/svg%3E")',
          backgroundSize: 'cover'
        }}></div>
        
        <div className="relative h-full flex items-center">
          <div className="max-w-6xl mx-auto px-8 w-full">
            <h1 
              className={`text-5xl md:text-6xl font-bold text-white mb-6 leading-tight max-w-3xl ${heroInView ? 'animate-fade-up' : 'opacity-0'}`}
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              HVAC, appliance and TV repair you can trust
            </h1>
            <p 
              className={`text-xl text-stone-100 font-normal mb-10 max-w-2xl leading-relaxed ${heroInView ? 'animate-fade-up stagger-1' : 'opacity-0'}`}
            >
              Same-day service available. Licensed technicians. Transparent pricing. No hidden fees.
            </p>
            <a 
              href="tel:9512278016" 
              className={`inline-block bg-amber-700 hover:bg-amber-800 text-white px-8 py-4 text-sm font-bold transition-all duration-300 glow-button ${heroInView ? 'animate-fade-up stagger-2' : 'opacity-0'}`}
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Call Now (951) 227-8016
            </a>
          </div>
        </div>
      </section>

      {/* Services Overview - Staggered Cards */}
      <section id="services" className="max-w-6xl mx-auto px-8 py-20" ref={servicesRef}>
        <h2 
          className={`text-4xl font-bold text-stone-900 mb-16 ${servicesInView ? 'animate-fade-up' : 'opacity-0'}`}
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          What we fix
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: 'M13 10V3L4 14h7v7l9-11h-7z',
              color: 'blue',
              title: 'HVAC Systems',
              desc: 'Air conditioning, heating, heat pumps, furnaces. Installation, repair, and maintenance for residential and commercial properties. 24/7 emergency available.',
              items: ['Same-day service', '90-day warranty', 'Emergency repair']
            },
            {
              icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z',
              color: 'green',
              title: 'Appliance Repair',
              desc: 'Washers, dryers, refrigerators, ovens, dishwashers, and more. Fast diagnosis and repair with genuine parts and honest pricing.',
              items: ['All major brands', 'Genuine parts', 'Fixed pricing upfront']
            },
            {
              icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
              color: 'purple',
              title: 'TV Services',
              desc: 'Professional diagnosis and repair for all TV brands. Free evaluation to identify the problem and explain your options.',
              items: ['Free diagnosis', 'In-home or shop repair', '90-day warranty']
            }
          ].map((service, i) => (
            <div 
              key={i}
              className={`bg-white border border-stone-200 p-10 rounded-lg service-card ${servicesInView ? 'animate-fade-up' : 'opacity-0'}`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className={`w-16 h-16 bg-${service.color}-50 rounded-lg flex items-center justify-center mb-6 transition-transform duration-300 hover:scale-110`}>
                <svg className={`w-8 h-8 text-${service.color}-600`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-stone-900 mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>{service.title}</h3>
              <p className="text-stone-600 font-normal mb-6 leading-relaxed">
                {service.desc}
              </p>
              <ul className="space-y-2 text-sm text-stone-600">
                {service.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-2 transition-transform duration-300 hover:translate-x-1">
                    <CheckCircle2 size={16} className="text-amber-700 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works - Numbered Steps */}
      <section className="bg-stone-100 py-20">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-4xl font-bold text-stone-900 mb-16 animate-fade-up" style={{ fontFamily: "'Poppins', sans-serif" }}>How we work</h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            {['You call', 'We confirm', 'We diagnose', 'You approve'].map((step, i) => (
              <div 
                key={i}
                className="bg-white p-8 rounded-lg border border-stone-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fade-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="text-5xl font-bold text-amber-700 mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  0{i + 1}
                </div>
                <h3 className="text-lg font-bold text-stone-900 mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>{step}</h3>
                <p className="text-stone-600 font-normal text-sm leading-relaxed">
                  {['Tell us what\'s wrong. We answer 24/7.', 'Quote diagnostic fee. Confirm arrival time.', 'Identify problem. Photograph it. Fixed price.', 'Approve repair. Full warranty. Written report.'][i]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats with Animated Counters */}
      <section id="about" className="max-w-6xl mx-auto px-8 py-20" ref={statsRef}>
        <h2 className={`text-4xl font-bold text-stone-900 mb-16 ${statsInView ? 'animate-fade-up' : 'opacity-0'}`} style={{ fontFamily: "'Poppins', sans-serif" }}>
          Why A R Electronics
        </h2>
        
        <div className="grid md:grid-cols-3 gap-12">
          {[
            { label: 'Five-star Google reviews from real customers', num: 13 },
            { label: 'Years serving Inland Empire families and businesses', num: 15 },
            { label: 'Transparent pricing. Honest diagnosis.', num: 100, symbol: '%' }
          ].map((stat, i) => (
            <div 
              key={i}
              className={`${statsInView ? 'animate-fade-up' : 'opacity-0'}`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="text-5xl font-bold text-amber-700 mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
                {statsInView ? <AnimatedCounter end={stat.num} /> : '0'}
                {stat.symbol}
              </div>
              <p className="text-stone-600 font-normal text-lg leading-relaxed">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials - Fade in on scroll */}
      <section className="bg-amber-50 py-20" ref={testimonialsRef}>
        <div className="max-w-6xl mx-auto px-8">
          <h2 className={`text-4xl font-bold text-stone-900 mb-16 ${testimonialsInView ? 'animate-fade-up' : 'opacity-0'}`} style={{ fontFamily: "'Poppins', sans-serif" }}>
            Real reviews from customers
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { text: 'Fixed my AC unit and did a great cleaning on my unit. Professional and fast service.', name: 'Horacio Montes', date: 'August 2023' },
              { text: 'Alberto fixed my espresso machine electronic control for a reasonable price on a Sunday after hours.', name: 'Joseph Bland', date: 'June 2023' }
            ].map((review, i) => (
              <div 
                key={i}
                className={`bg-white p-10 rounded-lg border border-stone-200 transition-all duration-500 hover:shadow-lg hover:-translate-y-2 ${testimonialsInView ? 'animate-fade-up' : 'opacity-0'}`}
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-5 h-5 fill-amber-700 transition-transform duration-300 hover:scale-125" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-stone-700 font-normal mb-6 text-lg leading-relaxed">
                  "{review.text}"
                </p>
                <p className="text-stone-900 font-bold" style={{ fontFamily: "'Poppins', sans-serif" }}>{review.name}</p>
                <p className="text-stone-500 text-sm">{review.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ - Smooth expand */}
      <section className="max-w-6xl mx-auto px-8 py-20">
        <h2 className="text-4xl font-bold text-stone-900 mb-16 animate-fade-up" style={{ fontFamily: "'Poppins', sans-serif" }}>Questions?</h2>
        
        <div className="space-y-4 max-w-3xl">
          {[
            { q: "What's the diagnostic fee?", a: "We quote the diagnostic fee before dispatch. It covers travel and the on-site inspection. When you approve the repair, that fee comes off your total bill." },
            { q: "Can I get emergency service?", a: "Yes, 24/7. Emergency calls pay the same diagnostic rate as business hours. No extra charge for after-hours service." },
            { q: "What areas do you serve?", a: "Moreno Valley, Riverside, San Bernardino, Corona, Fontana, and the greater Inland Empire." },
            { q: "Do you have maintenance plans?", a: "Yes. Regular maintenance prevents breakdowns and extends your equipment's life. Call us to discuss a plan." },
            { q: "What if I don't want the repair?", a: "No problem. You only pay the diagnostic fee. It's totally your call whether to proceed." }
          ].map((faq, i) => (
            <div key={i} className="border-b border-stone-200">
              <button
                onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                className="w-full text-left py-5 flex items-center justify-between hover:text-amber-700 transition-colors duration-300 group"
              >
                <h3 className="text-lg font-bold text-stone-900 group-hover:text-amber-700" style={{ fontFamily: "'Poppins', sans-serif" }}>{faq.q}</h3>
                <ChevronDown size={20} className={`text-stone-400 transition-all duration-300 ${expandedFaq === i ? 'rotate-180' : ''}`} />
              </button>
              {expandedFaq === i && (
                <p className="text-stone-600 font-normal leading-relaxed pb-6 text-base animate-fade-up">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA - Animated */}
      <section id="contact" className="bg-stone-900 text-white py-24 mt-20">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-5xl font-bold mb-8 text-center animate-fade-up" style={{ fontFamily: "'Poppins', sans-serif" }}>Ready to get it fixed?</h2>
          <p className="text-xl text-stone-300 font-normal mb-12 max-w-2xl mx-auto leading-relaxed text-center animate-fade-up stagger-1">
            Call us now. We'll answer your call, answer your questions, and get someone out to help.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href="tel:9512278016" 
              className="bg-amber-700 hover:bg-amber-800 text-white px-10 py-5 text-base font-bold transition-all duration-300 flex items-center gap-2 rounded-lg transform hover:scale-105 glow-button animate-fade-up stagger-2"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              <Phone size={20} />
              Call (951) 227-8016
            </a>
            <p className="text-stone-400 font-normal animate-fade-up stagger-3">Available 24/7 for emergencies</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 border-t border-stone-800 py-16">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12 pb-12 border-b border-stone-800">
            {[
              { title: 'Contact', items: ['(951) 227-8016', '24/7 Emergency'] },
              { title: 'Hours', items: ['Mon - Sat: 8:30 AM - 4:30 PM', 'Emergency anytime'] },
              { title: 'Location', items: ['23172 Dracaea Ave', 'Moreno Valley, CA 92553'] },
              { title: 'Email', items: ['arelectronicusa@gmail.com'] }
            ].map((col, i) => (
              <div key={i} className="transition-transform duration-300 hover:translate-y-1">
                <p className="text-stone-300 font-bold mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>{col.title}</p>
                {col.items.map((item, j) => (
                  <p key={j} className="font-normal text-sm leading-relaxed hover:text-amber-700 transition-colors duration-300">
                    {item}
                  </p>
                ))}
              </div>
            ))}
          </div>
          
          <div className="text-center text-sm font-normal">
            <p>&copy; 2026 A R Electronics. All rights reserved.</p>
            <p className="mt-4 text-xs text-stone-500 space-x-4">
              <a href="/gallery" className="hover:text-amber-700">Gallery</a>
              <span>•</span>
              <a href="/legal" className="hover:text-amber-700">Legal</a>
              <span>•</span>
              <a href="/legal" className="hover:text-amber-700">Privacy</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
