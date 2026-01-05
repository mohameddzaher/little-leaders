"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import ShapeDivider from "./ShapeDivider";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function GalleryContent() {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState<"facilities" | "events">(
    "facilities"
  );

  const content = {
    ar: {
      title: "معرض الصور",
      facilities: {
        title: "المرافق",
        subtitle: "معرض الصور لدينا",
        description: "اكتشف لحظات النمو والإبداع والفرح في مركز ليتل ليدرز",
        fullDescription:
          "اكتشف مرافقنا الحديثة والمجهزة بأحدث المعدات والأدوات التعليمية التي توفر بيئة آمنة ومحفزة للأطفال للنمو والتعلم والاستكشاف في أجواء مليئة بالفرح والإبداع",
      },
      events: {
        title: "الفعاليات",
        subtitle: "معرض الصور لدينا",
        description: "اكتشف لحظات النمو والإبداع والفرح في مركز ليتل ليدرز",
        fullDescription:
          "شاهد فعالياتنا وأنشطتنا المتنوعة التي تنظمها المركز للأطفال، من الاحتفالات والأنشطة الترفيهية إلى ورش العمل التعليمية، حيث تتألق عقول الأطفال ويصنع القادة الصغار",
      },
    },
    en: {
      title: "Photo Gallery",
      facilities: {
        title: "Facilities",
        subtitle: "Our Photo Gallery",
        description:
          "Discover moments of growth, creativity and joy at Little Leaders Center",
        fullDescription:
          "Discover our modern facilities equipped with the latest educational tools and equipment that provide a safe and stimulating environment for children to grow, learn and explore in an atmosphere full of joy and creativity",
      },
      events: {
        title: "Events",
        subtitle: "Our Photo Gallery",
        description:
          "Discover moments of growth, creativity and joy at Little Leaders Center",
        fullDescription:
          "View our diverse events and activities organized by the center for children, from celebrations and recreational activities to educational workshops, where young minds shine and little leaders are made",
      },
    },
  };

  const current = content[language];
  const activeContent =
    activeTab === "facilities" ? current.facilities : current.events;

  // Facilities images from the Facilities folder
  const facilitiesImages = [
    "/images/Facilities/1-3.webp",
    "/images/Facilities/2-2.webp",
    "/images/Facilities/3-4.webp",
    "/images/Facilities/4-3.webp",
    "/images/Facilities/5-1.webp",
    "/images/Facilities/6-1.webp",
    "/images/Facilities/7-1.webp",
    "/images/Facilities/8-1.webp",
    "/images/Facilities/9-1.webp",
    "/images/Facilities/10-1.webp",
    "/images/Facilities/11.webp",
    "/images/Facilities/12.webp",
    "/images/Facilities/13.webp",
    "/images/Facilities/14.webp",
    "/images/Facilities/15.webp",
    "/images/Facilities/16.webp",
    "/images/Facilities/17.webp",
    "/images/Facilities/18.webp",
    "/images/Facilities/19.webp",
    "/images/Facilities/20.webp",
    "/images/Facilities/21.webp",
    "/images/Facilities/22.webp",
    "/images/Facilities/23.webp",
    "/images/Facilities/24.webp",
    "/images/Facilities/25.webp",
    "/images/Facilities/26.webp",
    "/images/Facilities/27.webp",
    "/images/Facilities/28.webp",
    "/images/Facilities/29.webp",
  ];

  const eventsImages = [
    "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=800",
    "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800",
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800",
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800",
  ];

  const images = activeTab === "facilities" ? facilitiesImages : eventsImages;

  return (
    <div>
      {/* Hero */}
      <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-light-blue/10 via-white to-pink/10 relative overflow-hidden">
        <ShapeDivider className="text-royal-blue" position="bottom" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://plus.unsplash.com/premium_photo-1673730193487-89ae5d321682?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGRhcmt8ZW58MHx8MHx8fDA%3D)",
          }}
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold text-white mb-3"
          >
            {current.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-white/80 mb-3"
            key={activeTab}
          >
            {activeContent.description}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-sm text-white/70 max-w-2xl mx-auto leading-relaxed"
            key={`${activeTab}-full`}
          >
            {activeContent.fullDescription}
          </motion.p>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-full p-2 shadow-lg inline-flex">
              <button
                onClick={() => setActiveTab("facilities")}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 cursor-pointer ${
                  activeTab === "facilities"
                    ? "bg-gradient-to-r from-royal-blue to-light-blue text-white"
                    : "text-royal-blue hover:bg-royal-blue/10"
                }`}
              >
                {current.facilities.title}
              </button>
              <button
                onClick={() => setActiveTab("events")}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 cursor-pointer ${
                  activeTab === "events"
                    ? "bg-gradient-to-r from-royal-blue to-light-blue text-white"
                    : "text-royal-blue hover:bg-royal-blue/10"
                }`}
              >
                {current.events.title}
              </button>
            </div>
          </div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 max-w-3xl mx-auto"
          >
            <h2 className="text-2xl font-bold text-royal-blue mb-3">
              {activeContent.subtitle}
            </h2>
            <p className="text-lg text-royal-blue/80 mb-2">
              {activeContent.description}
            </p>
            <p className="text-base text-royal-blue/70">
              {activeContent.fullDescription}
            </p>
          </motion.div>

          {/* Image Grid */}
          <div
            className={`grid gap-4 ${
              activeTab === "facilities"
                ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
            }`}
          >
            {images.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className={`relative overflow-hidden rounded-xl cursor-pointer group ${
                  activeTab === "facilities" ? "aspect-video" : "aspect-square"
                }`}
              >
                {/* Decorative circles */}
                <motion.div
                  className="absolute top-2 right-2 w-6 h-6 bg-white/30 rounded-full blur-sm z-10"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <img
                  src={img}
                  alt={`${activeTab} ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
        <ShapeDivider className="text-royal-blue" position="bottom" />
      </section>
    </div>
  );
}
