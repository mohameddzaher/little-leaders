"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import Image from "next/image";
import ShapeDivider from "./ShapeDivider";
import { useState, useEffect } from "react";

const team = [
  {
    name: "رباب صالح",
    nameEn: "Rabab Saleh",
    role: "مستشارة المركز",
    roleEn: "Center Consultant",
    experience: "34 سنة",
    qualification: "كلية رياض أطفال",
    qualificationEn: "College of Early Childhood Education",
    about: "أجد نفسي فيهم في براءتهم وتفاعلهم العاطفي من دون مقابل",
    aboutEn:
      "I see myself in their innocence and their genuine emotional interactions given without expectation",
    image: "/images/team/أ.رباب بغدادي.jpg",
  },
  {
    name: "هالة غازي",
    nameEn: "Hala Ghazi",
    role: "مديرة المركز",
    roleEn: "Center Director",
    experience: "30 سنة",
    qualification: "بكالوريوس أحياء مع إعداد تربوي – كلية التربية بالطائف",
    qualificationEn:
      "Bachelor's Degree in Biology with Educational Preparation – College of Education, Taif",
    about:
      "أحب التعامل مع الاطفال لبراءتهم ولتلقائيتهم ونتيجة الجهد ملموسة فيهم بتغيير سلوكهم وألفاظهم وقيمهم ومفاهيمهم ومبادئهم",
    aboutEn:
      "I love working with children for their innocence and spontaneity. The results of effort are clearly reflected in them through the positive changes in their behavior, language, values, concepts and principles",
    image: "/images/team/أ.هالة المغربي.jpg",
  },
  {
    name: "مها فوزان",
    nameEn: "Maha Fozan",
    role: "وكيلة المركز",
    roleEn: "Center Vice Director",
    experience: "20 سنة",
    qualification: "ثانوية عامة",
    qualificationEn: "High School",
    about: "لصدق الاحساس لدى الطفل",
    aboutEn: "For the sincerity of a child's feelings",
    image: "/images/team/أ. مها بغدادي.jpg",
  },
  {
    name: "فيء بسام",
    nameEn: "Fay Bassam",
    role: "مساعد إداري",
    roleEn: "Administrative Assistant",
    experience: "سنتين",
    qualification: "بكالوريوس تسويق",
    qualificationEn: "Bachelor's Degree in Marketing",
    about:
      "في التعامل مع الأطفال بركة وسكينة كما أن براءتهم وصدق مشاعرهم تذكرني بقيم النقاء والعطاء الإنساني",
    aboutEn:
      "Working with children brings a sense of blessing and tranquility their innocence and genuine emotions remind me of the values of purity and human generosity",
    image: "/images/team/أ. فيء بسام.jpg",
  },
  {
    name: "مها دعال",
    nameEn: "Maha Da'al",
    role: "معلمة",
    roleEn: "Teacher",
    experience: "5 أشهر",
    qualification: "بكالوريوس رياض أطفال مع الإعداد التربوي",
    qualificationEn:
      "Bachelor's Degree in Early Childhood Education with Educational Preparation",
    about:
      "أثق بكم وأعلم أنكم تستطيعون تحقيق أحلامكم لأجل ذلك أنا هنا دائما لأساعدكم وأساندكم",
    aboutEn:
      "I trust you and believe that you can achieve your dreams. That's why I'm always here to support and help you",
    image: null,
  },
  {
    name: "نجود هشام",
    nameEn: "Njouf Hisham",
    role: "معلمة",
    roleEn: "Teacher",
    experience: "6 سنوات",
    qualification: "بكالوريوس في التربية (صعوبات تعلم)",
    qualificationEn: "Bachelor's Degree in Education (Learning Disabilities)",
    about: "براءة الأطفال وخيالهم الواسع",
    aboutEn: "Children's innocence and their wide imagination",
    image: "/images/team/أ.نجود الغربي.jpg",
  },
  {
    name: "نوف علي",
    nameEn: "Nouf Ali",
    role: "معلمة",
    roleEn: "Teacher",
    experience: "1 شهر",
    qualification: "بكالوريوس دعوة وثقافة إسلامية",
    qualificationEn: "Bachelor's Degree in Islamic",
    about: "لبراءتهم وصدقهم",
    aboutEn: "For their innocence and honesty",
    image: "/images/team/أ.نوف الغامدي.jpg",
  },
  {
    name: "هاجر أيمن",
    nameEn: "Hajer Ayman",
    role: "معلمة",
    roleEn: "Teacher",
    experience: "ليس لديها خبرات",
    qualification: "بكالوريوس فنون جامعة الملك عبدالعزيز",
    qualificationEn: "Bachelor's Degree in Arts – King Abdulaziz University",
    about:
      "أحب أن أرى بداية إستيعابهم للأشياء حولهم وكيفية إستجابتهم للقوانين والعمل بها والإستماع لما يجول في أذهانهم البريئة والتعبير بثقة عما في داخلهم وأن أزرع فيهم الفخر من أي عمل يقوموا به",
    aboutEn:
      "I love seeing how children begin to understand the world around them how they respond to rules and follow them. I enjoy listening to their innocent thoughts watching them express themselves confidently and instilling in them a sense of pride in everything they do",
    image: null,
  },
  {
    name: "ريهام جابر",
    nameEn: "Reham Jaber",
    role: "معلمة",
    roleEn: "Teacher",
    experience: "3 سنوات و6 أشهر",
    qualification: "دبلوم محاسبة",
    qualificationEn: "Diploma in Accounting",
    about:
      "أحب التعامل مع البراءة والنقاء والصفاء لحظاتهم ضحك وصدق وتعبيرهم العفوي وحماسهم طاقة إيجابية",
    aboutEn:
      "I love interacting with purity, innocence and sincerity. Their moments of laughter, honesty, spontaneous expressions and enthusiasm radiate positive energy",
    image: null,
  },
  {
    name: "فرح بسام",
    nameEn: "Farah Bassam",
    role: "معلمة",
    roleEn: "Teacher",
    experience: "سنتين ونصف",
    qualification: "بكالوريوس طفولة مبكرة",
    qualificationEn: "Bachelor's Degree in Early Childhood Education",
    about: "في تعاملي مع الأطفال دهشتهم وحماسهم عند عند إكتشاف شئ جديد ووممتع",
    aboutEn:
      "In my interaction with children I'm always amazed by their excitement and enthusiasm when they discover something new and enjoyable",
    image: "/images/team/أ. فرح بسام.jpg",
  },
];

