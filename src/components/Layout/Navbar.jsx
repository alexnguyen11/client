"use client";

import NavItem from "./NavItem";
import { LoginButton } from ".";

const Navbar = ({ navigation, scrolled }) => {
  return (
    <div className="flex items-center gap-6">
      <nav className="flex gap-1 items-center">
        {navigation.map((item) => (
          <NavItem key={item.name} item={item} scrolled={scrolled} />
        ))}
      </nav>

      {/* Divider Line */}
      <div className={`h-6 w-px ${scrolled ? 'bg-gray-700' : 'bg-gray-300'}`} />

      <LoginButton scrolled={scrolled} />
    </div>
  );
};

export default Navbar;