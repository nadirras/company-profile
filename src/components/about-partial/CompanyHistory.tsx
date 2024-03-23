import Image from "next/image";
import React from "react";

export default function CompanyHistory() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center mt-2" data-aos="fade-up">
        Company Information
      </h1>
      <div className="flex flex-row max-md:flex-col flex-wrap justify-center items-center">
        <div className="card p-3 max-w-[50rem]" data-aos="fade-up">
          <div className="card-body">
            <h3 className="font-bold">Brief Information</h3>
            <ul className="list-disc">
              <li>Founded: 2001</li>
              <li>
                Headquarters: Mangroveshield Tower, Jalan Kebangsaan Raya No.
                120B, Kota Baru Cirangrang, Sileumpa Archipelago
              </li>
              <li>CEO: Ethan Mangroveshield</li>
              <li>Industry: Healthcare, Biotechnology, Security</li>
              <li>Employees: 10,000+</li>
            </ul>
          </div>
          <div className="card p-3 max-w-[50rem]" data-aos="fade-up">
            <h3 className="font-bold">Company History</h3>
            <p>
              MS Corp. was founded in 2001 with a visionary mission to
              revolutionize the health industry. From its humble beginnings as a
              small startup, the company has grown into a leading force,
              consistently pioneering groundbreaking innovations. Throughout its
              journey, Mangroveshield has achieved numerous milestones, shaping
              the landscape of healthcare and earning a reputation for
              excellence and innovation.
            </p>
          </div>

          <div className="card p-3 max-w-[50rem]" data-aos="fade-up">
            <h3 className="font-bold">Key Areas of Operation</h3>
            <ol className="list-decimal">
              <li>
                <strong>Biomedical Research</strong>: Mangroveshield leads the
                way in groundbreaking research and development initiatives aimed
                at combating diseases, improving medical diagnostics, and
                enhancing patient care.
              </li>
              <li>
                <strong>Medical Devices and Equipment</strong>: The company
                manufactures and distributes state-of-the-art medical devices
                and equipment, ranging from advanced imaging systems to surgical
                robotics, designed to meet the evolving needs of healthcare
                professionals and patients.
              </li>
              <li>
                <strong>Healthcare Services</strong>: Mangroveshield operates a
                network of cutting-edge healthcare facilities, including
                hospitals, clinics, and specialized treatment centers, providing
                comprehensive medical services and personalized care to patients
                worldwide.
              </li>
              <li>
                <strong>Biodefense and Security Solutions</strong>: Leveraging
                expertise in biotechnology and security, Mangroveshield offers
                innovative solutions for biodefense, biosecurity, and emergency
                preparedness, safeguarding communities and organizations against
                biological threats and hazards.
              </li>
            </ol>
          </div>

          <div className="card p-3 max-w-[50rem]" data-aos="fade-up">
            <h3 className="font-bold">Culture</h3>
            <p>
              At MS Corp., our culture is built on a foundation of innovation,
              collaboration, and compassion. We believe in fostering a
              supportive and inclusive work environment where every team member
              is empowered to thrive and contribute their unique talents. Our
              values of integrity, excellence, and dedication guide us in
              everything we do, driving us to make a positive impact on the
              lives of individuals and communities worldwide.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
