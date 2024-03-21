// import CompanyHistory from "@/components/about-partial/CompanyHistory";
// import Team from "@/components/about-partial/Team";
import React from "react";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import Loading from "../loading";

export const metadata: Metadata = {
  title: "About Us",
};

const CompanyHistory = dynamic(
  () => import("@/components/about-partial/CompanyHistory"),
  {
    ssr: false,
    loading: () => <Loading />,
  }
);

const Team = dynamic(() => import("@/components/about-partial/Team"), {
  ssr: false,
  loading: () => <Loading />,
});

export default function AboutUs() {
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  return (
    <div className="pt-[6rem]">
      <h1 className="text-3xl font-bold text-center">About Us</h1>
      <CompanyHistory />
      <Team />
    </div>
  );
}
