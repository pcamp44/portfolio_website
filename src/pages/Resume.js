import { Link } from "react-router-dom";

export default function Resume() {
    return (
        <div className="resume py-5">
            <div className="header">
                <h2>Pauline Campos</h2>
                <nav className="resume-nav">
                    <ul>
                        <li><Link to={"/"}>Home</Link>
                        </li>
                        <li><a href="#summary">Summary</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#education">Education</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#non-technical-experience">Non-technical Experience</a></li>
                    </ul>
                </nav>
            </div>
            <div id="summary" className="resume-section">
                <h3>Summary</h3>
                <p>Enthusiastic I.T. graduate with strong foundations in software development, modern web technologies, and security principles. Passionate about problem solving, continuous learning and contributing to innovated teams to create impactful solutions. </p>
            </div>
            <div id="skills" className="resume-section">
                <h3>Skills</h3>
                <table>
                    <tr>
                        <th>Progamming Languages</th>
                        <td>Javascript, Python, C, C#</td>
                    </tr>
                     <tr>
                        <th>Web & Database</th>
                        <td>React, Node.js HTML5, CSS3, Bootstrap, SQL, MySQL, MongoDb</td>
                    </tr>
                    <tr>
                        <th>Development Tools</th>
                        <td>GitHub, Figma, CLI (Command Line Interface), Visual Studio Code, LaTeX</td>
                    </tr>
                    <tr>
                        <th>Non-technical Skills</th>
                         <td>Communication, customer service, collaboration, critical thinking</td>
                    </tr>
                </table>
            </div>
            <div id="education" className="resume-section">
                <h3>Education</h3>
                <h5>BIT IN COMPUTER SCIENCE</h5>
                <p><i>QUEENSLAND UNIVERSITY OF TECHNOLOGY (GRADUATED DEC 2024)</i></p>
                <table>
                    <tr>
                        <th>Minors</th>
                        <td>Networks & Security, IoT & Mobile Technologies</td>
                    </tr>
                    <tr>
                        <th>Relevant Coursework</th>
                        <td> Web Computing, Modern Data Management, Software Development, Programming Principles, Algorithms & Complexity</td>
                    </tr>
                </table>
            </div>
            <div id="projects" className="resume-section">
                <h3>Projects</h3>
                <h5>INTERACTIVE WEB APPLICATION</h5>
                <p><i>CAPSTONE PROJECT (JUNE 2023 - MAY 2024)</i></p>
                <p>Led the front-end development of an interactive timeline web application as part of my capstone project at university, employing the AGILE-SCRUM methodology and utilizing HTML, CSS, JavaScript and Bootstrap.</p>
                <b>Key Achievements</b>
                <ul>
                    <li>Received positive feedback from project managers for adhering to design specifications with 100% accuracy.</li>
                    <li>Streamlined team collaboration and project tracking through effective use of Git/ GitHub for version control</li>
                </ul>
                <h5>FULL-STACK MOVIE DATABASE WEB APPLICATION</h5>
                <p><i>COURSEWORK (MAY 2023 - JUNE 2023)</i></p>
                <p>Developed a fully responsive, full-stack web application that allows users to search for movies and view more detailed information using a REST API. The project mirrors the functionality of a movie database platform such as IMDB. Built using HTML, CSS, React,. Node.js, and Swagger.</p>
                <b>Key Achievements</b>
                <ul>
                    <li>Designed a responsive, user-friendly interface using modern UX principles and accessibility standards to ensure optimal viewing across devices.</li>
                    <li>Built a Node.js back-end integrated with Swagger API for dynamically fetching and displaying movie data.</li>
                    <li>Implemented user authentication with session management for a personalized user experience.</li>
                </ul>
            </div>
            <div id="non-technical-experience" className="resume-section">
                <h3 >Non-technical Experience</h3>
                <h5>HAIG RD. BISTRO</h5>
                <p><i>WAITRESS (DEC 2021 - PRESENT)</i></p>
                <ul>
                    <li>Enhanced communication, time-management, and problem-solving abilities, contributing to team success and high levels of customer satisfaction.</li>
                    <li>Managed high-volume service efficiently, demonstrating strong organizational skills, attention to detail, and ability to work under pressure.</li>
                    <li>Proactively identified and resolved issued, applying strong critical thinking to ensure customer satisfaction.</li>

                </ul>
            </div>
        </div>
    );
};