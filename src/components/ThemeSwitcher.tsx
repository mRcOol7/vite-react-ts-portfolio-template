import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Palette, Monitor } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

type Theme = 'light' | 'dark' | 'cyberpunk' | 'minimal';

interface ThemeOption {
  name: Theme;
  icon: React.ReactNode;
  label: string;
}

const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
    setIsOpen(false);
  };

  const themes: ThemeOption[] = [
    { name: 'light', icon: <Sun className="w-4 h-4" />, label: 'Light' },
    { name: 'dark', icon: <Moon className="w-4 h-4" />, label: 'Dark' },
    { name: 'cyberpunk', icon: <Monitor className="w-4 h-4" />, label: 'Cyberpunk' },
    { name: 'minimal', icon: <Palette className="w-4 h-4" />, label: 'Minimal' },
  ];

  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-full bg-gray-800 text-gray-200 hover:bg-gray-700"
      >
        <Palette className="w-5 h-5" />
      </motion.button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="absolute right-0 mt-2 w-48 rounded-lg shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5"
        >
          <div className="py-1">
            {themes.map((t) => (
              <button
                key={t.name}
                onClick={() => handleThemeChange(t.name)}
                className={`w-full px-4 py-2 text-sm flex items-center space-x-2 hover:bg-gray-700 ${
                  theme === t.name ? 'text-cyan-400' : 'text-gray-300'
                }`}
              >
                {t.icon}
                <span>{t.label}</span>
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ThemeSwitcher;
