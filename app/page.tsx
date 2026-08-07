"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PacManWebsite = () => {
  const [pellets, setPellets] = useState<boolean[]>(Array(20).fill(true));
  const [pacmanIndex, setPacmanIndex] = useState(0);
  const [isHovering, setIsHovering] = useState<string | null>(null);
  const [clickCount, setClickCount] = useState(0);

  // Pac-Man animation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setPacmanIndex((prev) => (prev + 1) % 20);
      setPellets((prev) => {
        const newPellets = [...prev];
        if (newPellets[pacmanIndex]) {
          newPellets[pacmanIndex] = false;
        }
        return newPellets;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [pacmanIndex]);

  // Reset pellets when all are eaten
  useEffect(() => {
    if (pellets.every((p) => !p)) {
      setTimeout(() => setPellets(Array(20).fill(true)), 1000);
    }
  }, [pellets]);

  const handleCoinClick = () => {
    setClickCount(clickCount + 1);
  };

  const menuItems = [
    { label: "HIGH SCORE", value: "12345" },
    { label: "CREDITS", value: "5" },
    { label: "PLAY NOW", value: ">" },
  ];

  const ghosts = [
    {
      name: "BLINKY",
      color: "arcade-red",
      description: "Chase the target aggressively",
      icon: "👻",
    },
    {
      name: "PINKY",
      color: "pink",
      description: "Ambush from the front",
      icon: "👻",
    },
    {
      name: "INKY",
      color: "cyan",
      description: "Unpredictable strategy",
      icon: "👻",
    },
    {
      name: "CLYDE",
      color: "orange",
      description: "Patrol the corners",
      icon: "👻",
    },
  ];

  const ghostColorMap: { [key: string]: string } = {
    "arcade-red": "border-red-600 shadow-glow-red",
    pink: "border-pink-500 shadow-pink-500/50",
    cyan: "border-cyan-400 shadow-cyan-400/50",
    orange: "border-orange-500 shadow-orange-500/50",
  };

  return (
    <div className="w-full min-h-screen bg-arcade-black text-arcade-white overflow-hidden">
      {/* Header Section */}
      <header className="border-b-2 border-arcade-blue bg-black/50 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 py-6 md:py-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold arcade-text text-arcade-yellow drop-shadow-lg">
              PAC-MAN
            </h1>
            <p className="text-sm md:text-base text-arcade-blue mt-2 arcade-text">
              RETRO ARCADE EXPERIENCE
            </p>
          </motion.div>
        </div>
      </header>

      {/* Hero: Pac-Man Pellet Track */}
      <section className="border-b-2 border-arcade-blue bg-black py-8 md:py-12">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="neon-border rounded-lg p-6 md:p-8 bg-black/50"
          >
            <p className="text-xs md:text-sm text-arcade-blue mb-6 arcade-text tracking-widest">
              {">"} PAC-MAN PELLET TRACK
            </p>

            {/* Pellet Track */}
            <div className="flex items-center justify-center gap-2 md:gap-3 mb-6 overflow-x-auto pb-2">
              {pellets.map((exists, idx) => (
                <motion.div
                  key={idx}
                  animate={
                    exists
                      ? {
                          scale: [1, 1.2, 1],
                          opacity: [0.6, 1, 0.6],
                        }
                      : { scale: 0, opacity: 0 }
                  }
                  transition={{ duration: 0.4, repeat: exists ? Infinity : 0 }}
                  className="w-2 h-2 md:w-3 md:h-3 bg-arcade-white rounded-full flex-shrink-0"
                />
              ))}
            </div>

            {/* Pac-Man Character */}
            <div className="relative h-12 md:h-16 flex items-center justify-start overflow-hidden rounded bg-black/80 border border-arcade-blue/30">
              <motion.div
                animate={{ x: `${pacmanIndex * 100}%` }}
                transition={{ duration: 0.2, ease: "linear" }}
                className="absolute"
              >
                <motion.div
                  animate={{
                    clipPath: [
                      "polygon(50% 50%, 100% 0%, 100% 100%)",
                      "polygon(50% 50%, 100% 25%, 100% 75%)",
                      "polygon(50% 50%, 100% 0%, 100% 100%)",
                    ],
                  }}
                  transition={{ duration: 0.2, repeat: Infinity }}
                  className="w-8 h-8 md:w-12 md:h-12 bg-arcade-yellow rounded-full flex-shrink-0"
                />
              </motion.div>
            </div>

            <p className="text-xs text-arcade-blue mt-4 arcade-text">
              PELLETS EATEN: {pellets.filter((p) => !p).length} / {pellets.length}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Navigation Scoreboard */}
      <section className="border-b-2 border-arcade-blue bg-black py-8 md:py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {menuItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + idx * 0.1, duration: 0.6 }}
                onHoverStart={() => setIsHovering(item.label)}
                onHoverEnd={() => setIsHovering(null)}
                className="neon-border rounded-lg p-6 bg-black/50 cursor-pointer relative overflow-hidden group"
              >
                {/* Background glow on hover */}
                <motion.div
                  animate={
                    isHovering === item.label
                      ? {
                          opacity: 0.2,
                          scale: 1.1,
                        }
                      : {
                          opacity: 0,
                          scale: 0.9,
                        }
                  }
                  className="absolute inset-0 bg-arcade-blue pointer-events-none"
                />

                {/* Ghost icon */}
                <motion.div
                  animate={
                    isHovering === item.label
                      ? { x: 0, opacity: 1 }
                      : { x: -10, opacity: 0 }
                  }
                  transition={{ type: "spring", stiffness: 300 }}
                  className="absolute left-4 text-2xl"
                >
                  👻
                </motion.div>

                <div className="relative z-10 pl-8 md:pl-0">
                  <p className="text-xs text-arcade-blue mb-2 arcade-text tracking-widest">
                    {item.label}
                  </p>
                  <p className="text-2xl md:text-3xl font-bold text-arcade-yellow arcade-text">
                    {item.value}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features: Ghost Team */}
      <section className="border-b-2 border-arcade-blue bg-black py-8 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-center mb-10 md:mb-16"
          >
            <h2 className="text-2xl md:text-4xl font-bold arcade-text text-arcade-blue mb-2">
              THE GHOST TEAM
            </h2>
            <p className="text-sm text-arcade-white/80">Meet your adversaries</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {ghosts.map((ghost, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + idx * 0.1, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className={`neon-border rounded-lg p-6 bg-black/50 border-2 ${ghostColorMap[ghost.color]} shadow-lg transition-all duration-300 relative group overflow-hidden`}
              >
                {/* Floating ghost animation */}
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-10"
                >
                  <div className="text-5xl mb-4 text-center">{ghost.icon}</div>
                  <h3 className="text-lg font-bold text-arcade-yellow mb-2 arcade-text text-center">
                    {ghost.name}
                  </h3>
                  <p className="text-xs md:text-sm text-arcade-white/80 text-center leading-relaxed">
                    {ghost.description}
                  </p>
                </motion.div>

                {/* Hover glow effect */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.1 }}
                  className="absolute inset-0 bg-arcade-white pointer-events-none"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black py-12 md:py-20 border-b-2 border-arcade-blue">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <p className="text-sm md:text-base text-arcade-blue mb-8 arcade-text tracking-widest">
              INSERT COIN TO PLAY
            </p>

            <motion.button
              onClick={handleCoinClick}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              animate={{
                boxShadow: [
                  "0 0 20px rgba(255, 255, 0, 0.8), 0 0 40px rgba(33, 33, 255, 0.5)",
                  "0 0 40px rgba(255, 255, 0, 1), 0 0 80px rgba(33, 33, 255, 0.8)",
                  "0 0 20px rgba(255, 255, 0, 0.8), 0 0 40px rgba(33, 33, 255, 0.5)",
                ],
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="px-8 md:px-12 py-4 md:py-6 bg-arcade-yellow text-black font-bold text-lg md:text-2xl rounded-lg arcade-text tracking-widest hover:bg-arcade-white transition-all duration-300 cursor-pointer active:scale-95 relative overflow-hidden group"
            >
              START GAME
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 bg-arcade-white/10 pointer-events-none"
              />
            </motion.button>

            <motion.p
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="mt-6 text-xs md:text-sm text-arcade-yellow arcade-text"
            >
              {clickCount > 0 && `COINS INSERTED: ${clickCount} • `}
              PRESS START TO BEGIN
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t-2 border-arcade-blue py-6 md:py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-xs md:text-sm text-arcade-blue/80 arcade-text">
            © 2024 RETRO ARCADE PRODUCTIONS • ALL RIGHTS RESERVED
          </p>
          <motion.p
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-xs text-arcade-yellow mt-2 arcade-text"
          >
            🎮 GAME OVER? PRESS CONTINUE 🎮
          </motion.p>
        </div>
      </footer>
    </div>
  );
};

export default PacManWebsite;
