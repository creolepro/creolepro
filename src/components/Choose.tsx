import { CheckIcon } from "@heroicons/react/20/solid";

const features = [
  {
    name: "Cultural and Linguistic Prioritization",
    description: "Reflecting and respecting diverse contexts of our clients.",
  },
  {
    name: "Cutting-Edge Solutions",
    description: "Advanced language solutions tailored to your needs.",
  },
  {
    name: "Accuracy",
    description:
      "Commitment to precise language translation and interpretation.",
  },
  {
    name: "Confidentiality",
    description: "Ensuring the privacy and security of all client information.",
  },
  {
    name: "Timeliness",
    description: "Delivering language services promptly and efficiently.",
  },
  {
    name: "Cultural Relevance",
    description:
      "Adapting translations to be culturally appropriate and relevant.",
  },
  {
    name: "Adaptability",
    description: "Flexible language services that meet your evolving needs.",
  },
  {
    name: "Specialization in Haitian Creole",
    description: "Expertise in Haitian Creole language solutions.",
  },
];

export default function Choose() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div>
            <h2 className="text-base font-semibold leading-7 text-blue-600">
              Why Choose Us?
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Expert Haitian Creole Translations at Your Service
            </p>
            <p className="mt-6 text-base leading-7 text-gray-600">
              At Creolepro we prioritize the cultural and linguistic needs of
              our clients. Our cutting-edge language solutions are designed to
              reflect and respect the diverse contexts demonstrated by the
              individuals, organizations and communities that we serve.
            </p>
          </div>
          <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-9">
                <dt className="font-semibold text-gray-900">
                  <CheckIcon
                    className="absolute left-0 top-1 h-5 w-5 text-blue-500"
                    aria-hidden="true"
                  />
                  {feature.name}
                </dt>
                <dd className="mt-2">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
