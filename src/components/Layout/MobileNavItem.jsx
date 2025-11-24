"use client";

import { useState } from "react";
import Link from "next/link";
import { ExpandMore } from "@mui/icons-material";

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
export default MobileNavItem;
