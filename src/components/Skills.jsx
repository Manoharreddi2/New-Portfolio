import React from 'react';

const Skills = () => {
    return (
        <section id="skills" className="section-animate">
            <h2>Technical Skills</h2>
            <div className="skills-grid">
                <div className="skill-category section-animate" style={{ transitionDelay: '0s' }}>
                    <h3>Frontend Development</h3>
                    <div className="skill-tags">
                        <span className="skill-tag">HTML</span>
                        <span className="skill-tag">CSS</span>
                        <span className="skill-tag">JavaScript</span>
                        <span className="skill-tag">React.js</span>
                    </div>
                </div>

                <div className="skill-category section-animate" style={{ transitionDelay: '0.1s' }}>
                    <h3>Backend Development</h3>
                    <div className="skill-tags">
                        <span className="skill-tag">Java</span>
                        <span className="skill-tag">Spring Boot</span>
                        <span className="skill-tag">JDBC</span>
                        <span className="skill-tag">MYSQL (DB)</span>
                        <span className="skill-tag">Python</span>
                    </div>
                </div>

                <div className="skill-category section-animate" style={{ transitionDelay: '0.2s' }}>
                    <h3>Computer Science Subjects</h3>
                    <div className="skill-tags">
                        <span className="skill-tag">DSA</span>
                        <span className="skill-tag">Operating Systems</span>
                        <span class="skill-tag">Computer Networks</span>
                    </div>
                </div>

                <div className="skill-category section-animate" style={{ transitionDelay: '0.3s' }}>
                    <h3>Build & Tools</h3>
                    <div className="skill-tags">
                        <span className="skill-tag">Git</span>
                        <span className="skill-tag">GitHub</span>
                        <span className="skill-tag">Postman</span>
                        <span className="skill-tag">Intellij</span>
                        <span className="skill-tag">VS Code</span>
                        <span className="skill-tag">Jupyter Notebook</span>
                    </div>
                </div>

                <div className="skill-category section-animate" style={{ transitionDelay: '0.4s' }}>
                    <h3>Soft Skills</h3>
                    <div className="skill-tags">
                        <span className="skill-tag">Communication</span>
                        <span className="skill-tag">Teamwork</span>
                        <span className="skill-tag">Leadership</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
