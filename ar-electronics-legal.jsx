import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function ARElectronicsLegal() {
  const [activeTab, setActiveTab] = useState('legal');

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
          
          <a href="/" className="text-sm text-stone-600 hover:text-amber-700 transition font-medium">Back to Home</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-stone-100 py-20">
        <div className="max-w-6xl mx-auto px-8">
          <h1 className="text-5xl font-bold text-stone-900 mb-6 animate-fade-up" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Legal & Policies
          </h1>
          <p className="text-xl text-stone-600 font-normal max-w-2xl">
            Important information about our services, privacy, and terms of use.
          </p>
        </div>
      </section>

      {/* Tabs */}
      <section className="max-w-6xl mx-auto px-8 py-20">
        <div className="flex gap-4 mb-12 border-b border-stone-200">
          {[
            { id: 'legal', label: 'Legal Notice' },
            { id: 'terms', label: 'Terms & Conditions' },
            { id: 'privacy', label: 'Privacy Policy' },
            { id: 'refund', label: 'Refund Policy' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-4 text-sm font-bold transition-colors duration-300 border-b-2 ${
                activeTab === tab.id
                  ? 'border-amber-700 text-amber-700'
                  : 'border-transparent text-stone-600 hover:text-stone-900'
              }`}
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Legal Notice */}
        {activeTab === 'legal' && (
          <div className="animate-fade-up">
            <h2 className="text-3xl font-bold text-stone-900 mb-8" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Legal Notice
            </h2>
            
            <div className="space-y-8 text-stone-600 font-normal leading-relaxed">
              <div>
                <h3 className="text-lg font-bold text-stone-900 mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>Business Information</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-stone-500 mb-1">Business Name</p>
                    <p>A R Electronic Service TV & Appliance HVAC+R</p>
                  </div>
                  <div>
                    <p className="text-sm text-stone-500 mb-1">Registered Company Name</p>
                    <p>A R Electronic Repair Sales & Appliances</p>
                  </div>
                  <div>
                    <p className="text-sm text-stone-500 mb-1">Address</p>
                    <p>23172 Dracaea Ave, Moreno Valley, California 92553, United States</p>
                  </div>
                  <div>
                    <p className="text-sm text-stone-500 mb-1">Phone Number</p>
                    <p>+1 (951) 227-8016</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-stone-900 mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>Website Information</h3>
                <p>This website is owned and operated by A R Electronics. All content, including but not limited to text, images, and logos, is the property of A R Electronics and is protected by applicable copyright and trademark laws.</p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-stone-900 mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>Disclaimer</h3>
                <p>The information provided on this website is for general informational purposes only. A R Electronics makes no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information on this website.</p>
              </div>
            </div>
          </div>
        )}

        {/* Terms & Conditions */}
        {activeTab === 'terms' && (
          <div className="animate-fade-up">
            <h2 className="text-3xl font-bold text-stone-900 mb-8" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Terms and Conditions
            </h2>
            
            <div className="space-y-6 text-stone-600 font-normal leading-relaxed">
              <div>
                <h3 className="text-lg font-bold text-stone-900 mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>1. Acceptance of Terms</h3>
                <p>By accessing and using this website and/or receiving our services, you agree that you are responsible for reading the entire item listing or service description before committing to purchase or request service. You are entering into a legally binding contract when you agree to purchase an item or request a service.</p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-stone-900 mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>2. Modifications to Terms</h3>
                <p>We reserve the right to modify these terms from time to time at our sole discretion. Therefore, you should review these pages periodically. When we change the Terms in a material way, we will notify you that material changes have been made to the Terms. Your continued use of the website or our service after such change constitutes your acceptance of the new Terms. If you do not agree to any of these terms or any future versions of the Terms, do not use or access (or continue to access) the Website or the Service.</p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-stone-900 mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>3. Service Description</h3>
                <p>A R Electronics provides professional HVAC, appliance repair, and television services. All services are performed by licensed technicians. We provide diagnostic services, repair services, maintenance services, and system replacement services.</p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-stone-900 mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>4. Limitation of Liability</h3>
                <p>In no event shall A R Electronics be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on this website, even if A R Electronics or an authorized representative has been notified verbally or in writing of the possibility of such damage.</p>
              </div>
            </div>
          </div>
        )}

        {/* Privacy Policy */}
        {activeTab === 'privacy' && (
          <div className="animate-fade-up">
            <h2 className="text-3xl font-bold text-stone-900 mb-8" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Privacy Policy
            </h2>
            
            <div className="space-y-6 text-stone-600 font-normal leading-relaxed">
              <div>
                <h3 className="text-lg font-bold text-stone-900 mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>1. Age Requirement</h3>
                <p>In order to use our website and/or receive our services, you must be at least 18 years of age, or the legal age of majority in your jurisdiction, and possess the legal authority, right and freedom to enter into these Terms as a binding agreement. You are not permitted to use this website and/or receive services if doing so is prohibited in your country or under any law or regulation applicable to you.</p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-stone-900 mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>2. Information We Collect</h3>
                <p>We collect information necessary to provide our services, including but not limited to your name, phone number, address, and service request details. This information is collected directly from you when you contact us or request our services.</p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-stone-900 mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>3. How We Use Your Information</h3>
                <p>We use the information we collect to provide our repair and maintenance services, to contact you regarding your service request, to improve our services, and to comply with applicable laws and regulations. We do not sell, trade, or otherwise transfer your information to third parties without your consent.</p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-stone-900 mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>4. Data Security</h3>
                <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.</p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-stone-900 mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>5. Contact Us</h3>
                <p>If you have any questions about our privacy practices, please contact us at arelectronicusa@gmail.com or call (951) 227-8016.</p>
              </div>
            </div>
          </div>
        )}

        {/* Refund Policy */}
        {activeTab === 'refund' && (
          <div className="animate-fade-up">
            <h2 className="text-3xl font-bold text-stone-900 mb-8" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Refund Policy
            </h2>
            
            <div className="space-y-6 text-stone-600 font-normal leading-relaxed">
              <div>
                <h3 className="text-lg font-bold text-stone-900 mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>Our Refund & Returns Policy</h3>
                <p>At A R Electronics, we stand behind the quality of our work. If you are not satisfied with our service, please contact us to discuss your concerns and explore potential solutions.</p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-stone-900 mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>Diagnostic Fee</h3>
                <p>The diagnostic fee is charged for the evaluation of your equipment. If you choose to proceed with repairs, the diagnostic fee will be credited toward the cost of the repair. If you choose not to proceed with repairs, you are responsible for paying only the diagnostic fee.</p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-stone-900 mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>Repair Warranty</h3>
                <p>All completed repairs come with a 90-day warranty on parts and labor. If the repaired item fails within this period due to our workmanship, we will repair or replace it at no additional charge.</p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-stone-900 mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>Dissatisfaction with Service</h3>
                <p>If you are dissatisfied with the quality of our work, please contact us as soon as possible. We will work with you to resolve any issues. Contact us at (951) 227-8016 or arelectronicusa@gmail.com to discuss your concerns.</p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-stone-900 mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>Payment Terms</h3>
                <p>Payment is due upon completion of the service unless other arrangements have been made. We accept cash, credit card, and other payment methods as discussed at the time of service.</p>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 border-t border-stone-800 py-16 mt-20">
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
          
          <div className="text-center text-sm font-normal">
            <p>&copy; 2026 A R Electronics. All rights reserved.</p>
            <p className="mt-4 text-xs text-stone-500">
              <a href="/" className="hover:text-amber-700 mr-4">Home</a>
              <a href="/gallery" className="hover:text-amber-700">Gallery</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