export default function TeamContent() {
  const { language } = useLanguage();
  const [sortedTeam, setSortedTeam] = useState(team);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) {
      const sorted = [...team].sort((a, b) => {
        if (a.role === "مديرة المركز" || a.roleEn === "Center Director")
          return -1;
        if (b.role === "مديرة المركز" || b.roleEn === "Center Director")
          return 1;
        return 0;
      });
      setSortedTeam(sorted);
    } else {
      setSortedTeam(team);
    }
  }, [isMobile]);

  const content = {
    ar: {
      title: "فريقنا",
      subtitle: "فريق محترف ومتفاني لرعاية وتعليم أطفالنا",
      intro:
        "فريقنا المتميز يجمع بين الخبرة والحماس والحب للأطفال. نحن نؤمن بأن كل طفل يستحق أفضل رعاية وتعليم، ولهذا نحرص على اختيار معلمين مؤهلين ومتفانين في عملهم.",
      qualities: {
        title: "مميزات فريقنا",
        items: [
          {
            title: "صبر وحب",
            description:
              "فريقنا يتمتع بالصبر الكبير والحب العميق للأطفال، مما يجعلهم قادرين على التعامل مع كل طفل بفهم واحترام",
            icon: "❤️",
            gradient: "from-pink to-light-blue",
          },
          {
            title: "خبرة واسعة",
            description:
              "أعضاء فريقنا لديهم سنوات طويلة من الخبرة في رعاية وتعليم الأطفال، مما يضمن جودة عالية في التعليم",
            icon: "🎓",
            gradient: "from-light-blue to-pink",
          },
          {
            title: "تفاني وإخلاص",
            description:
              "نحن نؤمن بأن التعليم ليس مجرد وظيفة، بل رسالة. فريقنا متفاني في عمله ومخلص في رعاية كل طفل",
            icon: "🌟",
            gradient: "from-pink to-royal-blue",
          },
          {
            title: "إبداع وابتكار",
            description:
              "فريقنا يستخدم أساليب إبداعية وحديثة في التعليم لجعل التعلم ممتعاً وفعالاً لكل طفل",
            icon: "✨",
            gradient: "from-royal-blue to-pink",
          },
        ],
      },
    },
    en: {
      title: "Our Team",
      subtitle:
        "A professional and dedicated team to care for and educate our children",
      intro:
        "Our distinguished team combines experience, enthusiasm, and love for children. We believe that every child deserves the best care and education, which is why we carefully select qualified and dedicated teachers.",
      qualities: {
        title: "Our Team Qualities",
        items: [
          {
            title: "Patience & Love",
            description:
              "Our team has great patience and deep love for children, enabling them to deal with each child with understanding and respect",
            icon: "❤️",
            gradient: "from-pink to-light-blue",
          },
          {
            title: "Wide Experience",
            description:
              "Our team members have many years of experience in caring for and educating children, ensuring high quality education",
            icon: "🎓",
            gradient: "from-light-blue to-pink",
          },
          {
            title: "Dedication & Commitment",
            description:
              "We believe that education is not just a job, but a mission. Our team is dedicated to their work and committed to caring for every child",
            icon: "🌟",
            gradient: "from-pink to-royal-blue",
          },
          {
            title: "Creativity & Innovation",
            description:
              "Our team uses creative and modern teaching methods to make learning fun and effective for every child",
            icon: "✨",
            gradient: "from-royal-blue to-pink",
          },
        ],
      },
    },
  };

  const current = content[language];

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
          >
            {current.subtitle}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-sm text-white/70 max-w-2xl mx-auto leading-relaxed"
          >
            {current.intro}
          </motion.p>
        </div>
      </section>

      {/* Team Qualities */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white">
        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl font-bold text-royal-blue text-center mb-8"
          >
            {current.qualities.title}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {current.qualities.items.map((quality, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.03 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                  className={`bg-gradient-to-br ${quality.gradient} rounded-2xl p-6 shadow-xl hover:shadow-2xl cursor-pointer relative overflow-hidden border-2 border-white/20`}
              >
                {/* Decorative circles */}
                <motion.div
                  className="absolute top-2 right-2 w-10 h-10 bg-white/20 rounded-full blur-md"
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
                  className="absolute bottom-2 left-2 w-8 h-8 bg-white/20 rounded-full blur-md"
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
                <div className="mb-3 relative z-10 w-12 h-12 flex items-center justify-center">
                  {quality.icon === "❤️" ? (
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                  ) : quality.icon === "🎓" ? (
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
                    </svg>
                  ) : quality.icon === "🌟" ? (
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ) : (
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  )}
                </div>
                <h3 className="text-base font-bold text-white mb-2 relative z-10">
                  {quality.title}
                </h3>
                <p className="text-white/90 text-xs leading-relaxed relative z-10">
                  {quality.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
        <ShapeDivider className="text-royal-blue" position="bottom" />
      </section>

      {/* Team Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-pink/5 via-white to-light-blue/5 relative overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sortedTeam.map((member, index) => {
              // Center the 4th and 5th items (index 3 and 4) on mobile/tablet
              const isCentered =
                (index === 3 || index === 4) && sortedTeam.length > 4;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.03 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl cursor-pointer relative ${
                    isCentered ? "md:col-start-2 lg:col-start-auto" : ""
                  }`}
                >
                  {/* Decorative circles in corners */}
                  <motion.div
                    className="absolute top-2 right-2 w-10 h-10 bg-light-blue/20 rounded-full blur-md"
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
                    className="absolute bottom-2 left-2 w-8 h-8 bg-pink/20 rounded-full blur-md"
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

                  <div className="p-5 text-center">
                    {/* Image in center */}
                    <div className="mb-4 flex justify-center">
                      {member.image ? (
                        <div className="w-32 h-56 rounded-2xl overflow-hidden">
                          <Image
                            src={member.image}
                            alt={
                              language === "ar" ? member.name : member.nameEn
                            }
                            width={128}
                            height={224}
                            className="w-full h-full object-contain object-center rounded-2xl"
                            unoptimized
                          />
                        </div>
                      ) : (
                        <div className="w-32 h-56 rounded-2xl overflow-hidden">
                          <Image
                            src="/images/default-person.webp"
                            alt={
                              language === "ar" ? member.name : member.nameEn
                            }
                            width={128}
                            height={224}
                            className="w-full h-full object-cover object-center rounded-2xl"
                            unoptimized
                          />
                        </div>
                      )}
                    </div>

                    {/* Name */}
                    <h3 className="text-lg font-bold text-royal-blue mb-1">
                      {language === "ar" ? member.name : member.nameEn}
                    </h3>

                    {/* Role */}
                    <p className="text-light-blue font-semibold text-sm mb-3">
                      {language === "ar" ? member.role : member.roleEn}
                    </p>

                    {/* Experience and Qualification */}
                    <div className="space-y-1 mb-3">
                      <p className="text-royal-blue/70 text-xs">
                        <span className="font-semibold">
                          {language === "ar" ? "الخبرة:" : "Experience:"}
                        </span>{" "}
                        {member.experience}
                      </p>
                      <p className="text-royal-blue/70 text-xs line-clamp-2">
                        <span className="font-semibold">
                          {language === "ar" ? "المؤهل:" : "Qualification:"}
                        </span>{" "}
                        {language === "ar"
                          ? member.qualification
                          : member.qualificationEn}
                      </p>
                    </div>

                    {/* About */}
                    <div className="border-t border-gray-200 pt-3 mt-3">
                      <p className="text-royal-blue/80 text-xs italic leading-relaxed line-clamp-3">
                        "{language === "ar" ? member.about : member.aboutEn}"
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
        <ShapeDivider className="text-royal-blue" position="bottom" />
      </section>
    </div>
  );
}
