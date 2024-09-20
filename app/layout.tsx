import type { Metadata } from "next";
import Header from "./components/Header";

export const metadata: Metadata = {
  title: "Jackson Wong",
  description: "Personal information and projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
