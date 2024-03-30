"use client";

import React from "react";

import { PanelsTopLeft, FileText, ScrollText, StickyNote } from "lucide-react";

export function ClientSolutions() {
  const solutions = [
    {
      name: "Document Translation",
      description:
        "Our document translation services are tailored to our clients’ requirements in the healthcare, legal and educational sector. Count on us for the translation of your discharge summaries, patient education materials, consent forms, parent communication, special education documents, training, legal correspondence to break the language barriers with the Haitian Creole speakers.",
      icon: FileText,
    },
    {
      name: "Website Translation",
      description:
        "We help businesses expand their global reach by providing website translation services, ensuring that their website content is accurately translated into the target language, and resonates with the target audience.",
      icon: PanelsTopLeft,
    },
    {
      name: "Marketing Translation",
      description:
        "Our marketing translation services ensure that your marketing materials, including brochures, ads, and flyers, are translated accurately and effectively, helping you reach a broader audience..",
      icon: StickyNote,
    },
    {
      name: "Technical Translation",
      description:
        "Our technical translation services ensure that your technical documents, including user manuals, product specifications, and technical reports, are translated accurately and effectively, ensuring that your message is clearly conveyed to your target audience.",
      icon: ScrollText,
    },
  ];

  return (
    <div
      id="client-solutions"
      className="mx-auto max-w-7xl px-6 py-12 mt-35 lg:px-8"
    >
      <div className="mx-auto max-w-2xl lg:text-center">
        <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
          Client Solutions
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Our client-centric approach involves understanding your distinct
          requirements, objectives, and brand identity to provide tailored
          solutions aligned with your vision. Our commitment to meticulous care
          and confidentiality ensures your projects are in trusted hands.
        </p>
      </div>
      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          {solutions.map((feature) => (
            <div key={feature.name} className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-950">
                  <feature.icon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                    strokeWidth="1.5"
                  />
                </div>
                {feature.name}
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                {feature.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
