
import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center pt-16 bg-white dark:bg-gray-900 transition-colors duration-300 overflow-x-hidden w-full">
      <div className="container mx-auto px-4 md:px-6 py-10 w-full max-w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 w-full max-w-full">
          <div 
            className={`w-full md:w-1/2 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-blue-500 dark:text-blue-400 font-medium mb-2 animate-fade-in">Hello, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-blue-900 dark:text-white">Deepak</h1>
            <div className="typing-container mb-6 flex flex-col md:flex-row md:items-center md:space-x-2">
              <span className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">4th Year CSE Student</span>
              <span className="hidden md:inline text-xl md:text-2xl text-gray-600 dark:text-gray-300">| Full Stack Developer | DSA Enthusiast</span>
              <span className="block md:hidden text-xl text-gray-600 dark:text-gray-300 mt-1">Full Stack Developer | DSA Enthusiast</span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-lg animate-slide-in">
            I am Deepak, a 4th year Computer Science Engineering student with a strong foundation in C++, web development, and 3D design tools. I focus on building accessible, user-friendly web applications and practical solutions for real-world problems. I am committed to continuous improvement and delivering quality work in every project I undertake.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/My_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded transition-all duration-300 transform hover:-translate-y-1"
              >
                View Resume <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <Button variant="outline" className="border-blue-500 text-blue-500 dark:border-blue-400 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 transform hover:-translate-y-1" onClick={() => {
                const el = document.getElementById('projects');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}>
                Explore Projects
              </Button>
            </div>
          </div>
          <div 
            className={`w-full md:w-1/2 flex justify-center transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md flex justify-center">
              <div className="absolute -inset-1 rounded-full bg-blue-500/30 blur-xl"></div>
              <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-blue-100 dark:bg-blue-900/30 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-xl relative animate-pulse">
                <img 
                  src="/WhatsApp Image 2025-06-23 at 09.55.21_43766daa.jpg" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
