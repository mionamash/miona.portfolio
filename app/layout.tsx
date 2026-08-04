import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://naomimacharia.dev"),
  title: {
    default: "Naomi Macharia | Junior Software Engineer",
    template: "%s | Naomi Macharia",
  },
  description:
    "Portfolio of Naomi Macharia — Junior Software Engineer specializing in full-stack and mobile development. Building scalable web and mobile applications that solve real-world problems.",
  keywords: [
    "Naomi Macharia",
    "Software Engineer",
    "Full-Stack Developer",
    "Mobile Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Naomi Macharia" }],
  creator: "Naomi Macharia",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://naomimacharia.dev",
    siteName: "Naomi Macharia Portfolio",
    title: "Naomi Macharia | Junior Software Engineer",
    description:
      "Portfolio of Naomi Macharia — Junior Software Engineer specializing in full-stack and mobile development.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Naomi Macharia Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Naomi Macharia | Junior Software Engineer",
    description:
      "Portfolio of Naomi Macharia — Junior Software Engineer specializing in full-stack and mobile development.",
    images: ["/og-image.png"],
  },
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
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B1120",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
