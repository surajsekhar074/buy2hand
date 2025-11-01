import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AnimatedBackground from "@/components/AnimatedBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Buy2Hand",
  description: "Pre-Owned Mobile Store | Best Price | 4-Month Warranty",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} <body className="text-white bg-[#000] overflow-x-hidden relative">
`}
      >
        {/* Background animation behind everything */}
        <AnimatedBackground />

        {/* All page content above animation */}
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
