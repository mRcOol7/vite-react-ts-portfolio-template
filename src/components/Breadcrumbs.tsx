import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';

interface BreadcrumbsProps {
  currentSection: string;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ currentSection }) => {
  const sections = ['Home', 'About', 'Skills', 'Timeline', 'Projects', 'Contact'] as const;
  const currentIndex = sections.findIndex(
    (section) => section.toLowerCase() === currentSection.toLowerCase()
  );

  return (
    <nav
      className="fixed top-16 left-4 z-50 md:block hidden"
      aria-label="Breadcrumb"
    >
      <ol
        className="flex flex-wrap items-center space-x-2 bg-gray-900/80 border border-gray-700 shadow-md backdrop-blur-md rounded-lg px-4 py-3"
        role="list"
      >
        {sections.slice(0, currentIndex + 1).map((section, index) => (
          <li
            key={section}
            className="flex items-center transition-all duration-300 ease-in-out"
          >
            {index > 0 && (
              <ChevronRight className="w-4 h-4 text-gray-500 mx-2" />
            )}
            <ScrollLink
              to={section.toLowerCase()}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className={`
                ${
                  index === currentIndex
                    ? 'text-cyan-400 font-semibold'
                    : 'text-gray-400 hover:text-cyan-300 transition-colors'
                }
                cursor-pointer text-sm md:text-base
              `}
              activeClass="text-cyan-400 font-semibold"
            >
              {section}
            </ScrollLink>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default React.memo(Breadcrumbs);
