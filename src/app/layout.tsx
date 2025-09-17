import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const plexSans = IBM_Plex_Sans({
  weight: ['300', '400', '500', '600', '700'],
  variable: "--font-plex-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lina Pauline",
  description: "Creative producer, consultant, and builder. Helping frontier tech teams turn complex ideas into stories that build trust, attract support, and create momentum.",
  openGraph: {
    title: "Lina Pauline",
    description: "Creative producer, consultant, and builder. Helping frontier tech teams turn complex ideas into stories that build trust, attract support, and create momentum.",
    url: "https://linaventures.github.io/website/",
    siteName: "Lina Pauline",
    images: [
      {
        url: "https://linaventures.github.io/website/linapic.JPG",
        width: 5760,
        height: 3840,
        alt: "Lina Pauline",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lina Pauline",
    description: "Creative producer, consultant, and builder. Helping frontier tech teams turn complex ideas into stories that build trust, attract support, and create momentum.",
    images: ["https://linaventures.github.io/website/linapic.JPG"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plexSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
