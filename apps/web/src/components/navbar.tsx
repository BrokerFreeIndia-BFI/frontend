import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className={`fixed top-4 inset-x-0 max-w-2xl mx-auto z-50 px-4 md:px-0 ${className || ''}`}>
      {/* Desktop Menu */}
      <div className="hidden md:block">
        <Menu setActive={setActive}>
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
        </Menu>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="flex md:hidden items-center justify-between bg-white dark:bg-black rounded-full border border-black/[0.2] dark:border-white/[0.2] px-6 py-4 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] flex-row w-full mx-4">
        <Link to="/" className="font-bold text-black dark:text-white">BFI</Link>
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-black dark:text-white focus:outline-none"
        >
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-20 inset-x-4 bg-white dark:bg-black rounded-2xl border border-black/[0.2] dark:border-white/[0.2] shadow-xl overflow-hidden flex flex-col p-6 md:hidden max-h-[80vh] overflow-y-auto"
          >
            <div className="flex flex-col space-y-4">
              <div className="font-bold text-lg text-black dark:text-white border-b border-gray-100 dark:border-gray-800 pb-2">Services</div>
              <Link to="/web-dev" className="text-neutral-700 dark:text-neutral-300">Web Development</Link>
              <Link to="/interface-design" className="text-neutral-700 dark:text-neutral-300">Interface Design</Link>
              <Link to="/seo" className="text-neutral-700 dark:text-neutral-300">Search Engine Optimization</Link>
              <Link to="/branding" className="text-neutral-700 dark:text-neutral-300">Branding</Link>

              <div className="font-bold text-lg text-black dark:text-white border-b border-gray-100 dark:border-gray-800 pb-2 pt-4">Products</div>
              <Link to="/" className="text-neutral-700 dark:text-neutral-300">BrokerFreeIndia</Link>
              <Link to="/" className="text-neutral-700 dark:text-neutral-300">Tailwind Master Kit</Link>

              <div className="font-bold text-lg text-black dark:text-white border-b border-gray-100 dark:border-gray-800 pb-2 pt-4">Pricing</div>
              <Link to="/hobby" className="text-neutral-700 dark:text-neutral-300">Hobby</Link>
              <Link to="/individual" className="text-neutral-700 dark:text-neutral-300">Individual</Link>
              <Link to="/team" className="text-neutral-700 dark:text-neutral-300">Team</Link>
              <Link to="/enterprise" className="text-neutral-700 dark:text-neutral-300">Enterprise</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
