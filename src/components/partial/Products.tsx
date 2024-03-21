import React from "react";
import Link from "next/link";

export default function Products() {
  return (
    <div className="mt-5 bg-neutral p-5">
      <h1 className="text-3xl font-bold text-center mb-5 text-base-100">
        Products and Services
      </h1>
      <div className="flex flex-row flex-wrap justify-center items-center gap-3">
        {/* Card 1 */}
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Medical Consultation</h2>
            <p>
              Access expert medical advice and personalized treatment plans
              tailored to your unique needs.
            </p>
            <div className="card-actions justify-end">
              {/* <a href="#medical" className="btn btn-primary">
                Learn More
              </a> */}
              <Link className="btn btn-primary" href="/products/medical">
                Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Health Screening</h2>
            <p>
              Stay proactive about your health with comprehensive health
              screenings and diagnostic tests.
            </p>
            <div className="card-actions justify-end">
              {/* <a href="#health" className="btn btn-primary">
                Learn More
              </a> */}
              <Link className="btn btn-primary" href="/products/health">
                Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Telemedicine</h2>
            <p>
              Connect with healthcare professionals remotely for convenient and
              accessible medical consultations.
            </p>
            <div className="card-actions justify-end">
              {/* <a href="#telemedicine" className="btn btn-primary">
                Learn More
              </a> */}
              <Link className="btn btn-primary" href="/products/telemedicine">
                Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Wellness Program</h2>
            <p>
              Designed to promote holistic health, including nutrition
              counseling and fitness classes.
            </p>
            <div className="card-actions justify-end">
              {/* <a href="#wellness" className="btn btn-primary">
                Learn More
              </a> */}

              <Link className="btn btn-primary" href="/products/wellness">
                Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* Card 5 */}
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Research Collaboration</h2>
            <p>
              Join us for research collaboration in Healthcare Research for
              students or researchers.
            </p>
            <div className="card-actions justify-end">
              {/* <a href="#research" className="btn btn-primary">
                Learn More
              </a> */}
              <Link className="btn btn-primary" href="/products/research">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
