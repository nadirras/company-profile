import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface LayoutProps {
  children: React.ReactNode;
  // Add any other props you want to pass to the Navbar
  //   heroId?: string;
}

export default function Template({ children }: LayoutProps) {
  return (
    <div>
      <Navbar />

      {children}
      <Footer />
    </div>
  );
}
