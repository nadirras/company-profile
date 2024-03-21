import React from "react";

export default function Hero({ id }: any) {
  return (
    <div id={id}>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: "url(/lab_hero_enhanced.png)" }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-left text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              Empowering Better Healthcare Systems, Together!
            </h1>
            <p>
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
