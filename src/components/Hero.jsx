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
        }, 300);

        return () => clearInterval(interval);
    }, []);

    return (
        <header id="home" className="section-animate">
            <div className="greeting">
                {greetings[index]}, I am <span className="wave-emoji">👋</span>
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
