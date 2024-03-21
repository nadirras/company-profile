"use client";
import React, { useState, useEffect, ReactNode } from "react";
import { IProduct } from "@/type/type";
import FetchProduct, {
  fetchDataFromFirestore,
  fetchProductById,
} from "@/components/product-partial/FetchProduct";
import Link from "next/link";
import Loading from "@/app/loading";

export const revalidate = 3600;

export const generateStaticParams = async () => {
  const products = await fetchDataFromFirestore();

  return products.map((product: any) => ({
    params: {
      id: product.id,
    },
  }));
};

export async function generateMetadata({ params }: { params: { id: string } }) {
  const products = await fetchProductById(params.id);

  return {
    title: products.title,
  };
}

export default function ProductDetails({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<{
    [x: string]: ReactNode;
    id: string;
    title: string;
  } | null>(null);

  useEffect(() => {
    async function fetchData() {
      const productData = await fetchProductById(params.id);
      setProduct(productData);
    }
    fetchData();
  }, [params.id]);

  if (!product) {
    return <Loading />;
  }

  return (
    <div className="h-[50rem] max-md:h-[55rem] max-sm:h-[60rem] ">
      <div className="flex flex-col items-center">
        <div
          className="pt-[5rem] max-w-[50rem] max-md:max-w-[40rem]"
          id="health"
        >
          <div className="text-xl font-bold text-center">{product.title}</div>
          <div className=" px-[10rem] max-md:px-[5rem] max-sm:px-[3rem] text-justify">
            {product.content}
          </div>
          <div className="card-actions justify-center mt-3">
            <a href="#" className="btn btn-primary">
              Book Now
            </a>
          </div>
          <Link
            href={"/products"}
            className="btn btn-sm md:btn-md gap-2 lg:gap-3 mt-3"
          >
            <svg
              className="h-6 w-6 fill-current md:h-8 md:w-8"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"></path>
            </svg>{" "}
            <div className="flex flex-col items-start">
              <span className="text-base-content/50 hidden text-xs font-normal md:block">
                Prev
              </span>{" "}
              <span>Products</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
