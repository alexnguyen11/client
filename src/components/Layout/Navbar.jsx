"use client";

import NavItem from "./NavItem";
import { LoginButton } from ".";
import LanguageSwitcher from "./LanguageSwitcher"; // Import Switcher
import { useLanguage } from "@/context/LanguageContext"; // Import Hook

const Navbar = ({ scrolled }) => {
  const { navigation } = useLanguage(); // Get translated data

  return (
    <div className="flex items-center gap-6">
      <nav className="flex gap-1 items-center">
        {navigation.map((item) => (
          <NavItem key={item.name} item={item} scrolled={scrolled} />
        ))}
      </nav>

      {/* Divider Line */}
      <div className={`h-6 w-px ${scrolled ? "bg-gray-700" : "bg-gray-300"}`} />

      <div className="flex items-center gap-4">
        {/* Language Switcher Added Here */}
        <LanguageSwitcher scrolled={scrolled} />
        <LoginButton scrolled={scrolled} />
      </div>
    </div>
  );
};

export default Navbar;
