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
          <div className="relative h-96 w-full rounded-t-2xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3710.123456789!2d39.1234567!3d21.1234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDA3JzI0LjQiTiAzOcKwMDcnMjQuNCJF!5e0!3m2!1sen!2ssa!4v1234567890123!5m2!1sen!2ssa"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
              title="Little Leaders Center Location"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
            <a
              href="https://maps.app.goo.gl/VvZknuihdmJTE3QLA"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 right-4 bg-white/90 hover:bg-white text-royal-blue px-4 py-2 rounded-lg font-semibold transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl text-sm flex items-center gap-2"
            >
              <FaMapMarkerAlt className="w-4 h-4" />
              {current.button}
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

