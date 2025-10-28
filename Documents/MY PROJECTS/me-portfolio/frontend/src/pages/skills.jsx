import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/skills.css";

export default function Skills() {
  const [openIndex, setOpenIndex] = useState(null);

  const skillGroups = [
    {
      title: "Core AI / ML",
      color: "linear-gradient(135deg, #ff8a00, #e52e71)",
      skills: [
        { name: "Python", level: 95 },
        { name: "TensorFlow", level: 90 },
        { name: "PyTorch", level: 88 },
        { name: "Scikit-Learn", level: 92 },
        { name: "Pandas", level: 95 },
        { name: "NumPy", level: 94 },
      ],
    },
    {
      title: "Data Science & Visualization",
      color: "linear-gradient(135deg, #00c6ff, #0072ff)",
      skills: [
        { name: "Matplotlib", level: 85 },
        { name: "Seaborn", level: 88 },
        { name: "Plotly", level: 90 },
        { name: "Power BI", level: 60 },
        { name: "Excel", level: 87 },
        { name: "Jupyter Notebooks", level: 95 },
      ],
    },
    {
      title: "Web & Deployment",
      color: "linear-gradient(135deg, #7928ca, #ff0080)",
      skills: [
        { name: "Flask", level: 90 },
        { name: "Streamlit", level: 93 },
        { name: "FastAPI", level: 85 },
        { name: "React", level: 70 },
        { name: "Docker", level: 60 },
        { name: "Git/GitHub", level: 92 },
      ],
    },
    {
      title: "Specializations",
      color: "linear-gradient(135deg, #43e97b, #38f9d7)",
      skills: [
        { name: "Time Series", level: 94 },
        { name: "NLP", level: 91 },
        { name: "Computer Vision", level: 84 },
        { name: "MLOps", level: 78 },
        { name: "AgriTech", level: 90 },
        { name: "Healthcare AI", level: 83 },
      ],
    },
  ];

  return (
    <section className="skills-section">
      <div className="skills-bg"></div>

      <div className="container">
        <motion.h2
          className="section-title gradient-text"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Skills & Expertise
        </motion.h2>

        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Click on any skill category to view detailed proficiencies and tools I
          specialize in. Each bar represents my practical mastery and
          experience with the technology.
        </motion.p>

        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <motion.div
              key={index}
              className="skill-card"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.2 }}
            >
              <button
                className="skill-header"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                style={{
                  background: group.color,
                  borderRadius: "10px",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <span className="skill-icon">{group.icon}</span>
                <h3>{group.title}</h3>
                <span className="arrow">
                  {openIndex === index ? "▲" : "▼"}
                </span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.ul
                    className="skills-list"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    {group.skills.map((skill, i) => (
                      <motion.li
                        key={i}
                        className="skill-item"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * i }}
                      >
                        <div className="skill-name">
                          {skill.name}
                          <span className="skill-percent">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="progress-bar">
                          <motion.div
                            className="progress-fill"
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 0.6 }}
                          />
                        </div>
                      </motion.li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
