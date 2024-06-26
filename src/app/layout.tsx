import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Montserrat } from "next/font/google";

import "./globals.css";

import React from "react";
import { AOSInit } from "@/components/aos";

const inter = Inter({ subsets: ["latin"] });
const monserrat = Montserrat({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "MS Corp. | %s",
    default: "MS Corp.",
  },

  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // let {isDarkMode} = useContext(ThemeContext)

  return (
    <html lang="en">
      <AOSInit />
      <body className={inter.className}>
        <div>{children}</div>
      </body>
    </html>
  );
}

export const dynamic = "force-static";
