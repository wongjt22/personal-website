import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import Header from "@/components/header";

const HongKong = localFont({
  src: "./fonts/Fontspring-DEMO-hongkong-regular.otf",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Jackson Wong",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${HongKong.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
