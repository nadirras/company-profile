import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <div>
      <footer className="footer footer-center p-10 bg-primary text-primary-content">
        <aside>
          {/* <img
            src="../../company_logo.png"
            alt="mangroveshield-logo"
            className="w-12 h-12"
          /> */}
          <Image
            src="/company_logo_11zon.png"
            width={50}
            height={50}
            alt="ms-logo"
            loading="lazy"
          />
          <p className="font-bold">
            MS Corp. <br />
            Providing reliable healthcare systems since 2001
          </p>
          <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </aside>
      </footer>
    </div>
  );
}
