import React, { useState } from 'react';
import Navbar from './tempelate/Navbar';
import AppointCSS from '../component/css/Appointment.module.css';
import axios from 'axios';
import Footer from './tempelate/Footer';

const Appointment = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        project: '',
        function: '',
        description: '',
        skills: '' // Will store the selected skill
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/appointments', formData);
            console.log('Appointment submitted:', response.data);
            // Optionally reset form
            setFormData({ name: '', email: '', project: '', function: '', description: '', skills: '', projectname: '' });
        } catch (error) {
            console.error('Error submitting appointment:', error.response ? error.response.data : error.message);
        }
    };

    return (
        <div>
            <Navbar />
            <div className={AppointCSS.body}>
                <h2 className={AppointCSS.head}><span className={AppointCSS.subhead}>Home/ </span> Project Section</h2>
                <p className={AppointCSS.intro}>A platform where innovation meets execution. We encourage individuals to share their creative ideas or project concepts, and our team collaborates to bring them to life. From brainstorming to implementation, we turn visionary ideas into functional realities, fostering innovation and skill development along the way.</p>
                <h3 className={AppointCSS.head2}>Benefits to add or work on project</h3>
                <p className={AppointCSS.benefits}><b>1. Skill Development:</b> Work on real-world projects that enhance your technical and problem-solving abilities in frontend development, backend development, and UI/UX design.
                    <br />
                    <b>2. Collaborative Learning:</b> Collaborate with a team of experts, gaining valuable insights and feedback that can accelerate your growth.
                    <br />
                    <b>3. Innovative Environment:</b> Bring your ideas to life in a dynamic, innovative environment, where creativity is encouraged and solutions are built from scratch.
                    <br />
                    <b>4. Portfolio Building:</b> Contribute to impactful projects that can be added to your professional portfolio, showcasing your hands-on experience and technical skills.
                    <br />
                    <b>5. Exposure to Industry Standards:</b> Work on projects that follow industry best practices, using modern tools and technologies to prepare you for future opportunities.
                    <br />
                    <b>6. Networking Opportunities:</b> Connect with like-minded professionals and potential mentors, expanding your professional network.
                    <br />
                    <b>7. Hands-On Experience:</b> Gain real-world experience by working on live projects, which gives you a competitive edge in the job market.
                    <br />
                    <b>8. Growth Potential:</b> Be part of a growing startup that offers opportunities for career advancement, learning, and leadership roles.</p>
               
                <form className={AppointCSS.form} onSubmit={handleSubmit}>
                <h1 className={AppointCSS.h1}>Register your Project</h1>
                    <div className={AppointCSS.format}>
                        <label className={AppointCSS.label}>Name:</label>
                        <input
                            className={AppointCSS.input}
                            type="text"
                            name="name"
                            placeholder='Full Name'
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={AppointCSS.format}>
                        <label className={AppointCSS.label}>Email:</label>
                        <input
                            className={AppointCSS.input}
                            type="email"
                            name="email"
                            placeholder='Email'
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={AppointCSS.format}>
                        <label className={AppointCSS.label}>Project Name</label>
                        <input
                            className={AppointCSS.input}
                            type="text"
                            placeholder='Project Name'
                            name="projectname"
                            value={formData.projectname}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={AppointCSS.format}>
                        <label className={AppointCSS.label}>Project Type:</label>
                        <select
                            className={AppointCSS.input}
                            name="project"

                            value={formData.project}
                            onChange={handleChange}
                            required
                        >
                            <option value="" disabled>
                                Select
                            </option>
                            <option value="Website">Website</option>
                            <option value="Web Application">Web Application</option>
                            <option value="Mobile Application">Mobile Application</option>
                            <option value="Desktop Software">Desktop Software</option>
                            <option value="Full Stack Application">Full Stack Application</option>
                            <option value="Frontend-only Project">Frontend-only Project</option>
                            <option value="Backend-only Project">Backend-only Project</option>
                            <option value="Hybrid Application">Hybrid Application</option>
                            <option value="Progressive Web Application">Progressive Web Application</option>
                            <option value="Microservices-Based Project">Microservices-Based Project</option>
                            <option value="Static Website">Static Website</option>
                            <option value="Dynamic Website">Dynamic Website</option>
                            <option value="Content Management System">Content Management System</option>
                            <option value="Game Development">Game Development</option>
                            <option value="IoT Based Application">IoT Based Application</option>
                        </select>
                    </div>
                    <div className={AppointCSS.format}>
                        <label className={AppointCSS.label}>Function:</label>
                        <input
                            className={AppointCSS.input}
                            type="text"
                            name="function"
                            placeholder='Function of Project'
                            value={formData.function}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={AppointCSS.format}>
                        <label className={AppointCSS.label}>Description:</label>
                        <textarea
                            className={AppointCSS.input}
                            type="text"
                            name="description"
                            placeholder='Description'
                            value={formData.description}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={AppointCSS.format}>
                        <label className={AppointCSS.label}>Skills:</label>
                        <input
                            className={AppointCSS.input}
                            name="skills"
                            placeholder='Skills'
                            value={formData.skills}
                            onChange={handleChange}
                            required />


                    </div>
                    <button className={AppointCSS.btn} type="submit">
                        Submit
                    </button>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default Appointment;
