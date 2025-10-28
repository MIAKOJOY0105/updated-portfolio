import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { FaWhatsapp, FaPhoneAlt, FaPaperPlane } from "react-icons/fa";
import "../styles/contact.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          reply_to: form.email,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setSent(true);
        setLoading(false);
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setSent(false), 4000);
      })
      .catch(() => {
        setLoading(false);
        alert("❌ Message could not be sent. Please try again later.");
      });
  };

  return (
    <section id="contact" className="contact-section">
      {/* 🌟 Floating background gradient */}
      <div className="glow-orb orb1"></div>
      <div className="glow-orb orb2"></div>

      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="contact-title"
      >
        Let’s Connect & Collaborate
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="contact-sub"
      >
        Reach out directly through WhatsApp or send me an email using this form.
      </motion.p>

      {/* 🚀 Quick Links */}
      <motion.div
        className="quick-links"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <a href="tel:+254713491645" className="link-btn phone">
          <FaPhoneAlt /> Call
        </a>
        <a
          href="https://wa.me/254713491645?text=Hello%20Joyce!%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect."
          target="_blank"
          rel="noreferrer"
          className="link-btn whatsapp"
        >
          <FaWhatsapp /> WhatsApp
        </a>
      </motion.div>

      {/* 💬 Contact Form */}
      <motion.form
        onSubmit={handleSubmit}
        className="contact-form"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        <div className="input-group">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <label>Your Name</label>
        </div>

        <div className="input-group">
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <label>Your Email</label>
        </div>

        <div className="input-group">
          <textarea
            name="message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            required
          />
          <label>Your Message</label>
        </div>

        <motion.button
          type="submit"
          disabled={loading}
          className={`send-btn ${sent ? "sent" : ""}`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaPaperPlane />
        </motion.button>

        {sent && (
          <motion.p
            className="sent-msg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            ✅ Message sent successfully!
          </motion.p>
        )}
      </motion.form>
    </section>
  );
}
