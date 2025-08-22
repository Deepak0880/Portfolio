
import React, { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import DarkModeToggle from "./DarkModeToggle";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-6 py-4 ${
        isScrolled ? "bg-white dark:bg-gray-900 shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between">
        <a href="#hero" className="text-2xl font-bold text-blue-500 dark:text-blue-400 transition-all duration-300 hover:text-blue-700 dark:hover:text-blue-300">Portfolio</a>
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-6">
            <li><a href="#hero" className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Home</a></li>
            <li><a href="#projects" className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Projects</a></li>
            <li><a href="#skills" className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Skills</a></li>
            <li><a href="#resume" className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Resume</a></li>
            <li><a href="#contact" className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Contact</a></li>
          </ul>
          <DarkModeToggle />
        </div>
        <div className="md:hidden flex items-center gap-4">
          <DarkModeToggle />
          <button 
            className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors" 
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>
      
      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-md transition-all duration-300 ${
        mobileMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
      } overflow-hidden`}>
        <ul className="flex flex-col items-center py-4 space-y-4">
          <li><a href="#hero" onClick={toggleMobileMenu} className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Home</a></li>
          <li><a href="#projects" onClick={toggleMobileMenu} className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Projects</a></li>
          <li><a href="#skills" onClick={toggleMobileMenu} className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Skills</a></li>
          <li><a href="#resume" onClick={toggleMobileMenu} className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Resume</a></li>
          <li><a href="#contact" onClick={toggleMobileMenu} className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Contact</a></li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
