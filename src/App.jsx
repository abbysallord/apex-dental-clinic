import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Sparkles, 
  Clock, 
  MapPin, 
  Phone, 
  Calendar, 
  Star, 
  Smile, 
  Award, 
  CheckCircle, 
  Menu, 
  X,
  ChevronRight,
  HeartPulse,
  UserCheck
} from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', service: 'General Checkup', date: '' });

  const handleBooking = (e) => {
    e.preventDefault();
    if (formData.name && formData.phone) {
      setBookingSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      {/* TOP ANNOUNCEMENT BAR */}
      <div className="bg-teal-900 text-teal-100 text-xs sm:text-sm py-2 px-4 text-center font-medium">
        ✨ Spring Smile Special: Complimentary Teeth Whitening with every Full Dental Exam! 
        <a href="#booking" className="underline ml-2 font-bold hover:text-white">Book Now</a>
      </div>

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-600 flex items-center justify-center text-white shadow-lg shadow-teal-600/30">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight text-slate-900">APEX</span>
              <span className="text-teal-600 font-bold ml-1 text-xl">DENTAL</span>
              <p className="text-[10px] uppercase tracking-widest text-slate-400 font-semibold -mt-1">Advanced Care Clinic</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-slate-600">
            <a href="#services" className="hover:text-teal-600 transition-colors">Services</a>
            <a href="#about" className="hover:text-teal-600 transition-colors">About Us</a>
            <a href="#testimonials" className="hover:text-teal-600 transition-colors">Reviews</a>
            <a href="#contact" className="hover:text-teal-600 transition-colors">Contact</a>
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2 text-slate-700 font-semibold text-sm">
              <Phone className="w-4 h-4 text-teal-600" />
              <span>(555) 382-7392</span>
            </div>
            <a 
              href="#booking"
              className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-5 py-2.5 rounded-xl shadow-lg shadow-teal-600/25 transition-all transform hover:-translate-y-0.5 text-sm"
            >
              Book Appointment
            </a>
          </div>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-teal-600"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-100 px-4 pt-2 pb-6 space-y-3">
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block py-2 font-medium text-slate-700">Services</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block py-2 font-medium text-slate-700">About Us</a>
            <a href="#testimonials" onClick={() => setMobileMenuOpen(false)} className="block py-2 font-medium text-slate-700">Reviews</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block py-2 font-medium text-slate-700">Contact</a>
            <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
              <div className="flex items-center gap-2 text-slate-700 font-semibold">
                <Phone className="w-4 h-4 text-teal-600" />
                <span>(555) 382-7392</span>
              </div>
              <a 
                href="#booking"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-teal-600 text-center text-white font-semibold py-3 rounded-xl shadow-md"
              >
                Book Appointment
              </a>
            </div>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-16 pb-24 lg:pt-24 lg:pb-32 bg-gradient-to-b from-teal-50/50 via-white to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-teal-100/80 text-teal-800 px-4 py-2 rounded-full text-xs font-bold tracking-wide uppercase">
                <ShieldCheck className="w-4 h-4 text-teal-600" />
                Pain-Free Advanced Dentistry
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Your Dream Smile Starts <span className="text-teal-600 underline decoration-teal-300 decoration-wavy decoration-2">Right Here</span>
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0">
                Experience world-class dental care in a serene, spa-like environment. From preventative cleanings to high-end cosmetic makeovers, our expert team guarantees your comfort.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <a 
                  href="#booking"
                  className="w-full sm:w-auto bg-teal-600 hover:bg-teal-700 text-white font-bold px-8 py-4 rounded-2xl shadow-xl shadow-teal-600/30 transition-all transform hover:-translate-y-0.5 text-center flex items-center justify-center gap-2"
                >
                  <Calendar className="w-5 h-5" />
                  Book Visit Online
                </a>
                <a 
                  href="#services"
                  className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 font-bold px-8 py-4 rounded-2xl shadow-sm transition-all text-center flex items-center justify-center gap-2"
                >
                  Explore Services
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>
              </div>

              <div className="pt-8 border-t border-slate-100 grid grid-cols-3 gap-6 text-center lg:text-left">
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-slate-900">15k+</p>
                  <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Happy Smiles</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-slate-900">99.8%</p>
                  <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Pain-Free Rate</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-teal-600">4.9 ★</p>
                  <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Google Rating</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-teal-500 to-emerald-400 rounded-3xl blur-2xl opacity-20 animate-pulse"></div>
              <div className="relative bg-white p-4 sm:p-6 rounded-3xl shadow-2xl border border-slate-100">
                <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden bg-teal-900 flex items-center justify-center text-white">
                  <img 
                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80" 
                    alt="Modern Dental Clinic" 
                    className="w-full h-full object-cover opacity-85 hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent flex flex-col justify-end p-6">
                    <span className="bg-teal-500/90 backdrop-blur text-white text-xs font-bold px-3 py-1 rounded-full w-max mb-2">State-of-the-Art Facility</span>
                    <h3 className="text-xl font-bold text-white">Equipped with 3D Laser & Digital Imaging</h3>
                  </div>
                </div>

                <div className="mt-4 bg-teal-50 rounded-2xl p-4 flex items-center gap-4">
                  <div className="w-12 h-12 bg-teal-600 rounded-xl flex items-center justify-center text-white flex-shrink-0 shadow-md">
                    <UserCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Dr. Sarah Jenkins, DDS</h4>
                    <p className="text-xs text-slate-600">Lead Cosmetic & Restorative Surgeon</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-teal-600 font-bold uppercase tracking-wider text-xs bg-teal-50 px-3 py-1 rounded-full">Our Dental Expertise</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Comprehensive Care Tailored For You</h2>
            <p className="text-slate-600">Whether you need a routine cleaning or a complete smile reconstruction, we use state-of-the-art technology for absolute precision and zero discomfort.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Cosmetic Dentistry",
                desc: "Veneers, teeth whitening, and smile makeovers designed to give you magazine-cover confidence.",
                icon: Sparkles,
                tag: "Most Popular"
              },
              {
                title: "Dental Implants",
                desc: "Permanent, natural-looking tooth replacements that restore full bite strength and aesthetics.",
                icon: ShieldCheck,
                tag: "Permanent Solution"
              },
              {
                title: "Preventative Checkups",
                desc: "Deep cleanings, digital X-rays, and oral cancer screenings to catch issues before they start.",
                icon: HeartPulse,
                tag: "Essential"
              },
              {
                title: "Orthodontics & Aligners",
                desc: "Clear aligners and modern braces to straighten teeth discreetly and comfortably without metal wires.",
                icon: Smile,
                tag: "Invisible"
              },
              {
                title: "Pediatric Dentistry",
                desc: "Gentle, kid-friendly dental visits designed to build lifelong healthy oral habits with zero dental anxiety.",
                icon: Award,
                tag: "Kid Friendly"
              },
              {
                title: "Emergency Dental Care",
                desc: "Got a severe toothache, chipped tooth, or lost filling? Same-day urgent appointments available.",
                icon: Clock,
                tag: "24/7 Priority"
              }
            ].map((service, idx) => {
              const IconComponent = service.icon;
              return (
                <div key={idx} className="group bg-slate-50 hover:bg-teal-50/40 border border-slate-100 hover:border-teal-200 rounded-3xl p-8 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 bg-white group-hover:bg-teal-600 text-teal-600 group-hover:text-white rounded-2xl flex items-center justify-center shadow-md transition-colors duration-300">
                        <IconComponent className="w-7 h-7" />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider bg-teal-100 text-teal-800 px-3 py-1 rounded-full">{service.tag}</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-teal-900 transition-colors">{service.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">{service.desc}</p>
                  </div>
                  <a href="#booking" className="inline-flex items-center gap-2 text-teal-600 font-bold text-sm group-hover:translate-x-1 transition-transform">
                    Book Service <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY APEX DENTAL */}
      <section id="about" className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#14b8a6_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="text-teal-400 font-bold uppercase tracking-wider text-xs bg-teal-950 px-3 py-1 rounded-full border border-teal-800">Why Patients Choose Apex</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Dentistry Reimagined For Your Absolute Peace of Mind</h2>
              <p className="text-slate-300 leading-relaxed">
                We believe going to the dentist shouldn't be stressful. We've combined clinical excellence with luxury amenities, sedation options, and transparent pricing.
              </p>

              <div className="space-y-4 pt-2">
                {[
                  "Zero Pain Guarantee with Advanced Sedation Options",
                  "State-of-the-art 3D Cone Beam CT Scans & Digital Impressions",
                  "Direct Insurance Billing with Flexible 0% Interest Payment Plans",
                  "Relaxing Atmosphere with Noise-Cancelling Headphones & Netflix"
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-200 font-medium">{point}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <a 
                  href="#booking"
                  className="bg-teal-500 hover:bg-teal-600 text-white font-bold px-8 py-4 rounded-2xl shadow-lg shadow-teal-500/30 transition-all inline-flex items-center gap-2"
                >
                  Schedule Your Consultation
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80" 
                  alt="Dental Patient" 
                  className="rounded-3xl shadow-xl h-64 w-full object-cover"
                />
                <div className="bg-teal-900/80 border border-teal-700/50 p-6 rounded-3xl backdrop-blur text-center">
                  <p className="text-3xl font-black text-teal-400">100%</p>
                  <p className="text-xs text-slate-300 font-semibold uppercase tracking-wider mt-1">Sterilization Standard</p>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-teal-600 p-6 rounded-3xl shadow-xl text-center">
                  <p className="text-3xl font-black text-white">12+ Yrs</p>
                  <p className="text-xs text-teal-100 font-semibold uppercase tracking-wider mt-1">Average Dentist Experience</p>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80" 
                  alt="Clinic Interior" 
                  className="rounded-3xl shadow-xl h-64 w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-teal-600 font-bold uppercase tracking-wider text-xs bg-teal-50 px-3 py-1 rounded-full">Patient Stories</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Loved By Over 3,000 Local Families</h2>
            <p className="text-slate-600">See what our patients have to say about their experience at Apex Dental Clinic.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Jessica Taylor",
                role: "Veneers Patient",
                text: "I used to have extreme dental phobia. Dr. Jenkins and the entire team made me feel so calm and cared for. My new smile has genuinely changed my life!",
                stars: 5
              },
              {
                name: "Marcus Vance",
                role: "Dental Implants",
                text: "Absolute top-tier professionalism. The clinic is pristine, modern, and high-tech. The procedure was painless and recovery was lightning fast.",
                stars: 5
              },
              {
                name: "Elena Rostova",
                role: "Routine Checkup & Whitening",
                text: "Best dental clinic in the city! Friendly reception, zero wait time, and my teeth look dazzling after the complimentary whitening session.",
                stars: 5
              }
            ].map((t, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-4">
                    {[...Array(t.stars)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-slate-700 italic text-sm leading-relaxed mb-6">"{t.text}"</p>
                </div>
                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                  <div className="w-10 h-10 rounded-full bg-teal-100 text-teal-800 font-bold flex items-center justify-center">
                    {t.name[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{t.name}</h4>
                    <p className="text-xs text-slate-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING SECTION */}
      <section id="booking" className="py-24 bg-white relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-teal-900 to-slate-900 rounded-3xl shadow-2xl p-8 sm:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="text-center max-w-xl mx-auto space-y-4 mb-10">
              <span className="bg-teal-500/20 text-teal-300 font-bold uppercase tracking-wider text-xs px-3 py-1 rounded-full border border-teal-500/30">Quick & Easy</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Book Your Appointment Online</h2>
              <p className="text-slate-300 text-sm">Fill out the quick form below and our patient coordinator will call you within 15 minutes to confirm your slot.</p>
            </div>

            {bookingSubmitted ? (
              <div className="bg-teal-800/90 border border-teal-600 rounded-2xl p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-teal-500 text-white rounded-full flex items-center justify-center mx-auto shadow-lg">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold">Appointment Requested Successfully!</h3>
                <p className="text-teal-100 text-sm max-w-md mx-auto">
                  Thank you {formData.name}! We have received your request for <span className="font-bold underline">{formData.service}</span>. Our clinic manager will reach out at <span className="font-bold underline">{formData.phone}</span> shortly to finalize your time.
                </p>
                <button 
                  onClick={() => setBookingSubmitted(false)}
                  className="mt-4 bg-white text-teal-900 font-bold px-6 py-2.5 rounded-xl text-sm shadow-md hover:bg-teal-50 transition-colors"
                >
                  Book Another Visit
                </button>
              </div>
            ) : (
              <form onSubmit={handleBooking} className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase font-bold text-teal-200 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-teal-400"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase font-bold text-teal-200 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    required
                    placeholder="(555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-teal-400"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase font-bold text-teal-200 mb-2">Select Service</label>
                  <select 
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-teal-400"
                  >
                    <option>General Checkup & Clean</option>
                    <option>Cosmetic Dentistry & Whitening</option>
                    <option>Dental Implants</option>
                    <option>Clear Aligners / Orthodontics</option>
                    <option>Emergency Toothache</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase font-bold text-teal-200 mb-2">Preferred Date</label>
                  <input 
                    type="date" 
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-teal-400"
                  />
                </div>

                <div className="sm:col-span-2 pt-4">
                  <button 
                    type="submit"
                    className="w-full bg-teal-500 hover:bg-teal-400 text-slate-950 font-extrabold py-4 rounded-xl shadow-lg shadow-teal-500/30 transition-all text-center text-base"
                  >
                    Confirm & Request Appointment
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER & CONTACT */}
      <footer id="contact" className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-teal-600 flex items-center justify-center text-white">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="text-lg font-extrabold tracking-tight text-white">APEX <span className="text-teal-500">DENTAL</span></span>
            </div>
            <p className="text-xs leading-relaxed text-slate-400">
              Advanced, gentle dental care utilizing state-of-the-art technology for beautiful, healthy smiles.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">Working Hours</h4>
            <div className="text-xs space-y-2">
              <p className="flex justify-between"><span>Mon - Fri:</span> <span className="text-white">8:00 AM - 7:00 PM</span></p>
              <p className="flex justify-between"><span>Saturday:</span> <span className="text-white">9:00 AM - 4:00 PM</span></p>
              <p className="flex justify-between"><span>Sunday:</span> <span className="text-teal-400">Emergency Only</span></p>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">Contact Info</h4>
            <div className="text-xs space-y-2">
              <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-teal-500 flex-shrink-0" /> 742 Evergreen Terrace, Suite 300</p>
              <p className="flex items-center gap-2"><Phone className="w-4 h-4 text-teal-500 flex-shrink-0" /> (555) 382-7392</p>
              <p className="flex items-center gap-2"><Clock className="w-4 h-4 text-teal-500 flex-shrink-0" /> Same-Day Emergency Available</p>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">Newsletter</h4>
            <p className="text-xs">Subscribe for oral hygiene tips and exclusive seasonal offers.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Your email" className="bg-slate-800 border border-slate-700 px-3 py-2 rounded-lg text-xs text-white w-full focus:outline-none focus:border-teal-500" />
              <button className="bg-teal-600 text-white px-4 py-2 rounded-lg text-xs font-bold hover:bg-teal-500 transition-colors">Join</button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Apex Dental Clinic. All rights reserved. Built with precision and care.
        </div>
      </footer>
    </div>
  );
}
