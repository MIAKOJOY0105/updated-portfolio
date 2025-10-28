import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/cv.css";

export default function CV() {
  const [showCV, setShowCV] = useState(false);
  const [showCerts, setShowCerts] = useState(false);
  const [selectedCert, setSelectedCert] = useState("");

  const certificates = [
    { name: "AWS - AI Practitioner", file: "assets/certs/Intro to morden AI.pdf" },
    { name: "Cisco - Introduction to Data Science", file: "assets/certs/CISCO iNTRO TO DATA SCIENCE Cert.pdf" },
    { name: "Introduction To Networking", file: "assets/certs/Intro to networking.pdf" },
    { name: "IBM - Exploring Emerging Technologies", file: "assets/certs/ibm_cert2.pdf" },
    { name: "IBM - Working in a Digital World", file: "assets/certs/ibm cert 1.pdf" },
    { name: "Computer Packages Certificate", file: "assets/certs/COMPUTER PACKEGES Cert.pdf" },
    { name: "Joyce Miako Cover Letter", file: "assets/certs/MIAKO JOYCE NJERI COVER LETTER.pdf" },
    { name: "SKIES (World Skills) AI Practitioner & Data Science", file: "assets/certs/SKIES Cert.pdf" },
    { name: "Bachelors Degree", file: "assets/certs/degree cert.pdf" },
  ];

  return (
    <section className="cv-section">
      <div className="container">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2>My CV & Certificates</h2>
          <div className="line-dec"></div>
          <p>
            Explore my professional background and certifications. These are
            view-only and secured within modals.
          </p>
        </motion.div>

        <div className="cv-grid">
          {/* CV Card */}
          <motion.div
            className="cv-card"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <h3>Curriculum Vitae</h3>
            <p>
              A summary of my education, technical expertise, and experience.
              Click below to view it in a secure embedded viewer.
            </p>
            <button className="btn gradient1" onClick={() => setShowCV(true)}>
              View CV
            </button>
          </motion.div>

          {/* Certificates Card */}
          <motion.div
            className="cv-card"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <h3>Certificates</h3>
            <p>
              Explore my verified academic and technical certifications.
              Each document is view-only for authenticity preservation.
            </p>
            <button className="btn gradient2" onClick={() => setShowCerts(true)}>
              View Certificates
            </button>
          </motion.div>
        </div>

        {/* CV Modal */}
        <AnimatePresence>
          {showCV && (
            <motion.div
              className="modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="modal-box"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
              >
                <div className="modal-header">
                  <h4>Curriculum Vitae — Joyce Njeri Miako</h4>
                  <button className="modal-close-btn" onClick={() => setShowCV(false)}>
                    ✕
                  </button>
                </div>
                <iframe
                  src="assets/docs/Miako-Joyce-CV.pdf#toolbar=0&navpanes=0"
                  className="viewer-iframe"
                  title="Joyce CV"
                ></iframe>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Certificates Modal */}
        <AnimatePresence>
          {showCerts && (
            <motion.div
              className="modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="modal-box"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
              >
                <div className="modal-header">
                  <h4>Certificates — Select to View</h4>
                  <button className="modal-close-btn" onClick={() => setShowCerts(false)}>
                    ✕
                  </button>
                </div>
                <div className="modal-body">
                  <p>Select a certificate below to open it securely:</p>
                  <ul className="cert-list">
                    {certificates.map((c, i) => (
                      <li key={i}>
                        <button
                          className="btn cert-btn"
                          onClick={() => setSelectedCert(c.file)}
                        >
                          {c.name}
                        </button>
                      </li>
                    ))}
                  </ul>

                  {selectedCert && (
                    <div className="cert-viewer">
                      <iframe
                        src={selectedCert + "#toolbar=0&navpanes=0"}
                        className="viewer-iframe"
                        title="Certificate"
                      ></iframe>
                      <div style={{ textAlign: "right", marginTop: "10px" }}>
                        <button
                          className="btn close-red"
                          onClick={() => setSelectedCert("")}
                        >
                          Close Certificate
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
