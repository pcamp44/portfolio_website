import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

export default function Home() {
    return (
        <div>
            <div className="hero">
                <h1>Hey, I'm Pauline</h1>
                <div className="container">
                    <p>I am an aspiring full-stack web developer currently completing a Bachelor's degree in Information Technology (Computer Science) at the Queensland University of Technology.</p>
                </div>
            </div>

            <div>
                <Projects />
                <Skills />
            </div>

            <Contact />

        </div>
    )
}