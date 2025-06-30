import { useSearchParams } from "react-router-dom";
import data from "../projects.json";
import { Badge, Card, CardImg} from "reactstrap";

const placeholderImg = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F013%2F734%2F292%2Foriginal%2Fmodern-laptop-mockup-front-view-and-smartphone-mockup-high-quality-isolated-on-white-background-notebook-mockup-and-phone-device-mockup-for-ui-ux-app-and-website-presentation-stock-vector.jpg&f=1&nofb=1&ipt=be79053a776cbcd6f020f6efc7fb73434f170e65bf3b9d97193907213d597ae1";

export default function ProjectDetailPage() {
    const [searchParams] = useSearchParams();
    const projectTitle = searchParams.get("projectTitle");
    const project = data.find(p => p.title === projectTitle);

    if (!project) {
        return <h1>Project not found</h1>
    }

    return (
        <div className="container py-5">
            <h1>{project.title}</h1>
            <h5 className="text-secondary">{project.start_date} - {project.end_date}</h5>
            <h5 className="skill-tags-wrapper">
                {project.tags.map((tag, index) => (
                    <Badge key={index} className="skill-tag">{tag}</Badge>
                ))}
            </h5>
            <Card inverse>
                <CardImg
                    alt={project.img? `${project.title} image` : "Placeholder image"}
                    src={project.img && project.img.trim() !== "" ? project.img : placeholderImg }
                    width="100%"
                    loading="lazy"
                />
            </Card>
            <div className="py-5 project-info">
                <h3>Overview</h3>
                <p>{project.overview}</p>
                <h3>Technologies Used</h3>
                <ul>
                    {project.technologies_used.map((technology, index) => (
                        <li key={index} className="technology-used">{technology}</li>
                    ))}
                </ul>
                <h3>Lessons Learnt</h3>
                <p>{project.lessons_learnt}</p>
            </div>
        </ div>
    );
}