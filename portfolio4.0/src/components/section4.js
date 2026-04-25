import React from 'react';
import { motion } from 'framer-motion';
import './section.css';
import { FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi';

export default function Section4() {
  const contactItems = [
    { icon: <FiMail />, label: 'Email', value: 'phellwege1@gmail.com', href: 'mailto:phellwege1@gmail.com' },
    { icon: <FiPhone />, label: 'Phone', value: '(208) 697-3323', href: 'tel:2086973323' },
  ];

  const socialLinks = [
    { icon: <FiGithub />, label: 'GitHub', href: 'https://github.com/phellwege' },
    { icon: <FiLinkedin />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/peter-hellwege/' },
  ];

  return (
    <section className="content-section contact-section">
      <div className="section-inner">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Get In Touch</h2>
          <div className="title-accent" />
        </motion.div>

        <div className="contact-grid">
          {contactItems.map((item, i) => (
            <motion.a
              key={i}
              href={item.href}
              className="contact-card glass-panel"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <span className="contact-icon">{item.icon}</span>
              <span className="contact-label">{item.label}</span>
              <span className="contact-value">{item.value}</span>
            </motion.a>
          ))}
        </div>

        <motion.div
          className="social-row"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {socialLinks.map((link, i) => (
            <motion.a
              key={i}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="social-link"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {link.icon}
              <span>{link.label}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
