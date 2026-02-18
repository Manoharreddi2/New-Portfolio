import React from 'react';

const Projects = () => {
    return (
        <section id="projects" className="section-animate">
            <h2>Projects</h2>
            <div className="projects-grid">
                <div className="project-card section-animate" style={{ transitionDelay: '0s' }}>
                    <h3>Zybus</h3>
                    <p>A full-stack Bus Ticket Booking application with a pure black theme, React frontend, Spring Boot
                        backend, and Firebase and Payment Gateway integration with Razorpay.</p>
                    <div className="project-links">
                        <a href="https://zybus.vercel.app/" target="_blank" rel="noopener noreferrer" className="project-link">
                            <svg className="github-icon" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                            Web App Link
                        </a>

                        <a href="https://github.com/Manoharreddi2/Zybus" target="_blank" rel="noopener noreferrer" className="project-link">
                            <svg className="github-icon" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                            View Code
                        </a>
                    </div>
                    <div className="project-tech">
                        <span className="tech-badge">React.js</span>
                        <span className="tech-badge">Spring Boot</span>
                        <span className="tech-badge">Firebase</span>
                    </div>
                </div>

                <div className="project-card section-animate" style={{ transitionDelay: '0.15s' }}>
                    <h3>Task Management API</h3>
                    <p>Built a secure Task Management REST API using Spring Boot with stateless JWT authentication,
                        Spring Security, Hibernate, and MySQL.</p>
                    <div className="project-links">
                        <a href="https://github.com/Manoharreddi2/Task-Project" target="_blank" rel="noopener noreferrer" className="project-link">
                            <svg className="github-icon" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                            View Code
                        </a>
                    </div>
                    <div className="project-tech">
                        <span className="tech-badge">Java 21 </span>
                        <span className="tech-badge">SpringBoot</span>
                        <span className="tech-badge">JWT</span>
                        <span className="tech-badge">Spring Security</span>
                        <span className="tech-badge">Postman</span>

                        <span className="tech-badge">Maven</span>
                        <span className="tech-badge">MySQL</span>
                        <span className="tech-badge">REST API</span>
                    </div>
                </div>

                <div className="project-card section-animate" style={{ transitionDelay: '0.3s' }}>
                    <h3>Student Management System</h3>
                    <p>A Spring Boot REST API for managing student records using JPA and MySQL, supporting full CRUD
                        operations.</p>
                    <div className="project-links">
                        <a href="https://github.com/Manoharreddi2/demoForJpa" target="_blank" rel="noopener noreferrer" className="project-link">
                            <svg className="github-icon" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                            View Code
                        </a>
                    </div>
                    <div className="project-tech">
                        <span className="tech-badge">Java</span>
                        <span className="tech-badge">SpringBoot</span>
                        <span className="tech-badge">MySQL</span>
                        <span className="tech-badge">Postman</span>
                        <span className="tech-badge">JPA</span>
                        <span className="tech-badge">Maven</span>

                    </div>
                </div>

                <div className="project-card section-animate" style={{ transitionDelay: '0.45s' }}>
                    <h3>AI-Powered-House-Interior-Design
                    </h3>
                    <p>Developed an AI-powered Interior Design Remodeling application using the Replicate API, enabling
                        users to upload images and generate realistic redesigned interiors through prompt-based inputs.
                    </p>
                    <div className="project-links">
                        <a href="https://github.com/Manoharreddi2/AI-Powered-House-Interior-Design" target="_blank" rel="noopener noreferrer"
                            className="project-link">
                            <svg className="github-icon" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                            View Code
                        </a>
                    </div>
                    <div className="project-tech">
                        <span className="tech-badge">Python</span>
                        <span className="tech-badge">Replicate API</span>
                        <span className="tech-badge">DelphiFMX</span>
                        <span className="tech-badge">Image Processing</span>
                        <span className="tech-badge">REST APIs</span>
                    </div>
                </div>

                <div className="project-card section-animate" style={{ transitionDelay: '0.6s' }}>
                    <h3>Driver Drowsiness Detection System Using ML</h3>
                    <p>Developed a Driver Drowsiness Detection system using machine learning algorithms to monitor
                        driver alertness. Implemented real-time facial recognition and alert mechanisms to ensure safety
                        on the road</p>
                    <div className="project-links">
                        <a href="https://github.com/Manoharreddi2/Driver-Drowsiness-Detection" target="_blank" rel="noopener noreferrer"
                            className="project-link">
                            <svg className="github-icon" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                            View Code
                        </a>
                    </div>
                    <div className="project-tech">
                        <span className="tech-badge">Python</span>
                        <span className="tech-badge">OpenCV</span>
                        <span className="tech-badge">TensorFlow</span>
                    </div>
                </div>

                <div className="project-card section-animate" style={{ transitionDelay: '0.75s' }}>
                    <h3>Fake Accounts Detection Using ML</h3>
                    <p>Built a Fake Account Detection system using ANN with TensorFlow. Handled data preprocessing,
                        model training, and evaluation in Python. Created a Tkinter GUI for real-time profile
                        prediction.</p>
                    <div className="project-links">
                        <a href="https://github.com/Manoharreddi2/Fake-Accounts-Detection-Using-ML" target="_blank" rel="noopener noreferrer"
                            className="project-link">
                            <svg className="github-icon" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                            View Code
                        </a>
                    </div>
                    <div className="project-tech">
                        <span className="tech-badge">Python</span>
                        <span className="tech-badge">TensorFlow</span>
                        <span className="tech-badge">Tkinter</span>
                        <span className="tech-badge">ANN</span>
                    </div>
                </div>

                <div className="project-card section-animate" style={{ transitionDelay: '0.9s' }}>
                    <h3>Nike Website</h3>
                    <p>Created a fully functional Nike website, focusing on responsive design and seamless user
                        navigation. Implemented dynamic features and optimized performance for an engaging shopping
                        experience.</p>
                    <div className="project-links">
                        <a href="https://github.com/Manoharreddi2/Projectt-Nike" target="_blank" rel="noopener noreferrer" className="project-link">
                            <svg className="github-icon" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                            View Code
                        </a>
                    </div>
                    <div className="project-tech">
                        <span className="tech-badge">HTML</span>
                        <span className="tech-badge">CSS</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
