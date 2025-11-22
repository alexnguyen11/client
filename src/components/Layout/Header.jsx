"use client";

import { useEffect, useState } from "react";
import { MobileNav, Navbar, NavLogo } from ".";
import { navigation } from "@/data/navigation";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out h-20 
        ${
          scrolled
            ? "backdrop-blur-xl bg-gray-900/85 shadow-[0_4px_30px_rgba(0,0,0,0.1)] "
            : "bg-gradient-to-b from-black/80 via-black/40 to-transparent "
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-center justify-between">
          <NavLogo scrolled={scrolled} />

          {/* Desktop */}
          <div className="hidden sm:flex items-center gap-8">
            <Navbar navigation={navigation} scrolled={scrolled} />
          </div>
        </div>
      </header>

      {/* Mobile */}
      <MobileNav open={open} toggleMenu={toggleMenu} navigation={navigation} />
    </>
  );
};

export default Header;
