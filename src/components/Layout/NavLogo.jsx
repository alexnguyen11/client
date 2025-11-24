"use client";

import Image from "next/image";
import Link from "next/link";
import { logoNoBg } from "@/assets/logo";

import { notoSansJP } from "@/utils/textFont";

const NavLogo = ({ scrolled }) => {
  return (
    <Link href="/" className="group flex items-center gap-3">
      <div className="relative transition-transform duration-300 group-hover:scale-105">
        <Image
          src={logoNoBg}
          alt="Takechi Language Academy Logo"
          className={`w-auto object-contain transition-all duration-300 ${
            scrolled ? "h-10" : "h-12"
          }`}
        />
      </div>

      <div
        className={`${notoSansJP.className} flex flex-col leading-tight transition-colors duration-300`}
      >
        <span
          className={`font-bold text-sm ${
            scrolled ? "text-yellow-400" : "text-white" // Changed to White
          }`}
        >
          Takechi Gengo Gakuin
        </span>
        <span
          className={`text-[10px] font-medium tracking-wide uppercase ${
            scrolled ? "text-gray-300" : "text-gray-200" // Changed to Light Gray
          }`}
        >
          Takechi Language Academy
        </span>
      </div>
    </Link>
  );
};

export default NavLogo;
