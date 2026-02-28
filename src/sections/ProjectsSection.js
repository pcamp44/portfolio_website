import { useNavigate } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import data from "../projects.json";

const placeholderImg = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F013%2F734%2F292%2Foriginal%2Fmodern-laptop-mockup-front-view-and-smartphone-mockup-high-quality-isolated-on-white-background-notebook-mockup-and-phone-device-mockup-for-ui-ux-app-and-website-presentation-stock-vector.jpg&f=1&nofb=1&ipt=be79053a776cbcd6f020f6efc7fb73434f170e65bf3b9d97193907213d597ae1";

export default function ProjectsSection() {
  const navigate = useNavigate();

  return (
    <div className="projects-section">
      <div className="section-header">
        <div className="section-head">
          <span className="section-num">01</span>
          <span className="section-title">Projects</span>
        </div>
      </div>
      <div className="project-wrapper row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
        {data.map(project => (
          <div className="col" key={project.title}>
            <ProjectCard title={project.title} date={project.end_date} img={project.img || placeholderImg} onClick={() => navigate(`/project?projectTitle=${encodeURIComponent(project.title)}`)} />
          </div>
        ))}
      </div>
    </div>
  );
}