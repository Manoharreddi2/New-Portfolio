import React, { useState, useEffect } from 'react';

const greetings = [
    'Hello', 'Namaste', 'Hola', 'Bonjour', 'Vanakkam',
    'Namaskaram', 'Konnichiwa', 'Annyeonghaseyo', 'Ciao',
    'Ni Hao', 'Privet', 'Assalamu Alaikum', 'Sat Sri Akal',
    'Ola', 'Hallo'
];

const Hero = () => {
    const [index, setIndex] = useState(0);
    const [fade, setFade] = useState(true); // Control fade-in/out

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false); // Start fading out
            setTimeout(() => {
                setIndex((prevIndex) => (prevIndex + 1) % greetings.length);
                setFade(true); // Start fading in next greeting
            }, 500); // Wait for half the transition time
        }, 2500); // Total interval

        return () => clearInterval(interval);
    }, []);

    return (
        <header id="home" className="section-animate">
            <h1 className="hero-title">
                {/* 
                  To achieve "one fades away while other is coming", we need a bit more than just opacity toggle.
                  But a smooth opacity transition on the same element works well if timed right.
                  The user said "one should fade away while other is coming".
                  This strictly requires absolute positioning of two elements.
                  Let's stick to the single element fade-out-then-in for simplicity first, 
                  as true overlap requires layout changes that might break flow.
                  BUT, to honor the request, let's try a cross-fade container.
                */}
                <div style={{ position: 'relative', height: '1.2em', width: '100%', display: 'flex', justifyContent: 'center' }}>
                    {greetings.map((greet, i) => (
                        <span
                            key={i}
                            className={`name-first d-block absolute-greeting ${i === index ? 'fade-in' : 'fade-out'}`}
                            style={{
                                position: 'absolute',
                                top: 0,
                                opacity: i === index ? 1 : 0,
                                transition: 'opacity 1s ease-in-out'
                            }}
                        >
                            {greet}
                        </span>
                    ))}
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
