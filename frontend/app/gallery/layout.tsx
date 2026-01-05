import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "معرض الصور - Photo Gallery",
  description: "اكتشف لحظات النمو والإبداع والفرح في مركز ليتل ليدرز - معرض صور المرافق والفعاليات. Discover moments of growth, creativity, and joy at Little Leaders Center - photo gallery of facilities and events.",
  keywords: "معرض الصور، صور المركز، المرافق، الفعاليات، photo gallery, facilities, events, pictures",
  openGraph: {
    title: "معرض الصور - Photo Gallery | مركز ليتل ليدرز",
    description: "اكتشف لحظات النمو والإبداع والفرح في مركز ليتل ليدرز",
    type: "website",
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

