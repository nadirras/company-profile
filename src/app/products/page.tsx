// import ResearchHighlight from "@/components/product-partial/ResearchHighlight";

import React, { Suspense } from "react";
import { Metadata } from "next";
import FetchProduct from "@/components/product-partial/FetchProduct";
import Loading from "./loading";

export const metadata: Metadata = {
  title: "Products",
};

export default function ProductsPage() {
  return (
    <Suspense fallback={<Loading />}>
      <div className="pt-[6rem]">
        <h1
          className="text-5xl font-extrabold text-center max-md:text-4xl max-sm:text-3xl"
          data-aos="fade-down"
        >
          Products and Services
        </h1>
        <p className="text-center mt-3" data-aos="fade-down">
          We have various products and services that beneficial for your health.
        </p>

        <FetchProduct />

        {/* <ResearchHighlight /> */}
      </div>
    </Suspense>
  );
}
