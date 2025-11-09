import React from 'react'

const Education = React.forwardRef((props, ref) => {
    return (
        <section ref={ref} className='section eduction'>
            <div className='main-eduction'>
                <h1 style={{ textAlign: "center" }}>My <span style={{ color: "#00ffff" }}>Education</span></h1>
                <div className="hero-education">
                    <div className="eduction-container">
                        <div className="container">
                            <span>2019-2021</span>
                            <h3>Secondary School Certificate(SSC)</h3>
                            <p>Description:Completed my SSC in Science group with a strong interest in technology and  programing. This stage built my foundation in logical thinking and problem-solving.</p>
                        </div>
                        <div className="container">
                            <span>2021-2025</span>
                            <h3>Diploma in Computer Engineering</h3>
                            <p>Description: Currently pursuing my Diploma in Computer Engineering. I’ve learned key technologies like HTML, CSS, JavaScript, React, and Node.js while working on real-life projects.</p>
                        </div>
                        <div className="container">
                            <span>2024</span>
                            <h3>MERN Stack Development Course</h3>
                            <p>Description: Completed a full-stack development course focused on the MERN stack (MongoDB, Express, React, Node.js). Built multiple projects to strengthen my backend and frontend skills.</p>
                        </div>
                        <div className="container">
                            <span>Ongoing</span>
                            <h3>Self Learning & Projects</h3>
                            <p>Description: I constantly explore new tools, frameworks, and best practices to enhance my development skills. Learning through online resources and personal projects helps me grow every day.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
})

export default Education
