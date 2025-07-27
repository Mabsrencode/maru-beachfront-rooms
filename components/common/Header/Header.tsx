"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const headerLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Facilities",
    href: "/facilities",
  },
  {
    label: "Rooms",
    href: "/rooms",
  },
  {
    label: "Contact Us",
    href: "/contact-us",
  },
];

const Header = () => {
  const pathname = usePathname();
  return (
    <header className="fixed top-0 left-0 w-full">
      <div className="w-full flex justify-between container mx-auto px-4">
        <Link
          href="/"
          className="text-center font-primary p-5 h-[100px] rounded-b-4xl bg-secondary max-w-[256px] text-blue"
        >
          <h1 className="text-4xl">MARU’S </h1>
          <span className="text-xs leading-0 block tracking-[2px]">
            Beachfront
          </span>
          <span className="text-xs tracking-[2px]">Rooms</span>
        </Link>
        <nav className="list-none flex items-center gap-12 font-bold lg:text-lg text-white">
          {headerLinks.map((link, _) => (
            <li
              key={_}
              className={`relative ${pathname === link.href && "nav-links"}`}
            >
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
