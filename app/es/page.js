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
  const [language, setLanguage] = useState('es');
  const { scrollYProgress } = useScroll();
  const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.95]);

const content = {
  es: {
    nav: {
      destinations: "Destinos",
      pricing: "Precios",
      faq: "Preguntas Frecuentes",
      contact: "Contacto"
    },
    hero: {
      title: "Explora <span>Bocas del Toro</span> a Tu Manera",
      subtitle: "Renta una scooter y descubre el paraíso caribeño de Panamá. Libertad, aventura y recuerdos inolvidables te esperan.",
      cta1: "Ver Precios",
      cta2: "Contáctanos"
    },
    about: {
      title: "Honda Navi 120cc Automática",
      subtitle: "La Compañera Perfecta para tu Aventura en Bocas",
      floatingBadge: {
        line1: "100% Automática",
        line2: "Fácil de Manejar"
      },
      whyTitle: "¿Por qué la Honda Navi?",
      description1: "Nuestra exclusiva flota de Honda Navi 120cc está diseñada específicamente para la exploración tropical. Automática, confiable e increíblemente fácil de manejar, incluso si nunca has conducido una scooter.",
      description2: "La Honda Navi combina lo mejor de ambos mundos: la agilidad de una scooter con la robustez de una motocicleta. Perfecta para las carreteras de Bocas del Toro, desde el centro hasta las playas más remotas.",
      specs: [
        { label: "Motor", value: "120cc 4 tiempos" },
        { label: "Transmisión", value: "Automática (CVT)" },
        { label: "Capacidad", value: "1–2 personas" },
        { label: "Consumo", value: "~60 km/litro" }
      ],
      features: [
        "Transmisión automática: sin clutch ni cambios",
        "Llantas más grandes para caminos de tierra y carreteras irregulares",
        "Centro de gravedad bajo para mayor estabilidad",
        "Tanque de 3.8L: ideal para días completos de exploración",
        "Asiento cómodo para dos personas",
        "Adaptada para el clima tropical y los caminos de Bocas"
      ]
    },
    destinations: {
      title: "Explora el <span>Paraíso</span>",
      subtitle: "Descubre las playas más hermosas de Isla Colón en tu scooter",
      places: [
        { 
          name: "Boca del Drago",
          img: "/bocadeldrago.webp",
          map: "/mapBocaDelDrago.png",
          desc: "Aguas cristalinas y la entrada a la Playa de las Estrellas. Perfecto para un día relajado.",
          distance: "30 min en scooter",
          fullDescription: "Boca del Drago es una de las playas más hermosas de Isla Colón, famosa por sus aguas tranquilas y turquesas y sus formaciones coralinas. Es el punto de partida ideal para visitar la famosa Playa de las Estrellas, donde puedes ver cientos de estrellas de mar en su hábitat natural."
        },
        { 
          name: "Playa de las Estrellas",
          img: "/starfish.webp",
          map: "/mapEstrella.png",
          desc: "Famosa por sus estrellas de mar rojas en aguas turquesas poco profundas. ¡Un paraíso imperdible!",
          distance: "35 min en scooter",
          fullDescription: "Playa de las Estrellas (Starfish Beach) es mundialmente conocida por sus aguas cristalinas y poco profundas llenas de vibrantes estrellas de mar rojas. Esta playa prístina ofrece una combinación perfecta de belleza natural y tranquilidad. Recuerda mirar, pero no tocar las estrellas para proteger este delicado ecosistema."
        },
        { 
          name: "Bluff Beach",
          img: "/bluff.webp",
          map: "/mapBluff.png",
          desc: "Playa salvaje con olas poderosas. Ideal para surfistas experimentados y amantes de la naturaleza.",
          distance: "30 min en scooter",
          fullDescription: "Bluff Beach es una costa salvaje y extensa conocida por sus olas poderosas y fuertes corrientes. Es el paraíso de los surfistas y un importante lugar de anidación para tortugas marinas. La belleza cruda y natural de Bluff la convierte en un destino perfecto para quienes buscan aventura."
        },
        { 
          name: "Paunch",
          img: "/paunch.webp",
          map: "/mapPaunch.png",
          desc: "Spot de surf popular con olas constantes. Buen ambiente y bares de playa cercanos.",
          distance: "15 min en scooter",
          fullDescription: "Paunch es un famoso punto de surf ubicado a pocos minutos del pueblo. Con olas constantes para todos los niveles, es el lugar perfecto para aprender a surfear o disfrutar una sesión al atardecer. Varios bares de playa cercanos ofrecen bebidas y un ambiente relajado."
        }
      ]
    },
    features: {
      title: "Qué Está <span>Incluido</span>",
      subtitle: "Todo lo que necesitas para una aventura sin preocupaciones",
      items: [
        { icon: "🛵", title: "Flota Bien Mantenida", desc: "Scooters confiables revisadas regularmente para tu seguridad" },
        { icon: "⛽", title: "Entrega a Domicilio", desc: "Entregamos y recogemos donde el cliente desee" },
        { icon: "🪖", title: "Cascos Incluidos", desc: "Cascos de seguridad incluidos con cada renta" },
        { icon: "📞", title: "Asistencia", desc: "Soporte en carretera cuando lo necesites" },
        { icon: "🔄", title: "Devoluciones Flexibles", desc: "Fácil entrega y devolución en Bocas Town" },
      ]
    },
    gallery: {
      title: "Tu Aventura Te Espera",
      subtitle: "Descubre la belleza de Bocas del Toro sobre dos ruedas"
    },
    pricing: {
      title: "Precios <span>Simples</span>",
      subtitle: "Sin tarifas ocultas. Más días = más ahorro.",
      plans: [
        { duration: "2 Horas", price: 25, perDay: false, popular: false },
        { duration: "4 Horas", price: 35, perDay: false, popular: false },
        { duration: "Día Completo", price: 45, perDay: false, popular: true },
        { duration: "24 Horas", price: 50, perDay: false, popular: false },
        { duration: "3 Días", price: 40, perDay: true, popular: false },
        { duration: "7 Días", price: 35, perDay: true, savings: "Mejor Oferta", popular: false },
        { duration: "2 Semanas", price: 30, perDay: true, popular: false },
        { duration: "Mensual", price: 25, perDay: true, popular: false },
      ],
      note: "* Se requiere un depósito reembolsable de $100. Aceptamos efectivo o Yappy.",
      bookNow: "Reservar Ahora",
      popular: "Más Popular"
    },
    faq: {
      title: "Preguntas <span>Frecuentes</span>",
      items: [
        { 
          q: "¿Necesito licencia para rentar?", 
          a: "Sí, se requiere una licencia de conducir válida. Las licencias internacionales son aceptadas." 
        },
        { 
          q: "¿Qué incluye la renta?", 
          a: "Cada renta incluye la scooter, casco y soporte para teléfono." 
        },
        { 
          q: "¿Puedo llevar la scooter a otras islas?", 
          a: "Las scooters son solo para Isla Colón. Recomendamos water taxis para viajar entre islas." 
        },
        { 
          q: "¿Qué pasa si la scooter se descompone?", 
          a: "El cliente es responsable por daños causados por mal uso. Caribbean Scooter se hace responsable por daños derivados de desgaste normal o fallas mecánicas." 
        },
        { 
          q: "¿Qué tipo de scooter renta Caribbean Scooter?", 
          a: "Caribbean Scooter trabaja únicamente con HONDA NAVI, 120cc, automática, perfecta para una o dos personas." 
        }
      ]
    },
    contact: {
      title: "¿Listo para <span>Rodar</span>?",
      subtitle: "Visítanos en Bocas Town o contáctanos al instante",
      addressTitle: "Encuéntranos",
      address: "Calle Segunda, Bocas Town<br />Al lado del Municipio<br />Isla Colón, Bocas del Toro, Panamá",
      hours: "Abierto Todos los Días: 8:00 AM – 6:00 PM",
      mapTitle: "Encuéntranos en el Mapa",
      whatsapp: "WhatsApp",
      email: "Enviar Email"
    },
    footer: {
      copyright: "© 2025 Caribbean Scooters. Bocas del Toro, Panamá.",
      madeBy: "Hecho con ❤️ por"
    },
    modals: {
      close: "Cerrar",
      viewMap: "Ver Mapa",
      getDirections: "Obtener Direcciones"
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