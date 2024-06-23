"use client";

import { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import { Popover, Transition } from "@headlessui/react";
import clsx from "clsx";

import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";
import { NavLink } from "@/components/NavLink";
import { Phone } from "lucide-react";

function MobileNavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Popover.Button as={Link} href={href} className="block w-full p-2">
      {children}
    </Popover.Button>
  );
}

function MobileNavIcon({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={clsx(
          "origin-center transition",
          open && "scale-90 opacity-0"
        )}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={clsx(
          "origin-center transition",
          !open && "scale-90 opacity-0"
        )}
      />
    </svg>
  );
}

function MobileNavigation() {
  return (
    <Popover>
      <Popover.Button
        className="relative z-10 flex h-8 w-8 items-center justify-center ui-not-focus-visible:outline-none"
        aria-label="Toggle Navigation"
      >
        {({ open }) => <MobileNavIcon open={open} />}
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 bg-slate-300/50" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            as="div"
            className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5"
          >
            <MobileNavLink href="#features">Client Solutions</MobileNavLink>
            <MobileNavLink href="#testimonials">Process</MobileNavLink>
            <MobileNavLink href="/careers">Careers</MobileNavLink>
            <hr className="m-2 border-slate-300/40" />
            <MobileNavLink href="/login">Sign in</MobileNavLink>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  );
}

const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 bg-white py-5 z-[9999] ${
        isScrolled ? "shadow-md" : ""
      } py-10`}
    >
      <Container className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="relative flex justify-between">
          <div className="flex items-center md:gap-x-12">
            <Link href="/" aria-label="Home">
              <Logo className="h-10 w-auto" />
            </Link>
            <div className="hidden md:flex md:gap-x-6">
              <NavLink
                href="#features"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("client-solutions");
                }}
              >
                Client Solutions
              </NavLink>
              <NavLink
                href="#process"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("process");
                }}
              >
                How it works
              </NavLink>
              <NavLink
                href="#choose"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("choose");
                }}
              >
                Why Choose Us?
              </NavLink>
              <NavLink href="/careers">Careers</NavLink>
            </div>
          </div>
          <div className="flex items-center gap-x-5 md:gap-x-4">
            <Phone
              className="h-5 w-5 text-gray-900"
              aria-hidden="true"
              strokeWidth="1.5"
            />
            <Link href="tel:+18007771123" className="text-slate-800 text-md">
              <p className="text-slate-800 text-md">+1(800) 777-1123</p>
            </Link>
            <Button href="/login" variant="outline">
              <div className="hidden md:block">
                <span>Sign in</span>
              </div>
            </Button>
            <Button
              href="#register"
              color="blue"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact-form");
              }}
            >
              <span>
                Get started <span className="hidden lg:inline">today</span>
              </span>
            </Button>
            <div className="-mr-1 md:hidden">
              <MobileNavigation />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
}
