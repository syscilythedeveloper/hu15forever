"use client";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => setMenuOpen((open) => !open);
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className="navbar fixed top-0 left-0 right-0 z-50 pl-2 pr-6 py-4">
      <div className="w-full flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center">
          <Image
            src="/hu15forever.jpeg"
            width={200}
            height={12}
            alt="HU15 Forever Logo"
            className="h-12 md:h-16 w-auto object-contain rounded-lg shadow-sm"
          />
        </div>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex items-center space-x-2">
          <a
            href="#home"
            className="navbar-link"
          >
            Home
          </a>
          <a
            href="#fundraising"
            className="navbar-link"
          >
            Fundraising
          </a>
          <a
            href="#events"
            className="navbar-link"
          >
            Events
          </a>
          <a
            href="#merchandise"
            className="navbar-link"
          >
            Merch
          </a>
          <a
            href="#contact"
            className="navbar-link"
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden navbar-link"
          aria-label="Open menu"
          onClick={handleMenuToggle}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden flex flex-col bg-hu-navy text-white rounded-lg shadow-lg mt-2 px-4 py-3 space-y-2 animate-fade-in absolute left-2 right-6 top-full z-50">
          <a
            href="#home"
            className="navbar-link"
            onClick={handleLinkClick}
          >
            Home
          </a>
          <a
            href="#fundraising"
            className="navbar-link"
            onClick={handleLinkClick}
          >
            Fundraising
          </a>
          <a
            href="#events"
            className="navbar-link"
            onClick={handleLinkClick}
          >
            Events
          </a>
          <a
            href="#merchandise"
            className="navbar-link"
            onClick={handleLinkClick}
          >
            Merch
          </a>
          <a
            href="#contact"
            className="navbar-link"
            onClick={handleLinkClick}
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
