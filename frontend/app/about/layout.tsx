import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "من نحن - About Us",
  description: "تعرف على مركز ليتل ليدرز في جدة - رؤيتنا، رسالتنا، قيمنا، وفريقنا المؤهل. أكثر من 30 عامًا من الخبرة في رعاية وتعليم الأطفال. Learn about Little Leaders Center in Jeddah - our vision, mission, values, and qualified team. Over 30 years of experience in child care and education.",
  keywords: "من نحن، مركز ليتل ليدرز، رؤية المركز، رسالة المركز، قيم المركز، فريق ليتل ليدرز، about us, Little Leaders, vision, mission, values, team",
  openGraph: {
    title: "من نحن - About Us | مركز ليتل ليدرز",
    description: "تعرف على مركز ليتل ليدرز في جدة - رؤيتنا، رسالتنا، قيمنا، وفريقنا المؤهل",
    type: "website",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

