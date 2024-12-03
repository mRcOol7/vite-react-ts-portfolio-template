import React from 'react';
import { motion } from 'framer-motion';
import { CircuitBoard } from 'lucide-react';

// Define the props type for the component
interface FuturisticCardProps {
  title: string;
  description: string;
}

const FuturisticCard: React.FC<FuturisticCardProps> = ({ title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="glass-panel p-6 w-full max-w-sm hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300"
    >
      <div className="flex items-center gap-3 mb-4">
        <CircuitBoard className="w-6 h-6 text-cyan-400" />
        <h3 className="text-xl font-semibold gradient-text">{title}</h3>
      </div>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default FuturisticCard;
