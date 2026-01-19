"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { useMemo } from "react";
import "swiper/css";
import "swiper/css/effect-fade";

// Move heroImages outside component to prevent re-creation
const heroImages = [
  "/images/heroSection/WhatsApp Image 2026-01-18 at 10.14.56.jpeg",
  "/images/heroSection/WhatsApp Image 2026-01-18 at 10.15.13.jpeg",
  "/images/heroSection/WhatsApp Image 2026-01-18 at 10.15.26.jpeg",
];

export default function Hero() {
  const { language } = useLanguage();

  const content = {
    ar: {
      title: "نصنع جيلاً قيادياً مبدعاً يجمع بين الذكاء والمعرفة",
      subtitle:
        "هل تبحث عن مركز ضيافة موثوق في جدة يضمن لطفلك أجواءً مليئة بالسعادة والإلهام كل يوم؟",
      description:
        "في مركز ليتل ليدرز نعتني بعقول الصغار بالحب والإبداع والتعلّم الهادف. وبصفتنا من أبرز مراكز الضيافة في جدة نوفر بيئة دافئة وآمنة ينمو فيها الأطفال بثقة وفضول ولطف",
      cta: "سجل الآن",
    },
    en: {
      title: "Shaping Creative Leaders Who Think Smartly and Lead Wisely",
      subtitle:
        "Are you looking for a trusted daycare center in Jeddah that ensures your child has an atmosphere full of happiness and inspiration every day?",
      description:
        "At Little Leaders Center, we care for young minds with love, creativity, and purposeful learning. As one of the leading daycare centers in Jeddah, we provide a warm and safe environment where children grow with confidence, curiosity, and kindness.",
      cta: "Register Now",
    },
  };

  const current = content[language];

  // Memoize Swiper slides to prevent re-rendering
  const swiperSlides = useMemo(
    () =>
      heroImages.map((img, index) => (
        <SwiperSlide key={`hero-slide-${index}`}>
          <div
            className="w-full h-full absolute inset-0"
            style={{
              backgroundImage: `url(${encodeURI(img)})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </SwiperSlide>
      )),
    []
  );

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Image Slider Background */}
      <div className="absolute inset-0 overflow-hidden">
        <Swiper
          key={`hero-swiper-${language}`}
          modules={[Autoplay, EffectFade]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            reverseDirection: false,
          }}
          speed={800}
          loop={true}
          loopAdditionalSlides={heroImages.length}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          allowTouchMove={false}
          className="w-full h-full"
        >
          {swiperSlides}
        </Swiper>
        <div
          className="absolute inset-0 bg-black z-10"
          style={{ opacity: 0.5 }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-royal-blue/20 via-black/40 to-black/50 z-10" />
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-black/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-light-blue/20 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl font-bold mb-4 leading-tight"
          >
            <span className="text-white">{current.title}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg md:text-lg lg:text-lg text-white/80 mb-4 font-medium"
          >
            {current.subtitle}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base sm:text-sm md:text-sm lg:text-sm text-white/70 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            {current.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Link
              href="/sections"
              className="inline-block px-7 py-3 bg-gradient-to-r from-royal-blue to-light-blue text-white rounded-full text-base font-semibold hover:from-light-blue hover:to-pink transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer"
            >
              {current.cta}
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-white/80 rounded-full flex justify-center cursor-pointer backdrop-blur-sm bg-white/10"
          onClick={() => {
            window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
          }}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-3 bg-white rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
