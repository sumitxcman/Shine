import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Calendar, 
  Star, 
  CheckCircle2, 
  ChevronRight, 
  Menu, 
  X, 
  MessageCircle, 
  ShieldCheck, 
  HeartHandshake, 
  Users, 
  Smile, 
  Activity, 
  Sparkles,
  ExternalLink,
  ArrowRight,
  Award,
  Check,
  Stethoscope
} from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [selectedService, setSelectedService] = useState(null);
  const [lightboxImage, setLightboxImage] = useState(null);
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const [appointmentSuccess, setAppointmentSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    concern: 'General Consultation',
    message: ''
  });

  const clinicPhone = "09599582158";
  const clinicPhoneDisplay = "095995 82158";
  const clinicAddress = "260-261, Pocket 8, Sector 24, Rohini, Delhi, 110085";
  const whatsappUrl = "https://wa.me/919599582158?text=Hello%20Blue%20Shine%20Dental%20Clinic,%20I%20would%20like%20to%20inquire%20about%20a%20dental%20appointment.";
  const mapDirectionsUrl = "https://www.google.com/maps/search/?api=1&query=Blue+Shine+Dental+Clinic+Sector+24+Rohini+Delhi";

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setAppointmentSuccess(true);
    
    // Construct pre-filled WhatsApp message for instant booking
    const textMsg = encodeURIComponent(
      `Hello Blue Shine Dental Clinic,\n\nI want to book an appointment:\n- Name: ${formData.name}\n- Phone: ${formData.phone}\n- Preferred Date: ${formData.date}\n- Preferred Time: ${formData.time || 'Flexible'}\n- Concern: ${formData.concern}${formData.message ? `\n- Note: ${formData.message}` : ''}`
    );
    const directWaUrl = `https://wa.me/919599582158?text=${textMsg}`;
    
    // Open WhatsApp in new tab after showing success
    setTimeout(() => {
      window.open(directWaUrl, '_blank');
    }, 1200);

    setTimeout(() => {
      setAppointmentSuccess(false);
    }, 8000);
  };

  const openBookingFor = (concernName) => {
    setFormData((prev) => ({ ...prev, concern: concernName }));
    const element = document.getElementById('appointment');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      id: 'braces',
      title: 'Dental Braces',
      tag: 'Orthodontics',
      desc: 'Correction of crooked or crowded teeth and bite alignment for children, teens, and adults.',
      icon: '🦷'
    },
    {
      id: 'rct',
      title: 'Root Canal Treatment',
      tag: 'Endodontics',
      desc: 'Gentle, pain-relieving therapy to save infected natural teeth without extraction.',
      icon: '⚡'
    },
    {
      id: 'fillings',
      title: 'Fillings',
      tag: 'Restorative',
      desc: 'Tooth-colored aesthetic composite restorations to treat cavities and restore natural structure.',
      icon: '🛡️'
    },
    {
      id: 'crowns',
      title: 'Crowns',
      tag: 'Prosthetics',
      desc: 'Durable, custom-crafted dental crowns to protect weakened or post-RCT teeth.',
      icon: '👑'
    },
    {
      id: 'extractions',
      title: 'Extractions',
      tag: 'Oral Surgery',
      desc: 'Safe, careful removal of severely decayed, broken, or problematic wisdom teeth.',
      icon: '⚕️'
    },
    {
      id: 'dentures',
      title: 'Dentures',
      tag: 'Teeth Replacement',
      desc: 'Complete and partial custom dentures engineered for natural chewing comfort and fit.',
      icon: '✨'
    },
    {
      id: 'cleaning-whitening',
      title: 'Teeth Cleaning & Whitening',
      tag: 'Preventive & Cosmetic',
      desc: 'Ultrasonic plaque & tartar removal plus professional stain brightening for a clean smile.',
      icon: '🌟'
    },
    {
      id: 'gum-surgery',
      title: 'Gum Surgery',
      tag: 'Periodontics',
      desc: 'Specialized gum therapies to treat bleeding gums, infections, and periodontal disease.',
      icon: '🩺'
    }
  ];

  const reviews = [
    {
      name: "Rohan Malhotra",
      stars: 5,
      date: "Recent Google Review",
      treatment: "Teeth Cleaning & Filling",
      review: "Very professional and friendly doctor. The clinic is neat, clean, and follows good hygiene. Highly recommended in Sector 24 Rohini."
    },
    {
      name: "Pooja Sharma",
      stars: 5,
      date: "Recent Google Review",
      treatment: "Child Dental Care",
      review: "Dr. Pravesh and Dr. Prerna are very polite and patient with children. My kid felt completely at ease during the checkup. Supportive staff!"
    },
    {
      name: "Suresh Gupta",
      stars: 5,
      date: "Recent Google Review",
      treatment: "Root Canal & Crown",
      review: "Had a painless root canal done here. Genuine advice without unnecessary recommendations. Excellent dental care in Rohini."
    },
    {
      name: "Meenakshi Verma",
      stars: 5,
      date: "Recent Google Review",
      treatment: "Dental Consultation",
      review: "Clean clinic environment and courteous staff. Doctors explain every step clearly. Very happy with the overall experience."
    }
  ];

  const galleryItems = [
    {
      title: "Blue Shine Dental Clinic Frontage",
      subtitle: "Official clinic signage and storefront at Sector 24, Rohini",
      category: "Exterior & Signage",
      src: "/images/real/blue-shine-storefront-hero.jpg"
    },
    {
      title: "Pediatric Dental Care with Dr. Pravesh",
      subtitle: "Comfortable and stress-free care for young patients",
      category: "Doctor & Patient",
      src: "/images/real/dr-pravesh-operatory.jpg"
    },
    {
      title: "Child-Friendly Theme Operatory",
      subtitle: "Fun cartoon themed chair to keep kids relaxed",
      category: "Kids Operatory",
      src: "/images/real/pediatric-dental-chair.jpg"
    },
    {
      title: "Reception & Patient Waiting Lounge",
      subtitle: "Clean and comfortable air-conditioned waiting area",
      category: "Reception",
      src: "/images/real/clinic-waiting-lounge.jpg"
    },
    {
      title: "Modern Ergonomic Dental Operatory",
      subtitle: "Fully equipped hygienic treatment station",
      category: "Operatory",
      src: "/images/real/clinic-operatory-chair.jpg"
    },
    {
      title: "Doctor In-Clinic Treatment Session",
      subtitle: "Attentive clinical team attending to dental procedure",
      category: "Clinical Procedure",
      src: "/images/real/dr-treatment-session.jpg"
    },
    {
      title: "Adult Clinical Dental Treatment",
      subtitle: "Specialized restorative and oral healthcare procedures",
      category: "Adult Dental Care",
      src: "/images/real/clinical-treatment-adult.jpg"
    },
    {
      title: "Operatory Glass Corridor Passage",
      subtitle: "Hygienic and well-maintained clinic interior",
      category: "Clinic Interior",
      src: "/images/real/clinic-operatory-corridor.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-[#F7FBFF] text-[#172033] flex flex-col antialiased selection:bg-[#2F80ED] selection:text-white pb-20 md:pb-0">
      

      {/* ============================================================== */}
      {/* 2. STICKY HEADER & NAVIGATION */}
      {/* ============================================================== */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-blue-100/80 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo / Brand Name */}
          <a href="#" className="flex items-center gap-3 group shrink-0">
            <div className="w-11 h-11 md:w-12 md:h-12 rounded-2xl bg-gradient-to-tr from-[#123E8C] to-[#2F80ED] flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform duration-300 shrink-0">
              {/* Modern Tooth / Sparkle Icon */}
              <svg className="w-6 h-6 md:w-7 md:h-7 text-white fill-white" viewBox="0 0 24 24">
                <path d="M12 2C8.5 2 6 4.5 6 7.5C6 9.8 7 11.5 8 13.5C9 15.5 9 17.5 9 20C9 21.1 9.9 22 11 22C11.6 22 12.1 21.8 12.5 21.4C12.9 21.8 13.4 22 14 22C15.1 22 16 21.1 16 20C16 17.5 16 15.5 17 13.5C18 11.5 19 9.8 19 7.5C19 4.5 16.5 2 12 2Z" opacity="0.95" />
              </svg>
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-1.5 leading-none whitespace-nowrap">
                <span className="text-lg md:text-xl font-black tracking-tight text-[#123E8C]">BLUE SHINE</span>
                <span className="text-lg md:text-xl font-light tracking-tight text-[#2F80ED]">DENTAL</span>
              </div>
              <div className="mt-1">
                <span className="text-[10px] md:text-[11px] uppercase font-bold tracking-widest text-slate-500 leading-none block">
                  CLINIC • ROHINI
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-6 text-sm font-medium text-slate-700">
            <a href="#home" className="text-[#123E8C] font-semibold hover:text-[#2F80ED] transition whitespace-nowrap">Home</a>
            <a href="#about" className="hover:text-[#123E8C] transition whitespace-nowrap">About</a>
            <a href="#doctors" className="hover:text-[#123E8C] transition whitespace-nowrap">Doctors</a>
            <a href="#services" className="hover:text-[#123E8C] transition whitespace-nowrap">Services</a>
            <a href="#why-choose-us" className="hover:text-[#123E8C] transition whitespace-nowrap">Why Choose Us</a>
            <a href="#gallery" className="hover:text-[#123E8C] transition whitespace-nowrap">Gallery</a>
            <a href="#reviews" className="hover:text-[#123E8C] transition whitespace-nowrap">Reviews</a>
            <a href="#contact" className="hover:text-[#123E8C] transition whitespace-nowrap">Contact</a>
          </nav>

          {/* Right Actions Group: Call, Book Appointment & Mobile Menu Button */}
          <div className="flex items-center gap-2.5 shrink-0 ml-auto xl:ml-0">
            <a 
              href={`tel:${clinicPhone}`}
              className="p-2.5 rounded-xl border border-blue-200 text-[#123E8C] hover:bg-blue-50 transition flex items-center justify-center shrink-0"
              title="Call Clinic"
            >
              <Phone className="w-5 h-5 text-[#2F80ED]" />
            </a>

            <a 
              href="#appointment"
              className="bg-[#123E8C] hover:bg-[#0E3272] text-white px-4 sm:px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm shadow-md shadow-blue-900/10 hover:shadow-lg transition flex items-center gap-2 shrink-0 whitespace-nowrap"
            >
              <Calendar className="w-4 h-4 text-blue-200" />
              <span>Book Appointment</span>
            </a>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-xl text-slate-700 hover:bg-blue-50 transition shrink-0 ml-1"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-b border-blue-100 px-6 py-4 space-y-3 animate-in slide-in-from-top duration-200">
            <a 
              href="#home" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-800 font-medium py-1.5 hover:text-[#123E8C]"
            >
              Home
            </a>
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-800 font-medium py-1.5 hover:text-[#123E8C]"
            >
              About Blue Shine
            </a>
            <a 
              href="#doctors" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-800 font-medium py-1.5 hover:text-[#123E8C]"
            >
              Meet Doctors (Dr. Pravesh & Dr. Prerna)
            </a>
            <a 
              href="#services" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-800 font-medium py-1.5 hover:text-[#123E8C]"
            >
              Dental Services
            </a>
            <a 
              href="#why-choose-us" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-800 font-medium py-1.5 hover:text-[#123E8C]"
            >
              Why Choose Blue Shine
            </a>
            <a 
              href="#gallery" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-800 font-medium py-1.5 hover:text-[#123E8C]"
            >
              Clinic Gallery
            </a>
            <a 
              href="#reviews" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-800 font-medium py-1.5 hover:text-[#123E8C]"
            >
              Patient Reviews (5.0 ★)
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-800 font-medium py-1.5 hover:text-[#123E8C]"
            >
              Visit & Contact
            </a>
            
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <a 
                href="#appointment"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center bg-[#123E8C] text-white py-2.5 rounded-xl font-semibold"
              >
                Book Appointment
              </a>
              <a 
                href={`tel:${clinicPhone}`}
                className="w-full text-center border border-blue-200 text-[#123E8C] py-2.5 rounded-xl font-semibold flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#2F80ED]" />
                Call {clinicPhoneDisplay}
              </a>
            </div>
          </div>
        )}
      </header>

      {/* ============================================================== */}
      {/* 3. HERO SECTION (INSPIRED BY REFERENCE DESIGN) */}
      {/* ============================================================== */}
      <section id="home" className="relative pt-6 md:pt-10 pb-16 overflow-hidden">
        {/* Soft background glow & shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/60 rounded-full blur-3xl -z-10 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-50 rounded-full blur-2xl -z-10 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main Hero Card Container - Inspired by rounded design card in reference */}
          <div className="relative bg-gradient-to-br from-[#123E8C] via-[#1B52B4] to-[#2F80ED] rounded-[2.5rem] md:rounded-[3rem] p-6 sm:p-10 lg:p-14 text-white shadow-2xl overflow-hidden">
            
            {/* Background Decorative Rings & Water Drops (Inspired by reference) */}
            <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-white/5 rounded-full border border-white/10 pointer-events-none transform translate-x-32 -translate-y-20"></div>
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-400/10 rounded-full blur-xl pointer-events-none"></div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
              
              {/* Image Container: Order 1 on mobile (so image comes on top), Order 2 on desktop */}
              <div className="order-1 lg:order-2 lg:col-span-5 relative">
                
                {/* Modern Image Container with Clean Dental Aesthetics */}
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  
                  {/* Outer subtle glow ring */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-white/30 to-blue-300/20 rounded-[2.5rem] blur-lg opacity-70"></div>
                  
                  <div className="relative rounded-[2rem] overflow-hidden border-4 border-white/40 shadow-2xl bg-white aspect-[16/10] sm:aspect-square flex items-center justify-center group">
                    <img 
                      src="/images/real/blue-shine-storefront-hero.jpg" 
                      alt="Blue Shine Dental Clinic Rohini Real Storefront" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />

                    {/* Gradient Overlay for Text Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#123E8C]/80 via-transparent to-transparent"></div>

                    {/* On-image Brand Badge - Clean pill layout on mobile, full width bar on desktop */}
                    <div className="absolute bottom-2.5 sm:bottom-4 left-2.5 sm:left-4 right-2.5 sm:right-4 bg-white/95 backdrop-blur-md p-2.5 sm:p-4 rounded-xl sm:rounded-2xl text-[#123E8C] shadow-lg flex items-center justify-between gap-2">
                      <div className="min-w-0">
                        <div className="font-extrabold text-xs sm:text-sm tracking-tight truncate">BLUE SHINE DENTAL CLINIC</div>
                        <div className="text-[10px] sm:text-xs text-slate-600 truncate">Pocket 8, Sector 24, Rohini</div>
                      </div>
                      <div className="bg-blue-100 text-[#123E8C] px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg text-[10px] sm:text-xs font-bold flex items-center gap-1 shrink-0">
                        <Sparkles className="w-3 h-3 text-[#2F80ED]" />
                        <span>Open 10 AM</span>
                      </div>
                    </div>
                  </div>

                  {/* Floating Trust Badge - Hidden on mobile, visible on desktop */}
                  <div className="hidden sm:flex sm:absolute sm:-bottom-5 sm:-right-4 bg-white text-[#172033] p-3.5 sm:p-4 rounded-2xl shadow-xl border border-blue-100 items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-amber-50 border border-amber-200/60 flex items-center justify-center shrink-0">
                      <Star className="w-6 h-6 fill-amber-400 text-amber-400" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1 text-sm font-extrabold text-slate-900">
                        <span>5.0</span>
                        <div className="flex text-amber-400 text-xs">
                          {'★'.repeat(5)}
                        </div>
                      </div>
                      <div className="text-xs font-semibold text-[#123E8C]">387 Google Reviews</div>
                    </div>
                  </div>

                </div>

              </div>

              {/* Text & Headlines: Order 2 on mobile (under image), Order 1 on desktop */}
              <div className="order-2 lg:order-1 lg:col-span-7 space-y-6">
                
                {/* Location & Trust Badge */}
                <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium border border-white/20">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Sector 24, Rohini, Delhi</span>
                  <span className="text-blue-200">•</span>
                  <span className="text-amber-300 font-semibold flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" /> 5.0 Rating
                  </span>
                </div>

                {/* Primary Tagline Headline */}
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12]">
                  Creating <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-blue-200">
                    Healthy Smiles
                  </span>
                </h1>

                {/* Supporting Headlines */}
                <p className="text-base sm:text-xl font-normal text-blue-100/95 max-w-xl leading-relaxed">
                  Professional dental care for you and your family in Sector 24, Rohini. Comfortable, patient-focused dental care for children and adults.
                </p>

                {/* Bullet Highlights */}
                <div className="grid grid-cols-2 gap-3 pt-2 max-w-md text-xs sm:text-sm text-blue-100 font-medium">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0" />
                    <span>Dr. Pravesh (MDS)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0" />
                    <span>Dr. Prerna (BDS)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0" />
                    <span>387 Google Reviews</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0" />
                    <span>Family & Child Friendly</span>
                  </div>
                </div>

                {/* CTAs: Book Appointment + Call + WhatsApp */}
                <div className="flex flex-wrap items-center gap-3 pt-4">
                  <a 
                    href="#appointment"
                    className="bg-white text-[#123E8C] hover:bg-blue-50 px-7 py-3.5 rounded-2xl font-bold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all flex items-center gap-2 group"
                  >
                    <span>Book Appointment</span>
                    <ArrowRight className="w-4 h-4 text-[#123E8C] group-hover:translate-x-1 transition-transform" />
                  </a>

                  <a 
                    href={`tel:${clinicPhone}`}
                    className="bg-blue-900/60 hover:bg-blue-900/80 text-white border border-white/20 px-6 py-3.5 rounded-2xl font-semibold text-sm sm:text-base transition-all flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4 text-blue-300" />
                    <span>Call {clinicPhoneDisplay}</span>
                  </a>

                  <a 
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-emerald-500 hover:bg-emerald-600 text-white p-3.5 rounded-2xl transition shadow-md flex items-center justify-center"
                    title="Chat on WhatsApp"
                  >
                    <MessageCircle className="w-5 h-5" />
                  </a>
                </div>

              </div>

            </div>

          </div>

          {/* ============================================================== */}
          {/* 4. OVERLAPPING HERO APPOINTMENT CARD (FROM DESIGN REFERENCE) */}
          {/* ============================================================== */}
          <div className="relative -mt-6 sm:-mt-8 max-w-5xl mx-auto z-20 px-2 sm:px-4">
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-card border border-blue-100/80">
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-slate-100 pb-4">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#123E8C] tracking-tight">
                    Book an Appointment
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500">
                    Quick consultation request with Dr. Pravesh (MDS) & Dr. Prerna (BDS)
                  </p>
                </div>
                
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 bg-blue-50 px-3 py-1.5 rounded-xl border border-blue-100 w-fit">
                  <Clock className="w-3.5 h-3.5 text-[#2F80ED]" />
                  <span>Timings: 10:00 AM – 7:00 PM (Tue OFF)</span>
                </div>
              </div>

              {appointmentSuccess && (
                <div className="mb-5 bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 rounded-2xl flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <div className="text-sm">
                    <strong>Thank you!</strong> Your appointment request has been recorded. Our clinic team will call you shortly at <strong>{formData.phone || clinicPhoneDisplay}</strong> to confirm your slot.
                  </div>
                </div>
              )}

              <form onSubmit={handleFormSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
                
                {/* Full Name */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-600">Full Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={handleFormChange}
                    className="w-full bg-[#F7FBFF] border border-blue-100 focus:border-[#2F80ED] focus:bg-white rounded-xl px-3.5 py-2.5 text-sm text-slate-800 outline-none transition"
                  />
                </div>

                {/* Phone Number */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-600">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    required
                    placeholder="e.g. 98765 43210"
                    value={formData.phone}
                    onChange={handleFormChange}
                    className="w-full bg-[#F7FBFF] border border-blue-100 focus:border-[#2F80ED] focus:bg-white rounded-xl px-3.5 py-2.5 text-sm text-slate-800 outline-none transition"
                  />
                </div>

                {/* Preferred Date */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-600">Preferred Date</label>
                  <input 
                    type="date" 
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleFormChange}
                    className="w-full bg-[#F7FBFF] border border-blue-100 focus:border-[#2F80ED] focus:bg-white rounded-xl px-3.5 py-2.5 text-sm text-slate-800 outline-none transition"
                  />
                </div>

                {/* Dental Concern */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-600">Dental Concern</label>
                  <select 
                    name="concern"
                    value={formData.concern}
                    onChange={handleFormChange}
                    className="w-full bg-[#F7FBFF] border border-blue-100 focus:border-[#2F80ED] focus:bg-white rounded-xl px-3.5 py-2.5 text-sm text-slate-800 outline-none transition"
                  >
                    <option value="General Consultation">General Consultation</option>
                    <option value="Dental Braces">Dental Braces</option>
                    <option value="Root Canal Treatment">Root Canal Treatment</option>
                    <option value="Fillings">Fillings</option>
                    <option value="Crowns">Crowns</option>
                    <option value="Extractions">Extractions</option>
                    <option value="Dentures">Dentures</option>
                    <option value="Teeth Cleaning & Whitening">Teeth Cleaning & Whitening</option>
                    <option value="Gum Surgery">Gum Surgery</option>
                  </select>
                </div>

                {/* Submit Button */}
                <div className="flex items-end">
                  <button 
                    type="submit"
                    className="w-full bg-[#2F80ED] hover:bg-[#2069cb] text-white font-bold py-2.5 px-4 rounded-xl text-sm shadow-md shadow-blue-500/20 hover:shadow-lg transition flex items-center justify-center gap-1.5 h-[42px]"
                  >
                    <span>Request Appointment</span>
                  </button>
                </div>

              </form>

            </div>
          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 5. TRUST STRIP (NO INVENTED METRICS) */}
      {/* ============================================================== */}
      <section className="py-8 bg-white border-y border-blue-100/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            
            <div className="p-4 rounded-2xl bg-blue-50/50 border border-blue-100/40">
              <div className="text-2xl sm:text-3xl font-black text-[#123E8C] flex items-center justify-center gap-1">
                <span>5.0</span>
                <span className="text-amber-400 text-xl">★★★★★</span>
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">387 Google Reviews</div>
            </div>

            <div className="p-4 rounded-2xl bg-blue-50/50 border border-blue-100/40">
              <div className="text-xl sm:text-2xl font-bold text-[#123E8C]">Experienced</div>
              <div className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">Dental Care</div>
            </div>

            <div className="p-4 rounded-2xl bg-blue-50/50 border border-blue-100/40">
              <div className="text-xl sm:text-2xl font-bold text-[#123E8C]">Family-Friendly</div>
              <div className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">Approach</div>
            </div>

            <div className="p-4 rounded-2xl bg-blue-50/50 border border-blue-100/40">
              <div className="text-xl sm:text-2xl font-bold text-[#123E8C]">Sector 24</div>
              <div className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">Rohini, Delhi</div>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 6. ABOUT SECTION */}
      {/* ============================================================== */}
      <section id="about" className="py-20 bg-[#F7FBFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Real Clinic Visual Framing */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-card border-4 border-white bg-white group aspect-[4/3]">
                <img 
                  src="/images/real/clinic-waiting-lounge.jpg" 
                  alt="Blue Shine Dental Clinic Reception & Waiting Lounge" 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                
                {/* Floating pill badge */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-[#123E8C] shadow-md border border-blue-100 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#2F80ED]" />
                  <span>Reception & Patient Lounge</span>
                </div>
              </div>

              {/* Decorative side accent card */}
              <div className="hidden sm:block absolute -bottom-6 -right-6 bg-[#123E8C] text-white p-5 rounded-2xl shadow-xl max-w-xs">
                <div className="text-xs uppercase tracking-wider text-blue-200 font-bold mb-1">
                  Tagline
                </div>
                <div className="text-lg font-bold">
                  "Creating Healthy Smiles"
                </div>
              </div>
            </div>

            {/* Right: Content strictly as specified */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="inline-flex items-center gap-2 bg-blue-100 text-[#123E8C] px-3.5 py-1.5 rounded-full text-xs font-bold">
                <Smile className="w-3.5 h-3.5 text-[#2F80ED]" />
                <span>ABOUT BLUE SHINE DENTAL CLINIC</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#123E8C] tracking-tight leading-tight">
                Your Smile Deserves Expert Care
              </h2>

              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                Blue Shine Dental Clinic is a dental clinic located in Sector 24, Rohini, Delhi, providing dental care for children and adults.
              </p>

              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                With a patient-focused approach and a wide range of dental services, the clinic aims to provide comfortable and professional dental care.
              </p>

              {/* Quick Details Badges */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-800">
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-blue-100 shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-[#2F80ED] shrink-0" />
                  <span className="font-semibold">Sector 24, Rohini, Delhi</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-blue-100 shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-[#2F80ED] shrink-0" />
                  <span className="font-semibold">Care for Children & Adults</span>
                </div>
              </div>

              <div className="pt-4 flex items-center gap-4">
                <a 
                  href="#services"
                  className="bg-[#123E8C] hover:bg-[#0E3272] text-white px-6 py-3 rounded-xl font-bold text-sm shadow-md transition flex items-center gap-2"
                >
                  <span>Know More About Us</span>
                  <ChevronRight className="w-4 h-4" />
                </a>

                <a 
                  href={`tel:${clinicPhone}`}
                  className="border border-blue-200 hover:bg-blue-50 text-[#123E8C] px-5 py-3 rounded-xl font-bold text-sm transition"
                >
                  Call Clinic
                </a>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 7. SERVICES SECTION ("What’s Your Smile Concern?") */}
      {/* ============================================================== */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#2F80ED] bg-blue-50 px-3 py-1 rounded-full">
              Dental Treatments
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#123E8C] tracking-tight">
              What’s Your Smile Concern?
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Comprehensive dental care for children and adults.
            </p>
          </div>

          {/* 4-column desktop, 2-column tablet, 1-column mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div 
                key={service.id}
                className="bg-[#F7FBFF] rounded-3xl p-6 border border-blue-100 hover:border-blue-300 hover:shadow-card hover:-translate-y-1 transition duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-blue-100 flex items-center justify-center text-2xl shadow-sm group-hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                    <span className="text-[11px] font-bold text-[#2F80ED] bg-blue-100/60 px-2.5 py-0.5 rounded-full">
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#123E8C] mb-2 group-hover:text-[#2F80ED] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {service.desc}
                  </p>
                </div>

                <button 
                  type="button"
                  onClick={() => openBookingFor(service.title)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#123E8C] group-hover:text-[#2F80ED] transition text-left"
                >
                  <span>Book Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 8. FEATURED SERVICE SECTION (ASYMMETRIC LAYOUT AS PER REFERENCE) */}
      {/* ============================================================== */}
      <section className="py-16 bg-[#EAF6FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-white rounded-[2.5rem] p-8 sm:p-12 lg:p-16 shadow-soft border border-blue-100">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left: Large visual illustration/showcase */}
              <div className="lg:col-span-5">
                <div className="relative rounded-3xl overflow-hidden bg-gradient-to-tr from-[#123E8C] to-[#2F80ED] p-2 aspect-[4/3] sm:aspect-square flex items-center justify-center shadow-lg">
                  <img 
                    src="/images/real/clinic-dental-suite.jpg" 
                    alt="Blue Shine Dental Clinic Operatory Suite" 
                    className="w-full h-full object-cover rounded-2xl"
                  />
                  <div className="absolute inset-0 bg-[#123E8C]/20 rounded-2xl pointer-events-none"></div>
                  
                  {/* Overlay Center Badge */}
                  <div className="absolute bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl text-center border border-blue-100 max-w-[220px]">
                    <div className="w-8 h-8 rounded-full bg-blue-50 text-[#123E8C] flex items-center justify-center mx-auto mb-2 font-bold">
                      ✓
                    </div>
                    <div className="text-xs font-bold text-slate-900">Patient-Centric Care</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">Gentle & Hygienic Setup</div>
                  </div>
                </div>
              </div>

              {/* Right: Asymmetric Content */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 bg-blue-50 text-[#123E8C] px-3.5 py-1.5 rounded-full text-xs font-bold border border-blue-200/50">
                  <Sparkles className="w-3.5 h-3.5 text-[#2F80ED]" />
                  <span>ALL-IN-ONE CLINIC</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#123E8C] tracking-tight">
                  Complete Dental Care Under One Roof
                </h2>

                <p className="text-base text-slate-600 leading-relaxed">
                  From preventative cleanings to advanced root canal treatments and orthodontic braces, Blue Shine Dental Clinic is equipped to cater to your entire family's oral health requirements.
                </p>

                {/* Categories Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                  <div className="bg-[#F7FBFF] p-3.5 rounded-2xl border border-blue-100 text-center">
                    <div className="font-bold text-sm text-[#123E8C]">Braces</div>
                    <div className="text-[11px] text-slate-500">Alignment</div>
                  </div>
                  <div className="bg-[#F7FBFF] p-3.5 rounded-2xl border border-blue-100 text-center">
                    <div className="font-bold text-sm text-[#123E8C]">Root Canal</div>
                    <div className="text-[11px] text-slate-500">Tooth Saving</div>
                  </div>
                  <div className="bg-[#F7FBFF] p-3.5 rounded-2xl border border-blue-100 text-center">
                    <div className="font-bold text-sm text-[#123E8C]">Cleaning</div>
                    <div className="text-[11px] text-slate-500">Plaque & Stain</div>
                  </div>
                  <div className="bg-[#F7FBFF] p-3.5 rounded-2xl border border-blue-100 text-center">
                    <div className="font-bold text-sm text-[#123E8C]">Fillings</div>
                    <div className="text-[11px] text-slate-500">Aesthetic Composite</div>
                  </div>
                  <div className="bg-[#F7FBFF] p-3.5 rounded-2xl border border-blue-100 text-center">
                    <div className="font-bold text-sm text-[#123E8C]">Crowns</div>
                    <div className="text-[11px] text-slate-500">Protection</div>
                  </div>
                  <div className="bg-[#F7FBFF] p-3.5 rounded-2xl border border-blue-100 text-center">
                    <div className="font-bold text-sm text-[#123E8C]">Dentures</div>
                    <div className="text-[11px] text-slate-500">Replacement</div>
                  </div>
                </div>

                <div className="pt-2">
                  <a 
                    href="#services"
                    className="inline-flex items-center gap-2 bg-[#2F80ED] hover:bg-[#2069cb] text-white px-7 py-3 rounded-xl font-bold text-sm shadow-md transition"
                  >
                    <span>Explore Our Services</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 9. DOCTORS SECTION (STRICT FACTUAL ONLY) */}
      {/* ============================================================== */}
      <section id="doctors" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#2F80ED] bg-blue-50 px-3 py-1 rounded-full">
              Expert Practitioners
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#123E8C] tracking-tight">
              Meet Our Dental Doctors
            </h2>
            <p className="text-slate-600 text-base">
              Dedicated dental practitioners providing personalized care at Blue Shine Dental Clinic.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* Doctor 1: Dr. Pravesh (MDS) */}
            <div className="bg-[#F7FBFF] rounded-3xl p-6 sm:p-8 border border-blue-100 shadow-soft hover:shadow-card transition flex flex-col justify-between">
              <div>
                <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-blue-200 shadow-md mb-6 relative">
                  <img 
                    src="/images/real/dr-pravesh-portrait.jpg" 
                    alt="Dr. Pravesh MDS Blue Shine Dental Clinic" 
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-2xl font-bold text-[#123E8C]">Dr. Pravesh</h3>
                  <span className="bg-blue-100 text-[#123E8C] text-xs font-extrabold px-2.5 py-0.5 rounded-full">
                    MDS
                  </span>
                </div>

                <div className="text-xs font-semibold text-[#2F80ED] mb-4">
                  Dental Surgeon & Practitioner
                </div>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Providing professional dental consultations and treatments with a patient-friendly and gentle approach for all age groups.
                </p>
              </div>

              <div className="pt-4 border-t border-blue-100/60 flex items-center justify-between">
                <span className="text-xs text-slate-500">Blue Shine Dental Clinic</span>
                <button 
                  type="button"
                  onClick={() => {
                    setFormData((prev) => ({ ...prev, message: 'Consultation with Dr. Pravesh (MDS)' }));
                    document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-[#123E8C] hover:bg-[#0E3272] text-white text-xs font-bold px-4 py-2 rounded-xl transition"
                >
                  Book with Dr. Pravesh
                </button>
              </div>
            </div>

            {/* Doctor 2: Dr. Prerna (BDS) */}
            <div className="bg-[#F7FBFF] rounded-3xl p-6 sm:p-8 border border-blue-100 shadow-soft hover:shadow-card transition flex flex-col justify-between">
              <div>
                <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-blue-200 shadow-md mb-6 relative">
                  <img 
                    src="/images/real/dr-prerna-portrait.jpg" 
                    alt="Dr. Prerna BDS Blue Shine Dental Clinic" 
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-2xl font-bold text-[#123E8C]">Dr. Prerna</h3>
                  <span className="bg-blue-100 text-[#123E8C] text-xs font-extrabold px-2.5 py-0.5 rounded-full">
                    BDS
                  </span>
                </div>

                <div className="text-xs font-semibold text-[#2F80ED] mb-4">
                  Dental Surgeon & Practitioner
                </div>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Focused on preventive oral health, patient comfort, and dedicated dental care for children and families.
                </p>
              </div>

              <div className="pt-4 border-t border-blue-100/60 flex items-center justify-between">
                <span className="text-xs text-slate-500">Blue Shine Dental Clinic</span>
                <button 
                  type="button"
                  onClick={() => {
                    setFormData((prev) => ({ ...prev, message: 'Consultation with Dr. Prerna (BDS)' }));
                    document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-[#123E8C] hover:bg-[#0E3272] text-white text-xs font-bold px-4 py-2 rounded-xl transition"
                >
                  Book with Dr. Prerna
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 10. FAMILY & CHILDREN SECTION */}
      {/* ============================================================== */}
      <section className="py-16 bg-[#EAF6FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-blue-200/50 shadow-soft">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left visual: Real Pediatric Dental Chair photo */}
              <div className="lg:col-span-5 relative">
                <div className="rounded-3xl overflow-hidden shadow-card border-4 border-white aspect-[4/3] sm:aspect-square relative group">
                  <img 
                    src="/images/real/pediatric-dental-chair.jpg" 
                    alt="Child-friendly dental chair at Blue Shine Dental Clinic" 
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl text-xs font-bold text-[#123E8C] shadow-sm flex items-center justify-between">
                    <span>Child-Friendly Operatory</span>
                    <span className="text-amber-500 font-extrabold">Gentle Care</span>
                  </div>
                </div>
              </div>

              {/* Right content */}
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 bg-blue-50 text-[#123E8C] px-3.5 py-1.5 rounded-full text-xs font-bold">
                  <Users className="w-3.5 h-3.5 text-[#2F80ED]" />
                  <span>FAMILY & PEDIATRIC DENTAL CARE</span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#123E8C] tracking-tight">
                  Comfortable Dental Care for the Whole Family
                </h2>

                <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                  "From children's dental visits to routine cleaning, fillings and other dental treatments, our goal is to make every visit comfortable and patient-friendly."
                </p>

                <div className="flex flex-wrap gap-4 pt-2 text-xs sm:text-sm text-slate-700 font-semibold">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#2F80ED]" /> Gentle Child Checkups
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#2F80ED]" /> Animated Kids Operatory
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#2F80ED]" /> Family Appointments
                  </span>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row gap-3">
                  <a 
                    href="#appointment"
                    className="text-center bg-[#123E8C] hover:bg-[#0E3272] text-white py-3.5 px-6 rounded-2xl font-bold shadow-md transition"
                  >
                    Schedule Family Visit
                  </a>
                  <a 
                    href={`tel:${clinicPhone}`}
                    className="text-center border border-blue-200 hover:bg-blue-50 text-[#123E8C] py-3 px-6 rounded-2xl font-semibold transition"
                  >
                    Call {clinicPhoneDisplay}
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 11. WHY CHOOSE BLUE SHINE */}
      {/* ============================================================== */}
      <section id="why-choose-us" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#2F80ED] bg-blue-50 px-3 py-1 rounded-full">
              Patient Advantage
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#123E8C] tracking-tight">
              Why Patients Choose Blue Shine
            </h2>
            <p className="text-slate-600 text-base">
              Committed to providing dependable dental solutions in Sector 24, Rohini.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="bg-[#F7FBFF] p-6 rounded-2xl border border-blue-100 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#123E8C] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-[#2F80ED]" />
              </div>
              <div>
                <h3 className="font-bold text-[#123E8C] mb-1">Experienced Dental Care</h3>
                <p className="text-xs text-slate-600 leading-relaxed">Qualified dental doctors delivering thorough care tailored to your needs.</p>
              </div>
            </div>

            <div className="bg-[#F7FBFF] p-6 rounded-2xl border border-blue-100 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#123E8C] flex items-center justify-center shrink-0">
                <HeartHandshake className="w-5 h-5 text-[#2F80ED]" />
              </div>
              <div>
                <h3 className="font-bold text-[#123E8C] mb-1">Friendly & Supportive Staff</h3>
                <p className="text-xs text-slate-600 leading-relaxed">Welcoming team ensuring your appointments and questions are handled smoothly.</p>
              </div>
            </div>

            <div className="bg-[#F7FBFF] p-6 rounded-2xl border border-blue-100 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#123E8C] flex items-center justify-center shrink-0">
                <Smile className="w-5 h-5 text-[#2F80ED]" />
              </div>
              <div>
                <h3 className="font-bold text-[#123E8C] mb-1">Child-Friendly Approach</h3>
                <p className="text-xs text-slate-600 leading-relaxed">Gentle procedures and patient explanation to keep young patients stress-free.</p>
              </div>
            </div>

            <div className="bg-[#F7FBFF] p-6 rounded-2xl border border-blue-100 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#123E8C] flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5 text-[#2F80ED]" />
              </div>
              <div>
                <h3 className="font-bold text-[#123E8C] mb-1">Hygienic Clinic Environment</h3>
                <p className="text-xs text-slate-600 leading-relaxed">Sanitized operatory, clean instruments, and high standards of cleanliness.</p>
              </div>
            </div>

            <div className="bg-[#F7FBFF] p-6 rounded-2xl border border-blue-100 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#123E8C] flex items-center justify-center shrink-0">
                <Activity className="w-5 h-5 text-[#2F80ED]" />
              </div>
              <div>
                <h3 className="font-bold text-[#123E8C] mb-1">Comprehensive Dental Services</h3>
                <p className="text-xs text-slate-600 leading-relaxed">From simple cleanings and fillings to braces, crowns, and root canals.</p>
              </div>
            </div>

            <div className="bg-[#F7FBFF] p-6 rounded-2xl border border-blue-100 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#123E8C] flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-[#2F80ED]" />
              </div>
              <div>
                <h3 className="font-bold text-[#123E8C] mb-1">Convenient Rohini Location</h3>
                <p className="text-xs text-slate-600 leading-relaxed">Centrally located at 260-261, Pocket 8, Sector 24, easily accessible for local residents.</p>
              </div>
            </div>

            <div className="bg-[#F7FBFF] p-6 rounded-2xl border border-blue-100 flex items-start gap-4 sm:col-span-2 lg:col-span-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
              </div>
              <div>
                <h3 className="font-bold text-[#123E8C] mb-1">Strong Patient Feedback</h3>
                <p className="text-xs text-slate-600 leading-relaxed">Backed by 387+ authentic Google reviews and an outstanding 5.0 ★ overall rating.</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 12. GOOGLE REVIEWS SECTION (5.0 ★ & 387 REVIEWS) */}
      {/* ============================================================== */}
      <section id="reviews" className="py-20 bg-[#F7FBFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#2F80ED] bg-blue-50 px-3 py-1 rounded-full mb-2">
                Patient Feedback
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#123E8C] tracking-tight">
                What Our Patients Say
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-1">
                Real feedback from our Google Listing (5.0 ★ / 387 Reviews)
              </p>
            </div>

            {/* Google Rating Overview Card */}
            <div className="bg-white p-4 rounded-2xl border border-blue-100 shadow-sm flex items-center gap-4">
              <div className="text-3xl font-black text-[#123E8C]">5.0</div>
              <div className="border-l border-slate-200 pl-4">
                <div className="flex text-amber-400 text-sm">
                  {'★'.repeat(5)}
                </div>
                <div className="text-xs font-semibold text-slate-500">Based on 387 Google Reviews</div>
              </div>
            </div>
          </div>

          {/* Review Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((rev, index) => (
              <div 
                key={index}
                className="bg-white rounded-3xl p-6 border border-blue-100/80 shadow-soft flex flex-col justify-between hover:shadow-card transition"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex text-amber-400 text-xs">
                      {'★'.repeat(rev.stars)}
                    </div>
                    <span className="text-[10px] font-semibold text-slate-400 bg-slate-50 px-2 py-0.5 rounded-full">
                      {rev.date}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-6">
                    "{rev.review}"
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <div className="font-bold text-xs sm:text-sm text-[#123E8C]">{rev.name}</div>
                  <div className="text-[11px] text-[#2F80ED] font-medium">{rev.treatment}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a 
              href="https://www.google.com/maps/search/?api=1&query=Blue+Shine+Dental+Clinic+Sector+24+Rohini+Delhi"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-blue-200 bg-white hover:bg-blue-50 text-[#123E8C] px-6 py-2.5 rounded-xl font-bold text-sm shadow-sm transition"
            >
              <span>View All 387 Reviews on Google</span>
              <ExternalLink className="w-4 h-4 text-[#2F80ED]" />
            </a>
          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 12.5 REAL CLINICAL TRANSFORMATIONS (BEFORE & AFTER) */}
      {/* ============================================================== */}
      <section className="py-20 bg-white border-y border-blue-100/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#2F80ED] bg-blue-50 px-3 py-1 rounded-full">
              Real Clinical Cases
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#123E8C] tracking-tight">
              Real Smile Transformations
            </h2>
            <p className="text-slate-600 text-base">
              Actual before and after treatment results achieved at Blue Shine Dental Clinic.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* Case 1 */}
            <div className="bg-[#F7FBFF] rounded-3xl p-6 border border-blue-100 shadow-soft overflow-hidden group">
              <div className="rounded-2xl overflow-hidden border-2 border-white shadow-md aspect-square bg-slate-100 mb-5 relative">
                <img 
                  src="/images/real/case-tooth-restoration-before-after.jpg" 
                  alt="Tooth restoration before and after at Blue Shine Dental Clinic" 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#123E8C]/90 text-white px-2.5 py-1 rounded-lg text-[11px] font-bold">
                  Restorative Care
                </div>
              </div>
              <h3 className="text-lg font-bold text-[#123E8C] mb-1">
                Aesthetic Tooth Restoration
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Precision repair and composite restoration of broken / chipped front tooth to seamlessly match natural smile.
              </p>
            </div>

            {/* Case 2 */}
            <div className="bg-[#F7FBFF] rounded-3xl p-6 border border-blue-100 shadow-soft overflow-hidden group">
              <div className="rounded-2xl overflow-hidden border-2 border-white shadow-md aspect-square bg-slate-100 mb-5 relative">
                <img 
                  src="/images/real/case-teeth-alignment-before-after.jpg" 
                  alt="Teeth alignment before and after at Blue Shine Dental Clinic" 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#2F80ED]/90 text-white px-2.5 py-1 rounded-lg text-[11px] font-bold">
                  Orthodontic Alignment
                </div>
              </div>
              <h3 className="text-lg font-bold text-[#123E8C] mb-1">
                Bite Alignment & Smile Correction
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Correction of crowded and misaligned dental arch into balanced aesthetic alignment for healthy chewing and confidence.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 13. REAL CLINIC GALLERY */}
      {/* ============================================================== */}
      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#2F80ED] bg-blue-50 px-3 py-1 rounded-full">
              Clinic Tour
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#123E8C] tracking-tight">
              Real Clinic Gallery
            </h2>
            <p className="text-slate-600 text-base">
              A look at Blue Shine Dental Clinic's premises and patient operatory in Sector 24, Rohini.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryItems.map((item, idx) => (
              <div 
                key={idx}
                onClick={() => setLightboxImage(item)}
                className="group relative rounded-3xl overflow-hidden shadow-soft border border-blue-100 aspect-square bg-slate-100 cursor-pointer"
              >
                <img 
                  src={item.src} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
                
                {/* Gradient Caption Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#123E8C]/90 via-[#123E8C]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end text-white">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-300 mb-1">
                    {item.category}
                  </span>
                  <div className="font-bold text-sm sm:text-base leading-tight">
                    {item.title}
                  </div>
                  <div className="text-xs text-blue-100 mt-1">
                    {item.subtitle}
                  </div>
                </div>

                {/* Subtle permanent tag */}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-lg text-[10px] font-bold text-[#123E8C] group-hover:opacity-0 transition-opacity">
                  {item.category}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 14. LOCATION SECTION & MAP */}
      {/* ============================================================== */}
      <section id="contact" className="py-20 bg-[#F7FBFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#2F80ED] bg-blue-50 px-3 py-1 rounded-full">
              Directions & Hours
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#123E8C] tracking-tight">
              Visit Blue Shine Dental Clinic
            </h2>
            <p className="text-slate-600 text-base">
              Easily accessible in Pocket 8, Sector 24, Rohini.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left: Address & Timings Details Card */}
            <div className="lg:col-span-5 bg-white rounded-3xl p-8 border border-blue-100 shadow-soft flex flex-col justify-between">
              <div className="space-y-6">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#2F80ED] mb-1">Physical Location</div>
                  <h3 className="text-2xl font-black text-[#123E8C]">BLUE SHINE DENTAL CLINIC</h3>
                </div>

                <div className="space-y-4 pt-2">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#123E8C] flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-[#2F80ED]" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-400">Address</div>
                      <div className="text-sm font-bold text-slate-800 leading-snug">
                        260-261, Pocket 8, Sector 24, Rohini, Delhi – 110085
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#123E8C] flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-[#2F80ED]" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-400">Clinic Timings</div>
                      <div className="text-sm font-bold text-slate-800">
                        10:00 AM – 7:00 PM
                      </div>
                      <div className="text-xs font-bold text-rose-600 mt-0.5">
                        Tuesday: Closed (OFF)
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#123E8C] flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-[#2F80ED]" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-400">Phone Contact</div>
                      <div className="text-sm font-bold text-[#123E8C]">
                        {clinicPhoneDisplay}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a 
                  href={mapDirectionsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#123E8C] hover:bg-[#0E3272] text-white py-3 px-4 rounded-xl text-xs font-bold text-center flex items-center justify-center gap-1.5 shadow-sm transition"
                >
                  <MapPin className="w-4 h-4 text-blue-200" />
                  <span>Get Directions</span>
                </a>

                <a 
                  href={`tel:${clinicPhone}`}
                  className="border border-blue-200 hover:bg-blue-50 text-[#123E8C] py-3 px-4 rounded-xl text-xs font-bold text-center flex items-center justify-center gap-1.5 transition"
                >
                  <Phone className="w-4 h-4 text-[#2F80ED]" />
                  <span>Call Clinic</span>
                </a>

                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="sm:col-span-2 bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-4 rounded-xl text-xs font-bold text-center flex items-center justify-center gap-2 shadow-sm transition"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Connect on WhatsApp</span>
                </a>
              </div>

            </div>

            {/* Right: Embedded Google Map & Visual */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-3 border border-blue-100 shadow-soft overflow-hidden min-h-[350px]">
              <iframe 
                title="Blue Shine Dental Clinic Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13995.120539129524!2d77.1000!3d28.7214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d01449b291d9f%3A0x6b1f24d773c8a9f!2sSector%2024%2C%20Rohini%2C%20Delhi%2C%20110085!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full min-h-[350px] rounded-2xl border-0"
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 15. MAIN APPOINTMENT SECTION */}
      {/* ============================================================== */}
      <section id="appointment" className="py-20 bg-gradient-to-b from-[#123E8C] to-[#1B52B4] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-12 text-[#172033] shadow-2xl">
            
            <div className="text-center max-w-xl mx-auto mb-8 space-y-2">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#2F80ED] bg-blue-50 px-3 py-1 rounded-full">
                Simple Booking
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#123E8C]">
                Ready to Take Care of Your Smile?
              </h2>
              <p className="text-sm text-slate-600">
                Book your dental appointment with Blue Shine Dental Clinic in Sector 24, Rohini.
              </p>
            </div>

            {appointmentSuccess && (
              <div className="mb-6 bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 rounded-2xl flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <div className="text-sm">
                  <strong>Appointment Request Received!</strong> Thank you, {formData.name || 'valued patient'}. We will reach out on your phone number to finalize your preferred time.
                </div>
              </div>
            )}

            <form onSubmit={handleFormSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">Full Name *</label>
                  <input 
                    type="text" 
                    name="name" 
                    required 
                    placeholder="Enter patient name"
                    value={formData.name}
                    onChange={handleFormChange}
                    className="w-full bg-[#F7FBFF] border border-slate-200 focus:border-[#2F80ED] focus:bg-white rounded-xl px-4 py-3 text-sm text-slate-800 outline-none transition"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">Phone Number *</label>
                  <input 
                    type="tel" 
                    name="phone" 
                    required 
                    placeholder="Enter 10-digit mobile number"
                    value={formData.phone}
                    onChange={handleFormChange}
                    className="w-full bg-[#F7FBFF] border border-slate-200 focus:border-[#2F80ED] focus:bg-white rounded-xl px-4 py-3 text-sm text-slate-800 outline-none transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">Preferred Date *</label>
                  <input 
                    type="date" 
                    name="date" 
                    required 
                    value={formData.date}
                    onChange={handleFormChange}
                    className="w-full bg-[#F7FBFF] border border-slate-200 focus:border-[#2F80ED] focus:bg-white rounded-xl px-4 py-3 text-sm text-slate-800 outline-none transition"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">Preferred Time Slot *</label>
                  <select 
                    name="time"
                    value={formData.time}
                    onChange={handleFormChange}
                    className="w-full bg-[#F7FBFF] border border-slate-200 focus:border-[#2F80ED] focus:bg-white rounded-xl px-4 py-3 text-sm text-slate-800 outline-none transition"
                  >
                    <option value="">Select a slot (10 AM - 7 PM)</option>
                    <option value="Morning (10:00 AM - 1:00 PM)">Morning (10:00 AM - 1:00 PM)</option>
                    <option value="Afternoon (1:00 PM - 4:00 PM)">Afternoon (1:00 PM - 4:00 PM)</option>
                    <option value="Evening (4:00 PM - 7:00 PM)">Evening (4:00 PM - 7:00 PM)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">Dental Concern</label>
                <select 
                  name="concern" 
                  value={formData.concern}
                  onChange={handleFormChange}
                  className="w-full bg-[#F7FBFF] border border-slate-200 focus:border-[#2F80ED] focus:bg-white rounded-xl px-4 py-3 text-sm text-slate-800 outline-none transition"
                >
                  <option value="General Consultation">General Consultation / Toothache</option>
                  <option value="Dental Braces">Dental Braces</option>
                  <option value="Root Canal Treatment">Root Canal Treatment</option>
                  <option value="Fillings">Fillings</option>
                  <option value="Crowns">Crowns</option>
                  <option value="Extractions">Extractions</option>
                  <option value="Dentures">Dentures</option>
                  <option value="Teeth Cleaning & Whitening">Teeth Cleaning & Whitening</option>
                  <option value="Gum Surgery">Gum Surgery</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">Message / Notes (Optional)</label>
                <textarea 
                  name="message" 
                  rows="3"
                  placeholder="Tell us if you have pain, specific preferences, or questions..."
                  value={formData.message}
                  onChange={handleFormChange}
                  className="w-full bg-[#F7FBFF] border border-slate-200 focus:border-[#2F80ED] focus:bg-white rounded-xl px-4 py-3 text-sm text-slate-800 outline-none transition"
                ></textarea>
              </div>

              <div className="pt-2">
                <button 
                  type="submit"
                  className="w-full bg-[#123E8C] hover:bg-[#0E3272] text-white font-bold py-4 rounded-xl text-base shadow-lg transition"
                >
                  Request Appointment
                </button>
              </div>

            </form>

            {/* Direct Talk Banner */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <div className="text-xs text-slate-500 font-semibold">Prefer to talk directly?</div>
                <div className="text-lg font-extrabold text-[#123E8C]">{clinicPhoneDisplay}</div>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <a 
                  href={`tel:${clinicPhone}`}
                  className="flex-1 sm:flex-none bg-blue-50 hover:bg-blue-100 text-[#123E8C] px-5 py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition"
                >
                  <Phone className="w-4 h-4 text-[#2F80ED]" />
                  <span>Call Now</span>
                </a>

                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 sm:flex-none bg-emerald-50 hover:bg-emerald-100 text-emerald-800 px-5 py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 16. FOOTER */}
      {/* ============================================================== */}
      <footer className="bg-[#0C2B63] text-white pt-16 pb-12 border-t border-blue-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-blue-900/40">
            
            {/* Col 1: Brand Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-400 to-[#2F80ED] flex items-center justify-center text-white">
                  <svg className="w-6 h-6 text-white fill-white" viewBox="0 0 24 24">
                    <path d="M12 2C8.5 2 6 4.5 6 7.5C6 9.8 7 11.5 8 13.5C9 15.5 9 17.5 9 20C9 21.1 9.9 22 11 22C11.6 22 12.1 21.8 12.5 21.4C12.9 21.8 13.4 22 14 22C15.1 22 16 21.1 16 20C16 17.5 16 15.5 17 13.5C18 11.5 19 9.8 19 7.5C19 4.5 16.5 2 12 2Z" />
                  </svg>
                </div>
                <div>
                  <div className="font-extrabold text-lg tracking-tight">BLUE SHINE</div>
                  <div className="text-xs text-blue-300 font-semibold tracking-wider">DENTAL CLINIC</div>
                </div>
              </div>

              <p className="text-xs text-blue-200/80 leading-relaxed">
                "Creating Healthy Smiles" — Professional dental care for you and your family in Sector 24, Rohini.
              </p>

              <div className="inline-flex items-center gap-2 bg-blue-900/50 px-3 py-1 rounded-lg text-xs font-semibold text-amber-300">
                <Star className="w-3.5 h-3.5 fill-amber-300" />
                <span>5.0 Rating (387 Google Reviews)</span>
              </div>
            </div>

            {/* Col 2: Quick Links */}
            <div>
              <div className="text-sm font-bold uppercase tracking-wider text-blue-200 mb-4">Quick Links</div>
              <ul className="space-y-2 text-xs text-blue-100/80">
                <li><a href="#home" className="hover:text-white transition">Home</a></li>
                <li><a href="#about" className="hover:text-white transition">About Blue Shine</a></li>
                <li><a href="#doctors" className="hover:text-white transition">Our Dental Doctors</a></li>
                <li><a href="#services" className="hover:text-white transition">Dental Services</a></li>
                <li><a href="#why-choose-us" className="hover:text-white transition">Why Choose Us</a></li>
                <li><a href="#gallery" className="hover:text-white transition">Clinic Gallery</a></li>
                <li><a href="#reviews" className="hover:text-white transition">Patient Reviews</a></li>
                <li><a href="#appointment" className="hover:text-white transition">Book Appointment</a></li>
              </ul>
            </div>

            {/* Col 3: Services */}
            <div>
              <div className="text-sm font-bold uppercase tracking-wider text-blue-200 mb-4">Services</div>
              <ul className="space-y-2 text-xs text-blue-100/80">
                <li>Dental Braces</li>
                <li>Root Canal Treatment</li>
                <li>Fillings</li>
                <li>Crowns</li>
                <li>Extractions</li>
                <li>Dentures</li>
                <li>Teeth Cleaning & Whitening</li>
                <li>Gum Surgery</li>
              </ul>
            </div>

            {/* Col 4: Contact & Hours */}
            <div>
              <div className="text-sm font-bold uppercase tracking-wider text-blue-200 mb-4">Clinic Contact</div>
              <div className="space-y-3 text-xs text-blue-100/80">
                <p className="leading-snug">
                  <strong className="text-white block mb-0.5">Address:</strong>
                  260-261, Pocket 8, Sector 24, Rohini, Delhi, 110085
                </p>
                <p>
                  <strong className="text-white block mb-0.5">Phone:</strong>
                  <a href={`tel:${clinicPhone}`} className="hover:text-white transition">{clinicPhoneDisplay}</a>
                </p>
                <p>
                  <strong className="text-white block mb-0.5">Clinic Timings:</strong>
                  10:00 AM – 7:00 PM<br />
                  <span className="text-amber-300 font-semibold">Tuesday OFF</span>
                </p>
                <p>
                  <strong className="text-white block mb-0.5">Doctors:</strong>
                  Dr. Pravesh (MDS)<br />
                  Dr. Prerna (BDS)
                </p>
              </div>
            </div>

          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-blue-300/70">
            <div>
              © 2026 Blue Shine Dental Clinic. All Rights Reserved.
            </div>
            <div className="flex items-center gap-4">
              <span>Sector 24, Rohini, Delhi</span>
              <span>•</span>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="hover:text-white transition">WhatsApp</a>
              <span>•</span>
              <a href={mapDirectionsUrl} target="_blank" rel="noreferrer" className="hover:text-white transition">Google Maps</a>
            </div>
          </div>

        </div>
      </footer>

      {/* ============================================================== */}
      {/* 17. MOBILE BOTTOM ACTION BAR (CALL | WHATSAPP | BOOK) */}
      {/* ============================================================== */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-blue-200 px-3 py-2.5 shadow-float flex items-center justify-between gap-2">
        <a 
          href={`tel:${clinicPhone}`}
          className="flex-1 bg-blue-50 text-[#123E8C] py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 border border-blue-200 active:scale-95 transition"
        >
          <Phone className="w-3.5 h-3.5 text-[#2F80ED]" />
          <span>Call</span>
        </a>

        <a 
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="flex-1 bg-emerald-500 text-white py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 active:scale-95 transition"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>

        <a 
          href="#appointment"
          className="flex-1 bg-[#123E8C] text-white py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 active:scale-95 transition shadow-sm"
        >
          <Calendar className="w-3.5 h-3.5 text-blue-300" />
          <span>Book</span>
        </a>
      </div>

      {/* ============================================================== */}
      {/* LIGHTBOX MODAL FOR REAL CLINIC IMAGES */}
      {/* ============================================================== */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setLightboxImage(null)}
        >
          <div 
            className="relative bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="rounded-2xl overflow-hidden max-h-[70vh] bg-slate-900 flex items-center justify-center">
              <img 
                src={lightboxImage.src} 
                alt={lightboxImage.title} 
                className="max-h-[70vh] w-auto object-contain"
              />
            </div>
            <div className="p-4 sm:p-5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#2F80ED] bg-blue-50 px-2.5 py-0.5 rounded-md">
                {lightboxImage.category}
              </span>
              <h3 className="text-base sm:text-lg font-bold text-[#123E8C] mt-1.5">
                {lightboxImage.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                {lightboxImage.subtitle}
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
