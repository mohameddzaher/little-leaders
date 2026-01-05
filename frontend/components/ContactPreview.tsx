"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ContactPreview() {
  const { language } = useLanguage();

  const content = {
    ar: {
      title: "تواصل معنا",
      subtitle: "يسعدنا تواصلكم معنا في مركز ليتل ليدرز!",
      description:
        "نرحّب باستفساراتكم حول برامجنا التعليمية وفرص التسجيل ويسعد فريقنا المتخصّص بتقديم الدعم والإجابة عن جميع تساؤلاتكم",
      cta: "تواصلوا معنا اليوم",
      subtext:
        "دعونا نضع معًا الخطوة الأولى في مسيرة طفلكم نحو الإبداع والثقة والقيادة",
      button: "اتصل بنا",
    },
    en: {
      title: "Get in Touch",
      subtitle: "We'd love to hear from you!",
      description:
        "Whether you have questions or need more details about our programs or wish to enroll your child. Little Leaders Center's Team is here to help",
      cta: "Reach out Today",
      subtext:
        "Together let's start your child's journey toward confidence, creativity and leadership",
      button: "Contact Us",
    },
  };

  const current = content[language];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center bg-gradient-to-br from-royal-blue to-light-blue rounded-3xl p-12 text-white"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            {current.title}
          </h2>
          <p className="text-xl mb-4 opacity-90">{current.subtitle}</p>
          <p className="text-lg mb-8 opacity-80 max-w-2xl mx-auto">
            {current.description}
          </p>
          <p className="text-base mb-8 opacity-75">{current.subtext}</p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-royal-blue rounded-full font-semibold hover:bg-pink hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            {current.button}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
