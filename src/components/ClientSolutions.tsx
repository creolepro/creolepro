'use client'

import React from 'react'
import { UsersIcon, GlobeAmericasIcon, PencilSquareIcon, MicrophoneIcon, PhotoIcon, CheckIcon } from '@heroicons/react/24/solid'


export function ClientSolutions() {
  const solutions = [
    {
      name: 'Translation',
      description:
        'We provide professional translation services for documents, websites, marketing materials, legal documents, and more. Our team of native and expert matter translators are fluent in Haitian Creole and English and can help you communicate your message accurately and effectively.',
      icon: PencilSquareIcon,
    },
    {
      name: 'Interpretation',
      description:
        'We offer both onsite and remote interpretation services for meetings, conferences, and events. Our team of certified and experienced interpreters can provide simultaneous or consecutive interpretation to ensure effective communication between speakers of the Haitian Creole and English languages.',
      icon: UsersIcon,
    },
    {
      name: 'Localization',
      description:
        'We help businesses adapt their products, services, and marketing materials for specific target markets by providing cultural and linguistic adaptation services. This includes translating and adapting content, images, and design elements to ensure they resonate with the target audience.',
      icon: GlobeAmericasIcon,
    },
    {
      name: 'Transcription',
      description:
        'We offer transcription services for audio and video recordings in Haitian Creole. Our team of expert transcribers can accurately transcribe your content, including translating it into Haitian Creole if required.',
      icon: MicrophoneIcon,
    },
  ]

  return (
    <div id="client" className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Client Solutions
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            At Translucid Languages, our client-centric approach involves understanding your distinct 
            requirements, objectives, and brand identity to provide tailored solutions aligned with your vision. 
            Our commitment to meticulous care and confidentiality ensures your projects are in trusted hands.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {solutions.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-950">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
  )
}
