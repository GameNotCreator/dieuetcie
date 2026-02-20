"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  // ESC pour fermer
  useEffect(() => {
    const onKeyDown = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const NavItem = ({ href, children }) => (
    <Link
      href={href}
      onClick={close}
      className="flex items-center justify-between rounded-2xl px-4 py-4 text-base font-semibold border border-black/10 active:scale-[0.99]"
    >
      <span>{children}</span>
      <span className="opacity-40">›</span>
    </Link>
  );

  return (
    <>
      {/* NAVBAR = EXACTEMENT comme ton original */}
 <div className="navbar shadow-sm px-6 bg-[#F6F1E9] sticky top-0 z-40">

  {/* LEFT - Logo */}
  <div className="navbar-start">
    <Link href="/" className="flex items-center gap-2">
      <Image
        src="/logo.png"
        alt="Dieu et Cie"
        width={200}
        height={30}
        priority
        className="h-auto max-h-24 w-auto lg:filter-none filter"
      />
    </Link>
  </div>

  {/* CENTER - Desktop menu */}
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal gap-6 font-medium">
      <li><Link href="/about">Qui sommes-nous ?</Link></li>
      <li><Link href="/reference">Nos références</Link></li>
      <li><Link href="/marquage">Techniques de marquage</Link></li>
      <li><Link href="/contact">Contactez-nous</Link></li>
    </ul>
  </div>

  {/* RIGHT - Desktop contact + mobile burger */}
  <div className="navbar-end flex items-center gap-2">
    {/* Contact desktop */}
    <div className="hidden lg:flex flex-col items-center text-center text-sm gap-1">
      <span className="font-semibold">Thierry Collet</span>
      <span className="font-bold text-lg">04 37 28 08 92</span>
      <a
        href="mailto:contact@ebs-diffusion.fr"
        className="text-[#0d4b81] hover:underline"
      >
        contact@ebs-diffusion.fr
      </a>
      <div className="flex gap-3 text-xl text-[#0d4b81] mt-1">
        <FaLinkedin className="cursor-pointer hover:opacity-70" />
        <FaFacebook className="cursor-pointer hover:opacity-70" />
        <FaInstagram className="cursor-pointer hover:opacity-70" />
      </div>
    </div>

    {/* Burger mobile */}
    <button
      type="button"
      className="btn btn-ghost lg:hidden"
      aria-label="Ouvrir le menu"
      onClick={() => setOpen(true)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
  </div>
</div>


      {/* BOTTOM SHEET MOBILE */}
      <div className={`${open ? "block" : "hidden"} lg:hidden`}>
        {/* overlay */}
        <div
          className="fixed inset-0 z-50 bg-black/40"
          onClick={close}
          aria-hidden="true"
        />

        {/* sheet */}
        <div
          className="fixed left-0 right-0 bottom-0 z-50 rounded-t-3xl bg-white shadow-2xl p-4"
          role="dialog"
          aria-modal="true"
        >
          <div className="mx-auto mb-3 h-1.5 w-12 rounded-full bg-black/10" />

          {/* Actions rapides */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            <a
              href="tel:+33437280892"
              className="btn rounded-2xl bg-[#0d4b81] text-white border-none"
            >
              Appeler
            </a>
            <a
              href="mailto:contact@ebs-diffusion.fr"
              className="btn rounded-2xl bg-white border border-black/10"
            >
              Email
            </a>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-3">
            <NavItem href="/about">Qui sommes-nous ?</NavItem>
            <NavItem href="/reference">Nos références</NavItem>
            <NavItem href="/marquage">Techniques de marquage</NavItem>
            <NavItem href="/contact">Contactez-nous</NavItem>
          </div>

          {/* Réseaux */}
          <div className="mt-5 flex items-center justify-between">
            <div className="text-sm opacity-60">
              Thierry Collet · 04 37 28 08 92
            </div>
            <div className="flex gap-4 text-xl text-[#0d4b81]">
              <FaLinkedin className="cursor-pointer hover:opacity-70" />
              <FaFacebook className="cursor-pointer hover:opacity-70" />
              <FaInstagram className="cursor-pointer hover:opacity-70" />
            </div>
          </div>

          <button
            type="button"
            className="mt-4 btn btn-ghost w-full rounded-2xl"
            onClick={close}
          >
            Fermer
          </button>
        </div>
      </div>
    </>
  );
}
