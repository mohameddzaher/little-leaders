import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "الوظائف - Careers",
  description: "انضم إلى فريق مركز ليتل ليدرز - وظائف متاحة في التعليم، الرعاية، والإدارة. فرص عمل في حضانة جدة المتميزة. Join Little Leaders Center team - available positions in education, care, and administration. Job opportunities at Jeddah's premier daycare.",
  keywords: "الوظائف، التوظيف، فرص عمل، وظائف جدة، careers, jobs, employment, hiring",
  openGraph: {
    title: "الوظائف - Careers | مركز ليتل ليدرز",
    description: "انضم إلى فريق مركز ليتل ليدرز - وظائف متاحة في التعليم، الرعاية، والإدارة",
    type: "website",
  },
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

