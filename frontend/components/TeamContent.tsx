"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import Image from "next/image";
import ShapeDivider from "./ShapeDivider";

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
    about:
      "أحب في الأطفال براءتهم وخيالهم الواسع الذي يفتح آفاقاً لا حدود لها للإبداع والاكتشاف",
    aboutEn:
      "I love children's innocence and their wide imagination, which opens limitless horizons for creativity and discovery",
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
    about:
      "أحب العمل مع الأطفال لبراءتهم وصدقهم في التعبير عن مشاعرهم وأفكارهم",
    aboutEn:
      "I love working with children for their innocence and honesty in expressing their feelings and thoughts",
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

  const content = {
    ar: {
      title: "فريقنا",
      subtitle: "فريق محترف ومتفاني لرعاية وتعليم أطفالنا",
      intro:
        "فريقنا المتميز يجمع بين الخبرة والحماس والحب للأطفال. نحن نؤمن بأن كل طفل يستحق أفضل رعاية وتعليم، ولهذا نحرص على اختيار معلمين مؤهلين ومتفانين في عملهم.",
      teamIntro:
        "فريقنا المتميز يجمع بين الخبرة والحماس والحب للأطفال. نحن نؤمن بأن كل طفل يستحق أفضل رعاية وتعليم.",
    },
    en: {
      title: "Our Team",
      subtitle:
        "A professional and dedicated team to care for and educate our children",
      intro:
        "Our distinguished team combines experience, enthusiasm, and love for children. We believe that every child deserves the best care and education, which is why we carefully select qualified and dedicated teachers.",
      teamIntro:
        "Our distinguished team combines experience, enthusiasm, and love for children. We believe that every child deserves the best care and education.",
    },
  };

  const current = content[language];

  // Organize team hierarchically
  const organizeTeamHierarchically = () => {
    const director = team.filter(
      (member) =>
        member.role === "مديرة المركز" || member.roleEn === "Center Director"
    );
    const management = team.filter(
      (member) =>
        member.role === "مستشارة المركز" ||
        member.roleEn === "Center Consultant" ||
        member.role === "وكيلة المركز" ||
        member.roleEn === "Center Vice Director" ||
        member.role === "مساعد إداري" ||
        member.roleEn === "Administrative Assistant"
    );
    const teachers = team.filter(
      (member) => member.role === "معلمة" || member.roleEn === "Teacher"
    );

    return { director, management, teachers };
  };

  const { director, management, teachers } = organizeTeamHierarchically();

  return (
    <div>
      {/* Hero */}
      <section className="pt-20 pb-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-light-blue/10 via-white to-pink/10 relative overflow-hidden">
        <ShapeDivider className="text-royal-blue" position="bottom" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url(/images/Facilities/19.webp)",
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
            >
              {current.subtitle}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-sm text-white/80 max-w-4xl mx-auto leading-relaxed"
            >
              {current.intro}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Team Intro */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white">
        <div className="container mx-auto max-w-4xl relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-royal-blue/80 text-lg leading-relaxed"
          >
            {current.teamIntro}
          </motion.p>
        </div>
        <ShapeDivider className="text-royal-blue" position="bottom" />
      </section>

      {/* Team Grid - Hierarchical */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-pink/5 via-white to-light-blue/5 relative overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          {/* Director Level */}
          {director.length > 0 && (
            <div className="mb-12">
              <motion.h3
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-xl sm:text-2xl font-bold text-royal-blue text-center mb-6"
              >
                {language === "ar"
                  ? "القيادة التنفيذية"
                  : "Executive Leadership"}
              </motion.h3>
              <div className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-1 gap-6 max-w-md">
                  {director.map((member, index) => (
                    <TeamMemberCard
                      key={index}
                      member={member}
                      index={index}
                      language={language}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Management Level */}
          {management.length > 0 && (
            <div className="mb-12">
              <motion.h3
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-xl sm:text-2xl font-bold text-royal-blue text-center mb-6"
              >
                {language === "ar"
                  ? "الفريق الإداري والاستشاري"
                  : "Administrative & Advisory Team"}
              </motion.h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {management.map((member, index) => (
                  <TeamMemberCard
                    key={index}
                    member={member}
                    index={index}
                    language={language}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Teachers Level */}
          {teachers.length > 0 && (
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-xl sm:text-2xl font-bold text-royal-blue text-center mb-6"
              >
                {language === "ar" ? "الفريق التعليمي" : "Educational Team"}
              </motion.h3>
              <div className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl">
                  {teachers.map((member, index) => (
                    <div key={index} className="flex">
                      <TeamMemberCard
                        member={member}
                        index={index}
                        language={language}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

// Team Member Card Component
function TeamMemberCard({ member, index, language }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, scale: 1.03 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl cursor-pointer relative h-full flex flex-col"
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

      <div className="p-5 text-center flex flex-col flex-grow">
        {/* Image in center */}
        <div className="mb-4 flex justify-center">
          {member.image ? (
            <div className="w-32 h-56 rounded-2xl overflow-hidden">
              <Image
                src={member.image}
                alt={language === "ar" ? member.name : member.nameEn}
                width={128}
                height={224}
                className="w-full h-full object-contain object-center rounded-2xl"
                unoptimized
              />
            </div>
          ) : (
            <div className="w-32 h-56 rounded-2xl overflow-hidden">
              <Image
                src="/images/dafault-person.webp"
                alt={language === "ar" ? member.name : member.nameEn}
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
            {language === "ar" ? member.qualification : member.qualificationEn}
          </p>
        </div>

        {/* About */}
        <div className="border-t border-gray-200 pt-3 mt-auto">
          <p className="text-royal-blue/80 text-xs italic leading-relaxed line-clamp-3">
            "{language === "ar" ? member.about : member.aboutEn}"
          </p>
        </div>
      </div>
    </motion.div>
  );
}
