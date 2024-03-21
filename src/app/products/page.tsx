import ResearchHighlight from "@/components/product-partial/ResearchHighlight";

import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import FetchProduct from "@/components/product-partial/FetchProduct";

export const metadata: Metadata = {
  title: "Products",
};

export default function ProductsPage() {
  return (
    <div className="pt-[6rem]">
      <h1 className="text-3xl font-bold text-center">Products and Services</h1>
      <p className="text-center mt-3">
        We have various products and services that beneficial for your health.
      </p>

      <FetchProduct />

      <ResearchHighlight />
    </div>
  );
}
