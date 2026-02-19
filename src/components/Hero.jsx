import React, { useState, useEffect } from 'react';

const greetings = [
    'Hello', 'Namaste', 'Hola', 'Bonjour', 'Vanakkam',
    'Namaskaram', 'Konnichiwa', 'Annyeonghaseyo', 'Ciao',
    'Ni Hao', 'Privet', 'Assalamu Alaikum', 'Sat Sri Akal',
    'Ola', 'Hallo'
];

const Hero = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % greetings.length);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <header id="home" className="section-animate">
            <h1 className="hero-title">
                <span className="d-block fade-in-text name-first">{greetings[index]}</span>
                <span className="d-block name-first">I am <span className="wave-emoji">👋</span></span>
                <span className="d-block"><span className="name-first">Purukutapu</span> <span className="name-last">Manohar</span></span>
            </h1>
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
