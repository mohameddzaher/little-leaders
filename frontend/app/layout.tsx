import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://little-leaders.org"),
  title: {
    default: "مركز ليتل ليدرز - Little Leaders Center | حضانة جدة | رعاية وتعليم الأطفال",
    template: "%s | مركز ليتل ليدرز"
  },
  description: "مركز ليتل ليدرز في جدة - حضانة متميزة تقدم رعاية وتعليم عالي الجودة للأطفال من 3 أشهر إلى 10 سنوات. برامج تعليمية متخصصة، فريق مؤهل، وبيئة آمنة ومحفزة. Little Leaders Center in Jeddah - Premium daycare offering high-quality care and education for children aged 3 months to 10 years.",
  keywords: [
    "حضانة جدة",
    "روضة أطفال جدة",
    "مركز ليتل ليدرز",
    "رعاية أطفال جدة",
    "تعليم مبكر جدة",
    "حضانة الزهراء",
    "daycare Jeddah",
    "nursery Jeddah",
    "Little Leaders Center",
    "early childhood education",
    "preschool Jeddah",
    "childcare Jeddah",
    "Al Zahra daycare",
    "رياض أطفال",
    "رعاية أطفال",
    "تعليم الطفولة المبكرة"
  ],
  authors: [{ name: "Little Leaders Center", url: "https://little-leaders.org" }],
  creator: "Little Leaders Center",
  publisher: "Little Leaders Center",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "ar_SA",
    alternateLocale: "en_US",
    url: "https://little-leaders.org",
    siteName: "Little Leaders Center - مركز ليتل ليدرز",
    title: "مركز ليتل ليدرز - Little Leaders Center | حضانة جدة المتميزة",
    description: "مركز ليتل ليدرز في جدة - حضانة متميزة تقدم رعاية وتعليم عالي الجودة للأطفال. برامج تعليمية متخصصة، فريق مؤهل، وبيئة آمنة ومحفزة.",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Little Leaders Center Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "مركز ليتل ليدرز - Little Leaders Center",
    description: "حضانة متميزة في جدة تقدم رعاية وتعليم عالي الجودة للأطفال",
    images: ["/images/logo.png"],
  },
  alternates: {
    canonical: "https://little-leaders.org",
    languages: {
      "ar": "https://little-leaders.org",
      "en": "https://little-leaders.org",
    },
  },
  verification: {
    // يمكن إضافة Google Search Console verification code هنا لاحقاً
  },
  category: "Education",
  classification: "Daycare and Early Childhood Education",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&display=swap" 
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0a274b" />
        <meta name="geo.region" content="SA-02" />
        <meta name="geo.placename" content="Jeddah" />
        <meta name="geo.position" content="21.4858;39.1925" />
        <meta name="ICBM" content="21.4858, 39.1925" />
        <meta name="contact" content="info@little-leaders.org" />
        <meta name="phone" content="+966537468887" />
        <meta name="address" content="حي الزهراء - شارع السديري، جدة، السعودية" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "Little Leaders Center - مركز ليتل ليدرز",
              "alternateName": "مركز ليتل ليدرز",
              "url": "https://little-leaders.org",
              "logo": "https://little-leaders.org/images/logo.png",
              "description": "مركز ليتل ليدرز في جدة - حضانة متميزة تقدم رعاية وتعليم عالي الجودة للأطفال من 3 أشهر إلى 10 سنوات",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "حي الزهراء - شارع السديري",
                "addressLocality": "جدة",
                "addressRegion": "مكة المكرمة",
                "postalCode": "23521",
                "addressCountry": "SA"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+966537468887",
                "contactType": "customer service",
                "email": "info@little-leaders.org",
                "availableLanguage": ["Arabic", "English"]
              },
              "sameAs": [
                "https://www.instagram.com/littleleaders.sa/",
                "https://x.com/littleleadersa_",
                "https://www.facebook.com/profile.php?id=61581648540324",
                "https://www.linkedin.com/company/little-leaders-center",
                "https://www.youtube.com/@LittleLeaderssa",
                "https://www.tiktok.com/@littleleaders.sa",
                "https://www.snapchat.com/add/littleleaderssa"
              ],
              "areaServed": {
                "@type": "City",
                "name": "Jeddah"
              },
              "educationalCredentialAwarded": "Early Childhood Education",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Educational Programs",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Course",
                      "name": "مرحلة الرعاية - Care Stage",
                      "description": "رعاية للأطفال من 3 أشهر إلى سنتين"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Course",
                      "name": "مرحلة الطفولة المبكرة - Early Childhood Stage",
                      "description": "تعليم للأطفال من 3 سنوات إلى 5 سنوات"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Course",
                      "name": "البرنامج الإضافي - After School Program",
                      "description": "أنشطة ما بعد المدرسة للأطفال من 3 أشهر إلى 10 سنوات"
                    }
                  }
                ]
              }
            }),
          }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

