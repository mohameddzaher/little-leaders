"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";
import Image from "next/image";
import FooterShapeDivider from "./FooterShapeDivider";

export default function Footer() {
  const { language } = useLanguage();

  const content = {
    ar: {
      slogan: "حيث تصنع قادة الغد",
      workingHours: "ساعات العمل",
      about: "عن المركز",
      contact: "اتصل بنا",
      followUs: "تابعنا",
      days: "من الأحد إلى الخميس",
      firstPeriod: "الدوام الرسمي",
      firstPeriodTime: "من 7 صباحاً إلى 3 مساءً",
      firstPeriodAge: "(3 أشهر إلى 5 سنوات)",
      secondPeriod: "النشاط الإضافي",
      secondPeriodTime: "من 3 مساءً إلى 5 مساءً",
      secondPeriodAge: "(3 أشهر إلى 10 سنوات)",
      address: "مبنى رقم 6403 شارع السديري حي الزهراء 4415 جدة, السعودية 23521",
      phone: "+966 53 746 8887",
      email: "info@little-leaders.org",
      rights: "جميع الحقوق محفوظة © 2026 | مركز ليتل ليدرز",
    },
    en: {
      slogan: "Crafting Tomorrow's Leaders",
      workingHours: "Working Hours",
      about: "About",
      contact: "Contact Us",
      followUs: "Follow Us",
      days: "Sunday - Thursday",
      firstPeriod: "Official Hours",
      firstPeriodTime: "7 AM - 3 PM",
      firstPeriodAge: "(3 months to 5 years)",
      secondPeriod: "Extra Activities",
      secondPeriodTime: "3 PM - 5 PM",
      secondPeriodAge: "(3 months to 10 years)",
      address:
        "Building No. 6403, Al Sudairy Street, Al Zahra District 4415, Jeddah, Saudi Arabia 23521",
      phone: "+966537468887",
      email: "info@little-leaders.org",
      rights: "All rights reserved © 2026 | Little Leaders Center",
    },
  };

  const current = content[language];

  const socialLinks = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/littleleaders.sa/",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      name: "Twitter",
      url: "https://x.com/littleleadersa_",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
        </svg>
      ),
    },
    {
      name: "Snapchat",
      url: "https://www.snapchat.com/add/littleleaderssa",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.206.793c.234 1.639 1.144 2.957 2.31 3.69 1.174.729 2.625.978 4.001.978 1.213 0 2.39-.18 3.49-.512a.28.28 0 0 1 .356.178c.155.547.155 1.095.155 1.643 0 4.222-3.404 7.617-7.617 7.617-4.222 0-7.617-3.404-7.617-7.617 0-.548 0-1.096.155-1.643a.28.28 0 0 1 .356-.178c1.1.333 2.277.512 3.49.512 1.376 0 2.827-.249 4.001-.978 1.166-.733 2.076-2.051 2.31-3.69zM9.115 7.35c-.202 0-.404.02-.607.06-.202.04-.404.09-.596.15-.192.06-.384.13-.566.21-.182.08-.364.17-.536.27-.172.1-.334.21-.486.33-.152.12-.294.25-.426.39-.132.14-.254.29-.366.45-.112.16-.214.33-.306.51-.092.18-.174.37-.246.57-.072.2-.134.41-.186.63-.052.22-.094.45-.126.69-.032.24-.054.49-.066.75-.012.26-.014.53-.006.81.008.28.026.57.064.87.038.3.086.61.154.93.068.32.146.65.244.99.098.34.206.69.334 1.05.128.36.276.73.444 1.11.168.38.356.77.564 1.17.208.4.436.81.684 1.23.248.42.516.85.804 1.29.288.44.596.89.924 1.35.328.46.676.93 1.044 1.41.368.48.756.97 1.164 1.47.408.5.836 1.01 1.284 1.53.448.52.916 1.05 1.404 1.59.488.54.996 1.09 1.524 1.65.528.56 1.076 1.13 1.644 1.71.568.58 1.156 1.17 1.764 1.77.608.6 1.236 1.21 1.884 1.83.648.62 1.316 1.25 2.004 1.89.688.64 1.396 1.29 2.124 1.95.728.66 1.476 1.33 2.244 2.01.768.68 1.556 1.37 2.364 2.07.808.7 1.636 1.41 2.484 2.13.848.72 1.716 1.45 2.604 2.19.888.74 1.796 1.49 2.724 2.25.928.76 1.876 1.53 2.844 2.31.968.78 1.956 1.57 2.964 2.37 1.008.8 2.036 1.61 3.084 2.43 1.048.82 2.116 1.65 3.204 2.49 1.088.84 2.196 1.69 3.324 2.55 1.128.86 2.276 1.73 3.444 2.61 1.168.88 2.356 1.77 3.564 2.67 1.208.9 2.436 1.81 3.684 2.73 1.248.92 2.516 1.84 3.804 2.77 1.288.93 2.596 1.87 3.924 2.82 1.328.95 2.676 1.91 4.044 2.88 1.368.97 2.756 1.95 4.164 2.94 1.408.99 2.836 1.99 4.284 3 1.448 1.01 2.916 2.03 4.404 3.06 1.488 1.03 2.996 2.07 4.524 3.12 1.528 1.05 3.076 2.11 4.644 3.18 1.568 1.07 3.156 2.15 4.764 3.24 1.608 1.09 3.236 2.19 4.884 3.3 1.648 1.11 3.316 2.23 5.004 3.36 1.688 1.13 3.396 2.27 5.124 3.42 1.728 1.15 3.476 2.31 5.244 3.48 1.768 1.17 3.556 2.35 5.364 3.54 1.808 1.19 3.636 2.39 5.484 3.6 1.848 1.21 3.716 2.43 5.604 3.66 1.888 1.23 3.796 2.47 5.724 3.72 1.928 1.25 3.876 2.51 5.844 3.78 1.968 1.27 3.956 2.55 5.964 3.84 2.008 1.29 4.036 2.59 6.084 3.9 2.048 1.31 4.116 2.63 6.204 3.96 2.088 1.33 4.196 2.67 6.324 4.02 2.128 1.35 4.276 2.71 6.444 4.08 2.168 1.37 4.356 2.75 6.564 4.14 2.208 1.39 4.436 2.79 6.684 4.2 2.248 1.41 4.516 2.83 6.804 4.26 2.288 1.43 4.596 2.87 6.924 4.32 2.328 1.45 2.328 1.45 0 0z"/>
        </svg>
      ),
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@littleleaders.sa",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/profile.php?id=61581648540324",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/little-leaders-center-%D9%85%D8%B1%D9%83%D8%B2-%D9%84%D9%8A%D8%AA%D9%84-%D9%84%D9%8A%D8%AF%D8%B1%D8%B2/",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/@LittleLeaderssa",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/966537468887",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      {/* SVG Wave Divider */}
      <FooterShapeDivider />

      <footer
        className="footer-wave bg-light-blue text-royal-blue "
        style={{ padding: "2rem 0 0 0", marginTop: "-1px" }}
        role="contentinfo"
      >
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-10">
          <div className="footer-wave__main-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 ">
            {/* About Us / Logo and Slogan */}
            <div className="footer-wave__about text-center md:text-right lg:text-right">
              <Link href="/" className="inline-block mb-4 cursor-pointer">
                <Image
                  src="/images/logo.png"
                  alt="Little Leaders Logo"
                  width={140}
                  height={60}
                  className="h-28 w-auto object-contain invert"
                  unoptimized
                />
              </Link>
              {/* <h3 className="footer-wave__heading text-royal-blue text-base font-semibold mb-4 mt-0">
                {language === "ar" ? "عن المركز" : "About Us"}
              </h3>
              <p className="text-royal-blue/80 text-sm leading-relaxed">
                {current.slogan}
              </p> */}
            </div>

            {/* Working Hours */}
            <div className="footer-wave__links text-center md:text-right lg:text-right">
              <h3 className="footer-wave__heading text-royal-blue text-base font-extrabold mb-4 mt-0">
                {current.workingHours}
              </h3>
              <ul className="list-none p-0 m-0 space-y-3 text-sm text-royal-blue">
                <li className="flex items-start">
                  <span className="mr-2 rtl:mr-0 rtl:ml-2 flex-shrink-0">
                    📅
                  </span>
                  <div>
                    <p className="text-royal-blue font-semibold mb-1">
                      {current.days}
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 rtl:mr-0 rtl:ml-2 flex-shrink-0">
                    ⏰
                  </span>
                  <div>
                    <p className="text-royal-blue font-semibold mb-1">
                      {current.firstPeriod}
                    </p>
                    <p className="text-royal-blue/80 text-xs">
                      {current.firstPeriodTime}
                    </p>
                    <p className="text-royal-blue/70 text-xs mt-1">
                      {current.firstPeriodAge}
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 rtl:mr-0 rtl:ml-2 flex-shrink-0">
                    ⏰
                  </span>
                  <div>
                    <p className="text-royal-blue font-semibold mb-1">
                      {current.secondPeriod}
                    </p>
                    <p className="text-royal-blue/80 text-xs">
                      {current.secondPeriodTime}
                    </p>
                    <p className="text-royal-blue/70 text-xs mt-1">
                      {current.secondPeriodAge}
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-wave__links text-center md:text-right lg:text-right">
              <h3 className="footer-wave__heading text-royal-blue text-base font-extrabold mb-4 mt-0">
                {current.contact}
              </h3>
              <ul className="list-none p-0 m-0 space-y-3 text-sm text-royal-blue/90">
                <li className="flex items-start">
                  <span className="mr-2 rtl:mr-0 rtl:ml-2 flex-shrink-0">
                    📍
                  </span>
                  <span>{current.address}</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2 rtl:mr-0 rtl:ml-2 flex-shrink-0">
                    📞
                  </span>
                  <a
                    href={`tel:${current.phone}`}
                    className="text-royal-blue/90 hover:text-royal-blue transition-colors cursor-pointer no-underline"
                    dir="ltr"
                  >
                    {current.phone}
                  </a>
                </li>
                <li className="flex items-center">
                  <span className="mr-2 rtl:mr-0 rtl:ml-2 flex-shrink-0">
                    ✉️
                  </span>
                  <a
                    href={`mailto:${current.email}`}
                    className="text-royal-blue/90 hover:text-royal-blue transition-colors cursor-pointer no-underline"
                  >
                    {current.email}
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div className="footer-wave__links text-center md:text-right lg:text-right">
              <h3 className="footer-wave__heading text-royal-blue text-base font-extrabold mb-4 mt-0">
                {current.followUs}
              </h3>
              <div className="flex flex-wrap gap-3 justify-center md:justify-end lg:justify-end">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[#e68b8d] rounded-full flex items-center justify-center hover:bg-royal-blue hover:text-light-blue transition-all duration-300 cursor-pointer"
                    aria-label={social.name}
                  >
                    {social.name === "Snapchat" ? (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.206.793c.234 1.639 1.144 2.957 2.31 3.69 1.174.729 2.625.978 4.001.978 1.213 0 2.39-.18 3.49-.512a.28.28 0 0 1 .356.178c.155.547.155 1.095.155 1.643 0 4.222-3.404 7.617-7.617 7.617-4.222 0-7.617-3.404-7.617-7.617 0-.548 0-1.096.155-1.643a.28.28 0 0 1 .356-.178c1.1.333 2.277.512 3.49.512 1.376 0 2.827-.249 4.001-.978 1.166-.733 2.076-2.051 2.31-3.69zM9.115 7.35c-.202 0-.404.02-.607.06-.202.04-.404.09-.596.15-.192.06-.384.13-.566.21-.182.08-.364.17-.536.27-.172.1-.334.21-.486.33-.152.12-.294.25-.426.39-.132.14-.254.29-.366.45-.112.16-.214.33-.306.51-.092.18-.174.37-.246.57-.072.2-.134.41-.186.63-.052.22-.094.45-.126.69-.032.24-.054.49-.066.75-.012.26-.014.53-.006.81.008.28.026.57.064.87.038.3.086.61.154.93.068.32.146.65.244.99.098.34.206.69.334 1.05.128.36.276.73.444 1.11.168.38.356.77.564 1.17.208.4.436.81.684 1.23.248.42.516.85.804 1.29.288.44.596.89.924 1.35.328.46.676.93 1.044 1.41.368.48.756.97 1.164 1.47.408.5.836 1.01 1.284 1.53.448.52.916 1.05 1.404 1.59.488.54.996 1.09 1.524 1.65.528.56 1.076 1.13 1.644 1.71.568.58 1.156 1.17 1.764 1.77.608.6 1.236 1.21 1.884 1.83.648.62 1.316 1.25 2.004 1.89.688.64 1.396 1.29 2.124 1.95.728.66 1.476 1.33 2.244 2.01.768.68 1.556 1.37 2.364 2.07.808.7 1.636 1.41 2.484 2.13.848.72 1.716 1.45 2.604 2.19.888.74 1.796 1.49 2.724 2.25.928.76 1.876 1.53 2.844 2.31.968.78 1.956 1.57 2.964 2.37 1.008.8 2.036 1.61 3.084 2.43 1.048.82 2.116 1.65 3.204 2.49 1.088.84 2.196 1.69 3.324 2.55 1.128.86 2.276 1.73 3.444 2.61 1.168.88 2.356 1.77 3.564 2.67 1.208.9 2.436 1.81 3.684 2.73 1.248.92 2.516 1.84 3.804 2.77 1.288.93 2.596 1.87 3.924 2.82 1.328.95 2.676 1.91 4.044 2.88 1.368.97 2.756 1.95 4.164 2.94 1.408.99 2.836 1.99 4.284 3 1.448 1.01 2.916 2.03 4.404 3.06 1.488 1.03 2.996 2.07 4.524 3.12 1.528 1.05 3.076 2.11 4.644 3.18 1.568 1.07 3.156 2.15 4.764 3.24 1.608 1.09 3.236 2.19 4.884 3.3 1.648 1.11 3.316 2.23 5.004 3.36 1.688 1.13 3.396 2.27 5.124 3.42 1.728 1.15 3.476 2.31 5.244 3.48 1.768 1.17 3.556 2.35 5.364 3.54 1.808 1.19 3.636 2.39 5.484 3.6 1.848 1.21 3.716 2.43 5.604 3.66 1.888 1.23 3.796 2.47 5.724 3.72 1.928 1.25 3.876 2.51 5.844 3.78 1.968 1.27 3.956 2.55 5.964 3.84 2.008 1.29 4.036 2.59 6.084 3.9 2.048 1.31 4.116 2.63 6.204 3.96 2.088 1.33 4.196 2.67 6.324 4.02 2.128 1.35 4.276 2.71 6.444 4.08 2.168 1.37 4.356 2.75 6.564 4.14 2.208 1.39 4.436 2.79 6.684 4.2 2.248 1.41 4.516 2.83 6.804 4.26 2.288 1.43 4.596 2.87 6.924 4.32 2.328 1.45 2.328 1.45 0 0z"/>
                      </svg>
                    ) : (
                      social.icon
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Copyright Bar */}
      <div className="bg-royal-blue text-white py-4 px-4 sm:px-6 lg:px-8 ">
        <div className="container mx-auto max-w-7xl text-center">
          <p
            className={`text-sm text-white/80 ${
              language === "ar" ? "text-center" : "text-center"
            }`}
            dir={language === "ar" ? "rtl" : "ltr"}
          >
            {language === "ar" ? (
              <>
                <span dir="rtl">جميع الحقوق محفوظة © </span>
                <span dir="ltr">2026</span>
                <span dir="rtl"> | مركز ليتل ليدرز</span>
              </>
            ) : (
              current.rights
            )}
          </p>
        </div>
      </div>
    </>
  );
}
