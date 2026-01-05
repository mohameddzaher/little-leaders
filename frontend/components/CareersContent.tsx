'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import Link from 'next/link';
import ShapeDivider from './ShapeDivider';

export default function CareersContent() {
  const { language } = useLanguage();

  const jobs = {
    ar: [
      {
        id: 1,
        title: 'معلمة رياض أطفال',
        department: 'التعليم',
        type: 'دوام كامل',
        experience: 'خبرة لا تقل عن سنتين',
        description: 'نبحث عن معلمة متخصصة في رياض الأطفال لديها شغف بالتعليم والرعاية. المطلوب خبرة في التعامل مع الأطفال من عمر 3-5 سنوات.',
      },
      {
        id: 2,
        title: 'معلمة رعاية أطفال',
        department: 'الرعاية',
        type: 'دوام كامل',
        experience: 'خبرة لا تقل عن سنة',
        description: 'نبحث عن معلمة متخصصة في رعاية الأطفال الرضع والصغار. المطلوب خبرة في التعامل مع الأطفال من عمر 3 أشهر إلى سنتين.',
      },
      {
        id: 3,
        title: 'مساعد إداري',
        department: 'الإدارة',
        type: 'دوام كامل',
        experience: 'خبرة لا تقل عن سنة',
        description: 'نبحث عن مساعد إداري للعمل في إدارة المركز. المطلوب مهارات تنظيمية جيدة وإتقان برامج Microsoft Office.',
      },
    ],
    en: [
      {
        id: 1,
        title: 'Early Childhood Teacher',
        department: 'Education',
        type: 'Full Time',
        experience: 'Minimum 2 years experience',
        description: 'We are looking for a teacher specialized in early childhood education with a passion for teaching and care. Experience with children aged 3-5 years is required.',
      },
      {
        id: 2,
        title: 'Childcare Teacher',
        department: 'Care',
        type: 'Full Time',
        experience: 'Minimum 1 year experience',
        description: 'We are looking for a teacher specialized in caring for infants and toddlers. Experience with children aged 3 months to 2 years is required.',
      },
      {
        id: 3,
        title: 'Administrative Assistant',
        department: 'Administration',
        type: 'Full Time',
        experience: 'Minimum 1 year experience',
        description: 'We are looking for an administrative assistant to work in the center\'s administration. Good organizational skills and proficiency in Microsoft Office programs are required.',
      },
    ],
  };

  const content = {
    ar: {
      title: 'الوظائف',
      subtitle: 'انضم إلى فريقنا المبدع',
      description: 'نرحب بطلبك للعمل معنا. فريقنا يمتلك خبرة تزيد عن 30 عامًا في رعاية الأطفال والتعليم المبكر. نحن نبحث عن أشخاص متحمسين ومتفانين يشاركوننا رؤيتنا في بناء قادة المستقبل.',
      availableJobs: 'الوظائف المتاحة',
      viewDetails: 'عرض التفاصيل',
      applyNow: 'تقديم طلب',
      noJobs: 'لا توجد وظائف متاحة حالياً',
    },
    en: {
      title: 'Careers',
      subtitle: 'Join Our Creative Team',
      description: 'We welcome your application to work with us. Our team has over 30 years of experience in child care and early education. We are looking for enthusiastic and dedicated people who share our vision of building future leaders.',
      availableJobs: 'Available Positions',
      viewDetails: 'View Details',
      applyNow: 'Apply Now',
      noJobs: 'No positions available at the moment',
    },
  };

  const current = content[language];
  const currentJobs = jobs[language];

  return (
    <div>
      {/* Hero */}
      <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-light-blue/10 via-white to-pink/10 relative overflow-hidden">
        <ShapeDivider className="text-royal-blue" position="bottom" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://plus.unsplash.com/premium_photo-1673730193487-89ae5d321682?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGRhcmt8ZW58MHx8MHx8fDA%3D)',
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
            {current.description}
          </motion.p>
        </div>
      </section>

      {/* Additional Sections */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-pink/5 via-white to-light-blue/5">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-royal-blue to-light-blue rounded-2xl p-6 text-white text-center relative overflow-hidden"
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
                  ease: 'easeInOut',
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
                  ease: 'easeInOut',
                  delay: 1,
                }}
              />
              <div className="text-3xl mb-2 relative z-10">🎓</div>
              <h3 className="text-lg font-bold mb-2">
                {language === 'ar' ? 'التطوير المهني' : 'Professional Development'}
              </h3>
              <p className="text-white/90 text-sm">
                {language === 'ar' ? 'فرص تدريب مستمرة ونمو مهني' : 'Continuous training opportunities and professional growth'}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-br from-light-blue to-pink rounded-2xl p-6 text-white text-center relative overflow-hidden"
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
                  ease: 'easeInOut',
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
                  ease: 'easeInOut',
                  delay: 1,
                }}
              />
              <div className="text-3xl mb-2 relative z-10">💼</div>
              <h3 className="text-lg font-bold mb-2">
                {language === 'ar' ? 'بيئة عمل إيجابية' : 'Positive Work Environment'}
              </h3>
              <p className="text-white/90 text-sm">
                {language === 'ar' ? 'فريق داعم وبيئة محفزة' : 'Supportive team and stimulating environment'}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-pink to-royal-blue rounded-2xl p-6 text-white text-center relative overflow-hidden"
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
                  ease: 'easeInOut',
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
                  ease: 'easeInOut',
                  delay: 1,
                }}
              />
              <div className="text-3xl mb-2 relative z-10">🌟</div>
              <h3 className="text-lg font-bold mb-2">
                {language === 'ar' ? 'مزايا تنافسية' : 'Competitive Benefits'}
              </h3>
              <p className="text-white/90 text-sm">
                {language === 'ar' ? 'رواتب مجزية ومزايا إضافية' : 'Rewarding salaries and additional benefits'}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Jobs List */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl font-bold text-royal-blue text-center mb-8"
          >
            {current.availableJobs}
          </motion.h2>

          {currentJobs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentJobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.03 }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl overflow-hidden cursor-pointer relative"
                >
                  {/* Decorative circles */}
                  <motion.div
                    className="absolute top-2 right-2 w-8 h-8 bg-light-blue/20 rounded-full blur-sm"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                  <div className={`h-2 bg-gradient-to-r from-light-blue to-pink`} />
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-royal-blue mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="px-3 py-1 bg-light-blue/10 text-light-blue rounded-full text-xs font-semibold">
                        {job.department}
                      </span>
                      <span className="px-3 py-1 bg-pink/10 text-pink rounded-full text-xs font-semibold">
                        {job.type}
                      </span>
                    </div>
                    <p className="text-royal-blue/70 text-sm mb-4 line-clamp-3">{job.description}</p>
                    <Link
                      href={`/careers/${job.id}`}
                      className="inline-block w-full text-center px-4 py-2 bg-gradient-to-r from-royal-blue to-light-blue text-white rounded-lg font-semibold hover:from-light-blue hover:to-pink transition-all duration-300 text-sm cursor-pointer"
                    >
                      {current.viewDetails}
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-royal-blue/70 text-lg">{current.noJobs}</p>
            </div>
          )}
        </div>
        <ShapeDivider className="text-royal-blue" position="bottom" />
      </section>
    </div>
  );
}
