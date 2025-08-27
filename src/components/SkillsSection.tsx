
import React from "react";
import { Code, Database, Globe, File } from "lucide-react";

interface SkillCategory {
  id: number;
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    id: 1,
    title: "Frontend",
    icon: <Globe className="h-8 w-8 skill-icon" />,
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS",]
  },
  {
    id: 2,
    title: "Backend",
    icon: <Database className="h-8 w-8 skill-icon" />,
    skills: ["Node.js", "Express", "MongoDB",]
  },
  {
    id: 3,
    title: "Languages",
    icon: <Code className="h-8 w-8 skill-icon" />,
    skills: ["C++", "TypeScript", "Python", "Java", ]
  },
  {
    id: 4,
    title: "Tools",
    icon: <File className="h-8 w-8 skill-icon" />,
    skills: [ "Blender","AutoCAD", "Figma","Spline 3D","GitHub", "VS Code", ]
  }
];

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900 dark:text-white">My Skills</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here is a summary of the technologies and tools I have worked with during my academic and project experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.id} 
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 animate-slide-in transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center mb-6 group">
                {category.icon}
                <h3 className="text-xl font-bold ml-3 text-blue-800 dark:text-blue-400">{category.title}</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill) => (
                  <div 
                    key={skill} 
                    className="flex items-center group"
                  >
                    <div className="w-2 h-2 rounded-full bg-blue-500 dark:bg-blue-400 mr-2 group-hover:scale-150 transition-all duration-300"></div>
                    <span className="text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-all duration-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
