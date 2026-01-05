'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';

export default function JobDetails({ jobId }: { jobId: string }) {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    resume: null as File | null,
    message: '',
  });

  const jobs = {
    ar: {
      1: {
        title: 'معلمة رياض أطفال',
        department: 'التعليم',
        type: 'دوام كامل',
        experience: 'خبرة لا تقل عن سنتين',
        location: 'جدة، السعودية',
        description: 'نبحث عن معلمة متخصصة في رياض الأطفال لديها شغف بالتعليم والرعاية. المطلوب خبرة في التعامل مع الأطفال من عمر 3-5 سنوات.',
        requirements: [
          'بكالوريوس في التربية أو رياض الأطفال',
          'خبرة لا تقل عن سنتين في مجال التعليم',
          'القدرة على التعامل مع الأطفال بحب وصبر',
          'مهارات تواصل ممتازة',
          'القدرة على العمل ضمن فريق',
        ],
        responsibilities: [
          'تخطيط وتنفيذ الأنشطة التعليمية',
          'رعاية الأطفال وتوفير بيئة آمنة',
          'التواصل مع أولياء الأمور',
          'المشاركة في تطوير البرامج التعليمية',
        ],
      },
      2: {
        title: 'معلمة رعاية أطفال',
        department: 'الرعاية',
        type: 'دوام كامل',
        experience: 'خبرة لا تقل عن سنة',
        location: 'جدة، السعودية',
        description: 'نبحث عن معلمة متخصصة في رعاية الأطفال الرضع والصغار. المطلوب خبرة في التعامل مع الأطفال من عمر 3 أشهر إلى سنتين.',
        requirements: [
          'بكالوريوس في التربية أو رعاية الأطفال',
          'خبرة لا تقل عن سنة في رعاية الأطفال',
          'القدرة على التعامل مع الأطفال الرضع',
          'مهارات رعاية ممتازة',
          'القدرة على العمل ضمن فريق',
        ],
        responsibilities: [
          'رعاية الأطفال الرضع والصغار',
          'توفير بيئة آمنة ونظيفة',
          'التواصل مع أولياء الأمور',
          'المشاركة في تطوير برامج الرعاية',
        ],
      },
      3: {
        title: 'مساعد إداري',
        department: 'الإدارة',
        type: 'دوام كامل',
        experience: 'خبرة لا تقل عن سنة',
        location: 'جدة، السعودية',
        description: 'نبحث عن مساعد إداري للعمل في إدارة المركز. المطلوب مهارات تنظيمية جيدة وإتقان برامج Microsoft Office.',
        requirements: [
          'بكالوريوس في إدارة الأعمال أو ما يعادلها',
          'خبرة لا تقل عن سنة في العمل الإداري',
          'إتقان برامج Microsoft Office',
          'مهارات تنظيمية ممتازة',
          'القدرة على العمل ضمن فريق',
        ],
        responsibilities: [
          'المساعدة في المهام الإدارية',
          'تنظيم الملفات والوثائق',
          'الرد على الاستفسارات',
          'المشاركة في التخطيط والتنظيم',
        ],
      },
    },
    en: {
      1: {
        title: 'Early Childhood Teacher',
        department: 'Education',
        type: 'Full Time',
        experience: 'Minimum 2 years experience',
        location: 'Jeddah, Saudi Arabia',
        description: 'We are looking for a teacher specialized in early childhood education with a passion for teaching and care. Experience with children aged 3-5 years is required.',
        requirements: [
          'Bachelor\'s degree in Education or Early Childhood',
          'Minimum 2 years of teaching experience',
          'Ability to work with children with love and patience',
          'Excellent communication skills',
          'Ability to work in a team',
        ],
        responsibilities: [
          'Plan and implement educational activities',
          'Care for children and provide a safe environment',
          'Communicate with parents',
          'Participate in developing educational programs',
        ],
      },
      2: {
        title: 'Childcare Teacher',
        department: 'Care',
        type: 'Full Time',
        experience: 'Minimum 1 year experience',
        location: 'Jeddah, Saudi Arabia',
        description: 'We are looking for a teacher specialized in caring for infants and toddlers. Experience with children aged 3 months to 2 years is required.',
        requirements: [
          'Bachelor\'s degree in Education or Childcare',
          'Minimum 1 year of childcare experience',
          'Ability to work with infants',
          'Excellent care skills',
          'Ability to work in a team',
        ],
        responsibilities: [
          'Care for infants and toddlers',
          'Provide a safe and clean environment',
          'Communicate with parents',
          'Participate in developing care programs',
        ],
      },
      3: {
        title: 'Administrative Assistant',
        department: 'Administration',
        type: 'Full Time',
        experience: 'Minimum 1 year experience',
        location: 'Jeddah, Saudi Arabia',
        description: 'We are looking for an administrative assistant to work in the center\'s administration. Good organizational skills and proficiency in Microsoft Office programs are required.',
        requirements: [
          'Bachelor\'s degree in Business Administration or equivalent',
          'Minimum 1 year of administrative experience',
          'Proficiency in Microsoft Office programs',
          'Excellent organizational skills',
          'Ability to work in a team',
        ],
        responsibilities: [
          'Assist with administrative tasks',
          'Organize files and documents',
          'Respond to inquiries',
          'Participate in planning and organization',
        ],
      },
    },
  };

  const content = {
    ar: {
      apply: 'تقديم طلب',
      form: {
        name: 'الاسم',
        phone: 'رقم الهاتف',
        email: 'البريد الإلكتروني',
        resume: 'السيرة الذاتية',
        message: 'رسالة أو ملاحظات',
        submit: 'إرسال الطلب',
      },
      contactInfo: 'يمكنك أيضاً إرسال سيرتك الذاتية مباشرة إلى:',
      email: 'info@little-leaders.org',
      orCall: 'أو الاتصال بنا على:',
      phone: '+966537468887',
      back: 'العودة للوظائف',
      requirements: 'المتطلبات',
      responsibilities: 'المسؤوليات',
    },
    en: {
      apply: 'Apply Now',
      form: {
        name: 'Name',
        phone: 'Phone Number',
        email: 'Email',
        resume: 'Resume/CV',
        message: 'Message or Notes',
        submit: 'Submit Application',
      },
      contactInfo: 'You can also send your resume directly to:',
      email: 'info@little-leaders.org',
      orCall: 'Or call us at:',
      phone: '+966537468887',
      back: 'Back to Jobs',
      requirements: 'Requirements',
      responsibilities: 'Responsibilities',
    },
  };

  const current = content[language];
  const job = jobs[language as 'ar' | 'en']?.[jobId as '1' | '2' | '3'];

  if (!job) {
    return (
      <div className="py-16 text-center">
        <p className="text-royal-blue/70">{language === 'ar' ? 'الوظيفة غير موجودة' : 'Job not found'}</p>
        <Link href="/careers" className="text-light-blue hover:underline mt-4 inline-block">
          {current.back}
        </Link>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert(language === 'ar' ? 'تم إرسال طلبك بنجاح!' : 'Your application has been submitted successfully!');
  };

  return (
    <div>
      {/* Hero */}
      <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-light-blue/10 via-white to-pink/10 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200)',
          }}
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <Link
            href="/careers"
            className="inline-block mb-4 text-light-blue hover:text-royal-blue transition-colors text-sm font-medium cursor-pointer"
          >
            ← {current.back}
          </Link>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold text-royal-blue mb-4"
          >
            {job.title}
          </motion.h1>
          <div className="flex flex-wrap justify-center gap-3 mb-4">
            <span className="px-4 py-2 bg-light-blue/10 text-light-blue rounded-full text-sm font-semibold">
              {job.department}
            </span>
            <span className="px-4 py-2 bg-pink/10 text-pink rounded-full text-sm font-semibold">
              {job.type}
            </span>
            <span className="px-4 py-2 bg-pink/10 text-pink rounded-full text-sm font-semibold">
              {job.experience}
            </span>
          </div>
          <p className="text-base text-royal-blue/70 max-w-2xl mx-auto">
            {job.description}
          </p>
        </div>
      </section>

      {/* Job Details */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Job Info */}
            <div className="lg:col-span-2 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl shadow-lg p-6"
              >
                <h2 className="text-xl font-bold text-royal-blue mb-3">{current.requirements}</h2>
                <ul className="space-y-2">
                  {job.requirements.map((req, index) => (
                    <li key={index} className="flex items-start space-x-2 rtl:space-x-reverse">
                      <span className="text-light-blue mt-1">✓</span>
                      <span className="text-royal-blue/70 text-sm">{req}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-2xl shadow-lg p-6"
              >
                <h2 className="text-xl font-bold text-royal-blue mb-3">{current.responsibilities}</h2>
                <ul className="space-y-2">
                  {job.responsibilities.map((resp, index) => (
                    <li key={index} className="flex items-start space-x-2 rtl:space-x-reverse">
                      <span className="text-pink mt-1">•</span>
                      <span className="text-royal-blue/70 text-sm">{resp}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Application Form */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-royal-blue to-light-blue rounded-2xl shadow-lg p-6 text-white mb-6"
              >
                <h3 className="text-lg font-bold mb-3">{current.apply}</h3>
                <p className="text-sm text-white/90 mb-4">{current.contactInfo}</p>
                <a
                  href={`mailto:${current.email}`}
                  className="text-light-blue hover:text-white transition-colors text-sm font-semibold block mb-2 cursor-pointer"
                >
                  {current.email}
                </a>
                <p className="text-sm text-white/90 mb-2">{current.orCall}</p>
                <a
                  href={`tel:${current.phone}`}
                  className="text-light-blue hover:text-white transition-colors text-sm font-semibold block cursor-pointer"
                >
                  {current.phone}
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-2xl shadow-lg p-6"
              >
                <h3 className="text-lg font-bold text-royal-blue mb-3">{current.form.submit}</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-royal-blue font-semibold mb-2 text-sm">
                      {current.form.name}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-light-blue focus:border-transparent text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-royal-blue font-semibold mb-2 text-sm">
                      {current.form.phone}
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-light-blue focus:border-transparent text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-royal-blue font-semibold mb-2 text-sm">
                      {current.form.email}
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-light-blue focus:border-transparent text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-royal-blue font-semibold mb-2 text-sm">
                      {current.form.resume}
                    </label>
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={(e) => setFormData({ ...formData, resume: e.target.files?.[0] || null })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-light-blue focus:border-transparent text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-royal-blue font-semibold mb-2 text-sm">
                      {current.form.message}
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-light-blue focus:border-transparent resize-none text-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-gradient-to-r from-royal-blue to-light-blue text-white rounded-lg font-semibold hover:from-light-blue hover:to-pink transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer"
                  >
                    {current.form.submit}
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

