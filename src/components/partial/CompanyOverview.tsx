import Image from "next/image";
import React from "react";

export default function CompanyOverview() {
  return (
    <div>
      <div className="bg-neutral p-[5rem] rounded-b-[3rem]">
        <div className="flex text-center justify-center">
          <div className="w-6/12 lg:w-8/12 xl:w-7/12 ml-0">
            <h1 className="text-3xl font-bold text-base-100">
              Introducing, MS Corp. #1 Best Healthcare Company in Indonesia.
            </h1>
          </div>
        </div>
      </div>

      {/* <div className="absolute bg-primary w-full h-screen z-0 rounded-t-r40 md:rounded-t-r64 lg:rounded-t-r96 top-[65rem]"></div> */}
      {/* Card Section */}
      <div className="flex flex-col justify-center items-center mt-3 gap-3 p-10">
        {/* Card 1 */}
        <div className="grid md:grid-cols-2 items-center">
          <div className="card w-96 bg-base-100 shadow-2xl">
            <div className="card-body">
              <h2 className="text-xs text-secondary font-bold tracking-[0.2rem]">
                COMPANY OVERVIEW
              </h2>
              <p>
                MS Corp. (Mangroveshield Corporation) is a leading conglomerate
                specializing in healthcare, biotechnology, and security
                solutions. Established with a vision to revolutionize the
                healthcare industry, Mangroveshield has grown to become a global
                leader in innovative medical technologies and services.
              </p>
            </div>
          </div>
          <span className="hidden overview">
            <img
              src="../../office2.png"
              className="max-h-[17rem] max-w-[23rem] ml-3 mr-3 object-cover rounded-lg"
            />
            {/* <Image
              src="/office2.png"
              width={400}
              height={400}
              alt="office of MS"
              className="object-cover rounded-lg"
            /> */}
          </span>
        </div>

        {/* Card 2 */}
        <div className="overview-container grid gap-3 items-center">
          <span
            className="hidden overview"
            // style={{ backgroundImage: "url(../history.jpg)" }}
          >
            <img
              src="../../history.jpg"
              className="max-h-[20rem] max-w-[23rem] object-cover rounded-lg ml-3"
            />
            {/* <Image
              src="/history.jpg"
              width={400}
              height={400}
              alt="history of MS"
              className="object-cover rounded-lg"
            /> */}
          </span>
          <div className="card w-96 bg-base-100 shadow-2xl">
            <div className="card-body">
              <h2 className="text-xs text-secondary font-bold tracking-[0.2rem]">
                COMPANY HISTORY
              </h2>
              <p>
                MS Corp. was founded in 2001 with a visionary mission to
                revolutionize the health industry. From its humble beginnings as
                a small startup, the company has grown into a leading force,
                consistently pioneering groundbreaking innovations. Throughout
                its journey, MS Corp. has achieved numerous milestones, shaping
                the landscape of healthcare and earning a reputation for
                excellence and innovation.
              </p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="grid md:grid-cols-2 items-center">
          <div className="card w-96 bg-base-100 shadow-2xl">
            <div className="card-body">
              <h2 className="text-xs text-secondary font-bold tracking-[0.2rem]">
                CULTURE
              </h2>
              <p>
                At MS Corp., our culture is built on a foundation of innovation,
                collaboration, and compassion. We believe in fostering a
                supportive and inclusive work environment where every team
                member is empowered to thrive and contribute their unique
                talents. Our values of integrity, excellence, and dedication
                guide us in everything we do, driving us to make a positive
                impact on the lives of individuals and communities worldwide.
              </p>
            </div>
          </div>
          <span className="hidden overview">
            <img
              src="../../biomed.jpg"
              className="max-h-[20rem] max-w-[23rem] ml-3 mr-3 object-cover rounded-lg"
            />
            {/* <Image
              src="/biomed.jpg"
              width={400}
              height={400}
              alt="colaboration"
              className="object-cover rounded-lg"
            /> */}
          </span>
        </div>
      </div>
    </div>
  );
}
