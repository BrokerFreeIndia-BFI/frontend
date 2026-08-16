import React, { useState } from "react";
import { HoveredLink, MenuItem, ProductItem } from "./ui/navbar-menu";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Building2 } from "lucide-react";

const transition = {
  type: "spring" as const,
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className={`fixed top-4 inset-x-0 max-w-4xl mx-auto z-50 px-4 ${className || ''}`}>
      {/* Desktop Full-width Pill */}
      <nav
        onMouseLeave={() => setActive(null)}
        className="hidden md:flex items-center justify-between rounded-full border border-white/[0.12] bg-[#13141a]/80 backdrop-blur-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.4)] px-6 py-3"
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-white font-bold text-base no-underline shrink-0">
          <Building2 size={18} strokeWidth={2.4} />
          <span>BFI</span>
        </Link>

        {/* Center Nav Items */}
        <div className="flex items-center space-x-8">
          <MenuItem setActive={setActive} active={active} item="Services">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/web-dev">Web Development</HoveredLink>
              <HoveredLink href="/interface-design">Interface Design</HoveredLink>
              <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
              <HoveredLink href="/branding">Branding</HoveredLink>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Products">
            <div className="text-sm grid grid-cols-2 gap-10 p-4">
              <ProductItem
                title="BrokerFreeIndia"
                href="/"
                src="https://assets.aceternity.com/demos/algochurn.webp"
                description="Find your dream home without any brokerage."
              />
              <ProductItem
                title="Tailwind Master Kit"
                href="/"
                src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                description="Production ready Tailwind css components for your next project"
              />
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Pricing">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/hobby">Hobby</HoveredLink>
              <HoveredLink href="/individual">Individual</HoveredLink>
              <HoveredLink href="/team">Team</HoveredLink>
              <HoveredLink href="/enterprise">Enterprise</HoveredLink>
            </div>
          </MenuItem>
        </div>

        {/* CTA */}
        <a
          href="#download"
          className="shrink-0 rounded-full bg-[#ee4c40] text-white px-5 py-2 text-sm font-bold no-underline transition-all hover:bg-[#d93b31] hover:-translate-y-0.5"
        >
          Get Started
        </a>
      </nav>

      {/* Mobile Menu Toggle */}
      <div className="flex md:hidden items-center justify-between bg-[#13141a]/80 backdrop-blur-md rounded-full border border-white/[0.12] px-5 py-3 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.4)] w-full">
        <Link to="/" className="flex items-center gap-2 font-bold text-white no-underline">
          <Building2 size={16} strokeWidth={2.4} />
          <span>BFI</span>
        </Link>
        <div className="flex items-center gap-3">
          <a href="#download" className="rounded-full bg-[#ee4c40] text-white px-4 py-1.5 text-xs font-bold no-underline">Get Started</a>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white focus:outline-none"
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-16 inset-x-4 bg-[#13141a] rounded-2xl border border-white/[0.12] shadow-xl flex flex-col p-6 md:hidden max-h-[80vh] overflow-y-auto"
          >
            <div className="flex flex-col space-y-4">
              <div className="font-bold text-lg text-white border-b border-white/[0.1] pb-2">Services</div>
              <Link to="/web-dev" className="text-neutral-300">Web Development</Link>
              <Link to="/interface-design" className="text-neutral-300">Interface Design</Link>
              <Link to="/seo" className="text-neutral-300">Search Engine Optimization</Link>
              <Link to="/branding" className="text-neutral-300">Branding</Link>

              <div className="font-bold text-lg text-white border-b border-white/[0.1] pb-2 pt-4">Products</div>
              <Link to="/" className="text-neutral-300">BrokerFreeIndia</Link>
              <Link to="/" className="text-neutral-300">Tailwind Master Kit</Link>

              <div className="font-bold text-lg text-white border-b border-white/[0.1] pb-2 pt-4">Pricing</div>
              <Link to="/hobby" className="text-neutral-300">Hobby</Link>
              <Link to="/individual" className="text-neutral-300">Individual</Link>
              <Link to="/team" className="text-neutral-300">Team</Link>
              <Link to="/enterprise" className="text-neutral-300">Enterprise</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
