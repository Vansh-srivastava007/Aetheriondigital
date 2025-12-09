import type { Metadata } from "next";
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
  title: "Modern Portfolio - Showcase Your Best Work",
  description: "A beautiful, modern portfolio website showcasing projects, services, and expertise with smooth animations and responsive design.",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  themeColor: "#0f051a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0f051a]`}
      >
        {children}
      </body>
    </html>
  );
}
