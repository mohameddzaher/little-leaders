"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function TeamPreview() {
  const { language } = useLanguage();

  const teamMembers = [
    {
      name: "هالة غازي المغربي",
      nameEn: "Hala Ghazi",
      role: "مديرة المركز",
      roleEn: "Center Director",
      experience: "30 سنة",
      experienceEn: "30 years",
      qualification:
        "بكالوريوس في الأحياء مع إعداد تربوي - كلية التربية بالطائف (جامعة أم القرى)",
      qualificationEn:
        "Bachelor's Degree in Biology with Educational Preparation – College of Education, Taif",
      about:
        "أحب العمل مع الأطفال لما يحملونه من براءة وعفوية صادقة، فكل يوم معهم هو تجربة مليئة بالحب والتجدد",
      aboutEn:
        "I love working with children for their innocence and spontaneity. The results of effort are clearly reflected in them through the positive changes in their behavior, language, values, concepts and principles",
      image: "/images/team/أ.هالة المغربي.jpg",
    },
    {
      name: "رباب صالح بغدادي",
      nameEn: "Rabab Saleh",
      role: "المشرف العام",
      roleEn: "Center Consultant",
      experience: "34 سنة",
      experienceEn: "34 years",
      qualification: "كلية التربية للطفولة المبكرة",
      qualificationEn: "College of Early Childhood Education",
      about:
        "أرى نفسي في براءتهم وتلقائيتهم وفي تفاعلاتهم العاطفية الصادقة التي تأتي دون تكلف أو توقع",
      aboutEn:
        "I see myself in their innocence and their genuine emotional interactions given without expectation",
      image: "/images/team/أ.رباب بغدادي.jpg",
    },
    {
      name: "مها فوزان",
      nameEn: "Maha Fozan",
      role: "وكيلة المركز",
      roleEn: "Center Vice Director",
      experience: "20 سنة",
      experienceEn: "20 years",
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
      experienceEn: "2 years",
      qualification: "بكالوريوس تسويق",
      qualificationEn: "Bachelor's Degree in Marketing",
      about:
        "في التعامل مع الأطفال بركة وسكينة كما أن براءتهم وصدق مشاعرهم تذكرني بقيم النقاء والعطاء الإنساني",
      aboutEn:
        "Working with children brings a sense of blessing and tranquility their innocence and genuine emotions remind me of the values of purity and human generosity",
      image: "/images/team/أ. فيء بسام.jpg",
    },
    {
      name: "فرح بسام",
      nameEn: "Farah Bassam",
      role: "معلمة",
      roleEn: "Teacher",
      experience: "2.5 سنة",
      experienceEn: "2.5 years",
      qualification: "بكالوريوس في تعليم الطفولة المبكرة",
      qualificationEn: "Bachelor's Degree in Early Childhood Education",
      about:
        "في تعاملي مع الأطفال، أندهش دائمًا من حماسهم وإثارتهم عندما يكتشفون شيئًا جديدًا وممتعًا",
      aboutEn:
        "In my interaction with children I'm always amazed by their excitement and enthusiasm when they discover something new and enjoyable",
      image: "/images/team/أ. فرح بسام.jpg",
    },
    {
      name: "مها دعال",
      nameEn: "Maha Da'al",
      role: "معلمة",
      roleEn: "Teacher",
      experience: "5 أشهر",
      experienceEn: "5 months",
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
      experienceEn: "6 years",
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
      experienceEn: "1 month",
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
      experienceEn: "No experience",
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
      experience: "3.5 سنة",
      experienceEn: "3.5 years",
      qualification: "دبلوم محاسبة",
      qualificationEn: "Diploma in Accounting",
      about:
        "أحب التعامل مع البراءة والنقاء والصفاء لحظاتهم ضحك وصدق وتعبيرهم العفوي وحماسهم طاقة إيجابية",
      aboutEn:
        "I love interacting with purity, innocence and sincerity. Their moments of laughter, honesty, spontaneous expressions and enthusiasm radiate positive energy",
      image: null,
    },
  ];

  const content = {
    ar: {
      title: "فريقنا المؤهل والكفء",
      subtitle: "رحلة التعلّم معنا",
      description:
        "فريقنا المؤهل والكفء هو قلب مركزنا النابض بخبرة تمتد لأكثر من 30 عامًا حيث نضع سلامة الأطفال ونموهم في المقام الأول جميع معلماتنا مدربات على الإسعافات الأولية ويتبعن أحدث أساليب التعليم المبكر لضمان تجربة تعليمية آمنة وملهمة لكل طفل",
      viewAll: "عرض الفريق الكامل",
    },
    en: {
      title: "Our Qualified and Experienced Team",
      subtitle: "The Learning Journey with Us",
      description:
        "Our qualified and experienced team is the beating heart of our center with over 30 years of experience. We put children's safety and growth first. All our teachers are trained in first aid and follow the latest early education methods to ensure a safe and inspiring educational experience for every child",
      viewAll: "View Full Team",
    },
  };

  const current = content[language];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1510146758428-e5e4b17b8b6a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRlYW18ZW58MHx8MHx8fDA%3D",
        }}
      />
      <div className="absolute inset-0 bg-black/5" />
      <div className="container mx-auto max-w-7xl relative z-10">
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
          <p className="text-base text-royal-blue/70 max-w-3xl mx-auto mb-6">
            {current.description}
          </p>
        </motion.div>

        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={20}
          slidesPerView={2}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={true}
          speed={800}
          effect="slide"
          breakpoints={{
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
          className="mb-6"
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index} className="h-auto pb-10">
              <motion.div
                whileHover={{ y: -8, scale: 1.03 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl cursor-pointer relative h-full flex flex-col min-h-[320px]"
              >
                {/* Decorative circles in corners */}
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

                <div className="relative h-36 overflow-hidden ">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={language === "ar" ? member.name : member.nameEn}
                      fill
                      className="object-contain object-center"
                      unoptimized
                    />
                  ) : (
                    <Image
                      src="/images/dafault-person.webp"
                      alt={language === "ar" ? member.name : member.nameEn}
                      fill
                      className="object-cover object-center"
                      unoptimized
                    />
                  )}
                </div>
                <div className="p-3 flex flex-col flex-1">
                  <h3 className="text-xs font-bold text-royal-blue mb-1 text-center line-clamp-1">
                    {language === "ar" ? member.name : member.nameEn}
                  </h3>
                  <p className="text-light-blue font-semibold text-[10px] mb-1.5 text-center line-clamp-1">
                    {language === "ar" ? member.role : member.roleEn}
                  </p>
                  <div className="space-y-0.5 mb-1.5">
                    <p className="text-royal-blue/70 text-[10px] text-center">
                      <span className="font-semibold">
                        {language === "ar" ? "الخبرة:" : "Experience:"}
                      </span>{" "}
                      {language === "ar" ? member.experience : (member.experienceEn || member.experience)}
                    </p>
                    <p className="text-royal-blue/70 text-[10px] text-center line-clamp-1">
                      <span className="font-semibold">
                        {language === "ar" ? "المؤهل:" : "Qualification:"}
                      </span>{" "}
                      {language === "ar"
                        ? member.qualification
                        : member.qualificationEn}
                    </p>
                  </div>
                  <div className="border-t border-gray-200 pt-1.5 mt-auto">
                    <p className="text-royal-blue/80 text-[10px] italic leading-relaxed line-clamp-2 text-center">
                      "{language === "ar" ? member.about : member.aboutEn}"
                    </p>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="text-center">
          <Link
            href="/team"
            className="inline-block px-6 py-3 bg-gradient-to-r from-royal-blue to-light-blue text-white rounded-full font-semibold hover:from-light-blue hover:to-pink transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer text-sm"
          >
            {current.viewAll}
          </Link>
        </div>
      </div>
    </section>
  );
}
