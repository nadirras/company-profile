"use client";
import React, { useContext, useEffect, useState } from "react";
import ThemeController from "./ThemeController";

import Link from "next/link";
import Hero from "./Hero";
import { usePathname } from "next/navigation";

const navLink = [
  {
    name: "Home",
    href: "/",
  },
  { name: "Blog", href: "/blog" },
  { name: "Products", href: "/products" },
  { name: "About Us", href: "/about-us" },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <div>
      <div className="fixed top-0 left-0 right-0 z-10">
        <div className="navbar bg-base-100 bg-opacity-75 w-screen">
          <div className="flex-1">
            <Link href="/" className="btn btn-ghost text-xl">
              <img
                src="../../company_logo.png"
                alt="mangroveshield-logo"
                className="w-[2rem] h-auto"
              />
              MS Corp.
            </Link>
          </div>
          <div className="flex-none">
            <div className="menu menu-horizontal px-1 flex flex-row gap-3  items-center">
              {navLink.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <Link
                    href={link.href}
                    key={link.name}
                    className={
                      isActive
                        ? "max-md:hidden font-bold bg-base-300 p-2 rounded-lg"
                        : "max-md:hidden font-bold p-2"
                    }
                  >
                    {link.name}
                  </Link>
                );
              })}
              {/* <Link href="/" className="max-md:hidden font-bold">
                Home
              </Link>
              <Link href="/blog" className="max-md:hidden font-bold">
                Blog
              </Link>
              <Link href="/products" className="max-md:hidden font-bold">
                Products
              </Link>
              <Link href="/about-us" className="max-md:hidden font-bold">
                About Us
              </Link> */}
              <div className="flex items-center">
                <ThemeController />

                <div className="drawer drawer-end max-w-[5rem] md:hidden">
                  <input
                    id="my-drawer-4"
                    type="checkbox"
                    className="drawer-toggle"
                  />
                  <div className="drawer-content">
                    {/* Page content here */}
                    <label
                      htmlFor="my-drawer-4"
                      className="drawer-button btn btn-primary bg-transparent border-none"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="inline-block w-5 h-5 stroke-current"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 6h16M4 12h16M4 18h16"
                        ></path>
                      </svg>
                    </label>
                  </div>
                  <div className="drawer-side">
                    <label
                      htmlFor="my-drawer-4"
                      aria-label="close sidebar"
                      className="drawer-overlay"
                    ></label>
                    <div className="menu p-4 w-70 min-h-full bg-base-200 text-base-content">
                      {/* Sidebar content here */}
                      {navLink.map((link) => {
                        const isActive = pathname === link.href;

                        return (
                          <Link
                            href={link.href}
                            key={link.name}
                            className={
                              isActive ? " bg-base-300 p-2 rounded-lg" : " p-2"
                            }
                          >
                            {link.name}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
