"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { useState } from "react";
import ShapeDivider from "./ShapeDivider";

export default function ContactContent() {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const content = {
    ar: {
      title: "اتصل بنا",
      subtitle: "يسعدنا تواصلكم معنا في مركز ليتل ليدرز!",
      description:
        "نرحّب باستفساراتكم حول برامجنا التعليمية وفرص التسجيل ويسعد فريقنا المتخصّص بتقديم الدعم والإجابة عن جميع تساؤلاتكم",
      form: {
        name: "الاسم",
        email: "البريد الإلكتروني",
        phone: "رقم الجوال",
        message: "الرسالة",
        submit: "إرسال",
      },
      contactInfo: {
        title: "معلومات الاتصال",
        address:
          "مبنى رقم 6403 شارع السديري حي الزهراء 4415 جدة, السعودية 23521",
        phone: "+966537468887",
        email: "info@little-leaders.org",
      },
    },
    en: {
      title: "Contact Us",
      subtitle: "We'd love to hear from you!",
      description:
        "Whether you have questions or need more details about our programs or wish to enroll your child. Little Leaders Center's Team is here to help",
      form: {
        name: "Name",
        email: "Email",
        phone: "Phone Number",
        message: "Message",
        submit: "Submit",
      },
      contactInfo: {
        title: "Contact Information",
        address:
          "Building No. 6403, Al Sudairy Street, Al Zahra District 4415, Jeddah, Saudi Arabia 23521",
        phone: "+966537468887",
        email: "info@little-leaders.org",
      },
    },
  };

  const current = content[language];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert(
      language === "ar"
        ? "تم إرسال رسالتك بنجاح!"
        : "Your message has been sent successfully!"
    );
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div>
      {/* Hero */}
      <section className="pt-20 pb-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-light-blue/10 via-white to-pink/10 relative overflow-hidden">
        <ShapeDivider className="text-royal-blue" position="bottom" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url(/images/Facilities/3-4.webp)",
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
              {current.description}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: language === "ar" ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg p-6 relative overflow-hidden"
            >
              {/* Decorative circles */}
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
              <h2 className="text-2xl font-bold text-royal-blue mb-5 relative z-10">
                {language === "ar" ? "أرسل لنا رسالة" : "Send Us a Message"}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-royal-blue font-semibold mb-2 text-sm">
                    {current.form.name}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-light-blue focus:border-transparent text-sm cursor-pointer"
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
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-light-blue focus:border-transparent text-sm cursor-pointer"
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
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-light-blue focus:border-transparent text-sm cursor-pointer"
                  />
                </div>

                <div>
                  <label className="block text-royal-blue font-semibold mb-2 text-sm">
                    {current.form.message}
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-light-blue focus:border-transparent resize-none text-sm cursor-pointer"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-royal-blue to-light-blue text-white rounded-full font-semibold hover:from-light-blue hover:to-pink transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer text-sm"
                >
                  {current.form.submit}
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: language === "ar" ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-royal-blue to-light-blue rounded-2xl shadow-lg p-6 text-white relative overflow-hidden"
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
              <h2 className="text-2xl font-bold mb-6 relative z-10">
                {current.contactInfo.title}
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-base font-semibold mb-2">
                    📍 {language === "ar" ? "العنوان" : "Address"}
                  </h3>
                  <p className="text-white/90 text-sm">
                    {current.contactInfo.address}
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-semibold mb-2">
                    📞 {language === "ar" ? "الهاتف" : "Phone"}
                  </h3>
                  <a
                    href={`tel:${current.contactInfo.phone}`}
                    className="text-white/90 hover:text-white transition-colors text-sm cursor-pointer"
                  >
                    {current.contactInfo.phone}
                  </a>
                </div>
                <div>
                  <h3 className="text-base font-semibold mb-2">
                    ✉️ {language === "ar" ? "البريد الإلكتروني" : "Email"}
                  </h3>
                  <a
                    href={`mailto:${current.contactInfo.email}`}
                    className="text-white/90 hover:text-white transition-colors text-sm cursor-pointer"
                  >
                    {current.contactInfo.email}
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <ShapeDivider className="text-royal-blue" position="bottom" />
      </section>
    </div>
  );
}
