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
        }, 3000); // 3 seconds per greeting

        return () => clearInterval(interval);
    }, []);

    return (
        <header id="home" className="section-animate">
            <h1 className="hero-title">
                {/* Sliding Reveal Container */}
                <div style={{ position: 'relative', height: '1.2em', width: '100%', overflow: 'hidden', display: 'flex', justifyContent: 'center', transform: 'translateX(-50px)' }}>
                    {greetings.map((greet, i) => {
                        // Determine state: current, previous, next (or just hidden)
                        let positionClass = 'slide-hidden';
                        if (i === index) {
                            positionClass = 'slide-active';
                        } else if (i === (index - 1 + greetings.length) % greetings.length) {
                            positionClass = 'slide-exit';
                        }

                        return (
                            <span
                                key={i}
                                className={`name-first d-block absolute-greeting ${positionClass}`}
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    transition: 'transform 1.2s cubic-bezier(0.68, -0.55, 0.27, 1.55), opacity 1.2s ease', // Slower transition (1.2s)
                                    zIndex: i === index ? 2 : 1
                                }}
                            >
                                {greet}
                            </span>
                        );
                    })}
                </div>
                <span className="d-block name-first" style={{ marginTop: '10px' }}>I am <span className="wave-emoji">👋</span></span>
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
