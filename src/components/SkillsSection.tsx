import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Code,Computer, Database, Settings,UserRoundCog } from 'lucide-react';

interface Skill {
  category: string;
  icon: ReactNode;
  items: string[];
}

interface SkillSectionProps {
  id: string;
}

const skills: Skill[] = [
  {
    category: "Web Development",
    icon: <Code />,
    items: ["HTML", "CSS", "Javascript", "React","Bootstrap"],
  },
  {
    category: "BackEnd",
    icon: <Computer />,
    items: ["PHP", "MySQL"],
  },
  {
    category: "Database",
    icon: <Database />,
    items: ["SQL", "NoSQL", "Data Modeling Techniques"],
  },
  {
    category: "Sotware Engineering",
    icon: <Settings />,
    items: ["software design", "development", "testing methodologies"],
  },
    {
    category: "Soft Skills",
    icon: <UserRoundCog />,
    items: ["Effective Communication", " Quick Learner", "Adaptability"],
  },
];

const SkillsSection: React.FC<SkillSectionProps> = ({ id }) => {
  return (
    <section id={id} className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">Skills & Expertise</h2>
          <p className="text-gray-400">Comprehensive toolkit for modern development</p>
        </motion.div>

        <div id="SkillsSection" className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-panel p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-cyan-400">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold">{skill.category}</h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="text-gray-400">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
