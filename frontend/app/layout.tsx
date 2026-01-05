import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Little Leaders - Crafting Tomorrow's Leaders",
  description: "Little Leaders Center in Jeddah - Where tomorrow's leaders are made",
  keywords: "daycare, nursery, Jeddah, early childhood education, Little Leaders",
  authors: [{ name: "Little Leaders Center" }],
  openGraph: {
    title: "Little Leaders - Crafting Tomorrow's Leaders",
    description: "Little Leaders Center in Jeddah - Where tomorrow's leaders are made",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&display=swap" 
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

