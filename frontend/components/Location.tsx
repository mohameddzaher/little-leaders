"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";
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
    <section className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-br from-light-blue/10 via-white to-pink/10">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-royal-blue mb-3">
            {current.title}
          </h2>
          <p className="text-royal-blue/70 text-lg mb-6">
            {current.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto relative overflow-hidden group"
        >
          {/* Decorative circles */}
          <motion.div
            className="absolute top-2 right-2 w-20 h-20 bg-light-blue/20 rounded-full blur-xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-2 left-2 w-16 h-16 bg-pink/20 rounded-full blur-xl"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />

          {/* Map Image with 3D effect */}
          <div className="relative mb-6 rounded-xl overflow-hidden transform group-hover:scale-105 transition-transform duration-300 shadow-2xl">
            <div className="relative h-64 w-full">
              <Image
                src="/images/map.jpg"
                alt="Saudi Arabia Map with Jeddah location"
                fill
                className="object-cover"
                unoptimized
              />
              {/* Jeddah Marker with 3D effect */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <motion.div
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.9, 1, 0.9],
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative"
                >
                  <FaMapMarkerAlt className="w-14 h-14 text-red-500 drop-shadow-2xl filter drop-shadow-lg" style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))' }} />
                  <div className="absolute inset-0 w-14 h-14 bg-red-500/40 rounded-full animate-ping" />
                  <div className="absolute inset-0 w-14 h-14 bg-red-500/20 rounded-full animate-pulse" />
                </motion.div>
              </div>
              {/* 3D Overlay gradients for depth effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-royal-blue/30 via-transparent to-pink/30" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
            </div>
          </div>

          <p className="text-royal-blue/80 text-center mb-6 leading-relaxed relative z-10">
            {current.address}
          </p>
          <div className="text-center relative z-10">
            <a
              href="https://maps.app.goo.gl/VvZknuihdmJTE3QLA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-gradient-to-r from-royal-blue to-light-blue text-white rounded-lg font-semibold hover:from-light-blue hover:to-pink transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              {current.button}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

