// src/components/Hero.jsx
import React, { useCallback } from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { Link } from "react-router-dom";
import "../styles/hero.css";

export default function Hero() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <section className="hero-section">
      {/* Animated particle background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: { value: "#0a0a0f" } },
          fpsLimit: 60,
          particles: {
            color: { value: ["#a855f7", "#38bdf8", "#f472b6"] },
            links: { color: "#a855f7", distance: 120, enable: true, opacity: 0.3 },
            move: { enable: true, speed: 1 },
            size: { value: { min: 1, max: 3 } },
            opacity: { value: 0.5 },
          },
          interactivity: {
            events: { onHover: { enable: true, mode: "repulse" } },
            modes: { repulse: { distance: 80 } },
          },
        }}
      />

      <div className="hero-content">
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I’m <span className="highlight">Joyce Njeri Miako</span>
        </motion.h1>

        <motion.h2
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Data Scientist & Machine Learning Engineer
        </motion.h2>

        <motion.p
          className="hero-text"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          I specialize in <b>AI-driven solutions</b> — from <b>LSTM forecasting</b> and
          <b> NLP models</b> to real-time <b>AI applications</b> that make a difference.
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <Link to="/projects" className="btn-primary">
            🚀 Explore Projects
          </Link>
          <Link to="/contact" className="btn-outline">
            📬 Get in Touch
          </Link>
        </motion.div>

        {/* Quick tech highlights */}
        <motion.div
          className="hero-tech"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <span> Python</span>
          <span> TensorFlow</span>
          <span> NLP</span>
          <span> Time-Series</span>
          <span> Streamlit</span>
          <span> Flask</span>
        </motion.div>
      </div>
    </section>
  );
}
