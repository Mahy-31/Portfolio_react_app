import React from 'react';
import about from '../assets/about.jpg';
import '../styles/About.css';

function About() {
    return (
        <div className="about" style={{ backgroundImage: `url(${about})` }}>
            <div className="content">
                <h1>GET TO KNOW ME</h1>
                <p className="myself">
                    I am a dedicated software developer with over 1 years of experience in creating responsive applications. With a strong foundation in front-end development, I am proficient in languages such as C++, Python, and JavaScript. My expertise lies in designing scalable software solutions,and optimizing code for performance. I thrive in collaborative environments and enjoy working closely with cross-functional teams to deliver high-quality products that meet and exceed client expectations. My passion for continuous learning keeps me updated with the latest industry trends and technologies, ensuring that my skills remain sharp and relevant.
                </p>
                <h1>SKILLS</h1>
                <div className="skills">
                    <div className="languages">
                        <h3>Languages known:</h3>
                        <li>HTML5</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                        <li>C++</li>
                        <li>SQL</li>
                        <li>Python</li>
                    </div>
                    <div className="tools">
                        <h3>Developer tools:</h3>
                        <li>VS code</li>
                        <li>Figma</li>
                    </div>
                    <div className="frameworks">
                        <h3>Technologies/Frameworks:</h3>
                        <li>React Js</li>
                        <li>Bootstrap</li>
                        <li>Github</li>
                    </div>
                    <div className="soft">
                        <h3>Soft skills:</h3>
                        <li>Team work</li>
                        <li>Leadership</li>
                        <li>Time management</li>
                        <li>Communication</li>
                    </div>
                </div>
                <div className="work">
                <h1>WORK EXPERIENCE</h1>
                <p>Codsoft conducted a winter virtual internship program for college students to enhance their skills and proficiency in their respective domains. 
                   I opted for the Web Development domain, where I was assigned a set of projects comprising a portfolio, landing page, and calculator, each with specific requirements. 
                   This internship provided me with a wealth of experience in web development, which I believe will be beneficial for future endeavors.</p>
                   <p>Made projects like: Landing page, Calculator, online quiz website and portfolio</p>
                </div>
            </div>
        </div>
    )
}

export default About
