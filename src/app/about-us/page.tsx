import CompanyHistory from "@/components/about-partial/CompanyHistory";
import Team from "@/components/about-partial/Team";
import React, { Suspense } from "react";
import { Metadata } from "next";

import Loading from "./loading";

export const metadata: Metadata = {
  title: "About Us",
};

export default function AboutUs() {
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  return (
    <Suspense fallback={<Loading />}>
      <div className="pt-[6rem]">
        <h1
          className="text-5xl font-extrabold max-md:text-4xl max-sm:text-3xl text-center"
          data-aos="fade-down"
        >
          About Us
        </h1>
        <CompanyHistory />
        <Team />
      </div>
    </Suspense>
  );
}
