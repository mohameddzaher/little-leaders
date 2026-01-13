"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import ShapeDivider from "./ShapeDivider";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface Event {
  id: string;
  name: {
    ar: string;
    en: string;
  };
  description: {
    ar: string;
    en: string;
  };
  images: string[];
  thumbnail: string;
}

export default function GalleryContent() {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState<"facilities" | "events">(
    "facilities"
  );
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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

  // Events data
  const events: Event[] = [
    {
      id: "ghars-nabta",
      name: {
        ar: "غرسُ نبتة",
        en: "Planting a Seed",
      },
      description: {
        ar: "فعالية تعليمية ممتعة حيث يشارك الأطفال في زراعة النباتات وتعلم أهمية العناية بالطبيعة",
        en: "An educational activity where children participate in planting and learn the importance of caring for nature",
      },
      thumbnail: "/images/غرسُ نبتة/١١١.jpeg",
      images: [
        "/images/غرسُ نبتة/١١١.jpeg",
        "/images/غرسُ نبتة/٢٢٢.jpeg",
        "/images/غرسُ نبتة/WhatsApp Image 2025-12-25 at 11.39.47 (1).jpeg",
        "/images/غرسُ نبتة/WhatsApp Image 2025-12-25 at 11.39.47.jpeg",
        "/images/غرسُ نبتة/WhatsApp Image 2025-12-25 at 11.40.05 (1).jpeg",
        "/images/غرسُ نبتة/WhatsApp Image 2025-12-25 at 11.40.08 (2).jpeg",
        "/images/غرسُ نبتة/WhatsApp Image 2025-12-25 at 11.40.58.jpeg",
        "/images/غرسُ نبتة/WhatsApp Image 2025-12-25 at 11.41.06.jpeg",
        "/images/غرسُ نبتة/WhatsApp Image 2025-12-25 at 11.41.20.jpeg",
        "/images/غرسُ نبتة/WhatsApp Image 2025-12-25 at 11.41.36 (1).jpeg",
        "/images/غرسُ نبتة/WhatsApp Image 2025-12-25 at 11.42.25 (2).jpeg",
        "/images/غرسُ نبتة/WhatsApp Image 2025-12-25 at 11.42.25 (3).jpeg",
        "/images/غرسُ نبتة/WhatsApp Image 2025-12-25 at 11.42.26.jpeg",
        "/images/غرسُ نبتة/WhatsApp Image 2025-12-25 at 11.42.30.jpeg",
        "/images/غرسُ نبتة/WhatsApp Image 2025-12-25 at 11.42.35.jpeg",
        "/images/غرسُ نبتة/WhatsApp Image 2025-12-25 at 11.42.44 (2).jpeg",
        "/images/غرسُ نبتة/WhatsApp Image 2025-12-25 at 11.42.51 (3).jpeg",
        "/images/غرسُ نبتة/WhatsApp Image 2025-12-25 at 11.43.09 (2).jpeg",
        "/images/غرسُ نبتة/WhatsApp Image 2025-12-25 at 11.43.36 (3).jpeg",
        "/images/غرسُ نبتة/WhatsApp Image 2025-12-25 at 11.43.46 (1).jpeg",
        "/images/غرسُ نبتة/WhatsApp Image 2025-12-25 at 11.43.49 (1).jpeg",
        "/images/غرسُ نبتة/WhatsApp Image 2025-12-25 at 11.43.49 (5).jpeg",
        "/images/غرسُ نبتة/WhatsApp Image 2025-12-25 at 12.54.38.jpeg",
      ],
    },
    {
      id: "pet-land-trip",
      name: {
        ar: "رحلة أرض الحيوانات",
        en: "Pet Land Trip",
      },
      description: {
        ar: "رحلة ممتعة ومثيرة للأطفال لاستكشاف عالم الحيوانات والتعرف على أنواع مختلفة من الحيوانات الأليفة",
        en: "An exciting and fun trip for children to explore the world of animals and learn about different types of pets",
      },
      thumbnail: "/images/Pet-Land-Trip/PetLand-Trip-01.jpg",
      images: [
        "/images/Pet-Land-Trip/PetLand-Trip-01.jpg",
        "/images/Pet-Land-Trip/PetLand-Trip-02.jpg",
        "/images/Pet-Land-Trip/PetLand-Trip-03.jpg",
        "/images/Pet-Land-Trip/PetLand-Trip-04.jpg",
        "/images/Pet-Land-Trip/PetLand-Trip-05.jpg",
        "/images/Pet-Land-Trip/PetLand-Trip-07.jpg",
        "/images/Pet-Land-Trip/PetLand-Trip-08.jpg",
      ],
    },
  ];

  const images = activeTab === "facilities" ? facilitiesImages : [];

  return (
    <div>
      {/* Hero */}
      <section className="pt-20 pb-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-light-blue/10 via-white to-pink/10 relative overflow-hidden">
        <ShapeDivider className="text-royal-blue" position="bottom" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url(/images/Facilities/21.webp)",
            // Previous Unsplash image (commented for future use):
            // "url(https://images.unsplash.com/photo-1682687221080-5cb261c645cb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          }}
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl font-bold text-white mb-2"
            >
              {current.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-white/90 mb-2"
              key={activeTab}
            >
              {activeContent.description}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-sm text-white/80 max-w-4xl mx-auto leading-relaxed"
              key={`${activeTab}-full`}
            >
              {activeContent.fullDescription}
            </motion.p>
          </div>
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

          {/* Facilities Image Grid */}
          {activeTab === "facilities" && (
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {images.map((img, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setSelectedImage(img)}
                  className="relative overflow-hidden rounded-xl cursor-pointer group aspect-video"
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
                  <Image
                    src={img}
                    alt={`facilities ${index + 1}`}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 pointer-events-none"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
            </div>
          )}

          {/* Events Cards Grid */}
          {activeTab === "events" && !selectedEvent && (
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {events.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.03 }}
                  onClick={() => setSelectedEvent(event)}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl overflow-hidden cursor-pointer relative border-2 border-transparent hover:border-light-blue/30 transition-all duration-300 group"
                >
                  {/* Decorative circles */}
                  <motion.div
                    className="absolute top-2 right-2 w-8 h-8 bg-light-blue/20 rounded-full blur-sm z-10"
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
                  <motion.div
                    className="absolute bottom-2 left-2 w-6 h-6 bg-pink/20 rounded-full blur-sm z-10"
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

                  {/* Event Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={event.thumbnail}
                      alt={event.name[language]}
                      width={400}
                      height={192}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>

                  {/* Event Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-royal-blue mb-2 group-hover:text-light-blue transition-colors">
                      {event.name[language]}
                    </h3>
                    <p className="text-royal-blue/70 text-sm line-clamp-2">
                      {event.description[language]}
                    </p>
                    <div className="mt-4 flex items-center text-light-blue text-sm font-semibold">
                      <span>
                        {language === "ar" ? "عرض الصور" : "View Photos"}
                      </span>
                      <svg
                        className="w-4 h-4 mr-2 rtl:ml-2 rtl:mr-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
        <ShapeDivider className="text-royal-blue" position="bottom" />
      </section>

      {/* Event Photos Section */}
      {activeTab === "events" && selectedEvent && (
        <section className="py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="container mx-auto max-w-7xl">
            {/* Back Button */}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={() => setSelectedEvent(null)}
              className="mb-6 flex items-center text-royal-blue hover:text-light-blue transition-colors cursor-pointer group"
            >
              <svg
                className={`w-5 h-5 ${
                  language === "ar" ? "ml-2" : "mr-2"
                } rtl:ml-0 rtl:mr-2 transform group-hover:translate-x-[-4px] rtl:group-hover:translate-x-[4px] transition-transform`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={language === "ar" ? "M9 5l7 7-7 7" : "M15 19l-7-7 7-7"}
                />
              </svg>
              <span className="font-semibold">
                {language === "ar" ? "رجوع إلى الفعاليات" : "Back to Events"}
              </span>
            </motion.button>

            {/* Event Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-10"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-royal-blue mb-3">
                {selectedEvent.name[language]}
              </h2>
              <p className="text-lg text-royal-blue/70 max-w-3xl mx-auto">
                {selectedEvent.description[language]}
              </p>
            </motion.div>

            {/* Images Grid */}
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {selectedEvent.images.map((img, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setSelectedImage(img)}
                  className="relative overflow-hidden rounded-xl cursor-pointer group aspect-square"
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
                  <Image
                    src={img}
                    alt={`${selectedEvent.name[language]} ${index + 1}`}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 pointer-events-none"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-7xl max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-pink text-4xl font-bold z-10 bg-black/70 hover:bg-black/90 rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300 cursor-pointer"
            >
              ×
            </button>
            <div className="relative">
              <Image
                src={selectedImage}
                alt="Selected image"
                width={1200}
                height={800}
                className="max-w-full max-h-[85vh] object-contain rounded-lg"
                unoptimized
              />
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3">
                <a
                  href={selectedImage}
                  download
                  className="bg-gradient-to-r from-royal-blue to-light-blue hover:from-light-blue hover:to-pink text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl flex items-center gap-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  {language === "ar" ? "حفظ الصورة" : "Save Image"}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
