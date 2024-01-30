import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { WEB_DESCRIPTION, WEB_TITLE } from "@/constant";

const poppins = Poppins({ weight: ["200", "300", "400", "500", "600"], subsets: ['latin'] });

export const metadata: Metadata = {
  title: WEB_TITLE,
  description: WEB_DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
