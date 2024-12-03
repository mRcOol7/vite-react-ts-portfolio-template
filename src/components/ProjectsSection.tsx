import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubLink: string;
  liveLink: string;
  orientation: 'landscape' | 'portrait';
}

interface ProjectSectionProps {
  id?: string;
}

const projects: Project[] = [
  {
    title: "Attendance System",
    description: "Real-time Python face recognition with training, live detection, and name display.",
    image: "https://i.ibb.co/LPgg2FL/facestm.png",
    tags: ["React", "Python", "TensorFlow"],
    githubLink: "https://github.com/devdii/Attedance-System",
    liveLink: "#",
    orientation: 'landscape',
  },
  {
    title: "Food Order System",
    description: "A PHP-based project allowing users to select and add items to their cart",
    image: "https://i.ibb.co/J2jmf5g/food-order-system-1.png",
    tags: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/devdii/online-food-order-system",
    liveLink: "#",
    orientation: 'portrait',
  },
  {
    title: "Personal Portfolio",
    description: "A simple portfolio website created using HTML, CSS, and JavaScript",
    image: "https://i.ibb.co/hYJkgH9/Dev-Chauhan-Portfolio-12-03-2024-10-04-PM.png",
    tags: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/devdii/personal-portfolio",
    liveLink: "https://devdii.netlify.app/",
    orientation: 'portrait',
  },
  {
    title: "Slot Machine",
    description: "An interactive JavaScript project featuring dynamic player results.",
    image: "https://i.ibb.co/4M0fwkc/slot-machine-1.png",
    tags: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/devdii/slot-machine",
    liveLink: "#",
    orientation: 'portrait',
  },
];

const ProjectsSection: React.FC<ProjectSectionProps> = ({ id }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id={id} className="py-20 relative bg-gray-900 text-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-cyan-400">Featured Projects</h2>
          <p className="text-gray-400 text-lg">
            A showcase of my recent work and experiments, designed to inspire and inform.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-lg shadow-lg bg-gray-800`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-90 transition-opacity flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                <div className="flex gap-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
