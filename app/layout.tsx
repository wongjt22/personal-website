import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import Header from "@/components/Header";

const HongKong = localFont({
  src: "./fonts/Fontspring-DEMO-hongkong-regular.otf",
  variable: "--font-hongkong",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Jackson Wong",
  description: "Personal Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // className={`${HongKong.className} bg-black100`}
        className={`bg-black100`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
