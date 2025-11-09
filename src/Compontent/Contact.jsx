import React from 'react'
import { MdLocationOn } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import  { useRef } from 'react';
import emailjs, { send } from '@emailjs/browser';
import Futter from './Futter';
const Contact = React.forwardRef((props, ref) => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_poge9aq', 'template_zarc7jr', form.current, {
        publicKey: 'ZQIkrfIh6OkQlA6nC',
      })
      .then(
        (result) => {
          console.log('SUCCESS!');
          form.current.reset();
          alert("SUCCESS")
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert(error,"failed")
        },
      );
  };
  return (
    <section ref={ref} className='section contact'>
      <h1>Contact</h1>
      <div className='contact-section'>
        <div >
          <div className='side-container'>
            <div className='location-item'>
              <span><MdLocationOn /></span>
              <div>
                <h3>Location</h3>
                <p>Bangladesh, Dhaka</p>
              </div>

            </div>
            <div className='location-item'>
              <span><MdEmail /></span>
              <div>
                <h3>Email</h3>
                <p>apomojumder688@gmail.com</p>
              </div>
            </div>
            <div className="icons-about">
              <div className="fa-con"><a href="https://www.facebook.com/apo.mojumder/"><span className="fa"><FaFacebook /></span></a> </div>
              <div className="in-con"><a href="https://www.instagram.com/samapo419/"><span className="in"><FaInstagramSquare /></span></a></div>
              <div className="gi-con"><a href="https://github.com/ap514-cst/"><span className="gi"><FaGithubSquare /></span></a></div>
              <div className="li-con"><a href="https://www.linkedin.com/in/sam-apo-6322b4319/"> <span className="li"><FaLinkedin /></span></a></div>
            </div>
          </div>

        </div>
        <div>
          <form ref={form} onSubmit={sendEmail} className='contact-form'>
            <div className='form-group'>
              <input type="text" placeholder='Your Name' name="user_name" />
            </div>
            <div className='form-group'>
              <input type="text" placeholder='Your Email' name="user_email" />
            </div>
            
            <div className="form-group">
              <textarea placeholder='Your Message' name="message" required></textarea>
            </div>
            <button className='btn' type='submit'>Submit</button>
          </form>
        </div>
      </div>
      
    </section>
  )
});

export default Contact
