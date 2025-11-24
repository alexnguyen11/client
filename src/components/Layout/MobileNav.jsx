"use client";

import { Menu, Close } from "@mui/icons-material";
import { LoginButton, MobileNavItem, LanguageSwitcher } from ".";
import { useLanguage } from "@/context/LanguageContext";

const MobileNav = ({ open, setOpen, toggleMenu }) => {
  const { navigation } = useLanguage();

  const bgClass =
    "bg-gray-900/85 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] transform-gpu backface-hidden";
  const borderColor = "border-gray-700";

  return (
    <>
      {/* 1. BACKDROP OVERLAY 
          - Visible only when open.
          - Clicking this triggers setOpen(false).
          - z-index is lower than the drawer (9999) but higher than the page.
      */}
      <div
        className={`fixed inset-0 z-[9998] bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          open
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* 2. TOGGLE BUTTON */}
      <button
        onClick={toggleMenu}
        className={`sm:hidden p-2 rounded-md transition fixed top-4 right-4 z-[10000] text-white`}
        aria-label="Toggle menu"
      >
        {open ? <Close fontSize="medium" /> : <Menu fontSize="medium" />}
      </button>

      {/* 3. DRAWER PANEL */}
      <div
        className={`fixed top-0 right-0 z-[9999] h-full w-[85%] max-w-xs transform transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        // Stop propagation: Clicking INSIDE the menu should not close it
        onClick={(e) => e.stopPropagation()}
      >
        <div className={`flex flex-col h-full ${bgClass}`}>
          <div
            className={`h-20 flex items-center justify-between px-6 border-b ${borderColor} text-white shrink-0`}
          >
            <div onClick={() => setOpen(false)}>
              <LoginButton />
            </div>
          </div>

          <nav className="px-4 py-6 flex-1 overflow-y-auto">
            {/* Mobile Language Switcher Section */}
            <div className="mb-6 pb-6 border-b border-gray-700">
              <p className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-3 px-2">
                Language
              </p>
              <LanguageSwitcher isMobile={true} />
            </div>

            <div className="space-y-2">
              {navigation.map((item) => (
                <MobileNavItem
                  key={item.name}
                  item={item}
                  // Pass setOpen so clicking a LINK closes the menu
                  setOpen={setOpen}
                />
              ))}
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
