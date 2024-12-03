import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code, Database } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Stars } from '@react-three/drei';

interface Feature {
  icon: React.ReactNode;
  text: string;
}

interface HeroSectionProps {
  id?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ id }) => {
  const features: Feature[] = [
    { icon: <Code className="w-6 h-6" />, text: 'Modern Tech Stack' },
    { icon: <Database className="w-6 h-6" />, text: 'Scalable Solutions' },
  ];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id={id} className="pt-20 pb-32 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-transparent" />

      {/* Main Content */}
      <div className="container mx-auto px-4 max-w-screen-xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Column */}
          <div className="flex-1 z-10">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"
            >
              {/* Title and Sparkles Animation */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="inline-block mb-6"
              >
                <span className="w-12 h-12 text-cyan-400">✨</span> {/* Sparkles effect */}
              </motion.div>

              <h1 className="text-6xl lg:text-7xl font-bold mb-6 neon-glow gradient-text leading-tight">
                Dev Chauhan
              </h1>

              <p className="text-gray-400 text-xl max-w-2xl mb-8">
                MCA student specializing in Artificial Intelligence at Parul University, proficient in Python and Java with a strong foundation in software development and database management. Skilled in tackling complex IT challenges and creating innovative solutions.
              </p>

              {/* Features List */}
              <div className="flex flex-wrap gap-6 mb-12">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="flex items-center gap-3 bg-gray-800/50 rounded-full px-6 py-3"
                  >
                    <span className="text-cyan-400">{feature.icon}</span>
                    <span className="text-gray-300">{feature.text}</span>
                  </motion.div>
                ))}
              </div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex gap-4"
              >
                <motion.a
                  href="#contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                >
                  Get in Touch
                </motion.a>
                <motion.a
                  href="#projects"
                  className="px-8 py-4 border border-gray-700 rounded-lg font-semibold hover:bg-gray-800/50 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                >
                  View Projects
                </motion.a>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column (3D Element) */}
          {!isMobile && (
            <div className="flex-1 h-[500px] w-full hide-on-mobile">
              <Canvas
                camera={{ position: [0, 0, 5] }}
                style={{ width: '100%', height: '100%' }}
              >
                {/* Disable ESLint for these lines */}
                {/* eslint-disable-next-line react/no-unknown-property */}
                <ambientLight intensity={0.5} />
                {/* eslint-disable-next-line react/no-unknown-property */}
                <pointLight position={[10, 10, 10]} />
                <OrbitControls enableZoom={false} />
                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
                <Sphere args={[1, 32, 32]}>
                  <MeshDistortMaterial
                    color="#3182CE"
                    attach="material"
                    distort={0.5}
                    speed={2}
                  />
                </Sphere>
              </Canvas>
            </div>
          )}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl" />
      <div className="absolute top-10 right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl" />
    </section>
  );
};

export default HeroSection;