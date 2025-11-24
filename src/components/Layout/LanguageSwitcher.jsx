"use client";

import { useState, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Translate } from "@mui/icons-material";

import { languages } from "@/data/navigation";

import { useClickOutside } from "@/utils/useClickOutside";

const LanguageSwitcher = ({ scrolled, isMobile = false }) => {
  const { lang, switchLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  // click outside to close
  useClickOutside(containerRef, () => setOpen(false));

  const currentLang = languages.find((l) => l.code === lang);

  return (
    <div className="relative " ref={containerRef}>
      {/* Trigger Button */}
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-300 cursor-pointer
          ${
            isMobile
              ? "text-white bg-white/10 w-full justify-between"
              : scrolled
              ? "text-gray-200 hover:bg-white/10 hover:text-yellow-400"
              : "text-white hover:bg-white/10 hover:text-yellow-300"
          }
        `}
      >
        <div className="flex items-center gap-2">
          <Translate fontSize="small" />
          <span className="text-sm font-bold uppercase">
            {currentLang.code}
          </span>
        </div>
        <span className="text-lg">{currentLang.flag}</span>
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div
          className={`absolute right-0 mt-2 w-40 rounded-xl border shadow-2xl overflow-hidden z-50 animate-in fade-in slide-in-from-top-2
            ${
              isMobile
                ? "relative w-full mt-2 bg-gray-800 border-gray-600" // Mobile styling
                : scrolled
                ? "bg-gray-900 border-gray-700 shadow-black/50" // Dark scrolled styling
                : "bg-white border-gray-100 shadow-xl" // Light default styling
            }
          `}
        >
          {languages.map((l) => (
            <button
              key={l.code}
              onClick={() => {
                switchLanguage(l.code);
                setOpen(false);
              }}
              className={`w-full flex items-center justify-between px-4 py-3 text-sm font-medium transition-colors
                ${
                  isMobile
                    ? "text-white hover:bg-gray-700"
                    : scrolled
                    ? "text-gray-200 hover:bg-white/10 hover:text-yellow-400"
                    : "text-gray-700 hover:bg-gray-50 hover:text-red-600"
                }
                ${
                  lang === l.code
                    ? isMobile
                      ? "bg-gray-700"
                      : scrolled
                      ? "bg-white/10"
                      : "bg-gray-50"
                    : ""
                }
              `}
            >
              <span>{l.label}</span>
              <span>{l.flag}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
