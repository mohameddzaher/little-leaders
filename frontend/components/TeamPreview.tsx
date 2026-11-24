"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import Link from "next/link";
import TeamSliderArabic from "./TeamSliderArabic";
import TeamSliderEnglish from "./TeamSliderEnglish";

export default function TeamPreview() {
  const { language } = useLanguage();

  const teamMembers = [
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
      role: "مديرة المركز",
      roleEn: "Center Director",
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
      name: "هاجر أيمن",
      nameEn: "Hajer Ayman",
      role: "معلمة",
      roleEn: "Teacher",
      experience: "سنة",
      experienceEn: "1 year",
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
    {
      name: "مونيا العبادلة",
      nameEn: "Monia Al-Abadla",
      role: "معلمة",
      roleEn: "Teacher",
      experience: "3 سنوات ونصف",
      experienceEn: "3.5 years",
      qualification: "بكالوريوس قانون",
      qualificationEn: "Bachelor's Degree in Law",
      about:
        "أشعر بسعادة معهم، وجودي معهم يمنحني طاقة إيجابية وأستمتع بمساعدتهم",
      aboutEn:
        "I feel happy with them; being around them gives me positive energy and I enjoy helping them",
      image: null,
    },
    {
      name: "سارة مفتي",
      nameEn: "Sarah Mufti",
      role: "معلمة",
      roleEn: "Teacher",
      experience: "سنة",
      experienceEn: "1 year",
      qualification: "بكالوريوس إدارة عامة",
      qualificationEn: "Bachelor's Degree in Public Administration",
      about:
        "لأنني أجد في التعامل مع الأطفال فرصة لإحداث أثر إيجابي في حياتهم والمساهمة في بناء شخصياتهم منذ الصغر",
      aboutEn:
        "Working with children gives me the chance to make a positive impact on their lives and help build their personalities from an early age",
      image: null,
    },
    {
      name: "وعد الوادعي",
      nameEn: "Waad Al-Wadei",
      role: "معلمة اللغة الإنجليزية",
      roleEn: "English Teacher",
      experience: "سنة",
      experienceEn: "1 year",
      qualification: "بكالوريوس أدب إنجليزي",
      qualificationEn: "Bachelor's Degree in English Literature",
      about:
        "أحب أن أكون جزءًا من بناء شخصية الطفل وتعزيز ثقته بنفسه، فكل طفل عالم فريد يستحق الاهتمام والاحتواء",
      aboutEn:
        "I love being part of building a child's personality and boosting their self-confidence; every child is a unique world that deserves care and nurturing",
      image: null,
    },
    {
      name: "لورا مكي",
      nameEn: "Laura Makki",
      role: "معلمة",
      roleEn: "Teacher",
      experience: "سنة وشهرين",
      experienceEn: "1 year and 2 months",
      qualification: "بكالوريوس علم نفس",
      qualificationEn: "Bachelor's Degree in Psychology",
      about:
        "أحب أتعامل مع الأطفال لأني أستمتع ببراءتهم وعفويتهم، وأحب أكون جزء من تطورهم وأساعدهم يتعلموا ويكتشفوا قدراتهم، وأشوف إنو كل طفل عنده عالمه الخاص اللي يستحق نفهمه وندعمه ونحتويه.",
      aboutEn:
        "I enjoy children's innocence and spontaneity. I love being part of their growth, helping them learn and discover their abilities. Every child has their own world that deserves to be understood, supported and embraced",
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
            "url(https://images.unsplash.com/photo-1510146758428-e5e4b17b8b6a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRlYW18ZW58MHx8MHx8fDA%3D)",
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

        {/* ✅ Infinite Scroll Slider - Separate components for each language */}
        <div className="mb-6">
          {language === "en" && <TeamSliderEnglish teamMembers={teamMembers} />}
          {language === "ar" && <TeamSliderArabic teamMembers={teamMembers} />}
        </div>

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