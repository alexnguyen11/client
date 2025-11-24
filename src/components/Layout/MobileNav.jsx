"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, Close, ExpandMore } from "@mui/icons-material";
import { LoginButton } from ".";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "@/context/LanguageContext";

const MobileNav = ({ open, toggleMenu }) => {
  const { navigation } = useLanguage(); // Get translated data

  const bgClass =
    "bg-gray-900/85 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] transform-gpu backface-hidden";
  const borderColor = "border-gray-700";

  return (
    <>
      <button
        onClick={toggleMenu}
        className={`sm:hidden p-2 rounded-md transition fixed top-4 right-4 z-[10000] text-white`}
        aria-label="Toggle menu"
      >
        {open ? <Close fontSize="medium" /> : <Menu fontSize="medium" />}
      </button>

      <div
        className={`fixed top-0 right-0 z-[9999] h-full w-full max-w-xs sm:max-w-md transform transition-transform duration-300  ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div
          className={`h-20 flex items-center justify-between px-6 border-b ${borderColor} ${bgClass} text-white`}
        >
          <div onClick={toggleMenu}>
            <LoginButton />
          </div>
        </div>

        <nav
          className={`px-4 py-6 flex flex-col h-[calc(100vh-80px)] ${bgClass}`}
        >
          {/* Mobile Language Switcher Section */}
          <div className="mb-6 pb-6 border-b border-gray-700">
             <p className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-3 px-2">Language</p>
             <LanguageSwitcher isMobile={true} />
          </div>

          <div className="space-y-2 overflow-y-auto flex-1">
            {navigation.map((item) => (
              <MobileNavItem
                key={item.name}
                item={item}
                toggleMenu={toggleMenu}
              />
            ))}
          </div>
        </nav>
      </div>
    </>
  );
};

/* Dropdown Levels */
const MobileNavItem = ({ item, toggleMenu, isNested = false }) => {
  const [expanded, setExpanded] = useState(false);
  const hasChildren = item.children?.length > 0;

  return (
    <div
      className={!isNested && hasChildren ? "border-b border-gray-500/20" : ""}
    >
      {hasChildren ? (
        <>
          <button
            onClick={() => setExpanded((prev) => !prev)}
            className={`w-full flex items-center justify-between px-3 py-3 text-left rounded-md text-white`}
          >
            <span className="font-medium">{item.name}</span>
            <ExpandMore
              className={`w-5 h-5 transition-transform ${
                expanded ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              expanded ? "max-h-[1000px]" : "max-h-0"
            }`}
          >
            <div className="pl-4">
              {item.children.map((child) => (
                <MobileNavItem
                  key={child.name}
                  item={child}
                  toggleMenu={toggleMenu}
                  isNested={true}
                />
              ))}
            </div>
          </div>
        </>
      ) : (
        <Link
          href={item.href}
          onClick={toggleMenu}
          className={`block px-3 py-3 rounded-md text-white`}
        >
          {item.name}
        </Link>
      )}
    </div>
  );
};

export default MobileNav;