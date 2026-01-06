"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";

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
          className="rounded-2xl shadow-lg overflow-hidden max-w-4xl mx-auto"
        >
          <div className="relative h-96 w-full">
            <a
              href="https://maps.app.goo.gl/VvZknuihdmJTE3QLA"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full h-full relative overflow-hidden rounded-t-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-light-blue/20 via-royal-blue/30 to-pink/20 flex items-center justify-center">
                <div className="text-center z-10">
                  <FaMapMarkerAlt className="w-16 h-16 text-royal-blue mx-auto mb-4" />
                  <p className="text-royal-blue font-semibold text-lg">
                    {current.button}
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </a>
          </div>
          <div className="bg-white p-6">
            <p className="text-royal-blue/80 text-center mb-4 leading-relaxed">
              {current.address}
            </p>
            <div className="text-center">
              <a
                href="https://maps.app.goo.gl/VvZknuihdmJTE3QLA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-gradient-to-r from-royal-blue to-light-blue text-white rounded-lg font-semibold hover:from-light-blue hover:to-pink transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl"
              >
                {current.button}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

