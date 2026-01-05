import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "الأقسام والبرامج - Programs & Sections",
  description: "برامج مركز ليتل ليدرز التعليمية - مرحلة الرعاية (3 أشهر - سنتين)، مرحلة الطفولة المبكرة (3-5 سنوات)، البرنامج الإضافي (3 أشهر - 10 سنوات). أسعار وتفاصيل البرامج. Little Leaders Center educational programs - Care Stage (3 months - 2 years), Early Childhood Stage (3-5 years), After School Program (3 months - 10 years). Prices and program details.",
  keywords: "الأقسام، البرامج، مرحلة الرعاية، مرحلة الطفولة المبكرة، البرنامج الإضافي، الأسعار، programs, sections, care stage, early childhood, after school, prices",
  openGraph: {
    title: "الأقسام والبرامج - Programs & Sections | مركز ليتل ليدرز",
    description: "برامج مركز ليتل ليدرز التعليمية - مرحلة الرعاية، مرحلة الطفولة المبكرة، البرنامج الإضافي",
    type: "website",
  },
};

export default function SectionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

