import ProjectsSection from "../sections/ProjectsSection";
import SkillsSection from "../sections/SkillsSection";
import AboutSection from "../sections/AboutSection";

export default function Home() {
    return (
        <div>
            {/* Hero */}
            <div className="hero container">
                <div className="speech-bubble"><h1 className="display-3 fw-medium">Hello, I'm Pauline</h1></div>
                <h3 className="fw-normal text-muted mb-3">BIT graduate & aspiring full-stack developer, driven by a passion for intuitive and aesthetic design to enhance user experiences.</h3>  
            </div>
            {/* Projects */}
            <ProjectsSection />
            {/* Skills */}
            <SkillsSection />
            {/* About */}
            <AboutSection />
        </div>
    )
}