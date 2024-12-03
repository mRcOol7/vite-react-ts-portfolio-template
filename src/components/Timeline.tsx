import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Circle } from 'lucide-react';

// Define the type for each event in the timeline
interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

// Define the events array with the TimelineEvent type
const events: TimelineEvent[] = [
  {
    year: '2025',
    title: 'Master of Computer Applications - Parul University, Vadodara',
    description: 'Completed advanced studies in computer applications, focusing on AI and innovative technologies.',
  },
  {
    year: '2023',
    title: 'Bachelor of Computer Applications - M.K. Institute of Computer Studies, Bharuch',
    description: 'Graduated with a strong foundation in software development, project management, and global IT operations.',
  },
  {
    year: '2020',
    title: 'Higher Secondary Education(12th) - Panini Pragna Parab, Rajpaldi',
    description: 'Achieved academic excellence with a focus on science and technology, setting the stage for further studies.',
  },
  {
    year: '2018',
    title: 'Secondary Education(10th) - J.B. Modi Vidhyalaya, Bharuch',
    description: 'Built a solid academic foundation, excelling in mathematics and computer science.',
  },
];


// Define the props for the Timeline component, including the id
interface TimelineProps {
  id: string;
  onSectionChange?: (section: string) => void; // Make it optional with ?
}

const Timeline: React.FC<TimelineProps> = ({ id, onSectionChange }) => {
  const [activeEvent, setActiveEvent] = useState<TimelineEvent | null>(null);

  const handleEventClick = (event: TimelineEvent) => {
    setActiveEvent(event === activeEvent ? null : event);
  };

  return (
    <div
      id={id}
      className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900 relative overflow-hidden"
    >
      <h2 className="text-3xl font-bold text-center text-cyan-400 mb-8">My Journey</h2>
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gray-700" />

        {/* Map over events to display each event */}
        {events.map((event, index) => (
          <motion.div
            key={event.year}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "tween",
              delay: index * 0.2,
              duration: 0.5
            }}
            className={`relative flex items-center mb-12 ${
              index % 2 === 0 ? 'justify-start' : 'justify-end'
            }`}
            // Trigger onSectionChange when the section is in view
            onViewportEnter={() => onSectionChange && onSectionChange(id)}
          >
            {/* Center Dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <Circle
                className={`w-4 h-4 cursor-pointer ${
                  activeEvent === event ? 'text-cyan-600' : 'text-cyan-400'
                } fill-current`}
                onClick={() => handleEventClick(event)}
              />
            </div>

            {/* Content Box */}
            <div
              className={`w-full md:w-5/12 ${
                index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'
              }`}
            >
              <div
                className={`glass-panel p-6 hover:shadow-cyan-500/10 transition-shadow cursor-pointer ${
                  activeEvent === event ? 'bg-gray-800' : ''
                }`}
                onClick={() => handleEventClick(event)}
              >
                <span className="text-cyan-400 font-mono">{event.year}</span>
                <h3 className="text-xl font-semibold mt-2 mb-3">{event.title}</h3>
                {activeEvent === event && (
                  <p className="text-gray-400">{event.description}</p>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;