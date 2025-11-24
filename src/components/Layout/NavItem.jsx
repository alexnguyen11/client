"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Dropdown from "./Dropdown";

import { useClickOutside } from "@/utils/useClickOutside";

const NavItem = ({ item, scrolled }) => {
  if (!item) return null;

  const [open, setOpen] = useState(false);
  const hasDropdown = Array.isArray(item.children) && item.children.length > 0;
  const containerRef = useRef(null);

  useClickOutside(containerRef, () => setOpen(false));
  
  return (
    <div className="relative" ref={containerRef}>
      <button
        onClick={() => hasDropdown && setOpen(!open)}
        className={`group flex items-center gap-1.5 px-4 py-2 text-sm font-bold rounded-full transition-all duration-300 ease-in-out
          ${
            scrolled
              ? "text-gray-200 hover:text-yellow-400 hover:bg-white/10"
              : "text-white hover:text-yellow-300 hover:bg-white/10"
          }
        `}
      >
        <Link href={item.href}>{item.name}</Link>

        {hasDropdown && (
          <ExpandMoreIcon
            fontSize="small"
            className={`transition-transform duration-300 ${
              open
                ? "rotate-180 text-current"
                : "text-current opacity-70 group-hover:opacity-100"
            }`}
          />
        )}
      </button>

      {/* Dropdown Menu Container */}
      {hasDropdown && open && (
        <div
          className={`absolute left-0 top-full mt-3 w-64 rounded-xl border shadow-2xl
            /* CRITICAL: overflow-visible allows the second layer to pop out */
            overflow-visible z-50
            ${
              scrolled
                ? "bg-gray-900 border-gray-700 shadow-black/50"
                : "bg-white border-gray-100 shadow-xl"
            }
            animate-in fade-in slide-in-from-top-2 duration-200
          `}
        >
          {/* Tiny triangle arrow pointing up (optional, adds polish) */}
          <div
            className={`absolute -top-1.5 left-6 w-3 h-3 rotate-45 border-t border-l
            ${
              scrolled
                ? "bg-gray-900 border-gray-700"
                : "bg-white border-gray-100"
            }
          `}
          ></div>

          <div className="py-2 relative z-10">
            <Dropdown items={item.children} scrolled={scrolled} />
          </div>
        </div>
      )}
    </div>
  );
};

export default NavItem;
