import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "فريقنا - Our Team",
  description: "تعرف على فريق مركز ليتل ليدرز المؤهل والمحب - معلمات مؤهلات، إدارة محترفة، وطاقم داعم. أكثر من 30 عامًا من الخبرة في رعاية وتعليم الأطفال. Meet Little Leaders Center's qualified and caring team - qualified teachers, professional management, and supportive staff. Over 30 years of experience in child care and education.",
  keywords: "فريق المركز، المعلمات، الإدارة، طاقم المركز، our team, teachers, management, staff",
  openGraph: {
    title: "فريقنا - Our Team | مركز ليتل ليدرز",
    description: "تعرف على فريق مركز ليتل ليدرز المؤهل والمحب",
    type: "website",
  },
};

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

