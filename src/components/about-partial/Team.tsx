import React from "react";
import Link from "next/link";

export default function Team() {
  return (
    <div className="mt-3 mr-5 ml-5 mb-3 rounded-3xl p-5 bg-neutral overflow-x-hidden">
      <h1
        className="text-4xl font-extrabold text-base-100 text-center mb-5 max-md:text-3xl max-sm:text-2xl"
        data-aos="fade-left"
      >
        Our Teams
      </h1>
      <div className="flex flex-col flex-wrap justify-center items-center gap-2">
        {/* CEO */}
        <div className="grid md:grid-cols-2">
          <div
            className="card max-w-[40rem] bg-base-100 shadow-xl"
            data-aos="fade-right"
          >
            <div className="flex items-center ml-3">
              {/* Avatar */}
              <div className="avatar placeholder max-sm:hidden">
                <div className="bg-neutral  h-[5rem] w-[5rem] rounded-full">
                  <span className="text-xl text-base-100">CEO</span>
                </div>
              </div>
              {/* Brief Profile */}

              <div className="card-body">
                <h2 className="card-title">Ethan Mangroveshield</h2>
                <p>
                  Dr. Ethan Mangroveshield brings over two decades of experience
                  in healthcare management and strategic leadership. With a
                  background in medicine and a passion for innovation, he leads
                  MS Corp. with a vision to revolutionize the healthcare
                  industry and improve patient outcomes.
                </p>
              </div>
            </div>
          </div>
          <span className="text-red max-md:hidden"></span>
        </div>

        {/* COO */}
        <div className="grid md:grid-cols-2">
          <span className="text-red max-md:hidden"></span>
          <div
            className="card max-w-[40rem] bg-base-100 shadow-xl"
            data-aos="fade-left"
          >
            <div className="flex items-center ml-3">
              {/* Avatar */}
              <div className="avatar placeholder max-sm:hidden">
                <div className="bg-neutral  h-[5rem] w-[5rem] rounded-full">
                  <span className="text-xl text-base-100">COO</span>
                </div>
              </div>
              {/* Brief Profile */}

              <div className="card-body">
                <h2 className="card-title">Lingga Putera Anugrah</h2>
                <p>
                  {`As the COO of MS Corp., Lingga Putera Anugrah oversees the company's day-to-day operations and strategic initiatives. With a strong background in business administration and operations management, he is committed to driving operational excellence and ensuring the efficient delivery of services.`}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CMO */}
        <div className="grid md:grid-cols-2">
          <div
            className="card max-w-[40rem] bg-base-100 shadow-xl"
            data-aos="fade-right"
          >
            <div className="flex items-center ml-3">
              {/* Avatar */}
              <div className="avatar placeholder max-sm:hidden">
                <div className="bg-neutral  h-[5rem] w-[5rem] rounded-full">
                  <span className="text-xl text-base-100">CMO</span>
                </div>
              </div>
              {/* Brief Profile */}

              <div className="card-body">
                <h2 className="card-title">Dr. Emily Chen</h2>
                <p>
                  {`Dr. Chen is a seasoned physician with extensive clinical experience and a deep understanding of healthcare delivery systems. As the CMO of MS Corp., she plays a pivotal role in ensuring the quality and safety of medical services provided by the company, as well as driving initiatives to enhance patient care.`}
                </p>
              </div>
            </div>
          </div>
          <span className="text-red max-md:hidden"></span>
        </div>

        {/* CTO */}
        <div className="grid md:grid-cols-2">
          <span className="text-red max-md:hidden"></span>
          <div
            className="card max-w-[40rem] bg-base-100 shadow-xl"
            data-aos="fade-left"
          >
            <div className="flex items-center ml-3">
              {/* Avatar */}
              <div className="avatar placeholder max-sm:hidden">
                <div className="bg-neutral  h-[5rem] w-[5rem] rounded-full">
                  <span className="text-xl text-base-100">CTO</span>
                </div>
              </div>
              {/* Brief Profile */}

              <div className="card-body">
                <h2 className="card-title">Rembang Baskara</h2>
                <p>
                  {`With a background in computer science and technology development, Rembang Baskara leads the technological innovations at MS Corp. as the CTO. He is responsible for driving the company's digital transformation initiatives, leveraging cutting-edge technologies to improve healthcare delivery and patient experiences.`}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CFO */}
        <div className="grid md:grid-cols-2">
          <div
            className="card max-w-[40rem] bg-base-100 shadow-xl"
            data-aos="fade-right"
          >
            <div className="flex items-center ml-3">
              {/* Avatar */}
              <div className="avatar placeholder max-sm:hidden">
                <div className="bg-neutral  h-[5rem] w-[5rem] rounded-full">
                  <span className="text-xl text-base-100">CFO</span>
                </div>
              </div>
              {/* Brief Profile */}

              <div className="card-body">
                <h2 className="card-title">Pia Indah Melati</h2>
                <p>
                  {`As the CFO of MS Corp., Pia Indah Melati oversees the company's financial operations and strategic financial planning. With a wealth of experience in finance and accounting, she plays a key role in ensuring the financial stability and growth of the organization.`}
                </p>
              </div>
            </div>
          </div>
          <span className="text-red max-md:hidden"></span>
        </div>
        {/* <button className="btn btn-primary mt-5">Other Teams</button> */}
      </div>
    </div>
  );
}
