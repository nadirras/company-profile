import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="footer footer-center p-10 bg-primary text-primary-content">
        <aside>
          <img
            src="../../company_logo.png"
            alt="mangroveshield-logo"
            className="w-[2rem] h-[2rem]"
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
