import React from "react";

export default function Testimonials() {
  return (
    <div className="mt-5 mb-5 p-5">
      <h1 className="text-3xl font-bold text-center mb-4">Testimonials</h1>
      <div className="flex flex-col gap-3 justify-center items-center">
        {/* Card 1 */}
        <div className="card max-w-[70rem] bg-base-100 shadow-xl">
          <div className="card-body">
            <p>
              {" "}
              {`"Mangroveshield has been instrumental in helping me manage my
            health effectively. Their telemedicine services have made it
            convenient for me to consult with doctors from the comfort of my
            home."`}{" "}
              -Sanny M., Writer
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card max-w-[70rem] bg-base-100 shadow-xl">
          <div className="card-body">
            <p>
              {`"I'm impressed by the professionalism and expertise of the
            Mangroveshield team. Their wellness programs have helped me adopt
            healthier habits and improve my overall quality of life."`}{" "}
              -Rony S., Office Worker
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
