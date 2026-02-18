import React from 'react';

const Hero = () => {
    return (
        <header id="home" className="section-animate">
            <div className="greeting">
                Hello, I am <span className="wave-emoji">👋</span>
            </div>

            <h1><span className="name-first">Purukutapu</span> <span className="name-last">Manohar</span></h1>
            <div className="glassy-text">Web Developer | Problem Solver | Tech Enthusiast</div>
            <div className="contact-links">
                <a href="mailto:manoharreddy2210@gmail.com">Email</a>
                <a href="https://github.com/Manoharreddi2" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://www.linkedin.com/in/purukutapu-manohar-a40220254" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
        </header>
    );
};

export default Hero;
