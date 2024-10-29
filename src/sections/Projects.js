import { Button, Badge } from "reactstrap";

export default function Projects() {
  return (
    <div className="container" id="projects" style={{ paddingBottom: '30px' }}>
      <h2>Projects</h2>
      {/* Project 1: Interactive timeline */}
      <div className="card card-1" id="project">
        <h3>Interactive Timeline</h3>
        <div className="row">
          <div className="col-lg-6 col-sm-12" style={{ display: "flex", flexDirection: 'column' }}>
            <p>
              An interactive visualization tool that enables a mining company's users to view a project's history on an interactive timeline.
              This application was built exclusively for the company and is incorporated on their website.
            </p>
            <div className="projectBadges">
              <Badge className="skillBadge" pill>JavaScript</Badge>
              <Badge className="skillBadge" pill>Python</Badge>
              <Badge className="skillBadge" pill>HTML</Badge>
              <Badge className="skillBadge" pill>CSS</Badge>
            </div>
            <p style={{ fontSize: '15px' }}>*Note: due to confidentiality agreements, detailed screenshots and code cannot be shared. However, I will be happy to discuss my contributions and the technoglies used in more depth during an interview.</p>
          </div>

          <div className="col-lg-6 col-sm-12" style={{display: 'flex', justifyContent:'center'}}>
            <p>Media goes here</p>
           {/*  <img src={require('../static/InteractiveTimeline.jpg')} alt="Interactive Timeline" style={{ width: '100%', height: '100%' }}></img> */}
          </div>
        </div>
      </div>
      {/* Project 2: Movie Website */}
      <div className="card card-2" id="project" style={{marginTop: '20px'}}>
        <h3>Movie Website</h3>

        <div className="row">
          <div className="col" style={{ display: "flex", flexDirection: 'column' }}>
            <p>
              A React-based web application modeled after IMDB. Users can view and analyze data about movies via a REST API.
            </p>
            <div className="projectBadges">
              <Badge className="skillBadge" pill>JavaScript</Badge>
              <Badge className="skillBadge" pill>Python</Badge>
              <Badge className="skillBadge" pill>HTML</Badge>
              <Badge className="skillBadge" pill>CSS</Badge>
            </div>
            <div className="row">
              <div className="col-6"> 
                <Button color="info"> View on GitHub</Button>
              </div>
              <div className="col-6">
                <Button color="info"> View on Replit</Button>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-sm-12" style={{display: 'flex', justifyContent:'center'}}>
            <p>Media goes here</p>
           {/*  <img src={require('../static/InteractiveTimeline.jpg')} alt="Interactive Timeline" style={{ width: '100%', height: '100%' }}></img> */}
          </div>
        </div>
      </div>

    </div>
  );
}