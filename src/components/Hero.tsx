import React from "react";

export default function Hero({ id }: any) {
  return (
    <div id={id}>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: "url(/dna.webp)" }}
      >
        <div className="hero-overlay bg-opacity-[70%]"></div>
        <div className="hero-content text-left text-base-100">
          <div className="max-w-md">
            <h1 className="mb-4 text-3xl font-extrabold text-customPrimary md:text-5xl lg:text-6xl customFont [text-shadow:1px_1px_2px_var(--tw-shadow-color)] shadow-gray-700">
              Empowering Better Healthcare Systems, Together!
            </h1>
            <p className="font-bold ">
              Our mission is to advance healthcare through cutting-edge
              technology, research, and unwavering dedication to improving lives
              worldwide.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
