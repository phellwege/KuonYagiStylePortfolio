import React from 'react';
import { motion } from 'framer-motion';
import './aboutMe.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import { Pagination } from 'swiper';
import JavaScript from '../static/JavaScript.png';
import Java from '../static/java.png';
import Python from '../static/python.png';
import jQuery from '../static/jQuery.png';
import Ajax from '../static/ajax.png';
import Bootstrap from '../static/bootstrap.png';
import Node from '../static/nodejs.png';
import Express from '../static/expressjs.png';
import MySQL from '../static/mysql.png';
import Django from '../static/django.png';
import MongoDB from '../static/mongodb.png';
import Html from '../static/HTML.png';
import Css from '../static/CSS.png';

const skills = [
  { img: JavaScript, name: 'JavaScript', years: '6 yrs' },
  { img: Java, name: 'Java', years: '1 yr' },
  { img: Python, name: 'Python', years: '6 yrs' },
  { img: jQuery, name: 'jQuery', years: '4 yrs' },
  { img: Ajax, name: 'Ajax', years: '4 yrs' },
  { img: Bootstrap, name: 'Bootstrap', years: '3 yrs' },
  { img: Node, name: 'Node', years: '6 yrs' },
  { img: Express, name: 'Express', years: '5 yrs' },
  { img: MySQL, name: 'SQL', years: '5 yrs' },
  { img: Django, name: 'Django', years: '3 yrs' },
  { img: MongoDB, name: 'MongoDB', years: '4 yrs' },
  { img: Html, name: 'HTML', years: '6 yrs' },
  { img: Css, name: 'CSS', years: '6 yrs' },
];

const trifoldData = [
  {
    title: 'Data',
    text: 'Work as a Data Engineer with a fortune 100 company. Writing complex SQL queries for an onPrem server and migrated that server to Azure Cloud Services. Utilize Azure Data Bricks extensively and Azure Data Factory. Assist with the architecture design, creation, and implementation of data pipelines.',
  },
  {
    title: 'Full-Stack',
    text: 'Comfortable with multiple languages, and full software life cycles. Work extensively with ReactJS as a front-end framework, and Node as a backend, but experienced with multiple other Frameworks, and Servers including OOP stacks. Comfortable with Python for data processing and ingestion, or Django for web applications.',
  },
  {
    title: 'Story',
    text: "I first discovered software engineering somewhat by accident. I was working odd jobs in customer service, sales, and technical support. I needed something that used my mind, and required some problem solving. Enter Software engineering - I've been loving it ever since.",
  },
];

export default function AboutMe2() {
  return (
    <section className="about-skills-section">
      <motion.div
        className="skills-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">Experience</h2>
        <h4 className="skills-subtitle">with Technology</h4>
        <div className="title-accent" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Swiper
          pagination={{ dynamicBullets: true }}
          modules={[Pagination]}
          className="skills-swiper"
          slidesPerView={3}
          spaceBetween={20}
          breakpoints={{
            0: { slidesPerView: 2, spaceBetween: 10 },
            600: { slidesPerView: 3, spaceBetween: 15 },
            900: { slidesPerView: 4, spaceBetween: 20 },
          }}
        >
          {skills.map((skill, i) => (
            <SwiperSlide key={i}>
              <div className="skill-card glass-panel">
                <img src={skill.img} alt={skill.name} />
                <h4>{skill.name}</h4>
                <span className="skill-years">{skill.years}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      <div className="trifold-grid">
        {trifoldData.map((item, i) => (
          <motion.div
            key={i}
            className="trifold-card glass-panel"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 * i }}
          >
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
