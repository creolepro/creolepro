"use client";

import React, { FormEvent, useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    description: "",
  });

  const handleInput = (e: { target: { name: any; value: any } }) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const formDataObject = Object.fromEntries(formData.entries());

    const data = await fetch("api/send-email", {
      method: "POST",
      body: JSON.stringify(formDataObject),
      headers: {
        accept: "application/json",
      },
    }).then((res) => res.json());

    setFormData(data);
  };

  return (
    <div id="contact-form" className="w-full bg-gray-50 pb-4">
      <div className="mx-auto max-w-7xl pt-20 sm:pt-32 lg:pt-24 bg-gray-50 text-center">
        <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
          {`Get your free quote`}
        </h2>
        <p className="my-6 text-lg leading-8 text-gray-600">
          {`Join our team! We're actively seeking talented translators and interpreters to shape language excellence with us.`}
        </p>
      </div>
      <form
        action="#"
        method="POST"
        className="sm:mx-auto mx-4 my-16 max-w-xl sm:mt-12"
        onSubmit={handleSubmit}
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              First name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="firstName"
                id="firstName"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-900 sm:text-sm sm:leading-6"
                onChange={handleInput}
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Last name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="lastName"
                id="lastName"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-900 sm:text-sm sm:leading-6"
                onChange={handleInput}
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-900 sm:text-sm sm:leading-6"
                onChange={handleInput}
              />
            </div>
          </div>
        </div>
        <div className="sm:col-span-2 mt-4">
          <label
            htmlFor="text"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            Requirements
          </label>
          <div className="mt-2.5">
            <input
              type="text"
              name="description"
              id="description"
              autoComplete="text"
              className="block w-full rounded-md border-0 px-3.5 py-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-900 sm:text-sm sm:leading-6"
              onChange={handleInput}
            />
          </div>
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className="block w-full rounded-md bg-haiti-blue px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-900"
          >
            {`Submit`}
          </button>
        </div>
      </form>
    </div>
  );
}
