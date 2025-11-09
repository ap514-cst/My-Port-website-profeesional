import React, { useState } from 'react'
import chatt from "../Compontent/img/chat.avif"
import e from "../Compontent/img/e.jpg"
import portfolioo from "../Compontent/img/portfolio.jpg"
const Project =React.forwardRef ((props,ref) => {
    const [chat,setchat]=useState(false)
    const [portfolio,setPortfolio]=useState(false)
    const [landing,setLanding]=useState(false)
    const [ecommerce,setEcommerce]=useState(false)
    
    const handlerchat=()=>{
        setchat(!chat)
    }
    const handlerPortfolio=()=>{
        setPortfolio(!portfolio)
    }
   
    const handlerlanding=()=>{
        setLanding(!landing)
    }
    const handlercommerce=()=>{
        setEcommerce(!ecommerce)
    }
    
  return (
    <section ref={ref} className='section project'>
        <div >
            <h1 style={{textAlign:"center"}}>My Project</h1>
            <div className="project-container">
                <div className="project-box" onMouseMove={handlerchat}>
                    <img src={chatt} alt="" />
                    <span>complete</span>
                    <h3>Chat-App design</h3>
                    <p>Connect instantly with friends using real-time messaging powered by Socket.io and Node.js.</p>
                    {chat && <a href=''>Live</a>}
                </div>
                <div className="project-box" onMouseOver={handlerPortfolio}>
                    <img src={portfolioo} alt="" />
                    <span>complete</span>
                    <h3>Porfolio Website</h3>
                    <p>A modern, responsive portfolio that showcases my projects, skills, and creativity.</p>
                    {portfolio && <a href="https://apsammojumder.netlify.app/">Live</a>}
                    
                </div>
                <div className="project-box" onMouseOver={handlerlanding}>
                    <img src={chatt} alt="" />
                    <span>complete</span>
                    <h3>landing</h3>
                    <p>A smooth, animated loading screen built with React and CSS to enhance user experience.</p>
                    {landing && <a href=''>Live</a>}
                </div>
                <div className="project-box"onMouseOver={handlercommerce}>
                    <img src={e} alt="" />
                    <span>complete</span>
                    <h3>E-commerce Website</h3>
                    <p>A complete online shopping experience built with React, Node.js, and MongoDB.</p>
                    {ecommerce && <a href=''>Live</a>}
                </div>
                <div className="project-box">
                    <img src={chatt} alt="" />
                    <span className='file-u'>In progress</span>
                    <h3>File Uploader</h3>
                    <p>Upload and manage files securely with a clean and intuitive interface.</p>
                </div>
            </div>
        </div>
    </section>
  )
})

export default Project
