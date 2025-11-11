import React, { useState } from "react";

interface MenuItem {
  label: string;
  href: string;
}

interface HamburgerMenuProps {
  items: MenuItem[];
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="top-10 left-10">
      {/* Botão do menu sanduíche */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-col justify-between w-8 h-6"
        aria-label="Abrir menu"
      >
        <span
          className={`h-1 w-full bg-gray-800 rounded transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""
            }`}
        />
        <span
          className={`h-1 w-full bg-gray-800 rounded transition-all duration-300 ${isOpen ? "opacity-0" : ""
            }`}
        />
        <span
          className={`h-1 w-full bg-gray-800 rounded transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
        />
      </button>

      {/* Menu lateral (mobile) */}
      <div
        className={`fixed top-0 left-0 h-full w-2/3 bg-white shadow-md transform transition-transform duration-300 ease-in-out z-40 ${isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-col justify-between w-8 h-6"
          aria-label="Abrir menu"
        >
          <span
            className={`h-1 w-full bg-gray-800 rounded transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""
              }`}
          />
          <span
            className={`h-1 w-full bg-gray-800 rounded transition-all duration-300 ${isOpen ? "opacity-0" : ""
              }`}
          />
          <span
            className={`h-1 w-full bg-gray-800 rounded transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
          />
        </button>
        <ul className="flex flex-col p-6 space-y-4">
          {items.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="flex justify-start gap-8 cursor-pointer font-semibold"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default HamburgerMenu;
