"use client";

import React, { useState } from "react";
import Image from "next/image";
import Loading from "@/app/products/loading";

export default function ResearchHighlight() {
  const [loaded, setLoaded] = useState(false);

  const handleImageLoad = () => {
    setLoaded(true);
  };
  return (
    <div data-aos="fade-up">
      <h1 className="text-5xl font-extrabold max-md:text-4xl max-sm:text-3xl text-center my-5">
        Documentation
      </h1>
      <h2 className="text-3xl font-bold text-center mb-3">
        Research Highlight
      </h2>
      <div className="flex flex-wrap gap-2 mb-5 justify-center items-center">
        {/* Virus */}
        <div>
          {/* <img src="../../virus2(1).png" className="h-64 w-64 object-cover" /> */}
          <figure className=" w-[16rem] h-[16rem] relative">
            {!loaded && <Loading />}
            <Image
              src="/virus2(1).webp"
              alt="virus"
              fill
              objectFit="cover"
              className=" rounded"
              loading="lazy"
              onLoad={handleImageLoad}
            />
          </figure>
          <figcaption className="z-10 mt-4 text-sm italic text-neutral text-center">
            Virus Research
          </figcaption>
        </div>

        {/* Prosthetic Hand */}
        <div>
          {/* <img
            src="../../prosthetic-hand.jpg"
            className="h-64 w-64 object-cover"
          /> */}
          <figure className=" w-[16rem] h-[16rem] relative">
            {!loaded && <Loading />}
            <Image
              src="/prosthetic-hand.webp"
              alt="prosthetic"
              fill
              objectFit="cover"
              className=" rounded"
              loading="lazy"
              onLoad={handleImageLoad}
            />
          </figure>
          <figcaption className="z-10 mt-4 text-sm italic text-neutral text-center">
            Prosthetic Hand
          </figcaption>
        </div>

        {/* Lab */}
        <div>
          {/* <img
            src="../../lab-equipment.jpg"
            className="h-64 w-64 object-cover"
          /> */}
          <figure className=" w-[16rem] h-[16rem] relative">
            {!loaded && <Loading />}
            <Image
              src="/lab-equipment.webp"
              alt="lab-equipment"
              fill
              objectFit="cover"
              className=" rounded"
              loading="lazy"
              onLoad={handleImageLoad}
            />
          </figure>
          <figcaption className="z-10 mt-4 text-sm italic text-neutral text-center">
            Lab Equipment
          </figcaption>
        </div>

        {/* Cancer Research */}
        <div>
          {/* <img
            src="../../cancer-research.jpg"
            className="h-64 w-64 object-cover"
          /> */}

          <figure className=" w-[16rem] h-[16rem] relative">
            {!loaded && <Loading />}
            <Image
              src="/cancer-research.webp"
              alt="cancer-research"
              fill
              objectFit="cover"
              className=" rounded"
              loading="lazy"
              onLoad={handleImageLoad}
            />
          </figure>
          <figcaption className="z-10 mt-4 text-sm italic text-neutral text-center">
            Cancer Research
          </figcaption>
        </div>
      </div>
    </div>
  );
}
