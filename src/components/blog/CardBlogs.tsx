"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Loading from "@/app/blog/loading";

interface IBlog {
  title: string;
  img: string;
  email: string;
  author: string;
  detail: string;
}

export const CardBlogs: React.FC<IBlog> = ({
  title,
  img,
  author,
  email,
  detail,
}) => {
  const [loaded, setLoaded] = useState(false);

  const handleImageLoad = () => {
    setLoaded(true);
  };
  return (
    <div>
      <div
        className="card w-[30rem] bg-base-100 shadow-xl border-2 border-secondary"
        data-aos="fade-down"
      >
        <div className="flex justify-center pt-3">
          <figure className=" w-[20rem] h-[20rem] relative">
            {!loaded && <Loading />}
            <Image
              src={`https:${img}`}
              alt={title}
              fill
              objectFit="cover"
              className=" rounded"
              loading="lazy"
              onLoad={handleImageLoad}
            />
          </figure>
        </div>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <div className="flex flex-col">
            <p>Author: {author}</p>
            <p>Email: {email}</p>
          </div>

          <div className="card-actions justify-end">
            <Link
              href={`/blog/${detail}`}
              className="inline-flex btn btn-primary"
            >
              Read more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardBlogs;
