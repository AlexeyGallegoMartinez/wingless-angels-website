"use client";

import { useState } from "react";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/images/sideIcon.png";

export default function Header({ lng }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const handleLanguageChange = (newLang) => {
    router.push(`/${newLang}`); // Redirect to the new language route
  };
  console.log(lng);
  return (
    <header className="w-full z-30">
      <nav
        aria-label="Global"
        className=" flex  items-center justify-between md:justify-around mx-10 md:mx-20 lg:px-8 py-10"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="text-lg -m-1.5 p-1.5">
            <span className="sr-only">Wingless Angels</span>
            <Image
              alt=""
              height={100}
              width={100}
              src={Logo}
              className="h-12 w-auto"
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Link
            href={`/${lng}`}
            className="text-sm/6 font-semibold text-gray-900"
          >
            {lng === "es" ? "Inicio" : "Home"}
          </Link>

          <Link
            href={`/${lng}/about`}
            className="text-sm/6 font-semibold text-gray-900"
          >
            {lng === "es" ? "Sobre Nosotros" : "About"}
          </Link>
          <Link
            href={`/${lng}/services`}
            className="text-sm/6 font-semibold text-gray-900"
          >
            {lng === "es" ? "Servicios" : "Services"}
          </Link>
          <Link
            href={`/${lng}/contact`}
            className="text-sm/6 font-semibold text-gray-900"
          >
            {lng === "es" ? "Contacto" : "Contact"}
          </Link>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <select
            className="p-1 text-black bg-transparent border-white rounded-md border appearance-none"
            value={lng}
            onChange={(e) => handleLanguageChange(e.target.value)}
          >
            <option value="en">🇺🇸 English</option>
            <option value="es">🇪🇸 Español</option>
          </select>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only"> Wingless Angels</span>
              <Image
                alt=""
                src={Logo}
                width={100}
                height={100}
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  href={`/${lng}`}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  {lng === "es" ? "Inicio" : "Home"}
                </Link>

                <Link
                  href={`/${lng}/about`}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  {lng === "es" ? "Sobre Nosotros" : "About"}
                </Link>
                <Link
                  href={`/${lng}/services`}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  {lng === "es" ? "Servicios" : "Services"}
                </Link>
                <Link
                  href={`/${lng}/contact`}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  {lng === "es" ? "Contacto" : "Contact"}
                </Link>
              </div>
              <div className="py-6">
                <select
                  className="p-1 text-white bg-transparent border-white rounded-md border appearance-none"
                  value={lng}
                  onChange={(e) => handleLanguageChange(e.target.value)}
                >
                  <option value="en">🇺🇸 English</option>
                  <option value="es">🇪🇸 Español</option>
                </select>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
