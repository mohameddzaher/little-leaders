import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "اتصل بنا - Contact Us",
  description: "تواصل مع مركز ليتل ليدرز في جدة - العنوان: حي الزهراء، شارع السديري. الهاتف: +966537468887 | البريد الإلكتروني: info@little-leaders.org. ساعات العمل: من الأحد إلى الخميس. Contact Little Leaders Center in Jeddah - Address: Al Zahra, Al Sudairy Street. Phone: +966537468887 | Email: info@little-leaders.org",
  keywords: "اتصل بنا، عنوان المركز، هاتف المركز، بريد المركز، موقع المركز، contact us, address, phone, email, location, map",
  openGraph: {
    title: "اتصل بنا - Contact Us | مركز ليتل ليدرز",
    description: "تواصل مع مركز ليتل ليدرز في جدة - العنوان، الهاتف، البريد الإلكتروني",
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


