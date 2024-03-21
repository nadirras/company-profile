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
import { IProduct } from "@/type/type";

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
  console.log(productData);
  return (
    <div>
      {productData.map((product: any) => {
        return (
          <div
            key={product.id}
            className="flex flex-row flex-wrap justify-center items-center gap-3 mx-5 my-5"
          >
            <Link href={`/products/${product.id}`}>
              <div className="card w-96 bg-base-100 shadow-xl hover:bg-neutral hover:text-primary">
                <div className="card-body">
                  <h2 className="card-title">{product.title}</h2>
                  <p>Access more about {product.title}.</p>
                  <div className="card-actions justify-end"></div>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
