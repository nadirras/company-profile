import React from "react";

export default function ResearchHighlight() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-center mb-3">
        Research Highlight
      </h2>
      <div className="flex flex-wrap gap-2 mb-5 justify-center items-center">
        {/* Virus */}
        <div>
          <img src="../../virus2(1).png" className="h-64 w-64 object-cover" />
          {/* <Image
            src="/virus2(1).png"
            width={300}
            height={300}
            className="object-cover rounded-xl"
            alt="virus"
          /> */}
          <figcaption className="z-10 mt-4 text-sm italic text-neutral text-center">
            Virus Research
          </figcaption>
        </div>

        {/* Prosthetic Hand */}
        <div>
          <img
            src="../../prosthetic-hand.jpg"
            className="h-64 w-64 object-cover"
          />
          {/* <Image
            src="/prosthetic-hand.jpg"
            width={300}
            height={300}
            className="object-cover rounded-xl"
            alt="pros-hand"
          /> */}
          <figcaption className="z-10 mt-4 text-sm italic text-neutral text-center">
            Prosthetic Hand
          </figcaption>
        </div>

        {/* Lab */}
        <div>
          <img
            src="../../lab-equipment.jpg"
            className="h-64 w-64 object-cover"
          />
          {/* <Image
            src="/lab-equipment.jpg"
            width={300}
            height={300}
            className="object-cover rounded-xl"
            alt="lab"
          /> */}
          <figcaption className="z-10 mt-4 text-sm italic text-neutral text-center">
            Lab Equipment
          </figcaption>
        </div>

        {/* Cancer Research */}
        <div>
          <img
            src="../../cancer-research.jpg"
            className="h-64 w-64 object-cover"
          />

          {/* <Image
            src="/cancer-research.jpg"
            width={300}
            height={300}
            className="object-cover rounded-xl"
            alt="cancer"
          /> */}
          <figcaption className="z-10 mt-4 text-sm italic text-neutral text-center">
            Cancer Research
          </figcaption>
        </div>
      </div>
    </div>
  );
}
