"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { useClickOutside } from "@/utils/useClickOutside";

const DropdownItem = ({ item, scrolled }) => {
  const [open, setOpen] = useState(false);
  const hasChild = Array.isArray(item.children) && item.children.length > 0;
  const containerRef = useRef(null);

  useClickOutside(containerRef, () => setOpen(false));

  // Theme Styles
  const theme = scrolled
    ? {
        text: "text-gray-300",
        hover: "hover:bg-gray-800 hover:text-yellow-400",
        popup: "bg-gray-900 border-gray-700", // Solid Dark
        border: "border-gray-800",
      }
    : {
        text: "text-gray-700",
        hover: "hover:bg-gray-50 hover:text-blue-600",
        popup: "bg-white border-gray-100", // Solid White
        border: "border-gray-100",
      };

  const baseItemClass = `w-full text-left flex items-center justify-between px-4 py-3 text-sm font-medium transition-colors duration-200 ${theme.text} ${theme.hover}`;

  return (
    <div className="relative" ref={containerRef}>
      {/* Parent Item Clickable or Toggle */}
      {hasChild ? (
        <button
          onClick={(e) => {
            e.stopPropagation(); // Stop bubble up
            setOpen(!open);
          }}
          className={baseItemClass}
        >
          {item.name}
          <ExpandMoreIcon
            fontSize="small"
            className={`ml-2 transition-transform duration-300 opacity-70 ${
              open ? "-rotate-180" : "-rotate-90" // -90 points to the right
            }`}
          />
        </button>
      ) : (
        <Link href={item.href || "#"} className={baseItemClass}>
          {item.name}
        </Link>
      )}

      {/* --- 2nd LAYER (Nested Menu) --- */}
      {hasChild && open && (
        <div
          className={`
            absolute top-0 left-full ml-2 w-56 
            rounded-xl border shadow-2xl 
            z-[100] /* High Z-index to sit on top */
            overflow-hidden
            ${theme.popup} /* Ensures solid background */
            animate-in fade-in zoom-in-95 duration-150
          `}
        >
          <div className="py-1.5">
            {item.children.map((child, idx) => (
              <div
                key={child.name}
                className={idx > 0 ? `border-t ${theme.border}` : ""}
              >
                {/* Recursion for 3rd layer if needed */}
                <DropdownItem item={child} scrolled={scrolled} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownItem;
