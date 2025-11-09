import React from 'react'
import img from "../Compontent/img/about.png"
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const About = React.forwardRef((props, ref) => {
  return (
    <section ref={ref} className='section about'>
      <div className='hr-tag'>
        <h2>About me </h2>
        <hr />
      </div>
      <div className='main-about-container'>
        <div className='about-img'>
          <img src={img} alt="" />
        </div>
        <div className='about-text-section'>
          <h2>Hi! I’m Sam Mojumder Apo, </h2>
          <p>a passionate MERN Stack Developer and a Diploma Engineering student who loves building clean, responsive, and user-friendly web applications.I enjoy turning creative ideas into real, functional projects using MongoDB, Express, React, and Node.js. I’m always exploring new technologies and improving my skills to create better digital experiences.When I’m not coding, you’ll probably find me learning something new, solving problems, or brainstorming my next big project idea.Let’s connect and build something amazing together! 🚀</p>
          <div className="icons-about">
            <div className="fa-con"><a href="https://www.facebook.com/apo.mojumder/"><span className="fa"><FaFacebook /></span></a> </div>
            <div className="in-con"><a href="https://www.instagram.com/samapo419/"><span className="in"><FaInstagramSquare /></span></a></div>
            <div className="gi-con"><a href="https://github.com/ap514-cst/"><span className="gi"><FaGithubSquare /></span></a></div>
            <div className="li-con"><a href="https://www.linkedin.com/in/sam-apo-6322b4319/"> <span className="li"><FaLinkedin /></span></a></div>
          </div>
         <a href="/cv.pdf" download={"Apo_Mojumder.pdf"}> <button>DOWNLOAD CV</button></a>
        </div>
      </div>

    </section>
  )
});

export default About
