import React, { Suspense } from "react";
import Hero from "@/components/Hero";
import CompanyOverview from "@/components/partial/CompanyOverview";
import Products from "@/components/partial/Products";
import Testimonials from "@/components/partial/Testimonials";
import Loading from "./loading";
import dynamic from "next/dynamic";

export default function HomePage() {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <Hero />
        <CompanyOverview />
        <Products />
        <Testimonials />
      </Suspense>
    </div>
  );
}
