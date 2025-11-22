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
  const { scrollYProgress } = useScroll();
  const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.95]);

  const prices = [
    { duration: "2 Hours", price: 25, perDay: false, popular: false },
    { duration: "4 Hours", price: 35, perDay: false, popular: false },
    { duration: "Full Day", price: 45, perDay: false, popular: true },
    { duration: "24 Hours", price: 50, perDay: false, popular: false },
    { duration: "3 Days", price: 40, perDay: true, popular: false },
    { duration: "7 Days", price: 30, perDay: true, savings: "Best Value", popular: false },
    { duration: "2 Weeks", price: 25, perDay: true, popular: false },
    { duration: "Monthly", price: 20, perDay: true, popular: false },
  ];

  const destinations = [
    { name: "Boca del Drago", img: "/bocadeldrago.webp", desc: "Crystal-clear waters and the gateway to Starfish Beach. Perfect for a relaxing day trip.", distance: "30 min ride" },
    { name: "Starfish Beach", img: "/starfish.webp", desc: "Famous for its red starfish in shallow turquoise waters. A must-visit paradise!", distance: "35 min ride" },
    { name: "Bluff Beach", img: "/bluff.webp", desc: "Wild surf beach with powerful waves. Great for experienced surfers and nature lovers.", distance: "15 min ride" },
    { name: "Paunch", img: "/paunch.webp", desc: "Popular surf spot with consistent waves. Chill vibes and beach bars nearby.", distance: "10 min ride" },
  ];

  const features = [
    { icon: "🛵", title: "Well-Maintained Fleet", desc: "Reliable scooters serviced regularly for your safety" },
    { icon: "⛽", title: "Full Tank Included", desc: "Start your adventure with a full tank of gas" },
    { icon: "🪖", title: "Helmets Provided", desc: "Safety helmets included with every rental" },
    { icon: "🗺️", title: "Island Maps", desc: "Free maps with best routes and hidden spots" },
    { icon: "📞", title: "24/7 Support", desc: "Roadside assistance whenever you need it" },
    { icon: "🔄", title: "Flexible Returns", desc: "Easy pickup and drop-off in Bocas Town" },
  ];

  const faqs = [
    { q: "Do I need a license to rent?", a: "Yes, a valid driver's license is required. International licenses are accepted." },
    { q: "What's included in the rental?", a: "Each rental includes the scooter, helmet, full tank of gas, island map, and 24/7 support." },
    { q: "Can I take the scooter to other islands?", a: "Scooters are for Isla Colón only. We recommend water taxis for island hopping." },
    { q: "What happens if the scooter breaks down?", a: "Call us anytime! We provide free roadside assistance and replacement scooters." },
    { q: "Is there a deposit required?", a: "Yes, a refundable deposit of $100 is required, payable in cash or card." },
  ];

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
          {/* Navigation */}
          <motion.nav
            className="fixed top-0 left-0 right-0 z-50"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="max-w-6xl mx-auto px-4 py-4">
              <div className="flex items-center justify-between">
                <a href="#" className="flex items-center gap-2 opacity-90 hover:opacity-100 transition-opacity">
                  <Image src="/logoTrans.png" alt="Caribbean Scooters" width={36} height={36} />
                </a>
                
                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8 text-sm text-white/70">
                  <a href="#destinations" className="hover:text-white transition-colors">Destinations</a>
                  <a href="#pricing" className="hover:text-white transition-colors">Prices</a>
                  <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
                  <a href="#contact" className="text-white border-b border-white/50 hover:border-white pb-0.5 transition-colors">Contact</a>
                </div>

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
                </motion.div>
              )}
            </div>
          </motion.nav>

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
          >
            Explore <span className="bg-gradient-to-r from-[#b81817] via-[#e85d04] to-[#ffba08] bg-clip-text text-transparent">Bocas del Toro</span>
            <br />Your Way
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Rent a scooter and discover Panama's Caribbean paradise. Freedom, adventure, and unforgettable memories await.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a href="#pricing" className="bg-gradient-to-r from-[#b81817] via-[#e85d04] to-[#ffba08] hover:opacity-90 px-8 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105 hover:shadow-lg hover:shadow-[#e85d04]/30">
              View Prices
            </a>
            <a href="#contact" className="border border-white/30 hover:border-white/60 px-8 py-4 rounded-full text-lg font-semibold transition-all hover:bg-white/10">
              Contact Us
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

      {/* About Bocas Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="grid md:grid-cols-2 gap-12 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why <span className="bg-gradient-to-r from-[#b81817] via-[#e85d04] to-[#ffba08] bg-clip-text text-transparent">Scooter</span> in Bocas?
              </h2>
              <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                Bocas del Toro is a tropical archipelago on Panama's Caribbean coast, famous for its pristine beaches, lush rainforests, and vibrant island culture. Isla Colón, the main island, is perfect for exploring by scooter.
              </p>
              <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                Skip the crowded taxis and discover hidden beaches, local restaurants, and breathtaking viewpoints at your own pace. From Bluff Beach's powerful waves to the serene Starfish Beach, your adventure starts here.
              </p>
              <ul className="space-y-3 text-gray-300">
                {["Explore Isla Colón's 15+ beaches", "Visit Boca del Drago & Starfish Beach", "Discover local surf spots at Bluff Beach", "Find hidden jungle trails & viewpoints"].map((item, i) => (
                  <motion.li key={i} className="flex items-center gap-3" variants={fadeInUp}>
                    <span className="text-[#ffba08]">✓</span> {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div 
              className="relative h-[500px] rounded-2xl overflow-hidden"
              variants={scaleIn}
            >
              <Image src="/bluff.webp" alt="Exploring Bocas del Toro by scooter" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 to-transparent" />
            </motion.div>
          </motion.div>
        </div>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Explore <span className="bg-gradient-to-r from-[#b81817] via-[#e85d04] to-[#ffba08] bg-clip-text text-transparent">Paradise</span></h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Discover Isla Colón&apos;s most beautiful beaches on your scooter</p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {destinations.map((dest, i) => (
              <motion.div
                key={i}
                className="group relative h-[300px] rounded-2xl overflow-hidden"
                variants={fadeInUp}
                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
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
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What&apos;s <span className="bg-gradient-to-r from-[#b81817] via-[#e85d04] to-[#ffba08] bg-clip-text text-transparent">Included</span></h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Everything you need for a worry-free island adventure</p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {features.map((feature, i) => (
              <motion.div
                key={i}
                className="bg-[#1a1a1a] p-6 rounded-xl border border-white/5 hover:border-[#e85d04]/30 transition-all group"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <span className="text-4xl mb-4 block">{feature.icon}</span>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-[#ffba08] transition-colors">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Your <span className="bg-gradient-to-r from-[#b81817] via-[#e85d04] to-[#ffba08] bg-clip-text text-transparent">Adventure</span> Awaits</h2>
            <p className="text-gray-400 text-lg">Discover the beauty of Bocas del Toro on two wheels</p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div
                className="relative rounded-xl overflow-hidden col-span-2 row-span-2 h-[400px]"
                variants={scaleIn}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              >
                <Image src="/3.jpg" alt="Bocas del Toro scooter adventure" fill className="object-cover" />
                <div className="absolute inset-0 bg-black/20 hover:bg-black/0 transition-all" />
              </motion.div>
              <motion.div
                className="relative rounded-xl overflow-hidden h-[190px]"
                variants={scaleIn}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              >
                <Image src="/lancha.webp" alt="Scooter rental Bocas del Toro" fill className="object-cover" />
                <div className="absolute inset-0 bg-black/20 hover:bg-black/0 transition-all" />
              </motion.div>
              <motion.div
                className="relative rounded-xl overflow-hidden h-[190px]"
                variants={scaleIn}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              >
                <Image src="/1.jpg" alt="Explore Isla Colon by scooter" fill className="object-cover" />
                <div className="absolute inset-0 bg-black/20 hover:bg-black/0 transition-all" />
              </motion.div>
              <motion.div
                className="relative rounded-xl overflow-hidden h-[190px]"
                variants={scaleIn}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              >
                <Image src="/bluff.webp" alt="Caribbean Scooters Bocas" fill className="object-cover" />
                <div className="absolute inset-0 bg-black/20 hover:bg-black/0 transition-all" />
              </motion.div>
              <motion.div
                className="relative rounded-xl overflow-hidden h-[190px]"
                variants={scaleIn}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              >
                <Image src="/hero.webp" alt="Rent scooter Panama" fill className="object-cover" />
                <div className="absolute inset-0 bg-black/20 hover:bg-black/0 transition-all" />
              </motion.div>
              <motion.div
                className="relative rounded-xl overflow-hidden h-[190px]"
                variants={scaleIn}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Simple <span className="bg-gradient-to-r from-[#b81817] via-[#e85d04] to-[#ffba08] bg-clip-text text-transparent">Pricing</span></h2>
            <p className="text-gray-400 text-lg">No hidden fees. Longer rentals = bigger savings.</p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {prices.map((plan, i) => (
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
                    Most Popular
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
                  <span className="text-gray-400 text-sm">{plan.perDay ? " /day" : ""}</span>
                </div>
                <a 
                  href="#contact"
                  className={`block w-full text-center py-2 rounded-lg font-semibold text-sm transition-all ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-[#b81817] via-[#e85d04] to-[#ffba08] hover:opacity-90' 
                      : 'bg-white/10 hover:bg-white/20'
                  }`}
                >
                  Book Now
                </a>
              </motion.div>
            ))}
          </motion.div>

          <motion.p 
            className="text-center text-gray-500 mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            * Refundable deposit of $100 required. Cash or card accepted.
          </motion.p>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Common <span className="bg-gradient-to-r from-[#b81817] via-[#e85d04] to-[#ffba08] bg-clip-text text-transparent">Questions</span></h2>
          </motion.div>

          <motion.div 
            className="space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {faqs.map((faq, i) => (
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

<section id="contact" className="py-24 px-4 bg-[#111]">
  <div className="max-w-4xl mx-auto">
    <motion.div 
      className="text-center mb-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        Ready to <span className="bg-gradient-to-r from-[#b81817] via-[#e85d04] to-[#ffba08] bg-clip-text text-transparent">
        Ride</span>?
      </h2>
      <p className="text-gray-400 text-lg">Visit us in Bocas Town or contact us instantly</p>
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
        <h3 className="text-2xl font-semibold mb-6">Find Us</h3>
        <div className="space-y-4 text-gray-300 mb-8">
          <p className="flex items-start gap-3">
            <span className="text-[#e85d04] text-xl">📍</span>
            <span>
              Calle Segunda, Bocas Town<br />
              Next to City Hall<br />
              Isla Colón, Bocas del Toro, Panama
            </span>
          </p>
          <p className="flex items-center gap-3">
            <span className="text-[#e85d04] text-xl">🕐</span>
            <span>Open Daily: 8:00 AM - 6:00 PM</span>
          </p>
        </div>

        <div className="space-y-3">
          <a 
            href="https://wa.me/50764872001"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full bg-[#25D366] hover:bg-[#20bd5a] py-3 rounded-lg font-semibold transition-all"
          >
            {/* WhatsApp icon svg */}
            WhatsApp
          </a>

          <a 
            href="mailto:fernandodinofloripa@gmail.com"
            className="flex items-center justify-center gap-3 w-full bg-white/10 hover:bg-white/20 py-3 rounded-lg font-semibold transition-all"
          >
            {/* Email icon svg */}
            Send Email
          </a>
        </div>
      </motion.div>

      {/* RIGHT CARD — Map */}
      <motion.div 
        className="bg-[#1a1a1a] p-0 rounded-2xl border border-white/5 overflow-hidden"
        variants={fadeInUp}
      >
        <h3 className="text-2xl font-semibold p-8 mb-0">Find Us on the Map</h3>
        <div className="w-full h-64 md:h-[400px]">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3583.2016766647766!2d-82.24278332546902!3d9.341384084021914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa61d968461e6a3%3A0xffc233d14fb147f9!2sCaribbean%20Scooter%20-%20Bocas%20del%20Toro!5e1!3m2!1sfr!2spa!4v1763834216323!5m2!1sfr!2spa" width="600" height="450"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

        </div>
      </motion.div>

    </motion.div>
  </div>
</section>


      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <Image src="/logoTrans.png" alt="Caribbean Scooters" width={50} height={50} />
              <span className="font-semibold text-lg">Caribbean Scooters</span>
            </div>
            <div className="text-center">
              <p className="text-gray-500 text-sm">
                © 2025 Caribbean Scooters. Bocas del Toro, Panama.
              </p>
              <p className="text-gray-600 text-sm mt-1">
                Made with ❤️ by <a href="https://bocasdigital.com" target="_blank" rel="noopener noreferrer" className="text-[#ffba08] hover:underline">Bocas Digital</a>
              </p>
            </div>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/scootercaribbean/" className="text-gray-400 hover:text-[#ffba08] transition-colors">Instagram</a>
              <a href="https://www.facebook.com/profile.php?id=61569433118042" className="text-gray-400 hover:text-[#ffba08] transition-colors">Facebook</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}