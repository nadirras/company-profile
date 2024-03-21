import ProductDetails from "@/components/product-partial/ProductsDetails";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Details",
};

export default function ProductCardDetails({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div>
      <ProductDetails params={params} />
    </div>
  );
}
