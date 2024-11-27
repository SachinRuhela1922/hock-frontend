import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../tempelate/Navbar';

import CareerCSS from '../NavbarsCSS/Career.module.css'
import Footer from '../tempelate/Footer';
const Career = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        jobTitle: '',
        resumeLink: '',
        experience: '',
        coverLetter: ''
    });

    const [responseMessage, setResponseMessage] = useState('');

    // Handle form field changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/api/career', formData);

            setResponseMessage('Application submitted successfully!');
        } catch (error) {
            if (error.response) {

                setResponseMessage('Error submitting application: ' + error.response.data.message);
            } else if (error.request) {

                setResponseMessage('No response from the server.');
            } else {

                setResponseMessage('Error setting up request: ' + error.message);
            }
        }
    };


    return (
       <>
        <div className={CareerCSS.body}>
            <Navbar />
            <div className={CareerCSS.content}>
               <span className={CareerCSS.span}>| New Job Search</span>
            </div>
            <div className={CareerCSS.container}>
                <h1>Career Application Form</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Full Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="jobTitle">Job Title:</label>
                        <input
                            type="text"
                            id="jobTitle"
                            name="jobTitle"
                            value={formData.jobTitle}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="resumeLink">Resume Link:</label>
                        <input
                            type="url"
                            id="resumeLink"
                            name="resumeLink"
                            value={formData.resumeLink}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="experience">Experience:</label>
                        <textarea
                            id="experience"
                            name="experience"
                            value={formData.experience}
                            onChange={handleChange}
                            rows="4"
                            required
                        ></textarea>
                    </div>

                    <div className="form-group">
                        <label htmlFor="coverLetter">Cover Letter:</label>
                        <textarea
                            id="coverLetter"
                            name="coverLetter"
                            value={formData.coverLetter}
                            onChange={handleChange}
                            rows="6"
                            required
                        ></textarea>
                    </div>

                    <button type="submit">Submit Application</button>
                </form>

                {responseMessage && <p id="responseMessage">{responseMessage}</p>}
            </div>
            
        </div>
        <Footer />
       </>
       
    );
};

export default Career;
