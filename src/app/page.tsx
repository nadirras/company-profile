import React, { Suspense } from "react";
// import Hero from "@/components/Hero";
// import CompanyOverview from "@/components/partial/CompanyOverview";
// import Products from "@/components/partial/Products";
// import Testimonials from "@/components/partial/Testimonials";
import Loading from "./loading";
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@/components/Hero"), {
  ssr: false,
  loading: () => <Loading />,
});

const CompanyOverview = dynamic(
  () => import("@/components/partial/CompanyOverview"),
  {
    ssr: false,
    loading: () => <Loading />,
  }
);

const Products = dynamic(() => import("@/components/partial/Products"), {
  ssr: false,
  loading: () => <Loading />,
});

const Testimonials = dynamic(
  () => import("@/components/partial/Testimonials"),
  {
    ssr: false,
    loading: () => <Loading />,
  }
);

export default async function HomePage() {
  // await new Promise((resolve) => setTimeout(resolve, 2000));
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
