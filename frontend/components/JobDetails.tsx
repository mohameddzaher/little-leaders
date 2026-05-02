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
      4: {
        title: 'معلمة رياض أطفال (تخصص لغة إنجليزية)',
        department: 'التعليم',
        type: 'دوام كامل',
        experience: 'خبرة لا تقل عن سنتين',
        location: 'مركز ضيافة الأطفال - جدة',
        description: 'تبحث إدارة المركز عن معلمة رياض أطفال متخصصة في اللغة الإنجليزية، للمساهمة في تعليم الأطفال وتنمية مهاراتهم اللغوية والمعرفية في بيئة تعليمية آمنة ومحفزة.',
        requirements: [
          'أن تكون المتقدمة سعودية الجنسية',
          'درجة دبلوم أو بكالوريوس في رياض الأطفال أو تخصص ذو صلة (ويُفضل تخصص لغة إنجليزية)',
          'خبرة لا تقل عن سنتين في مجال رياض الأطفال أو التعليم المبكر',
          'مهارات تواصل ممتازة مع الأطفال وأولياء الأمور',
          'القدرة على العمل ضمن فريق وتحمل المسؤولية',
        ],
        responsibilities: [
          'تقديم دروس اللغة الإنجليزية للأطفال بأساليب تعليمية ممتعة وتفاعلية',
          'تطوير خطط تعليمية مناسبة لأعمار الأطفال',
          'تعزيز مهارات الاستماع والتحدث لدى الأطفال',
          'تنظيم الأنشطة التعليمية والترفيهية التي تدعم التعلم',
          'إعداد تقارير دورية عن مستوى الأطفال وتطورهم',
        ],
      },
    },
    en: {
      4: {
        title: 'Kindergarten Teacher (English Specialty)',
        department: 'Education',
        type: 'Full Time',
        experience: 'Minimum 2 years experience',
        location: 'Childcare Center – Jeddah',
        description: 'The daycare Center is seeking a Teacher specialized in English to contribute to children\'s education and support the development of their language and cognitive skills in a safe and stimulating learning environment.',
        requirements: [
          'Must be a Saudi national',
          'Diploma or bachelor\'s degree in early childhood education or a related field (English specialization preferred)',
          'Minimum of two years of experience in kindergarten or early childhood education',
          'Excellent communication skills with children and parents',
          'Ability to work within a team and take responsibility',
        ],
        responsibilities: [
          'Deliver English lessons to children using engaging and interactive teaching methods',
          'Develop age-appropriate lesson plans',
          'Enhance children\'s listening and speaking skills',
          'Organize educational and recreational activities that support learning',
          'Prepare periodic reports on children\'s progress and development',
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
  const job = jobs[language as 'ar' | 'en']?.[jobId as unknown as 4];

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
    // TEMPORARY: open user's email client with prefilled data until EmailJS is configured
    const recipient = 'info@little-leaders.org';
    const subjectLine =
      language === 'ar'
        ? `طلب تقديم على وظيفة: ${job?.title ?? ''}`
        : `Job Application: ${job?.title ?? ''}`;
    const labels =
      language === 'ar'
        ? {
            position: 'الوظيفة',
            name: 'الاسم',
            phone: 'رقم الهاتف',
            email: 'البريد الإلكتروني',
            message: 'رسالة / ملاحظات',
            resumeNote:
              'ملاحظة: من فضلك أرفق ملف السيرة الذاتية يدوياً قبل إرسال الإيميل.',
          }
        : {
            position: 'Position',
            name: 'Name',
            phone: 'Phone',
            email: 'Email',
            message: 'Message / Notes',
            resumeNote:
              'Note: please attach your resume file manually before sending this email.',
          };
    const body = [
      `${labels.position}: ${job?.title ?? ''}`,
      `${labels.name}: ${formData.name}`,
      `${labels.phone}: ${formData.phone}`,
      `${labels.email}: ${formData.email}`,
      `${labels.message}: ${formData.message}`,
      '',
      labels.resumeNote,
    ].join('\n');
    const mailto = `mailto:${recipient}?subject=${encodeURIComponent(
      subjectLine
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
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
                  className="text-white hover:text-pink underline underline-offset-4 transition-colors text-sm font-bold block mb-3 cursor-pointer"
                >
                  {current.email}
                </a>
                <p className="text-sm text-white/90 mb-2">{current.orCall}</p>
                <a
                  href={`tel:${current.phone}`}
                  className="text-white hover:text-pink underline underline-offset-4 transition-colors text-sm font-bold block cursor-pointer"
                  dir="ltr"
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

