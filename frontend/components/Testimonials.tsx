"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Testimonials() {
  const { language } = useLanguage();

  const testimonials = {
    ar: [
      {
        name: "العنود العتيبي",
        text: '"قمنا مؤخرًا بزيارة مركز ليتل ليدرز وشعرنا على الفور أنه المكان المناسب لطفلنا. البيئة دافئة ونظيفة ومليئة بالطاقة الإيجابية."',
      },
      {
        name: "فهد الزهراني",
        text: '"أفضل قرار اتخذناه هو تسجيل أطفالنا في ليتل ليدرز. البرامج التعليمية ممتازة والاهتمام بالطفل واضح."',
      },
      {
        name: "نورة الغامدي",
        text: '"المركز يوفر بيئة تعليمية محفزة وممتعة. طفلي تطور كثيراً منذ التحاقه بالمركز."',
      },
      {
        name: "ليان الحربي",
        text: '"كل ما رأيته يعكس درجة عالية من التنظيم والاهتمام من ترتيب الفصول الدراسية إلى طريقة التواصل مع أولياء الأمور انطلاقة واعدة توحي بالتفاؤل"',
      },
      {
        name: "N.78",
        text: '"فعلا مكان جميل ورائع تعامل في قمه الآخلاق المكان يستاهل نحط اطفالنا فيه الله يسعدكم يارب"',
      },
      {
        name: "Aso",
        text: '"ماشاء الله تبارك الرحمن مبدعين والمكان يشرح الصدر"',
      },
    ],
    en: [
      {
        name: "Al-Anoud Al-Otaibi",
        text: '"We recently visited Little Leaders Center and immediately felt it was the right place for our child. The environment is warm, clean and full of positive energy."',
      },
      {
        name: "Fahd Al-Zahrani",
        text: '"The best decision we made was enrolling our children in Little Leaders. The educational programs are excellent and the attention to the child is clear."',
      },
      {
        name: "Noura Al-Ghamdi",
        text: '"The center provides a stimulating and enjoyable educational environment. My child has developed a lot since joining the center."',
      },
      {
        name: "Layan Al-Harbi",
        text: '"Everything I saw reflects a high degree of organization and attention, from the arrangement of classrooms to the way of communicating with parents. A promising start that inspires optimism."',
      },
      {
        name: "N.78",
        text: '"Truly a beautiful and wonderful place. The treatment is at the highest level of ethics. This place deserves us to enroll our children here. May God bless you."',
      },
      {
        name: "Aso",
        text: '"God willing, blessed be the Most Merciful. You are creative and the place is heartwarming and delightful."',
      },
    ],
  };

  const current = testimonials[language];
  const title =
    language === "ar"
      ? "رحلتهم معنا بكلماتهم"
      : "Their Journey with Us in Their Words";

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-pink/5 via-white to-light-blue/5 relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://plus.unsplash.com/premium_photo-1683121754430-9bfd2657054e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMyfHx8ZW58MHx8fHx8",
        }}
      />
      <div className="absolute inset-0 bg-black/10" />
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-royal-blue mb-3">
            {title}
          </h2>
        </motion.div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
            el: ".testimonials-pagination",
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
          }}
          className="mb-4 "
        >
          {current.map((testimonial, index) => (
            <SwiperSlide key={index} className="h-auto pb-5">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-5 shadow-lg h-full flex flex-col relative overflow-hidden min-h-[150px] "
              >
                {/* Decorative circles */}
                <motion.div
                  className="absolute top-2 right-2 w-8 h-8 bg-light-blue/20 rounded-full blur-md"
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
                  className="absolute bottom-2 left-2 w-6 h-6 bg-pink/20 rounded-full blur-md"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                />
                <div className="p-4 flex flex-col flex-1">
                  <div className="mb-3 relative z-10">
                    <div className="font-bold text-royal-blue text-sm mb-1">
                      {testimonial.name}
                    </div>
                  </div>
                  <p className="text-royal-blue/80 text-sm leading-relaxed flex-1 relative z-10 line-clamp-3">
                    {testimonial.text}
                  </p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination below cards */}
        <div className="testimonials-pagination flex justify-center gap-2 mt-4"></div>
      </div>
    </section>
  );
}
