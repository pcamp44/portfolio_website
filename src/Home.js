import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

export default function Home() {
    return (
        <div>
            <div className="hero">
                <h1 className="heroSubtitle">Hey, I'm <br /><span className="heroTitle">Pauline</span></h1>
            </div>

            <div>
                <About />
                {/* Once we scroll pass the last element in the container, all elements stop becoming sticky so we can see the elements below it */}
                <Projects />
            </div>
            <Contact />

        </div>
    )
}