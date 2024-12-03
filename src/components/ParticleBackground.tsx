import React from 'react';
import { Particles } from "@tsparticles/react";
import type { ISourceOptions } from "@tsparticles/engine";

const ParticleBackground: React.FC = () => {
  const options: ISourceOptions = {
    background: {
      color: {
        value: "transparent", // Transparent background
      },
    },
    fpsLimit: 120, // Maximum FPS
    particles: {
      color: {
        value: "#38bdf8", // Particle color (cyan)
      },
      links: {
        color: "#38bdf8", // Link color
        distance: 150, // Distance for links
        enable: true, // Enable links
        opacity: 0.2, // Link opacity
        width: 1, // Link width
      },
      move: {
        enable: true, // Enable particle movement
        speed: 0.5, // Particle movement speed
      },
      number: {
        density: {
          enable: true, // Enable density
        },
        value: 80, // Number of particles
      },
      opacity: {
        value: 0.2, // Particle opacity
      },
      size: {
        value: { min: 1, max: 3 }, // Size range for particles
      },
    },
  };

  return (
    <Particles
      id="tsparticles"
      options={options}
      className="absolute inset-0 -z-10"
    />
  );
};

export default ParticleBackground;
