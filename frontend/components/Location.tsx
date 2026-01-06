"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";

export default function Location() {
  const { language } = useLanguage();

  const content = {
    ar: {
      title: "موقعنا",
      description: "نحن في قلب جدة، جاهزون لاستقبالكم",
      address: "مبنى رقم 6403 شارع السديري حي الزهراء 4415 جدة, السعودية 23521",
      button: "افتح في خرائط جوجل",
    },
    en: {
      title: "Our Location",
      description: "We are in the heart of Jeddah, ready to welcome you",
      address: "Building No. 6403, Al Sudairy Street, Al Zahra District 4415, Jeddah, Saudi Arabia 23521",
      button: "Open in Google Maps",
    },
  };

  const current = content[language];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-royal-blue mb-2">
            {current.title}
          </h2>
          <p className="text-royal-blue/70 text-sm">
            {current.description}
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Map Section - Takes 2 columns */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2 relative group"
          >
            <a
              href="https://maps.app.goo.gl/VvZknuihdmJTE3QLA"
              target="_blank"
              rel="noopener noreferrer"
              className="block relative h-64 lg:h-72 rounded-2xl overflow-hidden shadow-xl border-2 border-royal-blue/10 cursor-pointer"
            >
              {/* Map Image */}
              <Image
                src="/images/map.jpg"
                alt="Saudi Arabia Map with Jeddah location"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                unoptimized
              />
              
              {/* Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-br from-royal-blue/20 via-transparent to-pink/20 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-royal-blue/0 group-hover:bg-royal-blue/5 transition-colors duration-300" />
              
              {/* Click indicator */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg flex items-center gap-2">
                  <FaExternalLinkAlt className="w-4 h-4 text-royal-blue" />
                  <span className="text-royal-blue font-semibold text-sm">
                    {current.button}
                  </span>
                </div>
              </div>
            </a>
          </motion.div>

          {/* Info Card - Takes 1 column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-to-br from-royal-blue to-light-blue rounded-2xl p-5 shadow-xl text-white relative overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-pink rounded-full blur-2xl" />
            </div>

            <div className="relative z-10 h-full flex flex-col justify-between">
              {/* Address */}
              <div className="mb-4">
                <div className="flex items-start gap-3 mb-3">
                  <FaMapMarkerAlt className="w-5 h-5 text-white/90 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-sm mb-2">
                      {language === "ar" ? "العنوان" : "Address"}
                    </h3>
                    <p className="text-white/90 text-xs leading-relaxed">
                      {current.address}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div>
                <a
                  href="https://maps.app.goo.gl/VvZknuihdmJTE3QLA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-4 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 cursor-pointer group/btn shadow-lg"
                >
                  <FaExternalLinkAlt className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                  {current.button}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

