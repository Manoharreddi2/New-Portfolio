import React from 'react';

const Education = () => {
    return (
        <section id="education" className="section-animate">
            <h2>Education</h2>
            <div className="education-grid">
                <div className="education-item section-animate" style={{ transitionDelay: '0s' }}>
                    <div className="education-header">
                        <div>
                            <h3>Bachelor of Technology</h3>
                            <p className="education-degree">Computer Science and Engineering (AIML)</p>
                            <p className="education-location">St Peter's Engineering College</p>
                        </div>
                        <span className="education-year">2021 - 2025</span>
                    </div>
                </div>

                <div className="education-item section-animate" style={{ transitionDelay: '0.1s' }}>
                    <div className="education-header">
                        <div>
                            <h3>Intermediate</h3>
                            <p className="education-degree">Maths Stream (MPC)</p>
                            <p className="education-location">Sri Chaitanya Junior College</p>
                        </div>
                        <span className="education-year">2019 - 2021</span>
                    </div>
                </div>


                <div className="education-item section-animate" style={{ transitionDelay: '0.2s' }}>
                    <div className="education-header">
                        <div>
                            <h3>School</h3>
                            <p className="education-degree"> General Studies</p>
                            <p className="education-location">Wisdom Spaes School</p>
                        </div>
                        <span className="education-year"> Till 2019</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
