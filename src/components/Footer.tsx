
import React from "react";
import { ArrowUp } from "lucide-react";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-blue-600 dark:bg-blue-800 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 animate-slide-in">
            <h2 className="text-2xl font-bold">Portfolio</h2>
            <p className="mt-2 text-blue-100">Portfolio of Deepak - Web Developer & Engineer.</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end animate-slide-in" style={{ animationDelay: "150ms" }}>
            <button 
              onClick={scrollToTop}
              className="bg-white text-blue-600 dark:bg-gray-800 dark:text-blue-300 rounded-full p-3 mb-4 hover:bg-blue-50 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-5 w-5" />
            </button>
            <div>
              <p>&copy; {new Date().getFullYear()} Deepak | All Rights Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
