import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jin Sanghwi - Portfolio",
  description: "진상휘의 개발 포트폴리오",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${geistSans.variable} ${geistMono.variable} bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100`}>
        <div className="min-h-screen flex flex-col">
          {/* 헤더 */}
          <Header />
          {/* 메인 콘텐츠 영역 */}
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
