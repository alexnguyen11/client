"use client";

import { Close, Menu, Logout, Person } from "@mui/icons-material";
import { useState } from "react";
import Image from "next/image";

const AdminHeader = ({ open, setOpen }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    console.log("Logged out!");
  };

  return (
    <header className="w-full bg-white shadow-lg px-6 py-4 flex justify-between items-center sticky top-0 z-50 border-b">
      {/* Left */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => setOpen(!open)}
          className="block lg:hidden text-gray-700 hover:bg-gray-100 p-2 rounded-md transition"
        >
          {open ? <Close /> : <Menu />}
        </button>

        <div className="text-2xl font-bold bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent tracking-wide">
          Admin Dashboard
        </div>
      </div>

      {/* Right */}
      <div className="relative">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex items-center gap-3 pr-2 pl-1 py-1 rounded-full hover:bg-gray-100 transition"
        >
          <Image
            src="/images/admin-avatar.jpg"
            alt="Profile"
            width={40}
            height={40}
            className="rounded-full border border-gray-300 shadow-sm object-cover"
          />
          <span className="hidden md:inline text-gray-700 font-medium">
            Admin
          </span>
        </button>

        {menuOpen && (
          <div className="absolute right-0 mt-3 w-52 bg-white border border-gray-200 shadow-xl rounded-xl py-2 animate-fadeIn">
            <button className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 transition w-full">
              <Person fontSize="small" /> Profile
            </button>

            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 transition w-full"
            >
              <Logout fontSize="small" /> Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default AdminHeader;