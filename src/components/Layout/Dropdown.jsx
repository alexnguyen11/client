"use client";

import DropdownItem from "./DropdownItem";

const Dropdown = ({ items, scrolled }) => {
  return (
    <div className="flex flex-col">
      {items.map((item) => (
        <DropdownItem key={item.name} item={item} scrolled={scrolled} />
      ))}
    </div>
  );
};

export default Dropdown;