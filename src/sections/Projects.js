import { Button } from "reactstrap";

export default function Projects() {
  return (
    <div className="container" style={{ paddingBottom: '30px' }}>
      <h2>Projects</h2>
      {/* Project 1: Interactive timeline */}
      <div className="project">
        <h3>Interactive Timeline</h3>

        <div className="row">
          <div className="col" style={{ display: "flex", flexDirection: 'column' }}>
            <p>
              An interactive visualization tool that enables a mining company's users to view a project's history on an interactive timeline.
              This application was built exclusively for the company and is incorporated on their website.
            </p>
            <p style={{ fontSize: '15px' }}>*Note: due to confidentiality agreements, detailed screenshots and code cannot be shared. However, I will be happy to discuss my contributions and the technoglies used in more depth during an interview.</p>
          </div>

          <div className="col">
            <img src={require('../static/InteractiveTimeline.jpg')} alt="Interactive Timeline" style={{ width: '400px', height: '250px' }}></img>
          </div>
        </div>
      </div>
      {/* Project 2: Movie Website */}
      <div className="project">
        <h3>Movie Website</h3>

        <div className="row">
          <div className="col" style={{ display: "flex", flexDirection: 'column' }}>
            <p>
              A React-based web application modeled after IMDB. Users can view and analyze data about movies via a REST API.
            </p>
            <Button color="info">View on GitHub</Button>
          </div>

          <div className="col">
            <img src={require('../static/InteractiveTimeline.jpg')} alt="Interactive Timeline" style={{ width: '400px', height: '250px' }}></img>
          </div>
        </div>
      </div>

    </div>
  );
}