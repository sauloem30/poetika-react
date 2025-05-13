import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Footer() {
  const location = useLocation();

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "SOBRE NÓS", path: "/sobre" },
    { name: "PORTFÓLIO", path: "/portfolio" },
    { name: "CONTATOS", path: "/contato" },
  ];

  return (
    <footer className="bg-gray-100 text-gray-600 text-sm py-10 px-6 mt-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Contact Info */}
        <div>
          <h4 className="font-semibold mb-2">CONTATOS</h4>
          <p>
            Lorem Ipsum<br />
            São Paulo - SP<br />
            (11) 99999.9999<br />
            email@email.com
          </p>
          <p className="mt-4 font-semibold">SOCIAL MEDIA</p>
          <div className="flex space-x-3 mt-2 text-xl">
            <a href="#"><i className="fab fa-facebook"></i>📘</a>
            <a href="#"><i className="fab fa-instagram"></i>📷</a>
            <a href="#"><i className="fab fa-x-twitter"></i>✖</a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-semibold mb-2">NAVEGAÇÃO</h4>
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`inline-block pb-0.5 border-b-2 transition-all ${
                    location.pathname === item.path
                      ? "border-black"
                      : "border-transparent hover:border-black"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Partners */}
        <div>
          <h4 className="font-semibold mb-2">PARCEIROS</h4>
          <p className="text-2xl font-light tracking-widest">POÉTIKA</p>
          <p className="text-2xl font-light tracking-widest">POÉTIKA</p>
        </div>
      </div>

      <div className="text-center text-xs text-gray-400 mt-10">
        &copy; 2025 POÉTIKA
      </div>
    </footer>
  );
}
