import React from 'react'
import html from "../Compontent/img/html.png"
import css from "../Compontent/img/css.png"
import react from "../Compontent/img/react.png"
import node from "../Compontent/img/node.png"
import express from "../Compontent/img/express.png"
import javascrpit from "../Compontent/img/javascrpit.png"
import mongodb from "../Compontent/img/mongodb.png"
import redux from "../Compontent/img/code.png"
import next from "../Compontent/img/next2.png"
import socket from "../Compontent/img/socket.png"
const Skill = React.forwardRef((props, ref) => {
  return (
    <section ref={ref} className='section Skill'>
      <div className="main-skill-continer">
        <h2 style={{ textAlign: "center", padding: "10px 0px",fontSize:"2rem" }}>My <span style={{ color: "#00ffff" }}>Skill</span></h2>

        <div className="skill-container">
          <div className="skill">
            <img src={html} alt="" />
            <h3>HTML</h3>
          </div>
          <div className="skill">
            <img src={css} alt="" />
            <h3>CSS</h3>
          </div>
          <div className="skill">
            <img src={javascrpit} alt="" />
            <h3>JAVASCRIPT</h3>
          </div>
          <div className="skill">
            <img src={react} alt="" />
            <h3>REACTJS</h3>
          </div>
          <div className="skill">
            <img style={{backgroundColor:"white",borderRadius:"20%",
            }} src={next} alt="" />
            <h3>NEXTJS</h3>
          </div>
          <div className="skill">
            <img src={redux} alt="" />
            <h3>REDUX-TOOLKIT</h3>
          </div>
          <div className="skill">
            <img src={socket} alt="" />
            <h3>SOCKET.IO</h3>
          </div>
          <div className="skill">
            <img src={node} alt="" />
            <h3>NODEJS</h3>
          </div>
          <div className="skill">
            <img src={express} alt="" />
            <h3>EXPRESSJS</h3>
          </div>
          <div className="skill">
            <img src={mongodb} alt="" />
            <h3>MONGODB</h3>
          </div>
          

        </div>
      </div>
    </section>
  )
});

export default Skill
