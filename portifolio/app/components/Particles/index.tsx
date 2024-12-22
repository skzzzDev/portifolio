"use client";

import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback, useMemo } from "react";

const ParticlesComponent = () => {
  const options = useMemo(() => {
    return {
      particles: {
        links: {
          enable: true,
        },
        move: {
          enable: true,
        },
        number: {
          density: {
            enable: true,
          },
          value: 100,
        },
        opacity: {
          value: 0.1,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: 1,
        },
      }
    };
  }, []);

  const particlesInit = useCallback((engine: any) => {
    return Promise.resolve(loadSlim(engine));
  }, []);
  
  return <Particles init={particlesInit} options={options} />;
};

export default ParticlesComponent;
