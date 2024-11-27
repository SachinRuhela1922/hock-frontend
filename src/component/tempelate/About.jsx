import React from 'react'
import AboutCSS from '../css/About.module.css'
import image from '../images/ab.svg'

const About = () => {
    return (
        <div className={AboutCSS.body}>
            <div className={AboutCSS.content}>
                <h1 className={AboutCSS.h1}>About Us</h1>
                <p className={AboutCSS.p}>At Hockmad, we are dedicated to empowering individuals through skill development and real-world project experience. Our goal is to bridge the gap between education and industry by providing hands-on training across web development, backend development, and UI/UX design.<br />
                    <br />
                    We believe in building a future where every learner has the tools, knowledge, and opportunities to excel in their career. Whether you're looking to enhance your technical skills or work on innovative projects, Hockmad offers a platform that helps you grow and succeed in the rapidly evolving tech world.<br />
                    <br />
                    Join us to start your journey towards a brighter, more skilled future!</p>
                    <button className={AboutCSS.btn}>Know More..</button>
            </div>
            <div className={AboutCSS.images}>
                <img className={AboutCSS.imgsvg} src={image} alt="" />
            </div>
        </div>
    )
}

export default About
