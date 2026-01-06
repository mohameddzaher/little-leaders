"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";
import Image from "next/image";
import FooterShapeDivider from "./FooterShapeDivider";
import {
  FaInstagram,
  FaTwitter,
  FaSnapchat,
  FaTiktok,
  FaFacebook,
  FaLinkedin,
  FaYoutube,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaCalendarAlt,
  FaClock,
} from "react-icons/fa";

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

  // Social media icons - using react-icons library
  const getSocialIcon = (name: string) => {
    const iconProps = { className: "w-4 h-4" };

    switch (name) {
      case "Instagram":
        return <FaInstagram {...iconProps} />;
      case "Twitter":
        return <FaTwitter {...iconProps} />;
      case "Snapchat":
        return <FaSnapchat {...iconProps} />;
      case "TikTok":
        return <FaTiktok {...iconProps} />;
      case "Facebook":
        return <FaFacebook {...iconProps} />;
      case "LinkedIn":
        return <FaLinkedin {...iconProps} />;
      case "YouTube":
        return <FaYoutube {...iconProps} />;
      case "WhatsApp":
        return <FaWhatsapp {...iconProps} />;
      default:
        return null;
    }
  };

  const socialLinks = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/littleleaders.sa/",
    },
    {
      name: "Twitter",
      url: "https://x.com/littleleadersa_",
    },
    {
      name: "Snapchat",
      url: "https://www.snapchat.com/add/littleleaderssa",
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@littleleaders.sa",
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/profile.php?id=61581648540324",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/little-leaders-center-%D9%85%D8%B1%D9%83%D8%B2-%D9%84%D9%8A%D8%AA%D9%84-%D9%84%D9%8A%D8%AF%D8%B1%D8%B2/",
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/@LittleLeaderssa",
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/966537468887",
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
                  <FaCalendarAlt className="mr-2 rtl:mr-0 rtl:ml-2 flex-shrink-0 w-5 h-5 text-royal-blue mt-0.5" />
                  <div>
                    <p className="text-royal-blue font-semibold mb-1">
                      {current.days}
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FaClock className="mr-2 rtl:mr-0 rtl:ml-2 flex-shrink-0 w-5 h-5 text-royal-blue mt-0.5" />
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
                  <FaClock className="mr-2 rtl:mr-0 rtl:ml-2 flex-shrink-0 w-5 h-5 text-royal-blue mt-0.5" />
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
                  <FaMapMarkerAlt className="mr-2 rtl:mr-0 rtl:ml-2 flex-shrink-0 w-5 h-5 text-royal-blue mt-0.5" />
                  <a
                    href="https://maps.app.goo.gl/VvZknuihdmJTE3QLA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-royal-blue/90 hover:text-royal-blue transition-colors cursor-pointer no-underline"
                  >
                    {current.address}
                  </a>
                </li>
                <li className="flex items-center">
                  <FaPhone className="mr-2 rtl:mr-0 rtl:ml-2 flex-shrink-0 w-5 h-5 text-royal-blue" />
                  <a
                    href={`tel:${current.phone}`}
                    className="text-royal-blue/90 hover:text-royal-blue transition-colors cursor-pointer no-underline"
                    dir="ltr"
                  >
                    {current.phone}
                  </a>
                </li>
                <li className="flex items-center">
                  <FaEnvelope className="mr-2 rtl:mr-0 rtl:ml-2 flex-shrink-0 w-5 h-5 text-royal-blue" />
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
                    className="w-8 h-8 bg-[#e68b8d] rounded-full flex items-center justify-center hover:bg-pink hover:text-white transition-all duration-300 cursor-pointer"
                    aria-label={social.name}
                  >
                    {getSocialIcon(social.name)}
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
