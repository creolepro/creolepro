"use client";

import React, { FormEvent, useState } from "react";
import { useLanguage } from "@/hooks/use-language";
import { contactFormTranslations } from "@/translations";
import { toast } from "sonner";
import { Loader2, CheckCircle } from "lucide-react";

export default function ContactForm() {
  const { language } = useLanguage();
  const t = contactFormTranslations[language];
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
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

  const isFormValid = () => {
    return Object.values(formData).every((value) => value.trim() !== "");
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isFormValid()) {
      toast.error(
        language === "en"
          ? "Please fill out all fields."
          : "Tanpri ranpli tout chan yo."
      );
      return;
    }

    setIsSubmitting(true);
    setIsSuccess(false);

    try {
      const form = event.currentTarget;
      const formData = new FormData(form);
      const formDataObject = Object.fromEntries(formData.entries());

      const response = await fetch("api/send-email", {
        method: "POST",
        body: JSON.stringify(formDataObject),
        headers: {
          accept: "application/json",
        },
      });

      const data = await response.json();

      if (response.ok) {
        setIsSuccess(true);
        toast.success(
          language === "en"
            ? "Form submitted successfully!"
            : "Fòm lan soumèt avèk siksè!"
        );
        form.reset();
        setFormData({
          name: "",
          email: "",
          description: "",
        });
        setTimeout(() => {
          setIsSuccess(false);
        }, 2000);
      } else {
        throw new Error(data.error || "Something went wrong");
      }
    } catch (error) {
      toast.error(
        language === "en"
          ? "Failed to submit form. Please try again."
          : "Echèk nan soumèt fòm lan. Tanpri eseye ankò."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact-form" className="w-full bg-gray-50 pb-4">
      <div className="mx-auto max-w-7xl pt-20 sm:pt-32 lg:pt-24 bg-gray-50 text-center">
        <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
          {t.title}
        </h2>
        <p className="my-6 text-lg leading-8 text-gray-600">{t.description}</p>
      </div>
      <form onSubmit={handleSubmit} className="mx-auto max-w-xl sm:mt-12">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              {t.fields.name} *
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              onChange={handleInput}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-900 sm:text-sm sm:leading-6"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              {t.fields.email} *
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              onChange={handleInput}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-900 sm:text-sm sm:leading-6"
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              {t.fields.requirements} *
            </label>
            <textarea
              name="description"
              id="description"
              rows={4}
              required
              onChange={handleInput}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-900 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="my-10">
          <button
            type="submit"
            disabled={isSubmitting || !isFormValid()}
            className={`block w-full rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-900 transition-all duration-200 ease-in-out ${
              isSuccess
                ? "bg-green-600 hover:bg-green-700"
                : !isFormValid()
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-haiti-blue hover:bg-blue-900"
            }`}
          >
            <span className="flex items-center justify-center">
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  {t.submitting}...
                </>
              ) : isSuccess ? (
                <>
                  <CheckCircle className="mr-2 h-5 w-5" />
                  {t.submitted}
                </>
              ) : (
                t.submit
              )}
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}
