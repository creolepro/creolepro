"use client";

import React from "react";

import {
  PanelsTopLeft,
  FileText,
  ScrollText,
  StickyNote,
  BookCheck,
  NotebookPen,
} from "lucide-react";

export function ClientSolutions() {
  const solutions = [
    {
      name: "Document Translation",
      description:
        "Our document translation services are tailored to our clients’ requirements in the healthcare, legal and educational sector. Count on us for the translation of your discharge summaries, patient education materials, consent forms, parent communication, special education documents, training, legal correspondence to break the language barriers with the Haitian Creole speakers.",
      icon: FileText,
    },
    {
      name: "Website Translation & Localization",
      description:
        "Our language services will enable you to usher your organization’s reach within the Haitian Communities. Our project managers will ensure your website content is accurately translated and culturally adapted. With Creolepro localization services your website, software, application, multimedia content engaging and resonating translation tailored to your requirements and the Haitian Creole audience.",
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
    {
      name: "Language Testing",
      description:
        "Creolepro offers comprehensive language testing solutions to evaluate the language skills of your team members or potential candidates. Whether you need testing for translation, interpretation, or other language-related roles, we provide reliable and standardized Haitian Creole assessments to support your hiring and training decisions. We offer Language Testing Services based on the Interagency Language Roundtable (ILR) scale, a widely recognized and respected framework for assessing language proficiency.",
      icon: BookCheck,
    },
    {
      name: "Language Training",
      description:
        "We offer customized language training programs to enhance the language skills of your Limited English Proficiency (LEP) Haitian Creole speaking team members. Our trainers will gather your requirements and train your staff to address specific language challenges enabling them to understand their duties and communicate more effectively. We deliver the training sessions in person, by phone, and online, removing the need for travel and reducing missed work time.",
      icon: NotebookPen,
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
          At Creolepro, our client-centric approach involves understanding your
          distinct requirements, objectives, and brand identity to provide
          tailored solutions aligned with your vision. Our commitment to
          meticulous care and confidentiality ensures your projects are in
          trusted hands.
        </p>
      </div>
      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          {solutions.map((feature) => (
            <div key={feature.name} className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-white border border-gray-300">
                  <feature.icon
                    className="h-5 w-5 text-gray-900"
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
