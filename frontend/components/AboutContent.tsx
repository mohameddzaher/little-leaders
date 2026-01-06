"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import Link from "next/link";
import ShapeDivider from "./ShapeDivider";

export default function AboutContent() {
  const { language } = useLanguage();

  const content = {
    ar: {
      hero: {
        title: "من نحن",
        subtitle: "ما نقدمه في مركز ليتل ليدرز",
        description:
          "نؤمن أن كل طفل فريد ومليء بالإمكانات وأن دورنا هو رعاية هذه الإمكانات وتنميتها بالحب والإبداع نوفر بيئة آمنة محفزة ودافئة تشجع الأطفال على الاستكشاف والتعلم بثقة كل يوم نجمع بين أساليب التعليم الحديثة في مرحلة الطفولة المبكرة والاهتمام الشخصي الذي يمنح شعور العائلة. هدفنا أن يشعر كل طفل في مركزنا بالسعادة والدعم والإلهام منذ لحظة انضمامه إلينا",
      },
      mission: {
        title: "رسالتنا",
        text: "في ليتل ليدرز, نؤمن أن كل طفل يحمل في داخله بذرة قائد. رسالتنا هي رعاية هذه البذرة لتزهر مبكرًا من خلال بيئة تعليمية راقية وضيافة فاخرة تجمع بين المرح والمعرفة وتنمي في أطفالنا روح القيادة وحب التعلم واحترام الذات والآخرين. نحن نسعى لأن نكون نقطة الانطلاق التي تمنح الطفل الثقة وتفتح أمامه أبواب الإبداع ليكون قائدًا مُلهِمًا لمستقبله ولمجتمعه.",
      },
      vision: {
        title: "رؤيتنا",
        text: "أن نكون الوجهة الأولى في جدة لصناعة جيل قيادي مبدع يجمع بين الذكاء والمعرفة والقيم في بيئة تعليمية وضيافية راقية تُلهم الأطفال ليكونوا قادة ناجحين في حياتهم ومستقبلهم.",
      },
      values: {
        title: "قيمنا الأساسية",
        items: [
          {
            title: "تعزيز القيم والأخلاق",
            description:
              "نحن نغرس في أطفالنا بذور القيم النبيلة المتجذرة في تعاليم عقيدتنا الإسلامية مثل احترام الصدق والسخاء. نحن أيضًا نرعى روح التعاون والقيادة حتى ينمووا ليصبحوا جيلًا ملهمًا وأخلاقيًا يحدث فرقًا حقيقيًا في العالم.",
            icon: "✨",
          },
          {
            title: "القيادة المبكرة",
            description:
              "نعتقد أن بناء قائد يبدأ في مرحلة الطفولة لذلك نزرع في أطفالنا مهارات المسؤولية واتخاذ القرار الواثق.",
            icon: "👑",
          },
          {
            title: "التميز التربوي",
            description:
              "نحن نطبق المناهج المتقدمة والمعايير العالمية التي تفتح الأبواب للإبداع ونطور مهارات التفكير النقدي.",
            icon: "📚",
          },
          {
            title: "رعاية متميزة",
            description:
              "نحن نوفر بيئة آمنة ومريحة مع تصاميم أنيقة وخدمات ضيافة استثنائية تعكس قيمة أطفالنا وعائلاتهم.",
            icon: "🏆",
          },
          {
            title: "التعلم من خلال المرح",
            description:
              "نحن نمزج التعلم باللعب بطريقة مبتكرة تجعل كل تجربة تعليمية ممتعة ومحفزة.",
            icon: "🎉",
          },
          {
            title: "رعاية فردية",
            description:
              "نحن نقدر تفرد كل طفل وأنشطة التصميم التي تتناسب مع احتياجاته وتغذي نقاط قوته وتجعل التعلم جذابًا وممتعًا.",
            icon: "💝",
          },
        ],
      },
      importance: {
        title: "أهمية تسجيل الطفل في مرحلة ما قبل المدرسة",
        intro:
          "أجمع كل علماء علم النفس والاجتماع على أن الطفل من المهم جداً إنضمامه لمراحل ماقبل المدرسة، وذلك بحسب رأيهم له العديد من الفوائد، أهمها:",
        points: [
          "تنمي مرحلة ماقبل المدرسة المهارات العقلية وقدرة الطفل على التركيز والتذكر.",
          "تعطي للطفل فرصة أن يكون اجتماعياً وقادراً على التعبير عن نفسه بشكل أفضل.",
          "تساهم في تطوير المهارات الحركية لدى الأطفال.",
          "تحسن من قدرة الطفل على الكلام وتساعده في تعلم سلوكيات إيجابية، إضافة إلى مساعدته على التمييز بين الصواب والخطأ.",
          "تهيئ الطفل للدخول إلى المدرسة عبر تعليمه على كيفية الاعتماد على النفس.",
          "تبني قاعدة تعليمية سليمة للطفل، حيث أنها عبر مجموعة من الأنشطة المسلية تعلّمه الحروف والأرقام وغيرها من الأساسيات الأخرى.",
        ],
      },
    },
    en: {
      hero: {
        title: "About Us",
        subtitle:
          "At Little Leaders Center in Jeddah we believe that every child is unique capable and full of potential",
        description:
          "Our mission is to provide a safe caring and creative environment where little minds can explore learn and grow with confidence. As one of the upcoming private nurseries in Jeddah we combine modern early childhood education methods with warm family‑like care. Our goal is to make every child feel valued supported and inspired every single day",
      },
      mission: {
        title: "Our Mission",
        text: "At Little Leaders Center, we believe that every child carries within them the seed of a leader. Our mission is to nurture this seed, so it blooms early through a refined educational environment and premium hospitality that blends fun with knowledge. We aim to cultivate in our children a spirit of leadership, a love of learning, and respect for themselves and others. We strive to be the starting point that gives the child confidence and opens doors to creativity, so they may grow into an inspiring leader for their future and their community.",
      },
      vision: {
        title: "Our Vision",
        text: "To be the leading destination in Jeddah for nurturing a creative generation of leaders who combine intelligence, knowledge, and values in a refined educational and hospitality environment that inspires children to become successful leaders in their lives and futures.",
      },
      values: {
        title: "Our Core Values",
        items: [
          {
            title: "Promoting Values and Ethics",
            description:
              "We instill in our children the seeds of noble values rooted in the teachings of our Islamic faith, such as respect, honesty, integrity, and generosity. We also nurture in them a spirit of cooperation and leadership, so they grow into an inspiring and ethical generation that makes a real difference in the world.",
            icon: "✨",
          },
          {
            title: "Early Leadership",
            description:
              "We believe that building a leader begins in childhood, so we cultivate in our children the skills of responsibility and confident decision making.",
            icon: "👑",
          },
          {
            title: "Educational Excellence",
            description:
              "We implement advanced curricula and global standards that open the doors to creativity and develop critical thinking skills.",
            icon: "📚",
          },
          {
            title: "Premium Care",
            description:
              "We provide a safe and comfortable environment with elegant designs and exceptional hospitality services that reflect the value of our children and their families.",
            icon: "🏆",
          },
          {
            title: "Learning Through Fun",
            description:
              "We blend learning with play in an innovative way that makes every educational experience enjoyable and stimulating.",
            icon: "🎉",
          },
          {
            title: "Individualized Care",
            description:
              "We respect the uniqueness of each child and tailor activities to suit their needs and develop their strengths.",
            icon: "💝",
          },
        ],
      },
      importance: {
        title: "The Importance of Enrolling a Child in Preschool",
        intro:
          "All psychologists and sociologists agree that it is very important for a child to attend preschool. According to their views, it offers many benefits, the most important of which are:",
        points: [
          "Preschool develops mental skills and enhances the child's ability to concentrate and remember.",
          "It gives the child an opportunity to be social and to express themselves better.",
          "It contributes to developing the child's motor skills.",
          "It improves the child's speech ability and helps them learn positive behaviors, in addition to helping them distinguish between right and wrong.",
          "It prepares the child for school by teaching them how to rely on themselves.",
          "It builds a strong educational foundation through a variety of fun activities that teach letters, numbers, and other basic skills.",
        ],
      },
    },
  };

  const current = content[language];

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-light-blue/10 via-white to-pink/10 relative overflow-hidden">
        <ShapeDivider className="text-royal-blue" position="bottom" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1682687221080-5cb261c645cb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
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
            {current.hero.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-white/80 mb-3"
          >
            {current.hero.subtitle}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-sm text-white/70 max-w-2xl mx-auto leading-relaxed"
          >
            {current.hero.description}
          </motion.p>
        </div>
      </section>

      {/* Additional Content Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: language === "ar" ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-right rtl:lg:text-left"
            >
              <h2 className="text-2xl font-bold text-royal-blue mb-4">
                {language === "ar"
                  ? "مركز ليتل ليدرز"
                  : "Little Leaders Center"}
              </h2>
              <p className="text-royal-blue/70 leading-relaxed">
                {current.hero.description}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: language === "ar" ? 50 : -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative flex justify-center"
            >
              <img
                src="/images/logo.png"
                alt="Little Leaders Logo"
                className="w-60 h-auto object-contain"
              />
              {/* Animated circles around logo */}
              <motion.div
                className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-light-blue/30 rounded-full blur-2xl"
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
                className="absolute bottom-0 right-0 w-24 h-24 bg-pink/30 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.3, 0.5, 0.3],
                  x: [0, 10, 0],
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
              <motion.div
                className="absolute top-1/2 left-0 w-20 h-20 bg-pink/30 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                  x: [0, -10, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
              />
            </motion.div>
          </div>
        </div>
        <ShapeDivider className="text-royal-blue" position="bottom" />
      </section>

      {/* Features Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white">
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl font-bold text-royal-blue text-center mb-6"
          >
            {language === "ar" ? "مميزاتنا" : "Our Features"}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center text-royal-blue/70 mb-8 max-w-3xl mx-auto text-base"
          >
            {language === "ar"
              ? "في مركز ليتل ليدرز نهتم لتطوير أهم الجوانب التي تساهم في نمو طفلك وتطوره بثقة وسعادة"
              : "At Little Leaders Center, we care about developing the most important aspects that contribute to your child's growth and development with confidence and happiness"}
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title:
                  language === "ar"
                    ? "رعاية وتعليم عالي الجودة"
                    : "High Quality Care and Education",
                description:
                  language === "ar"
                    ? "في بيئة متميزة تهتم بكل تفاصيل رحلة طفلك اليومية"
                    : "In a distinguished environment that cares for every detail of your child's daily journey",
                gradient: "from-pink to-light-blue",
                image:
                  "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400",
              },
              {
                title:
                  language === "ar"
                    ? "التزام كامل بمعايير السلامة"
                    : "Full Commitment to Safety Standards",
                description:
                  language === "ar"
                    ? "لضمان بيئة آمنة ومحفّزة للنمو"
                    : "To ensure a safe and stimulating environment for growth",
                gradient: "from-light-blue to-pink",
                image:
                  "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=400",
              },
              {
                title:
                  language === "ar"
                    ? "فريق تربوي معتمد وذو خبرة"
                    : "Certified and Experienced Educational Team",
                description:
                  language === "ar"
                    ? "يقدم رعاية موجهة تدعم قدرات كل طفل وتلهمه للتعلم"
                    : "Provides directed care that supports each child's abilities and inspires them to learn and explore",
                gradient: "from-pink to-royal-blue",
                image:
                  "https://images.unsplash.com/photo-1646617747566-b7e784435a48?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDU4fHx8ZW58MHx8fHx8",
              },
            ].map((feature, index) => (
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
                className={`bg-gradient-to-br ${feature.gradient} rounded-2xl p-5 shadow-lg hover:shadow-xl cursor-pointer relative overflow-hidden`}
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
                <div className="relative mb-4 h-32 rounded-xl overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 relative z-10">
                  <h3 className="text-base font-bold text-royal-blue mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-royal-blue/70 text-xs leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <ShapeDivider className="text-royal-blue" position="bottom" />
      </section>

      {/* Mission & Vision */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1637195140027-634f015f9dc3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDc1fHx8ZW58MHx8fHx8",
          }}
        />
        <div className="absolute inset-0 bg-black/15" />
        <div className="container mx-auto max-w-5xl relative z-10">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              {language === "ar" ? "رسالتنا ورؤيتنا" : "Our Mission & Vision"}
            </h2>
            <p className="text-white/90 text-sm max-w-2xl mx-auto">
              {language === "ar"
                ? "نؤمن بأن كل طفل يحمل بداخله بذرة قائد، ونسعى لرعايتها حتى تزهر مبكرًا"
                : "We believe every child carries the seed of a leader within, and we strive to nurture it so it blooms early"}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: language === "ar" ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -5, scale: 1.01 }}
              className="bg-gradient-to-br from-light-blue to-pink rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer relative overflow-hidden h-full flex flex-col"
            >
              {/* Decorative circles */}
              <motion.div
                className="absolute top-2 right-2 w-8 h-8 bg-white/20 rounded-full blur-md"
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
                className="absolute bottom-2 left-2 w-6 h-6 bg-white/20 rounded-full blur-md"
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

              <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 flex-grow flex flex-col">
                <h2 className="text-lg font-bold text-royal-blue mb-2 flex-shrink-0">
                  {current.mission.title}
                </h2>
                <p className="text-royal-blue/70 leading-relaxed text-xs flex-grow">
                  {current.mission.text}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: language === "ar" ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -5, scale: 1.01 }}
              className="bg-gradient-to-br from-pink to-royal-blue rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer relative overflow-hidden h-full flex flex-col"
            >
              {/* Decorative circles */}
              <motion.div
                className="absolute top-2 right-2 w-8 h-8 bg-white/20 rounded-full blur-md"
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
                className="absolute bottom-2 left-2 w-6 h-6 bg-white/20 rounded-full blur-md"
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

              <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 flex-grow flex flex-col">
                <h2 className="text-lg font-bold text-royal-blue mb-2 flex-shrink-0">
                  {current.vision.title}
                </h2>
                <p className="text-royal-blue/70 leading-relaxed text-xs flex-grow">
                  {current.vision.text}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
        <ShapeDivider className="text-royal-blue" position="bottom" />
      </section>

      {/* Values */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-pink/5 via-white to-light-blue/5 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200)",
          }}
        />
        <div className="absolute inset-0 bg-black/10" />
        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl font-bold text-royal-blue text-center mb-8"
          >
            {current.values.title}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {current.values.items.map((value, index) => {
              const gradients = [
                "from-pink to-light-blue",
                "from-light-blue to-pink",
                "from-pink to-royal-blue",
                "from-royal-blue to-light-blue",
                "from-pink to-royal-blue",
                "from-light-blue to-royal-blue",
              ];
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
                  className={`bg-gradient-to-br ${
                    gradients[index % gradients.length]
                  } rounded-2xl p-5 shadow-lg hover:shadow-xl cursor-pointer relative overflow-hidden`}
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
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 relative z-10">
                    <div className="mb-3 flex justify-center">
                      {value.icon === "✨" ? (
                        <svg className="w-10 h-10 text-royal-blue" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      ) : value.icon === "👑" ? (
                        <svg className="w-10 h-10 text-royal-blue" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .55-.45 1-1 1H6c-.55 0-1-.45-1-1s.45-1 1-1h12c.55 0 1 .45 1 1z"/>
                        </svg>
                      ) : value.icon === "📚" ? (
                        <svg className="w-10 h-10 text-royal-blue" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                        </svg>
                      ) : value.icon === "🏆" ? (
                        <svg className="w-10 h-10 text-royal-blue" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"/>
                        </svg>
                      ) : value.icon === "🎉" ? (
                        <svg className="w-10 h-10 text-royal-blue" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                          <circle cx="7" cy="7" r="1.5" fill="currentColor"/>
                          <circle cx="17" cy="7" r="1.5" fill="currentColor"/>
                          <circle cx="7" cy="17" r="1.5" fill="currentColor"/>
                          <circle cx="17" cy="17" r="1.5" fill="currentColor"/>
                        </svg>
                      ) : value.icon === "💝" ? (
                        <svg className="w-10 h-10 text-royal-blue" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                        </svg>
                      ) : (
                        <div className="text-3xl">{value.icon}</div>
                      )}
                    </div>
                    <h3 className="text-base font-bold text-royal-blue mb-2">
                      {value.title}
                    </h3>
                    <p className="text-royal-blue/70 text-xs leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
        <ShapeDivider className="text-royal-blue" position="bottom" />
      </section>

      {/* Importance Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200)",
          }}
        />
        <div className="absolute inset-0 bg-black/15" />
        <div className="container mx-auto max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-royal-blue to-light-blue rounded-2xl p-6 md:p-8 shadow-lg relative overflow-hidden"
          >
            {/* Decorative circles */}
            <motion.div
              className="absolute top-4 right-4 w-16 h-16 bg-white/20 rounded-full blur-lg"
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
              className="absolute bottom-4 left-4 w-12 h-12 bg-white/20 rounded-full blur-lg"
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
            <div
              className={`bg-white/95 backdrop-blur-sm rounded-xl p-6 relative z-10 ${
                language === "ar" ? "text-right" : "text-left"
              }`}
              dir={language === "ar" ? "rtl" : "ltr"}
            >
              <h2 className="text-xl sm:text-2xl font-bold text-royal-blue mb-4">
                {current.importance.title}
              </h2>
              <p className="text-base text-royal-blue/70 mb-5 leading-relaxed">
                {current.importance.intro}
              </p>
              <ul
                className={`space-y-3 ${
                  language === "ar" ? "text-right" : "text-left"
                }`}
                dir={language === "ar" ? "rtl" : "ltr"}
              >
                {current.importance.points.map((point, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: language === "ar" ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`flex items-start gap-3 ${
                      language === "ar" ? "text-right" : "text-left"
                    }`}
                    dir={language === "ar" ? "rtl" : "ltr"}
                  >
                    <span
                      className="text-light-blue text-base font-bold flex-shrink-0"
                      style={{ lineHeight: "1.5" }}
                    >
                      {index + 1}-
                    </span>
                    <span className="text-royal-blue/70 text-sm leading-relaxed flex-1">
                      {point}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
        <ShapeDivider className="text-royal-blue" position="bottom" />
      </section>
    </div>
  );
}
