import Link from "next/link";

import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";
import { NavLink } from "@/components/NavLink";

import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

export function Footer() {
  return (
    <footer>
      <Container>
        <div className="py-16 flex flex-col items-center space-y-12 text-center">
          <Logo className="mx-auto h-10 w-auto" />
          <nav className="mt-10 text-sm" aria-label="quick links">
            <div className="-my-1 gap-x-6">
              <NavLink href="#features">Client Solutions</NavLink>
              <NavLink href="#process">Process</NavLink>
              <NavLink href="#choose">Why Choose Us?</NavLink>
              <NavLink href="#pricing">Careers</NavLink>
            </div>
          </nav>
          <dl className="space-y-4 text-base text-gray-600">
            <div className="flex gap-x-4">
              <dt className="flex-none">
                <span className="sr-only">Address</span>
                <BuildingOffice2Icon
                  className="h-7 w-6 text-gray-400"
                  aria-hidden="true"
                />
              </dt>
              <dd>
                115 E. Main St.
                <br />
                Buford, GA 30518
              </dd>
            </div>
            <div className="flex gap-x-4">
              <dt className="flex-none">
                <span className="sr-only">Telephone</span>
                <PhoneIcon
                  className="h-7 w-6 text-gray-400"
                  aria-hidden="true"
                />
              </dt>
              <dd>
                <a className="hover:text-gray-900" href="tel:+18007771123">
                  +1(800) 777-1123
                </a>
              </dd>
            </div>
            <div className="flex gap-x-4">
              <dt className="flex-none">
                <span className="sr-only">Email</span>
                <EnvelopeIcon
                  className="h-7 w-6 text-gray-400"
                  aria-hidden="true"
                />
              </dt>
              <dd>
                <a
                  className="hover:text-gray-900"
                  href="mailto:contact@creolepro.com"
                >
                  contact@creolepro.com
                </a>
              </dd>
            </div>
          </dl>
          <div className="w-full border-t border-slate-400/10 py-10 flex justify-center">
            <div className="text-center">
              <p className="mt-6 text-sm text-slate-500">
                Copyright &copy; {new Date().getFullYear()} CreolePro, LLC. All
                rights reserved.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
