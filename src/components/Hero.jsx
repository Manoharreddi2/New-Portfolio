import React, { useState, useEffect } from 'react';

const greetings = [
    'Hello', 'Namaste', 'Namaskaram', 'Hola', 'Bonjour', 'Vanakkam',
    'Konnichiwa', 'Annyeonghaseyo', 'Ciao',
    'Ni Hao', 'Privet', 'Assalamu Alaikum', 'Sat Sri Akal',
    'Ola', 'Hallo'
];

const Hero = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % greetings.length);
        }, 1800); // 1.8 seconds per greeting

        return () => clearInterval(interval);
    }, []);

    return (
        <header id="home" className="section-animate">
            <h1 className="hero-title">
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: 'fit-content', margin: '0 auto' }}>
                    {/* Sliding Reveal Container with Paint Effect */}
                    <div className="greeting-paint" style={{ position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', marginBottom: '10px' }}>

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
                                        top: '50%',
                                        transform: i === index ? 'translateY(-50%)' : ((i === (index - 1 + greetings.length) % greetings.length) ? 'translateY(-150%)' : 'translateY(50%)'), // Center vertically
                                        left: 0,
                                        right: 0,
                                        textAlign: 'left',
                                        paddingLeft: '15px', // Match CSS padding
                                        transition: 'transform 1.2s cubic-bezier(0.68, -0.55, 0.27, 1.55), opacity 1.2s ease',
                                        zIndex: i === index ? 2 : 1,
                                        marginTop: 0 // Reset margin
                                    }}
                                >
                                    {greet}
                                </span>
                            );
                        })}
                    </div>
                    <span className="d-block name-first" style={{ marginTop: '10px', textAlign: 'left', width: '100%' }}>I am <span className="wave-emoji">👋</span></span>
                    <span className="d-block" style={{ textAlign: 'left', width: '100%' }}><span className="name-first">Purukutapu</span> <span className="name-last">Manohar</span></span>
                </div>
            </h1>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: 'fit-content', margin: '20px auto 0' }}>
                <div className="glassy-text" style={{ margin: '0 0 20px 0', textAlign: 'left' }}>Web Developer | Problem Solver | Tech Enthusiast</div>
                <div className="contact-links" style={{ justifyContent: 'flex-start', width: '100%' }}>
                    <a href="mailto:manoharreddy2210@gmail.com">Email</a>
                    <a href="https://github.com/Manoharreddi2" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://www.linkedin.com/in/purukutapu-manohar-a40220254" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
            </div>
        </header>
    );
};

export default Hero;
