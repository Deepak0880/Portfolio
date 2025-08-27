
import React from "react";
import { Download, Calendar, Briefcase, Book } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TimelineItem {
  id: number;
  title: string;
  organization: string;
  period: string;
  description: string;
  type: "education" | "experience";
}

const timelineItems: TimelineItem[] = [
  {
    id: 1,
    title: "B.Tech in Computer Science",
    organization: "K.R. Mangalam University",
    period: "2022 - 2026",
    description: "B.Tech in Computer Science and Engineering with a CGPA of 8.0/10",
    type: "education"
  },
  {
    id: 3,
    title: "Full Stack Development Intern",
    organization: "Xebia IT Architects Pvt. Ltd.",
    period: "May 2025 - July 2025",
    description: "Developed responsive web applications using React and Node.js. Collaborated with the design team to implement UI/UX improvements.",
    type: "experience"
  },
  {
    id: 2,
    title: "Mechanical Engineering",
    organization: "Government Polytechnic College, Sirsa",
    period: "2021 - 2023",
    description: "Completed diploma in Mechanical Engineering with 80% marks",
    type: "education"
  },
  {
    id: 4,
    title: "Higher Secondary Education",
    organization: "Suraj School",
    period: "2020 - 2021",
    description: "Graduated with 79.8 marks with Physics and Mathematics as major subjects.",
    type: "education"
  }
];

const ResumeSection: React.FC = () => {
  return (
    <section id="resume" className="py-20 bg-blue-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900 dark:text-white">Resume & Experience</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My academic background and professional experience are outlined below.
          </p>
          <a
            href="/My_Resume.pdf"
            download
            className="inline-flex items-center mt-6 bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded transition-all duration-300 transform hover:-translate-y-1"
          >
            <Download className="mr-2 h-4 w-4" /> Download Resume
          </a>
        </div>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-300 dark:bg-blue-600"></div>
          
          <div className="space-y-12">
            {timelineItems.map((item, index) => (
              <div 
                key={item.id}
                className={`flex flex-col md:flex-row items-center animate-slide-in`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:order-1'}`}>
                  <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                    <div className="flex items-center mb-2 md:justify-end">
                      {item.type === "education" ? (
                        <Book className="h-5 w-5 text-blue-500 dark:text-blue-400 mr-2 md:order-2 md:ml-2 md:mr-0" />
                      ) : (
                        <Briefcase className="h-5 w-5 text-blue-500 dark:text-blue-400 mr-2 md:order-2 md:ml-2 md:mr-0" />
                      )}
                      <h3 className="text-xl font-bold text-blue-800 dark:text-blue-400">{item.title}</h3>
                    </div>
                    <h4 className="text-blue-500 dark:text-blue-400 font-medium">{item.organization}</h4>
                    <div className="flex items-center my-2 md:justify-end">
                      <Calendar className="h-4 w-4 text-gray-500 dark:text-gray-400 mr-1 md:order-2 md:ml-1 md:mr-0" />
                      <span className="text-gray-500 dark:text-gray-400 text-sm">{item.period}</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                  </div>
                </div>
                
                {/* Timeline Icon */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 dark:bg-blue-600 text-white border-4 border-white dark:border-gray-800 shadow-md my-4 md:my-0 z-10 transform transition-all duration-300 hover:scale-110">
                  {item.type === "education" ? (
                    <Book className="h-4 w-4" />
                  ) : (
                    <Briefcase className="h-4 w-4" />
                  )}
                </div>
                
                {/* Empty div for layout on alternate sides */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? '' : 'md:order-0'}`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
