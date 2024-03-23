"use client";
import { useState, useEffect } from "react";
import React from "react";
import { db } from "../../../firebase";
import {
  getDocs,
  getDoc,
  doc,
  collection,
  FirestoreError,
} from "firebase/firestore";
import Link from "next/link";
import Image from "next/image";
import Loading from "@/app/products/loading";

export async function fetchDataFromFirestore() {
  try {
    const querySnapshot = await getDocs(collection(db, "products"));

    const data: any = [];
    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() });
    });

    return data;
  } catch (error) {
    if (error instanceof FirestoreError) {
      console.error("Firestore error:", error.message);
    } else {
      console.error("Unexpected error:", error);
    }

    throw error;
  }
}

export async function fetchProductById(id: string) {
  try {
    const docRef = doc(db, "products", id);
    const docSnapshot = await getDoc(docRef);

    if (docSnapshot.exists()) {
      const productData = docSnapshot.data();
      return { id, title: productData.title, ...productData };
    } else {
      // Handle case where document does not exist
      throw new Error("Document not found");
    }
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    throw error;
  }
}

export default function FetchProduct() {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchDataFromFirestore();
      setProductData(data);
    }
    fetchData();
  }, []);
  // console.log(productData);

  const [loaded, setLoaded] = useState(false);

  const handleImageLoad = () => {
    setLoaded(true);
  };
  return (
    <div
      className="flex flex-wrap gap-3 mb-5 mx-7 justify-center items-center my-5 bg-neutral rounded-xl p-5"
      data-aos="fade-up"
    >
      {productData.map((product: any) => {
        return (
          <div
            className="card w-[25rem] bg-base-100 shadow-xl"
            key={product.id}
          >
            <div className="flex justify-center items-center py-3">
              <figure className=" w-[16rem] h-[16rem] relative">
                {!loaded && <Loading />}
                <Image
                  src={`${product.image}`}
                  alt={product.title}
                  fill
                  objectFit="cover"
                  className=" rounded"
                  // loading="lazy"
                  onLoad={handleImageLoad}
                />
              </figure>
            </div>
            <div className="card-body">
              <h2 className="card-title">{product.title}</h2>
              <p>Access more about {product.title}.</p>
              <div className="card-actions justify-end">
                <Link
                  href={`/products/${product.id}`}
                  className="btn btn-primary"
                >
                  See Details
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
