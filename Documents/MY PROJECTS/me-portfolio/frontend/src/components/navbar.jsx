import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  // Change navbar style on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: scrolled
          ? "rgba(10, 25, 47, 0.7)"
          : "rgba(10, 25, 47, 0.4)",
        backdropFilter: "blur(14px)",
        borderBottom: "1px solid rgba(0,229,255,0.2)",
        boxShadow: scrolled
          ? "0 4px 30px rgba(0,229,255,0.2)"
          : "0 0 10px rgba(0,229,255,0.1)",
        transition: "all 0.4s ease-in-out",
        padding: scrolled ? "10px 28px" : "18px 28px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {/* Profile + Name */}
        <motion.div
          className="brand"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            textDecoration: "none",
            color: "#fff",
          }}
        >
          <motion.img
            src="/assets/images/author.jpg"
            alt="Joyce"
            whileHover={{ scale: 1.1, rotate: 3 }}
            transition={{ type: "spring", stiffness: 200 }}
            style={{
              width: "55px",
              height: "55px",
              borderRadius: "50%",
              border: "2px solid rgba(0,229,255,0.6)",
              boxShadow: "0 0 20px rgba(0,229,255,0.4)",
              objectFit: "cover",
            }}
          />
          <div>
            <div
              style={{
                fontWeight: 700,
                fontSize: "1rem",
                background: "linear-gradient(90deg,#00e5ff,#00ffa3)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              Joyce Njeri Miako
            </div>
            <div
              style={{
                fontSize: "0.8rem",
                color: "rgba(255,255,255,0.7)",
              }}
            >
              Data Scientist | ML Engineer
            </div>
          </div>
        </motion.div>

        {/* Navigation Links */}
        <nav
          style={{
            display: "flex",
            gap: "20px",
            fontWeight: 500,
          }}
        >
          {[
            { name: "About", path: "/" },
            { name: "Skills", path: "/skills" },
            { name: "Projects", path: "/projects" },
            { name: "CV", path: "/cv" },
            { name: "Contact", path: "/contact" },
          ].map((link, i) => (
            <NavLink
              key={i}
              to={link.path}
              style={({ isActive }) => ({
                color: isActive ? "#00e5ff" : "#fff",
                textDecoration: "none",
                position: "relative",
                transition: "0.3s",
                fontSize: "0.95rem",
              })}
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  <motion.span
                    layoutId="underline"
                    style={{
                      position: "absolute",
                      left: 0,
                      bottom: -5,
                      height: "2px",
                      width: isActive ? "100%" : "0%",
                      background: "linear-gradient(90deg,#00e5ff,#00ffa3)",
                      borderRadius: "2px",
                      transition: "width 0.3s ease",
                    }}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
