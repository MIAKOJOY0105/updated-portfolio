import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ParticleBackground from "../components/ParticleBackground";

export default function Home() {
  // Skill tags — each links to a specific page or section
  const skillTags = [
    { label: "Machine Learning", link: "/projects" },
    { label: "NLP", link: "/projects" },
    { label: "Time Series", link: "/projects" },
    { label: "AgriTech AI", link: "/projects" },
    { label: "Health Analytics", link: "/projects" },
    { label: "Voice AI", link: "/projects" },
    { label: "MLOps", link: "/skills" },
    { label: "Python | TensorFlow | Flask | Streamlit", link: "/skills" },
  ];

  return (
    <section
      style={{
        position: "relative",
        zIndex: 2,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        overflow: "hidden",
        background: "radial-gradient(circle at 20% 20%, #00111f, #000a13 90%)",
      }}
    >
      {/* 🌌 Particle Background */}
      <ParticleBackground />

      {/* 🪩 Floating glowing orbs */}
      <div
        style={{
          position: "absolute",
          width: "450px",
          height: "450px",
          background: "radial-gradient(circle, rgba(0,229,255,0.25), transparent)",
          borderRadius: "50%",
          top: "10%",
          left: "8%",
          filter: "blur(80px)",
          animation: "float 8s ease-in-out infinite alternate",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          width: "380px",
          height: "380px",
          background: "radial-gradient(circle, rgba(0,255,163,0.18), transparent)",
          borderRadius: "50%",
          bottom: "10%",
          right: "12%",
          filter: "blur(80px)",
          animation: "float2 10s ease-in-out infinite alternate",
        }}
      ></div>

      {/* 👩‍💻 Profile Image */}
      <motion.img
        src="/assets/images/author.jpg"
        alt="Joyce Njeri Miako"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.08, rotate: 2 }}
        style={{
          width: "240px",
          height: "240px",
          borderRadius: "50%",
          border: "3px solid rgba(0,229,255,0.7)",
          boxShadow: "0 0 45px rgba(0,229,255,0.4)",
          objectFit: "cover",
          marginBottom: "1rem",
          zIndex: 3,
        }}
      />

      {/* 🧠 Intro Section */}
      <motion.div
        style={{ zIndex: 3, padding: "0 1rem", maxWidth: "850px" }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          style={{
            fontSize: "2.8rem",
            color: "#fff",
            fontWeight: 700,
            marginBottom: "0.8rem",
            textShadow: "0 0 15px rgba(0,229,255,0.6)",
          }}
        >
          Hi, I’m <span style={{ color: "#00e5ff" }}>Joyce Njeri Miako</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{
            fontSize: "1.3rem",
            color: "#a1a1aa",
            fontWeight: 500,
            marginBottom: "1.2rem",
          }}
        >
          Data Scientist • AI Engineer • Research Innovator
        </motion.h2>

        <motion.p
          style={{
            maxWidth: "760px",
            color: "#c9d1d9",
            lineHeight: "1.7",
            fontSize: "1.05rem",
            margin: "0 auto",
          }}
        >
          I specialize in <strong>AI-driven solutions</strong> that connect{" "}
          <strong>research and real-world applications</strong>. With a strong background in{" "}
          <strong>LSTM forecasting</strong>, <strong>Natural Language Processing</strong>, and{" "}
          <strong>AI deployment pipelines</strong>, I focus on building technology that{" "}
          <strong>improves lives</strong> — from <strong>precision agriculture</strong> and{" "}
          <strong>mental health detection</strong> to <strong>voice-assisted accessibility tools</strong>.
        </motion.p>

        {/* 🔘 Buttons */}
        <motion.div
          style={{
            marginTop: "32px",
            display: "flex",
            justifyContent: "center",
            gap: "16px",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <Link
            className="btn-primary"
            to="/projects"
            style={{
              padding: "12px 28px",
              borderRadius: "12px",
              background: "linear-gradient(90deg, #00e5ff, #00ffa3)",
              color: "#0f2027",
              fontWeight: 600,
              boxShadow: "0 0 25px rgba(0,229,255,0.6)",
              textDecoration: "none",
            }}
          >
            Explore Projects
          </Link>

          <Link
            className="btn-outline"
            to="/contact"
            style={{
              padding: "12px 28px",
              borderRadius: "12px",
              border: "2px solid #00e5ff",
              color: "#00e5ff",
              fontWeight: 600,
              textDecoration: "none",
              transition: "0.3s",
            }}
            onMouseEnter={(e) => {
              e.target.style.background = "#00e5ff";
              e.target.style.color = "#000";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "transparent";
              e.target.style.color = "#00e5ff";
            }}
          >
            Get In Touch
          </Link>
        </motion.div>

        {/* 🧩 Skill Badges (clickable links) */}
        <motion.div
          style={{
            marginTop: "2.8rem",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "1rem",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          {skillTags.map((tag, i) => (
            <Link
              key={i}
              to={tag.link}
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.2)",
                color: "#fff",
                padding: "0.6rem 1.2rem",
                borderRadius: "9999px",
                fontSize: "0.95rem",
                textDecoration: "none",
                transition: "all 0.3s ease",
                boxShadow: "0 0 10px rgba(0,229,255,0.25)",
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "linear-gradient(90deg,#00e5ff,#00ffa3)";
                e.target.style.color = "#000";
                e.target.style.boxShadow = "0 0 30px rgba(0,229,255,0.6)";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "rgba(255,255,255,0.08)";
                e.target.style.color = "#fff";
                e.target.style.boxShadow = "0 0 10px rgba(0,229,255,0.25)";
              }}
            >
              {tag.label}
            </Link>
          ))}
        </motion.div>
      </motion.div>

      {/* 🔮 Floating Animations */}
      <style>
        {`
          @keyframes float {
            from { transform: translateY(0); }
            to { transform: translateY(30px); }
          }
          @keyframes float2 {
            from { transform: translateY(0); }
            to { transform: translateY(-30px); }
          }
        `}
      </style>
    </section>
  );
}
