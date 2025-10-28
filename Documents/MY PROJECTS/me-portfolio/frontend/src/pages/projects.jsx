import React, { useState } from "react";
import projectsData from "../data/projectsData";
import "../styles/projects.css"; // style file from earlier

const categories = ["*", "climate", "health", "food", "education", "agriculture", "others"];

export default function Projects() {
  const [active, setActive] = useState("*");

  const filtered = active === "*" ? projectsData : projectsData.filter(p => p.category === active);

  return (
    <section className="section my-work" id="projects">
      <div className="section-heading" data-aos="fade-up">
        <h2>My Projects</h2>
        <div className="line-dec"></div>
        <span>
          Explore data science and AI projects by category. Click a project to view its details and tools.
        </span>
      </div>

      <div className="isotope-toolbar" data-aos="zoom-in">
        {categories.map(cat => (
          <label
            key={cat}
            className={active === cat ? "active" : ""}
            onClick={() => setActive(cat)}
          >
            {cat === "*" ? "All" : cat.charAt(0).toUpperCase() + cat.slice(1)}
          </label>
        ))}
      </div>

      <div className="projects-grid" data-aos="fade-up">
        {filtered.map(project => (
          <div className="project-card" key={project.id}>
            <div className="project-thumb">
              <img src={project.img} alt={project.title} />
            </div>
            <div className="project-info">
              <h4>{project.title}</h4>
              <p>{project.desc}</p>
              <div className="tech-tags">
                {project.tools.map((tool, idx) => (
                  <span key={idx}>{tool}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.demo} target="_blank" rel="noreferrer" className="view-btn">Live Demo</a>
                <a href={project.github} target="_blank" rel="noreferrer" className="view-btn github">GitHub</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
