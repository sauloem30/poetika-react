import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "SOBRE NÓS", path: "/sobre" },
    { name: "PORTFÓLIO", path: "/portfolio" },
    { name: "CONTATOS", path: "/contato" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-white shadow p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
          <img src="/images/poetika_logo.png" alt="Poétika Logo" className="h-10" />
        </Link>

        {/* Hamburger */}
        <button
          onClick={toggleMenu}
          className="text-2xl md:hidden focus:outline-none"
        >
          ☰
        </button>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`pb-1 transition-all ${
                  location.pathname === item.path
                    ? "border-b-2 border-black"
                    : "border-b-2 border-transparent hover:border-black"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 text-sm text-gray-700 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={closeMenu}
              className={`block px-4 py-2 border-l-4 ${
                location.pathname === item.path
                  ? "border-black font-semibold"
                  : "border-transparent hover:border-black"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
