
import React from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  liveDemo: string;
  github: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Recruitify - Job Portal",
    description: "A Ai Powered job portal website that allows users to post jobs and apply for jobs.",
    techStack: ["React", "Node.js", "MongoDB", "OpenAI", "Express", "Tailwind CSS"],
    liveDemo: "https://main.dvd0rw6dollk.amplifyapp.com",
    github: "https://github.com/Deepak0880/RECRUITIFY",
    image: "/Screenshot 2.png"
  },
  {
    id: 2,
    title: "UniMeet",
    description: "A productivity tool to organize tasks with drag-and-drop functionality.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    liveDemo: "#",
    github: "https://github.com/Deepak0880/Unimeet",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    title: "Guessing Game",
    description: "A fun guessing game that allows users to guess a Word with Alphabets under 8 attempts",
    techStack: ["Html", "Css", "JavaScript"],
    liveDemo: "https://guessgame-lovat.vercel.app/",
    github: "https://github.com/Deepak0880/Guess-The-Game",
    image: "/Screenshot 3.png"
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "A responsive portfolio website showcasing skills and projects.",
    techStack: ["React", "Tailwind CSS", "TypeScript"],
    liveDemo: "https://portfoliodeepak-opal.vercel.app/",
    github: "https://github.com/Deepak0880/Portfolio",
    image: "/Screenshot 1.png"
  }
];

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-blue-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900 dark:text-white">My Projects</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Below are some of the projects I have developed, demonstrating my skills in web development and problem-solving.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-md transition-colors duration-300"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative h-60 w-full overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-blue-800 dark:text-blue-400">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm transition-all duration-300 hover:bg-blue-200 dark:hover:bg-blue-900/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap justify-between gap-4 items-center">
                  <Button 
                    onClick={() => window.open(project.liveDemo, '_blank', 'noopener,noreferrer')}
                    className="bg-blue-500 hover:bg-blue-600 transition-all duration-300 transform hover:-translate-y-1"
                    disabled={project.liveDemo === "#"}
                  >
                    Live Demo <ArrowUpRight className="ml-1 h-4 w-4" />
                  </Button>
                  <Button 
                    onClick={() => window.open(project.github, '_blank', 'noopener,noreferrer')}
                    variant="outline" 
                    className="border-blue-500 dark:border-blue-400 text-blue-500 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 transform hover:-translate-y-1"
                    disabled={project.github === "#"}
                  >
                    <Github className="mr-1 h-4 w-4" /> GitHub
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
