"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

export default function Home() {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(null);
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [language, setLanguage] = useState('en');
  const { scrollYProgress } = useScroll();
  const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.95]);

  const content = {
    en: {
      // ... (keep all your existing content object the same)
      nav: {
        destinations: "Destinations",
        pricing: "Pricing",
        faq: "FAQ",
        contact: "Contact"
      },
      hero: {
        title: "Explore <span>Bocas del Toro</span> Your Way",
        subtitle: "Rent a scooter and discover Panama's Caribbean paradise. Freedom, adventure, and unforgettable memories await you.",
        cta1: "View Pricing",
        cta2: "Contact Us"
      },
      about: {
        title: "Honda Navi 120cc Automatic",
        subtitle: "The Perfect Companion for Your Bocas Adventure",
        floatingBadge: {
          line1: "100% Automatic",
          line2: "Easy to Ride"
        },
        whyTitle: "Why the Honda Navi?",
        description1: "Our exclusive fleet of Honda Navi 120cc is specifically designed for tropical exploration. Automatic, reliable, and incredibly easy to ride - even if you've never ridden a scooter before.",
        description2: "The Honda Navi combines the best of both worlds: the agility of a scooter with the robustness of a motorcycle. Perfect for the roads of Bocas del Toro, from downtown to the most remote beaches.",
        specs: [
          { label: "Engine", value: "120cc 4-stroke" },
          { label: "Transmission", value: "Automatic (CVT)" },
          { label: "Capacity", value: "1-2 people" },
          { label: "Fuel Consumption", value: "~60 km/liter" }
        ],
        features: [
          "Automatic transmission - no clutch, no shifting",
          "Larger wheels for dirt and rough roads",
          "Low center of gravity for superior stability",
          "3.8L fuel tank - ideal for full days of exploration",
          "Comfortable seat for two people",
          "Adapted for tropical climate and Bocas roads"
        ]
      },
      destinations: {
        title: "Explore <span>Paradise</span>",
        subtitle: "Discover the most beautiful beaches of Isla Colón on your scooter",
        places: [
          { 
            name: "Boca del Drago", 
            img: "/bocadeldrago.webp", 
            map: "/mapBocaDelDrago.png",
            desc: "Crystal clear waters and the gateway to Starfish Beach. Perfect for a relaxing day.", 
            distance: "30 min by scooter",
            fullDescription: "Boca del Drago is one of the most beautiful beaches on Isla Colón, known for its calm turquoise waters and stunning coral formations. It's the perfect starting point to visit the famous Starfish Beach, where you can see hundreds of red starfish in their natural habitat."
          },
          { 
            name: "Starfish Beach", 
            img: "/starfish.webp", 
            map: "/mapEstrella.png",
            desc: "Famous for its red starfish in shallow turquoise waters. An unmissable paradise!", 
            distance: "35 min by scooter",
            fullDescription: "Starfish Beach (Playa Estrella) is world-famous for its crystal-clear shallow waters filled with vibrant red starfish. This pristine beach offers the perfect combination of natural beauty and tranquility. Remember to look but not touch the starfish to preserve this delicate ecosystem."
          },
          { 
            name: "Bluff Beach", 
            img: "/bluff.webp", 
            map: "/mapBluff.png",
            desc: "Wild beach with powerful waves. Great for experienced surfers and nature lovers.", 
            distance: "30 min by scooter",
            fullDescription: "Bluff Beach is a wild, expansive coastline known for its powerful waves and strong currents. This beach is a surfer's paradise and also a nesting ground for sea turtles. The raw, untamed beauty of Bluff Beach makes it perfect for those seeking adventure and natural wonders."
          },
          { 
            name: "Paunch", 
            img: "/paunch.webp", 
            map: "/mapPaunch.png",
            desc: "Popular surf spot with consistent waves. Relaxed vibes and beach bars nearby.", 
            distance: "15 min by scooter",
            fullDescription: "Paunch is a beloved surf spot located just minutes from Bocas Town. With consistent waves suitable for all skill levels, it's the perfect place to learn surfing or enjoy a sunset session. Several beach bars nearby offer refreshments and a relaxed atmosphere."
          },
        ]
      },
      features: {
        title: "What's <span>Included</span>",
        subtitle: "Everything you need for a worry-free island adventure",
        items: [
          { icon: "🛵", title: "Well-Maintained Fleet", desc: "Reliable scooters regularly serviced for your safety" },
          { icon: "⛽", title: "Home Delivery", desc: "We deliver and pick up wherever the customer wants" },
          { icon: "🪖", title: "Helmets Provided", desc: "Safety helmets included with each rental" },
          { icon: "📞", title: "Support", desc: "Roadside assistance whenever you need it" },
          { icon: "🔄", title: "Flexible Returns", desc: "Easy pickup and drop-off in Bocas Town" },
        ]
      },
      gallery: {
        title: "Your Adventure Awaits",
        subtitle: "Discover the beauty of Bocas del Toro on two wheels"
      },
      pricing: {
        title: "Simple <span>Pricing</span>",
        subtitle: "No hidden fees. Longer rentals = bigger savings.",
        plans: [
          { duration: "2 Hours", price: 25, perDay: false, popular: false },
          { duration: "4 Hours", price: 35, perDay: false, popular: false },
          { duration: "Full Day", price: 45, perDay: false, popular: true },
          { duration: "24 Hours", price: 50, perDay: false, popular: false },
          { duration: "3 Days", price: 40, perDay: true, popular: false },
          { duration: "7 Days", price: 35, perDay: true, savings: "Best Value", popular: false },
          { duration: "2 Weeks", price: 30, perDay: true, popular: false },
          { duration: "Monthly", price: 25, perDay: true, popular: false },
        ],
        note: "* $100 refundable deposit required. We accept cash or Yappy.",
        bookNow: "Book Now",
        popular: "Most Popular"
      },
      faq: {
        title: "Frequently Asked <span>Questions</span>",
        items: [
          { 
            q: "Do I need a driver's license to rent?", 
            a: "Yes, a valid driver's license is required. International licenses are accepted." 
          },
          { 
            q: "What's included in the rental?", 
            a: "Each rental includes the scooter, helmet, and phone mount." 
          },
          { 
            q: "Can I take the scooter to other islands?", 
            a: "Scooters are for Isla Colón only. We recommend water taxis to travel between islands." 
          },
          { 
            q: "What happens if the scooter breaks down?", 
            a: "The customer is responsible for any damage to the scooter caused by misuse. Caribbean Scooter is responsible for any damage resulting from normal wear and tear or mechanical issues." 
          },
          { 
            q: "What type of scooter does Caribbean Scooter rent?", 
            a: "Caribbean Scooter only works with HONDA NAVI, 120cc, automatic, perfect for one or two people." 
          },      
        ]
      },
      contact: {
        title: "Ready to <span>Ride</span>?",
        subtitle: "Visit us in Bocas Town or contact us instantly",
        addressTitle: "Find Us",
        address: "Calle Segunda, Bocas Town<br />Next to the Town Hall<br />Isla Colón, Bocas del Toro, Panama",
        hours: "Open Daily: 8:00 AM - 6:00 PM",
        mapTitle: "Find Us on the Map",
        whatsapp: "WhatsApp",
        email: "Send Email"
      },
      footer: {
        copyright: "© 2025 Caribbean Scooters. Bocas del Toro, Panama.",
        madeBy: "Made with ❤️ by"
      },
      modals: {
        close: "Close",
        viewMap: "View Map",
        getDirections: "Get Directions"
      }
    }
  };

  const t = content[language];

  // Lightbox Modal Component
  const LightboxModal = () => {
    if (!lightboxImage) return null;

    return (
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setLightboxImage(null)}
      >
        <div className="relative max-w-4xl max-h-[90vh] mx-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            <Image
              src={lightboxImage}
              alt="Full size view"
              width={1200}
              height={800}
              className="object-contain max-h-[80vh] rounded-lg"
            />
            <button
              className="absolute -top-12 right-0 text-white text-2xl hover:text-[#ffba08] transition-colors"
              onClick={() => setLightboxImage(null)}
            >
              ✕
            </button>
          </motion.div>
        </div>
      </motion.div>
    );
  };

  // Destination Modal Component
  const DestinationModal = () => {
    if (!selectedDestination) return null;

    return (
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setSelectedDestination(null)}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="bg-[#1a1a1a] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative">
            {/* Header Image */}
            <div className="relative h-64 md:h-80 rounded-t-2xl overflow-hidden">
              <Image
                src={selectedDestination.img}
                alt={selectedDestination.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {selectedDestination.name}
                </h3>
                <span className="inline-block bg-[#e85d04]/90 text-white text-sm font-semibold px-3 py-1 rounded-full">
                  {selectedDestination.distance}
                </span>
              </div>
              <button
                className="absolute top-4 right-4 text-white text-2xl hover:text-[#ffba08] transition-colors bg-black/50 rounded-full p-2"
                onClick={() => setSelectedDestination(null)}
              >
                ✕
              </button>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Description */}
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-[#ffba08]">About this spot</h4>
                  <p className="text-gray-300 leading-relaxed">
                    {selectedDestination.fullDescription}
                  </p>
                  <p className="text-gray-300 mt-4 leading-relaxed">
                    {selectedDestination.desc}
                  </p>
                </div>

                {/* Map */}
                <div>
                  <div className="relative h-64 md:h-80 rounded-xl overflow-hidden border border-white/10">
                    <Image
                      src={selectedDestination.map}
                      alt={`Map of ${selectedDestination.name}`}
                      fill
                      className="object-cover"
                    />
                  </div>

                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <main className="bg-[#0a0a0a] text-white min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <motion.section 
        className="relative h-screen flex items-center justify-center"
        style={{ opacity: headerOpacity }}
      >
        <div className="absolute inset-0 z-0">
          <Image src="/hero.webp" alt="Bocas del Toro scooter rental" fill className="object-cover opacity-60" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/30 via-transparent to-[#0a0a0a]" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
 <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                   {/* Navigation */}
                   <motion.nav
                     className="fixed top-0 left-0 right-0 z-50"
                     initial={{ opacity: 0, y: -10 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.5 }}
                   >
                     <div className="max-w-6xl mx-auto px-4 py-4">
                       <div className="flex items-center justify-between">
                         
                         {/* Logo */}
                         <a 
                           href="#"
                           className="flex items-center gap-2 opacity-90 hover:opacity-100 transition-opacity"
                         >
                           <Image src="/logoTrans.png" alt="Caribbean Scooters" width={36} height={36} />
                         </a>
                 
                         {/* Desktop Menu */}
                         <div className="hidden md:flex items-center gap-8 text-sm text-white/70">
                           <a href="#destinations" className="hover:text-white transition-colors">Destinations</a>
                           <a href="#pricing" className="hover:text-white transition-colors">Prices</a>
                           <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
                           <a href="#contact" className="text-white border-b border-white/50 hover:border-white pb-0.5 transition-colors">Contact</a>
                         </div>
                 
                         {/* Desktop Language Switcher */}
                         <motion.div 
                           className="hidden md:flex items-center gap-3 text-white/80 ml-6"
                           initial={{ opacity: 0, y: -5 }}
                           animate={{ opacity: 1, y: 0 }}
                           transition={{ duration: 0.4, delay: 0.2 }}
                         >
                           <a href="/" className="px-2 py-1 rounded-md hover:bg-white/10 hover:text-white transition">EN</a>
                           <a href="/es" className="px-2 py-1 rounded-md hover:bg-white/10 hover:text-white transition">ES</a>
                           <a href="/br" className="px-2 py-1 rounded-md hover:bg-white/10 hover:text-white transition">BR</a>
                         </motion.div>
                 
                         {/* Mobile Burger */}
                         <button 
                           className="md:hidden text-white p-2"
                           onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                         >
                           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                             {mobileMenuOpen ? (
                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                             ) : (
                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                             )}
                           </svg>
                         </button>
                 
                       </div>
                 
                       {/* Mobile Menu */}
                       {mobileMenuOpen && (
                         <motion.div 
                           className="md:hidden mt-4 bg-[#0a0a0a]/95 backdrop-blur-sm rounded-lg border border-white/10 p-4"
                           initial={{ opacity: 0, y: -10 }}
                           animate={{ opacity: 1, y: 0 }}
                           transition={{ duration: 0.2 }}
                         >
                           <div className="flex flex-col gap-4 text-white/80">
                             <a href="#destinations" onClick={() => setMobileMenuOpen(false)} className="hover:text-white transition-colors py-2">Destinations</a>
                             <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="hover:text-white transition-colors py-2">Prices</a>
                             <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="hover:text-white transition-colors py-2">FAQ</a>
                             <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-white transition-colors py-2 border-t border-white/10 pt-4">Contact</a>
                           </div>
                 
                           {/* Mobile Language Switcher */}
                           <div className="border-t border-white/10 pt-4 mt-3">
                             <div className="flex items-center justify-center gap-4 text-white">
                               <a 
                                 href="/" 
                                 onClick={() => setMobileMenuOpen(false)} 
                                 className="px-3 py-1 rounded-md bg-white/10 hover:bg-white/20 transition"
                               >
                                 EN
                               </a>
                               <a 
                                 href="/es" 
                                 onClick={() => setMobileMenuOpen(false)} 
                                 className="px-3 py-1 rounded-md bg-white/10 hover:bg-white/20 transition"
                               >
                                 ES
                               </a>
                               <a 
                                 href="/br" 
                                 onClick={() => setMobileMenuOpen(false)} 
                                 className="px-3 py-1 rounded-md bg-white/10 hover:bg-white/20 transition"
                               >
                                 BR
                               </a>
                             </div>
                           </div>
                         </motion.div>
                       )}
                 
                     </div>
                   </motion.nav>
                 </div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image src="/logoTrans.png" alt="Caribbean Scooters logoTrans" width={180} height={180} className="mx-auto mb-6" />
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            dangerouslySetInnerHTML={{ __html: t.hero.title }}
          />
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t.hero.subtitle}
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a href="#pricing" className="bg-gradient-to-r from-[#b81817] via-[#e85d04] to-[#ffba08] hover:opacity-90 px-8 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105 hover:shadow-lg hover:shadow-[#e85d04]/30">
              {t.hero.cta1}
            </a>
            <a href="#contact" className="border border-white/30 hover:border-white/60 px-8 py-4 rounded-full text-lg font-semibold transition-all hover:bg-white/10">
              {t.hero.cta2}
            </a>
          </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.section>

      {/* About Honda Navi Section */}
      <section id="about" className="py-24 px-4 bg-gradient-to-b from-[#121212] to-black">
        <motion.div 
          className="max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#ffba08] to-[#d00000] bg-clip-text text-transparent">
              {t.about.title}
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">{t.about.subtitle}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Left - Image */}
            <motion.div variants={scaleIn} className="relative">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <Image 
                  src="/navi.jpg" 
                  alt="Honda Navi 120cc"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating badge */}
          {/* Floating badge */}
<div className="absolute -bottom-6 -right-6 bg-[#ffba08] text-black px-6 py-4 rounded-xl shadow-xl">
  <p className="text-sm font-semibold">{t.about.floatingBadge.line1}</p>
  <p className="text-xs">{t.about.floatingBadge.line2}</p>
</div>

            </motion.div>

            {/* Right - Description */}
            <motion.div variants={fadeInUp} className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                {t.about.description1}
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                {t.about.description2}
              </p>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                {t.about.specs.map((spec, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-lg p-4">
                    <p className="text-gray-500 text-sm mb-1">{spec.label}</p>
                    <p className="text-white font-semibold">{spec.value}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Features List */}
          <motion.div variants={fadeInUp} className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12">
<h3 className="text-2xl font-bold mb-8 text-center">
  {t.about.whyTitle}
</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {t.about.features.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <span className="text-[#ffba08] text-2xl mt-1">✓</span>
                  <p className="text-gray-300 text-lg">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>
      {/* Destinations Section */}
      <section id="destinations" className="py-24 px-4 bg-gradient-to-b from-[#0a0a0a] to-[#111]">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 
              className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#ffba08] to-[#d00000] bg-clip-text text-transparent"
              dangerouslySetInnerHTML={{ __html: t.destinations.title }}
            />
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">{t.destinations.subtitle}</p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {t.destinations.places.map((dest, i) => (
              <motion.div
                key={i}
                className="group relative h-[300px] rounded-2xl overflow-hidden cursor-pointer"
                variants={fadeInUp}
                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                onClick={() => setSelectedDestination(dest)}
              >
                <Image src={dest.img} alt={dest.name} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block bg-[#e85d04]/90 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    {dest.distance}
                  </span>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-[#ffba08] transition-colors">{dest.name}</h3>
                  <p className="text-gray-300 text-sm">{dest.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 bg-[#111]">
        {/* Your existing features section code */}
      </section>

      {/* Gallery Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#ffba08] to-[#d00000] bg-clip-text text-transparent">
              {t.gallery.title}
            </h2>
            <p className="text-gray-400 text-lg">{t.gallery.subtitle}</p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {/* Make all gallery images clickable */}
            <motion.div
              className="relative rounded-xl overflow-hidden col-span-2 row-span-2 h-[400px] cursor-pointer"
              variants={scaleIn}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              onClick={() => setLightboxImage("/3.jpg")}
            >
              <Image src="/3.jpg" alt="Bocas del Toro scooter adventure" fill className="object-cover" />
              <div className="absolute inset-0 bg-black/20 hover:bg-black/0 transition-all" />
            </motion.div>
            <motion.div
              className="relative rounded-xl overflow-hidden h-[190px] cursor-pointer"
              variants={scaleIn}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              onClick={() => setLightboxImage("/lancha.webp")}
            >
              <Image src="/lancha.webp" alt="Scooter rental Bocas del Toro" fill className="object-cover" />
              <div className="absolute inset-0 bg-black/20 hover:bg-black/0 transition-all" />
            </motion.div>
            <motion.div
              className="relative rounded-xl overflow-hidden h-[190px] cursor-pointer"
              variants={scaleIn}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              onClick={() => setLightboxImage("/1.jpg")}
            >
              <Image src="/1.jpg" alt="Explore Isla Colon by scooter" fill className="object-cover" />
              <div className="absolute inset-0 bg-black/20 hover:bg-black/0 transition-all" />
            </motion.div>
            <motion.div
              className="relative rounded-xl overflow-hidden h-[190px] cursor-pointer"
              variants={scaleIn}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              onClick={() => setLightboxImage("/bluff.webp")}
            >
              <Image src="/bluff.webp" alt="Caribbean Scooters Bocas" fill className="object-cover" />
              <div className="absolute inset-0 bg-black/20 hover:bg-black/0 transition-all" />
            </motion.div>
            <motion.div
              className="relative rounded-xl overflow-hidden h-[190px] cursor-pointer"
              variants={scaleIn}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              onClick={() => setLightboxImage("/hero.webp")}
            >
              <Image src="/hero.webp" alt="Rent scooter Panama" fill className="object-cover" />
              <div className="absolute inset-0 bg-black/20 hover:bg-black/0 transition-all" />
            </motion.div>
            <motion.div
              className="relative rounded-xl overflow-hidden h-[190px] cursor-pointer"
              variants={scaleIn}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              onClick={() => setLightboxImage("/bocadeldrago.webp")}
            >
              <Image src="/bocadeldrago.webp" alt="Bocas Town scooter rental" fill className="object-cover" />
              <div className="absolute inset-0 bg-black/20 hover:bg-black/0 transition-all" />
            </motion.div>
          </motion.div>
        </div>
      </section>

       {/* Pricing Section */}
      <section id="pricing" className="py-24 px-4 bg-[#111]">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 
              className="text-4xl md:text-5xl font-bold mb-4"
              dangerouslySetInnerHTML={{ __html: t.pricing.title }}
            />
            <p className="text-gray-400 text-lg">{t.pricing.subtitle}</p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {t.pricing.plans.map((plan, i) => (
              <motion.div
                key={i}
                className={`relative bg-[#1a1a1a] rounded-2xl p-5 border transition-all cursor-pointer ${
                  plan.popular ? 'border-[#e85d04] shadow-lg shadow-[#e85d04]/20' : 'border-white/5 hover:border-white/20'
                } ${selectedPlan === i ? 'ring-2 ring-[#ffba08]' : ''}`}
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                onClick={() => setSelectedPlan(i)}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#b81817] via-[#e85d04] to-[#ffba08] text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {t.pricing.popular}
                  </span>
                )}
                {plan.savings && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#e85d04] to-[#ffba08] text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {plan.savings}
                  </span>
                )}
                <h3 className="text-lg font-semibold mb-2">{plan.duration}</h3>
                <div className="mb-3">
                  <span className="text-3xl font-bold">${plan.price}</span>
                  <span className="text-gray-400 text-sm">{plan.perDay ? " /dia" : ""}</span>
                </div>
                <a 
                  href="#contact"
                  className={`block w-full text-center py-2 rounded-lg font-semibold text-sm transition-all ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-[#b81817] via-[#e85d04] to-[#ffba08] hover:opacity-90' 
                      : 'bg-white/10 hover:bg-white/20'
                  }`}
                >
                  {t.pricing.bookNow}
                </a>
              </motion.div>
            ))}
          </motion.div>


        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 
              className="text-4xl md:text-5xl font-bold mb-4"
              dangerouslySetInnerHTML={{ __html: t.faq.title }}
            />
          </motion.div>

          <motion.div 
            className="space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {t.faq.items.map((faq, i) => (
              <motion.details
                key={i}
                className="group bg-[#1a1a1a] rounded-xl border border-white/5 overflow-hidden"
                variants={fadeInUp}
              >
                <summary className="p-6 cursor-pointer flex justify-between items-center font-semibold text-lg hover:text-[#b81817] transition-colors list-none">
                  {faq.q}
                  <span className="text-[#e85d04] group-open:rotate-45 transition-transform text-2xl">+</span>
                </summary>
                <p className="px-6 pb-6 text-gray-400 -mt-2">{faq.a}</p>
              </motion.details>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 bg-[#111]">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 
              className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#ffba08] to-[#d00000] bg-clip-text text-transparent"
              dangerouslySetInnerHTML={{ __html: t.contact.title }}
            />
            <p className="text-gray-400 text-lg">{t.contact.subtitle}</p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {/* LEFT CARD */}
            <motion.div 
              className="bg-[#1a1a1a] p-8 rounded-2xl border border-white/5"
              variants={fadeInUp}
            >
              <h3 className="text-2xl font-semibold mb-6">{t.contact.addressTitle}</h3>
              <div className="space-y-4 text-gray-300 mb-8">
                <p className="flex items-start gap-3">
                  <span className="text-[#e85d04] text-xl">📍</span>
                  <span dangerouslySetInnerHTML={{ __html: t.contact.address }} />
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-[#e85d04] text-xl">🕐</span>
                  <span>{t.contact.hours}</span>
                </p>
              </div>

              <div className="space-y-3">
                <a 
                  href="https://wa.me/50764872001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full bg-[#25D366] hover:bg-[#20bd5a] py-3 rounded-lg font-semibold transition-all"
                >
                  {t.contact.whatsapp}
                </a>

                <a 
                  href="mailto:fernandodinofloripa@gmail.com"
                  className="flex items-center justify-center gap-3 w-full bg-white/10 hover:bg-white/20 py-3 rounded-lg font-semibold transition-all"
                >
                  {t.contact.email}
                </a>
              </div>
            </motion.div>

            {/* RIGHT CARD — Map */}
            <motion.div 
              className="bg-[#1a1a1a] p-0 rounded-2xl border border-white/5 overflow-hidden"
              variants={fadeInUp}
            >
              <h3 className="text-2xl font-semibold p-8 mb-0">{t.contact.mapTitle}</h3>
              <div className="w-full h-64 md:h-[400px]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3583.2016766647766!2d-82.24278332546902!3d9.341384084021914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa61d968461e6a3%3A0xffc233d14fb147f9!2sCaribbean%20Scooter%20-%20Bocas%20del%20Toro!5e1!3m2!1sfr!2spa!4v1763834216323!5m2!1sfr!2spa" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Modals */}
      <LightboxModal />
      <DestinationModal />
    </main>
  );
}