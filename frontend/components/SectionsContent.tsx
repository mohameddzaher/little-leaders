"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import ShapeDivider from "./ShapeDivider";
import Link from "next/link";
import Image from "next/image";

export default function SectionsContent() {
  const { language } = useLanguage();

  const content = {
    ar: {
      hero: {
        title: "أقسام المركز",
        subtitle: "مركزنا البداية الحقيقية لرحلة قائدٍ صغير نحو التميّز",
      },
      sections: {
        title: "أقسام المركز",
        earlyChildhood: {
          title: "مرحلة الطفولة المبكرة",
          ages: ["عمر الثلاث سنوات", "عمر الأربع سنوات", "عمر الخمس سنوات"],
        },
        care: {
          title: "مرحلة الرعاية",
          ages: [
            "فئة عمرية للأطفال من عمر ثلاث أشهر حتى سنة",
            "فئة عمرية للأطفال من عمر سنة إلى سنتين",
          ],
        },
        afterSchool: {
          title: "بعد المدرسة",
          ages: ["من 3 أشهر إلى 10 سنوات"],
        },
      },
      adminTeam: {
        title: "طاقم الإدارة",
        description:
          "يحرص الفريق الإداري في مركز ليتل ليدرز على توفير بيئة منظمة وداعمة مليئة بالترحيب والاهتمام لضمان أن تكون رحلة تعلم كل طفل سلسة وملهمة",
        subtitle: "دعونا نلتقي بهم",
        roles: [
          "مديرة المركز",
          "المشرفات الإداريات",
          "المساعدات الإداريات",
          "المعلمات",
          "العاملات",
        ],
      },
      pricing: {
        title: "الأسعار",
        care8: {
          title: "مرحلة الرعاية",
          description: "من 3 شهور إلى سنتين لمدة 8 ساعات يوميا 26 يوم بالشهر",
          day: "اليوم",
          month: "الشهر",
          threeMonths: "ثلاثة أشهر",
          sixMonths: "ستة أشهر",
          year: "السنة",
          prices: {
            day: "250",
            month: "3,200",
            threeMonths: "8,000",
            sixMonths: "14,000",
            year: "26,000",
          },
        },
        care10: {
          title: "مرحلة الرعاية",
          description: "من 3 شهور إلى سنتين لمدة 10 ساعات يوميا 26 يوم بالشهر",
          prices: {
            day: "300",
            month: "4,000",
            threeMonths: "9,500",
            sixMonths: "17,000",
            year: "32,500",
          },
        },
        early8: {
          title: "مرحلة الطفولة المبكرة",
          description:
            "من 3 سنوات إلى 5 سنوات لمدة 8 ساعات يوميا 26 يوم بالشهر",
          prices: {
            day: "250",
            month: "3,000",
            threeMonths: "7,500",
            sixMonths: "13,000",
            year: "24,000",
          },
        },
        early10: {
          title: "مرحلة الطفولة المبكرة",
          description:
            "من 3 سنوات إلى 5 سنوات لمدة 10 ساعات يوميا 26 يوم بالشهر",
          prices: {
            day: "300",
            month: "3,750",
            threeMonths: "9,370",
            sixMonths: "16,250",
            year: "30,000",
          },
        },
        currency: "",
      },
      whyChoose: {
        title: "لماذا تختارنا",
        text: "لأننا نؤمن أن القيادة تبدأ من الطفولة لذلك نهيّئ كل الظروف لبناء شخصية قيادية مستقلة وملهمة تتمتع بالقيم والأخلاق من خلال رعاية وتعليم متميز",
      },
      schedule: {
        title: "الأيام والأوقات",
        days: "من الأحد إلى الخميس",
        period1: {
          title: "الدوام الرسمي",
          time: "من 7 صباحًا إلى 3 مساءً",
          age: "(3 شهور إلى 5 سنوات)",
          note: "برامج خاصة",
        },
        period2: {
          title: "النشاط الإضافي",
          time: "من 3 مساءً إلى 5 مساءً",
          age: "(3 شهور إلى 10 سنوات)",
          note: "أنشطة ترفيهية للمسجلين والغير مسجلين",
        },
      },
      registration: {
        title: "مسار التسجيل",
        subtitle: "خطوات صغيرة… بدايات عظيمة!",
        text: "ابدأ اليوم رحلة نمو وقيادة طفلك مع مركز ليتل ليدرز حيث يتعلم ويكتشف ويتألق بثقة كل يوم",
        applyNow: "سجل الان",
        contactUs: "اتصل بنا",
        formLink:
          "https://docs.google.com/forms/d/e/1FAIpQLSfUM8e1EdrMLgeuH5mEtwuX4FdU97PQj8WDiNY46ig3qa745w/viewform?usp=send_form",
      },
      benefits: {
        title: "الفوائد المكتسبة",
        items: [
          "اكتساب توازن بين القيم الأخلاقية والمهارات المعرفية في بيئة راقية.",
          "تطور مبكر في مهارات القيادة والتفكير الإبداعي لدى الطفل.",
          "اكتساب مهارات حياتية تؤهله ليكون مؤثرًا في محيطه منذ سن مبكرة.",
          "قدرة الطفل على التعبير عن أفكاره وإبداعه دون خوف أو تردد.",
        ],
      },
      tips: {
        title: "نصائح لمساعدة طفلك على اجتياز يومه الأول في المركز بسعادة",
        link: "/tips",
      },
    },
    en: {
      hero: {
        title: "Center Sections",
        subtitle:
          "Our Center Marks the True Start of a Young Leader's Path to Success",
      },
      sections: {
        title: "Center Departments",
        earlyChildhood: {
          title: "Early Childhood Stage",
          ages: [
            "The age of three years",
            "The age of four years",
            "The age of five years",
          ],
        },
        care: {
          title: "Caring Stage",
          ages: [
            "Children aged 3 months to 12 months",
            "Children aged 12 to 24 months",
          ],
        },
        afterSchool: {
          title: "After School",
          ages: ["From 3 months to 10 years"],
        },
      },
      adminTeam: {
        title: "Administrative Staff",
        description:
          "The administrative team at Little Leaders Center ensures a supportive, organized and welcoming environment. Making every child's learning journey smooth and inspiring",
        subtitle: "Let's Meet Them!",
        roles: [
          "Center Director",
          "Administrative Supervisors",
          "Administrative Assistants",
          "Teachers",
          "Staff",
        ],
      },
      pricing: {
        title: "Pricing",
        care8: {
          title: "Care Stage",
          description:
            "From 3 months to 2 years for 8 hours daily, 26 days per month",
          day: "Day",
          month: "Month",
          threeMonths: "3 Months",
          sixMonths: "6 Months",
          year: "Year",
          prices: {
            day: "250",
            month: "3,200",
            threeMonths: "8,000",
            sixMonths: "14,000",
            year: "26,000",
          },
        },
        care10: {
          title: "Care Stage",
          description:
            "From 3 months to 2 years for 10 hours daily, 26 days per month",
          day: "Day",
          month: "Month",
          threeMonths: "3 Months",
          sixMonths: "6 Months",
          year: "Year",
          prices: {
            day: "300",
            month: "4,000",
            threeMonths: "9,500",
            sixMonths: "17,000",
            year: "32,500",
          },
        },
        early8: {
          title: "Early Childhood Stage",
          description:
            "From 3 years to 5 years for 8 hours daily, 26 days per month",
          day: "Day",
          month: "Month",
          threeMonths: "3 Months",
          sixMonths: "6 Months",
          year: "Year",
          prices: {
            day: "250",
            month: "3,000",
            threeMonths: "7,500",
            sixMonths: "13,000",
            year: "24,000",
          },
        },
        early10: {
          title: "Early Childhood Stage",
          description:
            "From 3 years to 5 years for 10 hours daily, 26 days per month",
          day: "Day",
          month: "Month",
          threeMonths: "3 Months",
          sixMonths: "6 Months",
          year: "Year",
          prices: {
            day: "300",
            month: "3,750",
            threeMonths: "9,370",
            sixMonths: "16,250",
            year: "30,000",
          },
        },
        currency: "",
      },
      whyChoose: {
        title: "Why Choose Us",
        text: "Because we believe leadership begins in childhood, we create all the right conditions to build an independent and inspiring leadership personality, grounded in values and ethics, through exceptional care and education.",
      },
      schedule: {
        title: "Days and Times",
        days: "From Sunday - Thursday",
        period1: {
          title: "First Period",
          time: "From 7 AM – 3 PM",
          age: "(3 months to 5 years)",
          note: "Special Programs",
        },
        period2: {
          title: "Second Period",
          time: "From 3 PM – 5 PM",
          age: "(3 months to 10 years)",
          note: "Entertainment activities for registered and non-registered children",
        },
      },
      registration: {
        title: "Registration Path",
        subtitle: "Simple steps, great beginnings!",
        text: "Start today your child's journey of growth and leadership with Little Leaders Center where they learn, discover and shine with confidence every day",
        applyNow: "Register Now",
        contactUs: "Contact Us",
        formLink: "https://forms.gle/eUBmYhnJ98BVMzJf9",
      },
      benefits: {
        title: "Gained Benefits",
        items: [
          "Achieving a balance between ethical values and cognitive skills in a refined environment.",
          "Early development of leadership skills and creative thinking in the child.",
          "Acquiring life skills that enable the child to make a positive impact in their surroundings from an early age.",
          "The child's ability to express their ideas and creativity confidently, without fear or hesitation.",
        ],
      },
      tips: {
        title: "Tips to Help Your Child Enjoy Their First Day at the Center",
        link: "/tips",
      },
    },
  };

  const current = content[language];

  const pricingTables = [
    { ...current.pricing.care8, hours: 8, type: "care" },
    { ...current.pricing.care10, hours: 10, type: "care" },
    { ...current.pricing.early8, hours: 8, type: "early" },
    { ...current.pricing.early10, hours: 10, type: "early" },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="pt-20 pb-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-light-blue/10 via-white to-pink/10 relative overflow-hidden">
        <ShapeDivider className="text-royal-blue" position="bottom" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url(/images/Facilities/18.webp)",
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
              className="text-2xl sm:text-3xl font-bold text-white mb-2"
            >
              {current.hero.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-white/90 mb-2"
            >
              {current.hero.subtitle}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-sm text-white/80 max-w-4xl mx-auto leading-relaxed"
            >
              {language === "ar"
                ? "نقدم برامج تعليمية متميزة مصممة خصيصاً لتلبية احتياجات كل مرحلة عمرية، مع التركيز على تطوير المهارات المعرفية والاجتماعية والعاطفية في بيئة آمنة ومحفزة"
                : "We offer distinguished educational programs specifically designed to meet the needs of each age group, focusing on developing cognitive, social and emotional skills in a safe and stimulating environment"}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Sections */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white">
        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl font-bold text-royal-blue text-center mb-4"
          >
            {current.sections.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-royal-blue/70 text-base text-center mb-8 max-w-3xl mx-auto"
          >
            {language === "ar"
              ? "نقدم ثلاثة أقسام رئيسية مصممة خصيصاً لتلبية احتياجات كل مرحلة عمرية، مع التركيز على تطوير المهارات المعرفية والاجتماعية والعاطفية في بيئة آمنة ومحفزة"
              : "We offer three main sections specifically designed to meet the needs of each age group, focusing on developing cognitive, social and emotional skills in a safe and stimulating environment"}
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.03 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-gradient-to-br from-pink to-light-blue rounded-2xl p-6 shadow-lg hover:shadow-xl cursor-pointer relative overflow-hidden"
            >
              {/* Decorative circles */}
              <motion.div
                className="absolute top-2 right-2 w-12 h-12 bg-white/20 rounded-full blur-md"
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
                className="absolute bottom-2 left-2 w-10 h-10 bg-white/20 rounded-full blur-md"
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
              <div className="relative z-10">
                <div className="mb-4 relative h-32 rounded-xl overflow-hidden">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1661546660879-98fdb88d4a4e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8"
                    alt={current.sections.earlyChildhood.title}
                    className="w-full h-full object-cover"
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-pink/30 to-transparent"
                    animate={{
                      opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </div>
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-5">
                  <h3 className="text-center text-lg font-bold text-royal-blue mb-3">
                    {current.sections.earlyChildhood.title}
                  </h3>
                  <ul className="space-y-2">
                    {current.sections.earlyChildhood.ages.map((age, i) => (
                      <li key={i} className="text-royal-blue/70 text-sm">
                        • {age}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.03 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="bg-gradient-to-br from-light-blue to-pink rounded-2xl p-6 shadow-lg hover:shadow-xl cursor-pointer relative overflow-hidden"
            >
              {/* Decorative circles */}
              <motion.div
                className="absolute top-2 right-2 w-12 h-12 bg-white/20 rounded-full blur-md"
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
                className="absolute bottom-2 left-2 w-10 h-10 bg-white/20 rounded-full blur-md"
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
              <div className="relative z-10">
                <div className="mb-4 relative h-32 rounded-xl overflow-hidden">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1683133407737-33452a1ad02b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
                    alt={current.sections.care.title}
                    className="w-full h-full object-cover"
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-light-blue/30 to-transparent"
                    animate={{
                      opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </div>
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-5">
                  <h3 className="text-center text-lg font-bold text-royal-blue mb-3">
                    {current.sections.care.title}
                  </h3>
                  <ul className="space-y-2">
                    {current.sections.care.ages.map((age, i) => (
                      <li key={i} className="text-royal-blue/70 text-sm">
                        • {age}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.03 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="bg-gradient-to-br from-pink to-royal-blue rounded-2xl p-6 shadow-lg hover:shadow-xl cursor-pointer relative overflow-hidden"
            >
              {/* Decorative circles */}
              <motion.div
                className="absolute top-2 right-2 w-12 h-12 bg-white/20 rounded-full blur-md"
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
                className="absolute bottom-2 left-2 w-10 h-10 bg-white/20 rounded-full blur-md"
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
              <div className="relative z-10">
                <div className="mb-4 relative h-32 rounded-xl overflow-hidden">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1750373196335-edbcd6d7473c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D"
                    alt={current.sections.afterSchool.title}
                    className="w-full h-full object-cover"
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-pink/30 to-transparent"
                    animate={{
                      opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </div>
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-5">
                  <h3 className="text-center text-lg font-bold text-royal-blue mb-3">
                    {current.sections.afterSchool.title}
                  </h3>
                  <ul className="space-y-2">
                    {current.sections.afterSchool.ages.map((age, i) => (
                      <li key={i} className="text-royal-blue/70 text-sm">
                        • {age}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <ShapeDivider className="text-royal-blue" position="bottom" />
      </section>

      {/* Registration Path */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: language === "ar" ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-royal-blue mb-4">
                {current.registration.title}
              </h2>
              <p className="text-lg text-royal-blue/80 mb-3">
                {current.registration.subtitle}
              </p>
              <p className="text-royal-blue/70 text-base mb-6 leading-relaxed">
                {current.registration.text}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={current.registration.formLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gradient-to-r from-royal-blue to-light-blue text-white rounded-full font-semibold hover:from-light-blue hover:to-pink transition-all duration-300 shadow-lg hover:shadow-xl text-center cursor-pointer"
                >
                  {current.registration.applyNow}
                </a>
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-white text-royal-blue border-2 border-royal-blue rounded-full font-semibold hover:bg-royal-blue hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl text-center cursor-pointer"
                >
                  {current.registration.contactUs}
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: language === "ar" ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[16/9]">
                <Image
                  src="/images/Facilities/1-3.webp"
                  alt={current.registration.title}
                  width={1200}
                  height={675}
                  className="w-full h-full object-cover"
                  unoptimized
                />
                {/* Decorative circles */}
                <motion.div
                  className="absolute -top-6 -right-6 w-24 h-24 bg-light-blue/30 rounded-full blur-2xl"
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
                  className="absolute -bottom-6 -left-6 w-32 h-32 bg-pink/30 rounded-full blur-2xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
        <ShapeDivider className="text-royal-blue" position="bottom" />
      </section>

      {/* Pricing Tables */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl font-bold text-royal-blue text-center mb-4"
          >
            {language === "ar"
              ? "استثمر في نمو طفلك"
              : "Invest in Your Child's Growth"}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-royal-blue/70 text-base text-center mb-8 max-w-3xl mx-auto"
          >
            {language === "ar"
              ? "اختر الباقة المناسبة لطفلك من بين برامجنا المتميزة"
              : "Choose the right package for your child from our distinguished programs"}
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pricingTables.map((table, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-gradient-to-br from-white via-light-blue/5 to-pink/5 rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden relative border-2 border-light-blue/20 transition-all duration-300"
              >
                {/* Decorative circles */}
                <motion.div
                  className="absolute top-4 right-4 w-16 h-16 bg-light-blue/10 rounded-full blur-xl"
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
                  className="absolute bottom-4 left-4 w-12 h-12 bg-pink/10 rounded-full blur-xl"
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

                {/* Header with gradient badge */}
                <div className="p-6 pb-4 relative z-10">
                  <div
                    className={`${
                      table.type === "early"
                        ? "bg-gradient-to-r from-pink to-pink/80"
                        : "bg-gradient-to-r from-royal-blue to-light-blue"
                    } text-white px-4 py-2 rounded-full inline-block mb-3`}
                  >
                    <span className="text-sm font-bold">
                      {table.hours}{" "}
                      {language === "ar" ? "ساعات يومياً" : "Hours Daily"}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-royal-blue mb-2">
                    {table.title}
                  </h3>
                  {"description" in table && table.description && (
                    <p className="text-royal-blue/70 text-sm leading-relaxed">
                      {table.description}
                    </p>
                  )}
                </div>

                {/* Package options as styled badges */}
                <div className="px-6 pb-6 relative z-10">
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-5 space-y-3">
                    <h4 className="text-royal-blue font-bold text-center mb-3 text-base">
                      {language === "ar"
                        ? "الباقات المتاحة"
                        : "Available Packages"}
                    </h4>
                    <div className="flex flex-wrap gap-2 justify-center">
                      <span className="px-4 py-2 bg-gradient-to-br from-royal-blue/10 to-light-blue/10 border border-royal-blue/20 rounded-full text-royal-blue font-semibold text-sm">
                        {("day" in table ? table.day : null) ||
                          (language === "ar" ? "اليوم" : "Day")}
                      </span>
                      <span className="px-4 py-2 bg-gradient-to-br from-royal-blue/10 to-light-blue/10 border border-royal-blue/20 rounded-full text-royal-blue font-semibold text-sm">
                        {("month" in table ? table.month : null) ||
                          (language === "ar" ? "الشهر" : "Month")}
                      </span>
                      <span className="px-4 py-2 bg-gradient-to-br from-royal-blue/10 to-light-blue/10 border border-royal-blue/20 rounded-full text-royal-blue font-semibold text-sm">
                        {("threeMonths" in table ? table.threeMonths : null) ||
                          (language === "ar" ? "ثلاثة أشهر" : "3 Months")}
                      </span>
                      <span className="px-4 py-2 bg-gradient-to-br from-royal-blue/10 to-light-blue/10 border border-royal-blue/20 rounded-full text-royal-blue font-semibold text-sm">
                        {("sixMonths" in table ? table.sixMonths : null) ||
                          (language === "ar" ? "ستة أشهر" : "6 Months")}
                      </span>
                      <span className="px-4 py-2 bg-gradient-to-br from-royal-blue/10 to-light-blue/10 border border-royal-blue/20 rounded-full text-royal-blue font-semibold text-sm">
                        {("year" in table ? table.year : null) ||
                          (language === "ar" ? "السنة" : "Year")}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <ShapeDivider className="text-royal-blue" position="bottom" />
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 md:p-12 shadow-lg text-center relative overflow-hidden"
          >
            {/* Decorative circles */}
            <motion.div
              className="absolute top-4 right-4 w-12 h-12 bg-royal-blue/10 rounded-full blur-lg"
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
              className="absolute bottom-4 left-4 w-10 h-10 bg-light-blue/10 rounded-full blur-lg"
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
            <h2 className="text-xl sm:text-2xl font-bold text-royal-blue mb-4">
              {current.whyChoose.title}
            </h2>
            <p className="text-base text-royal-blue/70 leading-relaxed">
              {current.whyChoose.text}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-pink/5 via-white to-light-blue/5 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://plus.unsplash.com/premium_photo-1682088554871-ad9c2c100c81?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI1fHx8ZW58MHx8fHx8)",
          }}
        />
        <div className="absolute inset-0 bg-black/15" />
        <div className="container mx-auto max-w-4xl relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl font-bold text-royal-blue text-center mb-8"
          >
            {current.schedule.title}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: language === "ar" ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-6 shadow-lg relative overflow-hidden"
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
              <h3 className="text-lg font-bold text-royal-blue mb-3">
                {current.schedule.period1.title}
              </h3>
              <p className="text-light-blue font-semibold mb-2">
                {current.schedule.period1.time}
              </p>
              <p className="text-royal-blue/70 text-sm mb-2">
                {current.schedule.period1.age}
              </p>
              <p className="text-pink font-medium text-sm">
                {current.schedule.period1.note}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: language === "ar" ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-6 shadow-lg relative overflow-hidden"
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
              <h3 className="text-lg font-bold text-royal-blue mb-3">
                {current.schedule.period2.title}
              </h3>
              <p className="text-light-blue font-semibold mb-2">
                {current.schedule.period2.time}
              </p>
              <p className="text-royal-blue/70 text-sm mb-2">
                {current.schedule.period2.age}
              </p>
              <p className="text-pink font-medium text-sm">
                {current.schedule.period2.note}
              </p>
            </motion.div>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-6 font-medium relative z-10"
          >
            <span className="inline-block px-6 py-3 bg-gradient-to-r from-royal-blue via-light-blue to-pink text-white rounded-full shadow-lg">
              {current.schedule.days}
            </span>
          </motion.p>
        </div>
        <ShapeDivider className="text-royal-blue" position="bottom" />
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, x: language === "ar" ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://plus.unsplash.com/premium_photo-1754337887805-bb4241dc9b35?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8"
                  alt={current.benefits.title}
                  className="w-full h-96 object-cover"
                />
                {/* Decorative circles */}
                <motion.div
                  className="absolute -top-8 -right-8 w-32 h-32 bg-light-blue/30 rounded-full blur-2xl"
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
                  className="absolute -bottom-8 -left-8 w-40 h-40 bg-pink/30 rounded-full blur-2xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                />
              </div>
            </motion.div>

            {/* Content Side */}
            <motion.div
              initial={{ opacity: 0, x: language === "ar" ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-royal-blue mb-6">
                {current.benefits.title}
              </h2>
              <div className="space-y-4">
                {current.benefits.items.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-light-blue/10 to-pink/10 rounded-xl p-4 relative overflow-hidden"
                  >
                    {/* Decorative circles */}
                    <motion.div
                      className="absolute top-2 right-2 w-6 h-6 bg-light-blue/20 rounded-full blur-md"
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
                    <div className="flex items-start space-x-3 rtl:space-x-reverse relative z-10">
                      <span className="text-light-blue text-xl font-bold mt-1">
                        ✓
                      </span>
                      <p className="text-royal-blue/70 text-base leading-relaxed flex-1">
                        {benefit}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
